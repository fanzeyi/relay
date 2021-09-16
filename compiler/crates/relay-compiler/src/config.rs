/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

use crate::build_project::generate_extra_artifacts::GenerateExtraArtifactsFn;
use crate::build_project::{
    artifact_writer::{ArtifactFileWriter, ArtifactWriter},
    AdditionalValidations,
};
use crate::compiler_state::{ProjectName, SourceSet};
use crate::errors::{ConfigValidationError, Error, Result};
use crate::rollout::Rollout;
use crate::saved_state::SavedStateLoader;
use crate::status_reporter::{ConsoleStatusReporter, StatusReporter};
use async_trait::async_trait;
use common::SourceLocationKey;
use fmt::Debug;
use fnv::{FnvBuildHasher, FnvHashSet};
use graphql_ir::{OperationDefinition, Program};
use indexmap::IndexMap;
use interner::{Intern, StringKey};
use persist_query::PersistError;
use rayon::prelude::*;
use regex::Regex;
use relay_codegen::JsModuleFormat;
use relay_transforms::{ConnectionInterface, FeatureFlags};
use relay_typegen::TypegenConfig;
use serde::{Deserialize, Serialize};
use sha1::{Digest, Sha1};
use std::fmt;
use std::path::{Path, PathBuf};
use std::sync::Arc;
use structopt::StructOpt;
use watchman_client::pdu::ScmAwareClockData;

type FnvIndexMap<K, V> = IndexMap<K, V, FnvBuildHasher>;

type PostArtifactsWriter = Box<
    dyn Fn(&Config) -> std::result::Result<(), Box<dyn std::error::Error + Send + Sync>>
        + Send
        + Sync,
>;
/// The full compiler config. This is a combination of:
/// - the configuration file
/// - the absolute path to the root of the compiled projects
/// - command line options
/// - TODO: injected code to produce additional files
pub struct Config {
    /// Optional name for this config. This might be used by compiler extension
    /// code like logging or extra artifact generation.
    pub name: Option<String>,
    /// Root directory of all projects to compile. Any other paths in the
    /// compiler should be relative to this root unless otherwise noted.
    pub root_dir: PathBuf,
    pub sources: FnvIndexMap<PathBuf, SourceSet>,
    pub excludes: Vec<String>,
    pub projects: FnvIndexMap<ProjectName, ProjectConfig>,
    pub header: Vec<String>,
    pub codegen_command: Option<String>,
    /// If set, tries to initialize the compiler from the saved state file.
    pub load_saved_state_file: Option<PathBuf>,
    /// Function to generate extra
    pub generate_extra_artifacts: Option<GenerateExtraArtifactsFn>,
    pub generate_virtual_id_file_name: Option<
        Box<
            dyn Fn(&ProjectConfig, &OperationDefinition, &Program) -> Option<StringKey>
                + Send
                + Sync,
        >,
    >,

    /// Path to which to write the output of the compilation
    pub artifact_writer: Box<dyn ArtifactWriter + Send + Sync>,

    /// Compile all files. Persist ids are still re-used unless
    /// `Config::repersist_operations` is also set.
    pub compile_everything: bool,

    /// Do not reuse persist ids from artifacts even if the text hash matches.
    pub repersist_operations: bool,

    pub connection_interface: ConnectionInterface,

    pub saved_state_config: Option<ScmAwareClockData>,
    pub saved_state_loader: Option<Box<dyn SavedStateLoader + Send + Sync>>,
    pub saved_state_version: String,

    /// Function that is called to save operation text (e.g. to a database) and to generate an id.
    pub operation_persister: Option<Box<dyn OperationPersister + Send + Sync>>,

    pub post_artifacts_write: Option<PostArtifactsWriter>,

    /// Validations that can be added to the config that will be called in addition to default
    /// validation rules.
    pub additional_validations: Option<AdditionalValidations>,

    pub status_reporter: Box<dyn StatusReporter + Send + Sync>,

    /// We may generate some content in the artifacts that's stripped in production if __DEV__ variable is set
    /// This config option is here to define the name of that special variable
    pub is_dev_variable_name: Option<String>,

