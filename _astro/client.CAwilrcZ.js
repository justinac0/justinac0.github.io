const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/signals.module.CT65OICc.js","_astro/preact.module.Dz6_IuHR.js","_astro/hooks.module.C9fPJ5I_.js"])))=>i.map(i=>d[i]);
import{_ as h,E as S,G as b}from"./preact.module.Dz6_IuHR.js";const L="modulepreload",N=function(t){return"/"+t},_={},A=function(f,a,d){let g=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),r=s?.nonce||s?.getAttribute("nonce");g=Promise.allSettled(a.map(e=>{if(e=N(e),e in _)return;_[e]=!0;const o=e.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":L,o||(n.as="script"),n.crossOrigin="",n.href=e,r&&n.setAttribute("nonce",r),document.head.appendChild(n),o)return new Promise((i,c)=>{n.addEventListener("load",i),n.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})}))}function m(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return g.then(s=>{for(const r of s||[])r.status==="rejected"&&m(r.reason);return f().catch(m)})},w=({value:t,name:f,hydrate:a=!0})=>t?h(a?"astro-slot":"astro-static-slot",{name:f,dangerouslySetInnerHTML:{__html:t}}):null;w.shouldComponentUpdate=()=>!1;var y=w;const u=new Map;var M=t=>async(f,a,{default:d,...g},{client:m})=>{if(!t.hasAttribute("ssr"))return;for(const[e,o]of Object.entries(g))a[e]=h(y,{value:o,name:e});if(t.dataset.preactSignals){const{signal:e}=await A(async()=>{const{signal:l}=await import("./signals.module.CT65OICc.js");return{signal:l}},__vite__mapDeps([0,1,2]));let o=JSON.parse(t.dataset.preactSignals);for(const[l,n]of Object.entries(o))if(Array.isArray(n))n.forEach(([i,c])=>{const v=a[l][c];let E=v;if(typeof c!="string"&&(E=v[0],c=v[1]),!u.has(i)){const p=e(E);u.set(i,p)}a[l][c]=u.get(i)});else{if(!u.has(n)){const i=e(a[l]);u.set(n,i)}a[l]=u.get(n)}}const r=h(f,a,d!=null?h(y,{value:d}):d);m==="only"?(t.innerHTML="",S(r,t)):b(r,t),t.addEventListener("astro:unmount",()=>S(null,t),{once:!0})};export{M as default};
