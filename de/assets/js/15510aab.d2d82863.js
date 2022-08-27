"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),l=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(f,s(s({ref:t},c),{},{components:n})):i.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var l=2;l<a;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={title:"DeFi App l\xf6schen",permalink:"/Delete_DeFi_App/"},s=void 0,p={unversionedId:"auto/Delete_DeFi_App",id:"auto/Delete_DeFi_App",title:"DeFi App l\xf6schen",description:"Anleitung um die DeFi App vollst\xe4ndig zu l\xf6schen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/auto/Delete_DeFi_App.md",sourceDirName:"auto",slug:"/auto/Delete_DeFi_App",permalink:"/DeFiChain-Wiki/de/docs/auto/Delete_DeFi_App",draft:!1,editUrl:"https://github.com/0ptim/DeFiChain-Wiki/tree/main/docs/auto/Delete_DeFi_App.md",tags:[],version:"current",lastUpdatedAt:1661610380,formattedLastUpdatedAt:"27. Aug. 2022",frontMatter:{title:"DeFi App l\xf6schen",permalink:"/Delete_DeFi_App/"},sidebar:"tutorialSidebar",previous:{title:"Wallet.dat besch\xe4digt Rettung fehlgeschlagen",permalink:"/DeFiChain-Wiki/de/docs/auto/corrupt_salvage_failed"},next:{title:"Kill defid Daemon",permalink:"/DeFiChain-Wiki/de/docs/auto/Kill_defid_Daemon"}},o={},l=[{value:"Windows:",id:"windows",level:3},{value:"Mac:",id:"mac",level:3}],c={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Anleitung um die DeFi App vollst\xe4ndig zu l\xf6schen."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wichtig: Es wird dringend empfohlen, das Wallet-Backup (eine Datei mit der Endung .dat) an mehreren sicheren Orten zu speichern. Zum Beispiel auf einem Speicherstick in einem Bankschlie\xdffach. Bevor du Dateien l\xf6schst, stelle sicher, dass du ein Backup deiner wallet.dat Dateien erstellt hast! Wenn du dir unsicher bist, ob deine Sicherungsdatei alle ben\xf6tigten Informationen enth\xe4lt und wirklich funktioniert, solltest du diese Sicherung zun\xe4chst auf einem anderen Computer ausprobieren. ",(0,r.kt)("a",{parentName:"strong",href:"/DeFiChain-Wiki/de/docs/auto/Suggestion_for_using_the_DeFi_app"},"Lies unsere Anleitung, wie du die DeFi App sicher nutzen kannst."))),(0,r.kt)("p",null,"Um alle Dateien l\xf6schen zu k\xf6nnen, ist es notwendig Zugriff auf versteckte Ordner zu besitzen. Die Anleitung daf\xfcr findest du hier: ",(0,r.kt)("a",{parentName:"p",href:"/DeFiChain-Wiki/de/docs/auto/Show_hidden_folders"},"Versteckte Ordner anzeigen")),(0,r.kt)("p",null,"Folgende Ordner m\xfcssen gel\xf6scht werden:"),(0,r.kt)("h3",{id:"windows"},"Windows:"),(0,r.kt)("p",null,"C:\\Users","\\","%username%","\\",".defi\n",(0,r.kt)("img",{alt:"C:Users%username%.defi",src:n(1373).Z,width:"900",height:"545"})),(0,r.kt)("p",null,"C:\\Users","\\","%username%\\AppData\\Local\\defi-app-updater\n",(0,r.kt)("img",{alt:"C:Users%username%AppDataLocaldefi-app-updater",src:n(2748).Z,width:"900",height:"542"})),(0,r.kt)("p",null,"C:\\Users","\\","%username%\\AppData\\Local\\Programs\\defi-app\n",(0,r.kt)("img",{alt:"C:Users%username%AppDataLocalProgramsdefi-app",src:n(7998).Z,width:"900",height:"541"})),(0,r.kt)("p",null,"C:\\Users","\\","%username%\\AppData\\Roaming\\DeFi Blockchain\n",(0,r.kt)("img",{alt:"C:Users%username%AppDataRoamingDeFi Blockchain",src:n(8867).Z,width:"900",height:"541"})),(0,r.kt)("p",null,"C:\\Users","\\","%username%\\AppData\\Roaming\\defi-app\n",(0,r.kt)("img",{alt:"C:Users%username%AppDataRoamingdefi-app",src:n(1788).Z,width:"900",height:"543"})),(0,r.kt)("h3",{id:"mac"},"Mac:"),(0,r.kt)("p",null,"/Applications/defi-app\n",(0,r.kt)("img",{alt:"/Applications/defi-app",src:n(1853).Z,width:"900",height:"633"})),(0,r.kt)("p",null,"/Users/%username%/.defi\n",(0,r.kt)("img",{alt:"/Users/%username%/.defi",src:n(7917).Z,width:"900",height:"510"})),(0,r.kt)("p",null,"/Users/%username%/Library/Application Support/DeFi\n",(0,r.kt)("img",{alt:"/Users/%username%/Library/Application Support/DeFi",src:n(3542).Z,width:"900",height:"513"})),(0,r.kt)("p",null,"/Users/%username%/Library/Application Support/defi-app\n",(0,r.kt)("img",{alt:"/Users/%username%/Library/Application Support/defi-app",src:n(2073).Z,width:"900",height:"513"})))}d.isMDXComponent=!0},1373:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bildschirmfoto_2021-03-12_um_21.58.53-f6546525befd531c6f00f0b4f0922fc6.png"},2748:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bildschirmfoto_2021-03-12_um_21.59.22-fdc3c6386306dd7208c3f676e06ea7eb.png"},7998:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bildschirmfoto_2021-03-12_um_21.59.52-cf33aa0360b0cd9e5f48b390126042fb.png"},8867:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bildschirmfoto_2021-03-12_um_22.00.19-fb30f563ec99c70a83c7007959192091.png"},1788:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bildschirmfoto_2021-03-12_um_22.00.40-bd8e3e5e63bf372160033d2dcd5176c9.png"},1853:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bildschirmfoto_2021-03-13_um_00.20.40-a2fa335d28dffdc0e4383660dcee0b61.png"},7917:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bildschirmfoto_2021-03-13_um_00.34.04-e371374ecbd98d666096e1bb214f4ed3.png"},3542:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bildschirmfoto_2021-03-13_um_00.35.09-d31d719a7ddcc0038278823deaf6b154.png"},2073:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Bildschirmfoto_2021-03-13_um_00.35.291-7c88ff4a17205f53868384a599bc338b.png"}}]);