"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7996],{3905:(a,e,i)=>{i.d(e,{Zo:()=>s,kt:()=>y});var r=i(7294);function n(a,e,i){return e in a?Object.defineProperty(a,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[e]=i,a}function l(a,e){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),i.push.apply(i,r)}return i}function t(a){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){n(a,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))}))}return a}function d(a,e){if(null==a)return{};var i,r,n=function(a,e){if(null==a)return{};var i,r,n={},l=Object.keys(a);for(r=0;r<l.length;r++)i=l[r],e.indexOf(i)>=0||(n[i]=a[i]);return n}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(r=0;r<l.length;r++)i=l[r],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(a,i)&&(n[i]=a[i])}return n}var k=r.createContext({}),o=function(a){var e=r.useContext(k),i=e;return a&&(i="function"==typeof a?a(e):t(t({},e),a)),i},s=function(a){var e=o(a.components);return r.createElement(k.Provider,{value:e},a.children)},u={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(a,e){var i=a.components,n=a.mdxType,l=a.originalType,k=a.parentName,s=d(a,["components","mdxType","originalType","parentName"]),m=o(i),y=n,c=m["".concat(k,".").concat(y)]||m[y]||u[y]||l;return i?r.createElement(c,t(t({ref:e},s),{},{components:i})):r.createElement(c,t({ref:e},s))}));function y(a,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var l=i.length,t=new Array(l);t[0]=m;var d={};for(var k in e)hasOwnProperty.call(e,k)&&(d[k]=e[k]);d.originalType=a,d.mdxType="string"==typeof a?a:n,t[1]=d;for(var o=2;o<l;o++)t[o]=i[o];return r.createElement.apply(null,t)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},8453:(a,e,i)=>{i.r(e),i.d(e,{assets:()=>k,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=i(7462),n=(i(7294),i(3905));const l={title:"Kasalar ve Krediler",description:"TODO - Short description of this page."},t=void 0,d={unversionedId:"auto/Vaults_Loans",id:"auto/Vaults_Loans",title:"Kasalar ve Krediler",description:"TODO - Short description of this page.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/auto/Vaults_Loans.md",sourceDirName:"auto",slug:"/auto/Vaults_Loans",permalink:"/tr/docs/auto/Vaults_Loans",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/i18n/tr/docusaurus-plugin-content-docs/current/auto/Vaults_Loans.md",tags:[],version:"current",lastUpdatedAt:1663836095,formattedLastUpdatedAt:"22 Eyl 2022",frontMatter:{title:"Kasalar ve Krediler",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"DeFiChain \xfczerinde takas edilebilir dVarl\u0131klar",permalink:"/tr/docs/auto/Tradable_dAssets_on_DeFiChain"},next:{title:"Collateral Ratio",permalink:"/tr/docs/auto/Collateral_Ratio"}},k={},o=[{value:"Kasalar ve Krediler",id:"vaults-and-loans",level:2},{value:"Teminat kurallar\u0131",id:"collateral-rules",level:3},{value:"Kasa se\xe7enekleri",id:"vault-options",level:3},{value:"DUSD-Kredi &#39;\xf6zel&#39;",id:"dusd-loan-specials",level:3},{value:"Tasfiye Edilen Kasalara Teklif Verme",id:"bidding-on-liquidated-vaults",level:3},{value:"\xd6zet",id:"summary",level:2},{value:"Avantajlar",id:"advantages",level:3},{value:"Dezavantajlar\u0131",id:"disadvantages",level:3},{value:"Kafa Kar\u0131\u015f\u0131kl\u0131\u011f\u0131na Neden Olan Konular",id:"common-topics-of-confusion",level:2},{value:"Oracle ve DEX Fiyatlar\u0131",id:"oracles-and-dex-prices",level:3},{value:"A\xe7\u0131k Art\u0131rmalarda Teklif Olmamas\u0131",id:"no-bids-on-auctions",level:3},{value:"Teminat kurallar\u0131 kasamda art\u0131k ge\xe7erli olmad\u0131\u011f\u0131nda tasfiye olur muyum?",id:"will-i-be-liquidated-when-the-collateral-rules-are-not-valid-anymore-in-my-vault",level:3}],s={toc:o};function u(a){let{components:e,...i}=a;return(0,n.kt)("wrapper",(0,r.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"vaults-and-loans"},"Kasalar ve Krediler"),(0,n.kt)("p",null,"DeFiChain'in en cazip \xf6zelliklerinden biri, olu\u015fturdu\u011funuz bir kasaya teminat yat\u0131rarak, kar\u015f\u0131l\u0131\u011f\u0131nda merkeziyetsiz varl\u0131klar \u015feklinde kredi \xe7ekebiliyor olmas\u0131d\u0131r. Kasalar birer bankaya benzerler, ancak merkezi de\u011fillerdir ve her kullan\u0131c\u0131 taraf\u0131ndan olu\u015fturulabiliyorlard\u0131r."),(0,n.kt)("h3",{id:"collateral-rules"},"Teminat kurallar\u0131"),(0,n.kt)("p",null,"Kullan\u0131c\u0131lar kasaya teminat olarak DFI, dBTC, dETH, DUSD, dUSDT ve dUSDC yat\u0131rabilirler."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'DUSD kredisi ("DUSD \xfcretimi/bas\u0131m\u0131") i\xe7in kasan\u0131n %50\'si DFI ile teminatland\u0131r\u0131lmal\u0131d\u0131r.'),(0,n.kt)("li",{parentName:"ul"},"Ba\u015fka bir dToken basarken kasan\u0131n %50'si DFI veya DUSD olmal\u0131d\u0131r"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/tr/docs/auto/DEX_Fee_Structure"},"DEX-stabilizasyon \xfccreti")," %1'in \xfczerinde oldu\u011fu s\xfcrece, teminattaki DUSD 1.20$ de\u011ferinde olacakt\u0131r.")),(0,n.kt)("h3",{id:"vault-options"},"Kasa se\xe7enekleri"),(0,n.kt)("p",null,'Kasalar\u0131n teminat oranlar\u0131 %150 ile %1000 aras\u0131nda se\xe7ilebilir. Bu y\xfczdelik, "Teminat\u0131n\u0131z\u0131n de\u011feri / kredinizin de\u011feri" oran\u0131n\u0131 ifade eder.'),(0,n.kt)("p",null,"Oran ne kadar y\xfcksek olursa, o kadar fazla teminata ihtiyac\u0131n\u0131z olur fakat kredi i\xe7in o kadar az faiz \xf6demeniz gerekir. Kredi faiz oranlar\u0131 olas\u0131 APR/APY ile kar\u015f\u0131la\u015ft\u0131r\u0131ld\u0131\u011f\u0131nda nispeten d\xfc\u015f\xfck oldu\u011fundan, kasaya \xe7ok fazla \xe7al\u0131\u015fmayan sermaye kilitlemek tercih edilmez, lakin gerekti\u011finden y\xfcksek bir oran se\xe7mek karl\u0131l\u0131k a\xe7\u0131s\u0131ndan \xe7ok verimli olmayacakt\u0131r."),(0,n.kt)("p",null,"Kripto piyasalar\u0131ndaki hareketler nedeniyle teminat de\u011ferinizin \xe7ok de\u011fi\u015fken oldu\u011funu unutmay\u0131n. Bu nedenle kasaya tasfiye oran\u0131ndan belirli bir miktar daha fazla teminat konulmas\u0131 tavsiye edilir. Peki ne kadar y\xfcksek olmal\u0131? Bu, ki\u015fisel risk tutumunuza ba\u011fl\u0131d\u0131r - hangi teminatland\u0131rma oran\u0131n\u0131n sizin geceleri iyi bir uyku \xe7ekmenize izin verece\u011fine siz karar verirsiniz. Genel anlamda %150'lik bir kasa'da %200 civar\u0131 bir teminatland\u0131rma oran\u0131 \"g\xfcvenli\" olarak nitelendirilir, \xe7\xfcnk\xfc belli bir seviyeye kadar volatiliteye kar\u015f\u0131 korunmu\u015f olursunuz."),(0,n.kt)("p",null,"Teminatland\u0131rma oran, fiyat dalgalanmalar\u0131ndan dolay\u0131 se\xe7ilen oran\u0131n alt\u0131na d\xfc\u015ferse, kasa otomatik olarak tasfiye s\xfcrecine g\xf6nderilir. Hem teminat\u0131n\u0131z\u0131n de\u011ferinin hem de kredinizin de\u011ferinin de\u011fi\u015fken oldu\u011funu unutmay\u0131n. Yani her iki taraftaki hareketler oran\u0131 etkiler - sadece teminat\u0131 de\u011fil. Tasfiye durumunda di\u011fer kullan\u0131c\u0131lar kasadaki teminat\u0131 almak i\xe7in a\xe7\u0131k artt\u0131rma \u015feklinde teklif verebilirler (daha fazla bilgiyi a\u015fa\u011f\u0131daki b\xf6l\xfcmde bulabilirsiniz)."),(0,n.kt)("p",null,"\xd6rnek: Kasan\u0131za teminat yat\u0131rd\u0131ktan sonra kredi olarak dTSLA \xe7ektiniz, yani g\xfcncel fiyattan dTSLA \xfcretmi\u015f oldunuz. dTSLA'n\u0131n de\u011ferleri y\xfckselirse, \xe7ekti\u011finiz kredinin de de\u011feri artar ve b\xf6ylece teminatland\u0131rma oran\u0131n\u0131z d\xfc\u015fer."),(0,n.kt)("p",null,"Kullan\u0131c\u0131lar, DUSD stablecoin'lerini veya hisse senedi, ETF ve emtia belirte\xe7leri gibi \xe7e\u015fitli dToken'lar\u0131 bu kredi mekanizmas\u0131 ile \xfcretebilir (minting). Bu, bir yat\u0131r\u0131mc\u0131n\u0131n birka\xe7 pozisyon (uzun/k\u0131sa/n\xf6tr) ve birka\xe7 farkl\u0131 ",(0,n.kt)("a",{parentName:"p",href:"/tr/docs/auto/Cashflow_Options"},"nakit ak\u0131\u015f\u0131")," pozisyonu almas\u0131na izin verir. Bir jetonu short'lamak, bir kredi al\u0131p, hemen satmak ve daha sonra daha ucuza geri almak \u015feklinde m\xfcmk\xfcn olur, lakin \xf6d\xfcn\xe7 al\u0131nan jetonun de\u011feri azald\u0131k\xe7a, krediyi geri \xf6demek i\xe7in daha az para gerekir. Daha fazla strateji i\xe7in ",(0,n.kt)("a",{parentName:"p",href:"/tr/docs/auto/Decentralized_Assets"},"merkeziyetsiz varl\u0131klar")," b\xf6l\xfcm\xfcne bakabilirsiniz."),(0,n.kt)("h3",{id:"dusd-loan-specials"},"DUSD-Kredi '\xf6zel'"),(0,n.kt)("p",null,"Algoritmik DUSD, DFI'li DUSD kredileri i\xe7in eski bir geri \xf6deme se\xe7ene\u011finden kaynaklananlard\u0131r (se\xe7enek art\u0131k etkin de\u011fildir). Destekli DUSD, aktif bir kasa ve teminat ile olu\u015fturulur. Bu makalenin yaz\u0131ld\u0131\u011f\u0131 g\xfcn itibariyle ekosistemde \xe7ok fazla desteklenmemi\u015f, yani algoritmik DUSD var. Toplulu\u011fun hedefi, ekosistem i\xe7indeki desteklenen token'lerin oran\u0131n\u0131 art\u0131rmakt\u0131r. Bu nedenle topluluk, DUSD kredileri i\xe7in te\u015fvik \xf6demeleri \xf6neren bir DFIP'ye oy verdi. %150 teminat oran\u0131yla \xe7ekilmi\u015f kredilerin standart faizi %5'tir."),(0,n.kt)("p",null,"DUSD kredilerinin yarat\u0131lmas\u0131n\u0131 art\u0131rmak i\xe7in ek olarak ",(0,n.kt)("a",{parentName:"p",href:"/tr/docs/auto/DEX_Fee_Structure"},"DEX-\xdccreti"),' taraf\u0131ndan yak\u0131lan DUSD miktar\u0131ndan hesaplanan negatif bir faiz oran\u0131 vard\u0131r. DEX \xfccretinin bir yar\u0131s\u0131 yan\u0131yor ve desteksiz DUSD ("Algo-DUSD") sistemden \xe7\u0131karken ikinci yar\u0131s\u0131 ise DUSD kredisi olan kullan\u0131c\u0131lara negatif faiz \u015feklinde \xf6deniyor. Yak\u0131lan miktar\u0131n her g\xfcn de\u011fi\u015fiyor olmas\u0131ndan kaynakl\u0131 DUSD kredileri i\xe7in \xf6denen g\xfcncel APR de de\u011fi\u015fkenlik g\xf6steriyor. G\xfcncel faiz oran\u0131na ',(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/11yTO43MBi3WQhtrIwUSpnNMaPVIy8zVVEz8TUyI46VI/edit#gid=2139878934"},"buradan")," g\xf6z atabilirsiniz."),(0,n.kt)("h3",{id:"bidding-on-liquidated-vaults"},"Tasfiye Edilen Kasalara Teklif Verme"),(0,n.kt)("p",null,'Baz\u0131 yat\u0131r\u0131mc\u0131lar\u0131n kasalar\u0131 fiyatlardaki ani hareketlerden, ve teminatland\u0131rma oran\u0131n\u0131n \xe7ok yak\u0131n tutulmas\u0131ndan dolay\u0131, tasfiyeye \xe7\u0131kar\u0131l\u0131r ve a\xe7\u0131k artt\u0131rma ile sat\u0131\u015fa sunulur. Kullan\u0131c\u0131lar bir saat i\xe7inde fiyatlardaki %30\'luk bir dalgalanmadan korunsa da, ek teminat yat\u0131rmamalar\u0131 veya kredilerinin bir k\u0131sm\u0131n\u0131 (veya tamam\u0131n\u0131) kapamamalar\u0131 durumunda, kasalar\u0131 teminatland\u0131rma oran\u0131n\u0131n alt\u0131na d\xfc\u015febilir. Sistemde "Tasfiye motoru" veya benzeri bir \u015fey olmad\u0131\u011f\u0131 i\xe7in, DeFiChain bu yat\u0131r\u0131mc\u0131lar\u0131n kasalar\u0131n\u0131 tasfiye etmenin farkl\u0131 bir yolunu bulmu\u015ftur.'),(0,n.kt)("p",null,"Kasalar topluluk taraf\u0131ndan tasfiye edilir. Tasfiye edilen her kasa i\xe7in sistem taraf\u0131ndan belirlenen minimum teklif tutar\u0131 ile alt\u0131 saatlik bir a\xe7\u0131k artt\u0131rma yap\u0131l\u0131r. Kullan\u0131c\u0131lar \xf6d\xfcn\xe7 al\u0131nan jetonla teklif verir ve kar\u015f\u0131l\u0131\u011f\u0131nda kazan\u0131rlarsa kasan\u0131n i\xe7indeki teminat\u0131 al\u0131rlar. Kasa sahibi kazanan teklifi, yak\u0131lan %5'lik bir \xfccret kesintisi ile, al\u0131r."),(0,n.kt)("h2",{id:"summary"},"\xd6zet"),(0,n.kt)("h3",{id:"advantages"},"Avantajlar"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hisse senetlerine kar\u015f\u0131 hedge imkan\u0131"),(0,n.kt)("li",{parentName:"ul"},"Kripto pozisyonlar\u0131ndan yararlanma"),(0,n.kt)("li",{parentName:"ul"},'\xd6d\xfcn\xe7 al\u0131nan jeton arz\u0131n\u0131 art\u0131rmak ("bir jeton \xf6d\xfcn\xe7 ald\u0131\u011f\u0131n\u0131zda", asl\u0131nda yeni jetonlar basar ve arz\u0131 artt\u0131r\u0131rs\u0131n\u0131z, bu da DeFiChain i\xe7in olumludur)')),(0,n.kt)("h3",{id:"disadvantages"},"Dezavantajlar\u0131"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tasfiye riski - K\xfcgi'nin Bot Vault-maxi'si kullan\u0131larak \xf6nemli \xf6l\xe7\xfcde azalt\u0131labilir",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kuegi/defichain_maxi"},"1")),(0,n.kt)("li",{parentName:"ul"},"\xd6d\xfcn\xe7 al\u0131nan jetonlara faiz \xf6denmesi gerekir")),(0,n.kt)("h2",{id:"common-topics-of-confusion"},"Kafa Kar\u0131\u015f\u0131kl\u0131\u011f\u0131na Neden Olan Konular"),(0,n.kt)("p",null,"Deneyimli kullan\u0131c\u0131lar i\xe7in bile olarak bile kafa kar\u0131\u015ft\u0131r\u0131c\u0131 olabilecek fikirler olabilir. En fazla kafa kar\u0131\u015f\u0131kl\u0131\u011f\u0131na sebep olan konular \u015funlard\u0131r:"),(0,n.kt)("h3",{id:"oracles-and-dex-prices"},"Oracle ve DEX Fiyatlar\u0131"),(0,n.kt)("p",null,"DeFiChain'deki tokenize edilmi\u015f varl\u0131klar her zaman d","[","Varl\u0131k","]"," olarak etiketlenir (\xd6rnek: dTSLA). DEX'te takas edildiklerinde, yat\u0131r\u0131mc\u0131lar DEX'teki fiyat\u0131n ger\xe7ek fiyatla her zaman ayn\u0131 olmayabilece\u011fini fark edebilirler. Yani, asl\u0131nda DeFiChain'de iki farkl\u0131 varl\u0131k fiyat\u0131 vard\u0131r. Birincisi, oracle olarak bilinen merkezi olmayan botlar\u0131n borsalardan (Binance), kripto veri sitelerinden (CoinMarketCap) ve/veya Nasdaq'tan (hisse senetleri ve ETF'ler i\xe7in) verileri kulland\u0131\u011f\u0131 varl\u0131\u011f\u0131n ger\xe7ek fiyat\u0131d\u0131r. Bu fiyata oracle fiyat\u0131 denir ve bir kullan\u0131c\u0131 kasas\u0131nda jeton bast\u0131\u011f\u0131nda jetonu bu fiyattan al\u0131r. \xd6te yandan, DeFiChain yat\u0131r\u0131mc\u0131lar\u0131n\u0131n ve arz ve talebine g\xf6re de\u011fi\u015fen DEX fiyatlar\u0131m\u0131z var. Bazen yeterli arz/\xe7ok fazla talep olmaz. Bu durum merkeziyetsiz varl\u0131\u011f\u0131n DEX fiyat\u0131n\u0131n ger\xe7ek fiyattan (veya oracle fiyat\u0131ndan) daha y\xfcksek olaca\u011f\u0131 anlam\u0131na gelir. Veya, \xe7ok fazla arz/\xe7ok az talep olabilir, bu da DEX fiyat\u0131n\u0131n daha d\xfc\u015f\xfck olaca\u011f\u0131 anlam\u0131na gelir. Likidite madencili\u011fi yaparken veya bir varl\u0131\u011f\u0131n jetonlar\u0131n\u0131 tutarken, bu fiyattan madencilik yapars\u0131n\u0131z veya jetonlar\u0131n\u0131z\u0131 bu DEX fiyat\u0131ndan takas edebilirsiniz."),(0,n.kt)("p",null,"DEX fiyatlar\u0131n\u0131n ger\xe7ek varl\u0131\u011fa g\xf6re kontrolden \xe7\u0131kmas\u0131 iki mekanizma sayesinde engellenir. Kripto tokenize edilmi\u015f varl\u0131klarda Cake, yat\u0131r\u0131mc\u0131lar\u0131n kripto varl\u0131klar\u0131n\u0131 DeFiChain'deki tokenize edilmi\u015f varl\u0131klar ile 1'e 1 oran\u0131nda de\u011fi\u015ftirmesine izin verir. Bu da DEX fiyat\u0131n\u0131n kripto varl\u0131\u011f\u0131n\u0131n ger\xe7ek fiyat\u0131ndan \xe7ok uzakla\u015fmas\u0131 durumunda arbitraj f\u0131rsat\u0131 yarat\u0131r. Hisse senetlerine gelince, dVarl\u0131klar\u0131 haftada bir kez +/- %5'lik bir oracle fiyat\u0131na geri getiren \"Gelecek Takaslar\u0131\" (Future Swaps) olarak adland\u0131rd\u0131k. bu fiyata madencilik yap\u0131yorsunuz veya jetonlar\u0131n\u0131z\u0131 bu DEX fiyat\u0131ndan de\u011fi\u015ftirebilirsiniz. DEX fiyatlar\u0131n\u0131n ger\xe7ek varl\u0131\u011fa g\xf6re kontrolden \xe7\u0131kmas\u0131 iki nedenden dolay\u0131 engellenir. Kripto tokenize edilmi\u015f varl\u0131klarda Cake, yat\u0131r\u0131mc\u0131lar\u0131n kripto varl\u0131\u011f\u0131n\u0131 DeFiChain'deki tokenize edilmi\u015f varl\u0131k i\xe7in 1'e 1 oran\u0131nda de\u011fi\u015ftirmesine izin vererek, fiyat kripto varl\u0131\u011f\u0131n\u0131n ger\xe7ek fiyat\u0131ndan \xe7ok uzakla\u015f\u0131rsa bir arbitraj f\u0131rsat\u0131 yarat\u0131r. Hisse senetlerine gelince, dVarl\u0131klar\u0131 haftada bir kez +/- %5'lik bir oracle fiyat\u0131na geri getiren \"Gelecek Takaslar\u0131\" olarak adland\u0131rd\u0131\u011f\u0131m\u0131z Future Swap'lar mevcut."),(0,n.kt)("h3",{id:"no-bids-on-auctions"},"A\xe7\u0131k Art\u0131rmalarda Teklif Olmamas\u0131"),(0,n.kt)("p",null,"Bazen bir kasaya teklif vermek k\xe2rs\u0131z olur ve bu durumda kasa devaml\u0131 olarak a\xe7\u0131k art\u0131rmaya \xe7\u0131kar\u0131lmaya ve tasfiye edilmeye \xe7al\u0131\u015f\u0131l\u0131r."),(0,n.kt)("h3",{id:"will-i-be-liquidated-when-the-collateral-rules-are-not-valid-anymore-in-my-vault"},"Teminat kurallar\u0131 kasamda art\u0131k ge\xe7erli olmad\u0131\u011f\u0131nda tasfiye olur muyum?"),(0,n.kt)("p",null,"Yukar\u0131da belirtildi\u011fi gibi baz\u0131 teminat kurallar\u0131 vard\u0131r. Ba\u015flang\u0131\xe7ta %50 DFI ile do\u011fru bir \u015fekilde teminatland\u0131r\u0131lm\u0131\u015f bir DUSD kredinizin piyasa hareketleri nedeniyle, DFI de\u011ferinin teminat tutar\u0131n\u0131n %50'sinin alt\u0131na d\xfc\u015fmesi m\xfcmk\xfcnd\xfcr. Pek \xe7ok kullan\u0131c\u0131 o s\u0131rada bir tasfiyeden korkuyor, ancak bu durum tasfiyeye neden olmamaktad\u0131r. Sonu\xe7 olarak, tekrar %50'lik teminatland\u0131rma d\xfczeyine ula\u015f\u0131lana kadar daha fazla DUSD kredisi alamazs\u0131n\u0131z."))}u.isMDXComponent=!0}}]);