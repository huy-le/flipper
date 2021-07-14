(self.webpackChunk=self.webpackChunk||[]).push([[1602,1618],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(n),d=i,f=g["".concat(u,".").concat(d)]||g[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2102:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,metadata:()=>u,toc:()=>l,default:()=>c});var r=n(4034),i=n(9973),a=(n(7294),n(3905)),o=n(4996),s={},u={type:"mdx",permalink:"/docs/plugins/navigation/overview",source:"@site/src/embedded-pages/docs/plugins/navigation/overview.mdx"},l=[],p={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Navigation Plugin allows users to quickly navigate to deep links within their mobile applications to help speed up the development cycle. The plugin is designed to integrate easily within your existing navigation framework or as a stand alone tool. Users can bookmark deep links and jump to them via the button in the tool bar."),(0,a.kt)("img",{alt:"Navigation Plugin Button",src:(0,o.default)("img/navigation-plugin-1.png")}),(0,a.kt)("p",null,"Navigation events within the app can also be logged to Flipper. This allows the user to view past navigation events and jump straight to them, or export the navigation events for reporting."),(0,a.kt)("img",{alt:"Navigation Plugin UI",src:(0,o.default)("img/navigation-plugin-2.png")}))}c.isMDXComponent=!0},3919:(e,t,n)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>i})},4996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{useBaseUrlUtils:()=>a,default:()=>o});var r=n(2263),i=n(3919);function a(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,s=void 0!==o&&o,u=a.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},3192:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,metadata:()=>u,toc:()=>l,default:()=>c});var r=n(4034),i=n(9973),a=(n(7294),n(3905)),o=n(2102),s={id:"navigation",title:"Navigation Plugin",sidebar_label:"Navigation",custom_edit_url:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/navigation/docs/overview.mdx"},u={unversionedId:"features/plugins/navigation",id:"features/plugins/navigation",isDocsHomePage:!1,title:"Navigation Plugin",description:"\u2192 See setup instructions for the Navigation plugin",source:"@site/../docs/features/plugins/navigation.mdx",sourceDirName:"features/plugins",slug:"/features/plugins/navigation",permalink:"/docs/features/plugins/navigation",editUrl:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/navigation/docs/overview.mdx",version:"current",sidebar_label:"Navigation",frontMatter:{id:"navigation",title:"Navigation Plugin",sidebar_label:"Navigation",custom_edit_url:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/navigation/docs/overview.mdx"},sidebar:"features",previous:{title:"LeakCanary Plugin",permalink:"/docs/features/plugins/leak-canary"},next:{title:"Network Plugin",permalink:"/docs/features/plugins/network"}},l=[],p={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u2192 ",(0,a.kt)("a",{parentName:"p",href:"/docs/setup/plugins/navigation"},"See setup instructions for the Navigation plugin")),(0,a.kt)(o.default,{mdxType:"Article"}))}c.isMDXComponent=!0}}]);