    /// List with changed files in format "file_path,exists".
    /// This can be used to replace watchman queries
    pub changed_files_list: Option<PathBuf>,
}

#[derive(StructOpt)]
#[structopt(rename_all = "camel_case")]
pub struct CliConfig {
    /// Path for the directory where to search for source code
    #[structopt(long)]
    pub src: Option<PathBuf>,
    /// Path to schema file
    #[structopt(long)]
    pub schema: Option<PathBuf>,
    /// Path to a directory, where the compiler should write artifacts
    #[structopt(long)]
    pub artifact_directory: Option<PathBuf>,
}

impl CliConfig {
    pub fn is_defined(&self) -> bool {
        self.src.is_some() || self.schema.is_some() || self.artifact_directory.is_some()
    }
}

/// In the configs we may have a various values: with or without './' prefix at the beginning
/// This function will use `root_dir` to construct full path, canonicalize it, and then
/// it will remove the `root_dir` prefix.
fn normalize_path_from_config(root_dir: PathBuf, path_from_config: PathBuf) -> PathBuf {
    let mut src = root_dir.clone();
    src.push(path_from_config);
    src = src.canonicalize().unwrap();

    if !src.exists() {
        panic!("Path '{:?}' does not exits.", &src);
    }

    src.iter().skip(root_dir.iter().count()).collect()
}

impl From<CliConfig> for Config {
    fn from(cli_config: CliConfig) -> Self {
        let root_dir = std::env::current_dir().unwrap();

        let project_config = ProjectConfig {
            name: "default_project".intern(),
            base: None,
            enabled: true,
            extensions: vec![],
            output: cli_config
                .artifact_directory
                .map(|dir| normalize_path_from_config(root_dir.clone(), dir)),
            extra_artifacts_output: None,
            shard_output: false,
            shard_strip_regex: None,
            schema_location: SchemaLocation::File(normalize_path_from_config(
                root_dir.clone(),
                cli_config.schema.expect("Expect to have the schema path"),
            )),
            typegen_config: TypegenConfig::default(),
            persist: None,
            variable_names_comment: false,
            extra: Default::default(),
            feature_flags: Default::default(),
            filename_for_artifact: None,
            skip_types_for_artifact: None,
            rollout: Default::default(),
            js_module_format: Default::default(),
        };

        let mut sources = FnvIndexMap::default();
        let src = normalize_path_from_config(
            root_dir.clone(),
            cli_config.src.expect("Expect to have a `src`"),
        );

        sources.insert(src, SourceSet::SourceSetName(project_config.name));

        let mut projects = FnvIndexMap::default();
        projects.insert(project_config.name, project_config);

        Config {
            name: None,
            artifact_writer: Box::new(ArtifactFileWriter::new(None, root_dir.clone())),
            status_reporter: Box::new(ConsoleStatusReporter::new(root_dir.clone())),
            root_dir,
            sources,
            excludes: vec![],
            projects,
            header: vec![],
            codegen_command: None,
            load_saved_state_file: None,
            generate_extra_artifacts: None,
            generate_virtual_id_file_name: None,
            saved_state_config: None,
            saved_state_loader: None,
            saved_state_version: "MISSING".to_string(),
            connection_interface: ConnectionInterface::default(),
            operation_persister: None,
            compile_everything: false,
            repersist_operations: false,
            post_artifacts_write: None,
            additional_validations: None,
            is_dev_variable_name: None,
            changed_files_list: None,
        }
    }
}

impl Config {
    pub fn search(start_dir: &Path) -> Result<Self> {
        match js_config_loader::search("relay", start_dir) {
            Ok(Some(config)) => Self::from_struct(config.path, config.value, true),
            Ok(None) => Err(Error::ConfigNotFound),
            Err(error) => Err(Error::ConfigSearchError { error }),
        }
    }

    pub fn load(config_path: PathBuf) -> Result<Self> {
        let config_string =
            std::fs::read_to_string(&config_path).map_err(|err| Error::ConfigFileRead {
                config_path: config_path.clone(),
                source: err,
            })?;
        Self::from_string(config_path, &config_string, true)
    }

