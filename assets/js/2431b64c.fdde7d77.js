"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[5429],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>s});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){return function(t){var n=d(t.components);return a.createElement(e,o({},t,{components:n}))}},d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=d(n),m=i,f=s["".concat(r,".").concat(m)]||s[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(39960),i=n(44256),o=n(67294);function r(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var u=function(){var e=o.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:r},"Filing a task"))},s=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return o.createElement(l,null,o.createElement(c,null),o.createElement(u,null),o.createElement(s,null))},m=function(){return o.createElement(l,null,o.createElement(u,null),o.createElement(s,null))};const p=function(){return(0,i.fbContent)({internal:o.createElement(d,null),external:o.createElement(m,null)})}},37007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>m,toc:()=>f});var a,i=n(83117),o=n(80102),r=(n(67294),n(3905)),l=n(68629),u=n(44256),c=["components"],s={id:"use-mutation",title:"useMutation",slug:"/api-reference/use-mutation/",description:"API reference for useMutation, a React hook used to execute a GraphQL mutation",keywords:["mutation"]},d=void 0,m={unversionedId:"api-reference/hooks/use-mutation",id:"api-reference/hooks/use-mutation",title:"useMutation",description:"API reference for useMutation, a React hook used to execute a GraphQL mutation",source:"@site/docs/api-reference/hooks/use-mutation.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-mutation/",permalink:"/docs/next/api-reference/use-mutation/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/api-reference/hooks/use-mutation.md",tags:[],version:"current",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1662693818,formattedLastUpdatedAt:"9/9/2022",frontMatter:{id:"use-mutation",title:"useMutation",slug:"/api-reference/use-mutation/",description:"API reference for useMutation, a React hook used to execute a GraphQL mutation",keywords:["mutation"]},sidebar:"docs",previous:{title:"usePaginationFragment",permalink:"/docs/next/api-reference/use-pagination-fragment/"},next:{title:"useSubscription",permalink:"/docs/next/api-reference/use-subscription/"}},p={},f=[{value:"<code>useMutation</code>",id:"usemutation",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",level:3},{value:"Return Value",id:"return-value",level:3}],h=(a="FbUseMutationParameter",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),y={toc:f};function b(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.mdx)("wrapper",(0,i.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"usemutation"},(0,r.mdx)("inlineCode",{parentName:"h2"},"useMutation")),(0,r.mdx)("p",null,"Hook used to execute a mutation in a React component."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FeedbackLikeMutation} from 'FeedbackLikeMutation.graphql';\nconst React = require('React');\n\nconst {graphql, useMutation} = require('react-relay');\n\nfunction LikeButton() {\n  const [commit, isInFlight] = useMutation<FeedbackLikeMutation>(graphql`\n    mutation FeedbackLikeMutation($input: FeedbackLikeData!) {\n      feedback_like(data: $input) {\n        feedback {\n          id\n          viewer_does_like\n          like_count\n        }\n      }\n    }\n  `);\n\n  if (isInFlight) {\n    return <Spinner />;\n  }\n\n  return (\n    <button\n      onClick={() => {\n        commit({\n          variables: {\n            input: {\n              id: '123',\n              text: 'text',\n            },\n          },\n          onCompleted(data) {\n            console.log(data);\n          },\n        });\n      }}\n    />\n  );\n}\n")),(0,r.mdx)("h3",{id:"arguments"},"Arguments"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"mutation"),": GraphQL mutation specified using a ",(0,r.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal.")),(0,r.mdx)(u.OssOnly,{mdxType:"OssOnly"},(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"commitMutationFn"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"<T: MutationParameters>(IEnvironment, MutationConfig<T>): Disposable"),". ",(0,r.mdx)("em",{parentName:"li"},(0,r.mdx)("em",{parentName:"em"},"[Optional]"))," A function with the same signature as ",(0,r.mdx)("a",{parentName:"li",href:"../commit-mutation"},(0,r.mdx)("inlineCode",{parentName:"a"},"commitMutation")),", which will be called in its stead. Defaults to ",(0,r.mdx)("inlineCode",{parentName:"li"},"commitMutation"),"."))),(0,r.mdx)(h,{mdxType:"FbUseMutationParameter"}),(0,r.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"TMutation"),": Type parameter that should corresponds the Flow type for the mutation query. This type is available to import from the the auto-generated file: ",(0,r.mdx)("inlineCode",{parentName:"li"},"<mutationName>.graphql.js"),".")),(0,r.mdx)("h3",{id:"return-value"},"Return Value"),(0,r.mdx)("p",null,"Tuple containing the following values:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"[0]"," ",(0,r.mdx)("inlineCode",{parentName:"li"},"commitMutation"),": The function that will execute the mutation",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Arguments, the syntax signature is almost the same as our ",(0,r.mdx)("inlineCode",{parentName:"li"},"commitMutation")," API",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"variables"),": Object containing the variables needed for the mutation. For example, if the mutation defines an ",(0,r.mdx)("inlineCode",{parentName:"li"},"$input")," variable, this object should contain an ",(0,r.mdx)("inlineCode",{parentName:"li"},"input")," key, whose shape must match the shape of the data expected by the mutation as defined by the GraphQL schema."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"onCompleted"),": Callback function executed when the request is completed and the in-memory Relay store is updated with the ",(0,r.mdx)("inlineCode",{parentName:"li"},"updater")," function. Takes a ",(0,r.mdx)("inlineCode",{parentName:"li"},"response"),' object, which is the "raw" server response. Internally ',(0,r.mdx)("inlineCode",{parentName:"li"},"errors")," are not allowed, ",(0,r.mdx)("inlineCode",{parentName:"li"},"CRITICAL")," error will be thrown in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onError")," handler."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"onError"),": Callback function executed if Relay encounters an error during the request. Internally, ",(0,r.mdx)("inlineCode",{parentName:"li"},"CRITICAL")," error during reading the mutation result on the server"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"optimisticResponse"),": Object containing the data to optimistically update the local in-memory store, i.e. immediately, before the mutation request has completed. This object must have the same shape as the mutation's response type, as defined by the GraphQL schema. If provided, Relay will use the ",(0,r.mdx)("inlineCode",{parentName:"li"},"optimisticResponse")," data to update the fields on the relevant records in the local data store, ",(0,r.mdx)("em",{parentName:"li"},"before")," ",(0,r.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater")," is executed. If an error occurs during the mutation request, the optimistic update will be rolled back."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater"),": Function used to optimistically update the local in-memory store, i.e. immediately, before the mutation request has completed. If an error occurs during the mutation request, the optimistic update will be rolled back. This function takes a ",(0,r.mdx)("inlineCode",{parentName:"li"},"store"),", which is a proxy of the in-memory ",(0,r.mdx)("a",{parentName:"li",href:"../store/"},"Relay Store"),". In this function, the client defines how to update the local data via the ",(0,r.mdx)("inlineCode",{parentName:"li"},"store")," instance. For details on how to use the ",(0,r.mdx)("inlineCode",{parentName:"li"},"store"),", please refer to our ",(0,r.mdx)("a",{parentName:"li",href:"../store/"},"Relay Store API Reference"),". Please note:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"It is usually preferable to just pass an ",(0,r.mdx)("inlineCode",{parentName:"li"},"optimisticResponse")," option instead of an ",(0,r.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater"),", unless you need to perform updates on the local records that are more complicated than just updating fields (e.g. deleting records or adding items to collections)."),(0,r.mdx)("li",{parentName:"ul"},"If you do decide to use an ",(0,r.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater"),", often times it can be the same function as ",(0,r.mdx)("inlineCode",{parentName:"li"},"updater"),"."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"updater"),": Function used to update the local in-memory store based on the real server response from the mutation. If ",(0,r.mdx)("inlineCode",{parentName:"li"},"updater")," is not provided, by default, Relay will know to automatically update the fields on the records referenced in the mutation response; however, you should pass an ",(0,r.mdx)("inlineCode",{parentName:"li"},"updater")," if you need to make more complicated updates than just updating fields (e.g. deleting records or adding items to collections). When the server response comes back, Relay first reverts any changes introduced by ",(0,r.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater")," or ",(0,r.mdx)("inlineCode",{parentName:"li"},"optimisticResponse")," and will then execute ",(0,r.mdx)("inlineCode",{parentName:"li"},"updater"),". This function takes a ",(0,r.mdx)("inlineCode",{parentName:"li"},"store"),", which is a proxy of the in-memory ",(0,r.mdx)("a",{parentName:"li",href:"../store/"},"Relay Store"),". In this function, the client defines how to update the local data based on the server response via the ",(0,r.mdx)("inlineCode",{parentName:"li"},"store")," instance. For details on how to use the ",(0,r.mdx)("inlineCode",{parentName:"li"},"store"),", please refer to our ",(0,r.mdx)("a",{parentName:"li",href:"../store/"},"Relay Store API")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"uploadables"),": An optional uploadable map, an object representing any number of uploadable items, with one key per item. Each value must be of type ",(0,r.mdx)("inlineCode",{parentName:"li"},"File")," or ",(0,r.mdx)("inlineCode",{parentName:"li"},"Blob"),"."),(0,r.mdx)("li",{parentName:"ul"},"No environment argument: ",(0,r.mdx)("inlineCode",{parentName:"li"},"useMutation")," will automatically use the current environment provided by ",(0,r.mdx)("inlineCode",{parentName:"li"},"RelayEnvironmentProvider")))),(0,r.mdx)("li",{parentName:"ul"},"Return value:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"disposable"),": Object containing a ",(0,r.mdx)("inlineCode",{parentName:"li"},"dispose")," function. Calling ",(0,r.mdx)("inlineCode",{parentName:"li"},"disposable.dispose()")," will revert the optimistic update, and Relay won't update the store or call any success/error callback, but the network request is not guaranteed to be cancelled. If the ",(0,r.mdx)("inlineCode",{parentName:"li"},"dispose")," is called after the mutation has succeeded, it will not rollback the update in Relay store."))))),(0,r.mdx)("li",{parentName:"ul"},"[1]"," ",(0,r.mdx)("inlineCode",{parentName:"li"},"areMutationsInFlight"),": Will be ",(0,r.mdx)("inlineCode",{parentName:"li"},"true")," if any mutation triggered by calling ",(0,r.mdx)("inlineCode",{parentName:"li"},"commitMutation")," is still in flight. If you call ",(0,r.mdx)("inlineCode",{parentName:"li"},"commitMutation")," multiple times, there can be multiple mutations in flight at once.")),(0,r.mdx)(l.Z,{mdxType:"DocsRating"}))}b.isMDXComponent=!0},47596:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(i,o){function r(e){try{u(a.next(e))}catch(t){o(t)}}function l(e){try{u(a.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}u((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const i=n(11737);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,t){var n=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(i,o){function r(e){try{u(a.next(e))}catch(t){o(t)}}function l(e){try{u(a.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}u((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let a=!1,i=0;const o={};t.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=i++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),r={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,l),n}))}},24855:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(i,o){function r(e){try{u(a.next(e))}catch(t){o(t)}}function l(e){try{u(a.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}u((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.reportFeatureUsage=t.reportContentCopied=void 0;const i=n(11737);t.reportContentCopied=function(e){return a(this,void 0,void 0,(function*(){const{textContent:t}=e;try{yield i.call({module:"feedback",api:"reportContentCopied",args:{textContent:t}})}catch(n){}}))},t.reportFeatureUsage=function(e){return a(this,void 0,void 0,(function*(){const{featureName:t,id:n}=e;console.log("used feature");try{yield i.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:t,id:n}})}catch(a){}}))}},44256:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.getEphemeralDiffNumber=t.hasEphemeralDiffNumber=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.inpageeditor=t.feedback=t.uidocs=t.bloks=void 0,t.bloks=o(n(47596)),t.uidocs=o(n(17483)),t.feedback=o(n(24855)),t.inpageeditor=o(n(27312));const r=["internal","external"];function l(e){return c(e),s()?"internal"in e?u(e.internal):[]:"external"in e?u(e.external):[]}function u(e){return"function"==typeof e?e():e}function c(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${r}. Instead got ${e}`);if(!Object.keys(e).find((e=>r.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${r}`);const t=Object.keys(e).filter((e=>!r.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${r}`)}function s(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function d(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}t.fbContent=l,t.fbInternalOnly=function(e){return l({internal:e})},t.validateFbContentArgs=c,t.isInternal=s,t.hasEphemeralDiffNumber=function(){return Boolean(d())},t.getEphemeralDiffNumber=d,t.FbInternalOnly=function(e){return s()?e.children:null},t.OssOnly=function(e){return s()?null:e.children}},27312:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(i,o){function r(e){try{u(a.next(e))}catch(t){o(t)}}function l(e){try{u(a.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}u((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitDiff=void 0;const i=n(11737);t.submitDiff=function(e){return a(this,void 0,void 0,(function*(){const{file_path:t,new_content:n,project_name:a,diff_number:o}=e;try{return yield i.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:t,new_content:n,project_name:a,diff_number:o}})}catch(r){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${r}`)}}))}},17483:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(i,o){function r(e){try{u(a.next(e))}catch(t){o(t)}}function l(e){try{u(a.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}u((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getApi=t.docsets=void 0;const i=n(11737);t.docsets={BLOKS_CORE:"887372105406659"},t.getApi=function(e){return a(this,void 0,void 0,(function*(){const{name:t,framework:n,docset:a}=e;return yield i.call({module:"uidocs",api:"getApi",args:{name:t,framework:n,docset:a}})}))}}}]);