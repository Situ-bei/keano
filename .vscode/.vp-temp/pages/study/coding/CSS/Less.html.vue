<template><div><h1 id="_1-注释" tabindex="-1"><a class="header-anchor" href="#_1-注释"><span>1 注释</span></a></h1>
<h2 id="_1-1-单行注释" tabindex="-1"><a class="header-anchor" href="#_1-1-单行注释"><span>1.1 单行注释</span></a></h2>
<ul>
<li>语法：<code v-pre>//</code> 注释内容</li>
<li>快捷键：<code v-pre>ctrl + /</code></li>
</ul>
<h2 id="_1-2-块注释" tabindex="-1"><a class="header-anchor" href="#_1-2-块注释"><span>1.2 块注释</span></a></h2>
<p>语法：<code v-pre>/*</code> 注释内容 <code v-pre>*/</code>
快捷键： <code v-pre>Shift + Alt + A</code></p>
<h1 id="_2-运算" tabindex="-1"><a class="header-anchor" href="#_2-运算"><span>2 运算</span></a></h1>
<ul>
<li>加、减、乘直接书写计算表达式</li>
<li>除法需要添加 <code v-pre>（）</code> 或 <code v-pre>.</code></li>
<li>表达式存在多个单位以第一个单位为准</li>
</ul>
<h1 id="_3-嵌套" tabindex="-1"><a class="header-anchor" href="#_3-嵌套"><span>3 嵌套</span></a></h1>
<ul>
<li>
<p>作用：快速生成后代选择器
![[Pasted image 20240702021844.png|550]]</p>
</li>
<li>
<p>提示：用 <code v-pre>&amp;</code> 表示当前选择器，不会生成后代选择器，通常配合伪类或伪元素使用
![[Pasted image 20240702021948.png|550]]</p>
</li>
</ul>
<h1 id="_4-变量" tabindex="-1"><a class="header-anchor" href="#_4-变量"><span>4 变量</span></a></h1>
<ul>
<li>概念：容器，存储数据
<ul>
<li>作用：存储数据，方便使用和修改</li>
</ul>
</li>
<li>语法：
<ul>
<li>定义变量：@变量名: 数据;</li>
<li>使用变量：CSS属性：@变量名;</li>
</ul>
<div class="language-less line-numbers-mode" data-highlighter="shiki" data-ext="less" data-title="less" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 定义变量</span></span>
<span class="line"><span>@myColor: pink;</span></span>
<span class="line"><span>// 使用变量</span></span>
<span class="line"><span>.box {</span></span>
<span class="line"><span>color: @myColor;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>a {</span></span>
<span class="line"><span>color: @myColor;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h1 id="_5-导入" tabindex="-1"><a class="header-anchor" href="#_5-导入"><span>5 导入</span></a></h1>
<ul>
<li>作用：导入 <code v-pre>less</code> 公共样式文件</li>
<li>语法：导入: <code v-pre>@import “文件路径”;</code></li>
<li>提示：如果是 <code v-pre>less</code> 文件可以省略后缀<div class="language-less line-numbers-mode" data-highlighter="shiki" data-ext="less" data-title="less" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@import './base.less';</span></span>
<span class="line"><span>@import './common';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h1 id="_6-导出" tabindex="-1"><a class="header-anchor" href="#_6-导出"><span>6 导出</span></a></h1>
<ul>
<li>写法：在 <code v-pre>less</code> 文件的第一行添加 <code v-pre>// out: 存储URL</code></li>
<li>提示：文件夹名称后面添加 <code v-pre>/</code><div class="language-less line-numbers-mode" data-highlighter="shiki" data-ext="less" data-title="less" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// out: ./index.css</span></span>
<span class="line"><span>// out: ./css/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_6-1-禁止导出" tabindex="-1"><a class="header-anchor" href="#_6-1-禁止导出"><span>6.1 禁止导出</span></a></h2>
<ul>
<li>写法：在 <code v-pre>less</code> 文件第一行添加:  <code v-pre>// out: false</code></li>
</ul>
</div></template>


