/*! For license information please see extensions_search_lib_worker_index_js.js.LICENSE.txt */
(()=>{"use strict";var e,t,r={"../../extensions/search/lib/worker/index.js":(e,t,r)=>{r.r(t),r.d(t,{AssertConfig:()=>I});var n=r("../../node_modules/lunr/lunr.js"),o=5,s={title:5,keywords:4,content:3};function i(e,t){const r=e.join(" "),n=function(e){const t={};for(const[r,n]of Object.entries(s)){t[r]=[];for(const[o,s]of Object.entries(e.matchData.metadata))if(s[r])for(const[e,i]of s[r].position)t[r].push({text:o,position:[e,e+i],boost:n});t[r].sort(((e,t)=>e.position[0]-t.position[0]))}return t}(t),i={};let d,h,g;for(const[e]of Object.entries(s)){if(h=n[e],g=[],!h.length)continue;let t=m;for(;t;)t=t();i[e]={positions:g.map(c("position")),avgScore:g.map(c("score")).reduce(a,0),sumScore:g.map(c("score")).reduce(l,0),maxScore:g.map(c("score")).reduce(u,0),maxScorePosition:g.reduce(p).position}}return i;function m(){const e=h.shift();return d={score:0,prev:null,curr:e,position:e.position.slice(),phrase:e.text},b}function y(){const{score:e,position:t}=d;return g.push({score:e,position:t}),d.score=0,d.position=d.curr.position.slice(),d.phrase=d.curr.text,h.length?v:_}function v(){return h.length?(d.prev=d.curr,d.curr=h.shift(),d.phrase+=" "+d.curr.text,b):y}function b(){return e.includes(d.curr.text)?w:x}function w(){return d.prev?f(d.prev.position,d.curr.position)<=o?(d.score+=r.includes(d.phrase)?10:2,d.position[1]=d.curr.position[1],v):y:(d.score+=2,v)}function x(){return d.prev?f(d.prev.position,d.curr.position)<=o&&(d.score+=r.includes(d.phrase)?1:.5,d.position[1]=d.curr.position[1]):d.score+=.5,y}function _(){return null}}function c(e){return function(t){return t[e]}}function u(e,t){return Math.max(e,t)}function a(e,t){return(e+t)/2}function l(e,t){return e+t}function p(e,t){return e.score>=t.score?e:t}function f(e,t){return t[0]-e[1]}function d({tolerance:e},t,r,o,s=!0){const c=new n.QueryParser(r,new n.Query(t.fields)).parse().clauses,u=c.map((e=>e.term)),a=((e,t,r,o)=>[e>-1&&function(e){e.clauses=r.slice();for(let t=e.clauses.length-1;t>=0;t--){const r=e.clauses[t];if(r.presence!==n.Query.presence.PROHIBITED&&!o){h(r,n.Query.wildcard.TRAILING);break}}},e>0&&function(e){e.clauses=r.map((e=>(e.presence!==n.Query.presence.PROHIBITED&&h(e,n.Query.wildcard.TRAILING),e)))},e>1&&function(e){e.clauses=r.map((e=>(e.presence!==n.Query.presence.PROHIBITED&&h(e,n.Query.wildcard.LEADING|n.Query.wildcard.TRAILING),e)))}].map((e=>t=>function(){return!!t&&e.query(t)})(t)).filter(Boolean))(e,t,c,s),l=new Set,p=[];for(;l.size<o&&a.length;){const e=a.shift()();for(const t of e)l.has(t.ref)||(l.add(t.ref),p.push({...t,scores:i(u,t)}))}return p.slice(0,o)}function h(e,t){t&n.Query.wildcard.TRAILING&&(e.term=e.term+"*"),t&n.Query.wildcard.LEADING&&(e.term="*"+e.term),e.wildcard=t,e.usePipeline=!1}var g=200;function m({base:e,mark:t},r,n,o){return r.map((r=>{const s=n[r.ref],i={type:"page",link:`${e}/${r.ref}`,title:s.title,description:s.content.slice(0,g)},c=r.scores;for(const[e,r]of Object.entries(c))switch(e){case"title":i.title=b(t,s.title,r.positions);break;case"content":i.description=b(t,...o(s.content,r))}return i}))}function y(e,t){const{positions:r,maxScorePosition:n}=t,[o,s,i]=w(e,n),c=o.length>20?"..."+o.slice(-20):o;return[c+s+i.slice(0,Math.max(0,g-c.length-s.length)),x(n[0]-c.length,r)]}function v(e,t){const{positions:r}=t;if(e.length<=g)return[e,r];const[n,o,s]=w(e,r[0]);if(o.length>=g)return[o.slice(0,g),[[0,g]]];let i=0,c=o;const u=n.split("\n"),a=s.split("\n");let l=f;for(;c.length<g;)l=l();const p=c.length;return c=c.trimStart(),i-=p-c.length,[c,x(i,r)];function f(){if(u.length){const e=u.pop(),t=Math.max(e.length-g,0);i+=e.length-t+1,c="\n"+e.slice(t,e.length)+c}return d}function d(){if(a.length){const e=a.shift(),t=Math.max(c.length+e.length-g,0);c=c+e.slice(0,e.length-t)+"\n"}return f}}function b(e,t,r){return r.reduceRight(((t,r)=>{const[n,o,s]=w(t,r);return`${n}<span class="${e}">${o}</span>${s}`}),t)}function w(e,t){return[e.slice(0,t[0]),e.slice(t[0],t[1]),e.slice(t[1])]}function x(e,t){return t.map((([t,r])=>[t-e,r-e])).filter((([e])=>e>=0))}var _={message:"Unknown message type!",code:"UNKNOWN_HANDLER"},j={message:"Worker is not initialized with required data!",code:"NOT_INITIALIZED"};function I(e){if(!e)throw j}var O=null,k={async init({base:e,mark:t,tolerance:r}){O={base:e,mark:t,tolerance:r}},async suggest({lang:e,query:t,count:r=10}){I(O);const[n,o]=await P(e),s=d(O,n,t,r,!1);return console.log(s),m(O,s,o,y)},async search({lang:e,query:t,count:r=10}){I(O);const[n,o]=await P(e),s=d(O,n,t,r,!0);return m(O,s,o,v)}};self.onmessage=async e=>{const[t]=e.ports,{type:r}=e.data,n=k[r];n||t.postMessage({error:_});try{const r=await n(e.data);t.postMessage({result:r})}catch(e){t.postMessage({error:e})}};var S={};async function P(e){if(I(O),S[e])return S[e];const t=S[e]=(async()=>{const[t,r]=await Promise.all([T(`${O.base}/_index/${e}/index.json`),T(`${O.base}/_index/${e}/registry.json`)]);return[n.Index.load(t),r]})();return t.catch((()=>{delete S[e]})),t}async function T(e){return(await fetch(e)).json()}}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={exports:{}};return r[e](s,s.exports,o),s.exports}o.m=r,o.x=()=>{var e=o.O(void 0,["vendors-node_modules_lunr_lunr_js"],(()=>o("../../extensions/search/lib/worker/index.js")));return o.O(e)},e=[],o.O=(t,r,n,s)=>{if(!r){var i=1/0;for(l=0;l<e.length;l++){for(var[r,n,s]=e[l],c=!0,u=0;u<r.length;u++)(!1&s||i>=s)&&Object.keys(o.O).every((e=>o.O[e](r[u])))?r.splice(u--,1):(c=!1,s<i&&(i=s));if(c){e.splice(l--,1);var a=n();void 0!==a&&(t=a)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,n,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={extensions_search_lib_worker_index_js:1};o.f.i=(t,r)=>{e[t]||importScripts(o.p+o.u(t))};var t=self.webpackChunk_diplodoc_client=self.webpackChunk_diplodoc_client||[],r=t.push.bind(t);t.push=t=>{var[n,s,i]=t;for(var c in s)o.o(s,c)&&(o.m[c]=s[c]);for(i&&i(o);n.length;)e[n.pop()]=1;r(t)}})(),t=o.x,o.x=()=>o.e("vendors-node_modules_lunr_lunr_js").then(t),o.x()})();
//# sourceMappingURL=extensions_search_lib_worker_index_js.js.map