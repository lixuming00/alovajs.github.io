"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6856],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(v,l(l({ref:t},c),{},{components:a})):n.createElement(v,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),s=a(6550),u=a(1980),i=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,i]=v({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),h(e)}),[i,h,o]),tabValues:o}}var f=a(2389);const b="tabList__CuJ",g="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==s&&(p(t),u(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},3412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const s={title:"\u5165\u95e8",sidebar_position:10},u=void 0,i={unversionedId:"get-started/start",id:"get-started/start",title:"\u5165\u95e8",description:"\u5728\u63a5\u4e0b\u6765\u7684\u5165\u95e8\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u4ee5\u5f85\u529e\u4e8b\u9879\uff08todo\uff09\u4e3a\u4f8b\uff0c\u56f4\u7ed5\u7740\u83b7\u53d6\u4e0d\u540c\u65e5\u671f\u7684\u5f85\u529e\u4e8b\u9879\u5217\u8868\u3001\u67e5\u770b todo \u8be6\u60c5\uff0c\u4ee5\u53ca\u521b\u5efa\u3001\u7f16\u8f91\u3001\u5220\u9664\u4e8b\u9879\u7b49\u9700\u6c42\u8fdb\u884calova\u7684\u8bb2\u89e3\u3002\u8ba9\u6211\u4eec\u5f00\u59cb\u5427\uff01",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/03-get-started/01-start.md",sourceDirName:"03-get-started",slug:"/get-started/start",permalink:"/zh-CN/get-started/start",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/03-get-started/01-start.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u5165\u95e8",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/zh-CN/category/getting-started"},next:{title:"\u8bf7\u6c42\u65b9\u6cd5\u5b9e\u4f8b",permalink:"/zh-CN/get-started/request-method-instance"}},c={},p=[{value:"\u521b\u5efa Alova \u5b9e\u4f8b",id:"\u521b\u5efa-alova-\u5b9e\u4f8b",level:2},{value:"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u62e6\u622a\u5668",id:"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u62e6\u622a\u5668",level:2},{value:"\u8bbe\u7f6e\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668",id:"\u8bbe\u7f6e\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668",level:2},{value:"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4",id:"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u63a5\u4e0b\u6765\u7684\u5165\u95e8\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u4ee5\u5f85\u529e\u4e8b\u9879\uff08todo\uff09\u4e3a\u4f8b\uff0c\u56f4\u7ed5\u7740\u83b7\u53d6\u4e0d\u540c\u65e5\u671f\u7684\u5f85\u529e\u4e8b\u9879\u5217\u8868\u3001\u67e5\u770b todo \u8be6\u60c5\uff0c\u4ee5\u53ca\u521b\u5efa\u3001\u7f16\u8f91\u3001\u5220\u9664\u4e8b\u9879\u7b49\u9700\u6c42\u8fdb\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"alova"),"\u7684\u8bb2\u89e3\u3002\u8ba9\u6211\u4eec\u5f00\u59cb\u5427\uff01"),(0,r.kt)("h2",{id:"\u521b\u5efa-alova-\u5b9e\u4f8b"},"\u521b\u5efa Alova \u5b9e\u4f8b"),(0,r.kt)("p",null,"\u4e00\u4e2a alova \u5b9e\u4f8b\u662f\u4f7f\u7528\u7684\u5f00\u7aef\uff0c\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u9700\u8981\u4ece\u5b83\u5f00\u59cb\u3002\u5b83\u7684\u5199\u6cd5\u7c7b\u4f3c",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),"\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684 alova \u5b9e\u4f8b\u7684\u521b\u5efa\u65b9\u6cd5\u3002"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport VueHook from 'alova/vue';\nconst alovaInstance = createAlova({\n  // \u5047\u8bbe\u6211\u4eec\u9700\u8981\u4e0e\u8fd9\u4e2a\u57df\u540d\u7684\u670d\u52a1\u5668\u4ea4\u4e92\n  baseURL: 'https://api.alovajs.org',\n\n  // VueHook\u53ef\u4ee5\u5e2e\u6211\u4eec\u7528vue\u7684ref\u51fd\u6570\u521b\u5efa\u8bf7\u6c42\u76f8\u5173\u7684\uff0c\u53ef\u4ee5\u88abAlova\u7ba1\u7406\u7684\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u72b6\u6001loading\u3001\u54cd\u5e94\u6570\u636edata\u3001\u8bf7\u6c42\u9519\u8bef\u5bf9\u8c61error\u7b49\uff08\u540e\u7eed\u8be6\u7ec6\u4ecb\u7ecd\uff09\n  statesHook: VueHook,\n\n  // \u8bf7\u6c42\u9002\u914d\u5668\uff0c\u6211\u4eec\u63a8\u8350\u5e76\u63d0\u4f9b\u4e86fetch\u8bf7\u6c42\u9002\u914d\u5668\n  requestAdapter: GlobalFetch()\n});\n"))),(0,r.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport ReactHook from 'alova/react';\nconst alovaInstance = createAlova({\n  // \u5047\u8bbe\u6211\u4eec\u9700\u8981\u4e0e\u8fd9\u4e2a\u57df\u540d\u7684\u670d\u52a1\u5668\u4ea4\u4e92\n  baseURL: 'https://api.alovajs.org',\n\n  // ReactHook\u53ef\u4ee5\u5e2e\u6211\u4eec\u8c03\u7528useState\u521b\u5efa\u8bf7\u6c42\u76f8\u5173\u7684\uff0c\u53ef\u4ee5\u88abAlova\u7ba1\u7406\u7684\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u72b6\u6001loading\u3001\u54cd\u5e94\u6570\u636edata\u3001\u8bf7\u6c42\u9519\u8bef\u5bf9\u8c61error\u7b49\uff08\u540e\u7eed\u8be6\u7ec6\u4ecb\u7ecd\uff09\n  statesHook: ReactHook,\n\n  // \u8bf7\u6c42\u9002\u914d\u5668\uff0c\u6211\u4eec\u63a8\u8350\u5e76\u63d0\u4f9b\u4e86fetch\u8bf7\u6c42\u9002\u914d\u5668\n  requestAdapter: GlobalFetch()\n});\n"))),(0,r.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport SvelteHook from 'alova/svelte';\nconst alovaInstance = createAlova({\n  // \u5047\u8bbe\u6211\u4eec\u9700\u8981\u4e0e\u8fd9\u4e2a\u57df\u540d\u7684\u670d\u52a1\u5668\u4ea4\u4e92\n  baseURL: 'https://api.alovajs.org',\n\n  // SvelteHook\u53ef\u4ee5\u5e2e\u6211\u4eec\u8c03\u7528writable\u521b\u5efa\u8bf7\u6c42\u76f8\u5173\u7684\uff0c\u53ef\u4ee5\u88abAlova\u7ba1\u7406\u7684\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u72b6\u6001loading\u3001\u54cd\u5e94\u6570\u636edata\u3001\u8bf7\u6c42\u9519\u8bef\u5bf9\u8c61error\u7b49\uff08\u540e\u7eed\u8be6\u7ec6\u4ecb\u7ecd\uff09\n  statesHook: SvelteHook,\n\n  // \u8bf7\u6c42\u9002\u914d\u5668\uff0c\u6211\u4eec\u63a8\u8350\u5e76\u63d0\u4f9b\u4e86fetch\u8bf7\u6c42\u9002\u914d\u5668\n  requestAdapter: GlobalFetch()\n});\n")))),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u62e6\u622a\u5668"},"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u62e6\u622a\u5668"),(0,r.kt)("p",null,"\u901a\u5e38\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u6240\u6709\u8bf7\u6c42\u90fd\u7528\u4e0a\u76f8\u540c\u7684\u914d\u7f6e\uff0c\u4f8b\u5982\u6dfb\u52a0 token\u3001timestamp \u5230\u8bf7\u6c42\u5934\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"alova"),"\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u5168\u5c40\u7684\u8bf7\u6c42\u62e6\u622a\u5668\uff0c\u5b83\u5c06\u5728\u8bf7\u6c42\u524d\u88ab\u89e6\u53d1\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u6b64\u62e6\u622a\u5668\u4e2d\u7edf\u4e00\u8bbe\u7f6e\u8bf7\u6c42\u53c2\u6570\uff0c\u8fd9\u4e5f\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),"\u76f8\u4f3c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  // ...\n  // \u51fd\u6570\u53c2\u6570\u4e3a\u4e00\u4e2amethod\u5b9e\u4f8b\uff0c\u5305\u542b\u5982url\u3001params\u3001data\u3001headers\u7b49\u8bf7\u6c42\u6570\u636e\n  // \u4f60\u53ef\u4ee5\u81ea\u7531\u4fee\u6539\u8fd9\u4e9b\u6570\u636e\n  // highlight-start\n  beforeRequest(method) {\n    // \u5047\u8bbe\u6211\u4eec\u9700\u8981\u6dfb\u52a0token\u5230\u8bf7\u6c42\u5934\n    method.config.headers.token = 'token';\n  }\n  // highlight-end\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8be6\u7ec6\u7684\u8bf7\u6c42\u65b9\u6cd5\u5b9e\u4f8b\u4ecb\u7ecd\u5c06\u5728\u4e0b\u4e00\u8282\u4e2d\u8bb2\u89e3")),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668"},"\u8bbe\u7f6e\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u5e0c\u671b\u7edf\u4e00\u89e3\u6790\u54cd\u5e94\u6570\u636e\u3001\u7edf\u4e00\u5904\u7406\u9519\u8bef\u65f6\uff0c\u6b64\u65f6\u53ef\u4ee5\u5728\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"alova"),"\u5b9e\u4f8b\u65f6\u6307\u5b9a\u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668\uff0c\u8fd9\u540c\u6837\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),"\u76f8\u4f3c\u3002\u54cd\u5e94\u62e6\u622a\u5668\u5305\u62ec\u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\u548c\u8bf7\u6c42\u5931\u8d25\u7684\u62e6\u622a\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  // \u4f7f\u7528\u6570\u7ec4\u7684\u4e24\u4e2a\u9879\uff0c\u5206\u522b\u6307\u5b9a\u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\u548c\u8bf7\u6c42\u5931\u8d25\u7684\u62e6\u622a\u5668\n  responsed: {\n    // \u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\n    // \u5f53\u4f7f\u7528GlobalFetch\u8bf7\u6c42\u9002\u914d\u5668\u65f6\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u63a5\u6536Response\u5bf9\u8c61\n    // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u5f53\u524d\u8bf7\u6c42\u7684method\u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u540c\u6b65\u8bf7\u6c42\u524d\u540e\u7684\u914d\u7f6e\u4fe1\u606f\n    onSuccess: async (response, method) => {\n      if (response.status >= 400) {\n        throw new Error(response.statusText);\n      }\n      const json = await response.json();\n      if (json.code !== 200) {\n        // \u629b\u51fa\u9519\u8bef\u6216\u8fd4\u56dereject\u72b6\u6001\u7684Promise\u5b9e\u4f8b\u65f6\uff0c\u6b64\u8bf7\u6c42\u5c06\u629b\u51fa\u9519\u8bef\n        throw new Error(json.message);\n      }\n\n      // \u89e3\u6790\u7684\u54cd\u5e94\u6570\u636e\u5c06\u4f20\u7ed9method\u5b9e\u4f8b\u7684transformData\u94a9\u5b50\u51fd\u6570\uff0c\u8fd9\u4e9b\u51fd\u6570\u5c06\u5728\u540e\u7eed\u8bb2\u89e3\n      return json.data;\n    },\n\n    // \u8bf7\u6c42\u5931\u8d25\u7684\u62e6\u622a\u5668\n    // \u8bf7\u6c42\u9519\u8bef\u65f6\u5c06\u4f1a\u8fdb\u5165\u8be5\u62e6\u622a\u5668\u3002\n    // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u5f53\u524d\u8bf7\u6c42\u7684method\u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u540c\u6b65\u8bf7\u6c42\u524d\u540e\u7684\u914d\u7f6e\u4fe1\u606f\n    onError: (err, method) => {\n      alert(error.message);\n    }\n  }\n  // highlight-end\n});\n")),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u9700\u8981\u8bbe\u7f6e\u8bf7\u6c42\u5931\u8d25\u7684\u62e6\u622a\u5668\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f20\u5165\u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\u51fd\u6570\uff0c\u800c\u4e0d\u518d\u9700\u8981\u901a\u8fc7\u5bf9\u8c61\u6765\u8bbe\u7f6e\u56de\u8c03\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  async responsed(response, method) {\n    // \u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\n  }\n  // highlight-end\n});\n")),(0,r.kt)("admonition",{title:"\u7279\u522b\u6ce8\u610f",type:"caution"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"onError \u56de\u8c03\u662f\u8bf7\u6c42\u9519\u8bef\u7684\u6355\u83b7\u51fd\u6570\uff0c\u5f53\u6355\u83b7\u9519\u8bef\u4f46\u6ca1\u6709\u629b\u51fa\u9519\u8bef\u6216\u8fd4\u56de reject \u72b6\u6001\u7684 Promise \u5b9e\u4f8b\uff0c\u5c06\u8ba4\u4e3a\u8bf7\u6c42\u662f\u6210\u529f\u7684\uff0c\u4e14\u4e0d\u4f1a\u83b7\u5f97\u54cd\u5e94\u6570\u636e"),(0,r.kt)("li",{parentName:"ol"},"responsed \u53ef\u8bbe\u4e3a\u662f\u666e\u901a\u51fd\u6570\u548c\u5f02\u6b65\u51fd\u6570"))),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4"},"\u8bbe\u7f6e\u5168\u5c40\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u8bbe\u7f6e\u5168\u5c40\u7684\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5168\u5c40\u8bbe\u7f6e\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\nconst alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  // \u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\uff0c\u9ed8\u8ba4\u4e3a0\uff0c\u8868\u793a\u6c38\u4e0d\u8d85\u65f6\n  timeout: 50000\n  // highlight-end\n});\n")))}m.isMDXComponent=!0}}]);