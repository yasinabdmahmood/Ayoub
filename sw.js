if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>s(e,o),f={module:{uri:o},exports:c,require:t};i[o]=Promise.all(r.map((e=>f[e]||t(e)))).then((e=>(n(...e),c)))}}define(["./workbox-3f0c297d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"8d4d8e552a83d9cf15c814834e9fdfa1"},{url:"index.js",revision:"f15762f1ca6df93f335b13c338a4a2fc"},{url:"package-lock.json",revision:"3ee6eacd262795f8b00171cd743b31fb"},{url:"package.json",revision:"f3b5f0e28ea0cf9be00532ac007b96db"},{url:"style.css",revision:"a76022b8175465d3e219f0549863cf93"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
