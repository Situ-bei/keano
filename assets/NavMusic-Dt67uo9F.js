const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/APlayer.min-DVkxgHZL.js","assets/commonjsHelpers-lGe4XDVY.js"])))=>i.map(i=>d[i]);
import{j as e,_ as t,o as s,c as n,Y as a,p as l,l as o,J as i,X as r,Z as c,W as u,r as d,m as p,f as y,b as m,e as v}from"./app-xawq89wH.js";const M=e({__name:"MyIcon",props:{name:String,spin:Boolean},setup(e,{expose:t}){t();const s={props:e};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),b=["spin"];const _=t(M,[["render",function(e,t,l,o,i,r){return s(),n("span",{class:a(["iconfont icon",`icon-${o.props.name}`]),spin:o.props.spin},null,10,b)}],["__file","MyIcon.vue"]]),f={class:"MyMusic"};const g=t(e({__name:"NavMusic",setup(e,{expose:t}){t();const s=l();let n,a="https://api.injahow.cn/meting/?server=netease&type=playlist&id=596766562&auth=:auth&r=:r",d=o(!1),p=[];const y=()=>{d.value=!d.value},m=()=>{const e=document.querySelector(".vp-navbar-end");if(!e)return;if(!document.querySelector("#MyMusic_Menu")){const t=document.createElement("div");t.id="MyMusic_Menu",t.classList.add("nav-item"),t.innerHTML='<div id="MyMusic_icon" class="btnImg"></div>',e.appendChild(t)}document.querySelector("#MyMusic_Menu").onclick=e=>{y(),e.stopPropagation()};document.querySelector(".MyMusic").onclick=e=>{e.stopPropagation()}};function v(){var e,t;const s=window;s.GlobalAPlayer&&s.GlobalAPlayer.mode&&(s.GlobalAPlayer.paused?null==(e=document.getElementById("MyMusic_icon"))||e.setAttribute("spin","false"):null==(t=document.getElementById("MyMusic_icon"))||t.setAttribute("spin","true"))}const M=()=>{if(!n)return;const e=window,t=document.getElementById("GlobalAPlayer");if(!t)return;if(p.length<1)return;v();t.classList.contains("aplayer")||(e.GlobalAPlayer=new n({container:document.getElementById("GlobalAPlayer"),audio:p,lrcType:3,
//歌词文件形式 1歌词直接复制进来，2html形式，3数据库获取格式跟下面的一样
listFolded:!1,listMaxHeight:"324px",mini:!1,fixed:!1,volume:2,storageName:"GlobalAPlayer"}),e.GlobalAPlayer.on("play",(function(){v()})),e.GlobalAPlayer.on("pause",(function(){v()})))},b=async()=>{try{await r({method:"get",
//插件作者的歌单
// url: '//file.mo7.cc/music/list.json',
// 自己的歌单
url:a,params:{}}).then((e=>{if(e.data.message,"请求次数已达上限，请明天再试"==e.data.message)return alert("音乐API请求次数已达上限，请明天再试"),a="//api.i-meto.com/meting/api?server=netease&type=playlist&id=596766562&r=:r",alert("赋值"),b();const t=e.data;t&&t.length>0&&(p=t),f()}))}catch(e){alert(`\n      歌单获取失败 \n      错误信息：${e.message}\n      错误代码：${e.code}\n      `),console.error("加载音乐列表失败:",e)}},f=()=>{c((()=>import("./APlayer.min-DVkxgHZL.js").then((e=>e.A))),__vite__mapDeps([0,1])).then((e=>{u((()=>{n=e.default,m(),M()})),s.afterEach(((e,t)=>{setTimeout((()=>{m(),M()}),30)}))}))};i((()=>{b()}));const g={router:s,get musicListURL(){return a},set musicListURL(e){a=e},get APlayer(){return n},set APlayer(e){n=e},get IsShow(){return d},set IsShow(e){d=e},get GlobalMusicList(){return p},set GlobalMusicList(e){p=e},customTemplate:'\n  <div class="custom-aplayer">\n    <button class="custom-play">播放</button>\n    <button class="custom-pause">暂停</button>\n    <div class="custom-progress">\n      <div class="custom-loaded"></div>\n      <div class="custom-played"></div>\n    </div>\n  </div>\n',SwitchStatus:y,CloseStatus:()=>{d.value&&(d.value=!1)},InsertMenu:m,AddBtnSpin:v,NewPlayer:M,LoadMusicList:b,creatAplayer:f,MyIcon:_};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}),[["render",function(e,t,n,l,o,i){const r=d("ClientOnly");return s(),p(r,null,{default:y((()=>[m("div",f,[m("div",{class:a(["MyMusic_Play",{hide:!l.IsShow}])},[m("div",{class:"close",onClick:l.CloseStatus},[v(l.MyIcon,{name:"guanbi"})]),t[0]||(t[0]=m("div",{id:"GlobalAPlayer"},[m("div",{class:"aplayer-lrc"})],-1
/* HOISTED */))],2
/* CLASS */)])])),_:1
/* STABLE */})}],["__file","NavMusic.vue"]]);export{g as default};
