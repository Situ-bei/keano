<template><div><h1 id="_1-移动端布局的基本概述" tabindex="-1"><a class="header-anchor" href="#_1-移动端布局的基本概述"><span>1 移动端布局的基本概述</span></a></h1>
<h2 id="_1-1-屏幕分辨率" tabindex="-1"><a class="header-anchor" href="#_1-1-屏幕分辨率"><span>1.1 屏幕分辨率</span></a></h2>
<ul>
<li>分类：
<ul>
<li>物理分辨率：硬件分辨率（出厂设置）</li>
<li>逻辑分辨率：软件 / 驱动设置</li>
</ul>
</li>
<li>结论：</li>
</ul>
<blockquote>
<p>制作网页参考 <strong>逻辑分辨率</strong>
![[1681811157520.png|400]]</p>
</blockquote>
<h1 id="_2-vw适配方案" tabindex="-1"><a class="header-anchor" href="#_2-vw适配方案"><span>2 vw适配方案</span></a></h1>
<h2 id="_2-1-vw和vh基本使用" tabindex="-1"><a class="header-anchor" href="#_2-1-vw和vh基本使用"><span>2.1 vw和vh基本使用</span></a></h2>
<ul>
<li><code v-pre>vw</code>和<code v-pre>vh</code>是相对单位，相对视口尺寸计算结果</li>
<li><code v-pre>vw</code>：<code v-pre>viewport width</code>（1vw = 1/100视口宽度 ）</li>
<li><code v-pre>vh</code>：<code v-pre>viewport height</code> ( 1vh = 1/100视口高度 )</li>
</ul>
<h2 id="_2-2-vw布局" tabindex="-1"><a class="header-anchor" href="#_2-2-vw布局"><span>2.2 vw布局</span></a></h2>
<ul>
<li><code v-pre>vw</code>单位的尺寸 = <code v-pre>px</code> 单位数值 / ( 1/100 视口宽度 )</li>
</ul>
<h2 id="_2-3-vh问题" tabindex="-1"><a class="header-anchor" href="#_2-3-vh问题"><span>2.3 vh问题</span></a></h2>
<ul>
<li><code v-pre>vh</code>是1/100视口高度，全面屏视口高度尺寸大，如果混用可能会导致盒子变形</li>
</ul>
</div></template>


