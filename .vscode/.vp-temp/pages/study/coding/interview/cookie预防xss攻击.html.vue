<template><div><h2 id="xss攻击" tabindex="-1"><a class="header-anchor" href="#xss攻击"><span>XSS攻击</span></a></h2>
<p>XSS（跨站脚本攻击）是指攻击者在返回的 HTML 中嵌入 javascript 脚本</p>
<h2 id="cookie如何防范xss攻击" tabindex="-1"><a class="header-anchor" href="#cookie如何防范xss攻击"><span>Cookie如何防范XSS攻击</span></a></h2>
<p>为了减轻这些攻击，需要在 HTTP 头部配上，<code v-pre>set-cookie： httponly-</code>这个属性可以防止 XSS,它会禁止 <code v-pre>javascript</code> 脚本来访问 <code v-pre>cookie</code> 。 <code v-pre>secure -</code> 这个属性告诉浏览器仅在请求为 <code v-pre>https</code> 的时候发送 <code v-pre>cookie</code> 。 结果应该是这样的：<code v-pre>Set-Cookie=&lt;cookie-value&gt;....</code></p>
</div></template>


