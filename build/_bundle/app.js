(()=>{var e,t={62437:(e,t,n)=>{"use strict";var o=n(96540),r=n(5338),a=n(51436),c=n(21776),s=n(73955);const l=(0,o.createContext)(null);l.displayName="SearchContext";const i=l.Provider,u=(0,o.createContext)({pathname:"/",depth:0});u.displayName="RouterContext";const m=u.Provider;var d=n(78184);const h=769,f={theme:d.Sx.Light,textSize:d.ov.M,showMiniToc:!0,wideFormat:!0,fullScreen:!1},g=["ar","arc","ckb","dv","fa","ha","he","khw","ks","ps","sd","ur","uz_AF","yi"];let p=function(e){return e.RTL="rtl",e.LTR="ltr",e}({});function w(){return"undefined"!=typeof document}function v({theme:e}){"undefined"!=typeof document&&document.querySelectorAll(".g-root").forEach((t=>{t.classList.toggle("g-root_theme_light","light"===e),t.classList.toggle("g-root_theme_dark","dark"===e)}))}function b(e){if(!w())return;document.body.classList.add("g-root");const t=(e,t)=>document.body.classList.toggle(e,Boolean(t));Object.keys(e).forEach((n=>{switch(n){case"wideFormat":t("dc-root_wide-format",e[n]);break;case"focusSearch":t("dc-root_focused-search",e[n]);break;case"fullScreen":t("dc-root_full-screen",e[n]);break;case"mobileView":t("mobile",e[n]),t("desktop",!e[n])}}))}new Set(["href","src","url","href","icon","image","desktop","mobile","tablet","previewImg","image","avatar","logo","light","dark"]);const y=e=>"boolean"==typeof e?e:!!e&&"true"===e;function E(){const e=C("theme"),t=C("textSize"),n=C("showMiniToc"),o=C("wideFormat"),r=C("fullScreen");return{theme:e,textSize:t,showMiniToc:y(n),wideFormat:y(o),fullScreen:y(r)}}function S(){return!!w()&&document.body.clientWidth<h}function C(e){if(!w())return f[e];try{return sessionStorage.getItem(e)||f[e]}catch{return f[e]}}const k=(0,o.createContext)(d.JA.En);k.displayName="Lang";const M=k.Provider;if(n(44186),"undefined"!=typeof document){const{theme:e,wideFormat:t,fullScreen:n}=E();b({mobileView:S(),wideFormat:t,fullScreen:n}),v({theme:e})}var T=n(47658),x=n(18647),_=n(2919),A=n(23614);const N=(0,A.A)("Layout");function L(){return null}function F(){return null}function O(){return null}const j={doc:!1},z=e=>{const{children:t,doc:n,headerHeight:r=0}={...j,...e};let a,c,s;return o.Children.forEach(t,(e=>{switch(e.type){case L:a=e.props.children;break;case F:c=e.props.children;break;case O:s=e.props.children}})),o.createElement("div",{className:N({"full-header":r>0})},a&&o.createElement("div",{className:N("header")},a),o.createElement("div",{className:N("body")},c&&o.createElement("div",{className:N("content")},c),s&&o.createElement("div",{className:N("footer",{doc:n})},s)))};z.displayName="Layout",z.Header=L,z.Content=F,z.Footer=O;var I=n(98058),P=n(12445),H=n(79568),R=n(3259),D=n(61998),W=n(62945),$=n(61531);const q=(0,A.A)("pc-page-constructor"),V=(0,A.A)("pc-constructor-row"),B=({children:e})=>e?o.createElement(I.f,{className:V()},o.createElement(P.f,null,e)):null;function U({background:e,blocks:t}){const n=(0,H.D)(),r=(0,R.d)(e,n);return o.createElement("div",{className:q("docs")},o.createElement("div",{className:q("wrapper")},t&&r&&o.createElement(D.A,Object.assign({},r,{className:q("background")})),o.createElement(W.x,null,o.createElement(B,null,o.createElement($.F,{items:t})))))}const K=(e,t)=>{const n=(0,_.M5)(e)===d.KG.PageConstructor&&"data"in e&&"fullScreen"in e.data&&e.data.fullScreen,r=(0,o.useMemo)((()=>n?e.data:{blocks:[{type:"page",resetPaddings:!0}]}),[n,e]);return(0,o.useMemo)((()=>({custom:{page:t},layout:r})),[t,r])};var Z=n(29139),G=n(64467);class J{constructor(e){(0,G.A)(this,"worker",void 0),(0,G.A)(this,"config",void 0),(0,G.A)(this,"init",(()=>{this.worker=async function(e){const t=new Worker(new URL(n.p+n.u(112),n.b));return await Q(t,{...e,type:"init"}),t}({...this.config,base:this.base,mark:"Suggest__Item__Marker"})})),(0,G.A)(this,"link",(()=>null)),this.config=e}async suggest(e){return this.request({type:"suggest",query:e})}async search(e){return this.request({type:"search",query:e})}get base(){return window.location.pathname.split("/").slice(0,-(this.config.depth+1)).join("/")}async request(e){return Q(await this.worker,e)}}function Q(e,t){const n=new MessageChannel;return new Promise(((o,r)=>{n.port1.onmessage=e=>{e.data.error?(console.error(e.data.error),r(e.data.error)):o(e.data.result)},n.port1.onmessageerror=e=>{r(e.data.error)},e.postMessage(t,[n.port2])}))}function X(){const e=function(){const e=(0,o.useContext)(k),{depth:t=0}=(0,o.useContext)(u),n=(0,o.useContext)(l);return(0,o.useMemo)((()=>n?new J({...n,depth:t,lang:e}):null),[e,t,n])}(),t=(0,o.useRef)(null),n=(0,o.useCallback)((()=>{b({focusSearch:!0})}),[]),r=(0,o.useCallback)((()=>{b({focusSearch:!1}),setTimeout((()=>{t.current&&t.current.close()}),100)}),[]);return e?o.createElement(Z.$,{ref:t,provider:e,onFocus:n,onBlur:r,classNameContainer:"Suggest"}):null}var Y=n(26141),ee=n(24065);const te=(0,o.memo)((({mobileView:e,theme:t,onChangeTheme:n,textSize:r,onChangeTextSize:a,wideFormat:c,onChangeWideFormat:s,showMiniToc:l,onChangeShowMiniToc:i,lang:u,langs:m,onChangeLang:h})=>o.createElement(Y.n,{controlClassName:"Control",controlSize:d.Uv.L,isWideView:e,isMobileView:e},o.createElement(ee.A,{className:"Controls",theme:t,onChangeTheme:n,wideFormat:c,onChangeWideFormat:s,showMiniToc:l,onChangeShowMiniToc:i,textSize:r,onChangeTextSize:a,lang:u,langs:m,onChangeLang:h}))));te.displayName="HeaderControls";var ne=n(88976),oe=n(45823);function re(e,t,n){return e.some((e=>e.type===n))||t.some((e=>e.type===n))}const ae=(e,t,n,r)=>{const{toc:a}=e,{navigation:c}=a,{header:s={},logo:i}=c,{leftItems:m=[],rightItems:h=[]}=s,f=re(h,m,"controls"),g=re(h,m,"search"),p=(0,o.useContext)(l),w=(0,o.useContext)(u);p&&!g&&h.unshift({type:"search"});const v=(0,o.useMemo)((()=>({withBorder:!0,leftItems:m,rightItems:h})),[m,h]),b=(0,o.useMemo)((()=>({toc:a,router:w,headerHeight:64})),[a,w]),y=(0,o.useMemo)((()=>({controlSize:d.Uv.L,userSettings:t})),[t]),E=(0,o.useMemo)((()=>({header:{leftItems:[]},renderNavigation:()=>o.createElement(ne.A,{logo:i,data:v,navigationTocData:b,mobileControlsData:y}),logo:i})),[v,b,y,i]);return(0,o.useMemo)((()=>({custom:{search:r,controls:n,MobileDropdown:oe.A},layout:E,withControls:f})),[r,n,E,f])};function ce({data:e,...t}){const n=(0,_.M5)(e),r=(0,_.$T)(n);return o.createElement(z,{headerHeight:t.headerHeight},o.createElement(z.Content,null,o.createElement(r,Object.assign({},e,t))))}const se={};function le({data:e,props:t,controls:n}){const{theme:r}=t,a=(0,o.useCallback)((()=>o.createElement(U,e.data)),[e]),c=K(e,a),s=(0,o.useMemo)((()=>({blocks:c.custom})),[c]);return o.createElement(ce,Object.assign({data:e,headerHeight:0},t,n),o.createElement(T.Z,{theme:r},o.createElement(x.i,{custom:s,content:c.layout})))}function ie({data:e,props:t,controls:n}){const{theme:r,fullScreen:a}=t,c=(0,o.useCallback)((()=>o.createElement(X,null)),[]),s=(0,o.useCallback)((()=>o.createElement(te,n)),[n]),l=ae(e,n,s,c),i=(0,o.useCallback)((()=>o.createElement(ce,Object.assign({data:e,headerHeight:a?0:64},t,l.withControls?se:n),o.createElement(U,e.data))),[e,l,t,n,a]),u=K(e,i),m=(0,o.useMemo)((()=>({navigation:l.custom,blocks:u.custom})),[l,u]);return o.createElement(T.Z,{theme:r},o.createElement(x.i,{custom:m,content:u.layout,navigation:a?void 0:l.layout}))}var ue=n(85905),me=n(90358),de=n(57016),he=n(65277);function fe(){const e=(0,he.D)();return o.createElement(o.Fragment,null,o.createElement(de.v,null),o.createElement(me.l,null),o.createElement(ue.A,{theme:e===d.Sx.Dark?"dark":"neutral",zoom:{showMenu:!0,bindKeys:!0}}))}const ge=e=>e.replace(/^./,(e=>e.toUpperCase()));function pe(e,t){const[n,r]=(0,o.useState)(t[e]),a=(0,o.useMemo)((()=>{return t=e,n=r,e=>{!function(e,t){if(w())try{sessionStorage.setItem(e,String(t))}catch{}}(t,e),n(e)};var t,n}),[e,r]);return(0,o.useMemo)((()=>({[e]:n,["onChange"+ge(e)]:a})),[e,n,a])}function we(e){const{data:t,router:n,lang:r,search:l,analytics:u}=e;(0,c.jK)({lang:r});const d=function(){const e=E(),t=pe("theme",e),n=pe("textSize",e),r=pe("wideFormat",e),a=pe("fullScreen",e),c=pe("showMiniToc",e);return(0,o.useMemo)((()=>({...t,...n,...r,...c,...a})),[t,n,r,c,a])}(),h=function({router:e,lang:t,langs:n}){const r=(0,o.useCallback)((t=>{const n=(0,_.UZ)(e,t);window.location.replace(n)}),[e]);return(0,o.useMemo)((()=>({lang:t,langs:n,onChangeLang:r})),[t,n,r])}(e),f=function(){const[e,t]=(0,o.useState)(S()),n=(0,o.useCallback)((()=>{t(S())}),[]);return(0,o.useEffect)(n,[n]),(0,o.useEffect)((()=>(window.addEventListener("resize",n),()=>window.removeEventListener("resize",n))),[n]),e}(),{theme:w,textSize:y,wideFormat:C,fullScreen:k,showMiniToc:T}=d,x=(0,o.useMemo)((()=>({router:n,theme:w,textSize:y,wideFormat:C,fullScreen:k,showMiniToc:T})),[n,w,y,C,k,T]),A=(0,o.useMemo)((()=>({...d,...h,mobileView:f})),[h,d,f]),N=function(e){return g.includes(e)?p.RTL:p.LTR}(r);return(0,o.useEffect)((()=>{b({mobileView:f,wideFormat:C,fullScreen:k}),v({theme:w})}),[w,f,C,k]),o.createElement("div",{className:"App"},o.createElement(a.N,{theme:w,direction:N},o.createElement(M,{value:r},o.createElement(m,{value:n},o.createElement(i,{value:l},function(e){return Boolean(e.toc.navigation)}(t)?o.createElement(ie,{data:t,props:x,controls:A}):o.createElement(le,{data:t,props:x,controls:A}),u&&o.createElement(s.A,{router:n,gtmId:u?.gtm?.id||"",consentMode:u?.gtm?.mode}),o.createElement(fe,null))))))}const ve=document.getElementById("root"),be=window.__DATA__;if(!ve)throw new Error("Root element not found!");window.STATIC_CONTENT?(0,r.c)(ve,o.createElement(we,be)):(0,r.H)(ve).render(o.createElement(we,be))},44186:()=>{"undefined"!=typeof Element&&function(e){const t=e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector;e.matches=e.matchesSelector=t||function(e){const t=this;return Array.prototype.some.call(document.querySelectorAll(e),(e=>e===t))}}(Element.prototype),"undefined"!=typeof document&&document.addEventListener("click",(e=>{const t=e.target.href,n=window.location.origin;if(e.target.matches(".dc-doc-layout__center a")&&t.startsWith(n)){e.preventDefault();const n="index",o=".html";if(t.endsWith("/"))return void(window.location.href=`${t}${n}${o}`);const r=t.split("#");if(r.length>0&&!r[0].endsWith(o))return r[0]+=o,void(window.location.href=r.join("#"));window.location.href=t}}))},87040:(e,t,n)=>{"use strict";function o(){}n.d(t,{A:()=>o})},42634:()=>{}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=t,o.amdO={},e=[],o.O=(t,n,r,a)=>{if(!n){var c=1/0;for(u=0;u<e.length;u++){for(var[n,r,a]=e[u],s=!0,l=0;l<n.length;l++)(!1&a||c>=a)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(s=!1,a<c&&(c=a));if(s){e.splice(u--,1);var i=r();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.u=e=>e+".js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=524,(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{o.b=document.baseURI||self.location.href;var e={524:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[c,s,l]=n,i=0;if(c.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var u=l(o)}for(t&&t(n);i<c.length;i++)a=c[i],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self.webpackChunk_diplodoc_client=self.webpackChunk_diplodoc_client||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[644,121],(()=>o(62437)));r=o.O(r)})();
//# sourceMappingURL=app.js.map