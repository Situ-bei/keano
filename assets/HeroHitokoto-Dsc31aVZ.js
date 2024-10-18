import{a as g}from"./axios-CoTZsgdJ.js";import{j as y,p as E,q as k,u as T,r as H,o as I,m as B,f as w,a as C}from"./app-BcsZlW5k.js";import{_ as $}from"./plugin-vue_export-helper-DlAUqK2U.js";const M=y({__name:"HeroHitokoto",setup(x,{expose:a}){a();let r="https://api.apiopen.top/api/sentences";const m=t=>{const e=window;clearInterval(e.Timer);const o=document.getElementsByClassName("vp-blog-hero-description");if(o.length>0){const h=o[0];h.id="hotWord"}const l=document.getElementById("hotWord");if(!l)return;l.innerHTML=`
    <div class="word">
      <div class="left">
        
      </div>
        <span id="hitokoto_text">
        </span>
      <div class="right">
        
      </div>
    </div>
    <div class="author" id="hitokoto_author"> 
      ——《${t.from}》
    </div>
  `;const c=document.getElementById("hitokoto_author"),_=document.getElementById("hitokoto_text");if(!_||!c)return;c.style.opacity="0";const f=t.hitokoto.split("");let n=0,i=0,v=60,u=!1,d="";e.Timer=setInterval(()=>{const h=f[n];if(d.length<4?c.style.opacity="0":c.style.opacity="1",i!=0){i--,d.length==0&&i==0&&clearInterval(e.Timer);return}u?clearInterval(e.Timer):d+=h,u?n--:n++,n>=f.length&&(u=!0,n=f.length,i=v),n<0&&(u=!1,n=0,i=v),_.innerHTML=d},200)},s=t=>{let e=window.location.pathname;t&&(e=t),e=="/"&&g({method:"get",url:r,params:{}}).then(o=>{console.log(o.data,"主页每日一句");const l={hitokoto:o.data.result.name,from:o.data.result.from};m(l)}).catch(o=>{r="https://international.v1.hitokoto.cn",s()})};E(()=>{k(()=>{s()}),T().afterEach(e=>{k(()=>{s(e.fullPath)})})});const p={get hitokotoUrl(){return r},set hitokotoUrl(t){r=t},InsertText:m,GetWord:s};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}});function W(x,a,r,m,s,p){const t=H("ClientOnly");return I(),B(t,null,{default:w(()=>a[0]||(a[0]=[C("div",{class:"none"},"一言插件",-1)])),_:1})}const P=$(M,[["render",W],["__file","HeroHitokoto.vue"]]);export{P as default};
