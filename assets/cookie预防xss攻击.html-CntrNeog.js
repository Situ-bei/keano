import{_ as e,c as o,a as s,o as i}from"./app-Ftdclrzt.js";const t=e({},[["render",function(e,t){return i(),o("div",null,t[0]||(t[0]=[s('<h2 id="xss攻击" tabindex="-1"><a class="header-anchor" href="#xss攻击"><span>XSS攻击</span></a></h2><p>XSS（跨站脚本攻击）是指攻击者在返回的 HTML 中嵌入 javascript 脚本</p><h2 id="cookie如何防范xss攻击" tabindex="-1"><a class="header-anchor" href="#cookie如何防范xss攻击"><span>Cookie如何防范XSS攻击</span></a></h2><p>为了减轻这些攻击，需要在 HTTP 头部配上，<code>set-cookie： httponly-</code>这个属性可以防止 XSS,它会禁止 <code>javascript</code> 脚本来访问 <code>cookie</code> 。 <code>secure -</code> 这个属性告诉浏览器仅在请求为 <code>https</code> 的时候发送 <code>cookie</code> 。 结果应该是这样的：<code>Set-Cookie=&lt;cookie-value&gt;....</code></p>',4)]))}],["__file","cookie预防xss攻击.html.vue"]]),a=JSON.parse('{"path":"/study/coding/interview/cookie%E9%A2%84%E9%98%B2xss%E6%94%BB%E5%87%BB.html","title":"cookie预防xss攻击","lang":"zh-CN","frontmatter":{"date":"2024-10-20T00:00:00.000Z","title":"cookie预防xss攻击","category":["前端","游览器缓存"],"tag":["cookie","xss","面试"],"feed":false,"seo":false,"head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://situ-bei.github.io/keano/en/study/coding/interview/cookie%E9%A2%84%E9%98%B2xss%E6%94%BB%E5%87%BB.html"}]]},"headers":[{"level":2,"title":"XSS攻击","slug":"xss攻击","link":"#xss攻击","children":[]},{"level":2,"title":"Cookie如何防范XSS攻击","slug":"cookie如何防范xss攻击","link":"#cookie如何防范xss攻击","children":[]}],"git":{"createdTime":1729471464000,"updatedTime":1730422195000,"contributors":[{"name":"situ-bei","email":"2606405907@qq.com","commits":4}]},"readingTime":{"minutes":0.44,"words":132},"filePathRelative":"study/coding/interview/cookie预防xss攻击.md","localizedDate":"2024年10月20日"}');export{t as comp,a as data};
