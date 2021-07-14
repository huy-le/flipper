(self.webpackChunk=self.webpackChunk||[]).push([[9977],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>s,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),g=i,f=d["".concat(a,".").concat(g)]||d[g]||p[g]||l;return t?r.createElement(f,c(c({ref:n},s),{},{components:t})):r.createElement(f,c({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,c=new Array(l);c[0]=d;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var u=2;u<l;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3919:(e,n,t)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,{b:()=>r,Z:()=>i})},4996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>l,default:()=>c});var r=t(2263),i=t(3919);function l(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,l=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var l=void 0===r?{}:r,c=l.forcePrependBaseUrl,o=void 0!==c&&c,a=l.absolute,u=void 0!==a&&a;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(o)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+s:s}(l,t,e,n)}}}function c(e,n){return void 0===n&&(n={}),(0,l().withBaseUrl)(e,n)}},9106:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>o,metadata:()=>a,toc:()=>u,default:()=>p});var r=t(4034),i=t(9973),l=(t(7294),t(3905)),c=t(4996),o={id:"client-plugin-lifecycle",title:"Client Plugin Lifecycle"},a={unversionedId:"extending/client-plugin-lifecycle",id:"extending/client-plugin-lifecycle",isDocsHomePage:!1,title:"Client Plugin Lifecycle",description:"There are two types of client plugin: Regular and Background plugins. We recommend starting off as a regular plugin and switching it to a background plugin if necessary.",source:"@site/../docs/extending/client-plugin-lifecycle.mdx",sourceDirName:"extending",slug:"/extending/client-plugin-lifecycle",permalink:"/docs/extending/client-plugin-lifecycle",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/client-plugin-lifecycle.mdx",version:"current",frontMatter:{id:"client-plugin-lifecycle",title:"Client Plugin Lifecycle"},sidebar:"extending",previous:{title:"Architecture",permalink:"/docs/extending/arch"},next:{title:"Extending Layout Inspector",permalink:"/docs/extending/layout-inspector"}},u=[{value:"Regular Plugin Lifecycle",id:"regular-plugin-lifecycle",children:[]},{value:"Background Plugin Lifecycle",id:"background-plugin-lifecycle",children:[]}],s={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"There are two types of client plugin: Regular and Background plugins. We recommend starting off as a regular plugin and switching it to a background plugin if necessary."),(0,l.kt)("p",null,"For both types of plugin, we recommend starting work after ",(0,l.kt)("inlineCode",{parentName:"p"},"onConnect")," is called and terminating it after ",(0,l.kt)("inlineCode",{parentName:"p"},"onDisconnect"),", when possible. This prevents wasted computation when Flipper isn't connected. If the plugin needs to keep track of events that occur before it gets connected (such as initial network requests on app startup), you should do so in the plugin constructor (or ideally in a separate class)."),(0,l.kt)("h2",{id:"regular-plugin-lifecycle"},"Regular Plugin Lifecycle"),(0,l.kt)("p",null,"For regular plugins, ",(0,l.kt)("inlineCode",{parentName:"p"},"onConnect")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"onDisconnect")," are triggered when the user opens the plugin in the Flipper UI, and when they switch to another plugin, respectively."),(0,l.kt)("img",{alt:"Regular Plugin Lifecycle diagram",src:(0,c.default)("img/regular-plugin-lifecycle.png")}),(0,l.kt)("h2",{id:"background-plugin-lifecycle"},"Background Plugin Lifecycle"),(0,l.kt)("p",null,"For background plugins, ",(0,l.kt)("inlineCode",{parentName:"p"},"onConnect")," is called when Flipper first connects, and ",(0,l.kt)("inlineCode",{parentName:"p"},"onDisconnect")," when it disconnects. The user does not need to be viewing the plugin for it to send messages; they will be queued up until the next time the user opens the plugin where they will be processed."),(0,l.kt)("p",null,"Even for background plugins, ",(0,l.kt)("inlineCode",{parentName:"p"},"onDisconnect")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"onConnect")," may be called on a plugin (e.g., if the user restarts Flipper). Plugins should handle this accordingly by making sure to resend any important data to the reconnected instance."),(0,l.kt)("div",{class:"warning"},"Note that a plugin must be enabled by the user for its messages to be queued up."),(0,l.kt)("img",{alt:"Background Plugin Lifecycle diagram",src:(0,c.default)("img/bg-plugin-lifecycle.png")}))}p.isMDXComponent=!0}}]);