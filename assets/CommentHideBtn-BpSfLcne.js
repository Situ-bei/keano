import{m as l}from"./tools-B9TDRQ4Q.js";import{j as p,J as C,W as r,p as f,r as B,o as _,m as y,f as E,a as I}from"./app-DahiUSEI.js";import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./commonjsHelpers-Cpj98o6Y.js";const g=p({__name:"CommentHideBtn",setup(u,{expose:n}){n();const o=()=>{const e=document.getElementById("comment");e&&(e.classList.add("show"),e.classList.remove("hide"),l.set("CommentIsDisplay",!0))},m=()=>{const e=document.getElementById("comment");e&&(e.classList.add("hide"),e.classList.remove("show"),l.set("CommentIsDisplay",!1))},s=()=>{const e=document.getElementById("comment");if(!e)return;l.get("CommentIsDisplay")?o():m(),e.style.opacity="1"},c=()=>{const e=document.getElementById("comment");if(console.log("获取dom",e),!e)return;if(!document.getElementById("ShowComment")){const t=document.createElement("button");t.id="ShowComment",t.classList.add("primary"),t.classList.add("wl-btn"),t.innerHTML="显示评论区",e.appendChild(t)}if(!document.getElementById("HideComment")){const t=document.createElement("button");t.id="HideComment",t.classList.add("primary"),t.classList.add("wl-btn"),t.innerHTML="隐藏评论区",e.appendChild(t)}const d=document.getElementById("ShowComment"),a=document.getElementById("HideComment");d&&a&&(d.onclick=o,a.onclick=m)};C(()=>{r(()=>{c(),s()}),console.log("加载了评论区组件"),f().afterEach(d=>{r(()=>{setTimeout(()=>{c(),s()},500)})})});const i={ShowComments:o,HideComments:m,ReadeCommentIsDisplay:s,CreateCommentBtn:c};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});function w(u,n,o,m,s,c){const i=B("ClientOnly");return _(),y(i,null,{default:E(()=>n[0]||(n[0]=[I("div",{class:"none"},"评论区隐藏按钮",-1)])),_:1})}const v=h(g,[["render",w],["__file","CommentHideBtn.vue"]]);export{v as default};
