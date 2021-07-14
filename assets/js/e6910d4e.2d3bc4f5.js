(self.webpackChunk=self.webpackChunk||[]).push([[4616],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,g=d["".concat(p,".").concat(f)]||d[f]||c[f]||o;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var i=n(9973),r=n(7294),o=n(3727),a=n(3919),l=n(412),p=(0,r.createContext)({collectLink:function(){}}),s=n(4996);const u=function(e){var t,n,u,c=e.isNavLink,d=e.to,f=e.href,g=e.activeClassName,m=e.isActive,h=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,v=void 0===b||b,y=(0,i.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=(0,s.useBaseUrlUtils)().withBaseUrl,w=(0,r.useContext)(p),O=d||f,C=(0,a.Z)(O),F=null==O?void 0:O.replace("pathname://",""),N=void 0!==F?(n=F,v&&function(e){return e.startsWith("/")}(n)?k(n):n):void 0,D=(0,r.useRef)(!1),P=c?o.OL:o.rU,S=l.default.canUseIntersectionObserver;(0,r.useEffect)((function(){return!S&&C&&null!=N&&window.docusaurus.prefetch(N),function(){S&&u&&u.disconnect()}}),[N,S,C]);var A=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,_=!N||!C||A;return N&&C&&!A&&!h&&w.collectLink(N),_?r.createElement("a",Object.assign({href:N},O&&!C&&{target:"_blank",rel:"noopener noreferrer"},y)):r.createElement(P,Object.assign({},y,{onMouseEnter:function(){D.current||null==N||(window.docusaurus.preload(N),D.current=!0)},innerRef:function(e){var t,n;S&&e&&C&&(t=e,n=function(){null!=N&&window.docusaurus.prefetch(N)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:N||""},c&&{isActive:m,activeClassName:g}))}},3919:(e,t,n)=>{"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:()=>i,Z:()=>r})},4996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{useBaseUrlUtils:()=>o,default:()=>a});var i=n(2263),r=n(3919);function o(){var e=(0,i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,a=o.forcePrependBaseUrl,l=void 0!==a&&a,p=o.absolute,s=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(7294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var i=n(7294),r=n(944),o=n(6010);const a="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,s=39;const u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,c=e.values,d=e.groupId,f=e.className,g=(0,r.Z)(),m=g.tabGroupChoices,h=g.setTabGroupChoices,b=(0,i.useState)(u),v=b[0],y=b[1],k=i.Children.toArray(e.children),w=[];if(null!=d){var O=m[d];null!=O&&O!==v&&c.some((function(e){return e.value===O}))&&y(O)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),i=c[n].value;y(i),null!=d&&(h(d,i),setTimeout((function(){var e,n,i,r,o,a,p,s;(e=t.getBoundingClientRect(),n=e.top,i=e.left,r=e.bottom,o=e.right,a=window,p=a.innerHeight,s=a.innerWidth,n>=0&&o<=s&&r<=p&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},F=function(e){var t,n;switch(e.keyCode){case s:var i=w.indexOf(e.target)+1;n=w[i]||w[0];break;case p:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},f)},c.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.default)("tabs__item",a,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:F,onFocus:C,onClick:C},n)}))),t?(0,i.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const i=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(7294),r=n(9443);const o=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7753:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>u,metadata:()=>c,toc:()=>d,default:()=>g});var i=n(4034),r=n(9973),o=(n(7294),n(3905)),a=n(4996),l=n(6742),p=n(1395),s=n(8215),u={id:"ios-native",title:"Adding Flipper to iOS apps",sidebar_label:"Generic iOS apps"},c={unversionedId:"getting-started/ios-native",id:"getting-started/ios-native",isDocsHomePage:!1,title:"Adding Flipper to iOS apps",description:"We support both Swift and Objective-C for Flipper with CocoaPods as build and distribution mechanism.",source:"@site/../docs/getting-started/ios-native.mdx",sourceDirName:"getting-started",slug:"/getting-started/ios-native",permalink:"/docs/getting-started/ios-native",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/getting-started/ios-native.mdx",version:"current",sidebar_label:"Generic iOS apps",frontMatter:{id:"ios-native",title:"Adding Flipper to iOS apps",sidebar_label:"Generic iOS apps"},sidebar:"setup",previous:{title:"Adding Flipper to Android apps with Gradle",permalink:"/docs/getting-started/android-native"},next:{title:"Set up your React Native App",permalink:"/docs/getting-started/react-native"}},d=[{value:"CocoaPods",id:"cocoapods",children:[]},{value:"For pure Objective-C projects",id:"for-pure-objective-c-projects",children:[]},{value:"Enabling plugins",id:"enabling-plugins",children:[]},{value:"Having trouble?",id:"having-trouble",children:[]}],f={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We support both Swift and Objective-C for Flipper with CocoaPods as build and distribution mechanism."),(0,o.kt)("h2",{id:"cocoapods"},"CocoaPods"),(0,o.kt)("p",null,"The following configuration assumed CocoaPods 1.9+."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"project 'MyApp.xcodeproj'\nflipperkit_version = '0.96.0'\n\ntarget 'MyApp' do\n  platform :ios, '10.0'\n\n  # It is likely that you'll only want to include Flipper in debug builds,\n  # in which case you add the `:configuration` directive:\n  pod 'FlipperKit', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitLayoutComponentKitSupport', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitUserDefaultsPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  # ...unfortunately at this time that means you'll need to explicitly mark\n  # transitive dependencies as being for debug build only as well:\n  pod 'Flipper-DoubleConversion', :configuration => 'Debug'\n  pod 'Flipper-Folly', :configuration => 'Debug'\n  pod 'Flipper-Glog', :configuration => 'Debug'\n  pod 'Flipper-PeerTalk', :configuration => 'Debug'\n  pod 'CocoaLibEvent', :configuration => 'Debug'\n  pod 'boost-for-react-native', :configuration => 'Debug'\n  pod 'OpenSSL-Universal', :configuration => 'Debug'\n  pod 'CocoaAsyncSocket', :configuration => 'Debug'\n  # ...except, of course, those transitive dependencies that your\n  # application itself depends, e.g.:\n  pod 'ComponentKit', '~> 0.31'\n\n  # If you use `use_frameworks!` in your Podfile,\n  # uncomment the below $static_framework array and also\n  # the pre_install section.  This will cause Flipper and\n  # it's dependencies to be built as a static library and all other pods to\n  # be dynamic.\n  #\n  # NOTE Doing this may lead to a broken build if any of these are also\n  #      transitive dependencies of other dependencies and are expected\n  #      to be built as frameworks.\n  #\n  # $static_framework = ['FlipperKit', 'Flipper', 'Flipper-Folly',\n  #   'CocoaAsyncSocket', 'ComponentKit', 'Flipper-DoubleConversion',\n  #   'Flipper-Glog', 'Flipper-PeerTalk', 'Flipper-RSocket', 'Yoga', 'YogaKit',\n  #   'CocoaLibEvent', 'OpenSSL-Universal', 'boost-for-react-native']\n  #\n  # pre_install do |installer|\n  #   Pod::Installer::Xcode::TargetValidator.send(:define_method, :verify_no_static_framework_transitive_dependencies) {}\n  #   installer.pod_targets.each do |pod|\n  #       if $static_framework.include?(pod.name)\n  #         def pod.build_type;\n  #           Pod::BuildType.static_library\n  #         end\n  #       end\n  #     end\n  # end\nend\n")),(0,o.kt)("h2",{id:"for-pure-objective-c-projects"},"For pure Objective-C projects"),(0,o.kt)("p",null,"For pure Objective-C projects, add the following things in your settings:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"/usr/lib/swift")," as the first entry of the ",(0,o.kt)("inlineCode",{parentName:"li"},"LD_RUNPATH_SEARCH_PATHS")),(0,o.kt)("li",{parentName:"ol"},"Add the following in ",(0,o.kt)("inlineCode",{parentName:"li"},"LIBRARY_SEARCH_PATHS"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"\\"$(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)\\"",\n"\\"$(TOOLCHAIN_DIR)/usr/lib/swift-5.0/$(PLATFORM_NAME)\\"",\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"If after the above two steps there are still error's like ",(0,o.kt)("inlineCode",{parentName:"li"},"Undefined symbol _swift_getFunctionReplacement")," then set ",(0,o.kt)("inlineCode",{parentName:"li"},"DEAD_CODE_STRIPPING")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"YES"),". Reference for this fix is ",(0,o.kt)("a",{parentName:"li",href:"https://forums.swift.org/t/undefined-symbol-swift-getfunctionreplacement/30495/4"},"here"))),(0,o.kt)("p",null,"This is done to overcome a bug with Xcode 11 which fails to compile swift code when bitcode is enabled. Flipper transitively depends on YogaKit which is written in Swift. More about this issue can be found ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/krzyzanowskim/status/1151549874653081601?s=21"},"here")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Carthage/Carthage/issues/2825"},"here"),"."),(0,o.kt)("p",null,"Install the dependencies by running ",(0,o.kt)("inlineCode",{parentName:"p"},"pod install"),". You can now import and initialize Flipper in your\nAppDelegate."),(0,o.kt)(p.Z,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ios",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKit/FlipperClient.h>\n#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n#import <FlipperKitLayoutComponentKitSupport/FlipperKitLayoutComponentKitSupport.h>\n#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>\n#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>\n\n@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n  FlipperClient *client = [FlipperClient sharedClient];\n  SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];\n  [FlipperKitLayoutComponentKitSupport setUpWithDescriptorMapper: layoutDescriptorMapper];\n  [client addPlugin: [[FlipperKitLayoutPlugin alloc] initWithRootNode: application\n                                                 withDescriptorMapper: layoutDescriptorMapper]];\n\n  [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];\n  [client addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n  [client start];\n  ...\n}\n@end\n"))),(0,o.kt)(s.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"import UIKit\nimport FlipperKit\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n  var window: UIWindow?\n\n\n  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    // Override point for customization after application launch.\n    let client = FlipperClient.shared()\n    let layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\n    FlipperKitLayoutComponentKitSupport.setUpWith(layoutDescriptorMapper)\n    client?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n    client?.start()\n    return true\n  }\n}\n")))),(0,o.kt)("h2",{id:"enabling-plugins"},"Enabling plugins"),(0,o.kt)("p",null,"Finally, you need to add plugins to your Flipper client. Above, we have only added the Layout Inspector plugin to get you started. See ",(0,o.kt)(l.Z,{to:(0,a.default)("/docs/setup/plugins/network"),mdxType:"Link"},"Network Plugin")," and ",(0,o.kt)(l.Z,{to:(0,a.default)("/docs/setup/layout-plugin"),mdxType:"Link"},"Layout Inspector Plugin")," for information on how to add them, and also enable Litho or ComponentKit support. You can check the sample apps in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/flipper"},"GitHub repo")," for examples of integrating other plugins."),(0,o.kt)("h2",{id:"having-trouble"},"Having trouble?"),(0,o.kt)("p",null,"See the ",(0,o.kt)(l.Z,{to:(0,a.default)("/docs/troubleshooting"),mdxType:"Link"},"troubleshooting page")," for help with known problems."))}g.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.r(t),n.d(t,{default:()=>r})}}]);