    /// Loads a config file without validation for use in tests.
    #[cfg(test)]
    pub fn from_string_for_test(config_string: &str) -> Result<Self> {
        Self::from_string(
            "/virtual/root/virtual_config.json".into(),
            config_string,
            false,
        )
    }

    /// `validate_fs` disables all filesystem checks for existence of files
    fn from_string(config_path: PathBuf, config_string: &str, validate_fs: bool) -> Result<Self> {
        let config_file: ConfigFile =
            serde_json::from_str(&config_string).map_err(|err| Error::ConfigFileParse {
                config_path: config_path.clone(),
                source: err,
            })?;
        Self::from_struct(config_path, config_file, validate_fs)
    }

    /// `validate_fs` disables all filesystem checks for existence of files
    fn from_struct(
        config_path: PathBuf,
        config_file: ConfigFile,
        validate_fs: bool,
    ) -> Result<Self> {
        let mut hash = Sha1::new();
        serde_json::to_writer(&mut hash, &config_file).unwrap();

        let ConfigFile {
            feature_flags: config_file_feature_flags,
            projects,
            ..
        } = config_file;
        let projects = projects
            .into_iter()
            .map(|(project_name, config_file_project)| {
                let schema_location =
                    match (config_file_project.schema, config_file_project.schema_dir) {
                        (Some(schema_file), None) => Ok(SchemaLocation::File(schema_file)),
                        (None, Some(schema_dir)) => Ok(SchemaLocation::Directory(schema_dir)),
                        _ => Err(Error::ConfigFileValidation {
                            config_path: config_path.clone(),
                            validation_errors: vec![
                                ConfigValidationError::ProjectNeedsSchemaXorSchemaDir {
                                    project_name,
                                },
                            ],
                        }),
                    }?;

                let shard_strip_regex = match config_file_project.shard_strip_regex {
                    None => Ok(None),
                    Some(ref val) => match Regex::new(val) {
                        Ok(val) => Ok(Some(val)),
                        Err(error) => Err(Error::ConfigFileValidation {
                            config_path: config_path.clone(),
                            validation_errors: vec![
                                ConfigValidationError::InvalidShardPathStripRegex {
                                    project_name,
                                    error,
                                },
                            ],
                        }),
                    },
                }?;

                let project_config = ProjectConfig {
                    name: project_name,
                    base: config_file_project.base,
                    enabled: true,
                    extensions: config_file_project.extensions,
                    output: config_file_project.output,
                    extra_artifacts_output: config_file_project.extra_artifacts_output,
                    shard_output: config_file_project.shard_output,
                    shard_strip_regex,
                    schema_location,
                    typegen_config: config_file_project.typegen_config,
                    persist: config_file_project.persist,
                    variable_names_comment: config_file_project.variable_names_comment,
                    extra: config_file_project.extra,
                    feature_flags: Arc::new(
                        config_file_project
                            .feature_flags
                            .unwrap_or_else(|| config_file_feature_flags.clone()),
                    ),
                    filename_for_artifact: None,
                    skip_types_for_artifact: None,
                    rollout: config_file_project.rollout,
                    js_module_format: config_file_project.js_module_format,
                };
                Ok((project_name, project_config))
            })
            .collect::<Result<FnvIndexMap<_, _>>>()?;

        let config_file_dir = config_path.parent().unwrap();
        let root_dir = if let Some(config_root) = config_file.root {
            config_file_dir.join(config_root).canonicalize().unwrap()
        } else {
            config_file_dir.to_owned()
        };

        let config = Self {
            name: config_file.name,
            artifact_writer: Box::new(ArtifactFileWriter::new(None, root_dir.clone())),
            status_reporter: Box::new(ConsoleStatusReporter::new(root_dir.clone())),
            root_dir,
            sources: config_file.sources,
            excludes: config_file.excludes,
            projects,
            header: config_file.header,
            codegen_command: config_file.codegen_command,
            load_saved_state_file: None,
            generate_extra_artifacts: None,
            generate_virtual_id_file_name: None,
            saved_state_config: config_file.saved_state_config,
            saved_state_loader: None,
            saved_state_version: hex::encode(hash.result()),
            connection_interface: config_file.connection_interface,
            operation_persister: None,
            compile_everything: false,
            repersist_operations: false,
            post_artifacts_write: None,
            additional_validations: None,
            is_dev_variable_name: config_file.is_dev_variable_name,
            changed_files_list: None,
        };

        let mut validation_errors = Vec::new();
        config.validate_consistency(&mut validation_errors);
        if validate_fs {
            config.validate_paths(&mut validation_errors);
        }
        if validation_errors.is_empty() {
            Ok(config)
        } else {
            Err(Error::ConfigFileValidation {
                config_path,
                validation_errors,
            })
        }
    }

