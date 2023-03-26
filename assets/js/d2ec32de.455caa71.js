"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[85],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},129:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={title:"Overview",sidebar_position:10},o=void 0,s={unversionedId:"overview/index",id:"overview/index",title:"Overview",description:"npm",source:"@site/docs/01-overview/01-index.md",sourceDirName:"01-overview",slug:"/overview/index",permalink:"/overview/index",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/01-overview/01-index.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Overview",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/category/overview"},next:{title:"RSM",permalink:"/overview/RSM"}},l={},p=[{value:"what is alova",id:"what-is-alova",level:2},{value:"Why create alova",id:"why-create-alova",level:2},{value:"Reasons for choosing alova",id:"reasons-for-choosing-alova",level:2},{value:"request strategy",id:"request-strategy",level:2},{value:"Pagination requesting strategy",id:"pagination-requesting-strategy",level:3},{value:"Silent submission strategy",id:"silent-submission-strategy",level:3},{value:"Library Stability",id:"library-stability",level:2},{value:"Official Ecosystem",id:"official-ecosystem",level:2},{value:"Alternative to the requests library? ? ?",id:"alternative-to-the-requests-library--",level:2},{value:"Volume comparison of various libraries",id:"volume-comparison-of-various-libraries",level:2}],m={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("img",{width:"350px",src:a(8254).Z}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/alova"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/alova",alt:"npm"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova/actions/workflows/main.yml"},(0,n.kt)("img",{parentName:"a",src:"https://github.com/alovajs/alova/actions/workflows/main.yml/badge.svg?branch=main",alt:"build"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://coveralls.io/github/alovajs/alova?branch=main"},(0,n.kt)("img",{parentName:"a",src:"https://coveralls.io/repos/github/alovajs/alova/badge.svg?branch=main",alt:"coverage status"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://bundlephobia.com/package/alova"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/alova",alt:"minzipped size"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://bundlephobia.com/package/alova"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/tree-shaking/alova",alt:"tree shaking"})),"\n",(0,n.kt)("img",{parentName:"p",src:"https://badgen.net/badge/icon/typescript?icon=typescript&label",alt:"typescript"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/license-MIT-blue.svg",alt:"license"})),(0,n.kt)("h2",{id:"what-is-alova"},"what is alova"),(0,n.kt)("p",null,"A lightweight request strategy library, which provides targeted request strategies for different request scenarios to improve application availability and fluency, reduce server pressure, and enable applications to have excellent strategic thinking like a wise man. The alova core module provides various adapter interfaces and middleware mechanisms to ensure high scalability, so as to realize more request scenarios. If you have a request scenario that we are looking forward to but we have not realized it, you are also welcome to contribute your irreplaceable power to alova."),(0,n.kt)("h2",{id:"why-create-alova"},"Why create alova"),(0,n.kt)("p",null,"Data requests have always been an essential part of applications. Since the birth of XMLHttpRequest, request schemes have emerged in an endless stream. The client's data interaction exploration has always focused on the following two directions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Request implementation is getting simpler and simpler, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"$.ajax"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"axios"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"react-query"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"fetch api")," and other request tools, the encoding form is constantly transitioning from callback function, Promise, and then to usehook, encoding The difficulty is getting smaller and smaller."),(0,n.kt)("li",{parentName:"ol"},"Data interaction prompts are becoming more and more friendly, and have roughly gone through the following stages:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"No state (stuck state)"),(0,n.kt)("li",{parentName:"ol"},"Loading waiting state, progress bar display"),(0,n.kt)("li",{parentName:"ol"},"Skeleton screen display, old data placeholder display")))),(0,n.kt)("p",null,"There are enough explorations in these two aspects, but in the era of more and more emphasis on user experience, we should pay more attention to the fluency of applications. People always blame the network state for the performance of data interaction, but we see frequent repeated requests everywhere.\nAlova starts with the request strategy and is committed to solving the problem of application fluency. A good request strategy can not only improve performance and user experience, but also reduce the pressure on the server. ",(0,n.kt)("strong",{parentName:"p"},"alova's mission is to make applications manage CS data interaction more intelligently"),", and provide better request strategies for different request scenarios.\nOn the basis of the above, we abstract the request scenario and propose ",(0,n.kt)("a",{parentName:"p",href:"../overview/RSM"},"Request Scenario Model (RSM)"),", which explains alova's request strategy scheme well."),(0,n.kt)("p",null,"Alova has a very flexible expansion capability to implement request strategies in different scenarios. Our expectation for alova is a request strategy tool that can implement efficient requests for specific scenarios with simple coding. At the same time, in the scenario of non-sensing data interaction, alova has taken a big step forward. It allows users to respond immediately after submission without waiting for data requests to a certain extent. In the future, alova will continue to carry forward our exploration of request strategies."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Currently supports ",(0,n.kt)("inlineCode",{parentName:"p"},"vue"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"react"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"svelte"),", and also supports ",(0,n.kt)("inlineCode",{parentName:"p"},"Uniapp"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Taro"),", more framework support please look forward...")),(0,n.kt)("h2",{id:"reasons-for-choosing-alova"},"Reasons for choosing alova"),(0,n.kt)("p",null,"Alova allows you to improve the fluency of the application in terms of requests while writing a small amount of code. It provides an out-of-the-box experience, while other request libraries pay more attention to the convenience of network requests. If you want to get a smooth application without writing more extra code, you might as well give it a try!"),(0,n.kt)("p",null,"At the same time, alova also provides a wealth of features to meet 99% of the request requirements, the more complete features are as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\ud83d\udd76 Support vue, react, svelte"),(0,n.kt)("li",{parentName:"ol"},"\ud83d\udcd1 The api design is similar to axios, more simple and familiar"),(0,n.kt)("li",{parentName:"ol"},"\ud83c\udf75 Out-of-the-box high-performance request strategy, making the application smoother"),(0,n.kt)("li",{parentName:"ol"},"\ud83d\udc26 4kb, only 30% of axios+"),(0,n.kt)("li",{parentName:"ol"},"\ud83d\udd29 High flexibility, compatible with any request library, such as axios, superagent or fetch-api"),(0,n.kt)("li",{parentName:"ol"},"\ud83d\udd0b 3 data cache modes to improve request performance and reduce server pressure"),(0,n.kt)("li",{parentName:"ol"},"\ud83d\udd0c Rich extension functions, you can customize request adapter, storage adapter, middleware, and states hook"),(0,n.kt)("li",{parentName:"ol"},"\ud83d\udc95 Request sharing to avoid sending the same request at the same time"),(0,n.kt)("li",{parentName:"ol"},"\ud83e\ude91 Data pre-fetching, which means users can see information faster without waiting"),(0,n.kt)("li",{parentName:"ol"},"\ud83e\uddbe Real-time automatic status management"),(0,n.kt)("li",{parentName:"ol"},"\ud83c\udfaa Interactive documentation and examples"),(0,n.kt)("li",{parentName:"ol"},"\ud83c\udf88Typescript support"),(0,n.kt)("li",{parentName:"ol"},"\u26a1 Support tree shaking, which means that the production volume of alova is often less than 4kb")),(0,n.kt)("h2",{id:"request-strategy"},"request strategy"),(0,n.kt)("p",null,"Alova is the core library that provides universal functions such as cache strategies, request sharing strategies, and status management, which can meet 90%+request requirements. The specific request strategy solutions are placed in ",(0,n.kt)("inlineCode",{parentName:"p"},"@Alova/scene-vue"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"@Alova/scene-react"),",",(0,n.kt)("inlineCode",{parentName:"p"},"@Alova/scene-svelte"),", they rely on the development of ALOVA's expansion functions. The following two main request strategies."),(0,n.kt)("h3",{id:"pagination-requesting-strategy"},"Pagination requesting strategy"),(0,n.kt)("p",null,"Automatic management of paging data, pre -loading data, reducing unnecessary data refresh, increased by 300%, and decreased by 50%"),(0,n.kt)("h3",{id:"silent-submission-strategy"},"Silent submission strategy"),(0,n.kt)("p",null,"Submitting is a response, which greatly reduces the impact of network fluctuations, allows your application to be unstable in the network, and even in the state of disconnection."),(0,n.kt)("h2",{id:"library-stability"},"Library Stability"),(0,n.kt)("p",null,"It has been nearly a year since the development of the first version of alova. During this year, we have been continuously discovering and optimizing problems. So far, alova has passed 126 unit tests, with a coverage rate of 99%. Even so, alova is still a rookie, so I suggest you use it conservatively."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"I promise to solve it as soon as possible after receiving the issue")),(0,n.kt)("h2",{id:"official-ecosystem"},"Official Ecosystem"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Resources"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/alovajs/mock"},"@alova/mock")),(0,n.kt)("td",{parentName:"tr",align:null},"Mock request adapter for alova.js")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/alovajs/scene"},"@alova/scene-react")),(0,n.kt)("td",{parentName:"tr",align:null},"react request strategy library for alova.js")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/alovajs/scene"},"@alova/scene-vue")),(0,n.kt)("td",{parentName:"tr",align:null},"vue request strategy library for alova.js")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/alovajs/scene"},"@alova/scene-svelte")),(0,n.kt)("td",{parentName:"tr",align:null},"svelte request strategy library for alova.js")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/alovajs/adapter-uniapp"},"@alova/adapter-uniapp")),(0,n.kt)("td",{parentName:"tr",align:null},"uniapp adapter for alova.js")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/alovajs/adapter-taro"},"@alova/adapter-taro")),(0,n.kt)("td",{parentName:"tr",align:null},"taro adapter for alova.js")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/alovajs/adapter-axios"},"@alova/adapter-axios")),(0,n.kt)("td",{parentName:"tr",align:null},"axios adapter for alova.js")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/alovajs/adapter-xhr"},"@alova/adapter-xhr")),(0,n.kt)("td",{parentName:"tr",align:null},"XMLHttpRequest adapter for alova.js")))),(0,n.kt)("h2",{id:"alternative-to-the-requests-library--"},"Alternative to the requests library? ? ?"),(0,n.kt)("p",null,"alova is a request strategy library, which was originally created to provide specific request strategy solutions for different request scenarios, so as to achieve a smooth request experience more concisely and elegantly, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"$.ajax"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"axios")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch- api"),", etc. provide good support for request sending and response receiving, they are an essential part of the ",(0,n.kt)("a",{parentName:"p",href:"./RSM"},"RSM")," process (request events), alova still needs to rely on them to make requests, so we can Think of alova as an arm of the request library, making the request library more powerful."),(0,n.kt)("h2",{id:"volume-comparison-of-various-libraries"},"Volume comparison of various libraries"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"alova"),(0,n.kt)("th",{parentName:"tr",align:null},"axios"),(0,n.kt)("th",{parentName:"tr",align:null},"react-query"),(0,n.kt)("th",{parentName:"tr",align:null},"vue-request"),(0,n.kt)("th",{parentName:"tr",align:null},"vue"),(0,n.kt)("th",{parentName:"tr",align:null},"react"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://bundlephobia.com/package/alova"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/alova",alt:"minzip"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://bundlephobia.com/package/axios"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/axios",alt:"minzip"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://bundlephobia.com/package/react-query"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/react-query",alt:"minzip"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://bundlephobia.com/package/vue-request"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/vue-request",alt:"minzip"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://bundlephobia.com/package/vue"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/vue",alt:"minzip"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://bundlephobia.com/package/react-dom"},(0,n.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/react-dom",alt:"minzip"})))))))}u.isMDXComponent=!0},8254:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/logo-text-66361b83eff0fecdfbdc50027cf357dc.png"}}]);