import{h as f}from"./hooks.module.LmwmkJtO.js";import{l as h}from"./preact.module.B_Hg0Uo-.js";var _=0;function i(l,n,c,u,s,t){n||(n={});var d,r,e=n;if("ref"in e)for(r in e={},n)r=="ref"?d=n[r]:e[r]=n[r];var o={type:l,props:e,key:c,ref:d,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--_,__i:-1,__u:0,__source:s,__self:t};if(typeof l=="function"&&(d=l.defaultProps))for(r in d)e[r]===void 0&&(e[r]=d[r]);return h.vnode&&h.vnode(o),o}function v({ProjectMeta:l}){const[n,c]=f(0),u=()=>c((n+1)%l.length),s=()=>c((n-1+l.length)%l.length),t=d=>c(d);return i("div",{children:[i("div",{class:"h-[360px] flex justify-center items-center",children:i("img",{class:"max-w-[360px] m-0",src:l[n].data.img,alt:l[n].data.description})}),i("div",{class:"flex justify-center",children:[i("button",{onClick:s,id:"prev",children:i("b",{children:"<-"})}),i("div",{children:l.map((d,r)=>n%l.length==r&&i("button",{class:`p-2 rounded-sm ${n==r?"font-bold":""}`,onClick:()=>t(r),children:[r+1," of ",l.length]}))}),i("button",{onClick:u,id:"next",children:i("b",{children:"->"})})]}),i("div",{class:"mb-8",children:[i("h3",{children:l[n].data.title}),i("h4",{children:l[n].data.url&&i("a",{href:l[n].data.url,target:"_blank",children:"github link"})}),i("p",{children:l[n].data.description})]})]})}export{v as default};