    /// Iterator over projects that are enabled.
    pub fn enabled_projects(&self) -> impl Iterator<Item = &ProjectConfig> {
        self.projects
            .values()
            .filter(|project_config| project_config.enabled)
    }

    /// Rayon parallel iterator over projects that are enabled.
    pub fn par_enabled_projects(&self) -> impl ParallelIterator<Item = &ProjectConfig> {
        self.projects
            .par_iter()
            .map(|(_project_name, project_config)| project_config)
            .filter(|project_config| project_config.enabled)
    }

    /// Validated internal consistency of the config.
    fn validate_consistency(&self, errors: &mut Vec<ConfigValidationError>) {
        let mut source_set_names = FnvHashSet::default();
        for value in self.sources.values() {
            match value {
                SourceSet::SourceSetName(name) => {
                    source_set_names.insert(*name);
                }
                SourceSet::SourceSetNames(names) => {
                    for name in names {
                        source_set_names.insert(*name);
                    }
                }
            };
        }

        for (&project_name, project_config) in &self.projects {
            // there should be a source for each project matching the project name
            if !source_set_names.contains(&project_name) {
                errors.push(ConfigValidationError::ProjectSourceMissing { project_name });
            }

            // If a base of the project is set, it should exist
            if let Some(base_name) = project_config.base {
                if self.projects.get(&base_name).is_none() {
                    errors.push(ConfigValidationError::ProjectBaseMissing {
                        project_name,
                        base_project_name: base_name,
                    })
                }
            }
        }
    }

    /// Validates that all paths actually exist on disk.
    fn validate_paths(&self, errors: &mut Vec<ConfigValidationError>) {
        if !self.root_dir.is_dir() {
            errors.push(ConfigValidationError::RootNotDirectory {
                root_dir: self.root_dir.clone(),
            });
            // early return, no point in continuing validation
            return;
        }

        // each source should point to an existing directory
        for source_dir in self.sources.keys() {
            let abs_source_dir = self.root_dir.join(source_dir);
            if !abs_source_dir.exists() {
                errors.push(ConfigValidationError::SourceNotExistent {
                    source_dir: abs_source_dir.clone(),
                });
            } else if !abs_source_dir.is_dir() {
                errors.push(ConfigValidationError::SourceNotDirectory {
                    source_dir: abs_source_dir.clone(),
                });
            }
        }

        for (&project_name, project) in &self.projects {
            match &project.schema_location {
                SchemaLocation::File(schema_file) => {
                    let abs_schema_file = self.root_dir.join(schema_file);
                    if !abs_schema_file.exists() {
                        errors.push(ConfigValidationError::SchemaFileNotExistent {
                            project_name,
                            schema_file: abs_schema_file.clone(),
                        });
                    } else if !abs_schema_file.is_file() {
                        errors.push(ConfigValidationError::SchemaFileNotFile {
                            project_name,
                            schema_file: abs_schema_file.clone(),
                        });
                    }
                }
                SchemaLocation::Directory(schema_dir) => {
                    let abs_schema_dir = self.root_dir.join(schema_dir);
                    if !abs_schema_dir.exists() {
                        errors.push(ConfigValidationError::SchemaDirNotExistent {
                            project_name,
                            schema_dir: abs_schema_dir.clone(),
                        });
                    } else if !abs_schema_dir.is_dir() {
                        errors.push(ConfigValidationError::SchemaDirNotDirectory {
                            project_name,
                            schema_dir: abs_schema_dir.clone(),
                        });
                    }
                }
            }
        }
    }
}

