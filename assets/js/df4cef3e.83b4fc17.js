(self.webpackChunk=self.webpackChunk||[]).push([[9841],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9282:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,metadata:()=>c,toc:()=>l,default:()=>p});var n=r(4034),o=r(9973),i=(r(7294),r(3905)),a=r(4996),s={},c={type:"mdx",permalink:"/docs/plugins/device-logs/overview",source:"@site/src/embedded-pages/docs/plugins/device-logs/overview.mdx"},l=[{value:"Filtering",id:"filtering",children:[]},{value:"Expression watcher",id:"expression-watcher",children:[]}],u={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Logs plugin shows device logs without any additional setup. This is a device plugin, meaning that it is not tied to any specific app and there is no additional setup needed to see the logs."),(0,i.kt)("img",{alt:"Logs plugin",src:(0,a.default)("img/logs.png")}),(0,i.kt)("h2",{id:"filtering"},"Filtering"),(0,i.kt)("p",null,"The search bar can be used to search for logs and filter for certain types. From the context menu on the table headers you can show more infos like timestamp, PID or TID. Click on a tag, PID or TID in the table to filter only for logs with the same value."),(0,i.kt)("h2",{id:"expression-watcher"},"Expression watcher"),(0,i.kt)("p",null,"The expression watcher in the sidebar can be used to watch for certain logs to happen and count how often they occur. An expression can be a simple string, or a regular expression which is matched against the logs."),(0,i.kt)("p",null,"When the notify checkbox is enabled, Flipper will send notifications once the log is happening. This lets you know when the watcher triggered, even if Flipper is in the background."))}p.isMDXComponent=!0},3919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>o})},4996:(e,t,r)=>{"use strict";r.r(t),r.d(t,{useBaseUrlUtils:()=>i,default:()=>a});var n=r(2263),o=r(3919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,s=void 0!==a&&a,c=i.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(s)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+u:u}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}}}]);