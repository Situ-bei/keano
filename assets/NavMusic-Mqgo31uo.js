const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/APlayer.min-CAgWaKXK.js","assets/commonjsHelpers-Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{j as f,l as v,m as h,u as b,v as g,p as P,_ as A,r as w,o as S,q as x,f as G,a as u,x as I,b as C,d as E}from"./app-WyuDR-qj.js";import L from"./MyIcon-UwthY6oo.js";import{a as B}from"./axios-CoTZsgdJ.js";const N=f({__name:"NavMusic",setup(_,{expose:i}){i();let l,n=v(!1),s=[];const d=()=>{n.value=!n.value},r=()=>{n.value&&(n.value=!1)},p=()=>{const e=document.querySelector(".vp-navbar-end");if(!e)return;if(!document.querySelector("#MyMusic_Menu")){const o=document.createElement("div");o.id="MyMusic_Menu",o.classList.add("nav-item"),o.innerHTML='<div id="MyMusic_icon" class="btnImg"></div>',e.appendChild(o)}const t=document.querySelector("#MyMusic_Menu");t.onclick=o=>{d(),o.stopPropagation()};const a=document.querySelector(".MyMusic");a.onclick=o=>{o.stopPropagation()}},y=()=>{if(!l)return;const e=window,t=document.getElementById("GlobalAPlayer");!t||s.length<1||(c(),t.classList.contains("aplayer"))||(e.GlobalAPlayer=new l({container:document.getElementById("GlobalAPlayer"),audio:s,lrcType:3,listFolded:!1,listMaxHeight:"324px",mini:!1,fixed:!1,volume:2,storageName:"GlobalAPlayer"}),e.GlobalAPlayer.on("play",function(){c()}),e.GlobalAPlayer.on("pause",function(){c()}))};function c(){var t,a;const e=window;e.GlobalAPlayer&&e.GlobalAPlayer.mode&&(e.GlobalAPlayer.paused?(t=document.getElementById("MyMusic_icon"))==null||t.setAttribute("spin","false"):(a=document.getElementById("MyMusic_icon"))==null||a.setAttribute("spin","true"))}const m=e=>{B({method:"get",url:"https://api.injahow.cn/meting/?server=netease&type=playlist&id=596766562&auth=:auth&r=:r",params:{}}).then(t=>{console.log("获取音乐数据",t);var a=t.data;a&&a.length>0&&(s=a),console.log("加载音乐列表",s),e&&e()})};h(()=>{const e=b();m(()=>{g(()=>import("./APlayer.min-CAgWaKXK.js").then(t=>t.A),__vite__mapDeps([0,1])).then(t=>{P(()=>{l=t.default,p(),y(),window.document.body.onclick=()=>{r()}}),e.afterEach(()=>{setTimeout(()=>{p(),y()},50)})})})});const M={get APlayer(){return l},set APlayer(e){l=e},get IsShow(){return n},set IsShow(e){n=e},get GlobalMusicList(){return s},set GlobalMusicList(e){s=e},SwitchStatus:d,CloseStatus:r,InsertMenu:p,NewPlayer:y,AddBtnSpin:c,LoadMusicList:m,MyIcon:L};return Object.defineProperty(M,"__isScriptSetup",{enumerable:!1,value:!0}),M}}),k={class:"MyMusic"};function q(_,i,l,n,s,d){const r=w("ClientOnly");return S(),x(r,null,{default:G(()=>[u("div",k,[u("div",{class:I(["MyMusic_Play",{hide:!n.IsShow}])},[u("div",{class:"close",onClick:n.CloseStatus},[C(n.MyIcon,{name:"guanbi"})]),i[0]||(i[0]=u("div",{id:"GlobalAPlayer"},[E(` <Meting 

          mid:="596766562" 
          server="netease"
          api= "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r" 
          type= "playlist"
          /> `)],-1))],2)])]),_:1})}const V=A(N,[["render",q],["__file","NavMusic.vue"]]);export{V as default};
