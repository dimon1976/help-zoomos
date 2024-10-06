/*! For license information please see src_components_Search_worker_index_ts.js.LICENSE.txt */
(()=>{"use strict";var e,r,t={"./src/components/Search/worker/index.ts":(e,r,t)=>{t.r(r),t.d(r,{AssertApi:()=>l,AssertConfig:()=>p});var n=t("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=t("../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),s=t("../../node_modules/@babel/runtime/regenerator/index.js"),i=t.n(s),a={message:"Unknown message type!",code:"UNKNOWN_HANDLER"},c={message:"Worker is not initialized with required config!",code:"NOT_INITIALIZED"},u={message:"Worker is not initialized with required api!",code:"NOT_INITIALIZED"};function p(e){if(!e)throw c}function l(e){if(!e)throw u}var f={init:function(e){return(0,o.default)(i().mark((function r(){var t,n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return self.config=e,importScripts(self.config.base+"/"+self.config.api),l(self.api),r.abrupt("return",null===(t=(n=self.api).init)||void 0===t?void 0:t.call(n));case 4:case"end":return r.stop()}}),r)})))()},suggest:function(e){return(0,o.default)(i().mark((function r(){var t,n,o;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query,n=e.count,o=void 0===n?10:n,p(self.config),l(self.api),r.abrupt("return",self.api.suggest(t,o));case 4:case"end":return r.stop()}}),r)})))()},search:function(e){return(0,o.default)(i().mark((function r(){var t,n,o,s,a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query,n=e.count,o=void 0===n?10:n,s=e.page,a=void 0===s?1:s,p(self.config),l(self.api),r.abrupt("return",self.api.search(t,o,a));case 4:case"end":return r.stop()}}),r)})))()}};self.onmessage=function(){var e=(0,o.default)(i().mark((function e(r){var t,o,s,c,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,n.default)(r.ports,1),o=t[0],s=r.data.type,(c=f[s])||o.postMessage({error:a}),e.prev=4,e.next=7,c(r.data);case 7:u=e.sent,o.postMessage({result:u}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),o.postMessage({error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(r){return e.apply(this,arguments)}}()}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,o.x=()=>{var e=o.O(void 0,["vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_babel_runtime_helpers_es-9951fb"],(()=>o("./src/components/Search/worker/index.ts")));return o.O(e)},e=[],o.O=(r,t,n,s)=>{if(!t){var i=1/0;for(p=0;p<e.length;p++){for(var[t,n,s]=e[p],a=!0,c=0;c<t.length;c++)(!1&s||i>=s)&&Object.keys(o.O).every((e=>o.O[e](t[c])))?t.splice(c--,1):(a=!1,s<i&&(i=s));if(a){e.splice(p--,1);var u=n();void 0!==u&&(r=u)}}return r}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[t,n,s]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={src_components_Search_worker_index_ts:1};o.f.i=(r,t)=>{e[r]||importScripts(o.p+o.u(r))};var r=self.webpackChunk_diplodoc_client=self.webpackChunk_diplodoc_client||[],t=r.push.bind(r);r.push=r=>{var[n,s,i]=r;for(var a in s)o.o(s,a)&&(o.m[a]=s[a]);for(i&&i(o);n.length;)e[n.pop()]=1;t(r)}})(),r=o.x,o.x=()=>o.e("vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_babel_runtime_helpers_es-9951fb").then(r),o.x()})();
//# sourceMappingURL=src_components_Search_worker_index_ts.js.map