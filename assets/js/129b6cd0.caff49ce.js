(self.webpackChunk=self.webpackChunk||[]).push([[6805],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var i=n(9973),r=n(7294),a=n(3727),o=n(3919),l=n(412),c=(0,r.createContext)({collectLink:function(){}}),p=n(4996);const u=function(e){var t,n,u,s=e.isNavLink,d=e.to,f=e.href,m=e.activeClassName,v=e.isActive,g=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,k=void 0===h||h,b=(0,i.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=(0,p.useBaseUrlUtils)().withBaseUrl,w=(0,r.useContext)(c),N=d||f,C=(0,o.Z)(N),O=null==N?void 0:N.replace("pathname://",""),x=void 0!==O?(n=O,k&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,P=(0,r.useRef)(!1),T=s?a.OL:a.rU,j=l.default.canUseIntersectionObserver;(0,r.useEffect)((function(){return!j&&C&&null!=x&&window.docusaurus.prefetch(x),function(){j&&u&&u.disconnect()}}),[x,j,C]);var E=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,D=!x||!C||E;return x&&C&&!E&&!g&&w.collectLink(x),D?r.createElement("a",Object.assign({href:x},N&&!C&&{target:"_blank",rel:"noopener noreferrer"},b)):r.createElement(T,Object.assign({},b,{onMouseEnter:function(){P.current||null==x||(window.docusaurus.preload(x),P.current=!0)},innerRef:function(e){var t,n;j&&e&&C&&(t=e,n=function(){null!=x&&window.docusaurus.prefetch(x)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:x||""},s&&{isActive:v,activeClassName:m}))}},3919:(e,t,n)=>{"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:()=>i,Z:()=>r})},4996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{useBaseUrlUtils:()=>a,default:()=>o});var i=n(2263),r=n(3919);function a(){var e=(0,i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,l=void 0!==o&&o,c=a.absolute,p=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},1751:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,metadata:()=>p,toc:()=>u,default:()=>d});var i=n(4034),r=n(9973),a=(n(7294),n(3905)),o=n(4996),l=n(6742),c={id:"react-native",title:"Building a React Native Plugin"},p={unversionedId:"tutorial/react-native",id:"tutorial/react-native",isDocsHomePage:!1,title:"Building a React Native Plugin",description:"This tutorial requires React Native 0.62 or higher.",source:"@site/../docs/tutorial/react-native.mdx",sourceDirName:"tutorial",slug:"/tutorial/react-native",permalink:"/docs/tutorial/react-native",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/react-native.mdx",version:"current",frontMatter:{id:"react-native",title:"Building a React Native Plugin"},sidebar:"extending",previous:{title:"Building an Android Plugin",permalink:"/docs/tutorial/android"},next:{title:"Building a Desktop Plugin",permalink:"/docs/tutorial/js-setup"}},u=[],s={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"warning"},(0,a.kt)("p",null,"This tutorial requires React Native 0.62 or higher.")),(0,a.kt)("p",null,"Once you have connected Flipper to a React Native application,\nwriting your own Flipper plugin can be done without reaching into the native world."),(0,a.kt)("p",null,"To expose Flipper to the JavaScript world, the React Native Native Module ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-flipper")," needs to be installed in the hosting application by running ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add react-native-flipper")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cd ios && pod install"),". If you are developing a plugin that is distributed as NPM package, make sure to add this to the installation instruction of your package as well!"),(0,a.kt)("p",null,"Registering a new plugin is done by importing ",(0,a.kt)("inlineCode",{parentName:"p"},"addPlugin")," from ",(0,a.kt)("inlineCode",{parentName:"p"},'"react-native-flipper"')," and providing it an object that at least implements the method  ",(0,a.kt)("inlineCode",{parentName:"p"},"getId")," (the plugin id that should be used in the desktop plugin as well to make the connection) and two event handlers for the ",(0,a.kt)("inlineCode",{parentName:"p"},"onConnect")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onDisconnect")," events."),(0,a.kt)("p",null,"These ",(0,a.kt)("inlineCode",{parentName:"p"},"onConnect")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onDisconnect")," events are triggered every time the plugin becomes (in)active in the Flipper desktop application.\nIf the plugin is a ",(0,a.kt)(l.default,{to:(0,o.default)("/docs/extending/create-plugin#background-plugins"),mdxType:"Link"},"background plugin"),", these events are triggered typically only once (they might be triggered never, if the Desktop user didn't enable the plugin, or multiple times if they enabled or disabled the plugin a few times)."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onConnect")," callback receive a ",(0,a.kt)("inlineCode",{parentName:"p"},"connection")," which can be used to communicate with the backend:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {addPlugin} from \"react-native-flipper\"\n\naddPlugin({\n  getId() {\n    return 'ReactNativeExamplePlugin';\n  },\n  onConnect(connection) {\n    mammmals.forEach(({ title, pictureUrl }, index) => {\n      connection.send('newRow', {\n          id: index,\n          title,\n          url: pictureUrl\n      })\n    })\n  },\n  onDisconnect() {\n  }\n})\n")),(0,a.kt)("p",null,"You might want to store the connection somewhere to be able to send more events as long as ",(0,a.kt)("inlineCode",{parentName:"p"},"onDisconnect")," event hasn't been fired."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"connection")," object can also be used to listen to messages coming from the Desktop plugin. See ",(0,a.kt)(l.default,{to:(0,o.default)("/docs/extending/create-plugin"),mdxType:"Link"},"Client Plugin API")," for details."),(0,a.kt)("p",null,"An example plugin to play a little Tic-Tac-Toe between the Flipper Desktop and a React Native app can be found inside this repository as well (run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn && yarn android")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native/ReactNativeFlipperExample")," to start the test project):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The React Native JavaScript based plugin implementation: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/flipper/tree/master/react-native/ReactNativeFlipperExample/FlipperTicTacToe.js"},"FlipperTicTacToe.js")),(0,a.kt)("li",{parentName:"ul"},"The Flipper Desktop plugin implementation: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/rn-tic-tac-toe/index.tsx"},"rn-tic-tac-toe/index.tsx"))))}d.isMDXComponent=!0}}]);