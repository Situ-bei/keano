import{j as e,J as s,W as o,p as t,_ as l,r as n,o as a,m as r,f as c,b as i}from"./app-sry_MIl6.js";const m=l(e({__name:"TopNavBeautify",setup(e,{expose:l}){l();const n=()=>{const e=document.getElementsByClassName("theme-container");if(e.length<1)return null;const s=e[0],o=document.getElementsByClassName("vp-blog-hero");let t=null;o.length>0&&(t=o[0]),t?s.classList.add("mo7-blog-hero"):s.classList.remove("mo7-blog-hero");const l=document.documentElement.scrollTop;l<60?s.classList.add("mo7-scroll-top"):s.classList.remove("mo7-scroll-top"),t&&(l<t.clientHeight-30?s.classList.add("mo7-scroll-blog-hero-inner"):s.classList.remove("mo7-scroll-blog-hero-inner"))};s((()=>{o((()=>{n(),window.removeEventListener("scroll",(()=>{})),window.addEventListener("scroll",(()=>{n()}))}));t().afterEach((()=>{o((()=>{setTimeout((()=>{n()}),50)}))}))}));const a={CheckScrollTopClass:n};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),[["render",function(e,s,o,t,l,m){const u=n("ClientOnly");return a(),r(u,null,{default:c((()=>s[0]||(s[0]=[i("div",{class:"none"},"修改顶栏组件",-1)]))),_:1})}],["__file","TopNavBeautify.vue"]]);export{m as default};