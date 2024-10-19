var R=Object.defineProperty;var E=i=>{throw TypeError(i)};var $=(i,t,e)=>t in i?R(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var m=(i,t,e)=>$(i,typeof t!="symbol"?t+"":t,e),w=(i,t,e)=>t.has(i)||E("Cannot "+e);var s=(i,t,e)=>(w(i,t,"read from private field"),e?e.call(i):t.get(i)),r=(i,t,e)=>t.has(i)?E("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),c=(i,t,e,n)=>(w(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),p=(i,t,e)=>(w(i,t,"access private method"),e);import{aH as U,bK as V,bL as H,bM as _,af as A,bN as q,bO as T,a_ as F,aN as K,bw as Y}from"./app-BRb8tAy7.js";import{H as j,a as z}from"./vidstack-CGXAe0PE-D6nTEoKn.js";import"./vidstack-DSYpsFWk-Bm6gtKb0.js";var P,f,k,C,L;class B{constructor(t,e){r(this,k);r(this,P);r(this,f);c(this,P,t),c(this,f,e),t.textTracks.onaddtrack=p(this,k,C).bind(this),A(p(this,k,L).bind(this))}}P=new WeakMap,f=new WeakMap,k=new WeakSet,C=function(t){const e=t.track;if(!e||G(s(this,P),e))return;const n=new q({id:e.id,kind:e.kind,label:e.label??"",language:e.language,type:"vtt"});n[T.native]={track:e},n[T.readyState]=2,n[T.nativeHLS]=!0;let a=0;const I=O=>{if(e.cues)for(let M=a;M<e.cues.length;M++)n.addCue(e.cues[M],O),a++};I(t),e.oncuechange=I,s(this,f).textTracks.add(n,t),n.setMode(e.mode,t)},L=function(){var t;s(this,P).textTracks.onaddtrack=null;for(const e of s(this,f).textTracks){const n=(t=e[T.native])==null?void 0:t.track;n!=null&&n.oncuechange&&(n.oncuechange=null)}};function G(i,t){return Array.from(i.children).find(e=>e.track===t)}var d,y,x,S,D,b;class J{constructor(t,e){r(this,x);r(this,d);r(this,y);r(this,b,(t,e)=>{s(this,y).notify("picture-in-picture-change",t,e)});c(this,d,t),c(this,y,e),new F(t).add("enterpictureinpicture",p(this,x,S).bind(this)).add("leavepictureinpicture",p(this,x,D).bind(this))}get active(){return document.pictureInPictureElement===s(this,d)}get supported(){return H(s(this,d))}async enter(){return s(this,d).requestPictureInPicture()}exit(){return document.exitPictureInPicture()}}d=new WeakMap,y=new WeakMap,x=new WeakSet,S=function(t){s(this,b).call(this,!0,t)},D=function(t){s(this,b).call(this,!1,t)},b=new WeakMap;var l,g,o,v,N;class Q{constructor(t,e){r(this,v);r(this,l);r(this,g);r(this,o,"inline");c(this,l,t),c(this,g,e),K(t,"webkitpresentationmodechanged",p(this,v,N).bind(this))}get mode(){return s(this,o)}get supported(){return V(s(this,l))}async setPresentationMode(t){s(this,o)!==t&&s(this,l).webkitSetPresentationMode(t)}}l=new WeakMap,g=new WeakMap,o=new WeakMap,v=new WeakSet,N=function(t){var n;const e=s(this,o);c(this,o,s(this,l).webkitPresentationMode),(n=s(this,g).player)==null||n.dispatch(new Y("video-presentation-change",{detail:s(this,o),trigger:t})),["fullscreen","picture-in-picture"].forEach(a=>{(s(this,o)===a||e===a)&&s(this,g).notify(`${a}-change`,s(this,o)===a,t)})};var u;class W{constructor(t){r(this,u);c(this,u,t)}get active(){return s(this,u).mode==="fullscreen"}get supported(){return s(this,u).supported}async enter(){s(this,u).setPresentationMode("fullscreen")}async exit(){s(this,u).setPresentationMode("inline")}}u=new WeakMap;var h;class X{constructor(t){r(this,h);c(this,h,t)}get active(){return s(this,h).mode==="picture-in-picture"}get supported(){return s(this,h).supported}async enter(){s(this,h).setPresentationMode("picture-in-picture")}async exit(){s(this,h).setPresentationMode("inline")}}h=new WeakMap;class st extends j{constructor(e,n){super(e,n);m(this,"$$PROVIDER_TYPE","VIDEO");m(this,"airPlay");m(this,"fullscreen");m(this,"pictureInPicture");U(()=>{if(this.airPlay=new z(e,n),V(e)){const a=new Q(e,n);this.fullscreen=new W(a),this.pictureInPicture=new X(a)}else H(e)&&(this.pictureInPicture=new J(e,n))},this.scope)}get type(){return"video"}setup(){super.setup(),_(this.video)&&new B(this.video,this.ctx),this.ctx.textRenderers.attachVideo(this.video),A(()=>{this.ctx.textRenderers.attachVideo(null)}),this.type==="video"&&this.ctx.notify("provider-setup",this)}get video(){return this.media}}export{st as VideoProvider};
