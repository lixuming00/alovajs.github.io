"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3284],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),p=o,u=m["".concat(s,".").concat(p)]||m[p]||h[p]||i;return a?n.createElement(u,r(r({ref:t},d),{},{components:a})):n.createElement(u,r({ref:t},d))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4635:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={title:"cache mode",sidebar_position:40},r=void 0,l={unversionedId:"get-started/response-cache",id:"get-started/response-cache",title:"cache mode",description:"The cache mode can make better use of server-side data multiple times without sending a request to get data every time a request is made. alova provides three cache modes to meet different cache scenarios, namely memory mode, cache occupancy mode, and restore mode. The cache mode can be set at different granularities such as global or request level. When set globally, all Method instances created from the same alova instance will inherit the setting.",source:"@site/docs/03-get-started/03-response-cache.md",sourceDirName:"03-get-started",slug:"/get-started/response-cache",permalink:"/get-started/response-cache",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/03-get-started/03-response-cache.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"cache mode",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"request method instance",permalink:"/get-started/request-method-instance"},next:{title:"Request at the right time",permalink:"/category/request-at-the-right-time"}},s={},c=[{value:"memory mode (default)",id:"memory-mode-default",level:2},{value:"cache occupancy mode",id:"cache-occupancy-mode",level:2},{value:"restore mode",id:"restore-mode",level:2},{value:"What should I do if the data changes in restore mode?",id:"what-should-i-do-if-the-data-changes-in-restore-mode",level:3},{value:"Global setting cache mode",id:"global-setting-cache-mode",level:2},{value:"Expiration time type",id:"expiration-time-type",level:2},{value:"Relative Time",id:"relative-time",level:3},{value:"absolute time",id:"absolute-time",level:3},{value:"Cache key automatic maintenance",id:"cache-key-automatic-maintenance",level:2}],d={toc:c};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The cache mode can make better use of server-side data multiple times without sending a request to get data every time a request is made. ",(0,o.kt)("inlineCode",{parentName:"p"},"alova")," provides three cache modes to meet different cache scenarios, namely memory mode, cache occupancy mode, and restore mode. The cache mode can be set at different granularities such as global or request level. When set globally, all Method instances created from the same alova instance will inherit the setting."),(0,o.kt)("h2",{id:"memory-mode-default"},"memory mode (default)"),(0,o.kt)("p",null,"The memory mode puts the cache in the memory, which means that the page cache is invalidated when it is refreshed, and is the most commonly used cache mode."),(0,o.kt)("p",null,"When you are writing a todo details page, you may think that users will frequently click to view details in the todo list. If users repeatedly view a certain detail, they will not repeatedly request the interface, and the data can be returned immediately, which improves the response speed. Colleagues also reduce server pressure. At this point we can set the response data cache for a todo detail ",(0,o.kt)("inlineCode",{parentName:"p"},"Method")," instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"alovaInstance.GET('/todo/list', {\n  //...\n  // highlight-start\n  localCache: {\n    // Set cache mode to memory mode\n    mode: 'memory',\n\n    // unit is milliseconds\n    // When set to `Infinity`, it means that the data will never expire, and when it is set to 0 or a negative number, it means no caching\n    expire: 60 * 10 * 1000\n  }\n  // highlight-end\n});\n")),(0,o.kt)("p",null,"Memory mode is the default mode, you can abbreviate like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"alovaInstance.GET('/todo/list', {\n  //...\n  // highlight-start\n  localCache: 60 * 10 * 1000\n  // highlight-end\n});\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"GET requests will set the memory cache time of 300000ms (5 minutes) by default, and developers can also customize the settings.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you need to set the caching mode globally, see ","[Global setting cache mode]"," at the bottom of this section (#Global setting cache mode)")),(0,o.kt)("h2",{id:"cache-occupancy-mode"},"cache occupancy mode"),(0,o.kt)("p",null,"When you don't want the application to display Loading every time it enters, but want to use old data instead of Loading, you can use the cache occupancy mode, which has a better experience than Loading."),(0,o.kt)("p",null,"In the cache occupancy mode, ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," will be immediately assigned the old data of the last cache. You can judge that if there is old data, use it to replace the Loading display. At the same time, it will send a request to obtain the latest data and update the cache, so as to achieve In order to quickly display the actual data, and obtain the latest data."),(0,o.kt)("p",null,"Set on ",(0,o.kt)("inlineCode",{parentName:"p"},"Method")," instances:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const todoListGetter = alovaInstance.Get('/todo/list', {\n  //...\n  // highlight-start\n  localCache: {\n    // Set the cache mode to persistent placeholder mode\n    mode: 'placeholder',\n    // cache time\n    expire: 60 * 10 * 1000\n  }\n  // highlight-end\n});\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you need to set the caching mode globally, see ","[Global setting cache mode]"," at the bottom of this section (#Global setting cache mode)")),(0,o.kt)("h2",{id:"restore-mode"},"restore mode"),(0,o.kt)("p",null,"In this mode, the server-side cached data will be persistent. If the expiration time is not reached, even if the page cache is refreshed, it will not be invalidated. It is generally used for some data that requires server-side management but is basically unchanged, such as the specific dates of annual holidays. It is different, but it will not change again. In this scenario, we only need to set the cache expiration time to the last moment of this year."),(0,o.kt)("p",null,"Set on ",(0,o.kt)("inlineCode",{parentName:"p"},"Method")," instances:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const todoListGetter = alovaInstance.Get('/todo/list', {\n  //...\n  // highlight-start\n  localCache: {\n    // Set the cache mode to persistent mode\n    mode: 'restore',\n    // cache time\n    expire: 60 * 10 * 1000\n  }\n  // highlight-end\n});\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you need to set the caching mode globally, see ","[Global setting cache mode]"," at the bottom of this section (#Global setting cache mode)")),(0,o.kt)("h3",{id:"what-should-i-do-if-the-data-changes-in-restore-mode"},"What should I do if the data changes in restore mode?"),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"Method")," instance in restore mode is set, it may be due to the change of the interface data or the logic change of the front-end processing response data. At this time, it is necessary to let the user re-cache the changed data after publishing the application. At this time, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"tag")," The attribute sets the cache tag. Each piece of persistent data contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"tag")," identifier. When the ",(0,o.kt)("inlineCode",{parentName:"p"},"tag")," changes, the original persistent data will become invalid, and new data will be obtained again, and the new ",(0,o.kt)("inlineCode",{parentName:"p"},"tag")," will be used for identification ."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const todoListGetter = alovaInstance.Get('/todo/list', {\n  //...\n  localCache: {\n    mode: 'restore',\n    expire: 60 * 10 * 1000,\n\n    // highlight-start\n    // Add or modify the tag parameter, the cached data will be invalid\n    // It is recommended to use version number management\n    tag: 'v1'\n    // highlight-end\n  }\n});\n")),(0,o.kt)("h2",{id:"global-setting-cache-mode"},"Global setting cache mode"),(0,o.kt)("admonition",{title:"Tips",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"v1.3.0+")),(0,o.kt)("p",null,"The above settings are all set separately on ",(0,o.kt)("inlineCode",{parentName:"p"},"Method"),". If you need to set the cache mode globally, you can do it as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  //...\n  // highlight-start\n  localCache: {\n    // Uniformly set the cache mode of POST\n    POST: {\n      mode: 'placeholder',\n      expire: 60 * 10 * 1000\n    },\n    // Uniformly set the cache mode of the HEAD request\n    HEAD: 60 * 10 * 1000\n  }\n  // highlight-end\n});\n")),(0,o.kt)("p",null,"Henceforth, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Method")," instance created by ",(0,o.kt)("inlineCode",{parentName:"p"},"alovaInstance")," instance will use this cache setting by default, and it can also be overridden in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Method")," instance."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: When the cache mode is set globally, the original 5-minute GET cache mode will be overwritten.")),(0,o.kt)("h2",{id:"expiration-time-type"},"Expiration time type"),(0,o.kt)("p",null,"There are two types of expiration time to choose from, namely ",(0,o.kt)("strong",{parentName:"p"},"relative time")," and ",(0,o.kt)("strong",{parentName:"p"},"absolute time")),(0,o.kt)("h3",{id:"relative-time"},"Relative Time"),(0,o.kt)("p",null,"That is, the time to expire when the cached data is saved, in ",(0,o.kt)("strong",{parentName:"p"},"milliseconds"),", the above examples are all of this type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"localCache: 60 * 10 * 1000;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"localCache: {\nexpire: 60 * 10 * 1000,\n}\n")),(0,o.kt)("h3",{id:"absolute-time"},"absolute time"),(0,o.kt)("p",null,"With a specific time point as the expiration time, the cache will expire at the set time point"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"localCache: new Date('2030-01-01');\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"localCache: {\n  expire: new Date('2030-01-01');\n}\n")),(0,o.kt)("h2",{id:"cache-key-automatic-maintenance"},"Cache key automatic maintenance"),(0,o.kt)("p",null,"The key of the response data cache is uniquely identified by the combination of the request method (method), request address (url), request header parameters (headers), url parameters (params), and request body parameters (requestBody) of the method instance. Any information or Different positions will be treated as different keys."))}h.isMDXComponent=!0}}]);