import{_ as i,c as s,b as e,d as l,g as a,a as n,o as t}from"./app-BlOqLpTI.js";const d=i({},[["render",function(i,d){return t(),s("div",null,[d[0]||(d[0]=e("p",null,[l("LESS 是一种 "),e("code",null,"CSS"),l(" 预处理器，它扩展了 "),e("code",null,"CSS"),l(" 的功能，使样式表的编写更加灵活和可维护。LESS 通过引入变量、嵌套规则、混合（mixins）、函数等高级特性，简化了复杂的样式表编写过程。编写的 LESS 代码最终会被编译成标准的 "),e("code",null,"CSS"),l(" 代码，浏览器可以直接解析和应用。")],-1)),a(" more "),d[1]||(d[1]=n('<h1 id="_1-注释" tabindex="-1"><a class="header-anchor" href="#_1-注释"><span>1 注释</span></a></h1><h2 id="_1-1-单行注释" tabindex="-1"><a class="header-anchor" href="#_1-1-单行注释"><span>1.1 单行注释</span></a></h2><ul><li>语法：<code>//</code> 注释内容</li><li>快捷键：<code>ctrl + /</code></li></ul><h2 id="_1-2-块注释" tabindex="-1"><a class="header-anchor" href="#_1-2-块注释"><span>1.2 块注释</span></a></h2><p>语法：<code>/*</code> 注释内容 <code>*/</code> 快捷键： <code>Shift + Alt + A</code></p><h1 id="_2-运算" tabindex="-1"><a class="header-anchor" href="#_2-运算"><span>2 运算</span></a></h1><ul><li>加、减、乘直接书写计算表达式</li><li>除法需要添加 <code>（）</code> 或 <code>.</code></li><li>表达式存在多个单位以第一个单位为准</li></ul><h1 id="_3-嵌套" tabindex="-1"><a class="header-anchor" href="#_3-嵌套"><span>3 嵌套</span></a></h1><ul><li><p>作用：快速生成后代选择器 ![[Pasted image 20240702021844.png|550]]</p></li><li><p>提示：用 <code>&amp;</code> 表示当前选择器，不会生成后代选择器，通常配合伪类或伪元素使用 ![[Pasted image 20240702021948.png|550]]</p></li></ul><h1 id="_4-变量" tabindex="-1"><a class="header-anchor" href="#_4-变量"><span>4 变量</span></a></h1><ul><li>概念：容器，存储数据 <ul><li>作用：存储数据，方便使用和修改</li></ul></li><li>语法： <ul><li>定义变量：@变量名: 数据;</li><li>使用变量：CSS属性：@变量名;</li></ul><div class="language-less line-numbers-mode" data-highlighter="shiki" data-ext="less" data-title="less" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 定义变量</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">@myColor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">pink</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 使用变量</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">color: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">@myColor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">color: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">@myColor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h1 id="_5-导入" tabindex="-1"><a class="header-anchor" href="#_5-导入"><span>5 导入</span></a></h1><ul><li>作用：导入 <code>less</code> 公共样式文件</li><li>语法：导入: <code>@import “文件路径”;</code></li><li>提示：如果是 <code>less</code> 文件可以省略后缀<div class="language-less line-numbers-mode" data-highlighter="shiki" data-ext="less" data-title="less" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;./base.less&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;./common&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h1 id="_6-导出" tabindex="-1"><a class="header-anchor" href="#_6-导出"><span>6 导出</span></a></h1><ul><li>写法：在 <code>less</code> 文件的第一行添加 <code>// out: 存储URL</code></li><li>提示：文件夹名称后面添加 <code>/</code><div class="language-less line-numbers-mode" data-highlighter="shiki" data-ext="less" data-title="less" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// out: ./index.css</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// out: ./css/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_6-1-禁止导出" tabindex="-1"><a class="header-anchor" href="#_6-1-禁止导出"><span>6.1 禁止导出</span></a></h2><ul><li>写法：在 <code>less</code> 文件第一行添加:  <code>// out: false</code></li></ul>',17))])}],["__file","Less.html.vue"]]),h=JSON.parse('{"path":"/en/study/coding/CSS/Less.html","title":"《预编译器之Less》","lang":"en-US","frontmatter":{"number headings":"auto, first-level 1, max 6, contents ^top, 1.1","title":"《预编译器之Less》","category":["前端","CSS"],"tags":["CSS","Less","预编译器"],"date":"2024-07-02T02:16:00.000Z","article":false,"description":"LESS 是一种 CSS 预处理器，它扩展了 CSS 的功能，使样式表的编写更加灵活和可维护。LESS 通过引入变量、嵌套规则、混合（mixins）、函数等高级特性，简化了复杂的样式表编写过程。编写的 LESS 代码最终会被编译成标准的 CSS 代码，浏览器可以直接解析和应用。","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://situ-bei.github.io/keano/study/coding/CSS/Less.html"}],["meta",{"property":"og:url","content":"https://situ-bei.github.io/keano/en/study/coding/CSS/Less.html"}],["meta",{"property":"og:site_name","content":"icyn"}],["meta",{"property":"og:title","content":"《预编译器之Less》"}],["meta",{"property":"og:description","content":"LESS 是一种 CSS 预处理器，它扩展了 CSS 的功能，使样式表的编写更加灵活和可维护。LESS 通过引入变量、嵌套规则、混合（mixins）、函数等高级特性，简化了复杂的样式表编写过程。编写的 LESS 代码最终会被编译成标准的 CSS 代码，浏览器可以直接解析和应用。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-22T17:10:18.000Z"}],["meta",{"property":"article:tag","content":"CSS"}],["meta",{"property":"article:tag","content":"Less"}],["meta",{"property":"article:tag","content":"预编译器"}],["meta",{"property":"article:published_time","content":"2024-07-02T02:16:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-22T17:10:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"《预编译器之Less》\\",\\"description\\":\\"LESS 是一种 CSS 预处理器，它扩展了 CSS 的功能，使样式表的编写更加灵活和可维护。LESS 通过引入变量、嵌套规则、混合（mixins）、函数等高级特性，简化了复杂的样式表编写过程。编写的 LESS 代码最终会被编译成标准的 CSS 代码，浏览器可以直接解析和应用。\\"}"]]},"headers":[{"level":1,"title":"1 注释","slug":"_1-注释","link":"#_1-注释","children":[{"level":2,"title":"1.1 单行注释","slug":"_1-1-单行注释","link":"#_1-1-单行注释","children":[]},{"level":2,"title":"1.2 块注释","slug":"_1-2-块注释","link":"#_1-2-块注释","children":[]}]},{"level":1,"title":"2 运算","slug":"_2-运算","link":"#_2-运算","children":[]},{"level":1,"title":"3 嵌套","slug":"_3-嵌套","link":"#_3-嵌套","children":[]},{"level":1,"title":"4 变量","slug":"_4-变量","link":"#_4-变量","children":[]},{"level":1,"title":"5 导入","slug":"_5-导入","link":"#_5-导入","children":[]},{"level":1,"title":"6 导出","slug":"_6-导出","link":"#_6-导出","children":[{"level":2,"title":"6.1 禁止导出","slug":"_6-1-禁止导出","link":"#_6-1-禁止导出","children":[]}]}],"git":{"createdTime":1728589721000,"updatedTime":1729617018000,"contributors":[{"name":"situ-bei","email":"2606405907@qq.com","commits":1}]},"readingTime":{"minutes":1.44,"words":432},"filePathRelative":"en/study/coding/CSS/Less.md","localizedDate":"July 2, 2024","excerpt":"<p>LESS 是一种 <code>CSS</code> 预处理器，它扩展了 <code>CSS</code> 的功能，使样式表的编写更加灵活和可维护。LESS 通过引入变量、嵌套规则、混合（mixins）、函数等高级特性，简化了复杂的样式表编写过程。编写的 LESS 代码最终会被编译成标准的 <code>CSS</code> 代码，浏览器可以直接解析和应用。</p>\\n","autoDesc":true}');export{d as comp,h as data};
