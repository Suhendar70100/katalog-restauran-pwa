if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const b=e=>n(e,r),c={module:{uri:r},exports:s,require:b};i[r]=Promise.all(d.map((e=>c[e]||b(e)))).then((e=>(o(...e),s)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"5d982326781d6f8ea98b.jpg",revision:null},{url:"app.bundle.js",revision:"06bda31dab7dd17baff3b491bbb84888"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"fa83ac1f95d668da5768ab58e53190ab"},{url:"favicon.png",revision:"e0bb0d7a43b8253a26db23a40faba2bb"},{url:"icons/icon-128x128.png",revision:"86a71789405bd9f984d216029a9eb533"},{url:"icons/icon-256x256.png",revision:"a04446c8195b42ec297dd9d1397cc1a6"},{url:"icons/icon-512x512.png",revision:"da8d5acb5bbb751d9af2916371e5b932"},{url:"icons/icon-64x64.png",revision:"dd5f048d58b2bbb90d052ca4f628fc94"},{url:"index.html",revision:"1d64dc2f5c055dc4bb2e0396e331c1ba"}],{})}));
//# sourceMappingURL=sw.bundle.js.map