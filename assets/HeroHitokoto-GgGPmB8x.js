import{j as g,J as y,W as k,p as E,X as T,_ as H,r as I,o as B,m as w,f as C,b as W}from"./app-CNWKg6A-.js";const $=g({__name:"HeroHitokoto",setup(x,{expose:a}){a();let r="https://api.apiopen.top/api/sentences";const m=t=>{const e=window;clearInterval(e.Timer);const o=document.getElementsByClassName("vp-blog-hero-description");if(o.length>0){const f=o[0];f.id="hotWord"}const l=document.getElementById("hotWord");if(!l)return;l.innerHTML=`
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
  `;const c=document.getElementById("hitokoto_author"),_=document.getElementById("hitokoto_text");if(!_||!c)return;c.style.opacity="0";const h=t.hitokoto.split("");let n=0,i=0,v=60,u=!1,d="";e.Timer=setInterval(()=>{const f=h[n];if(d.length<4?c.style.opacity="0":c.style.opacity="1",i!=0){i--,d.length==0&&i==0&&clearInterval(e.Timer);return}u?clearInterval(e.Timer):d+=f,u?n--:n++,n>=h.length&&(u=!0,n=h.length,i=v),n<0&&(u=!1,n=0,i=v),_.innerHTML=d},200)},s=t=>{let e=window.location.pathname;t&&(e=t),e=="/"&&T({method:"get",url:r,params:{}}).then(o=>{console.log(o.data,"主页每日一句");const l={hitokoto:o.data.result.name,from:o.data.result.from};m(l)}).catch(o=>{r="https://international.v1.hitokoto.cn",s()})};y(()=>{k(()=>{s()}),E().afterEach(e=>{k(()=>{s(e.fullPath)})})});const p={get hitokotoUrl(){return r},set hitokotoUrl(t){r=t},InsertText:m,GetWord:s};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}});function b(x,a,r,m,s,p){const t=I("ClientOnly");return B(),w(t,null,{default:C(()=>a[0]||(a[0]=[W("div",{class:"none"},"一言插件",-1)])),_:1})}const N=H($,[["render",b],["__file","HeroHitokoto.vue"]]);export{N as default};