impl fmt::Debug for Config {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let Config {
            name,
            artifact_writer: _,
            root_dir,
            sources,
            excludes,
            compile_everything,
            repersist_operations,
            projects,
            header,
            codegen_command,
            load_saved_state_file,
            generate_extra_artifacts,
            saved_state_config,
            saved_state_loader,
            connection_interface,
            saved_state_version,
            operation_persister,
            post_artifacts_write,
            ..
        } = self;

        fn option_fn_to_string<T>(option: &Option<T>) -> &'static str {
            if option.is_some() { "Some(Fn)" } else { "None" }
        }

        f.debug_struct("Config")
            .field("name", name)
            .field("root_dir", root_dir)
            .field("sources", sources)
            .field("excludes", excludes)
            .field("compile_everything", compile_everything)
            .field("repersist_operations", repersist_operations)
            .field("projects", projects)
            .field("header", header)
            .field("codegen_command", codegen_command)
            .field("load_saved_state_file", load_saved_state_file)
            .field("saved_state_config", saved_state_config)
            .field(
                "operation_persister",
                &option_fn_to_string(operation_persister),
            )
            .field(
                "generate_extra_artifacts",
                &option_fn_to_string(generate_extra_artifacts),
            )
            .field(
                "saved_state_loader",
                &option_fn_to_string(saved_state_loader),
            )
            .field("connection_interface", connection_interface)
            .field("saved_state_version", saved_state_version)
            .field(
                "post_artifacts_write",
                &option_fn_to_string(post_artifacts_write),
            )
            .finish()
    }
}

pub struct ProjectConfig {
    pub name: ProjectName,
    pub base: Option<ProjectName>,
    pub output: Option<PathBuf>,
    pub extra_artifacts_output: Option<PathBuf>,
    pub shard_output: bool,
    pub shard_strip_regex: Option<Regex>,
    pub extensions: Vec<PathBuf>,
    pub enabled: bool,
    pub schema_location: SchemaLocation,
    pub typegen_config: TypegenConfig,
    pub persist: Option<PersistConfig>,
    pub variable_names_comment: bool,
    pub extra: Option<FnvIndexMap<String, String>>,
    pub feature_flags: Arc<FeatureFlags>,
    pub filename_for_artifact:
        Option<Box<dyn (Fn(SourceLocationKey, StringKey) -> String) + Send + Sync>>,
    pub skip_types_for_artifact: Option<Box<dyn (Fn(SourceLocationKey) -> bool) + Send + Sync>>,
    pub rollout: Rollout,
    pub js_module_format: JsModuleFormat,
}

impl Debug for ProjectConfig {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let ProjectConfig {
            name,
            base,
            output,
            extra_artifacts_output,
            shard_output,
            shard_strip_regex,
            extensions,
            enabled,
            schema_location,
            typegen_config,
            persist,
            variable_names_comment,
            extra,
            feature_flags,
            filename_for_artifact,
            skip_types_for_artifact,
            rollout,
            js_module_format,
        } = self;
        f.debug_struct("ProjectConfig")
            .field("name", name)
            .field("base", base)
            .field("output", output)
            .field("extra_artifacts_output", extra_artifacts_output)
            .field("shard_output", shard_output)
            .field("shard_strip_regex", shard_strip_regex)
            .field("extensions", extensions)
            .field("enabled", enabled)
            .field("schema_location", schema_location)
            .field("typegen_config", typegen_config)
            .field("persist", persist)
            .field("variable_names_comment", variable_names_comment)
            .field("extra", extra)
            .field("feature_flags", feature_flags)
            .field(
                "filename_for_artifact",
                &if filename_for_artifact.is_some() {
                    "Some<Fn>"
                } else {
                    "None"
                },
            )
            .field(
                "skip_types_for_artifact",
                &if skip_types_for_artifact.is_some() {
                    "Some<Fn>"
                } else {
                    "None"
                },
            )
            .field("rollout", rollout)
            .field("js_module_format", js_module_format)
            .finish()
    }
}

#[derive(Clone, Debug)]
pub enum SchemaLocation {
    File(PathBuf),
    Directory(PathBuf),
}

