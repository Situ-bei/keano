var a=Object.defineProperty;var o=(t,i,e)=>i in t?a(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var r=(t,i,e)=>o(t,typeof i!="symbol"?i+"":i,e);import{aG as p}from"./app-B5OslRBi.js";import{H as d,a as u}from"./vidstack-CGXAe0PE-C5igDg1o.js";import"./vidstack-DSYpsFWk-BTyMF6LU.js";class y extends d{constructor(e,s){super(e,s);r(this,"$$PROVIDER_TYPE","AUDIO");r(this,"airPlay");p(()=>{this.airPlay=new u(this.media,s)},this.scope)}get type(){return"audio"}setup(){super.setup(),this.type==="audio"&&this.ctx.notify("provider-setup",this)}get audio(){return this.media}}export{y as AudioProvider};