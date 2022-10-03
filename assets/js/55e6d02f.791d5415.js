"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[86321],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){return function(n){var t=m(n.components);return a.createElement(e,i({},n,{components:t}))}},m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=m(t),c=r,h=u["".concat(l,".").concat(c)]||u[c]||p[c]||i;return t?a.createElement(h,o(o({ref:n},s),{},{components:t})):a.createElement(h,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=h;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(39960),r=t(86341),i=t(67294);function l(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var d=function(){var e=i.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:l},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},m=function(){return i.createElement(o,null,i.createElement(s,null),i.createElement(d,null),i.createElement(u,null))},c=function(){return i.createElement(o,null,i.createElement(d,null),i.createElement(u,null))};const p=function(){return(0,r.fbContent)({internal:i.createElement(m,null),external:i.createElement(c,null)})}},43402:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>c});var a,r=t(83117),i=t(80102),l=(t(67294),t(3905)),o=(t(68629),["components"]),d={id:"required-directive",title:"@required Directive",slug:"/guides/required-directive/",description:"Relay guide to @required",keywords:["required","directive","optional","nullthrows"]},s=void 0,u={unversionedId:"guides/required-directive",id:"version-v13.0.0/guides/required-directive",title:"@required Directive",description:"Relay guide to @required",source:"@site/versioned_docs/version-v13.0.0/guides/required-directive.md",sourceDirName:"guides",slug:"/guides/required-directive/",permalink:"/docs/v13.0.0/guides/required-directive/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/guides/required-directive.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1664836200,formattedLastUpdatedAt:"Oct 3, 2022",frontMatter:{id:"required-directive",title:"@required Directive",slug:"/guides/required-directive/",description:"Relay guide to @required",keywords:["required","directive","optional","nullthrows"]},sidebar:"version-v13.0.0/docs",previous:{title:"Testing Relay with Preloaded Queries",permalink:"/docs/v13.0.0/guides/testing-relay-with-preloaded-queries/"},next:{title:"Upgrading to Relay Hooks",permalink:"/docs/v13.0.0/migration-and-compatibility/"}},m={},c=[{value:"Action",id:"action",level:2},{value:"<code>NONE</code> (expected)",id:"none-expected",level:3},{value:"<code>LOG</code> (recoverable)",id:"log-recoverable",level:3},{value:"<code>THROW</code> (unrecoverable)",id:"throw-unrecoverable",level:3},{value:"Locality",id:"locality",level:2},{value:"Examples",id:"examples",level:2},{value:"Chaining",id:"chaining",level:3},{value:"FAQ",id:"faq",level:2},{value:"Why did @required make a non-nullable field/root nullable?",id:"why-did-required-make-a-non-nullable-fieldroot-nullable",level:3},{value:"What happens if you use <code>@required</code> in a plural field",id:"what-happens-if-you-use-required-in-a-plural-field",level:3},{value:"Why are @required fields in an inline fragment still nullable?",id:"why-are-required-fields-in-an-inline-fragment-still-nullable",level:3},{value:"Why not implement this at the schema/server level?",id:"why-not-implement-this-at-the-schemaserver-level",level:3},{value:"Can <code>(action: NONE)</code> be the default?",id:"can-action-none-be-the-default",level:3},{value:"Does @required change anything about the logger project field?",id:"does-required-change-anything-about-the-logger-project-field",level:3}],p=(a="FbInternalOnly",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),h={toc:c};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.mdx)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"@required"),' is a directive you can add to fields in your Relay queries to declare how null values should be handled at runtime. You can think of it as saying "if this field is ever null, its parent field is invalid and should be null".'),(0,l.mdx)("p",null,'When you have a GraphQL schema where many fields are nullable, a considerable amount of product code is needed to handle each field\'s potential "nullness" before the underlying data can be used. With ',(0,l.mdx)("inlineCode",{parentName:"p"},"@required"),", Relay can handle some types of null checks before it returns data to your component, which means that ",(0,l.mdx)("strong",{parentName:"p"},"any field you annotate with")," ",(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"strong"},"@required"))," ",(0,l.mdx)("strong",{parentName:"p"},"will become non-nullable in the generated types for your response"),"."),(0,l.mdx)("p",null,"If a ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required"),' field is null at runtime, Relay will "bubble" that nullness up to the field\'s parent. For example, given this query:'),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"query MyQuery {\n  viewer {\n    name @required(action: LOG)\n    age\n  }\n}\n")),(0,l.mdx)("p",null,"If ",(0,l.mdx)("inlineCode",{parentName:"p"},"name")," is null, relay would return ",(0,l.mdx)("inlineCode",{parentName:"p"},"{ viewer: null }"),". You can think of ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required"),' in this instance as saying "',(0,l.mdx)("inlineCode",{parentName:"p"},"viewer")," is useless without a ",(0,l.mdx)("inlineCode",{parentName:"p"},"name"),'".'),(0,l.mdx)("h2",{id:"action"},"Action"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," directive has a required ",(0,l.mdx)("inlineCode",{parentName:"p"},"action")," argument which has three possible values:"),(0,l.mdx)("h3",{id:"none-expected"},(0,l.mdx)("inlineCode",{parentName:"h3"},"NONE")," (expected)"),(0,l.mdx)("p",null,"This field is expected to be null sometimes."),(0,l.mdx)("h3",{id:"log-recoverable"},(0,l.mdx)("inlineCode",{parentName:"h3"},"LOG")," (recoverable)"),(0,l.mdx)("p",null,"This value is not expected to ever be null, but the component ",(0,l.mdx)("strong",{parentName:"p"},"can still render")," if it is. If a field with ",(0,l.mdx)("inlineCode",{parentName:"p"},"action: LOG")," is null, the Relay environment logger will receive an event that looks like this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"{\n  name: 'read.missing_required_field',\n  owner: string, // MyFragmentOrQueryName\n  fieldPath: string, // path.to.my.field\n};\n")),(0,l.mdx)("h3",{id:"throw-unrecoverable"},(0,l.mdx)("inlineCode",{parentName:"h3"},"THROW")," (unrecoverable)"),(0,l.mdx)("p",null,"This value should not be null, and the component ",(0,l.mdx)("strong",{parentName:"p"},"cannot render without it"),". If a field with ",(0,l.mdx)("inlineCode",{parentName:"p"},"action: THROW")," is null at runtime, the component which reads that field ",(0,l.mdx)("strong",{parentName:"p"},"will throw during render"),". The error message includes both the owner and field path. Only use this option if your component is contained within an ",(0,l.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html"},"error boundary"),"."),(0,l.mdx)("h2",{id:"locality"},"Locality"),(0,l.mdx)("p",null,"A field's ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," status is ",(0,l.mdx)("strong",{parentName:"p"},"local to the fragment where it is specified"),". This allows you to add add/remove the directive without having to think about anything outside the scope of your component."),(0,l.mdx)("p",null,"This choice reflects the fact that some components may be able to recover better from missing data than others. For example, a ",(0,l.mdx)("inlineCode",{parentName:"p"},"<RestaurantInfo />")," component could probably render something sensible even if the restaurant's address is missing, but a ",(0,l.mdx)("inlineCode",{parentName:"p"},"<RestaurantLocationMap />")," component might not."),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)("h3",{id:"chaining"},"Chaining"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," directives can be chained to make a deeply nested field accessible after just one null check:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"const user = useFragment(graphql`\n  fragment MyUser on User {\n    name @required(action: LOG)\n    profile_picture @required(action: LOG) {\n      url @required(action: LOG)\n    }\n  }`, key);\n if(user == null) {\n   return null;\n }\n return <img src={user.profile_picture.url} alt={user.name} />\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Note"),": If you use ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," on a top level field of a fragment, the object returned from ",(0,l.mdx)("inlineCode",{parentName:"p"},"useFragment")," itself may become nullable. The generated types will reflect this."),(0,l.mdx)("h2",{id:"faq"},"FAQ"),(0,l.mdx)("h3",{id:"why-did-required-make-a-non-nullable-fieldroot-nullable"},"Why did @required make a non-nullable field/root nullable?"),(0,l.mdx)("p",null,"When using the ",(0,l.mdx)("inlineCode",{parentName:"p"},"LOG")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"NONE"),' actions, Relay will "bubble" a missing field up to its parent field or fragment root. This means that adding ',(0,l.mdx)("inlineCode",{parentName:"p"},"@required(action: LOG)")," (for example) to a child of a non-nullable fragment root will cause the type of the fragment root to become nullable."),(0,l.mdx)("h3",{id:"what-happens-if-you-use-required-in-a-plural-field"},"What happens if you use ",(0,l.mdx)("inlineCode",{parentName:"h3"},"@required")," in a plural field"),(0,l.mdx)("p",null,"If a ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required(action: LOG)")," field is missing in a plural field, the ",(0,l.mdx)("em",{parentName:"p"},"item")," in the list will be returned as null. It will ",(0,l.mdx)("em",{parentName:"p"},"not")," cause the entire array to become null.. If you have any question about how it will behave, you can inspect the generated Flow types."),(0,l.mdx)("h3",{id:"why-are-required-fields-in-an-inline-fragment-still-nullable"},"Why are @required fields in an inline fragment still nullable?"),(0,l.mdx)("p",null,"Imagine a fragment like this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment MyFrag on Actor {\n  ... on User {\n    name @required(action: THROW)\n  }\n}\n")),(0,l.mdx)("p",null,"It's possible that your ",(0,l.mdx)("inlineCode",{parentName:"p"},"Actor")," will not be at ",(0,l.mdx)("inlineCode",{parentName:"p"},"User")," and therefore not include a ",(0,l.mdx)("inlineCode",{parentName:"p"},"name"),". To represent that in types, we generate a Flow type that looks like this: ",(0,l.mdx)("inlineCode",{parentName:"p"},"{name?: string}"),"."),(0,l.mdx)("p",null,"If you encounter this issue, you can add a ",(0,l.mdx)("inlineCode",{parentName:"p"},"__typename")," like this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment MyFrag on Actor {\n  __typename\n  ... on User {\n    name @required(action: THROW)\n  }\n}\n")),(0,l.mdx)("p",null,"In this situation Relay will generate a union type like: ",(0,l.mdx)("inlineCode",{parentName:"p"},"{__typename: 'User', name: string} | {__typename: '%ignore this%}"),". Now you can check the ",(0,l.mdx)("inlineCode",{parentName:"p"},"__typename")," field to narrow your object's type down to one that has a non-nullalble ",(0,l.mdx)("inlineCode",{parentName:"p"},"name"),"."),(0,l.mdx)(p,{mdxType:"FbInternalOnly"},"Example diff showing the adoption of this strategy: D24370183"),(0,l.mdx)("h3",{id:"why-not-implement-this-at-the-schemaserver-level"},"Why not implement this at the schema/server level?"),(0,l.mdx)("p",null,'The "requiredness" of a field is actually a product decision and not a schema question. Therefore we need to implement the handling of it at the product level. Individual components need to be able to decide for themselves how to handle a missing value.'),(0,l.mdx)("p",null,"For example, if a notification is trying to show the price for a Marketplace listing, it could probably just omit the price and still render. If payment flow for that same listing is missing the price, it should probably blow up."),(0,l.mdx)("p",null,"Another issue is that changes to the server schema are much more difficult to ship since they affect all existing clients across all platforms."),(0,l.mdx)("p",null,"Basically every value returned by Relay is nullable. This is intentional since we want to be able to handle field-level errors whenever possible. If we lean into KillsParentOnException we would end up wanting to make basically every field use it and our apps would be becomes more brittle since errors which used to be small, become large."),(0,l.mdx)(p,{mdxType:"FbInternalOnly"},(0,l.mdx)("p",null,(0,l.mdx)("em",{parentName:"p"},"Extracted from ",(0,l.mdx)("a",{parentName:"em",href:"https://fb.workplace.com/groups/cometeng/permalink/937671436726844/?comment_id=937681186725869"},"this comment thread"),"."),"\n",(0,l.mdx)("em",{parentName:"p"},"Further discussion in ",(0,l.mdx)("a",{parentName:"em",href:"https://fb.workplace.com/groups/cometeng/permalink/937671436726844/?comment_id=938335873327067"},"this comment thread"),"."))),(0,l.mdx)("h3",{id:"can-action-none-be-the-default"},"Can ",(0,l.mdx)("inlineCode",{parentName:"h3"},"(action: NONE)")," be the default?"),(0,l.mdx)("p",null,"On one hand action: NONE makes the most sense as a default (omitted action == no action). However, we are aware that whichever value we choose as the default will be considered the default action for engineers to choose since it's the path of least resistance."),(0,l.mdx)("p",null,"We actually believe that in most cases LOG is the most ideal choice. It gives the component a chance to gracefully recover while also giving us signal that a part of our app is rendering in a sub-optimal way."),(0,l.mdx)("p",null,"We debated making LOG the default action for that reason, but I think that's confusing as well."),(0,l.mdx)("p",null,"So, for now we are planning to not offer a default argument. After all, it's still much less to write out than the equivalent manual null checks. Once we see how people use it we will consider what value (if any) should be the default."),(0,l.mdx)(p,{mdxType:"FbInternalOnly"},(0,l.mdx)("h3",{id:"does-required-change-anything-about-the-logger-project-field"},"Does @required change anything about the logger project field?"),(0,l.mdx)("p",null,"When using recoverableViolation or unrecoverableViolation, the second argument is the FBLogger project name (",(0,l.mdx)("a",{parentName:"p",href:"https://fburl.com/diffusion/rn99dl4s"},"defined on Comet here"),"):"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"recoverableViolation('My error string', 'my_logger_project');\n")),(0,l.mdx)("p",null,"When you switch to using ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required"),", any ",(0,l.mdx)("inlineCode",{parentName:"p"},"THROW")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"LOG")," actions will log to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"relay-required")," logger project instead (",(0,l.mdx)("a",{parentName:"p",href:"https://fburl.com/logview/l40t7cjv"},"see here in logview"),")."),(0,l.mdx)("p",null,"For most teams, this shouldn't be an issue; care has been taken to ensure tasks still get routed to the correct owner of the file that is using ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required"),". However, if your team has any queries that utilize the logger project field, you may want to consider the implications.")))}f.isMDXComponent=!0}}]);