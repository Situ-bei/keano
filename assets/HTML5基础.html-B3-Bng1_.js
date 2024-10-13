import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,e as a,o as l}from"./app-aKE69vAc.js";const e={};function n(h,i){return l(),t("div",null,i[0]||(i[0]=[a(`<h1 id="html5" tabindex="-1"><a class="header-anchor" href="#html5"><span>HTML5</span></a></h1><h1 id="_1-html5简介" tabindex="-1"><a class="header-anchor" href="#_1-html5简介"><span>1 HTML5简介</span></a></h1><h2 id="_1-1-什么是html5" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是html5"><span>1.1 什么是HTML5</span></a></h2><ul><li><code>HTML5</code> 是新一代的 <code>HTML</code> 标准，2014年10月由万维网联盟（ W3C ）完成标准制定。</li><li>官网地址： <ul><li>W3C 提供： https://www.w3.org/TR/html/index.html</li><li>WHATWG 提供：https://whatwg-cn.github.io/html/multipage</li></ul></li><li><code>HTML5</code> 在狭义上是指新一代的 <code>HTML</code> 标准，在广义上是指：整个前端。</li></ul><h2 id="_1-2-html5-优势" tabindex="-1"><a class="header-anchor" href="#_1-2-html5-优势"><span>1.2 HTML5 优势</span></a></h2><ol><li>针对 <code>JavaScript</code> ，新增了很多可操作的接口。</li><li>新增了一些语义化标签、全局属性。</li><li>新增了多媒体标签，可以很好的替代 <code>flash</code> 。</li><li>更加侧重语义化，对于 <code>SEO</code> 更友好。</li><li>可移植性好，可以大量应用在移动设备上。</li></ol><h2 id="_1-3-3-html5兼容性" tabindex="-1"><a class="header-anchor" href="#_1-3-3-html5兼容性"><span>1.3 3.HTML5兼容性</span></a></h2><p>支持： Chrome 、 Safari 、 Opera 、 Firefox 等主流浏览器。 IE 浏览器必须是 9 及以上版本才支持 <code>HTML5</code> ，且 IE9 仅支持部分 <code>HTML5</code> 新特性。</p><h1 id="_2-新增语义化标签" tabindex="-1"><a class="header-anchor" href="#_2-新增语义化标签"><span>2 新增语义化标签</span></a></h1><h2 id="_2-1-新增布局标签" tabindex="-1"><a class="header-anchor" href="#_2-1-新增布局标签"><span>2.1 新增布局标签</span></a></h2><p>![[Pasted image 20240628002803.png]] 关于 <code>article</code> 和 <code>section</code> ：</p><ol><li><code>artical</code> 里面可以有多个 <code>section</code> 。</li><li><code>section</code> 强调的是分段或分块，如果你想将一块内容分成几段的时候，可使用 <code>section</code> 元素。\`\`</li><li><code>article</code> 比 <code>section</code> 更强调独立性，一块内容如果比较独立、比较完整，应该使用 <code>article</code> 元素。</li></ol><h2 id="_2-2-新增状态标签" tabindex="-1"><a class="header-anchor" href="#_2-2-新增状态标签"><span>2.2 新增状态标签</span></a></h2><h3 id="_2-2-1-meter-标签" tabindex="-1"><a class="header-anchor" href="#_2-2-1-meter-标签"><span>2.2.1 meter 标签</span></a></h3><ul><li>语义：定义已知范围内的标量测量。也被称为 <code>gauge</code> （尺度），双标签，例如：电量、磁盘用量等。</li><li>常用属性如下：</li></ul><table><thead><tr><th>属性</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>high</td><td>数值</td><td>规定高值</td></tr><tr><td>low</td><td>数值</td><td>规定低值</td></tr><tr><td>max</td><td>数值</td><td>规定最大值</td></tr><tr><td>min</td><td>数值</td><td>规定最小值</td></tr><tr><td>optimum</td><td>数值</td><td>规定最优值</td></tr><tr><td>value</td><td>数值</td><td>规定当前值</td></tr></tbody></table><h3 id="_2-2-2-progress-标签" tabindex="-1"><a class="header-anchor" href="#_2-2-2-progress-标签"><span>2.2.2 progress 标签</span></a></h3><ul><li>语义：显示某个任务完成的进度的指示器，一般用于表示进度条，双标签，例如：工作完成进度等。</li><li>常用属性如下：<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">属性</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   值</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      描述</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">max</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    数值</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   规定目标值。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">value</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  数值</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  规定当前值。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_2-3-新增列表标签" tabindex="-1"><a class="header-anchor" href="#_2-3-新增列表标签"><span>2.3 新增列表标签</span></a></h2><p>![[Pasted image 20240628003744.png]]</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;mydata&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">datalist</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;mydata&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;周冬雨&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;周冬雨&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;周杰伦&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;周杰伦&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;温兆伦&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;温兆伦&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;马冬梅&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;马冬梅&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">datalist</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">details</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">summary</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;如何走上人生巅峰？&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">summary</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;一步一步走呗&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">details</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-新增文本标签" tabindex="-1"><a class="header-anchor" href="#_2-4-新增文本标签"><span>2.4 新增文本标签</span></a></h2><h3 id="_2-4-1-文本注音" tabindex="-1"><a class="header-anchor" href="#_2-4-1-文本注音"><span>2.4.1 文本注音</span></a></h3><p>![[Pasted image 20240628004024.png]]</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ruby</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;魑魅魍魉&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">rt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;chī mèi wǎng liǎng &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">rt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ruby</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-2-文本标记" tabindex="-1"><a class="header-anchor" href="#_2-4-2-文本标记"><span>2.4.2 文本标记</span></a></h3><p>![[Pasted image 20240628004124.png]]</p><blockquote><p>注意： W3C 建议 <code>mark</code> 用于标记搜索结果中的关键字。</p></blockquote><h1 id="_3-新增表单功能" tabindex="-1"><a class="header-anchor" href="#_3-新增表单功能"><span>3 新增表单功能</span></a></h1><h2 id="_3-1-表单控件新增属性" tabindex="-1"><a class="header-anchor" href="#_3-1-表单控件新增属性"><span>3.1 表单控件新增属性</span></a></h2><p>![[Pasted image 20240628004200.png]]</p><h2 id="_3-2-input-新增属性值" tabindex="-1"><a class="header-anchor" href="#_3-2-input-新增属性值"><span>3.2 input 新增属性值</span></a></h2><p>![[Pasted image 20240628004228.png]]</p><h2 id="_3-3-form-标签新增属性" tabindex="-1"><a class="header-anchor" href="#_3-3-form-标签新增属性"><span>3.3 form 标签新增属性</span></a></h2><p>![[Pasted image 20240628004535.png]]</p><h1 id="_4-新增多媒体标签" tabindex="-1"><a class="header-anchor" href="#_4-新增多媒体标签"><span>4 新增多媒体标签</span></a></h1><h2 id="_4-1-视频标签" tabindex="-1"><a class="header-anchor" href="#_4-1-视频标签"><span>4.1 视频标签</span></a></h2><ul><li><code>&lt;video&gt;</code> 标签用来定义视频，它是双标签。 ![[Pasted image 20240628004702.png]]</li></ul><h2 id="_4-2-音频标签" tabindex="-1"><a class="header-anchor" href="#_4-2-音频标签"><span>4.2 音频标签</span></a></h2><ul><li><code>&lt;audio&gt;</code> 标签用来定义音频，它是双标签。 ![[Pasted image 20240628004751.png]]</li></ul><h1 id="_5-新增全局属性-了解" tabindex="-1"><a class="header-anchor" href="#_5-新增全局属性-了解"><span>5 新增全局属性（了解）</span></a></h1><p>![[Pasted image 20240628004813.png]]</p><h1 id="_6-html5兼容性处理" tabindex="-1"><a class="header-anchor" href="#_6-html5兼容性处理"><span>6 HTML5兼容性处理</span></a></h1><ul><li><p>添加元信息，让浏览器处于最优渲染模式。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!--设置IE总是使用最新的文档模式进行渲染--&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">meta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> http-equiv</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;X-UA-Compatible&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;IE=Edge&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!--优先使用 webkit ( Chromium ) 内核进行渲染, 针对360等壳浏览器--&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">meta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;renderer&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;webkit&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 <code>html5shiv</code> 让低版本浏览器认识 <code>H5</code> 的语义化标签。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!--[if lt ie 9]&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;script src=&quot;../sources/js/html5shiv.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;![endif]--&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>扩展</p></li></ul><blockquote><p>lt 小于 lte 小于等于 gt 大于 gte 大于等于 ! 逻辑非</p></blockquote><ul><li>示例：<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!--[if IE 8]&gt;仅IE8可见&lt;![endif]--&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!--[if gt IE 8]&gt;仅IE8以上可见&lt;![endif]—&gt;</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-light-font-style:italic;--shiki-dark:#FFFFFF;--shiki-dark-font-style:italic;">&lt;!--</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">[if lt IE 8]&gt;仅IE8以下可见&lt;![endif]—&gt;</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-light-font-style:italic;--shiki-dark:#FFFFFF;--shiki-dark-font-style:italic;">&lt;!--</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">[if gte IE 8]&gt;IE8及以上可见&lt;![endif]—&gt;</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-light-font-style:italic;--shiki-dark:#FFFFFF;--shiki-dark-font-style:italic;">&lt;!--</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">[if lte IE 8]&gt;IE8及以下可见&lt;![endif]—&gt;</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-light-font-style:italic;--shiki-dark:#FFFFFF;--shiki-dark-font-style:italic;">&lt;!--</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">[if !IE 8]&gt;非IE8的IE可见&lt;![endif]--&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,46)]))}const k=s(e,[["render",n],["__file","HTML5基础.html.vue"]]),r=JSON.parse('{"path":"/study/coding/HTML/HTML5%E5%9F%BA%E7%A1%80.html","title":"HTML5","lang":"zh-CN","frontmatter":{"number headings":"auto, first-level 1, max 6, 1.1","category":["前端","HTML"],"tags":["HTML","HTML5","让我们变得更强大"],"date":"2024-06-28T00:00:00.000Z","description":"HTML5 1 HTML5简介 1.1 什么是HTML5 HTML5 是新一代的 HTML 标准，2014年10月由万维网联盟（ W3C ）完成标准制定。 官网地址： W3C 提供： https://www.w3.org/TR/html/index.html WHATWG 提供：https://whatwg-cn.github.io/html/mult...","head":[["meta",{"property":"og:url","content":"https://situ-bei.github.io/keano/keano/study/coding/HTML/HTML5%E5%9F%BA%E7%A1%80.html"}],["meta",{"property":"og:site_name","content":"KEANO"}],["meta",{"property":"og:title","content":"HTML5"}],["meta",{"property":"og:description","content":"HTML5 1 HTML5简介 1.1 什么是HTML5 HTML5 是新一代的 HTML 标准，2014年10月由万维网联盟（ W3C ）完成标准制定。 官网地址： W3C 提供： https://www.w3.org/TR/html/index.html WHATWG 提供：https://whatwg-cn.github.io/html/mult..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-13T12:32:26.000Z"}],["meta",{"property":"article:tag","content":"HTML"}],["meta",{"property":"article:tag","content":"HTML5"}],["meta",{"property":"article:tag","content":"让我们变得更强大"}],["meta",{"property":"article:published_time","content":"2024-06-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-13T12:32:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTML5\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-13T12:32:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Keano\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1.1 什么是HTML5","slug":"_1-1-什么是html5","link":"#_1-1-什么是html5","children":[]},{"level":2,"title":"1.2 HTML5 优势","slug":"_1-2-html5-优势","link":"#_1-2-html5-优势","children":[]},{"level":2,"title":"1.3 3.HTML5兼容性","slug":"_1-3-3-html5兼容性","link":"#_1-3-3-html5兼容性","children":[]},{"level":2,"title":"2.1 新增布局标签","slug":"_2-1-新增布局标签","link":"#_2-1-新增布局标签","children":[]},{"level":2,"title":"2.2 新增状态标签","slug":"_2-2-新增状态标签","link":"#_2-2-新增状态标签","children":[{"level":3,"title":"2.2.1 meter 标签","slug":"_2-2-1-meter-标签","link":"#_2-2-1-meter-标签","children":[]},{"level":3,"title":"2.2.2 progress 标签","slug":"_2-2-2-progress-标签","link":"#_2-2-2-progress-标签","children":[]}]},{"level":2,"title":"2.3 新增列表标签","slug":"_2-3-新增列表标签","link":"#_2-3-新增列表标签","children":[]},{"level":2,"title":"2.4 新增文本标签","slug":"_2-4-新增文本标签","link":"#_2-4-新增文本标签","children":[{"level":3,"title":"2.4.1 文本注音","slug":"_2-4-1-文本注音","link":"#_2-4-1-文本注音","children":[]},{"level":3,"title":"2.4.2 文本标记","slug":"_2-4-2-文本标记","link":"#_2-4-2-文本标记","children":[]}]},{"level":2,"title":"3.1 表单控件新增属性","slug":"_3-1-表单控件新增属性","link":"#_3-1-表单控件新增属性","children":[]},{"level":2,"title":"3.2 input 新增属性值","slug":"_3-2-input-新增属性值","link":"#_3-2-input-新增属性值","children":[]},{"level":2,"title":"3.3 form 标签新增属性","slug":"_3-3-form-标签新增属性","link":"#_3-3-form-标签新增属性","children":[]},{"level":2,"title":"4.1 视频标签","slug":"_4-1-视频标签","link":"#_4-1-视频标签","children":[]},{"level":2,"title":"4.2 音频标签","slug":"_4-2-音频标签","link":"#_4-2-音频标签","children":[]}],"git":{"createdTime":1728822746000,"updatedTime":1728822746000,"contributors":[{"name":"situ-bei","email":"2606405907@qq.com","commits":1}]},"readingTime":{"minutes":3.09,"words":928},"filePathRelative":"study/coding/HTML/HTML5基础.md","localizedDate":"2024年6月28日","excerpt":"\\n<h1>1 HTML5简介</h1>\\n<h2>1.1 什么是HTML5</h2>\\n<ul>\\n<li><code>HTML5</code> 是新一代的 <code>HTML</code> 标准，2014年10月由万维网联盟（ W3C ）完成标准制定。</li>\\n<li>官网地址：\\n<ul>\\n<li>W3C 提供： https://www.w3.org/TR/html/index.html</li>\\n<li>WHATWG 提供：https://whatwg-cn.github.io/html/multipage</li>\\n</ul>\\n</li>\\n<li><code>HTML5</code> 在狭义上是指新一代的 <code>HTML</code> 标准，在广义上是指：整个前端。</li>\\n</ul>","autoDesc":true}');export{k as comp,r as data};
