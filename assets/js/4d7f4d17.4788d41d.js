"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7774],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(o),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||n;return o?a.createElement(f,l(l({ref:t},u),{},{components:o})):a.createElement(f,l({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,l=new Array(n);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<n;p++)l[p]=o[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},6085:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=o(7462),r=(o(7294),o(3905));const n={title:"Debug.log",permalink:"/Debug.log/"},l=void 0,i={unversionedId:"auto/Debug.log",id:"auto/Debug.log",title:"Debug.log",description:"If the DeFiChain App Wallet does not work properly, it can be helpful to check the debug.log file for error messages.",source:"@site/docs/auto/Debug.log.md",sourceDirName:"auto",slug:"/auto/Debug.log",permalink:"/DeFiChain-Wiki/docs/auto/Debug.log",draft:!1,editUrl:"https://github.com/0ptim/DeFiChain-Wiki/tree/main/docs/auto/Debug.log.md",tags:[],version:"current",lastUpdatedAt:1661610380,formattedLastUpdatedAt:"Aug 27, 2022",frontMatter:{title:"Debug.log",permalink:"/Debug.log/"},sidebar:"tutorialSidebar",previous:{title:"Atomic Swap",permalink:"/DeFiChain-Wiki/docs/auto/Atomic_Swap"},next:{title:"DeFi Wallet error messages",permalink:"/DeFiChain-Wiki/docs/auto/DeFi_Wallet_error_messages"}},s={},p=[{value:"Wallet.dat corrupt, salvage failed",id:"walletdat-corrupt-salvage-failed",level:2},{value:"Detailed error message",id:"detailed-error-message",level:3},{value:"Solution:",id:"solution",level:3},{value:"Error: Inconsistent data in default config",id:"error-inconsistent-data-in-default-config",level:2},{value:"No data found",id:"no-data-found",level:2},{value:"No space left on device",id:"no-space-left-on-device",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If the DeFiChain App Wallet does not work properly, it can be helpful to check the debug.log file for error messages."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Windows: Go to C:\\Users","\\","%username%\\AppData\\Roaming\\DeFi Blockchain"),(0,r.kt)("li",{parentName:"ol"},"Mac: Got to /Users/%username%/Library/Application Support/DeFi"),(0,r.kt)("li",{parentName:"ol"},"Open the debug.log"),(0,r.kt)("li",{parentName:"ol"},"Read the error message at the end of the file and try to find and fix the error.")),(0,r.kt)("p",null,"Some error messages are documented below."),(0,r.kt)("h2",{id:"walletdat-corrupt-salvage-failed"},"Wallet.dat corrupt, salvage failed"),(0,r.kt)("h3",{id:"detailed-error-message"},"Detailed error message"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"init message: Verifying wallet(s)..."),(0,r.kt)("p",{parentName:"blockquote"},"Using BerkeleyDB version Berkeley DB 4.8.30: (April\xa0 9, 2010)"),(0,r.kt)("p",{parentName:"blockquote"},"Using wallet C:/Users","\\","%username%\\Download\\DeFiChain\nWallets\\Wallet.dat"),(0,r.kt)("p",{parentName:"blockquote"},"BerkeleyEnvironment::Open:\nLogDir=C:/Users","\\","%username%\\Download\\DeFiChain Wallets\\database\nErrorFile=C:/Users","\\","%username%\\Download\\DeFiChain Wallets\\db.log"),(0,r.kt)("p",{parentName:"blockquote"},"Failed to rename Wallet.dat to Wallet.dat.1614585866.bak"),(0,r.kt)("p",{parentName:"blockquote"},"Error: Wallet.dat corrupt, salvage failed"),(0,r.kt)("p",{parentName:"blockquote"},"Shutdown: In progress..."),(0,r.kt)("p",{parentName:"blockquote"},"scheduler thread interrupt"),(0,r.kt)("p",{parentName:"blockquote"},"Shutdown: done")),(0,r.kt)("h3",{id:"solution"},"Solution:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Restart the computer"),(0,r.kt)("li",{parentName:"ol"},"Move the folder mentioned above to another location. In this example above: C:/Users","\\","%username%\\Download\\DeFiChain Wallets"),(0,r.kt)("li",{parentName:"ol"},"Launch the DeFiChain app")),(0,r.kt)("p",null,"I have not found a solution for the corrupted wallet dat file. It seems that I destroyed this file myself because I opened it with the editor program and saved it again. This seems to destroy the file."),(0,r.kt)("p",null,"Solution: Use original BackUp."),(0,r.kt)("h2",{id:"error-inconsistent-data-in-default-config"},"Error: Inconsistent data in default config"),(0,r.kt)("p",null,"We do not yet know of a simple solution to this problem. The only solution we know is to delete the app completely and reinstall it."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/DeFiChain-Wiki/docs/auto/Delete_DeFi_App"},"Delete DeFi App")),(0,r.kt)("h2",{id:"no-data-found"},"No data found"),(0,r.kt)("p",null,"We do not yet know of a simple solution to this problem. The only solution we know is to delete the app completely and reinstall it."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/DeFiChain-Wiki/docs/auto/Delete_DeFi_App"},"Delete DeFi App")),(0,r.kt)("h2",{id:"no-space-left-on-device"},"No space left on device"),(0,r.kt)("p",null,"The memory space is full. Some users have reported that this error message appears despite free memory. We suspect that the DeFi app is not compatible with Fusion Drive."))}d.isMDXComponent=!0}}]);