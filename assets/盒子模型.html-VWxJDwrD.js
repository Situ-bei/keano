import{_ as i,c as s,a,o as l}from"./app-Ftdclrzt.js";const n=i({},[["render",function(i,n){return l(),s("div",null,n[0]||(n[0]=[a('<h2 id="盒子模型" tabindex="-1"><a class="header-anchor" href="#盒子模型"><span>盒子模型</span></a></h2><p>CSS 盒子模型是 CSS 中非常重要的概念，它定义了网页元素的布局和样式。盒子模型由四个部分组成：内容区域、内边距、边框和外边距。每个部分都有特定的属性和作用，共同决定了元素的最终大小和位置。</p><div style="text-align:center;"><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">┌──────────────────────────┐</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│           margin         │</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│   ┌──────────────────┐   │</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│   │      border      │   │</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│   │   ┌──────────┐   │   │</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│   │   │ padding  │   │   │</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│   │   │ ┌────┐   │   │   │</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│   │   │ │content │   │   │</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│   │   │ └────┘   │   │   │</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│   │   └──────────┘   │   │</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│   └──────────────────┘   │</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">└──────────────────────────┘</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><ul><li>盒子模型有两种： <ol><li>标准盒子模型</li><li>IE 盒子模型（怪异盒子模型）。</li></ol></li></ul><h3 id="主要属性" tabindex="-1"><a class="header-anchor" href="#主要属性"><span>主要属性</span></a></h3><div class="language-css line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="css" data-title="css" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 标准盒模型 */</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    box-sizing: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">content-box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;    </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 默认值 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;              </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 内容区宽度 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;             </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 内容区高度 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;             </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 内边距 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">333</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;    </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 边框 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    margin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;              </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 外边距 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* IE盒模型(怪异盒模型) */</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.box-ie</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    box-sizing: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">border-box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;    </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* IE盒模型 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;              </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 包含padding和border的总宽度 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;             </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 包含padding和border的总高度 */</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">333</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    margin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="两种盒模型计算方式" tabindex="-1"><a class="header-anchor" href="#两种盒模型计算方式"><span>两种盒模型计算方式</span></a></h3><ol><li><p>标准盒模型总宽度计算</p><ul><li>实际宽度 = <code>width + padding-left + padding-right + border-left + border-right</code></li></ul></li><li><p>IE盒模型总宽度计算</p><ul><li>实际内容宽度 = <code>width - padding-left - padding-right - border-left - border-right</code></li></ul></li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>标准盒子模型：<code>width</code> 属性包括内容区宽度、内边距和边框。</li><li>IE 盒子模型：<code>width</code> 属性只包括内容区宽度，不包括内边距和边框。</li></ul></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><ul><li>标准盒子模型：<code>box-sizing: content-box;</code></li><li>IE 盒子模型：<code>box-sizing: border-box;</code></li></ul><div class="hint-container tip"><p class="hint-container-title">建议</p><p>全局使用 border-box</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    box-sizing: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">border-box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>',12)]))}],["__file","盒子模型.html.vue"]]),e=JSON.parse('{"path":"/study/coding/interview/%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B.html","title":"CSS 盒子模型","lang":"zh-CN","frontmatter":{"date":"2024-10-31T00:00:00.000Z","title":"CSS 盒子模型","category":["前端","CSS原理"],"tag":["CSS 盒子模型","面试"],"headerDepth":6,"excerpt":"<p>CSS 盒子模型是 CSS 中非常重要的概念，它定义了网页元素的布局和样式。盒子模型由四个部分组成：内容区域、内边距、边框和外边距。每个部分都有特定的属性和作用，共同决定了元素的最终大小和位置。 </p>","feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"盒子模型","slug":"盒子模型","link":"#盒子模型","children":[{"level":3,"title":"主要属性","slug":"主要属性","link":"#主要属性","children":[]},{"level":3,"title":"两种盒模型计算方式","slug":"两种盒模型计算方式","link":"#两种盒模型计算方式","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{"createdTime":1730422195000,"updatedTime":1730422195000,"contributors":[{"name":"situ-bei","email":"2606405907@qq.com","commits":1}]},"readingTime":{"minutes":1.63,"words":489},"filePathRelative":"study/coding/interview/盒子模型.md","localizedDate":"2024年10月31日"}');export{n as comp,e as data};
