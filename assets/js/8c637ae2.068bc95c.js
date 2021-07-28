"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9977],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>m,useMDXComponents:()=>s,withMDXComponents:()=>p});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){return function(n){var t=s(n.components);return r.createElement(e,l({},n,{components:t}))}},s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,f=p["".concat(o,".").concat(d)]||p[d]||g[d]||l;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=f;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13919:(e,n,t)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,{b:()=>r,Z:()=>i})},44996:(e,n,t)=>{t.r(n),t.d(n,{useBaseUrlUtils:()=>l,default:()=>o});var r=t(52263),i=t(13919);function l(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,l=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var l=void 0===r?{}:r,o=l.forcePrependBaseUrl,c=void 0!==o&&o,a=l.absolute,u=void 0!==a&&a;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(c)return n+t;var p=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+p:p}(l,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,l().withBaseUrl)(e,n)}},39106:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>u,metadata:()=>p,toc:()=>s,default:()=>g});var r=t(22122),i=t(19756),l=(t(67294),t(3905)),o=t(44996),c=["components"],a={id:"client-plugin-lifecycle",title:"Client Plugin Lifecycle"},u=void 0,p={unversionedId:"extending/client-plugin-lifecycle",id:"extending/client-plugin-lifecycle",isDocsHomePage:!1,title:"Client Plugin Lifecycle",description:"There are two types of client plugin: Regular and Background plugins. We recommend starting off as a regular plugin and switching it to a background plugin if necessary.",source:"@site/../docs/extending/client-plugin-lifecycle.mdx",sourceDirName:"extending",slug:"/extending/client-plugin-lifecycle",permalink:"/docs/extending/client-plugin-lifecycle",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/client-plugin-lifecycle.mdx",version:"current",frontMatter:{id:"client-plugin-lifecycle",title:"Client Plugin Lifecycle"},sidebar:"extending",previous:{title:"Architecture",permalink:"/docs/extending/arch"},next:{title:"Extending Layout Inspector",permalink:"/docs/extending/layout-inspector"}},s=[{value:"Regular Plugin Lifecycle",id:"regular-plugin-lifecycle",children:[]},{value:"Background Plugin Lifecycle",id:"background-plugin-lifecycle",children:[]}],d={toc:s};function g(e){var n=e.components,t=(0,i.Z)(e,c);return(0,l.mdx)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"There are two types of client plugin: Regular and Background plugins. We recommend starting off as a regular plugin and switching it to a background plugin if necessary."),(0,l.mdx)("p",null,"For both types of plugin, we recommend starting work after ",(0,l.mdx)("inlineCode",{parentName:"p"},"onConnect")," is called and terminating it after ",(0,l.mdx)("inlineCode",{parentName:"p"},"onDisconnect"),", when possible. This prevents wasted computation when Flipper isn't connected. If the plugin needs to keep track of events that occur before it gets connected (such as initial network requests on app startup), you should do so in the plugin constructor (or ideally in a separate class)."),(0,l.mdx)("h2",{id:"regular-plugin-lifecycle"},"Regular Plugin Lifecycle"),(0,l.mdx)("p",null,"For regular plugins, ",(0,l.mdx)("inlineCode",{parentName:"p"},"onConnect")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"onDisconnect")," are triggered when the user opens the plugin in the Flipper UI, and when they switch to another plugin, respectively."),(0,l.mdx)("img",{alt:"Regular Plugin Lifecycle diagram",src:(0,o.default)("img/regular-plugin-lifecycle.png")}),(0,l.mdx)("h2",{id:"background-plugin-lifecycle"},"Background Plugin Lifecycle"),(0,l.mdx)("p",null,"For background plugins, ",(0,l.mdx)("inlineCode",{parentName:"p"},"onConnect")," is called when Flipper first connects, and ",(0,l.mdx)("inlineCode",{parentName:"p"},"onDisconnect")," when it disconnects. The user does not need to be viewing the plugin for it to send messages; they will be queued up until the next time the user opens the plugin where they will be processed."),(0,l.mdx)("p",null,"Even for background plugins, ",(0,l.mdx)("inlineCode",{parentName:"p"},"onDisconnect")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"onConnect")," may be called on a plugin (e.g., if the user restarts Flipper). Plugins should handle this accordingly by making sure to resend any important data to the reconnected instance."),(0,l.mdx)("div",{class:"warning"},"Note that a plugin must be enabled by the user for its messages to be queued up."),(0,l.mdx)("img",{alt:"Background Plugin Lifecycle diagram",src:(0,o.default)("img/bg-plugin-lifecycle.png")}))}g.isMDXComponent=!0}}]);