/// Schema of the compiler configuration JSON file.
#[derive(Debug, Serialize, Deserialize)]
#[serde(deny_unknown_fields, rename_all = "camelCase")]
struct ConfigFile {
    /// Optional name for this config, might be used for logging or custom extra
    /// artifact generator code.
    #[serde(default)]
    name: Option<String>,

    /// Root directory relative to the config file. Defaults to the directory
    /// where the config is located.
    #[serde(default)]
    root: Option<PathBuf>,

    #[serde(default)]
    header: Vec<String>,
    #[serde(default)]
    codegen_command: Option<String>,

    /// A mapping from directory paths (relative to the root) to a source set.
    /// If a path is a subdirectory of another path, the more specific path
    /// wins.
    sources: IndexMap<PathBuf, SourceSet, fnv::FnvBuildHasher>,

    /// Glob patterns that should not be part of the sources even if they are
    /// in the source set directories.
    #[serde(default)]
    excludes: Vec<String>,

    /// Configuration of projects to compile.
    projects: FnvIndexMap<ProjectName, ConfigFileProject>,

    #[serde(default)]
    connection_interface: ConnectionInterface,

    #[serde(default)]
    feature_flags: FeatureFlags,

    /// Watchman saved state config.
    saved_state_config: Option<ScmAwareClockData>,

    /// Then name of the global __DEV__ variable to use in generated artifacts
    is_dev_variable_name: Option<String>,
}

#[derive(Debug, Deserialize, Serialize)]
#[serde(deny_unknown_fields, rename_all = "camelCase")]
struct ConfigFileProject {
    /// If a base project is set, the documents of that project can be
    /// referenced, but won't produce output artifacts.
    /// Extensions from the base project will be added as well and the schema
    /// of the base project should be a subset of the schema of this project.
    #[serde(default)]
    base: Option<ProjectName>,

    /// A project without an output directory will put the generated files in
    /// a __generated__ directory next to the input file.
    /// All files in these directories should be generated by the Relay
    /// compiler, so that the compiler can cleanup extra files.
    #[serde(default)]
    output: Option<PathBuf>,

    /// Some projects may need to generate extra artifacts. For those, we may
    /// need to provide an additional directory to put them.
    /// By default the will use `output` *if available
    extra_artifacts_output: Option<PathBuf>,

    /// If `output` is provided and `shard_output` is `true`, shard the files
    /// by putting them under `{output_dir}/{source_relative_path}`
    #[serde(default)]
    shard_output: bool,

    /// Regex to match and strip parts of the `source_relative_path`
    #[serde(default)]
    shard_strip_regex: Option<String>,

    /// Directory containing *.graphql files with schema extensions.
    #[serde(default)]
    extensions: Vec<PathBuf>,

    /// Path to the schema.graphql or a directory containing a schema broken up
    /// in multiple *.graphql files.
    /// Exactly 1 of these options needs to be defined.
    schema: Option<PathBuf>,
    schema_dir: Option<PathBuf>,

    /// If this option is set, the compiler will persist queries using this
    /// config.
    persist: Option<PersistConfig>,

    #[serde(flatten)]
    typegen_config: TypegenConfig,

    /// Generates a `// @relayVariables name1 name2` header in generated operation files
    #[serde(default)]
    variable_names_comment: bool,

    extra: Option<FnvIndexMap<String, String>>,

    #[serde(default)]
    feature_flags: Option<FeatureFlags>,

    /// A generic rollout state for larger codegen changes. The default is to
    /// pass, otherwise it should be a number between 0 and 100 as a percentage.
    #[serde(default)]
    pub rollout: Rollout,

    #[serde(default)]
    js_module_format: JsModuleFormat,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(deny_unknown_fields)]
pub struct PersistConfig {
    /// URL to send a POST request to to persist.
    pub url: String,
    /// The document will be in a POST parameter `text`. This map can contain
    /// additional parameters to send.
    pub params: FnvIndexMap<String, String>,
}

type PersistId = String;

#[async_trait]
pub trait OperationPersister {
    async fn persist_artifact(
        &self,
        artifact_text: String,
        project_config: &PersistConfig,
    ) -> std::result::Result<PersistId, PersistError>;

    fn worker_count(&self) -> usize;
}
