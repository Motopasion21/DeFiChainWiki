"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3646],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(a),k=r,c=s["".concat(d,".").concat(k)]||s[k]||m[k]||l;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7968:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={title:"Liquidity Mining",permalink:"/Liquidity_Mining/"},i=void 0,o={unversionedId:"auto/Liquidity_Mining",id:"auto/Liquidity_Mining",title:"Liquidity Mining",description:'For the decentralized exchange on DeFiChain to work correctly, investors must provide liquidity to both sides of the liquidity pools, which is known as "liquidity mining."',source:"@site/docs/auto/Liquidity_Mining.md",sourceDirName:"auto",slug:"/auto/Liquidity_Mining",permalink:"/DeFiChain-Wiki/docs/auto/Liquidity_Mining",draft:!1,editUrl:"https://github.com/0ptim/DeFiChain-Wiki/tree/main/docs/auto/Liquidity_Mining.md",tags:[],version:"current",lastUpdatedAt:1661610380,formattedLastUpdatedAt:"Aug 27, 2022",frontMatter:{title:"Liquidity Mining",permalink:"/Liquidity_Mining/"},sidebar:"tutorialSidebar",previous:{title:"Pink Paper",permalink:"/DeFiChain-Wiki/docs/auto/Pink_Paper"},next:{title:"Block Rewards",permalink:"/DeFiChain-Wiki/docs/auto/Block_Rewards"}},d={},p=[{value:"Block rewards",id:"block-rewards",level:2},{value:"Commissions from DEX users",id:"commissions-from-dex-users",level:2}],u={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'For the decentralized exchange on DeFiChain to work correctly, investors must provide liquidity to both sides of the liquidity pools, which is known as "liquidity mining."'),(0,r.kt)("p",null,"To incentivise liquidity providers, they earn two different types of revenue in compensation for price volatility, which may cause ",(0,r.kt)("a",{parentName:"p",href:"/DeFiChain-Wiki/docs/auto/Impermanent_Loss"},"impermanent loss"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DFI rewards per block (which are currently being awarded due to the fact that there is not currently enough swap commissions to provide the appropriate rewards to the liquidity providers."),(0,r.kt)("li",{parentName:"ul"},"Fees for each swap on the Decentralized Exchange (DEX)")),(0,r.kt)("h2",{id:"block-rewards"},"Block rewards"),(0,r.kt)("p",null,"At the moment, 45 DFI out of 200 DFI per block are used to pay the liquidity providers. With DeFi Improvement Proposal 3 (DFIP 3) this amount was increased by 55 DFI/block from the original fixed airdrop amount. Additionally, the dLTC and dBCH pools will be rewarded from the airdrop amount. The remaining DFI amount can be found on this address: ",(0,r.kt)("a",{parentName:"p",href:"https://dex.defichain.com/mainnet/address/8UAhRuUFCyFUHEPD7qvtj8Zy2HxF5HH5nb"},"8UAhRuUFCyFUHEPD7qvtj8Zy2HxF5HH5nb")),(0,r.kt)("p",null,"The dDOGE pool is a marketing campaign and is rewards are mostly paid by Cake and some DeFiChain community members. The block reward is provided from this address: ",(0,r.kt)("a",{parentName:"p",href:"https://dex.defichain.com/mainnet/address/dbzD1wUTqb1WQLHv9jz5M2fMF1h9VqaXyK"},"dbzD1wUTqb1WQLHv9jz5M2fMF1h9VqaXyK")),(0,r.kt)("p",null,'With this we are getting the following block rewards for liquidity miners. The values in brackets are the rewards after the balance of the mentioned addresses reached zero: (this section has become outdated, waiting for more information) Block Rewards for Cryptoasset Liquidity Pools ("d" in front of the cryptoasset, or any other asset for that matter, simply is a symbol showing that the cryptoasset is not native but rather a DeFiChain token which is backed by collateral)'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"(rewards are given in DFI/block)"),(0,r.kt)("th",{parentName:"tr",align:null},"dBTC-DFI"),(0,r.kt)("th",{parentName:"tr",align:null},"dETH-DFI"),(0,r.kt)("th",{parentName:"tr",align:null},"dUSDT-DFI"),(0,r.kt)("th",{parentName:"tr",align:null},"dLTC-DFI"),(0,r.kt)("th",{parentName:"tr",align:null},"dBCH-DFI"),(0,r.kt)("th",{parentName:"tr",align:null},"dDOGE-DFI"),(0,r.kt)("th",{parentName:"tr",align:null},"DUSD-DFI"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Rewards"),(0,r.kt)("td",{parentName:"tr",align:null},"80"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bracketed Block Rewards"),(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"6.75"),(0,r.kt)("td",{parentName:"tr",align:null},"2.25"),(0,r.kt)("td",{parentName:"tr",align:null},"0 starting 9/2/2021"),(0,r.kt)("td",{parentName:"tr",align:null},"0 starting 17/3/2021"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1 starting 28/2/2021 ",(0,r.kt)("strong",{parentName:"td"},"tbd")),(0,r.kt)("td",{parentName:"tr",align:null},"?")))),(0,r.kt)("p",null,"Except for the DOGE pool, there is a countdown calculating the remaining blocks based on the address balance. The block count together with the average blocktime gives the expected duration for the high block rewards (cf. ",(0,r.kt)("a",{parentName:"p",href:"https://www.cakedefi-review.com/DefiChain?tab=overview"},"here"),")."),(0,r.kt)("p",null,"Block Rewards for Individual Stock Liquidity Pools"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"(rewards are given in DFI/block)"),(0,r.kt)("th",{parentName:"tr",align:null},"dTSLA-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dGME-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dAAPL-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dBABA-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dGOOGL-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dPLTR-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dNVDA-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dAMZN-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dCOIN-DUSD"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Rewards"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bracketed Block Rewards"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?")))),(0,r.kt)("p",null,"Block Rewards for Other Assets' Liquidity Pools"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"(rewards are given in DFI/block)"),(0,r.kt)("th",{parentName:"tr",align:null},"dSPY-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dQQQ-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dARKK-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dSLV-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dTLT-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dGLD-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dPDBC-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dVNQ-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dURTH-DUSD"),(0,r.kt)("th",{parentName:"tr",align:null},"dEEM-DUSD"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Rewards"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bracketed Block Rewards"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?")))),(0,r.kt)("h2",{id:"commissions-from-dex-users"},"Commissions from DEX users"),(0,r.kt)("p",null,"The second, currently smaller, part of the revenue comes from commissions from DEX users' swaps. From every swap a fee of 0.2% of the given coin is deducted and distributed proportionally to the liquidity\nproviders."),(0,r.kt)("p",null,"There is also an evaluation of the total fee amount on a daily basis ",(0,r.kt)("a",{parentName:"p",href:"https://www.cakedefi-review.com/DefiChain?tab=DEXFees"},"(Cake DeFi Review)"),"."))}m.isMDXComponent=!0}}]);