(self.webpackChunk=self.webpackChunk||[]).push([[2165],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||c[f]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var i=n(9973),r=n(7294),o=n(3727),a=n(3919),p=n(412),l=(0,r.createContext)({collectLink:function(){}}),s=n(4996);const d=function(e){var t,n,d,c=e.isNavLink,u=e.to,f=e.href,m=e.activeClassName,g=e.isActive,h=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,b=void 0===v||v,k=(0,i.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=(0,s.useBaseUrlUtils)().withBaseUrl,w=(0,r.useContext)(l),A=u||f,O=(0,a.Z)(A),C=null==A?void 0:A.replace("pathname://",""),N=void 0!==C?(n=C,b&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,F=(0,r.useRef)(!1),P=c?o.OL:o.rU,x=p.default.canUseIntersectionObserver;(0,r.useEffect)((function(){return!x&&O&&null!=N&&window.docusaurus.prefetch(N),function(){x&&d&&d.disconnect()}}),[N,x,O]);var S=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,j=!N||!O||S;return N&&O&&!S&&!h&&w.collectLink(N),j?r.createElement("a",Object.assign({href:N},A&&!O&&{target:"_blank",rel:"noopener noreferrer"},k)):r.createElement(P,Object.assign({},k,{onMouseEnter:function(){F.current||null==N||(window.docusaurus.preload(N),F.current=!0)},innerRef:function(e){var t,n;x&&e&&O&&(t=e,n=function(){null!=N&&window.docusaurus.prefetch(N)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:N||""},c&&{isActive:g,activeClassName:m}))}},3919:(e,t,n)=>{"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:()=>i,Z:()=>r})},4996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{useBaseUrlUtils:()=>o,default:()=>a});var i=n(2263),r=n(3919);function o(){var e=(0,i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,a=o.forcePrependBaseUrl,p=void 0!==a&&a,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(p)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+d:d}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},6440:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>d,default:()=>u});var i=n(4034),r=n(9973),o=(n(7294),n(3905)),a=n(4996),p=n(6742),l={id:"android-native",title:"Adding Flipper to Android apps with Gradle",sidebar_label:"Android with Gradle"},s={unversionedId:"getting-started/android-native",id:"getting-started/android-native",isDocsHomePage:!1,title:"Adding Flipper to Android apps with Gradle",description:"To set up Flipper for Android, you need to add the neccessary dependencies to your",source:"@site/../docs/getting-started/android-native.mdx",sourceDirName:"getting-started",slug:"/getting-started/android-native",permalink:"/docs/getting-started/android-native",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/getting-started/android-native.mdx",version:"current",sidebar_label:"Android with Gradle",frontMatter:{id:"android-native",title:"Adding Flipper to Android apps with Gradle",sidebar_label:"Android with Gradle"},sidebar:"setup",previous:{title:"Desktop App",permalink:"/docs/getting-started/index"},next:{title:"Adding Flipper to iOS apps",permalink:"/docs/getting-started/ios-native"}},d=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Application Setup",id:"application-setup",children:[]},{value:"Diagnostics",id:"diagnostics",children:[]},{value:"Android Snapshots",id:"android-snapshots",children:[]},{value:"Enabling plugins",id:"enabling-plugins",children:[]},{value:"Having trouble?",id:"having-trouble",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To set up Flipper for Android, you need to add the neccessary dependencies to your\napp, initialize the Flipper client and enable the plugins you want to use. Optionally,\nyou can hook up the diagnostics Activity to help you troubleshoot connection issues."),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"Flipper is distributed via Maven Central. Add the dependencies to your ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," file.\nYou should also explicitly depend on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/soloader"},(0,o.kt)("inlineCode",{parentName:"a"},"soloader")),"\ninstead of relying on transitive dependency resolution which is getting deprecated\nwith Gradle 5."),(0,o.kt)("p",null,'We provide a "no-op" implementation of some oft-used Flipper interfaces you can\nuse to make it easier to strip Flipper from your release builds.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n  mavenCentral()\n}\n\ndependencies {\n  debugImplementation 'com.facebook.flipper:flipper:0.97.0'\n  debugImplementation 'com.facebook.soloader:soloader:0.10.1'\n\n  releaseImplementation 'com.facebook.flipper:flipper-noop:0.97.0'\n}\n")),(0,o.kt)("div",{class:"warning"},(0,o.kt)("p",null,"Please note that our ",(0,o.kt)("inlineCode",{parentName:"p"},"flipper-noop")," package provides a limited subset of the\nAPIs provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"flipper")," package and does not provide any plugin stubs.\nIt is recommended that you keep all Flipper instantiation code in a separate\nbuild variant to ensure it doesn't accidentally make it into your production\nbuilds. Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/flipper/tree/master/android/sample/src"},"the sample\napp")," to\nsee how to organise your Flipper initialization into debug and release\nvariants."),(0,o.kt)("p",null,"Alternatively, have a look at the third-party\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/theGlenn/flipper-android-no-op"},"flipper-android-no-op"),"\nrepository, which provides empty implementations for several Flipper plugins.")),(0,o.kt)("h2",{id:"application-setup"},"Application Setup"),(0,o.kt)("p",null,"Now you can initialize Flipper in your Application's ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreate")," method, which involves\ninitializing SoLoader (for loading the C++ part of Flipper) and starting a ",(0,o.kt)("inlineCode",{parentName:"p"},"FlipperClient"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.android.AndroidFlipperClient;\nimport com.facebook.flipper.android.utils.FlipperUtils;\nimport com.facebook.flipper.core.FlipperClient;\nimport com.facebook.flipper.plugins.inspector.DescriptorMapping;\nimport com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;\n\n\npublic class MyApplication extends Application {\n\n  @Override\n  public void onCreate() {\n    super.onCreate();\n    SoLoader.init(this, false);\n\n    if (BuildConfig.DEBUG && FlipperUtils.shouldEnableFlipper(this)) {\n      final FlipperClient client = AndroidFlipperClient.getInstance(this);\n      client.addPlugin(new InspectorFlipperPlugin(this, DescriptorMapping.withDefaults()));\n      client.start();\n    }\n  }\n}\n")),(0,o.kt)("h2",{id:"diagnostics"},"Diagnostics"),(0,o.kt)("p",null,"It's recommended that you add the following activity to the manifest, which can help diagnose integration issues and other problems:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<activity android:name="com.facebook.flipper.android.diagnostics.FlipperDiagnosticActivity"\n        android:exported="true"/>\n')),(0,o.kt)("h2",{id:"android-snapshots"},"Android Snapshots"),(0,o.kt)("p",null,"Feeling adventurous? We publish Android snapshot releases directly off of ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),"."),(0,o.kt)("p",null,"You can get the latest version by adding the Maven Snapshot repository to your sources\nand pointing to the most recent ",(0,o.kt)("inlineCode",{parentName:"p"},"-SNAPSHOT")," version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n  maven { url 'https://oss.sonatype.org/content/repositories/snapshots/' }\n}\n\ndependencies {\n  debugImplementation 'com.facebook.flipper:flipper:0.97.1-SNAPSHOT'\n  debugImplementation 'com.facebook.soloader:soloader:0.10.1'\n\n  releaseImplementation 'com.facebook.flipper:flipper-noop:0.97.1-SNAPSHOT'\n}\n")),(0,o.kt)("h2",{id:"enabling-plugins"},"Enabling plugins"),(0,o.kt)("p",null,"Finally, you need to add plugins to your Flipper client. Above, we have only added the Layout Inspector plugin to get you started. See ",(0,o.kt)(p.Z,{to:(0,a.default)("/docs/setup/plugins/network"),mdxType:"Link"},"Network Plugin")," and ",(0,o.kt)(p.Z,{to:(0,a.default)("/docs/setup/layout-plugin"),mdxType:"Link"},"Layout Inspector Plugin")," for information on how to add them, and also enable Litho or ComponentKit support. You can check the sample apps in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/flipper"},"GitHub repo")," for examples of integrating other plugins."),(0,o.kt)("h2",{id:"having-trouble"},"Having trouble?"),(0,o.kt)("p",null,"See the ",(0,o.kt)(p.Z,{to:(0,a.default)("/docs/troubleshooting"),mdxType:"Link"},"troubleshooting page")," for help with known problems."))}u.isMDXComponent=!0}}]);