<template><div><h1 id="_1-css3-简介" tabindex="-1"><a class="header-anchor" href="#_1-css3-简介"><span>1 CSS3 简介</span></a></h1>
<h2 id="_1-1-css3-概述" tabindex="-1"><a class="header-anchor" href="#_1-1-css3-概述"><span>1.1 CSS3 概述</span></a></h2>
<ul>
<li>CSS3 是 CSS2 的升级版本，它在 CSS2 的基础上，新增了很多强大的新功能，从而解决一些实际面临的问题。</li>
<li>CSS3 在未来会按照模块化的方式去发展： https://www.w3.org/Style/CSS/current-work.html</li>
<li>CSS3 的新特性如下：
<ul>
<li>新增了更加实用的选择器，例如：动态伪类选择器、目标伪类选择器、伪元素选择器等等。</li>
<li>新增了更好的视觉效果，例如：圆角、阴影、渐变等。</li>
<li>新增了丰富的背景效果，例如：支持多个背景图片，同时新增了若干个背景相关的属性。</li>
<li>新增了全新的布局方案 —— 弹性盒子。</li>
<li>新增了 Web 字体，可以显示用户电脑上没有安装的字体。</li>
<li>增强了颜色，例如： <code v-pre>HSL</code> 、 <code v-pre>HSLA</code> 、 <code v-pre>RGBA</code> 几种新的颜色模式，新增 <code v-pre>opacity</code> 属性来控制透明度。</li>
<li>增加了 <code v-pre>2D</code> 和 <code v-pre>3D</code> 变换，例如：旋转、扭曲、缩放、位移等。</li>
<li>增加动画与过渡效果，让效果的变换更具流线性、平滑性。</li>
<li>……</li>
</ul>
</li>
</ul>
<h2 id="_1-2-css3私有前缀" tabindex="-1"><a class="header-anchor" href="#_1-2-css3私有前缀"><span>1.2 CSS3私有前缀</span></a></h2>
<h3 id="_1-2-1-什么是私有前缀" tabindex="-1"><a class="header-anchor" href="#_1-2-1-什么是私有前缀"><span>1.2.1 什么是私有前缀</span></a></h3>
<p>如下代码中的 -webkit- 就是私有前缀</p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	width:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">400</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	height:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">400</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">	-webkit-border-radius</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">20</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-2-为什么要有私有前缀" tabindex="-1"><a class="header-anchor" href="#_1-2-2-为什么要有私有前缀"><span>1.2.2 为什么要有私有前缀</span></a></h3>
<ul>
<li>W3C 标准所提出的某个 CSS 特性，在被浏览器正式支持之前，浏览器厂商会根据浏览器的内核，使用私有前缀来测试该 CSS 特性，在浏览器正式支持该 CSS 特性后，就不需要私有前缀了。</li>
<li>举个例子：<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">-webkit-border-radius: 20px;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">-moz-border-radius: 20px;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">-ms-border-radius: 20px;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">-o-border-radius: 20px;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">border-radius</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">: 20px;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<p>查询 CSS3 兼容性的网站：https://caniuse.com/</p>
</blockquote>
<h3 id="_1-2-3-常见浏览器私有前缀" tabindex="-1"><a class="header-anchor" href="#_1-2-3-常见浏览器私有前缀"><span>1.2.3 常见浏览器私有前缀</span></a></h3>
<ul>
<li>Chrome 浏览器： <code v-pre>-webkit-</code></li>
<li>Safari 浏览器： <code v-pre>-webkit-</code></li>
<li>Firefox 浏览器： <code v-pre>-moz-</code></li>
<li>Edge 浏览器： <code v-pre>-webkit-</code></li>
<li>旧 Opera 浏览器： <code v-pre>-o-</code></li>
<li>旧 IE 浏览器： <code v-pre>-ms-</code></li>
</ul>
<blockquote>
<p>注意：
我们在编码时，不用过于关注浏览器私有前缀，不用绞尽脑汁的去记忆，也不用每个都去查询，因为常用的 CSS3 新特性，主流浏览器都是支持的，即便是为了老浏览器而加前缀，我们也可以借助现代的构建工具，去帮我们添加私有前缀。</p>
</blockquote>
<h1 id="_2-css3-基本语法" tabindex="-1"><a class="header-anchor" href="#_2-css3-基本语法"><span>2 CSS3 基本语法</span></a></h1>
<h2 id="_2-1-css3-新增长度单位" tabindex="-1"><a class="header-anchor" href="#_2-1-css3-新增长度单位"><span>2.1 CSS3 新增长度单位</span></a></h2>
<ol>
<li><code v-pre>rem</code> 根元素字体大小的倍数，只与根元素字体大小有关。</li>
<li><code v-pre>vw</code> 视口宽度的百分之多少 10vw 就是视口宽度的 10% 。</li>
<li><code v-pre>vh</code> 视口高度的百分之多少 10vh 就是视口高度的 10% 。</li>
<li><code v-pre>vmax</code> 视口宽高中大的那个的百分之多少。（了解即可）</li>
<li><code v-pre>vmin</code> 视口宽高中小的那个的百分之多少。（了解即可）</li>
</ol>
<h2 id="_2-2-css3-新增颜色设置方式" tabindex="-1"><a class="header-anchor" href="#_2-2-css3-新增颜色设置方式"><span>2.2 CSS3 新增颜色设置方式</span></a></h2>
<ul>
<li>CSS3 新增了三种颜色设置方式，分别是： rgba 、 hsl 、 hsla ，由于之前已经详细讲解，此处略过。</li>
</ul>
<h2 id="_2-3-css3-新增选择器" tabindex="-1"><a class="header-anchor" href="#_2-3-css3-新增选择器"><span>2.3 CSS3 新增选择器</span></a></h2>
<ul>
<li>CSS3 新增的选择器有：动态伪类、目标伪类、语言伪类、 UI 伪类、结构伪类、否定伪类、伪元素；这些在 CSS2 中已经详细讲解，此处略过。</li>
</ul>
<h2 id="_2-4-css3-新增盒模型相关属性" tabindex="-1"><a class="header-anchor" href="#_2-4-css3-新增盒模型相关属性"><span>2.4 CSS3 新增盒模型相关属性</span></a></h2>
<ul>
<li>使用 box-sizing 属性可以设置盒模型的两种类型
![[Pasted image 20240628012036.png]]</li>
</ul>
<h3 id="_2-4-1-box-shadow-盒子阴影" tabindex="-1"><a class="header-anchor" href="#_2-4-1-box-shadow-盒子阴影"><span>2.4.1 box-shadow 盒子阴影</span></a></h3>
<ul>
<li>
<p>使用 box-shadow 属性为盒子添加阴影。</p>
</li>
<li>
<p>语法：
<code v-pre>box-shadow: h-shadow v-shadow blur spread color inset;</code></p>
</li>
<li>
<p>各个值的含义：</p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h-shadow</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> 水平阴影的位置，必须填写，可以为负值</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">v-shadow</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> 垂直阴影的位置，必须填写，可以为负值</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">- blur 可选，模糊距离</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">- spread 可选，阴影的外延值</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">- color 可选，阴影的颜色</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">- inset 可选，将外部阴影改为内部阴影</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>默认值： box-shadow:none 表示没有阴影</p>
</li>
<li>
<p>示例：</p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 写两个值，含义：水平位置、垂直位置 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">box-shadow</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">: 10px 10px;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 写三个值，含义：水平位置、垂直位置、颜色 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">box-shadow</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">: 10px 10px red;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 写三个值，含义：水平位置、垂直位置、模糊值 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">box-shadow</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">: 10px 10px 10px;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 写四个值，含义：水平位置、垂直位置、模糊值、颜色 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">box-shadow</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">: 10px 10px 10px red;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 写五个值，含义：水平位置、垂直位置、模糊值、外延值、颜色 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">box-shadow</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">: 10px 10px 10px 10px blue;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 写六个值，含义：水平位置、垂直位置、模糊值、外延值、颜色、内阴影 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">box-shadow</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">: 10px 10px 20px 3px blue inset;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-4-2-opacity-不透明度" tabindex="-1"><a class="header-anchor" href="#_2-4-2-opacity-不透明度"><span>2.4.2 opacity 不透明度</span></a></h3>
<ul>
<li><code v-pre>opacity</code> 属性能为整个元素添加透明效果， 值是 <code v-pre>0</code> 到 <code v-pre>1</code> 之间的小数， <code v-pre>0</code> 是完全透明， <code v-pre>1</code> 表示完全不透明。</li>
</ul>
<blockquote>
<p><code v-pre>opacity</code> 与 <code v-pre>rgba</code> 的区别？</p>
<p><code v-pre>opacity</code> 是一个属性，设置的是整个元素（包括元素里的内容）的不透明度。
<code v-pre>rgba</code> 是颜色的设置方式，用于设置颜色，它的透明度，仅仅是调整颜色的透明度。</p>
</blockquote>
<h2 id="_2-5-css3-新增背景属性" tabindex="-1"><a class="header-anchor" href="#_2-5-css3-新增背景属性"><span>2.5 CSS3 新增背景属性</span></a></h2>
<h3 id="_2-5-1-background-origin" tabindex="-1"><a class="header-anchor" href="#_2-5-1-background-origin"><span>2.5.1 background-origin</span></a></h3>
<ul>
<li>作用：设置背景图的原点。</li>
<li>语法
<ol>
<li><code v-pre>padding-box</code> ：从 <code v-pre>padding</code> 区域开始显示背景图像。—— 默认值</li>
<li><code v-pre>border-box</code> ： 从 <code v-pre>border</code> 区域开始显示背景图像。</li>
<li><code v-pre>content-box</code> ： 从 <code v-pre>content</code> 区域开始显示背景图像。</li>
</ol>
</li>
</ul>
<h3 id="_2-5-2-background-clip" tabindex="-1"><a class="header-anchor" href="#_2-5-2-background-clip"><span>2.5.2 background-clip</span></a></h3>
<ul>
<li>作用：设置背景图的向外裁剪的区域。</li>
<li>语法
<ol>
<li><code v-pre>border-box</code> ： 从 <code v-pre>border</code> 区域开始向外裁剪背景。 —— 默认值</li>
<li><code v-pre>padding-box</code> ： 从 <code v-pre>padding</code> 区域开始向外裁剪背景。</li>
<li><code v-pre>content-box</code> ： 从 <code v-pre>content</code> 区域开始向外裁剪背景。</li>
<li><code v-pre>text</code> ：背景图只呈现在文字上。</li>
</ol>
</li>
</ul>
<blockquote>
<p>注意：若值为 <code v-pre>text</code> ，那么 <code v-pre>backgroun-clip</code> 要加上 <code v-pre>-webkit-</code> 前缀。</p>
</blockquote>
<h3 id="_2-5-3-background-size" tabindex="-1"><a class="header-anchor" href="#_2-5-3-background-size"><span>2.5.3 background-size</span></a></h3>
<ul>
<li>作用：设置背景图的尺寸。</li>
<li>语法：
<ol>
<li>用长度值指定背景图片大小，不允许负值。
<code v-pre>background-size: 300px 200px;</code></li>
<li>用百分比指定背景图片大小，不允许负值。
<code v-pre>background-size: 100% 100%;</code></li>
<li><code v-pre>auto</code> ： 背景图片的真实大小。 —— 默认值</li>
<li><code v-pre>contain</code> ： 将背景图片等比缩放，使背景图片的宽或高，与容器的宽或高相等，再将完整背景图片包含在容器内，但要注意：可能会造成容器里部分区域没有背景图片。
<code v-pre>background-size: contain;</code></li>
<li><code v-pre>cover</code> ：将背景图片等比缩放，直到完全覆盖容器，图片会尽可能全的显示在元素上，但要注意：背景图片有可能显示不完整。—— 相对比较好的选择
<code v-pre>background-size: cover;</code></li>
</ol>
</li>
</ul>
<h3 id="_2-5-4-backgorund-复合属性" tabindex="-1"><a class="header-anchor" href="#_2-5-4-backgorund-复合属性"><span>2.5.4 backgorund 复合属性</span></a></h3>
<ul>
<li>语法：
<code v-pre>background: color url repeat position / size origin clip</code></li>
</ul>
<blockquote>
<p>注意：</p>
<ol>
<li><code v-pre>origin</code> 和 <code v-pre>clip</code> 的值如果一样，如果只写一个值，则 <code v-pre>origin</code> 和 clip 都设置；如果设置了两个值，前面的是 <code v-pre>origin</code> ，后面的 <code v-pre>clip</code> 。</li>
<li>size 的值必须写在 <code v-pre>position</code> 值的后面，并且用 / 分开。</li>
</ol>
</blockquote>
<h3 id="_2-5-5-多背景图" tabindex="-1"><a class="header-anchor" href="#_2-5-5-多背景图"><span>2.5.5 多背景图</span></a></h3>
<p>CSS3 允许元素设置多个背景图片</p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 添加多个背景图 */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">background: url(.</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">./images</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">bg-lt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.png</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">no-repeat</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">url(.</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">./images</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">bg-rt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.png</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">no-repeat</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> right top</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">url(.</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">./images</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">bg-lb</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.png</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">no-repeat</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> left bottom</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">url(.</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">./images</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">bg-rb</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.png</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">no-repeat</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> right bottom;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-6-css3新增边框属性" tabindex="-1"><a class="header-anchor" href="#_2-6-css3新增边框属性"><span>2.6 CSS3新增边框属性</span></a></h2>
<h3 id="_2-6-1-边框圆角" tabindex="-1"><a class="header-anchor" href="#_2-6-1-边框圆角"><span>2.6.1 边框圆角</span></a></h3>
<ul>
<li>
<p>在 CSS3 中，使用 border-radius 属性可以将盒子变为圆角。</p>
</li>
<li>
<p>同时设置四个角的圆角：
<code v-pre>border-radius:10px;</code></p>
</li>
<li>
<p>分开设置每个角的圆角（几乎不用）：
![[Pasted image 20240628015409.png]]</p>
</li>
<li>
<p>分开设置每个角的圆角，综合写法（几乎不用）
<code v-pre>border-raidus: 左上角x 右上角x 右下角x 左下角x / 左上y 右上y 右下y 左下y</code></p>
</li>
</ul>
<h3 id="_2-6-2-边框外轮廓-了解" tabindex="-1"><a class="header-anchor" href="#_2-6-2-边框外轮廓-了解"><span>2.6.2 边框外轮廓（了解）</span></a></h3>
<ul>
<li>outline-width ：外轮廓的宽度。</li>
<li>outline-color ：外轮廓的颜色。</li>
<li>outline-style ：外轮廓的风格。
<ul>
<li>none ： 无轮廓</li>
<li>dotted ： 点状轮廓</li>
<li>dashed ： 虚线轮廓</li>
<li>solid ： 实线轮廓</li>
<li>double ： 双线轮廓</li>
</ul>
</li>
<li>outline-offset 设置外轮廓与边框的距离，正负值都可以设置。</li>
</ul>
<blockquote>
<p>注意： outline-offset 不是 outline 的子属性，是一个独立的属性。</p>
</blockquote>
<ul>
<li>outline 复合属性
<code v-pre>outline:50px solid blue;</code></li>
</ul>
<h2 id="_2-7-css3新增文本属性" tabindex="-1"><a class="header-anchor" href="#_2-7-css3新增文本属性"><span>2.7 CSS3新增文本属性</span></a></h2>
<h3 id="_2-7-1-文本阴影" tabindex="-1"><a class="header-anchor" href="#_2-7-1-文本阴影"><span>2.7.1 文本阴影</span></a></h3>
<ul>
<li>在 CSS3 中，我们可以使用 <code v-pre>text-shadow</code> 属性给文本添加阴影。</li>
<li>语法：
<code v-pre>text-shadow: h-shadow v-shadow blur color;</code>
![[Pasted image 20240628024104.png]]
默认值： <code v-pre>text-shadow:none</code> 表示没有阴影。</li>
</ul>
<h3 id="_2-7-2-文本换行" tabindex="-1"><a class="header-anchor" href="#_2-7-2-文本换行"><span>2.7.2 文本换行</span></a></h3>
<ul>
<li>在 CSS3 中，我们可以使用 <code v-pre>white-space</code> 属性设置文本换行方式。</li>
<li>常用值如下：
![[Pasted image 20240628024159.png]]</li>
</ul>
<h3 id="_2-7-3-文本溢出" tabindex="-1"><a class="header-anchor" href="#_2-7-3-文本溢出"><span>2.7.3 文本溢出</span></a></h3>
<ul>
<li>在 CSS3 中，我们可以使用 <code v-pre>text-overflow</code> 属性设置文本内容溢出时的呈现模式。</li>
<li>常用值如下：
![[Pasted image 20240628024257.png]]</li>
</ul>
<blockquote>
<p>注意：
要使得 <code v-pre>text-overflow</code> 属性生效，块容器必须显式定义 <code v-pre>overflow</code> 为非 <code v-pre>visible值</code>， <code v-pre>white-space</code> 为 <code v-pre>nowrap</code> 值。</p>
</blockquote>
<h3 id="_2-7-4-文本修饰" tabindex="-1"><a class="header-anchor" href="#_2-7-4-文本修饰"><span>2.7.4 文本修饰</span></a></h3>
<ul>
<li>CSS3 升级了 <code v-pre>text-decoration</code> 属性，让其变成了复合属性。
<code v-pre>text-decoration: text-decoration-line || text-decoration-style || text-decoration-color</code></li>
<li>子属性及其含义：
<ul>
<li><code v-pre>text-decoration-line</code> 设置文本装饰线的位置
<ul>
<li><code v-pre>none</code> ： 指定文字无装饰 （默认值）</li>
<li><code v-pre>underline</code> ： 指定文字的装饰是下划线</li>
<li><code v-pre>overline</code> ： 指定文字的装饰是上划线</li>
<li><code v-pre>line-through</code> ： 指定文字的装饰是贯穿线</li>
</ul>
</li>
<li><code v-pre>text-decoration-style</code> 文本装饰线条的形状
<ul>
<li><code v-pre>solid</code> ： 实线 （默认）</li>
<li><code v-pre>double</code> ： 双线</li>
<li><code v-pre>dotted</code> ： 点状线条</li>
<li><code v-pre>dashed</code> ： 虚线</li>
<li><code v-pre>wavy</code> ： 波浪线</li>
</ul>
</li>
<li><code v-pre>text-decoration-color</code> 文本装饰线条的颜色</li>
</ul>
</li>
</ul>
<h3 id="_2-7-5-文本描边" tabindex="-1"><a class="header-anchor" href="#_2-7-5-文本描边"><span>2.7.5 文本描边</span></a></h3>
<blockquote>
<p>注意：文字描边功能仅 webkit 内核浏览器支持。</p>
</blockquote>
<ul>
<li>-<code v-pre>webkit-text-stroke-width</code> ：设置文字描边的宽度，写长度值。</li>
<li><code v-pre>-webkit-text-stroke-color</code> ：设置文字描边的颜色，写颜色值。</li>
<li>-<code v-pre>webkit-text-stroke</code> ：复合属性，设置文字描边宽度和颜色。</li>
</ul>
<h2 id="_2-8-css3-新增渐变" tabindex="-1"><a class="header-anchor" href="#_2-8-css3-新增渐变"><span>2.8 CSS3 新增渐变</span></a></h2>
<h3 id="_2-8-1-线性渐变" tabindex="-1"><a class="header-anchor" href="#_2-8-1-线性渐变"><span>2.8.1 线性渐变</span></a></h3>
<ul>
<li>多个颜色之间的渐变， 默认从上到下渐变。</li>
</ul>
<blockquote>
<p><code v-pre>background-image: linear-gradient(red,yellow,green);</code></p>
</blockquote>
<p>![[Pasted image 20240628024959.png|182]]</p>
<ul>
<li>使用关键词设置线性渐变的方向。<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">background-image</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">: linear-gradient(to top</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">red</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">yellow</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">background-image</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">: linear-gradient(to right top</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">red</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">yellow</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>![[Pasted image 20240628025307.png|184]]</p>
<ul>
<li>使用角度设置线性渐变的方向。<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">background-image</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">: linear-gradient(30deg</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">red</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">yellow</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<p>![[Pasted image 20240628025422.png|190]]</p>
<ul>
<li>调整开始渐变的位置。<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">background-image</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">: linear-gradient(red 50px</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">yellow 100px </span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">green 150px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<p>![[Pasted image 20240628025552.png|182]]</p>
<h3 id="_2-8-2-径向渐变" tabindex="-1"><a class="header-anchor" href="#_2-8-2-径向渐变"><span>2.8.2 径向渐变</span></a></h3>
<ul>
<li>多个颜色之间的渐变， 默认从圆心四散。（注意：不一定是正圆，要看容器本身宽高比）</li>
</ul>
<blockquote>
<ul>
<li><code v-pre>background-image: radial-gradient(red,yellow,green);</code>
![[Pasted image 20240628025722.png|181]]</li>
</ul>
</blockquote>
<ul>
<li>使用关键词调整渐变圆的圆心位置。</li>
</ul>
<blockquote>
<ul>
<li><code v-pre>background-image: radial-gradient(at right top,red,yellow,green);</code>
![[Pasted image 20240628025729.png]]</li>
</ul>
</blockquote>
<ul>
<li>使用像素值调整渐变圆的圆心位置。</li>
</ul>
<blockquote>
<ul>
<li><code v-pre>background-image: radial-gradient(at 100px 50px,red,yellow,green);</code>
![[Pasted image 20240628025740.png]]</li>
</ul>
</blockquote>
<ul>
<li>调整渐变形状为正圆 。</li>
</ul>
<blockquote>
<ul>
<li><code v-pre>background-image: radial-gradient(circle,red,yellow,green);</code>
![[Pasted image 20240628025747.png]]</li>
</ul>
</blockquote>
<ul>
<li>调整形状的半径 。</li>
</ul>
<blockquote>
<ul>
<li><code v-pre>background-image: radial-gradient(100px,red,yellow,green);</code></li>
<li><code v-pre>background-image: radial-gradient(50px 100px,red,yellow,green);</code>
![[Pasted image 20240628025754.png]]</li>
</ul>
</blockquote>
<ul>
<li>调整开始渐变的位置。</li>
</ul>
<blockquote>
<ul>
<li><code v-pre>background-image: radial-gradient(red 50px,yellow 100px,green 150px);</code>
![[Pasted image 20240628025803.png]]</li>
</ul>
</blockquote>
<h3 id="_2-8-3-重复渐变" tabindex="-1"><a class="header-anchor" href="#_2-8-3-重复渐变"><span>2.8.3 重复渐变</span></a></h3>
<ul>
<li>无论线性渐变，还是径向渐变，在没有发生渐变的位置，继续进行渐变，就为重复渐变。
<ul>
<li>使用 <code v-pre>repeating-linear-gradient</code> 进行重复线性渐变，具体参数同 <code v-pre>linear-gradient</code> 。</li>
<li>使用 <code v-pre>repeating-radial-gradient</code> 进行重复径向渐变，具体参数同 <code v-pre>radial-gradient</code> 。</li>
</ul>
</li>
</ul>
<blockquote>
<p>我们可以利用渐变，做出很多有意思的效果：例如：横格纸、立体球等等。</p>
</blockquote>
<h2 id="_2-9-web-字体" tabindex="-1"><a class="header-anchor" href="#_2-9-web-字体"><span>2.9 web 字体</span></a></h2>
<h3 id="_2-9-1-基本用法" tabindex="-1"><a class="header-anchor" href="#_2-9-1-基本用法"><span>2.9.1 基本用法</span></a></h3>
<ul>
<li>可以通过 <code v-pre>@font-face</code> 指定字体的具体地址，浏览器会自动下载该字体，这样就不依赖用户电脑上的字体了。</li>
<li>语法（简写方式）<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">@font-face</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	font-family: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"情书字体"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	src: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'./方正手迹.ttf'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>语法（高兼容性写法）<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">@font-face</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	font-family: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"atguigu"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	font-display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">swap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	src: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'webfont.eot'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* IE9 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	src: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'webfont.eot?#iefix'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">format</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'embedded-opentype'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">), </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* IE6-IE8 */</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">		url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'webfont.woff2'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">format</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'woff2'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">),</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">		url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'webfont.woff'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">format</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'woff'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">), </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* chrome、firefox */</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">		url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'webf	ont.ttf'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">format</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'truetype'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">), </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* chrome、firefox、opera、Safari,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">Android*/</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">		url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'webfont.svg#webfont'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">format</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'svg'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* iOS 4.1- */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-9-2-定制字体" tabindex="-1"><a class="header-anchor" href="#_2-9-2-定制字体"><span>2.9.2 定制字体</span></a></h3>
<ul>
<li>中文的字体文件很大，使用完整的字体文件不现实，通常针对某几个文字进行单独定制。</li>
<li>可使用阿里 Web 字体定制工具：https://www.iconfont.cn/webfont</li>
</ul>
<h3 id="_2-9-3-字体图标" tabindex="-1"><a class="header-anchor" href="#_2-9-3-字体图标"><span>2.9.3 字体图标</span></a></h3>
<ul>
<li>相比图片更加清晰。</li>
<li>灵活性高，更方便改变大小、颜色、风格等。</li>
<li>兼容性好， IE 也能支持。</li>
</ul>
<blockquote>
<p>字体图标的具体使用方式，每个平台不尽相同，最好参考平台使用指南，视频中我们是以使用最多的阿里图标库作为演示。
阿里图标官网地址：https://www.iconfont.cn/</p>
</blockquote>
<h2 id="_2-10-2d变换" tabindex="-1"><a class="header-anchor" href="#_2-10-2d变换"><span>2.10 2D变换</span></a></h2>
<p>前提：二维坐标系如下图所示
![[Pasted image 20240628030840.png|253]]</p>
<h3 id="_2-10-1-2d位移" tabindex="-1"><a class="header-anchor" href="#_2-10-1-2d位移"><span>2.10.1 2D位移</span></a></h3>
<p><code v-pre>2D</code> 位移可以改变元素的位置，具体使用方式如下：</p>
<ol>
<li>
<p>先给元素添加 转换属性 <code v-pre>transform</code></p>
</li>
<li>
<p>编写 <code v-pre>transform</code> 的具体值，相关可选值如下
![[Pasted image 20240628030949.png]]</p>
</li>
<li>
<p>注意点：</p>
<ol>
<li>位移与相对定位很相似，都不脱离文档流，不会影响到其它元素。</li>
<li>与相对定位的区别：相对定位的百分比值，参考的是其父元素；定位的百分比值，参考的是其自身。</li>
<li>浏览器针对位移有优化，与定位相比，浏览器处理位移的效率更高。</li>
<li>transform 可以链式编写，例如：<code v-pre>transform: translateX(30px) translateY(40px);</code></li>
<li>位移对行内元素无效。</li>
<li>位移配合定位，可实现元素水平垂直居中</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	position: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">absolute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">50</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	top: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">50</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	transform: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">translate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">-50</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">-50</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_2-10-2-2d缩放" tabindex="-1"><a class="header-anchor" href="#_2-10-2-2d缩放"><span>2.10.2 2D缩放</span></a></h3>
<p><code v-pre>2D</code> 缩放是指：让元素放大或缩小，具体使用方式如下：</p>
<ol>
<li>
<p>先给元素添加 转换属性 <code v-pre>transform</code></p>
</li>
<li>
<p>编写 <code v-pre>transform</code> 的具体值，相关可选值如下：
![[Pasted image 20240628031817.png]]</p>
</li>
<li>
<p>注意点：</p>
</li>
</ol>
<blockquote>
<ol>
<li><code v-pre>scale</code> 的值，是支持写负数的，但几乎不用，因为容易让人产生误解。</li>
<li>借助缩放，可实现小于 <code v-pre>12px</code> 的文字。</li>
</ol>
</blockquote>
<h3 id="_2-10-3-2d旋转" tabindex="-1"><a class="header-anchor" href="#_2-10-3-2d旋转"><span>2.10.3 2D旋转</span></a></h3>
<p><code v-pre>2D</code> 旋转是指：让元素在二维平面内，顺时针旋转或逆时针旋转，具体使用方式如下：</p>
<ol>
<li>先给元素添加 转换属性 <code v-pre>transform</code></li>
<li>编写 <code v-pre>transform</code> 的具体值，相关可选值如下：
![[Pasted image 20240628031948.png]]</li>
<li>注意：</li>
</ol>
<blockquote>
<p><code v-pre>rotateZ(20deg)</code> 相当于 <code v-pre>rotate(20deg)</code> ，当然到了 <code v-pre>3D</code> 变换的时候，还能写：<code v-pre>rotate(x,x,x)</code></p>
</blockquote>
<h3 id="_2-10-4-2d扭曲-了解" tabindex="-1"><a class="header-anchor" href="#_2-10-4-2d扭曲-了解"><span>2.10.4 2D扭曲（了解）</span></a></h3>
<p><code v-pre>2D</code> 扭曲是指：让元素在二维平面内被“拉扯”，进而“走形”，实际开发几乎不用，了解即可，具体使用方式如下：</p>
<ol>
<li>先给元素添加 转换属性 <code v-pre>transform</code></li>
<li>编写 <code v-pre>transform</code> 的具体值，相关可选值如下：
![[Pasted image 20240628032144.png]]</li>
</ol>
<h3 id="_2-10-5-多重变换" tabindex="-1"><a class="header-anchor" href="#_2-10-5-多重变换"><span>2.10.5 多重变换</span></a></h3>
<ul>
<li>多个变换，可以同时使用一个 <code v-pre>transform</code> 来编写。
<code v-pre>transform: translate(-50%, -50%) rotate(45deg);</code></li>
</ul>
<blockquote>
<p>注意点：多重变换时，建议最后旋转。</p>
</blockquote>
<h3 id="_2-10-6-变换原点" tabindex="-1"><a class="header-anchor" href="#_2-10-6-变换原点"><span>2.10.6 变换原点</span></a></h3>
<ul>
<li>元素变换时，默认的原点是元素的中心，使用 <code v-pre>transform-origin</code> 可以设置变换的原点。</li>
<li>修改变换原点对位移没有影响， 对旋转和缩放会产生影响。</li>
<li>如果提供两个值，第一个用于横坐标，第二个用于纵坐标。</li>
<li>如果只提供一个，若是像素值，表示横坐标，纵坐标取 <code v-pre>50%</code> ；若是关键词，则另一个坐标取 <code v-pre>50%</code></li>
</ul>
<blockquote>
<ol>
<li><code v-pre>transform-origin: 50% 50%</code> ， 变换原点在元素的中心位置，百分比是相对于自身。—— 默认值</li>
<li><code v-pre>transform-origin: left top</code> ，变换原点在元素的左上角 。</li>
<li><code v-pre>transform-origin: 50px 50px</code> ， 变换原点距离元素左上角 <code v-pre>50px 50px</code> 的位置。</li>
<li><code v-pre>transform-origin: 0</code> ，只写一个值的时候，第二个值默认为 <code v-pre>50%</code> 。</li>
</ol>
</blockquote>
<h2 id="_2-11-3d变换" tabindex="-1"><a class="header-anchor" href="#_2-11-3d变换"><span>2.11 3D变换</span></a></h2>
<h3 id="_2-11-1-开启3d空间" tabindex="-1"><a class="header-anchor" href="#_2-11-1-开启3d空间"><span>2.11.1 开启3D空间</span></a></h3>
<ul>
<li>重要原则：元素进行 <code v-pre>3D</code> 变换的首要操作：父元素必须开启 <code v-pre>3D</code> 空间！</li>
</ul>
<blockquote>
<p>使用 <code v-pre>transform-style</code> 开启 <code v-pre>3D</code> 空间，可选值如下：</p>
<ul>
<li><code v-pre>flat</code> ： 让子元素位于此元素的二维平面内（ <code v-pre>2D</code> 空间）—— 默认值<code v-pre>preserve-3d</code> ： 让子元素位于此元素的三维空间内（ <code v-pre>3D</code> 空间）</li>
<li><code v-pre>transform: translate(-50%, -50%) rotate(45deg)</code>;</li>
</ul>
</blockquote>
<h3 id="_2-11-2-设置景深" tabindex="-1"><a class="header-anchor" href="#_2-11-2-设置景深"><span>2.11.2 设置景深</span></a></h3>
<ul>
<li>何为景深？— 指定观察者与 <code v-pre>z=0</code> 平面的距离，能让发生 <code v-pre>3D</code> 变换的元素，产生透视效果，看来更加立体。</li>
</ul>
<blockquote>
<p>使用 <code v-pre>perspective</code> 设置景深，可选值如下：</p>
<ul>
<li><code v-pre>none</code> ： 不指定透视 ——（默认值）</li>
<li><code v-pre>长度值</code> ``： 指定观察者距离 <code v-pre>z=0</code> 平面的距离，不允许负值。</li>
</ul>
<p>注意： <code v-pre>perspective</code> 设置给发生 <code v-pre>3D</code> 变换元素的父元素！</p>
</blockquote>
<h3 id="_2-11-3-透视点位置" tabindex="-1"><a class="header-anchor" href="#_2-11-3-透视点位置"><span>2.11.3 透视点位置</span></a></h3>
<ul>
<li>所谓透视点位置，就是观察者位置；默认的透视点在元素的中心。</li>
</ul>
<blockquote>
<p>使用 <code v-pre>perspective-origin</code> 设置观察者位置（透视点的位置），例如：</p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 相对坐标轴往右偏移`400px`， 往下偏移`300px`（相当于人蹲下`300`像素，然后向右移动`400`像素看元素）</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">*/</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">perspective-origin</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">: 400px 300px;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：通常情况下，我们不需要调整透视点位置。</p>
</blockquote>
<h3 id="_2-11-4-3d-位移" tabindex="-1"><a class="header-anchor" href="#_2-11-4-3d-位移"><span>2.11.4 3D 位移</span></a></h3>
<p><code v-pre>3D</code> 位移是在 <code v-pre>2D</code> 位移的基础上，可以让元素沿 <code v-pre>z</code> 轴位移，具体使用方式如下：</p>
<ol>
<li>先给元素添加 转换属性 <code v-pre>transform</code></li>
<li>编写 <code v-pre>transform</code> 的具体值， <code v-pre>3D</code> 相关可选值如下：
![[Pasted image 20240628033441.png]]</li>
</ol>
<h3 id="_2-11-5-3d-旋转" tabindex="-1"><a class="header-anchor" href="#_2-11-5-3d-旋转"><span>2.11.5 3D 旋转</span></a></h3>
<p><code v-pre>3D</code> 旋转是在 <code v-pre>2D</code> 旋转的基础上，可以让元素沿 <code v-pre>x</code> 轴和 <code v-pre>y</code> 轴旋转，具体使用方式如下：</p>
<ol>
<li>先给元素添加 转换属性 <code v-pre>transform</code></li>
<li>编写 <code v-pre>transform</code> 的具体值， <code v-pre>3D</code> 相关可选值如下：
![[Pasted image 20240628033457.png]]</li>
</ol>
<h3 id="_2-11-6-3d-缩放" tabindex="-1"><a class="header-anchor" href="#_2-11-6-3d-缩放"><span>2.11.6 3D 缩放</span></a></h3>
<p><code v-pre>3D</code> 缩放是在 <code v-pre>2D</code> 缩放的基础上，可以让元素沿 <code v-pre>z</code> 轴缩放，具体使用方式如下：</p>
<ol>
<li>先给元素添加 转换属性 <code v-pre>transform</code></li>
<li>编写 <code v-pre>transform</code> 的具体值， <code v-pre>3D</code> 相关可选值如下：
![[Pasted image 20240628033518.png]]</li>
</ol>
<h3 id="_2-11-7-多重变换" tabindex="-1"><a class="header-anchor" href="#_2-11-7-多重变换"><span>2.11.7 多重变换</span></a></h3>
<ul>
<li>多个变换，可以同时使用一个 <code v-pre>transform</code> 来编写。</li>
</ul>
<blockquote>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">transform: translateZ(100px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">scaleZ(3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">rotateY(40deg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注意点：多重变换时，建议最后旋转。</p>
</blockquote>
<h3 id="_2-11-8-背部可见性" tabindex="-1"><a class="header-anchor" href="#_2-11-8-背部可见性"><span>2.11.8 背部可见性</span></a></h3>
<ul>
<li>使用 <code v-pre>backface-visibility</code> 指定元素背面，在面向用户时是否可见，常用值如下：</li>
</ul>
<blockquote>
<ul>
<li><code v-pre>visible</code> ： 指定元素背面可见，允许显示正面的镜像。—— 默认值</li>
<li><code v-pre>hidden</code> ： 指定元素背面不可见</li>
</ul>
<p><strong>注意</strong>： <code v-pre>backface-visibility</code> 需要加在发生 <code v-pre>3D</code> 变换元素的自身上。</p>
</blockquote>
<h2 id="_2-12-过渡" tabindex="-1"><a class="header-anchor" href="#_2-12-过渡"><span>2.12 过渡</span></a></h2>
<ul>
<li>过渡可以在不使用 <code v-pre>Flash</code> 动画，不使用 <code v-pre>JavaScript</code> 的情况下，让元素从一种样式，平滑过渡为另一种样式。</li>
</ul>
<h3 id="_2-12-1-transition-property" tabindex="-1"><a class="header-anchor" href="#_2-12-1-transition-property"><span>2.12.1 transition-property</span></a></h3>
<ul>
<li>作用：定义哪个属性需要过渡，只有在该属性中定义的属性（比如宽、高、颜色等）才会以有过渡效果。</li>
<li>常用值：
<ol>
<li><code v-pre>none</code> ：不过渡任何属性。</li>
<li><code v-pre>all</code> ：过渡所有能过渡的属性。</li>
<li>具体某个属性名 ，例如： <code v-pre>width</code> 、 <code v-pre>heigth</code> ，若有多个以逗号分隔。</li>
</ol>
</li>
</ul>
<blockquote>
<p>不是所有的属性都能过渡，值为数字，或者值能转为数字的属性，都支持过渡，否则不支持过渡。
常见的支持过渡的属性有：颜色、长度值、百分比、 <code v-pre>z-index</code> 、 <code v-pre>opacity</code> 、 <code v-pre>2D</code> 变换属性、 <code v-pre>3D</code> 变换属性、阴影。</p>
</blockquote>
<h3 id="_2-12-2-transition-duration" tabindex="-1"><a class="header-anchor" href="#_2-12-2-transition-duration"><span>2.12.2 transition-duration</span></a></h3>
<ul>
<li>作用：设置过渡的持续时间，即：一个状态过渡到另外一个状态耗时多久。</li>
<li>常用值：
<ol>
<li><code v-pre>0</code> ：没有任何过渡时间 —— 默认值。</li>
<li><code v-pre>s</code> 或 <code v-pre>ms</code> ：秒或毫秒。</li>
<li>列表 ：
<ul>
<li>如果想让所有属性都持续一个时间，那就写一个值。</li>
<li>如果想让每个属性持续不同的时间那就写一个时间的列表。</li>
</ul>
</li>
</ol>
</li>
</ul>
<h3 id="_2-12-3-transition-delay" tabindex="-1"><a class="header-anchor" href="#_2-12-3-transition-delay"><span>2.12.3 transition-delay</span></a></h3>
<ul>
<li>作用：指定开始过渡的延迟时间，单位： <code v-pre>s</code> 或 <code v-pre>ms</code></li>
</ul>
<h3 id="_2-12-4-transition-timing-function" tabindex="-1"><a class="header-anchor" href="#_2-12-4-transition-timing-function"><span>2.12.4 transition-timing-function</span></a></h3>
<ul>
<li>作用：设置过渡的类型</li>
<li>常用值：
<ol>
<li><code v-pre>ease</code> ： 平滑过渡 —— 默认值</li>
<li><code v-pre>linear</code> ： 线性过渡</li>
<li><code v-pre>ease-in</code> ： 慢 → 快</li>
<li><code v-pre>ease-out</code> ： 快 → 慢</li>
<li><code v-pre>ease-in-out</code> ： 慢 → 快 → 慢</li>
<li><code v-pre>step-start</code> ： 等同于 <code v-pre>steps(1, start)</code></li>
<li><code v-pre>step-end</code> ： 等同于 <code v-pre>steps(1, end)</code></li>
<li><code v-pre>steps( integer,?)</code> ： 接受两个参数的步进函数。第一个参数必须为正整数，指定函数的步数。第二个参数取值可以是 <code v-pre>start</code> 或 <code v-pre>end</code> ，指定每一步的值发生变化的时间点。第二个参数默认值为 <code v-pre>end</code> 。</li>
<li><code v-pre>cubic-bezie ( number, number, number, number)</code>： 特定的贝塞尔曲线类型。</li>
</ol>
</li>
</ul>
<blockquote>
<p>在线制作贝赛尔曲线：https://cubic-bezier.com</p>
</blockquote>
<h3 id="_2-12-5-transition-复合属性" tabindex="-1"><a class="header-anchor" href="#_2-12-5-transition-复合属性"><span>2.12.5 transition 复合属性</span></a></h3>
<ul>
<li>如果设置了一个时间，表示 <code v-pre>duration</code> ；如果设置了两个时间，第一是 <code v-pre>duration</code> ，第二个是 <code v-pre>delay</code> ；其他值没有顺序要求<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">transition:1s 1s linear all;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_2-13-动画" tabindex="-1"><a class="header-anchor" href="#_2-13-动画"><span>2.13 动画</span></a></h2>
<h3 id="_2-13-1-什么是帧" tabindex="-1"><a class="header-anchor" href="#_2-13-1-什么是帧"><span>2.13.1 什么是帧</span></a></h3>
<ul>
<li>一段动画，就是一段时间内连续播放 n 个画面。每一张画面，我们管它叫做“帧”。一定时间内连续快速播放若干个帧，就成了人眼中所看到的动画。同样时间内，播放的帧数越多，画面看起来越流畅。</li>
</ul>
<h3 id="_2-13-2-什么是关键帧" tabindex="-1"><a class="header-anchor" href="#_2-13-2-什么是关键帧"><span>2.13.2 什么是关键帧</span></a></h3>
<ul>
<li>关键帧指的是，在构成一段动画的若干帧中，起到决定性作用的 2-3 帧。
![[Pasted image 20240628034851.png|335]]</li>
</ul>
<h3 id="_2-13-3-动画的基本使用" tabindex="-1"><a class="header-anchor" href="#_2-13-3-动画的基本使用"><span>2.13.3 动画的基本使用</span></a></h3>
<p><strong>第一步：定义关键帧（定义动画）</strong></p>
<ol>
<li>简单方式定义</li>
</ol>
<blockquote>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/*写法一*/</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">@keyframes</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> 动画名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	from {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		property1:value1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		property2:value2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	to {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		property1:value1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<ol start="2">
<li>完整方式定义：</li>
</ol>
<blockquote>
<div class="language-css line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="css" data-title="css" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">@keyframes</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> 动画名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	0% {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	/*property1:value1*/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	20% {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	/*property1:value1*/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	40% {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	/*property1:value1*/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	60% {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	/*property1:value1*/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	80% {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	/*property1:value1*/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	100% {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	/*property1:value1*/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></blockquote>
<p><strong>第二步：给元素应用动画，用到的属性如下：</strong></p>
<ol>
<li><code v-pre>animation-name</code> ：给元素指定具体的动画（具体的关键帧）</li>
<li><code v-pre>animation-duration</code> ：设置动画所需时间</li>
<li><code v-pre>animation-delay</code> ：设置动画延迟</li>
</ol>
<blockquote>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	/* 指定动画 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	animation-name: testKey;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	/* 设置动画所需时间 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	animation-duration: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	/* 设置动画延迟 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	animation-delay: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0.5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h3 id="_2-13-4-动画的其他属性" tabindex="-1"><a class="header-anchor" href="#_2-13-4-动画的其他属性"><span>2.13.4 动画的其他属性</span></a></h3>
<ul>
<li><code v-pre>animation-timing-function</code> ，设置动画的类型，常用值如下：</li>
</ul>
<blockquote>
<ol>
<li><code v-pre>ease</code> ： 平滑动画 —— 默认值</li>
<li><code v-pre>linear</code> ： 线性过渡</li>
<li><code v-pre>ease-in</code> ： 慢 → 快</li>
<li><code v-pre>ease-out</code> ： 快 → 慢</li>
<li><code v-pre>ease-in-out</code> ： 慢 → 快 → 慢</li>
<li><code v-pre>step-start</code> ： 等同于 <code v-pre>steps(1, start)</code></li>
<li><code v-pre>step-end</code> ： 等同于 <code v-pre>steps(1, end)</code></li>
<li><code v-pre>steps( integer,?)</code> ： 接受两个参数的步进函数。第一个参数必须为正整数，指定函数的步数。第二个参数取值可以是 start 或 end ，指定每一步的值发生变化的时间点。第二个参数默认值为 end 。</li>
<li><code v-pre>cubic-bezie ( number, number, number, number)</code>： 特定的贝塞尔曲线类型。</li>
</ol>
</blockquote>
<ul>
<li><code v-pre>animation-iteration-count</code> ，指定动画的播放次数，常用值如下</li>
</ul>
<blockquote>
<ol>
<li><code v-pre>number</code> ：动画循环次数</li>
<li><code v-pre>infinite</code> ： 无限循环</li>
</ol>
</blockquote>
<ul>
<li><code v-pre>animation-direction</code> ，指定动画方向，常用值如下：</li>
</ul>
<blockquote>
<ol>
<li><code v-pre>normal</code> ： 正常方向 (默认)</li>
<li><code v-pre>reverse</code> ： 反方向运行</li>
<li><code v-pre>alternate</code> ： 动画先正常运行再反方向运行，并持续交替运行</li>
<li><code v-pre>alternate-reverse</code> ： 动画先反运行再正方向运行，并持续交替运行</li>
</ol>
</blockquote>
<ul>
<li><code v-pre>animation-fill-mode</code> ，设置动画之外的状态</li>
</ul>
<blockquote>
<ol>
<li><code v-pre>forwards</code> ： 设置对象状态为动画结束时的状态</li>
<li><code v-pre>backwards</code> ： 设置对象状态为动画开始时的状态</li>
</ol>
</blockquote>
<ul>
<li><code v-pre>animation-play-state</code> ，设置动画的播放状态，常用值如下：</li>
</ul>
<blockquote>
<ol>
<li><code v-pre>running</code> ： 运动 (默认)</li>
<li><code v-pre>paused</code> ： 暂停</li>
</ol>
</blockquote>
<h3 id="_2-13-5-动画复合属性" tabindex="-1"><a class="header-anchor" href="#_2-13-5-动画复合属性"><span>2.13.5 动画复合属性</span></a></h3>
<ul>
<li>只设置一个时间表示 <code v-pre>duration</code> ，设置两个时间分别是： <code v-pre>duration</code> 和 <code v-pre>delay</code> ，其他属性没有数量和顺序要求。</li>
</ul>
<blockquote>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.inner</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	animation: atguigu </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">s</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0.5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">s</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> linear</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> alternate-reverse</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> forwards</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注： <code v-pre>animation-play-state</code> 一般单独使用。</p>
</blockquote>
<h2 id="_2-14-多列布局" tabindex="-1"><a class="header-anchor" href="#_2-14-多列布局"><span>2.14 多列布局</span></a></h2>
<ul>
<li>
<p>作用：专门用于实现类似于报纸的布局
![[Pasted image 20240628035833.png|400]]</p>
</li>
<li>
<p>常用属性如下：</p>
</li>
</ul>
<blockquote>
<ul>
<li><code v-pre>column-count</code> ：指定列数，值是数字。</li>
<li><code v-pre>column-width</code> ：指定列宽，值是长度。</li>
<li><code v-pre>columns</code> ：同时指定列宽和列数，复合属性；值没有数量和顺序要求。</li>
<li><code v-pre>column-gap</code> ：设置列边距，值是长度。</li>
<li><code v-pre>column-rule-style</code> ：设置列与列之间边框的风格，值与 <code v-pre>border-style</code> 一致。</li>
<li><code v-pre>column-rule-width</code> ：设置列与列之间边框的宽度，值是长度。</li>
<li><code v-pre>column-rule-color</code> ：设置列与列之间边框的颜色。</li>
<li><code v-pre>coumn-rule</code> ：设置列边框，复合属性。</li>
<li><code v-pre>column-span</code> 指定是否跨列；值: <code v-pre>none</code> 、 <code v-pre>all</code> 。</li>
</ul>
</blockquote>
<h2 id="_2-15-15-伸缩盒模型" tabindex="-1"><a class="header-anchor" href="#_2-15-15-伸缩盒模型"><span>2.15 15.伸缩盒模型</span></a></h2>
<h3 id="_2-15-1-伸缩盒模型简介" tabindex="-1"><a class="header-anchor" href="#_2-15-1-伸缩盒模型简介"><span>2.15.1 伸缩盒模型简介</span></a></h3>
<ul>
<li>2009 年， W3C 提出了一种新的盒子模型 —— <code v-pre>Flexible Box</code> （伸缩盒模型，又称：弹性盒子）。</li>
<li>它可以轻松的控制：元素分布方式、元素对齐方式、元素视觉顺序 .......</li>
<li>截止目前，除了在部分 IE 浏览器不支持，其他浏览器均已全部支持。</li>
<li>伸缩盒模型的出现，逐渐演变出了一套新的布局方案 —— <code v-pre>flex</code> 布局。</li>
</ul>
<blockquote>
<p>[!小贴士：]</p>
<ol>
<li>传统布局是指：基于传统盒状模型，主要靠： <code v-pre>display</code> 属性 + <code v-pre>position</code> 属性 + <code v-pre>float</code>属性。</li>
<li><code v-pre>flex</code> 布局目前在移动端应用比较广泛，因为传统布局不能很好的呈现在移动设备上</li>
</ol>
</blockquote>
<h3 id="_2-15-2-伸缩容器、伸缩项目" tabindex="-1"><a class="header-anchor" href="#_2-15-2-伸缩容器、伸缩项目"><span>2.15.2 伸缩容器、伸缩项目</span></a></h3>
<ul>
<li><strong>伸缩容器</strong>： 开启了 <code v-pre>flex</code> 的元素，就是：伸缩容器。</li>
</ul>
<blockquote>
<ol>
<li>给元素设置： <code v-pre>display:flex</code> 或 <code v-pre>display:inline-flex</code> ，该元素就变为了伸缩容器。</li>
<li><code v-pre>display:inline-flex</code> 很少使用，因为可以给多个伸缩容器的父容器，也设置为伸缩容器。</li>
<li>一个元素可以同时是：伸缩容器、伸缩项目。</li>
</ol>
</blockquote>
<ul>
<li><strong>伸缩项目</strong>：伸缩容器所有子元素自动成为了：伸缩项目。</li>
</ul>
<blockquote>
<ol>
<li>仅伸缩容器的子元素成为了伸缩项目，孙子元素、重孙子元素等后代，不是伸缩项目。</li>
<li>无论原来是哪种元素（块、行内块、行内），一旦成为了伸缩项目，全都会“块状化”。</li>
</ol>
</blockquote>
<h3 id="_2-15-3-主轴与侧轴" tabindex="-1"><a class="header-anchor" href="#_2-15-3-主轴与侧轴"><span>2.15.3 主轴与侧轴</span></a></h3>
<ul>
<li><strong>主轴</strong>： 伸缩项目沿着主轴排列，主轴默认是水平的，默认方向是：从左到右（左边是起点，右边是终点）。</li>
<li><strong>侧轴</strong>： 与主轴垂直的就是侧轴，侧轴默认是垂直的，默认方向是：从上到下（上边是起点，下边是终点）。</li>
</ul>
<h3 id="_2-15-4-主轴方向" tabindex="-1"><a class="header-anchor" href="#_2-15-4-主轴方向"><span>2.15.4 主轴方向</span></a></h3>
<ul>
<li>属性名： <code v-pre>flex-direction</code>
![[Pasted image 20240628040611.png]]</li>
<li>常用值如下：</li>
</ul>
<blockquote>
<ol>
<li><code v-pre>row</code> ：主轴方向水平从左到右 —— 默认值</li>
<li><code v-pre>row-reverse</code> ：主轴方向水平从右到左。</li>
<li><code v-pre>column</code> ：主轴方向垂直从上到下。</li>
<li><code v-pre>column-reverse</code> ：主轴方向垂直从下到上。</li>
</ol>
<p><strong>注意</strong>：改变了主轴的方向，侧轴方向也随之改变</p>
</blockquote>
<h3 id="_2-15-5-主轴换行方式" tabindex="-1"><a class="header-anchor" href="#_2-15-5-主轴换行方式"><span>2.15.5 主轴换行方式</span></a></h3>
<ul>
<li>属性名： <code v-pre>flex-wrap</code></li>
<li>常用值如下：</li>
</ul>
<blockquote>
<ol>
<li><code v-pre>nowrap</code> ：默认值，不换行。</li>
<li><code v-pre>wrap</code> ：自动换行，伸缩容器不够自动换行。</li>
<li><code v-pre>wrap-reverse</code> ：反向换行。</li>
</ol>
</blockquote>
<h3 id="_2-15-6-flex-flow" tabindex="-1"><a class="header-anchor" href="#_2-15-6-flex-flow"><span>2.15.6 flex-flow</span></a></h3>
<ul>
<li><code v-pre>flex-flow</code> 是一个复合属性，复合了 <code v-pre>flex-direction</code> 和 <code v-pre>flex-wrap</code> 两个属性。 值没有顺序要求。
<code v-pre>flex-flow: row wrap;</code></li>
</ul>
<h3 id="_2-15-7-主轴对齐方式" tabindex="-1"><a class="header-anchor" href="#_2-15-7-主轴对齐方式"><span>2.15.7 主轴对齐方式</span></a></h3>
<ul>
<li>属性名： <code v-pre>justify-content</code></li>
<li>常用值如下：</li>
</ul>
<blockquote>
<ol>
<li><code v-pre>flex-start</code> ：主轴起点对齐。—— 默认值</li>
<li><code v-pre>flex-end</code> ：主轴终点对齐。</li>
<li><code v-pre>center</code> ：居中对齐</li>
<li><code v-pre>space-between</code> ：均匀分布，两端对齐（最常用）。</li>
<li><code v-pre>space-around</code> ：均匀分布，两端距离是中间距离的一半。</li>
<li><code v-pre>space-evenly</code> ：均匀分布，两端距离与中间距离一致
![[Pasted image 20240628041116.png|275]]</li>
</ol>
</blockquote>
<h3 id="_2-15-8-侧轴对齐方式" tabindex="-1"><a class="header-anchor" href="#_2-15-8-侧轴对齐方式"><span>2.15.8 侧轴对齐方式</span></a></h3>
<h4 id="_2-15-8-1-一行的情况" tabindex="-1"><a class="header-anchor" href="#_2-15-8-1-一行的情况"><span>2.15.8.1 一行的情况</span></a></h4>
<ul>
<li>所需属性： <code v-pre>align-items</code></li>
<li>常用值如下：</li>
</ul>
<blockquote>
<ol>
<li><code v-pre>flex-start</code> ：侧轴的起点对齐。</li>
<li><code v-pre>flex-end</code> ：侧轴的终点对齐。</li>
<li><code v-pre>center</code> ：侧轴的中点对齐。</li>
<li><code v-pre>baseline</code> : 伸缩项目的第一行文字的基线对齐。</li>
<li><code v-pre>stretch</code> ：如果伸缩项目未设置高度，将占满整个容器的高度。—— （默认值）
![[Pasted image 20240628041319.png|250]]</li>
</ol>
</blockquote>
<h4 id="_2-15-8-2-多行的情况" tabindex="-1"><a class="header-anchor" href="#_2-15-8-2-多行的情况"><span>2.15.8.2 多行的情况</span></a></h4>
<ul>
<li>所需属性： <code v-pre>align-content</code></li>
<li>常用值如下：</li>
</ul>
<blockquote>
<ol>
<li><code v-pre>flex-start</code> ：与侧轴的起点对齐。</li>
<li><code v-pre>flex-end</code> ：与侧轴的终点对齐。</li>
<li><code v-pre>center</code> ：与侧轴的中点对齐。</li>
<li><code v-pre>space-between</code> ：与侧轴两端对齐，中间平均分布。</li>
<li><code v-pre>space-around</code> ：伸缩项目间的距离相等，比距边缘大一倍。</li>
<li><code v-pre>space-evenly</code> : 在侧轴上完全平分。</li>
<li><code v-pre>stretch</code> ：占满整个侧轴。—— 默认值
![[Pasted image 20240628041546.png|161]]![[Pasted image 20240628041603.png|161]]</li>
</ol>
</blockquote>
<h3 id="_2-15-9-flex-实现水平垂直居中" tabindex="-1"><a class="header-anchor" href="#_2-15-9-flex-实现水平垂直居中"><span>2.15.9 flex 实现水平垂直居中</span></a></h3>
<ul>
<li>方法一：父容器开启 flex 布局，随后使用 <code v-pre>justify-content</code> 和 <code v-pre>align-items</code> 实现水平垂直居中</li>
</ul>
<blockquote>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.outer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">400</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">400</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">888</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">flex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	justify-content: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	align-items: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.inner</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">orange</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<ul>
<li>方法二：父容器开启 <code v-pre>flex</code> 布局，随后子元素 <code v-pre>margin: auto</code></li>
</ul>
<blockquote>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.outer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">400</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">400</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">888</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">flex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.inner</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">orange</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	margin: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">auto</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h3 id="_2-15-10-伸缩性" tabindex="-1"><a class="header-anchor" href="#_2-15-10-伸缩性"><span>2.15.10 伸缩性</span></a></h3>
<h4 id="_2-15-10-1-flex-basis" tabindex="-1"><a class="header-anchor" href="#_2-15-10-1-flex-basis"><span>2.15.10.1 flex-basis</span></a></h4>
<ul>
<li>概念： <code v-pre>flex-basis</code> 设置的是主轴方向的基准长度，会让宽度或高度失效。</li>
</ul>
<blockquote>
<ul>
<li>备注：主轴横向：宽度失效；主轴纵向：高度失效</li>
</ul>
</blockquote>
<ul>
<li>作用：浏览器根据这个属性设置的值，计算主轴上是否有多余空间，默认值 <code v-pre>auto</code> ，即：伸缩项目的宽或高。</li>
</ul>
<h4 id="_2-15-10-2-flex-grow-伸" tabindex="-1"><a class="header-anchor" href="#_2-15-10-2-flex-grow-伸"><span>2.15.10.2 flex-grow（伸）</span></a></h4>
<ul>
<li>概念： flex-grow 定义伸缩项目的放大比例，默认为 0 ，即：纵使主轴存在剩余空间，也不拉伸（放大）。</li>
<li>规则：</li>
</ul>
<blockquote>
<ol>
<li>若所有伸缩项目的 <code v-pre>flex-grow</code> 值都为 <code v-pre>1</code> ，则：它们将等分剩余空间（如果有空间的话）。</li>
<li>若三个伸缩项目的 flex-grow 值分别为： <code v-pre>1</code> 、 <code v-pre>2</code> 、 <code v-pre>3</code> ，则：分别瓜分到： <code v-pre>1/6</code> 、 <code v-pre>2/6</code> 、3/6 的空间。</li>
</ol>
</blockquote>
<h4 id="_2-15-10-3-flex-shrink-缩" tabindex="-1"><a class="header-anchor" href="#_2-15-10-3-flex-shrink-缩"><span>2.15.10.3 flex-shrink（缩）</span></a></h4>
<ul>
<li>概念： <code v-pre>flex-shrink</code> 定义了项目的压缩比例，默认为 1 ，即：如果空间不足，该项目将会缩小。</li>
<li>收缩项目的计算，略微复杂一点，我们拿一个场景举例：</li>
</ul>
<blockquote>
<ul>
<li>例如：</li>
<li>三个收缩项目，宽度分别为： <code v-pre>200px</code> 、 <code v-pre>300px</code> 、 <code v-pre>200px</code> ，它们的 <code v-pre>flex-shrink</code> 值分别为： <code v-pre>1</code> 、 <code v-pre>2</code> 、 <code v-pre>3</code></li>
<li>若想刚好容纳下三个项目，需要总宽度为 <code v-pre>700px</code> ，但目前容器只有 <code v-pre>400px</code> ，还差 <code v-pre>300px</code></li>
<li>所以每个人都要收缩一下才可以放下，具体收缩的值，这样计算：
<ol>
<li>计算分母： <code v-pre>(200×1) + (300×2) + (200×3) = 1400</code></li>
<li>计算比例：
项目一： <code v-pre>(200×1) / 1400 = 比例值1</code>
项目二： <code v-pre>(300×2) / 1400 = 比例值2</code>
项目三： <code v-pre>(200×3) / 1400 = 比例值3</code></li>
<li>计算最终收缩大小：
项目一需要收缩： <code v-pre>比例值3</code> × <code v-pre>300</code>
项目二需要收缩： <code v-pre>比例值3</code> × <code v-pre>300</code>
项目三需要收缩： <code v-pre>比例值3</code> × <code v-pre>300</code></li>
</ol>
</li>
</ul>
</blockquote>
<h3 id="_2-15-11-flex复合属性" tabindex="-1"><a class="header-anchor" href="#_2-15-11-flex复合属性"><span>2.15.11 flex复合属性</span></a></h3>
<p>flex 是复合属性，复合了： <code v-pre>flex-grow</code> 、 <code v-pre>flex-shrink</code> 、 <code v-pre>flex-basis</code> 三个属性，默认值为 <code v-pre>0</code> <code v-pre>1</code> <code v-pre>auto</code> 。</p>
<ul>
<li>如果写 <code v-pre>flex:1 1 auto</code> ，则可简写为： <code v-pre>flex:auto</code></li>
<li>如果写 <code v-pre>flex:1 1 0</code> ，则可简写为： <code v-pre>flex:1</code></li>
<li>如果写 <code v-pre>flex:0 0 auto</code> ，则可简写为： <code v-pre>flex:none</code></li>
<li>如果写 <code v-pre>flex:0 1 auto</code> ，则可简写为： <code v-pre>flex:0 auto</code> —— 即 <code v-pre>flex</code> 初始值。</li>
</ul>
<h3 id="_2-15-12-项目排序" tabindex="-1"><a class="header-anchor" href="#_2-15-12-项目排序"><span>2.15.12 项目排序</span></a></h3>
<ul>
<li><code v-pre>order</code> 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 <code v-pre>0</code> 。</li>
</ul>
<h3 id="_2-15-13-单独对齐" tabindex="-1"><a class="header-anchor" href="#_2-15-13-单独对齐"><span>2.15.13 单独对齐</span></a></h3>
<ul>
<li>通过 <code v-pre>align-self</code> 属性，可以单独调整某个伸缩项目的对齐方式</li>
<li>默认值为 <code v-pre>auto</code> ，表示继承父元素的 <code v-pre>align-items</code> 属性。</li>
</ul>
<h1 id="_3-响应式布局" tabindex="-1"><a class="header-anchor" href="#_3-响应式布局"><span>3 响应式布局</span></a></h1>
<h2 id="_3-1-媒体查询" tabindex="-1"><a class="header-anchor" href="#_3-1-媒体查询"><span>3.1 媒体查询</span></a></h2>
<h3 id="_3-1-1-媒体类型" tabindex="-1"><a class="header-anchor" href="#_3-1-1-媒体类型"><span>3.1.1 媒体类型</span></a></h3>
<p>![[Pasted image 20240628042941.png|625]]</p>
<h3 id="_3-1-2-媒体特性" tabindex="-1"><a class="header-anchor" href="#_3-1-2-媒体特性"><span>3.1.2 媒体特性</span></a></h3>
<p>![[Pasted image 20240628043001.png|600]]</p>
<blockquote>
<p>完整列表请参考：https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media</p>
</blockquote>
<h3 id="_3-1-3-运算符" tabindex="-1"><a class="header-anchor" href="#_3-1-3-运算符"><span>3.1.3 运算符</span></a></h3>
<p>![[Pasted image 20240628043108.png]]</p>
<h3 id="_3-1-4-常用阈值" tabindex="-1"><a class="header-anchor" href="#_3-1-4-常用阈值"><span>3.1.4 常用阈值</span></a></h3>
<ul>
<li>在实际开发中，会将屏幕划分成几个区间，例如：
![[Pasted image 20240628043130.png|575]]</li>
</ul>
<h3 id="_3-1-5-结合外部样式的用法" tabindex="-1"><a class="header-anchor" href="#_3-1-5-结合外部样式的用法"><span>3.1.5 结合外部样式的用法</span></a></h3>
<p><strong>用法一：</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"stylesheet"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> media</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"具体的媒体查询"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"mystylesheet.css"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>用法二：</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">@media</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF"> screen</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (max-width:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">768</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/*CSS-Code;*/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">@media</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF"> screen</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (min-width:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">768</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (max-width:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/*CSS-Code;*/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-bfc" tabindex="-1"><a class="header-anchor" href="#_4-bfc"><span>4 BFC</span></a></h1>
<h2 id="_4-1-什么是bfc" tabindex="-1"><a class="header-anchor" href="#_4-1-什么是bfc"><span>4.1 什么是BFC</span></a></h2>
<ul>
<li>W3C 上对 BFC 的定义：</li>
</ul>
<blockquote>
<p>原文：Floats, absolutely positioned elements, block containers (such as inline-blocks, table￾cells, and table-captions) that are not block boxes, and block boxes with 'overflow' other than
'visible' (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.</p>
<p>译文：浮动、绝对定位元素、不是块盒子的块容器（如 <code v-pre>inline-blocks</code> 、 <code v-pre>table-cells</code> 和 <code v-pre>table-captions</code> ），以及 <code v-pre>overflow</code> 属性的值除 <code v-pre>visible</code> 以外的块盒，将为其内容建立新的块格式化上下文。</p>
</blockquote>
<ul>
<li><code v-pre>MDN</code> 上对 <code v-pre>BFC</code> 的描述：</li>
</ul>
<blockquote>
<p><strong>块格式化上下文（Block Formatting Context，BFC）</strong> 是 <code v-pre>Web</code> 页面的可视 <code v-pre>CSS</code> 渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。</p>
</blockquote>
<ul>
<li>更加通俗的描述：</li>
</ul>
<blockquote>
<ol>
<li><code v-pre>BFC</code> 是 <code v-pre>Block Formatting Context</code> （块级格式上下文），可以理解成元素的一个“<strong>特异功能</strong>”。</li>
<li>该 “特异功能”，在默认的情况下处于关闭状态；当元素满足了某些条件后，该“<strong>特异功能</strong>”被激活。</li>
<li>所谓激活“特异功能”，专业点说就是：该元素创建了 <strong>BFC</strong> （又称：开启了 <strong>BFC</strong> ）。</li>
</ol>
</blockquote>
<h2 id="_4-2-开启了bfc能解决什么问题" tabindex="-1"><a class="header-anchor" href="#_4-2-开启了bfc能解决什么问题"><span>4.2 开启了BFC能解决什么问题</span></a></h2>
<ol>
<li>元素开启 <code v-pre>BFC</code> 后，其子元素不会再产生 <code v-pre>margin</code> 塌陷问题。</li>
<li>元素开启 <code v-pre>BFC</code> 后，自己不会被其他浮动元素所覆盖。</li>
<li>元素开启 <code v-pre>BFC</code> 后，就算其子元素浮动，元素自身高度也不会塌陷。</li>
</ol>
<h2 id="_4-3-如何开启bfc" tabindex="-1"><a class="header-anchor" href="#_4-3-如何开启bfc"><span>4.3 如何开启BFC</span></a></h2>
<ul>
<li>根元素</li>
<li>浮动元素</li>
<li>绝对定位、固定定位的元素</li>
<li>行内块元素</li>
<li>表格单元格： <code v-pre>table 、 thead 、 tbody 、 tfoot 、 th 、 td 、 tr 、 caption</code></li>
<li><code v-pre>overflow</code> 的值不为 <code v-pre>visible</code> 的块元素</li>
<li>伸缩项目</li>
<li>多列容器</li>
<li><code v-pre>column-span</code> 为 all 的元素（即使该元素没有包裹在多列容器中）</li>
<li><code v-pre>display</code> 的值，设置为 <code v-pre>flow-root</code></li>
</ul>
</div></template>


