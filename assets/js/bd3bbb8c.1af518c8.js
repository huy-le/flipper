(self.webpackChunk=self.webpackChunk||[]).push([[3626],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,g=u["".concat(s,".").concat(m)]||u[m]||l[m]||o;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>i})},4996:(e,t,r)=>{"use strict";r.r(t),r.d(t,{useBaseUrlUtils:()=>o,default:()=>a});var n=r(2263),i=r(3919);function o(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,p=void 0!==a&&a,s=o.absolute,c=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(p)return t+r;var d=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+d:d}(o,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},9579:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>p,metadata:()=>s,toc:()=>c,default:()=>l});var n=r(4034),i=r(9973),o=(r(7294),r(3905)),a=r(4996),p={id:"layout-inspector",title:"Extending Layout Inspector"},s={unversionedId:"extending/layout-inspector",id:"extending/layout-inspector",isDocsHomePage:!1,title:"Extending Layout Inspector",description:"The Layout Inspector plugin can be extended to support new kinds of UI components. You can also extend it to customize the data made available in the sidebar.",source:"@site/../docs/extending/layout-inspector.mdx",sourceDirName:"extending",slug:"/extending/layout-inspector",permalink:"/docs/extending/layout-inspector",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/layout-inspector.mdx",version:"current",frontMatter:{id:"layout-inspector",title:"Extending Layout Inspector"},sidebar:"extending",previous:{title:"Client Plugin Lifecycle",permalink:"/docs/extending/client-plugin-lifecycle"}},c=[{value:"Android",id:"android",children:[{value:"Node Descriptor",id:"node-descriptor",children:[]},{value:"Register a Descriptor",id:"register-a-descriptor",children:[]},{value:"Extending an existing Descriptor",id:"extending-an-existing-descriptor",children:[]}]},{value:"iOS",id:"ios",children:[{value:"SKNodeDescriptor",id:"sknodedescriptor",children:[]},{value:"Register a Descriptor",id:"register-a-descriptor-1",children:[]},{value:"Extending an existing Descriptor",id:"extending-an-existing-descriptor-1",children:[]},{value:"Subdescriptors",id:"subdescriptors",children:[]}]}],d={toc:c};function l(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Layout Inspector plugin can be extended to support new kinds of UI components. You can also extend it to customize the data made available in the sidebar.\nDepending on whether you want to expose new data on Android or iOS, there are different interfaces you can use."),(0,o.kt)("img",{alt:"Layout Inspector",src:(0,a.default)("img/layoutinspector.png")}),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("h3",{id:"node-descriptor"},"Node Descriptor"),(0,o.kt)("p",null,"To expose an object to the Layout Inspector in Flipper you have to implement a ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeDescriptor")," which describes your object. For example the ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewDescriptor")," describes ",(0,o.kt)("inlineCode",{parentName:"p"},"View")," objects and the ",(0,o.kt)("inlineCode",{parentName:"p"},"FragmentDescriptor")," describe ",(0,o.kt)("inlineCode",{parentName:"p"},"Fragment")," instances. These descriptors have a set of callbacks used to expose children and data associated with the object they describe. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/b0d2983bd440dc41ec67089e11acd394e6566b8f/android/src/main/java/com/facebook/flipper/plugins/inspector/NodeDescriptor.java"},(0,o.kt)("inlineCode",{parentName:"a"},"NodeDescriptor"))," for the full API."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NodeDescriptor")," implementations should not subclass other ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeDescriptor")," implementations. Instead to re-use existing behavior from a more generic descriptor, you should prefer to use delegate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class ViewGroupDescriptor extends ViewDescriptor<ViewGroup> {\n  public String getName(ViewGroup node) {\n    return super.getName(node);\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class ViewGroupDescriptor extends NodeDescriptor<ViewGroup> {\n  public String getName(ViewGroup node) {\n    NodeDescriptor descriptor = descriptorForClass(View.class);\n    return descriptor.getName(node);\n  }\n}\n")),(0,o.kt)("h3",{id:"register-a-descriptor"},"Register a Descriptor"),(0,o.kt)("p",null,"Register your descriptor in the ",(0,o.kt)("inlineCode",{parentName:"p"},"DescriptorMapping")," used to instantiate the ",(0,o.kt)("inlineCode",{parentName:"p"},"InspectorFlipperPlugin"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"final FlipperClient client = FlipperClient.createInstance(mContext);\nfinal DescriptorMapping descriptorMapping = DescriptorMapping.withDefaults();\ndescriptorMapping.register(MyObject.class, new MyObjectDescriptor());\nclient.addPlugin(new InspectorFlipperPlugin(mContext, descriptorMapping));\n")),(0,o.kt)("h3",{id:"extending-an-existing-descriptor"},"Extending an existing Descriptor"),(0,o.kt)("p",null,"You may not need to create a whole new descriptor but instead you may just want to change extend an existing one to expose some new piece of data. In that case just locate the correct descriptor and edit its ",(0,o.kt)("inlineCode",{parentName:"p"},"getData"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getAttributes")," and perhaps ",(0,o.kt)("inlineCode",{parentName:"p"},"setData")," methods."),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("h3",{id:"sknodedescriptor"},"SKNodeDescriptor"),(0,o.kt)("p",null,"To expose an object to the layout inspector in Sonar you have to implement a ",(0,o.kt)("inlineCode",{parentName:"p"},"SKNodeDescriptor")," which describes the object. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"SKViewDescriptor")," describes ",(0,o.kt)("inlineCode",{parentName:"p"},"UIView")," objects, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"SKComponentDescriptor")," describes ",(0,o.kt)("inlineCode",{parentName:"p"},"CKComponent")," objects. These descriptors have necessary callbacks which is used to expose its children and data associated with the object they describe. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/b0d2983bd440dc41ec67089e11acd394e6566b8f/iOS/Plugins/FlipperKitLayoutPlugin/FlipperKitLayoutPlugin/SKNodeDescriptor.h"},"SKNodeDescriptor")," for the full available API."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SKNodeDescriptor")," implementations should ",(0,o.kt)("strong",{parentName:"p"},"never")," be subclass other ",(0,o.kt)("inlineCode",{parentName:"p"},"SKNodeDescriptor")," implementations. Instead re-use existing behaviour by explicitly using other descriptors and delegate behaviour."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},"@interface SKArbitraryViewDescriptor : SKViewDescriptor<ArbitraryView *>\n\n@end\n\n@implementation SKArbitraryViewDescriptor\n\n- (NSString *)identifierForNode:(ArbitraryView *)node\n{\n  return [super identifierForNode:node];\n}\n\n@end\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},"@interface SKArbitraryViewDescriptor : SKNodeDescriptor<ArbitraryView *>\n@end\n\n@implementation SKArbitraryViewDescriptor\n\n- (NSString *)identifierForNode:(ArbitraryView *)node\n{\n  SKNodeDescriptor *descriptor = [self descriptorForClass:[UIView class]];\n  return [descriptor identifierForNode:node];\n}\n\n@end\n")),(0,o.kt)("h3",{id:"register-a-descriptor-1"},"Register a Descriptor"),(0,o.kt)("p",null,"In order to register your descriptor for an object, you use ",(0,o.kt)("inlineCode",{parentName:"p"},"SKDescriptorMapper"),". After registering all descriptors you pass on the descriptor-mapper object to the plugin during initialisation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},"[descriptorMapper registerDescriptor:[SKArbitraryViewDescriptor new]\n                            forClass:[ArbitraryView class]];\n\n")),(0,o.kt)("p",null,"There's already a set of descriptors registered by default in\n",(0,o.kt)("inlineCode",{parentName:"p"},"SKDescriptorMapper"),", and if you want to add a descriptor to the default set\nyou can do it in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/b0d2983bd440dc41ec67089e11acd394e6566b8f/iOS/Plugins/FlipperKitLayoutPlugin/FlipperKitLayoutPlugin/SKDescriptorMapper.mm"},(0,o.kt)("inlineCode",{parentName:"a"},"SKDescriptorMapper")),"."),(0,o.kt)("h3",{id:"extending-an-existing-descriptor-1"},"Extending an existing Descriptor"),(0,o.kt)("p",null,"Sometimes all you need is to extend the functionality of an existing descriptor. In that case you just need to locate the correct descriptor and edit the methods ",(0,o.kt)("inlineCode",{parentName:"p"},"dataForNode"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"attributesForNode"),", and possibly ",(0,o.kt)("inlineCode",{parentName:"p"},"dataMutationsForNode"),"."),(0,o.kt)("h3",{id:"subdescriptors"},"Subdescriptors"),(0,o.kt)("p",null,"If you want to extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"SKComponentKitLayoutDescriptor")," and add an additional section based on the nodes of the ",(0,o.kt)("inlineCode",{parentName:"p"},"SKComponentLayoutDescriptor"),", you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"SKSubDescriptor"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'#import <FlipperKitLayoutComponentKitSupport/SKComponentLayoutWrapper.h>\n\nNSString *YourSubDescriptor(SKComponentLayoutWrapper *)node {\n    return @"Meta data";\n}\n\n// At setup time, you must register it:\n[SKComponentLayoutDescriptor registerSubDescriptor:&YourSubDescriptor forName:@"Section Name"];\n')),(0,o.kt)("p",null,"Swift support is not yet available because you must access ",(0,o.kt)("inlineCode",{parentName:"p"},"SKComponentLayoutWrapper")," to implement a subdescriptor."))}l.isMDXComponent=!0}}]);