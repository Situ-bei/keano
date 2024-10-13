<template><div><h1 id="初识vue2-盛夏的回眸" tabindex="-1"><a class="header-anchor" href="#初识vue2-盛夏的回眸"><span>初识Vue2 --盛夏的回眸</span></a></h1>
<h2 id="_1-vue简介" tabindex="-1"><a class="header-anchor" href="#_1-vue简介"><span>1.  Vue简介</span></a></h2>
<h3 id="_1-1-官网" tabindex="-1"><a class="header-anchor" href="#_1-1-官网"><span>1.1  官网</span></a></h3>
<p><a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">中文官网</a>
<a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">英文官网</a></p>
<h2 id="_1-2-介绍" tabindex="-1"><a class="header-anchor" href="#_1-2-介绍"><span>1.2 介绍</span></a></h2>
<h3 id="_1-2-1-vue-是什么" tabindex="-1"><a class="header-anchor" href="#_1-2-1-vue-是什么"><span>1.2.1 Vue 是什么？</span></a></h3>
<ul>
<li>一套用于构建用户界面的渐进式<code v-pre>JavaScript</code>框架</li>
<li>作者：尤雨溪</li>
</ul>
<h3 id="_1-2-2-vue的特点" tabindex="-1"><a class="header-anchor" href="#_1-2-2-vue的特点"><span>1.2.2 Vue的特点</span></a></h3>
<ul>
<li>
<p>采用<strong>组件化模式</strong>，提高代码复用率、且让代码更好维护</p>
</li>
<li>
<p><strong>声明式编码</strong>，让编码人员无需直接操作DOM，提高开发效率
![[Pasted image 20240716061747.png|600]]</p>
</li>
<li>
<p>使用虚拟<code v-pre>DOM</code>+优秀的<code v-pre>Diff</code>算法，尽量复用<code v-pre>DOM</code>节点</p>
<ul>
<li>简单理解：虚拟<code v-pre>DOM</code>就是内存中的一个数据</li>
</ul>
</li>
</ul>
<p>![[94f89b45481640d989c14c1d73170d55.png|525]]
![[76a0e8aafd15461dae8954ecb245e6c2.png|500]]</p>
<blockquote>
<p>Vue官网的 “资源列表”下拉框——AwesomeVue是Vue官方推荐你用什么库做什么功能</p>
</blockquote>
<h4 id="_1-2-2-1-与其他前端-js-框架的关联" tabindex="-1"><a class="header-anchor" href="#_1-2-2-1-与其他前端-js-框架的关联"><span>1.2.2.1 与其他前端 JS 框架的关联</span></a></h4>
<ul>
<li>借鉴 angular 的 模板 和 数据绑定 技术</li>
<li>借鉴 react 的 组件化 和 虚拟DOM 技术</li>
</ul>
<h4 id="_1-2-2-2-vue-扩展插件" tabindex="-1"><a class="header-anchor" href="#_1-2-2-2-vue-扩展插件"><span>1.2.2.2 Vue 扩展插件</span></a></h4>
<ul>
<li>vue-cli：vue 脚手架</li>
<li>vue-resource(axios)：ajax 请求</li>
<li>vue-router：路由</li>
<li>vuex：状态管理（它是 vue 的插件但是没有用 vue-xxx 的命名规则）</li>
<li>vue-lazyload：图片懒加载</li>
<li>vue-scroller：页面滑动相关</li>
<li>mint-ui：基于 vue 的 UI 组件库（移动端）</li>
<li>element-ui：基于 vue 的 UI 组件库（PC 端）</li>
</ul>
<h2 id="_2-vue2-basicgrammer" tabindex="-1"><a class="header-anchor" href="#_2-vue2-basicgrammer"><span>2  <font color="#00b050">Vue</font>2 BasicGrammer</span></a></h2>
<h3 id="_2-1-引入vue-js" tabindex="-1"><a class="header-anchor" href="#_2-1-引入vue-js"><span>2.1 引入Vue.js</span></a></h3>
<ul>
<li>本地引入</li>
<li>CDN引入<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-2-创建vue对象" tabindex="-1"><a class="header-anchor" href="#_2-2-创建vue对象"><span>2.2 创建Vue对象</span></a></h3>
<ul>
<li>想让<code v-pre>Vue</code>工作，就必须创建一个<code v-pre>Vue</code>实例，且要传入一个配置对象；</li>
<li><code v-pre>root</code>容器里的代码依然符合<code v-pre>html</code>规范，只不过混入了一些特殊的<code v-pre>Vue</code>语法；</li>
<li><code v-pre>root</code>容器里的代码被称为【Vue模板】；</li>
<li><code v-pre>Vue</code>实例和容器是一一对应的；</li>
<li>真实开发中只有一个Vue实例，并且会配合着组件一起使用；</li>
<li>{{xxx}}中的xxx要写<code v-pre>js</code>表达式，且xxx可以自动读取到<code v-pre>data</code>中的所有属性；</li>
<li>一旦<code v-pre>data</code>中的数据发生改变，那么页面中用到该数据的地方也会自动更新；<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//创建Vue实例</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串。</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{ </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//data中用于存储数据，数据供el所指定的容器去使用，值我们暂时先写成一个对象。</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'YK菌'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		address</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'合肥'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<p>意区分：js表达式 和 js代码(语句)</p>
<ul>
<li>
<p>表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：</p>
<ol>
<li><code v-pre>a</code></li>
<li><code v-pre>a+b</code></li>
<li><code v-pre>demo(1)</code></li>
<li><code v-pre>x === y ? 'a' : 'b'</code></li>
</ol>
</li>
<li>
<p>js代码(语句)</p>
<ol>
<li><code v-pre>if(){}</code></li>
<li><code v-pre>for(){}</code></li>
</ol>
</li>
</ul>
</blockquote>
<h4 id="_2-2-1-el" tabindex="-1"><a class="header-anchor" href="#_2-2-1-el"><span>2.2.1 el</span></a></h4>
<ul>
<li>指定根 <code v-pre>element</code>(选择器)</li>
<li>el有2种写法<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//1. new Vue时候配置el属性。</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> v</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//第一种写法</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'YK菌'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//2. 先创建Vue实例，随后再通过`vm.$mount('#root')`指定el的值。</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> v</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'YK菌'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$mount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//第二种写法 */</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="_2-2-2-data" tabindex="-1"><a class="header-anchor" href="#_2-2-2-data"><span>2.2.2 data</span></a></h4>
<ul>
<li>
<p>初始化数据(页面可以访问)</p>
</li>
<li>
<p>data有2种写法</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//(1) 对象式</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">	name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'YK菌'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">} </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//(2) 函数式</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'@@@'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//此处的this是Vue实例对象</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'YK菌'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。</p>
</li>
</ul>
<blockquote>
<ul>
<li><strong>一个重要的原则</strong>
<ul>
<li>由 <code v-pre>Vue</code> 管理的函数，一定不要写箭头函数，一旦写了箭头函数，<code v-pre>this</code> 就不再是 <code v-pre>Vue</code> 实例了。</li>
</ul>
</li>
</ul>
</blockquote>
<h3 id="_2-3-vue的mvvm实现" tabindex="-1"><a class="header-anchor" href="#_2-3-vue的mvvm实现"><span>2.3 Vue的MVVM实现</span></a></h3>
<p>![[2cfaef66bd3b4b67b032b225ffa34483~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp|575]]</p>
<ul>
<li>
<p>M
模型(Model) ：data中的数据</p>
</li>
<li>
<p>V
视图(View) ：模板代码（不是静态页面） （两个语法：指令，大括号表达式）</p>
</li>
<li>
<p>VM</p>
<blockquote>
<p>viewModel: 视图模型（Vue的实例）</p>
<ul>
<li>Dom Listeners （Dom 监听）</li>
<li>Data Bindings （数据绑定）
<ul>
<li>data中所有的属性，最后都出现在了vm身上。</li>
<li>vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。</li>
</ul>
</li>
</ul>
</blockquote>
</li>
<li>
<p>MVVM</p>
<ul>
<li>
<p>MVVM 本质上是 MVC （Model-View- Controller）的改进版。即模型-视图-视图模型。</p>
</li>
<li>
<p>模型model指的是后端传递的数据，视图view指的是所看到的页面。</p>
</li>
<li>
<p>视图模型viewModel是 mvvm 模式的核心，它是连接 view 和 model 的桥梁。它有两个方向：</p>
<ul>
<li>将模型转化成视图，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定 将视图转化成模型，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听</li>
<li>这两个方向都实现的，我们称之为数据的双向绑定</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="_2-4-模板语法" tabindex="-1"><a class="header-anchor" href="#_2-4-模板语法"><span>2.4 模板语法</span></a></h2>
<h3 id="_2-4-1-模板的理解" tabindex="-1"><a class="header-anchor" href="#_2-4-1-模板的理解"><span>2.4.1 模板的理解</span></a></h3>
<ul>
<li>
<p>我们先来理解理解什么是模板？</p>
<ul>
<li>模板就是<code v-pre>动态html页面</code>，这里面包含了一些<code v-pre>js语法代码</code></li>
</ul>
</li>
<li>
<p>Vue的模板语法分为两种，分别是：</p>
<ul>
<li>【插值语法】双大括号表达式 （“Mustache”语法）【一个】</li>
<li>【指令语法】指令（以v-开头的自定义标签属性）【很多】</li>
</ul>
</li>
</ul>
<h3 id="_2-4-2-插值语法" tabindex="-1"><a class="header-anchor" href="#_2-4-2-插值语法"><span>2.4.2 插值语法：</span></a></h3>
<ul>
<li>功能：用于解析标签体内容，向页面输出数据</li>
<li>写法：<code v-pre>{{xxx}}</code>，xxx是js表达式，且可以直接读取到<code v-pre>data</code>中的所有属性，可以调用对象的方法</li>
<li><strong>备注</strong>：里面写js表达式：有返回值的js代码，而不是js语句</li>
</ul>
<h3 id="_2-4-3-指令语法" tabindex="-1"><a class="header-anchor" href="#_2-4-3-指令语法"><span>2.4.3 指令语法：</span></a></h3>
<ul>
<li>
<p>功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）</p>
</li>
<li>
<p>举例：<code v-pre>v-bind:href=&quot;xxx&quot;</code> 或 简写为 <code v-pre>:href=&quot;xxx&quot;</code>，xxx 同样要写 js 表达式，且可以直接读取到 <code v-pre>data</code> 中的所有属性</p>
</li>
<li>
<p><strong>备注</strong>：Vue中有很多的指令，且形式都是：<code v-pre>v-????</code></p>
</li>
</ul>
<h4 id="_2-4-3-1-v-bind-强制数据绑定" tabindex="-1"><a class="header-anchor" href="#_2-4-3-1-v-bind-强制数据绑定"><span>2.4.3.1 <code v-pre>v-bind:</code> 强制数据绑定</span></a></h4>
<ul>
<li>
<p>功能：指定变化的属性值</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//完整写法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">v</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">bind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">xxx</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'yyy'</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // yyy会作为表达式解析执行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//简洁写法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">xxx</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'yyy'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>单向数据绑定</p>
<ul>
<li>语法：<code v-pre>v-bind:href =&quot;xxx&quot;</code> 或简写为 <code v-pre>:href =&quot;xxx&quot;</code></li>
<li>特点：数据只能从 <code v-pre>data</code> 流向页面</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>2. 指令一： 强制数据绑定&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"imgUrl"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Vue"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>         //无法显示图片，没有识别成js表达式 </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-bind:src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"imgUrl"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Vue"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>   //属性值识别成js表达式 </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"imgUrl"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Vue"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '#app'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			msg</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '&#x3C;a href="http:www.baidu.com">I Will Back!&#x3C;/a>'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			imgUrl</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "https://cn.vuejs.org/images/logo.png"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>双向数据绑定 指令 <code v-pre>v-model</code></p>
<ul>
<li>语法：<code v-pre>v-mode:value=&quot;xxx&quot;</code> 或简写为 <code v-pre>v-model=&quot;xxx&quot;</code></li>
<li>特点：数据不仅能从 data 流向页面，还能从页面流向 data</li>
</ul>
</li>
<li>
<p>双向数据绑定 : <code v-pre>v-model</code> &amp; 显示数据 : <code v-pre>{{xxx}}</code> 插值语法</p>
</li>
<li>
<p>实例：</p>
<div class="language-html line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="html" data-title="html" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"test"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!--view--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"msg"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">br</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!--指令--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Hello {{msg}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!--大括号表达式--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"../js/vue.js"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> vm</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({ </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 配置对象 options </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 配置选项(option)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '#test'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// element: 指定用vue来管理页面中的哪个标签区域</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 数据（model）</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      msg</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'World'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<p>![[e68bf479324e4db99d6f568a1de206b3~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp]]</p>
<h4 id="_2-4-3-2-v-on-绑定事件监听" tabindex="-1"><a class="header-anchor" href="#_2-4-3-2-v-on-绑定事件监听"><span>2.4.3.2 <code v-pre>v-on</code> 绑定事件监听</span></a></h4>
<ul>
<li>功能：绑定指定事件名的回调函数<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//完整写法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">v</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">click</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'xxx'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">v</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">keyup</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'xxx(参数)'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">v</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">keyup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">enter</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'xxx'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//简洁写法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">click</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'xxx'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">keyup</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'xxx'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">keyup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">enter</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'xxx'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="_2-4-3-3-内置指令" tabindex="-1"><a class="header-anchor" href="#_2-4-3-3-内置指令"><span>2.4.3.3 内置指令</span></a></h4>
<h5 id="_2-4-3-3-1-v-text与v-html" tabindex="-1"><a class="header-anchor" href="#_2-4-3-3-1-v-text与v-html"><span>2.4.3.3.1 v-text与v-html</span></a></h5>
<ol>
<li><code v-pre>v-text</code>
<ul>
<li>作用：向其所在的节点中渲染文本内容。</li>
<li>与插值语法的区别：<code v-pre>v-text</code>会替换掉节点中的内容，<code v-pre>{{xx}}</code>则不会。
<br></li>
</ul>
</li>
<li><code v-pre>v-html</code>
<ul>
<li>作用：向指定节点中渲染包含<code v-pre>html</code>结构的内容。</li>
<li>与插值语法的区别：
<ul>
<li><code v-pre>v-html</code>会替换掉节点中所有的内容，<code v-pre>{{xx}}</code>则不会。</li>
<li><code v-pre>v-html</code>可以识别<code v-pre>html</code>结构。</li>
</ul>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"msg"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!--innerHTML --></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"msg"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!--textContent --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"msg.toUpperCase()"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<blockquote>
<p>严重注意：v-html有安全性问题！！！！</p>
<ol>
<li>在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。</li>
<li>一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！</li>
</ol>
</blockquote>
<h5 id="_2-4-3-3-2-条件渲染指令-v-if-v-else-v-show" tabindex="-1"><a class="header-anchor" href="#_2-4-3-3-2-条件渲染指令-v-if-v-else-v-show"><span>2.4.3.3.2 条件渲染指令 v-if  v-else  v-show</span></a></h5>
<p><strong>v-if  v-else</strong></p>
<ul>
<li>写法：
<ul>
<li>v-if=&quot;表达式&quot;</li>
<li>v-else-if=&quot;表达式&quot;</li>
<li>v-else=&quot;表达式&quot;</li>
</ul>
</li>
</ul>
<blockquote>
<p>适用于：切换频率较低的场景。 特点：不展示的DOM元素直接被移除。 注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。</p>
</blockquote>
<p><strong>v-show</strong></p>
<ul>
<li>写法：v-show=&quot;表达式&quot; 适用于：切换频率较高的场景。 特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉</li>
</ul>
<blockquote>
<p>【备注】使用v-if的时候，元素可能无法获取到，而使用v-show一定可以获取到。</p>
</blockquote>
<p><strong>比较v-if与v-show</strong></p>
<ul>
<li>
<p>v-if是控制元素是否加载到页面上（有性能开销） v-show是控制元素的显示与隐藏 （初始创建时加载一次）</p>
<ul>
<li>如果需要频繁切换 v-show 较好</li>
<li>当条件不成立时, v-if 的所有子节点不会解析</li>
</ul>
</li>
</ul>
<div class="language-html line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="html" data-title="html" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"demo"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"ok"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>成功了&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 移除标签删除 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>失败了&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-show</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"ok"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>又成功了&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 添加样式隐藏 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-show</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"!ok"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>又失败了&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> @click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"ok = !ok"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>切换&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"../js/vue.js"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '#demo'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			ok</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h5 id="_2-4-3-3-3-一些常用的指令" tabindex="-1"><a class="header-anchor" href="#_2-4-3-3-3-一些常用的指令"><span>2.4.3.3.3 一些常用的指令</span></a></h5>
<ol>
<li><code v-pre>v-text</code> : 更新元素的 <code v-pre>textContent</code></li>
<li><code v-pre>v-html</code> : 更新元素的 <code v-pre>innerHTML</code></li>
<li><code v-pre>v-if</code> : 如果为true, 当前标签才会输出到页面</li>
<li><code v-pre>v-else:</code> 如果为<code v-pre>false,</code> 当前标签才会输出到页面</li>
<li><code v-pre>v-show</code> : 通过控制<code v-pre>display</code>样式来控制显示/隐藏</li>
<li><code v-pre>v-for</code> : 遍历数组/对象</li>
<li><code v-pre>v-on</code> : 绑定事件监听, 一般简写为<code v-pre>@</code></li>
<li><code v-pre>v-bind</code> : 强制绑定解析表达式, 可以省略<code v-pre>v-bind</code></li>
<li><code v-pre>v-model</code> : 双向数据绑定</li>
<li><code v-pre>ref</code> : 为某个元素注册一个唯一标识, vue对象通过$refs属性访问这个元素对象</li>
<li><code v-pre>v-cloak</code> : 使用它防止闪现表达式, 与css配合: <code v-pre>[v-cloak] { display: none }</code></li>
<li><code v-pre>v-once</code>指令：
<ul>
<li>1.<code v-pre>v-once</code>所在节点在初次动态渲染后，就视为静态内容了。</li>
<li>2.以后数据的改变不会引起<code v-pre>v-once</code>所在结构的更新，可以用于优化性能。</li>
</ul>
</li>
<li><code v-pre>v-pre</code>指令：
<ul>
<li>跳过其所在节点的编译过程。</li>
<li>可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。</li>
</ul>
</li>
</ol>
<h4 id="_2-4-3-4-自定义指令" tabindex="-1"><a class="header-anchor" href="#_2-4-3-4-自定义指令"><span>2.4.3.4 自定义指令</span></a></h4>
<p>需求1：定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍。
需求2：定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点。</p>
<blockquote>
<p>备注：</p>
<ol>
<li>指令定义时不加v-，但使用时要加v-；</li>
<li>指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。</li>
</ol>
</blockquote>
<ol>
<li>局部指令：
new Vue({directives:{指令名:配置对象}	}) 														
new Vue({directives{指令名:回调函数}})</li>
<li>全局指令：
Vue.directive(指令名,配置对象) 或   Vue.directive(指令名,回调函数)</li>
</ol>
<h5 id="_2-4-3-4-1-局部指令" tabindex="-1"><a class="header-anchor" href="#_2-4-3-4-1-局部指令"><span>2.4.3.4.1 局部指令</span></a></h5>
<p><strong>自定义指令函数式</strong></p>
<ol>
<li>把要构造的指令写在<code v-pre>directives：{ }</code>, 跟<code v-pre>methods</code>类似</li>
<li>在标签里写<code v-pre>v-big</code>，在<code v-pre>directives</code>中构造是就只用<code v-pre>big(){}</code></li>
<li>只要<code v-pre>data</code>中数据发生改变，模板重新解析时，就会重新调用该函数</li>
<li>相当于对象式的<code v-pre>bind</code>和<code v-pre>update</code><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">directives</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//big函数何时会被调用？1.指令与元素成功绑定时（一上来）。2.指令所在的模板被重新解析时。</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	'big-number'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){ </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//命名规则</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">innerText</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">value</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> *</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}, </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	big</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'big'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//注意此处的this是window</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">innerText</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">value</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> *</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p><strong>自定义指令对象</strong></p>
<ul>
<li>对象中包含三个回调函数
<ol>
<li><code v-pre>bind(element,binding){ }</code> 当指令与元素绑定成功时调用</li>
<li><code v-pre>inserted(element,binding){ }</code> 当指令所对应的元素插入到页面后调用</li>
<li><code v-pre>update(element,binding){ }</code> 当data中数据发生变化时调用</li>
</ol>
<div class="language-js line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="js" data-title="js" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">directives</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//big函数何时会被调用？1.指令与元素成功绑定时（一上来）。2.指令所在的模板被重新解析时。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">	fbind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		//指令与元素成功绑定时（一上来）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		bind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">			element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">value</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">value</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		},</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		//指令所在元素被插入页面时</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		inserted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">			element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">focus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		},</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		//指令所在的模板被重新解析时</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">			element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">value</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">value</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<h5 id="_2-4-3-4-2-全局指令" tabindex="-1"><a class="header-anchor" href="#_2-4-3-4-2-全局指令"><span>2.4.3.4.2 全局指令</span></a></h5>
<div class="language-js line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="js" data-title="js" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//对象式</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">directive</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'fbind'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//指令与元素成功绑定时（一上来）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	bind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">value</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">value</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	},</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//指令所在元素被插入页面时</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	inserted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">focus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	},</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//指令所在的模板被重新解析时</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">value</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">value</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//函数式</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">directive</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'big-number'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> 	element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">innerText</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> binding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">value</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> *</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> })</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="_2-5-数据代理" tabindex="-1"><a class="header-anchor" href="#_2-5-数据代理"><span>2.5 数据代理</span></a></h2>
<h3 id="_2-5-1-object-defineproperty" tabindex="-1"><a class="header-anchor" href="#_2-5-1-object-defineproperty"><span>2.5.1 Object.defineProperty()</span></a></h3>
<ul>
<li>要理解数据代理，就要对ES6中的 <code v-pre>Object.defineProperty()</code></li>
<li><code v-pre>Object.defineProperty(obj, prop, descriptor)</code>  ：静态方法会直接在一个对象上定义一个新属性，或修改其现有属性，并返回此对象。</li>
<li>参数：
<ul>
<li>obj ：要定义属性的对象。</li>
<li>prop：一个字符串或 <code v-pre>Symbol</code>，指定了要定义或修改的属性键。</li>
<li>descriptor：要定义或修改的属性的描述符。</li>
</ul>
</li>
<li>返回值
<ul>
<li>传入函数的对象(<code v-pre>obj</code>)，其指定的属性已被添加或修改。</li>
</ul>
</li>
<li>参数 <code v-pre>descriptor</code> ：
<ul>
<li><code v-pre>enumerable:true,</code> 控制属性是否可以枚举,默认值是false</li>
<li><code v-pre>writable:true,</code>控制属性是否可以被修改,默认值是false</li>
<li><code v-pre>configurable:true</code>控制属性是否可以被删除,默认值是false</li>
<li><code v-pre>value: 18,</code>修改传入对象key值</li>
<li><code v-pre>get(){}</code> : 获取变量</li>
<li><code v-pre>set(){}</code>:修改变量</li>
</ul>
</li>
<li>实例：<div class="language-js line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="js" data-title="js" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> number</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 18</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> person</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'张三'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	sex</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'男'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">Object</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">defineProperty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'age'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> , {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	value</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	enumerable</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//控制属性是否可以枚举,默认值是false</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	writable</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//控制属性是否可以被修改,默认值是false</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	configurable</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//控制属性是否可以被删除,默认值是false</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//当有人读取person的age属性时,get函数(getter)就会被调用,且返回值就是age的值</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		console.log(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'有人读取age属性了'</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		return number</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//当有人修改person的age属性时,set函数(setter)就会被调用,且会收到修改的具体值</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	set (value){</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		console.log(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'有人修改了age属性,且值是’,value</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		number = value</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<h3 id="_2-5-2-数据代理的定义" tabindex="-1"><a class="header-anchor" href="#_2-5-2-数据代理的定义"><span>2.5.2 数据代理的定义</span></a></h3>
<ul>
<li>定义：通过一个对象代理对另一个对象中属性的操作（读/写）</li>
<li>实例：一个最简单的数据代理的例子通过 <code v-pre>obj2</code> 代理对 <code v-pre>obj</code> 中属性的操作
![[94865e42073649088e067c197bca56f3.png|475]]</li>
</ul>
<h3 id="_2-5-3-vue中的数据代理" tabindex="-1"><a class="header-anchor" href="#_2-5-3-vue中的数据代理"><span>2.5.3 Vue中的数据代理</span></a></h3>
<ul>
<li>通过 vm 对象（vue实例）来代理 data 对象中属性的操作（读/写）</li>
<li>
<font color="#00b050">Vue</font>中数据代理的好处</li>
<li>更加方便地操作 <code v-pre>data</code> 中的数据</li>
<li>基本原理</li>
<li>通过 <code v-pre>Object.defineProperty()</code> 把 <code v-pre>data</code> 对象中所有属性添加到 <code v-pre>vm</code> 上</li>
<li>为每一个添加到vm上的属性，都指定一个<code v-pre>getter/setter</code></li>
<li>在<code v-pre>getter/setter</code>内部去操作（读/写）<code v-pre>data</code>中对应的属性</li>
</ul>
<p>![[add8ed3573e04040b37b46a844be51f8.png|550]]</p>
<p>![[5722f882d7f04c2a8d46c40165bd71de.png|575]]</p>
<h2 id="_2-6-事件处理" tabindex="-1"><a class="header-anchor" href="#_2-6-事件处理"><span>2.6 事件处理</span></a></h2>
<h3 id="_2-6-1-事件的基本使用" tabindex="-1"><a class="header-anchor" href="#_2-6-1-事件的基本使用"><span>2.6.1 事件的基本使用</span></a></h3>
<ul>
<li>使用 <code v-pre>v-on:xxx</code> 或<code v-pre>@xxx</code>绑定事件，其中xxx是事件名</li>
<li>事件的回调需要配置在methods对象中，最终会在vm上</li>
<li><code v-pre>methods</code>中配置的函数，不要使用箭头函数，否则<code v-pre>this</code>就不是<code v-pre>vm</code>了</li>
<li><code v-pre>methods</code>中配置的函数，都是被<font color="#00b050">vue</font>所管理的函数，this的指向是vm或者组件实例对象</li>
<li><code v-pre>@click=&quot;demo&quot;</code>和<code v-pre>@click=&quot;demo($event)&quot;</code>效果一致，但后者可以传参</li>
</ul>
<h3 id="_2-6-2-事件修饰符" tabindex="-1"><a class="header-anchor" href="#_2-6-2-事件修饰符"><span>2.6.2 事件修饰符</span></a></h3>
<ul>
<li>
<font color="#00b050">Vue</font> 中的事件修饰符：<ul>
<li><code v-pre>prevent</code>：阻止默认事件（常用）</li>
<li><code v-pre>stop</code>：阻止事件冒泡（常用）</li>
<li><code v-pre>once</code>：事件只触发一次（常用）</li>
<li>capture：使用事件的捕获模式</li>
<li>self：只有event.target是当前操作的元素时才触发事件</li>
<li>passive：事件的默认行为是立即执行，无需等待事件回调执行完毕</li>
</ul>
</li>
</ul>
<blockquote>
<p><span style="background:rgba(240, 200, 0, 0.2)">随记</span>：</p>
<ul>
<li><code v-pre>@scroll</code>和<code v-pre>@wheel</code>的区别
<ul>
<li><code v-pre>@scroll</code>是滚动套的滚动，<code v-pre>@wheel</code>是鼠标滚轮的滚动</li>
<li>在 <code v-pre>scroll</code>中，当滚动条到底之后，再拖动滚动条往下是不会触发 <code v-pre>scroll</code>事件的</li>
<li>在<code v-pre>wheel</code>中，即使已经到底了，再操作鼠标滚轮往下，还是会触发<code v-pre>wheel</code>事件</li>
<li>如果存在事件回调，<code v-pre>wheel</code>会先执行完回调函数，再来进行（响应）滚动条的滚动； <code v-pre>scroll</code>优先响应滚动条的滚动</li>
</ul>
</li>
</ul>
</blockquote>
<h3 id="_2-6-3-键盘事件" tabindex="-1"><a class="header-anchor" href="#_2-6-3-键盘事件"><span>2.6.3 键盘事件</span></a></h3>
<font color="#00b050">Vue</font> 中常用的按键别名：<table>
<thead>
<tr>
<th>按键</th>
<th>别名</th>
<th>按键</th>
<th>别名</th>
</tr>
</thead>
<tbody>
<tr>
<td>回车</td>
<td>enter</td>
<td>删除</td>
<td>delete</td>
</tr>
<tr>
<td>退出</td>
<td>esc</td>
<td>空格</td>
<td>space</td>
</tr>
<tr>
<td>换行</td>
<td>rab</td>
<td></td>
<td></td>
</tr>
<tr>
<td>上</td>
<td>up</td>
<td>左</td>
<td>left</td>
</tr>
<tr>
<td>下</td>
<td>down</td>
<td>右</td>
<td>right</td>
</tr>
</tbody>
</table>
<ul>
<li>
<font color="#00b050">Vue</font> 未提供别名的按键，可以使用按键原始的<code v-pre>key</code>值去绑定，但要注意转为<code v-pre>kebab-case</code>（短横线命名）</li>
<li>
<p>系统修饰键（用法特殊）：<code v-pre>ctrl</code>、<code v-pre>alt</code>、<code v-pre>shift</code>、<code v-pre>meta</code></p>
<ul>
<li>配合<code v-pre>keyup</code>使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才会触发</li>
<li>配合 <code v-pre>keydown</code> 使用：正常触发事件</li>
</ul>
</li>
<li>
<p>也可以使用 <code v-pre>keycode</code> 去指定具体的按键（不推荐）</p>
</li>
<li>
<p><code v-pre>Vue.config.keycode.</code>自定义键名 = 键码，可以去定制键别名</p>
</li>
<li>
<p>一点小技巧：</p>
<ul>
<li>事件修饰符可以连续写
![[3b8c9a95881840678326086c041d2387.png|525]]</li>
</ul>
</li>
</ul>
<h2 id="_2-7-计算属性-computed" tabindex="-1"><a class="header-anchor" href="#_2-7-计算属性-computed"><span>2.7 计算属性（computed）</span></a></h2>
<h3 id="_2-7-1-计算属性的定义和理解" tabindex="-1"><a class="header-anchor" href="#_2-7-1-计算属性的定义和理解"><span>2.7.1 计算属性的定义和理解</span></a></h3>
<ul>
<li>定义
<ul>
<li>要用的属性不存在，需要通过已有的属性进行计算的来</li>
</ul>
</li>
<li>原理
<ul>
<li>底层借助了<code v-pre>Object.defineProperty</code>方法提供的<code v-pre>getter</code>和<code v-pre>setter</code></li>
</ul>
</li>
<li>get函数什么时候执行
<ul>
<li>初次读取属性值时会执行一次</li>
<li>当依赖的数据发生变化时会被再次调用</li>
</ul>
</li>
<li>优势
<ul>
<li>与<code v-pre>methods</code>相比，内部有缓存机制（复用）），效率更高，调式方便</li>
</ul>
</li>
</ul>
<blockquote>
<font color="#ff0000">备注</font><p>计算属性最终会出现在vm上（而不是出在<code v-pre>vm._data</code>上），直接读取使用即可
如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变</p>
</blockquote>
<ul>
<li>
<p>[n] 语法:</p>
<div class="language-js line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="js" data-title="js" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> vm</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		firstName</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '张'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		lastName</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '三'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	},</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	computed</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		fullName</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">			get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">				return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">firstName</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">lastName</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			},</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">			set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">				console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'set'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">				const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> str</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">split</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'-'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">				this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">firstName</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">				this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">lastName</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<h3 id="_2-7-2-计算属性的简写" tabindex="-1"><a class="header-anchor" href="#_2-7-2-计算属性的简写"><span>2.7.2 计算属性的简写</span></a></h3>
<ul>
<li>Q：什么时候用简写？</li>
<li>A：属性值只读不改的时候<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">computed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	fullName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">		return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">firstName</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">lastName</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_2-8-监视属性-watch" tabindex="-1"><a class="header-anchor" href="#_2-8-监视属性-watch"><span>2.8 监视属性（watch）</span></a></h2>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">watch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">	isHot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">		immediate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//初始化时让handler调用一下</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		//handler什么时候调用？当isHot发生改变时。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		handler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">newValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">oldValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">			console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'isHot被修改了'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">newValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">oldValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">vm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$watch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'isHot'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	immediate</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//初始化时让handler调用一下</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//handler什么时候调用？当isHot发生改变时。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	handler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">newValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">oldValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'isHot被修改了'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">newValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">oldValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>监视的两种写法：
<ul>
<li>new <font color="#00b050">Vue</font> 时传入 <code v-pre>watch</code>配置来监视指定的属性</li>
<li>通过vm对象的<code v-pre>$watch()</code></li>
</ul>
</li>
<li>当属性变化时，回调函数自动调用，在函数内部进行计算</li>
<li>监视的属性必须存在，才能进行监视（在<code v-pre>data</code>或者<code v-pre>compued</code>里）</li>
<li><code v-pre>immediate</code>属性
<ul>
<li>使用<code v-pre>watch</code> 时有一个特点，就是当值第一次绑定时，不会执行监听函数，只有值发生改变时才会执行。如果需要在最初绑定值的时候执行函数，就需要用到 <code v-pre>immediate</code>属性</li>
</ul>
</li>
<li><code v-pre>handler</code>属性
<ul>
<li><code v-pre>watch</code>中需要具体执行的方法</li>
</ul>
</li>
</ul>
<h3 id="_2-8-1-深度监视" tabindex="-1"><a class="header-anchor" href="#_2-8-1-深度监视"><span>2.8.1 深度监视</span></a></h3>
<ul>
<li>深度监视的错误写法
<ul>
<li>numbers中属性a、b值的改变，不会导致numbers在内存中地址的改变</li>
</ul>
</li>
</ul>
<p>![[257e73d16d85455c8ca57289090ea4e7.png|525]]</p>
<ul>
<li>
<p>深度监视正确的打开方式
![[ba4186bb574844fa8e7b4290b8c7f71f.png|550]]</p>
</li>
<li>
<p>深度监视</p>
<ul>
<li>
<font color="#00b050">Vue</font> 中的<code v-pre>watch</code>默认不监视对象内部值的改变（只监视一层）</li>
<li>配置<code v-pre>deep:true</code>可以监视对象内部值的改变（可以监视多层）</li>
</ul>
</li>
</ul>
<blockquote>
<font color="#ff0000">备注</font><pre><code>&lt;font color=&quot;#00b050&quot;&gt;Vue&lt;/font&gt; 自身可以监视多级结构（对象）中数据的改变，但&lt;font color=&quot;#00b050&quot;&gt;Vue&lt;/font&gt;提供给程序员的`watch`默认无法监视多级结构中属性的改变
使用`watch`时根据数据的具体结构，决定是否采用深度监视
</code></pre>
</blockquote>
<h3 id="_2-8-2-监视的简写" tabindex="-1"><a class="header-anchor" href="#_2-8-2-监视的简写"><span>2.8.2 监视的简写</span></a></h3>
<p><code v-pre>Q</code>：社么时候可以简写<br>
<code v-pre>A</code>：当要监视的属性的配置项只有<code v-pre>handler</code>的时候可以写成简写的形式。</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">watch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//正常写法</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">	/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">isHot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">		immediate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//初始化时让handler调用一下</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">		deep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//深度监视</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		handler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">newValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">oldValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">			console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'isHot被修改了'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">newValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">oldValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}, </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//简写</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	isHot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">newValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">oldValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'isHot被修改了'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">newValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">oldValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	} </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//正常写法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">vm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$watch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'isHot'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	immediate</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//初始化时让handler调用一下</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	deep</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//深度监视</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	handler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">newValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">oldValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'isHot被修改了'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">newValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">oldValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}) </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//简写</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">vm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$watch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'isHot'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">newValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">oldValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'isHot被修改了'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">newValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">oldValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-3-watch-vs-computed" tabindex="-1"><a class="header-anchor" href="#_2-8-3-watch-vs-computed"><span>2.8.3 watch VS computed</span></a></h3>
<ul>
<li>
<p>区别</p>
<ul>
<li><code v-pre>computed</code>能完成的功能，<code v-pre>watch</code>都可以完成</li>
<li><code v-pre>watch</code>能完成的功能， <code v-pre>computed</code>不一定能完成，例如： <code v-pre>watch</code>可以进行异步操作</li>
</ul>
</li>
<li>
<p>两个重要的小原则</p>
<ul>
<li>所被<font color="#00b050">Vue</font>管理的函数，最好写成普通函数，这样<code v-pre>this</code>的指向才是vm或者组件实例对象</li>
<li>所有不被<font color="#00b050">Vue</font>所管理的函数（定时器的回调函数、<code v-pre>ajax</code>的回调函数等），最好写成箭头函数，这样<code v-pre>this</code>的指向才是vm或者组件实例对象</li>
</ul>
</li>
<li>
<p>在这里插入图片描述</p>
</li>
</ul>
<p>![[f794ebb0bcc54d7ead5dbf42b864cb06.png|575]]</p>
<p>![[ebacab11a0c4422db3e7dd975d536a7d.png|575]]</p>
<h2 id="_2-9-样式绑定" tabindex="-1"><a class="header-anchor" href="#_2-9-样式绑定"><span>2.9 样式绑定</span></a></h2>
<h3 id="_2-9-1-class样式" tabindex="-1"><a class="header-anchor" href="#_2-9-1-class样式"><span>2.9.1 class样式</span></a></h3>
<ul>
<li>写法<code v-pre>:class=&quot;xxx&quot;</code> xxx可以是字符串、对象、数组。</li>
<li>字符串写法适用于：类名不确定，要动态获取。<div class="language-html line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="html" data-title="html" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"basic"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"mood"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> @click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"changeMood"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{name}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">br</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/>&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">br</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/javascript"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> vm</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'尚硅谷'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			mood</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'normal'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		},</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		methods</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">			changeMood</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">				const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> arr</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'happy'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'sad'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'normal'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">				const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> index</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> Math</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">floor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">Math</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">random</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">*</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">				this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mood</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> arr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">index</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		},	</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
<li>对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"basic"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"classArr"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{name}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">br</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/>&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">br</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/javascript"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> vm</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'尚硅谷'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			classArr</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'atguigu1'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'atguigu2'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'atguigu3'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"basic"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"classObj"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{name}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">br</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/>&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">br</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/javascript"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">		const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> vm</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">				name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'尚硅谷'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">				classObj</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">					atguigu1</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">					atguigu2</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">				},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-9-2-tyle样式" tabindex="-1"><a class="header-anchor" href="#_2-9-2-tyle样式"><span>2.9.2 tyle样式</span></a></h3>
<ul>
<li><code v-pre>:style=&quot;{fontSize: xxx}&quot;</code>其中xxx是动态值。<div class="language-html line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="html" data-title="html" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 绑定style样式--对象写法 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"basic"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"styleObj"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{name}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">br</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/>&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">br</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/javascript"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">productionTip</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> vm</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'尚硅谷'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			styleObj</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">				fontSize</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '40px'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">				color</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'red'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
<li><code v-pre>:style=&quot;[a,b]&quot;</code>其中a、b是样式对象。<div class="language-html line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="html" data-title="html" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 绑定style样式--数组写法 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"basic"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"styleArr"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{name}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/javascript"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">productionTip</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> vm</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'尚硅谷'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			styleArr</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">				{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">					fontSize</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '40px'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">					color</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'blue'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">				},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">				{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">					backgroundColor</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'gray'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">				}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<h2 id="_2-10-条件渲染" tabindex="-1"><a class="header-anchor" href="#_2-10-条件渲染"><span>2.10 条件渲染</span></a></h2>
<h3 id="_2-10-1-v-if" tabindex="-1"><a class="header-anchor" href="#_2-10-1-v-if"><span>2.10.1 <code v-pre>v-if</code></span></a></h3>
<ul>
<li>写法：
<ol>
<li><code v-pre>v-if=&quot;表达式&quot;</code></li>
<li><code v-pre>v-else-if=&quot;表达式&quot;</code></li>
<li><code v-pre>v-else=&quot;表达式&quot;</code></li>
</ol>
</li>
<li>适用于：切换频<strong>率较低</strong>的场景。</li>
<li>特点：不展示的<code v-pre>DOM</code>元素直接被移除。</li>
<li>注意：<code v-pre>v-if</code>可以和<code v-pre>v-else-if</code>、<code v-pre>v-else</code>一起使用，但要求结构不能被“打断”。</li>
<li>[n] 语法:</li>
</ul>
<div class="language-html line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="html" data-title="html" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"root"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>当前的n值是:{{n}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> @click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"n++"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>点我n+1&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	&#x3C;!-- 使用v-if做条件渲染 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	 &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"false"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>欢迎来到{{name}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"1 === 1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>欢迎来到{{name}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	&#x3C;!-- v-else和v-else-if --></span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">	&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"n === 1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Angular&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-else-if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"n === 2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>React&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-else-if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"n === 3"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Vue&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>哈哈&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	&#x3C;!-- v-if与template的配合使用，不影响DOM结构 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"n === 1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>你好&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>尚硅谷&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>北京&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/javascript"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">productionTip</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> vm</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'尚硅谷'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			n</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="_2-10-2-v-show" tabindex="-1"><a class="header-anchor" href="#_2-10-2-v-show"><span>2.10.2 <code v-pre>v-show</code></span></a></h3>
<ul>
<li>写法：<code v-pre>v-show=&quot;表达式&quot;</code></li>
<li>适用于：切换频<strong>率较高</strong>的场景。</li>
<li>特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉</li>
<li>[n] 语法:</li>
</ul>
<div class="language-html line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="html" data-title="html" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"root"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>当前的n值是:{{n}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> @click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"n++"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>点我n+1&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	&#x3C;!-- 使用v-show做条件渲染 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-show</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"false"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>欢迎来到{{name}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-show</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"1 === 1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>欢迎来到{{name}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/javascript"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">productionTip</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> vm</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'尚硅谷'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			n</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="_2-10-3-v-if和v-show" tabindex="-1"><a class="header-anchor" href="#_2-10-3-v-if和v-show"><span>2.10.3 <code v-pre>v-if</code>和<code v-pre>v-show</code></span></a></h3>
<ul>
<li>使用<code v-pre>v-if</code>的时，元素可能无法获取到，而使用<code v-pre>v-show</code>一定可以获取到。</li>
</ul>
<h2 id="_2-11-列表渲染" tabindex="-1"><a class="header-anchor" href="#_2-11-列表渲染"><span>2.11 列表渲染</span></a></h2>
<h3 id="_2-11-1-基本列表" tabindex="-1"><a class="header-anchor" href="#_2-11-1-基本列表"><span>2.11.1 基本列表</span></a></h3>
<ul>
<li>
<p><strong>v-for 指令</strong></p>
<ul>
<li>用于展示列表数据</li>
</ul>
</li>
<li>
<p>语法：<code v-pre>v-for=&quot;(item, index) in xxx&quot; :key=&quot;yyy&quot;</code></p>
</li>
<li>
<p>可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>数组: (<code v-pre>item</code>, <code v-pre>index</code>)</li>
<li>对象: (<code v-pre>value</code>, <code v-pre>key</code>)</li>
<li>字符串：(<code v-pre>char</code>, <code v-pre>index</code>)</li>
<li>数字：(<code v-pre>number</code>, <code v-pre>index</code>)
<br></li>
</ul>
</li>
<li>
<p>遍历数组 <code v-pre>item</code>是每一个对象，<code v-pre>index</code>为索引</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"(item,index) in person"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"item.id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {{item.name}}---{{item.age}}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>遍历对象 第一个收到的是值，第二个是键</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"(value,key) in car"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"k"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {{value}}---{{key}}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-11-2-key的原理" tabindex="-1"><a class="header-anchor" href="#_2-11-2-key的原理"><span>2.11.2 key的原理</span></a></h3>
<ol>
<li>
<p>虚拟<code v-pre>DOM</code>中key的作用：</p>
<ul>
<li>key是虚拟<code v-pre>DOM</code>对象的标识，当数据发生变化时，<font color="#00b050">Vue</font> 会根据【新数据】生成【新的虚拟<code v-pre>DOM</code>】, 随后<font color="#00b050">Vue</font>进行【新虚拟<code v-pre>DOM</code>】与【旧虚拟<code v-pre>DOM</code>】的差异比较，比较规则如下：
<br></li>
</ul>
</li>
<li>
<p>对比规则：</p>
<ol>
<li>旧虚拟<code v-pre>DOM</code>中找到了与新虚拟<code v-pre>DOM</code>相同的key：
<ul>
<li>若虚拟<code v-pre>DOM</code>中内容没变, 直接使用之前的真实<code v-pre>DOM</code></li>
<li>若虚拟<code v-pre>DOM</code>中内容变了, 则生成新的真实<code v-pre>DOM</code>，随后替换掉页面中之前的真实<code v-pre>DOM</code></li>
</ul>
</li>
<li>旧虚拟<code v-pre>DOM</code>中未找到与新虚拟<code v-pre>DOM</code>相同的key创建新的真实<code v-pre>DOM</code>，随后渲染到到页面。</li>
<li>用<code v-pre>index</code>作为<code v-pre>key</code>可能会引发的问题：
<ul>
<li>若对数据进行：逆序添加、逆序删除等破坏顺序操作: 会产生没有必要的真实<code v-pre>DOM</code>更新 ==&gt; 界面效果没问题, 但效率低</li>
<li>如果结构中还包含输入类的<code v-pre>DOM</code>： 会产生错误<code v-pre>DOM</code>更新 ==&gt; 界面有问题</li>
</ul>
</li>
<li>开发中如何选择<code v-pre>key</code>:
<ul>
<li>最好使用每条数据的唯一标识作为<code v-pre>key</code>, 比如id、手机号、身份证号、学号等唯一值。</li>
<li>如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用<code v-pre>index</code>作为<code v-pre>key</code>是没有问题的。</li>
</ul>
</li>
</ol>
</li>
</ol>
<p>![[7061a909799846959d817c2f1b5952d6.png|640]]
![[a6c68d2e5e8c4dba81acd6153053e31a.png|640]]</p>
<h3 id="_2-11-3-vue监视数据的原理" tabindex="-1"><a class="header-anchor" href="#_2-11-3-vue监视数据的原理"><span>2.11.3 Vue监视数据的原理</span></a></h3>
<ol>
<li>
<font color="#00b050">Vue</font>会监视<code v-pre>data</code>中所有层次的数据。</li>
<li>
<p>如何监测对象中的数据？</p>
<ul>
<li>通过setter实现监视，且要在new <font color="#00b050">Vue</font>时就传入要监测的数据。</li>
<li>对象中后追加的属性，<font color="#00b050">Vue</font>默认不做响应式处理</li>
<li>如需给后添加的属性做响应式，请使用如下API：<code v-pre>Vue.set(target，propertyName/index，value)</code> 或 <code v-pre>vm.$set(target，propertyName/index，value)</code></li>
</ul>
</li>
<li>
<p>如何监测数组中的数据？ 通过包裹数组更新元素的方法实现，本质就是做了两件事：</p>
<ol>
<li>调用原生对应的方法对数组进行更新。</li>
<li>重新解析模板，进而更新页面。</li>
</ol>
</li>
<li>
<p>在<font color="#00b050">Vue</font>修改数组中的某个元素一定要用如下方法：</p>
<ol>
<li>使用这些API: <code v-pre>push()</code>、<code v-pre>pop()</code>、<code v-pre>shift()</code>、<code v-pre>unshift()</code>、<code v-pre>splice()</code>、<code v-pre>sort()</code>、<code v-pre>reverse()</code></li>
<li><code v-pre>Vue.set()</code> 或 <code v-pre>vm.$set()</code></li>
</ol>
</li>
</ol>
<blockquote>
<p>特别注意：<code v-pre>Vue.set()</code> 和 <code v-pre>vm.$set()</code> 不能给 <code v-pre>vm</code> 或 <code v-pre>vm</code> 的根数据对象 添加属性！！！</p>
</blockquote>
<h3 id="_2-11-4-数组更新检测" tabindex="-1"><a class="header-anchor" href="#_2-11-4-数组更新检测"><span>2.11.4 数组更新检测</span></a></h3>
<ul>
<li>
<font color="#00b050">Vue</font> 重写了数组中的一系列改变数组内部数据的方法（先调用原生，再更新界面） </li>
<li>Vue将被侦听的数组的变更方法进行了包裹,所以它们也将会触发视图更新。这些被包裹过的方法</li>
<li>包括: <code v-pre>push()，pop()，shift()，unshift()，splice()，sort()，reverse()</code></li>
</ul>
<h3 id="_2-11-5-过滤与排序" tabindex="-1"><a class="header-anchor" href="#_2-11-5-过滤与排序"><span>2.11.5 过滤与排序</span></a></h3>
<h4 id="_2-11-5-1-过滤操作" tabindex="-1"><a class="header-anchor" href="#_2-11-5-1-过滤操作"><span>2.11.5.1 过滤操作</span></a></h4>
<ul>
<li>可以使用<code v-pre>watch</code>也可以使用计算属性，使用计算属性更加简单方便一点
<br></li>
<li>[n] 语法:<div class="language-html line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="html" data-title="html" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  &#x3C;!-- 准备好一个容器--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"root"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>人员列表&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"请输入名字"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"keyWord"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"(p,index) of filPerons"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"index"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        {{p.name}}-{{p.age}}-{{p.sex}}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/javascript"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">productionTip</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //用watch实现</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //#region </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        keyWord</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">''</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        persons</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'001'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'马冬梅'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">19</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sex</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'女'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'002'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'周冬雨'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sex</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'女'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'003'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'周杰伦'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">21</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sex</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'男'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'004'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'温兆伦'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">22</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sex</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'男'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        filPerons</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      watch</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        keyWord</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          immediate</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">          handler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">filPerons</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">persons</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">filter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">              return</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">indexOf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">!==</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }) </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //#endregion</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //用computed实现</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        keyWord</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ''</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        persons</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '001'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '马冬梅'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 19</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sex</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '女'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">d</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '002'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '周冬雨'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sex</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '女'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '003'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '周杰伦'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 21</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sex</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '男'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '004'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '温兆伦'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 22</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sex</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '男'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      computed</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        filPerons</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">          return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">persons</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">filter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            return</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">indexOf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">keyWord</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">!==</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<h4 id="_2-11-5-2-排序" tabindex="-1"><a class="header-anchor" href="#_2-11-5-2-排序"><span>2.11.5.2 排序</span></a></h4>
<ul>
<li>[n] 语法:<div class="language-html line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="html" data-title="html" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	&#x3C;!-- 准备好一个容器--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"root"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>人员列表&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"请输入名字"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"keyWord"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> @click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sortType = 2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>年龄升序&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> @click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sortType = 1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>年龄降序&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> @click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sortType = 0"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>原顺序&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"(p,index) of filPerons"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"p.id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">				{{p.name}}-{{p.age}}-{{p.sex}}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">				&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/javascript"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">productionTip</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">		new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">				keyWord</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">''</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">				sortType</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//0原顺序 1降序 2升序</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">				persons</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">					{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'001'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'马冬梅'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sex</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'女'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">					{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'002'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'周冬雨'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">31</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sex</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'女'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">					{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'003'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'周杰伦'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sex</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'男'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">					{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'004'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'温兆伦'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">19</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sex</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'男'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">				]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			},</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			computed</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">				filPerons</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">					const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> arr</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">persons</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">filter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">						return</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">indexOf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">keyWord</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">!==</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">					})</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">					//判断一下是否需要排序</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">					if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sortType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">						arr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">p1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">p2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">							return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sortType</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD"> ?</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> p2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">p1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> p1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">p2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">						})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">					}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">					return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> arr</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">				}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}) </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<h2 id="_2-12-表单数据的收集" tabindex="-1"><a class="header-anchor" href="#_2-12-表单数据的收集"><span>2.12 表单数据的收集</span></a></h2>
<ul>
<li>
<p>若：<code v-pre>&lt;input type=&quot;text&quot;/&gt;</code>，则<code v-pre>v-model</code>收集的是<code v-pre>value</code>值，用户输入的就是<code v-pre>value</code>值。</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model.trim</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"userInfo.account"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"password"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"userInfo.password"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"number"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model.number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"userInfo.age"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">textarea</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model.lazy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"userInfo.other"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">textarea</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">data:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">userInfo:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	account:'',</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	password:'',</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	age:'',</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	other:'',</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>若：<code v-pre>&lt;input type=&quot;radio&quot;/&gt;</code>，则<code v-pre>v-model</code>收集的是<code v-pre>value</code>值，且要给标签配置<code v-pre>value</code>值。</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">男&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"radio"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sex"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"userInfo.sex"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"male"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">女&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"radio"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sex"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"userInfo.sex"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"female"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">data:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	userInfo:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		gender:'female',</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>若：<code v-pre>&lt;input type=&quot;checkbox&quot;/&gt;</code></p>
<ol>
<li>没有配置<code v-pre>input</code>的<code v-pre>value</code>属性，那么收集的就是<code v-pre>checked</code>（勾选 or 未勾选，是布尔值）</li>
<li>配置<code v-pre>input</code>的<code v-pre>value</code>属性:
<ul>
<li><code v-pre>v-model</code>的初始值是非数组，那么收集的就是<code v-pre>checked</code>（勾选 or 未勾选，是布尔值）</li>
<li><code v-pre>v-model</code>的初始值是数组，那么收集的的就是<code v-pre>value</code>组成的数组</li>
</ul>
</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">学习&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"checkbox"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"userInfo.hobby"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"study"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">打游戏&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"checkbox"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"userInfo.hobby"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"game"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">吃饭&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"checkbox"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"userInfo.hobby"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"eat"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">data:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	userInfo:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		hobby:[],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<ul>
<li>[!]  备注：<code v-pre>v-model</code>的三个修饰符：
<ul>
<li><code v-pre>lazy</code>：失去焦点再收集数据</li>
<li><code v-pre>number</code>：输入字符串转为有效的数字</li>
<li><code v-pre>trim</code>：输入首尾空格过滤</li>
</ul>
</li>
</ul>
</blockquote>
<h2 id="_2-13-过滤器" tabindex="-1"><a class="header-anchor" href="#_2-13-过滤器"><span>2.13 过滤器</span></a></h2>
<ul>
<li>
<p><s>第三方库：dayjs</s></p>
</li>
<li>
<p><s>定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。</s></p>
</li>
<li>
<p><s>语法：</s></p>
<ol>
<li><s>注册过滤器：<strong>全局过滤器</strong><code v-pre>Vue.filter(name,callback)</code> 或 <strong>局部过滤器</strong><code v-pre>new Vue{filters:{}}</code></s></li>
<li><s>使用过滤器：<code v-pre>{{ xxx | 过滤器名}}</code>  或  <code v-pre>v-bind:属性 = &quot;xxx | 过滤器名&quot;</code></s></li>
</ol>
</li>
<li>
<p><s>备注：</s></p>
<ol>
<li><s>过滤器也可以接收额外参数、多个过滤器也可以串联</s></li>
<li><s>并没有改变原本的数据, 是产生新的对应的数据</s></li>
</ol>
<div class="language-html line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="html" data-title="html" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 过滤器实现 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>现在是：{{time | timeFormater}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 过滤器实现（传参） --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/javascript"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//全局过滤器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">filter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'mySlice'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	return</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">slice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//局部过滤器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">filters</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	timeFormater</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">str</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'YYYY年MM月DD日 HH:mm:ss'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//str设置了形参默认值</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">		return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> dayjs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">format</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<h2 id="_2-14-vue-对象的生命周期" tabindex="-1"><a class="header-anchor" href="#_2-14-vue-对象的生命周期"><span>2.14 <font color="#00b050">Vue</font> 对象的生命周期</span></a></h2>
<ul>
<li>[&gt;] <strong>生命周期</strong>：
<ol>
<li>又名：<strong>生命周期回调函数</strong>、<strong>生命周期函数</strong>、<strong>生命周期钩子</strong>。</li>
<li>是什么：<font color="#00b050">Vue</font> 在关键时刻帮我们调用的一些特殊名称的函数。</li>
<li>生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。</li>
<li>生命周期函数中的 <code v-pre>this</code> 指向是 vm 或 组件实例对象(VueComponents)。
<br></li>
</ol>
</li>
</ul>
<ol>
<li><strong>初始化显示</strong>
<ul>
<li><code v-pre>beforeCreate()</code>
<ul>
<li>无法通过 vm 去访问 <code v-pre>data</code>/<code v-pre>props</code>/<code v-pre>methods</code>，初始化声明周期、事件，没有开始<mark>数据代理，数据监测</mark></li>
</ul>
</li>
<li><code v-pre>created()</code>
<ul>
<li><code v-pre>data</code>/<code v-pre>props</code>/<code v-pre>methods</code> 都可用,可以通过vm去访问，但组件的结构尚未生成，不能操作<code v-pre>DOM</code>，只是在内存中生成了 <code v-pre>HTML</code>结构</li>
</ul>
</li>
<li><code v-pre>beforeMount()</code>
<ul>
<li>页面生成<font color="#00b050">Vue</font>未解析的<code v-pre>DOM</code>元素，只是将要将内存中的<code v-pre>HTML</code>结构渲染到页面</li>
</ul>
</li>
<li><code v-pre>mounted()</code>
<ul>
<li>生成经过<font color="#00b050">Vue</font>解析后<code v-pre>DOM</code>元素，页面渲染到浏览器，可以操作<code v-pre>DOM</code>元素了
<br></li>
</ul>
</li>
</ul>
</li>
<li><strong>更新状态</strong>
<ul>
<li><code v-pre>beforeUpdate()</code>
<ul>
<li><code v-pre>data</code>中数据更新完成，页面还没修改，还是旧数据，相当于<code v-pre>data</code>中数据是新数据，页面还是旧数据，还没有将<code v-pre>data</code>数据渲染到页面当数据变化之后，操作<code v-pre>DOM</code>元素，就用<code v-pre>updated</code></li>
</ul>
</li>
<li><code v-pre>updated()</code>
<ul>
<li>页面和数据都是<code v-pre>data</code>更新后的，最新的数据
<br></li>
</ul>
</li>
</ul>
</li>
<li><strong>销毁 vue 实例</strong>: <code v-pre>vm.$destory()</code>
<ul>
<li><code v-pre>beforeDestory()</code></li>
<li><code v-pre>destoryed()</code></li>
</ul>
</li>
</ol>
<ul>
<li>
<p>[&gt;] 常用的生命周期方法</p>
<ul>
<li><code v-pre>mounted()</code>: 发送ajax请求, 启动定时器、绑定自定义事件、订阅消息等异步任务【初始化操作】</li>
<li><code v-pre>beforeDestroy()</code>: 做收尾工作, 如: 清除定时器、解绑自定义事件、取消订阅消息等【首尾工作】</li>
</ul>
</li>
<li>
<p>[&gt;] 关于销毁 <font color="#00b050">Vue</font> 实例</p>
<ol>
<li>销毁后借助<font color="#00b050">Vue</font>开发者工具看不到任何信息</li>
<li>销毁后自定义事件会失效，但原生<code v-pre>DOM</code>事件依然有效</li>
<li>一般不会在<code v-pre>beforeDestroy</code>操作数据，因为即使操作数据，也不会再触发更新流程了。</li>
</ol>
</li>
</ul>
<p>![[794c68579d2202ac968b946e050e7201.png|650]]</p>
<h3 id="_2-14-1-原理解释图" tabindex="-1"><a class="header-anchor" href="#_2-14-1-原理解释图"><span>2.14.1 原理解释图</span></a></h3>
<p>![[Pasted image 20240724201230.png|650]]</p>
<p>![[Pasted image 20240724201309.png|650]]</p>
<h3 id="_2-14-2-父子组件的生命周期" tabindex="-1"><a class="header-anchor" href="#_2-14-2-父子组件的生命周期"><span>2.14.2 父子组件的生命周期</span></a></h3>
<ul>
<li>
<p>加载渲染过程</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">父</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">beforeCreate</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 父</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">created</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 父</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">beforeMount</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 子</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">beforeCreate</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">子</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">created</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">子</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">beforeMount</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">子</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">mounted</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">父</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">mounted</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>更新过程</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">父</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">beforeUpdate</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">子</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">beforeUpdate</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">子</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">updated</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">父</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">updated</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>销毁过程</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">父</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">beforeDestroy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">子</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">beforeDestroy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">子</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">destroyed</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">父</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">destroyed</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>常见钩子版本</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">父</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">beforeDestroy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">子</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">beforeDestroy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">子</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">destroyed</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">父</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">destroyed</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_2-15-组件" tabindex="-1"><a class="header-anchor" href="#_2-15-组件"><span>2.15 组件</span></a></h2>
<h3 id="_2-15-1-组件的概念" tabindex="-1"><a class="header-anchor" href="#_2-15-1-组件的概念"><span>2.15.1 组件的概念</span></a></h3>
<ul>
<li>[&gt;] 传统方式编写应用</li>
<li>存在问题：
<ul>
<li>依赖关系混乱，不好维护</li>
<li>代码复用率不高</li>
</ul>
</li>
</ul>
<p>![[a5e67412b8c24658a2455130cbadcf6a~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp|650]]
<br></p>
<ul>
<li>[&gt;] 使用组件方式编写应用</li>
<li>组件的定义——实现应用中局部功能代码和资源的集合</li>
</ul>
<p>![[30ec041452744aa19d302efc96d4d270~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp|650]]</p>
<h3 id="_2-15-2-非单文件组件" tabindex="-1"><a class="header-anchor" href="#_2-15-2-非单文件组件"><span>2.15.2 非单文件组件</span></a></h3>
<h4 id="_2-15-2-1-使用组件的三大步骤" tabindex="-1"><a class="header-anchor" href="#_2-15-2-1-使用组件的三大步骤"><span>2.15.2.1 使用组件的三大步骤</span></a></h4>
<ul>
<li>[&gt;] 定义组件（创建组件）</li>
<li>[&gt;] 注册组件</li>
<li>[&gt;] 使用组件（写组件标签）</li>
</ul>
<h5 id="_2-15-2-1-1-定义组件" tabindex="-1"><a class="header-anchor" href="#_2-15-2-1-1-定义组件"><span>2.15.2.1.1 定义组件</span></a></h5>
<ul>
<li>[&gt;] <code v-pre>const school = Vue.extend({})</code></li>
<li>[&gt;] 用<code v-pre>Vue.extend(options)</code>创建，其中<code v-pre>options</code>和<code v-pre>new Vue（options)</code> 时传入的那个<code v-pre>options</code>几乎一样，但有以下区别
<ol>
<li>不要写<code v-pre>el</code>——最终所有的组件都要经过一个vm的管理，由vm中的<code v-pre>el</code>决定服务哪个容器</li>
<li><code v-pre>data</code>必须写成函数——避免组件被复用时，数据存在引用关系</li>
</ol>
</li>
</ul>
<blockquote>
<ul>
<li>[!] 使用 <code v-pre>&lt;tempalte&gt;</code> 可以配置组件结构，模板内使用模板字符串，可以换行，使结构更加清楚</li>
</ul>
</blockquote>
<ul>
<li>[n] 语法:<div class="language-js line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="js" data-title="js" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> school</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">extend</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    template</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> `  </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        &#x3C;div class="demo"></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            &#x3C;h2>学校名称：{{schoolName}}&#x3C;/h2></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            &#x3C;h2>学校地址：{{address}}&#x3C;/h2></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            &#x3C;button @click="showName">点我提示学校名&#x3C;/button>	</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        &#x3C;/div></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//模板内使用模板字符串，可以换行，使结构更加清楚</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">      return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        schoolName</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '尚硅谷'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        address</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '北京昌平'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    methods</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      showName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        alert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">schoolName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  })</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<h5 id="_2-15-2-1-2-注册组件" tabindex="-1"><a class="header-anchor" href="#_2-15-2-1-2-注册组件"><span>2.15.2.1.2 注册组件</span></a></h5>
<ul>
<li>[&gt;] 局部注册：<code v-pre>new Vue</code>的时候传入<code v-pre>components</code>选项</li>
<li>[&gt;] 全局注册：<code v-pre>Vue.component</code>('组件名', 组件)</li>
<li>
<ul>
<li>[n] 语法:<div class="language-js line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="js" data-title="js" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//全局注册组件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'hello'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">hello</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  //创建vm</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      msg</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '你好啊！'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //第二步：注册组件（局部注册）</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    components</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">      school</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">      student</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  })</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
</li>
</ul>
<h5 id="_2-15-2-1-3-使用组件" tabindex="-1"><a class="header-anchor" href="#_2-15-2-1-3-使用组件"><span>2.15.2.1.3 使用组件</span></a></h5>
<ul>
<li>[n] 语法:<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 准备好一个容器--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"root"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    &#x3C;!-- 第三步：编写组件标签 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:white;--shiki-dark:#E06C75">school</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:white;--shiki-dark:#E06C75">school</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    &#x3C;!-- 第三步：编写组件标签 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:white;--shiki-dark:#E06C75">student</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/>  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!--可以成自结束标签（非脚手架情况下尽量不使用）--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="_2-15-2-2-组件使用的注意点" tabindex="-1"><a class="header-anchor" href="#_2-15-2-2-组件使用的注意点"><span>2.15.2.2 组件使用的注意点</span></a></h4>
<ul>
<li>[&gt;] 关于组件名</li>
<li>一个单词组成
<ol>
<li>第一种写法（首字母小写）：<code v-pre>school</code></li>
<li>第二种写法（首字母大写）：<code v-pre>School</code></li>
</ol>
</li>
<li>多个单词组成
<ol>
<li>第一种写法（<code v-pre>kebab-case</code>命名）：<code v-pre>my-school</code></li>
<li>第二种写法（<code v-pre>CamelCase</code>命名）：<code v-pre>MySchool</code>（需要<font color="#00b050">Vue</font>脚手架支持）</li>
</ol>
</li>
</ul>
<blockquote>
<ul>
<li>[!] 备注
<ul>
<li>组件名尽可能回避HTML中已有的元素名称，例如h2、H2</li>
<li>可以使用<code v-pre>name</code>配置项指定组件在开发者工具中呈现的名字</li>
</ul>
</li>
</ul>
</blockquote>
<ul>
<li>[n] 语法:<div class="language-html line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="html" data-title="html" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    &#x3C;!-- 准备好一个容器--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"root"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{msg}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:white;--shiki-dark:#E06C75">school</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:white;--shiki-dark:#E06C75">school</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/javascript"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">productionTip</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //定义组件</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> s</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">extend</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'atguigu'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        template</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> `</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          &#x3C;div></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">              &#x3C;h2>学校名称：{{name}}&#x3C;/h2>	</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">              &#x3C;h2>学校地址：{{address}}&#x3C;/h2>	</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          &#x3C;/div></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      `</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">                name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '尚硅谷'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">                address</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '北京'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '#root'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            msg</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '欢迎学习Vue!'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        components</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            school</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> s</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<p>![[Pasted image 20240725031412.png|250]]</p>
<ul>
<li>
<p>[&gt;] 关于组件标签</p>
<ul>
<li>第一种写法：<code v-pre>&lt;school&gt;&lt;/school&gt;</code></li>
<li>第二种写法：<code v-pre>&lt;school/&gt;</code> (不使用脚手架会导致后续组件不能渲染)</li>
</ul>
</li>
<li>
<p>[&gt;] 简写方式 <code v-pre>const school = Vue.extend({options})</code> 可以简写成 <code v-pre>const school = {options}</code></p>
</li>
</ul>
<h4 id="_2-15-2-3-vuecomponent" tabindex="-1"><a class="header-anchor" href="#_2-15-2-3-vuecomponent"><span>2.15.2.3 VueComponent</span></a></h4>
<ol>
<li>
<p><code v-pre>app</code> 组件本质是一个名为 <code v-pre>VueComponent</code> 的构造函数，且不是程序员定义的，是<code v-pre>Vue.extend</code>生成的</p>
</li>
<li>
<p>我们只需要写<code v-pre>&lt;app/&gt;</code>或<code v-pre>&lt;app&gt;&lt;/app&gt;</code>，<font color="#00b050">Vue</font>解析时会帮我们创建<code v-pre>app组件</code>的实例对象，即<font color="#00b050">Vue</font>帮我们执行<code v-pre>new VueComponent({options})</code></p>
</li>
<li>
<p>特别注意：每次调用<code v-pre>Vue.extend</code>，返回的都是一个全新的<code v-pre>VueComponent</code></p>
</li>
<li>
<p>关于<code v-pre>this</code>指向</p>
<ul>
<li>组件配置中：<code v-pre>data函数</code>、<code v-pre>methods中的函数</code>、<code v-pre>watch中的函数</code>、<code v-pre>computed中的函数</code> 它们的<code v-pre>this</code>均是【<font color="#00b050">Vue</font>Component实例对象】</li>
<li><code v-pre>new Vue(options)</code>配置中：<code v-pre>data函数</code>、<code v-pre>methods中的函数</code>、<code v-pre>watch中的函数</code>、<code v-pre>computed中的函数</code> 它们的<code v-pre>this</code>均是【<font color="#00b050">Vue</font>实例对象】</li>
</ul>
</li>
<li>
<font color="#00b050">Vue</font>Component的实例对象，以后简称VC（也可称之为：组件实例对象）</li>
<li>
<font color="#00b050">Vue</font>的实例对象，以后简称为VM</li>
</ol>
<blockquote>
<ul>
<li>[!] 一个重要的内置关系<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">VueComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">prototype</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">__proto__</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">prototype</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</blockquote>
<h3 id="_2-15-3-单文件组件" tabindex="-1"><a class="header-anchor" href="#_2-15-3-单文件组件"><span>2.15.3 单文件组件</span></a></h3>
<h4 id="_2-15-3-1-组成" tabindex="-1"><a class="header-anchor" href="#_2-15-3-1-组成"><span>2.15.3.1 组成</span></a></h4>
<ul>
<li>[&gt;] 模板页面<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	页面模板</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>[&gt;] JS 模块对象<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">export default </span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {return {}},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    methods</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    computed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    components</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {}</span></span>
<span class="line"><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>[&gt;] 样式<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    样式定义</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="_2-15-3-2-基本使用" tabindex="-1"><a class="header-anchor" href="#_2-15-3-2-基本使用"><span>2.15.3.2 基本使用</span></a></h4>
<ol>
<li>引入组件</li>
<li>注册成标签</li>
<li>使用组件标签</li>
</ol>
<ul>
<li>[n] 语法:<div class="language-html line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="html" data-title="html" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:white;--shiki-dark:#E06C75">HelloWorld</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:white;--shiki-dark:#E06C75">HelloWorld</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 3. 使用组件标签--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hello-world</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hello-world</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/javascript"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> HelloWorld</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> './components/HelloWorld'</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> //1. 引入组件</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'App'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        components</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//2. 注册成标签</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            HelloWorld</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<h1 id="_3-vue-advanced" tabindex="-1"><a class="header-anchor" href="#_3-vue-advanced"><span>3 <font color="#00b050">Vue</font> Advanced</span></a></h1>
<h2 id="_3-1-vue-脚手架-vue-cli" tabindex="-1"><a class="header-anchor" href="#_3-1-vue-脚手架-vue-cli"><span>3.1 Vue 脚手架(Vue Cli)</span></a></h2>
<h3 id="_3-1-1-cli基本目录" tabindex="-1"><a class="header-anchor" href="#_3-1-1-cli基本目录"><span>3.1.1 cli基本目录</span></a></h3>
<p>├── <strong>node_modules</strong>   存放项目依赖
├── <strong>public</strong>
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── <strong>src</strong>
│   ├── <font color="#00b050">assets</font>: 存放静态资源
│   │   └── logo.png
│   │── <font color="#00b050">component</font>: 存放组件
│   │   └── HelloWorld.vue
│   │── <font color="#00b050">App.vue:</font> 汇总所有组件
│   │── <font color="#00b050">main.js</font>: 入口文件
├── <strong>.gitignore</strong>: git版本管制忽略的配置
├── <strong>babel.config.js</strong>: babel的配置文件
├── <strong>package.json</strong>: 应用包配置文件
├── <strong>README.md</strong>: 应用描述文件
├── <strong>package-lock.json</strong>：包版本控制文件</p>
<h3 id="_3-1-2-创建vue项目" tabindex="-1"><a class="header-anchor" href="#_3-1-2-创建vue项目"><span>3.1.2 创建Vue项目</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">//全局安装脚手架</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> @vue/cli</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">//安装vue</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vue@^2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">//创建项目</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vue</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> creat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-3-不同版本的vue" tabindex="-1"><a class="header-anchor" href="#_3-1-3-不同版本的vue"><span>3.1.3 不同版本的Vue</span></a></h3>
<ol>
<li><code v-pre>vue.js</code>与<code v-pre>vue.runtime.xxx.js</code>的区别：
<ol>
<li>vue.js是完整版的Vue，包含：核心功能 + 模板解析器。</li>
<li>vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。</li>
</ol>
</li>
<li>因为vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需要使用 <code v-pre>render</code> 函数接收到的 createElement 函数去指定具体内容。<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#app'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//render函数完成了这个功能：将App组件放入容器中</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  render</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> h</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =></span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">),</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// render:q=> q('h1','你好啊')</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// template:`&#x3C;h1>你好啊&#x3C;/h1>`,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// components:{App},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_3-1-4-vue-config-js配置文件" tabindex="-1"><a class="header-anchor" href="#_3-1-4-vue-config-js配置文件"><span>3.1.4 vue.config.js配置文件</span></a></h3>
<ol>
<li>使用vue inspect &gt; output.js可以查看到Vue脚手架的默认配置。</li>
<li>使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh</li>
</ol>
<h2 id="_3-2-ref属性" tabindex="-1"><a class="header-anchor" href="#_3-2-ref属性"><span>3.2 ref属性</span></a></h2>
<ol>
<li>被用来给元素或子组件注册引用信息（id的替代者）</li>
<li>应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）然后就可以调用该组件的方法和数据</li>
<li>ref可以加在组价标签里，得到这个组件的实例对象,实现父组件直接<strong>调用子组件的方法和数据</strong>,给子组件绑定事件,但是要在<code v-pre>Mounted</code>函数里执行。</li>
<li>使用方式：<code v-pre>ref=&quot;title&quot;</code>  <code v-pre>this.$refs.title</code></li>
</ol>
<ul>
<li>[n] 语法:<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"msg"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> ref</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"title"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> ref</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"btn"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> @click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"showDOM"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>点我输出上方的DOM元素&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:white;--shiki-dark:#E06C75">School</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> ref</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sch"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/javascript"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">methods</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	showDOM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">$refs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//真实DOM元素</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">$refs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">btn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//真实DOM元素</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">$refs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//School组件的实例对象（vc）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_3-3-mixin-混入" tabindex="-1"><a class="header-anchor" href="#_3-3-mixin-混入"><span>3.3 mixin(混入)</span></a></h2>
<ol>
<li>功能：可以把多个组件共用的配置提取成一个混入对象</li>
<li>使用方式：</li>
</ol>
<ul>
<li>
<p>[&gt;] 创建混入组件</p>
<ul>
<li>[n] mixin.js</li>
</ul>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> hunhe</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	methods</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		showName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">			alert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>[&gt;] 入口文件引入并注册组件（全局注册：vm和所有vc都会得到mixin.js中的方法）</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hunhe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hunhe2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> './mixin'</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> //引入两个组件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mixin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">hunhe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//同时也要注册两个组件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mixin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">hunhe2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//全局注册</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>[&gt;] 在需要的组件中引入并注册（局部注册：当前组件可用）</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hunhe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hunhe2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> './mixin'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">mixins</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">hunru</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//在组件data 中的 mixins 属性中注册</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_3-4-vue-插件" tabindex="-1"><a class="header-anchor" href="#_3-4-vue-插件"><span>3.4 Vue 插件</span></a></h2>
<ol>
<li>
<p>功能：用于增强 <font color="#00b050">Vue</font></p>
</li>
<li>
<p>本质：包含<code v-pre>install</code>方法的一个对象，<code v-pre>install</code>的第一个参数是<font color="#00b050">Vue</font>，第二个以后的参数是插件使用者传递的数据。</p>
</li>
<li>
<p>定义插件：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	install</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">options</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	   // 1. 添加全局过滤器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	   Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">filter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	   // 2. 添加全局指令</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	   Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">directive</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	   // 3. 配置全局混入(合)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	   Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mixin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	   // 4. 添加实例方法</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">	   Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">prototype</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$myMethod</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> () {</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">	   Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">prototype</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$myProperty</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> xxxx</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用插件：<code v-pre>Vue.use()</code>（入口文件中）</p>
</li>
</ol>
<h2 id="_3-5-scoped样式" tabindex="-1"><a class="header-anchor" href="#_3-5-scoped样式"><span>3.5 scoped样式</span></a></h2>
<ol>
<li>作用：让样式在局部生效，防止冲突。</li>
<li>写法：<code v-pre>&lt;style scoped&gt;</code></li>
</ol>
<h2 id="_3-6-webstorage" tabindex="-1"><a class="header-anchor" href="#_3-6-webstorage"><span>3.6 webStorage</span></a></h2>
<ol>
<li>存储内容大小一般支持5MB左右（不同浏览器可能还不一样）</li>
<li>浏览器端通过 <code v-pre>Window.sessionStorage</code> 和 <code v-pre>Window.localStorage</code> 属性来实现本地存储机制。</li>
<li>相关API：
<ol>
<li><code v-pre>xxxxxStorage.setItem('key', 'value');</code>
该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。</li>
<li><code v-pre>xxxxxStorage.getItem('person');</code>
​		该方法接受一个键名作为参数，返回键名对应的值。</li>
<li><code v-pre>xxxxxStorage.removeItem('key');</code>
​		该方法接受一个键名作为参数，并把该键名从存储中删除。</li>
<li><code v-pre> xxxxxStorage.clear()</code>
​		该方法会清空存储中的所有数据。</li>
</ol>
</li>
<li>备注：
<ol>
<li>SessionStorage存储的内容会随着浏览器窗口关闭而消失。</li>
<li>LocalStorage存储的内容，需要手动清除才会消失。</li>
<li><code v-pre>xxxxxStorage.getItem(xxx)</code>如果xxx对应的value获取不到，那么getItem的返回值是null。</li>
<li><code v-pre>JSON.parse(null)</code>的结果依然是null。</li>
</ol>
</li>
</ol>
<h2 id="_3-7-组件间通讯" tabindex="-1"><a class="header-anchor" href="#_3-7-组件间通讯"><span>3.7 组件间通讯</span></a></h2>
<h3 id="_3-7-1-props配置项-父组件-子组件" tabindex="-1"><a class="header-anchor" href="#_3-7-1-props配置项-父组件-子组件"><span>3.7.1 props配置项  <strong>父组件 ==&gt; 子组件</strong></span></a></h3>
<ul>
<li>功能：让组件接收外部传过来的数据</li>
<li>传递数据：<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 父组件携带信息--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:white;--shiki-dark:#E06C75">Student</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"李四"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> sex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"女"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :age</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"18"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>接收数据：
<ol>
<li>第一种方式（只接收）：<code v-pre>props:['name'] </code></li>
<li>第二种方式（限制类型）：<code v-pre>props:{name:String}</code></li>
<li>第三种方式（限制类型、限制必要性、指定默认值）：</li>
</ol>
</li>
<li>[n] 语法:<div class="language-js line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="js" data-title="js" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//简单声明接收</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">props</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'name'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'age'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'sex'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//接收的同时对数据进行类型限制</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">props</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">	name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">	age</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">	sex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">String</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">} </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//接收的同时对数据：进行类型限制+默认值的指定+必要性的限制</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">props</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">	name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">		type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//name的类型是字符串</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">		required</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//name是必要的</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">	age</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">		type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">		default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">99</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> //默认值</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">	sex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">		type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">		required</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<blockquote>
<ul>
<li>[!]   props是只读的，<font color="#00b050">Vue</font> 底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。</li>
</ul>
</blockquote>
<h3 id="_3-7-2-自定义事件-子组件-父组件" tabindex="-1"><a class="header-anchor" href="#_3-7-2-自定义事件-子组件-父组件"><span>3.7.2 自定义事件    <strong>子组件 ==&gt; 父组件</strong></span></a></h3>
<ol>
<li>
<p>主要实现子向父组件进行数据传递</p>
</li>
<li>
<p>和click等内置事件一样（@click=&quot;&quot;)，要在父组件中给子组件添加一个自定义事件，父组件会收到子组件传过来的值,也可以添加事件修饰符.once之类的</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">School</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> @getSchoolName="schoolName"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">methods</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> 	schoolName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	   console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"我的学校是"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	 },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在子组件内用<code v-pre>$emit(“自定义事件名”,要传的参数)</code> 来使用该自定义事件</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">methods</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    send</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$emit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"getSchoolName"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<ul>
<li>
<p>[&gt;] <strong>解绑自定义事件</strong></p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$off</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'atguigu'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//解绑一个自定义事件</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$off</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">([</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'atguigu'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'demo'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//解绑多个自定义事件</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$off</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//解绑所有的自定义事件</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>[&gt;] <strong>子组件使用原生事件</strong></p>
</li>
<li>
<p>使用一个事件修饰符(.native)</p>
</li>
<li>
<p>vue会将写在组件中的事件都看做自定义事件，要想触发原生的事件，要加.native</p>
</li>
<li>
<p><code v-pre>&lt;School @click.native=&quot;schoolName&quot; /&gt;</code></p>
</li>
</ul>
<h3 id="_3-7-3-全局事件总线" tabindex="-1"><a class="header-anchor" href="#_3-7-3-全局事件总线"><span>3.7.3 全局事件总线</span></a></h3>
<p>实现任意组件间的通信</p>
<ul>
<li>
<p>[&gt;] 过程</p>
<ol>
<li>数据发送方，调用 emit ( ′ 事件名称 ′ , 要发送的数据 )</li>
<li>据接收方，调用on(‘事件名称’，事件处理函数)</li>
<li>最后在beforeDestory()函数中解绑自定义事件</li>
</ol>
</li>
<li>
<p>[&gt;] 安装全局事件总线$bus （入口文件）</p>
<ul>
<li>on, emit,off 属性只有在 vue.prototype上才有，而 vc , vm 都可以访问 vue.prototype ，所以每个组件都可以获得 on, emit,off 属性只有在vue.prototype上才有，并且将 bus 绑定在 vue.prototype 上，每个组件都可以看见它，并且将bus配置为 vm，即 bus 也会拥有on, emit,off属性</li>
</ul>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#app'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	render</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> h</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =></span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">),</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	beforeCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">		Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">prototype</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$bus</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> this</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>[&gt;] 发送数据</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> @click="sendStudentName">把学生名给School组件&#x3C;/button></span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">methods:</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	sendStudentName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		this.$bus.$emit(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'hello'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,this.name)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>[&gt;] 接受数据</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mounted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">	this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">$bus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'hello'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'我是School组件，收到了数据'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">beforeDestroy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">	this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">$bus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$off</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'hello'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_3-7-4-消息订阅与发布" tabindex="-1"><a class="header-anchor" href="#_3-7-4-消息订阅与发布"><span>3.7.4 消息订阅与发布</span></a></h3>
<p>一种任意组件间通信的方式</p>
<ul>
<li>
<p>[&gt;] 一个第三方库 <strong>pubsub-js</strong></p>
<ul>
<li><code v-pre>npm i pubsub-js</code></li>
<li>提供了两个方法
<ul>
<li><code v-pre>pubsub.subscribe(&quot;  &quot;,opition)</code></li>
<li><code v-pre>pubsub.publish(&quot;  &quot;,opition)</code></li>
<li>第一个参数是消息名字，第二个是数据，需要传入一个回调函数，函数传参</li>
</ul>
</li>
</ul>
</li>
<li>
<p>[&gt;] 发布消息</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> pubsub</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'pubsub-js'</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//引入第三方库</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> @click="sendStudentName">把学生名给School组件&#x3C;/button></span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">methods:</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	sendStudentName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		pubsub.publish(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'hello'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">666</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>[&gt;] 接受消息</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> pubsub</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'pubsub-js'</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//引入第三方库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mounted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">	this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">pubId</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> pubsub</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">subscribe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'hello'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">msgName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">		console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		// console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">beforeDestroy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	pubsub</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">unsubscribe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">pubId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_3-8-nexttick" tabindex="-1"><a class="header-anchor" href="#_3-8-nexttick"><span>3.8 $nextTick</span></a></h2>
<ul>
<li>
<p>this.$nextTick(回调函数)</p>
</li>
<li>
<font color="#00b050">vue</font>在解析模板时，不会立即更改，只有将代码执行一遍后统一重新解析</li>
<li>
<p>只有在DOM元素更新到页面之后才执行函数体内代码</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$nextTick</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">( () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">	this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">$refs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">inputTitle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">focus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  });</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_3-9-插槽-部分api已经弃用" tabindex="-1"><a class="header-anchor" href="#_3-9-插槽-部分api已经弃用"><span>3.9 插槽（部分api已经弃用）</span></a></h2>
<p>就是在复用组件时，对复用组件的html结构进行调整</p>
<ol>
<li>作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 <strong style="color:red">父组件 ===&gt; 子组件</strong> 。</li>
<li>分类：默认插槽、具名插槽、作用域插槽</li>
<li>api：
<ol>
<li><strong>默认插槽</strong>
<ol>
<li>子组件：<code v-pre>&lt;slot&gt;&lt;/slot&gt;</code></li>
<li>父组件： 直接在组件标签里面写结构</li>
</ol>
</li>
<li><strong>具名插槽</strong>
<ol>
<li>子组件：<code v-pre>&lt;slot name=&quot;名字&quot;&gt;&lt;/slot&gt;</code></li>
<li>父组件：在要添加的结构上加上<code v-pre>slot=&quot;名字&quot;</code></li>
</ol>
</li>
<li><strong>作用域插槽</strong>
<ol>
<li>子组件：<code v-pre>&lt;slot :games=&quot;games&quot; msg=&quot;hello&quot;&gt;&lt;/slot&gt;</code>，绑定数据，传递数据</li>
<li>父组件：<code v-pre>&lt;template scope=&quot;自己命名&quot;&gt;&lt;/template&gt;</code>,写在结构外</li>
</ol>
</li>
</ol>
</li>
</ol>
<h3 id="_3-9-1-默认插槽" tabindex="-1"><a class="header-anchor" href="#_3-9-1-默认插槽"><span>3.9.1 默认插槽</span></a></h3>
<ul>
<li>[n] 语法:<div class="language-jsx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="jsx" data-title="jsx" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>子组件：</span></span>
<span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>	&#x3C;div class="category"></span></span>
<span class="line"><span>		&#x3C;h3>{{title}}分类&#x3C;/h3></span></span>
<span class="line"><span>		&#x3C;!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） --></span></span>
<span class="line"><span>		&#x3C;slot>我是一些默认值，当使用者没有传递具体结构时，我会出现&#x3C;/slot></span></span>
<span class="line"><span>	&#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span></span></span>
<span class="line"><span>父组件：</span></span>
<span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>	&#x3C;Category title="美食" ></span></span>
<span class="line"><span>		&#x3C;img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt=""></span></span>
<span class="line"><span>	&#x3C;/Category></span></span>
<span class="line"><span>	&#x3C;Category title="游戏" ></span></span>
<span class="line"><span>		&#x3C;ul></span></span>
<span class="line"><span>			&#x3C;li v-for="(g,index) in games" :key="index">{{g}}&#x3C;/li></span></span>
<span class="line"><span>		&#x3C;/ul></span></span>
<span class="line"><span>	&#x3C;/Category></span></span>
<span class="line"><span>&#x3C;/template></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<h3 id="_3-9-2-具名插槽" tabindex="-1"><a class="header-anchor" href="#_3-9-2-具名插槽"><span>3.9.2 具名插槽</span></a></h3>
<ul>
<li>[n] 语法:<div class="language-jsx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="jsx" data-title="jsx" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>子组件：</span></span>
<span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>	&#x3C;div class="category"></span></span>
<span class="line"><span>		&#x3C;h3>{{title}}分类&#x3C;/h3></span></span>
<span class="line"><span>		&#x3C;!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） --></span></span>
<span class="line"><span>		&#x3C;slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1&#x3C;/slot></span></span>
<span class="line"><span>		&#x3C;slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2&#x3C;/slot></span></span>
<span class="line"><span>	&#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span>父组件：</span></span>
<span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>	&#x3C;Category title="美食" ></span></span>
<span class="line"><span>		&#x3C;img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt=""></span></span>
<span class="line"><span>		&#x3C;a slot="footer" href="http://www.atguigu.com">更多美食&#x3C;/a></span></span>
<span class="line"><span>	&#x3C;/Category></span></span>
<span class="line"><span>	&#x3C;Category title="游戏" ></span></span>
<span class="line"><span>		&#x3C;ul slot="center"></span></span>
<span class="line"><span>			&#x3C;li v-for="(g,index) in games" :key="index">{{g}}&#x3C;/li></span></span>
<span class="line"><span>		&#x3C;/ul></span></span>
<span class="line"><span>		&#x3C;div class="foot" slot="footer"></span></span>
<span class="line"><span>			&#x3C;a href="http://www.atguigu.com">单机游戏&#x3C;/a></span></span>
<span class="line"><span>			&#x3C;a href="http://www.atguigu.com">网络游戏&#x3C;/a></span></span>
<span class="line"><span>		&#x3C;/div></span></span>
<span class="line"><span>	&#x3C;/Category></span></span>
<span class="line"><span>&#x3C;/template></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<h3 id="_3-9-3-作用域插槽" tabindex="-1"><a class="header-anchor" href="#_3-9-3-作用域插槽"><span>3.9.3 作用域插槽</span></a></h3>
<ul>
<li>
<p>使用api：</p>
<ul>
<li><code v-pre>&lt;template&gt;&lt;/template&gt;</code>,包裹结构</li>
<li><code v-pre>scope=&quot;自己命名&quot;</code>，子组件带过来的数据是一个对象，可用传递多组数据，可以结构赋值简化。</li>
</ul>
</li>
<li>
<p>数据在子组件，父组件使用api接收</p>
</li>
<li>
<p>[n] 语法:</p>
<div class="language-jsx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="jsx" data-title="jsx" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>子组件：</span></span>
<span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>	&#x3C;div class="category"></span></span>
<span class="line"><span>		&#x3C;h3>{{title}}分类&#x3C;/h3></span></span>
<span class="line"><span>		&#x3C;slot :games="games" msg="hello">我是默认的一些内容&#x3C;/slot></span></span>
<span class="line"><span>	&#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span>父组件：</span></span>
<span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>	&#x3C;Category title="游戏"></span></span>
<span class="line"><span>		&#x3C;template scope="atguigu"></span></span>
<span class="line"><span>			&#x3C;ul></span></span>
<span class="line"><span>				&#x3C;li v-for="(g,index) in atguigu.games" :key="index">{{g}}&#x3C;/li></span></span>
<span class="line"><span>			&#x3C;/ul></span></span>
<span class="line"><span>		&#x3C;/template></span></span>
<span class="line"><span>	&#x3C;/Category></span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	&#x3C;Category title="游戏"></span></span>
<span class="line"><span>		&#x3C;template scope="{games}"></span></span>
<span class="line"><span>			&#x3C;ol></span></span>
<span class="line"><span>				&#x3C;li style="color:red" v-for="(g,index) in games" :key="index">{{g}}&#x3C;/li></span></span>
<span class="line"><span>			&#x3C;/ol></span></span>
<span class="line"><span>		&#x3C;/template></span></span>
<span class="line"><span>	&#x3C;/Category></span></span>
<span class="line"><span>&#x3C;/template></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<h2 id="_3-10-vuex" tabindex="-1"><a class="header-anchor" href="#_3-10-vuex"><span>3.10 VueX</span></a></h2>
<font color="#00b050">vuex</font> 中一般存储组件之间共享的数据，适用于多组件共享某些数据，将这些共享的数据集中起来管理。<font color="#00b050">vuex</font>中数据都是响应式的，能够保持数据与页面的同步，数据改变重新解析模板。<font color="#00b050">vuex</font>是实现集中式状态管理的一个<font color="#00b050">Vue</font>插件，适用于任意组件间通信。<p>![[26486ea99d7870ae76f53445b661bdcd.png|475]]</p>
<h3 id="_3-10-1-搭建-vuex-环境" tabindex="-1"><a class="header-anchor" href="#_3-10-1-搭建-vuex-环境"><span>3.10.1 搭建 <font color="#00b050">Vuex</font> 环境</span></a></h3>
<ul>
<li>
<p>api：</p>
<ul>
<li><strong>数据使用组件</strong>：
<ul>
<li><code v-pre>$store.dispatch('a',value)</code>
<ul>
<li>参数一：store 中 actions 的配置项</li>
<li>参数二：用户输入或者选择的数据</li>
</ul>
</li>
<li><code v-pre>$store.commit('a',value)</code>
<ul>
<li>参数一：store 中 mutations 的配置项</li>
<li>参数二：用户输入或者选择的数据</li>
</ul>
</li>
</ul>
</li>
<li><strong>store 组件</strong>：
<ul>
<li>actions 配置项
<ul>
<li><code v-pre>context.commit('A',value)</code>
<ul>
<li>参数一：context （一个mini state ，它拥有部分state 的属性）</li>
<li>参数二：用户输入或者选择的数据</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>[&gt;] 安装vuex</p>
<ul>
<li><code v-pre>npm i vuex</code>安装的是 vuex4 版本，该版本只能用在 vue3，vue2 只能用 vuex3 版本 <code v-pre>npm i vuex@3</code>
<ul>
<li>vue3 ---&gt; vuex4   <code v-pre>npm i vuex</code></li>
<li>vue2 ---&gt; vuex3   <code v-pre>npm i vuex@3</code>
<br></li>
</ul>
</li>
</ul>
</li>
<li>
<p>[&gt;] 创建store文件</p>
<ul>
<li>
<p>src/store/index.js （先要有 vuex，再创建 <code v-pre>store</code>实例）</p>
</li>
<li>
<p><code v-pre>store</code>实例对象是由<code v-pre>Vuex.store({})</code>构造出来的，构造之后，在vc,vm上就会出现<code v-pre>$store</code>属性。</p>
</li>
<li>
<p><code v-pre>$store</code>属性中有<code v-pre>dispatch</code>，<code v-pre>commit</code>方法</p>
</li>
<li>
<p>实例：构建<code v-pre>index.js</code></p>
<div class="language-js line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="js" data-title="js" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//引入vue</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Vue</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'vue'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//引入vuex</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Vuex</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'vuex'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">use</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Vuex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//用于响应组件中的动作</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> actions</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//用于操作数据</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> mutations</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//用于储存数据</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> state</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//数据进行运算加工（类似于 data 中的 computed）</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> getter</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">	return</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> //必须用 return 返回数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//创建并导出store</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> Vuex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Store</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  actions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mutations</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">state</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
<li>
<p>实例：在<code v-pre>main.js</code>中引入 store</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//引入store</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> store</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> './store'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//创建vm</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  render</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> h</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =></span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  store</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  beforeCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">prototype</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$bus</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> this</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$mount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#app'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<blockquote>
<ul>
<li>[!] 一个注意点:
脚手架在解析代码时，会优先解析 import (引入的文件)，所以在引入 store 和 <code v-pre>Vue.use(store)</code> 时要注意这个情况，那最终的解决办法就是直接在组件 store 里面引入 Vue.js 以及 Vuex 并注册好 Vuex。</li>
</ul>
</blockquote>
<h3 id="_3-10-2-vuex-的使用" tabindex="-1"><a class="header-anchor" href="#_3-10-2-vuex-的使用"><span>3.10.2 Vuex 的使用</span></a></h3>
<ol>
<li>
<p>在组件中使用 <code v-pre>dispatch</code> 给 <strong>actions</strong></p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">$store</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dispatch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"jia"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>在 store 中配置 actions , actions 主要写业务逻辑，将数据 commit 给 mutations 进行操作</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> actions</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  //context上下文，有commit，dispatch,state属性</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  jia</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">commit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'JIA'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  jian</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sum</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> %</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">        context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">commmit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'JIA'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>如果没有网络请求或业务逻辑，可以直接越过actions，直接编写 commit</p>
</blockquote>
</li>
<li>
<p>mutations主要进行数据加工
mutations会收到两个参数，第一个是state，第二个就是传递过来的数据</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> mutations</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  JIA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sum</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  JIAN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sum</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>state 就是将一些共享的数据存放进来，类似与组件中的 data
在组件模板中想使用 state 中数据 <code v-pre>$store.state.sum</code></p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//用于储存数据</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> state</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  sum</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>getters 就是将 state 中的数据进行运算加工，类似与组件中的 computed
在组件中读取 <code v-pre>$store.getters.bigData</code></p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> getters</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  bigData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">     return</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sum</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">*</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  //必须要用return语句，收到的参数就是state</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_3-10-3-数据映射" tabindex="-1"><a class="header-anchor" href="#_3-10-3-数据映射"><span>3.10.3 数据映射</span></a></h3>
<p>api：mapState ， mapGetter ， mapActions ， mapMutations</p>
<blockquote>
<p>首先要在组件中引入mapState <code v-pre>import {mapState} from 'vuex'</code></p>
</blockquote>
<ul>
<li>
<p>[&gt;] mapState方法：用于帮助我们映射<code v-pre>state</code>中的数据为计算属性</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">computed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //借助mapState生成计算属性：sum、school、subject（对象写法）</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">     ...</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mapState</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sum</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'sum'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">school</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'school'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">subject</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'subject'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">         </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //借助mapState生成计算属性：sum、school、subject（数组写法）</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">    ...</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mapState</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">([</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'sum'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'school'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'subject'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>[&gt;] <strong>mapGetters方法：</strong>用于帮助我们映射<code v-pre>getters</code>中的数据为计算属性</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">computed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //借助mapGetters生成计算属性：bigSum（对象写法）</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">    ...</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mapGetters</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">bigSum</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'bigSum'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //借助mapGetters生成计算属性：bigSum（数组写法）</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">    ...</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mapGetters</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">([</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'bigSum'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">])</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>[&gt;] <strong>mapActions方法：</strong>用于帮助我们生成与<code v-pre>actions</code>对话的方法，即：包含<code v-pre>$store.dispatch(xxx)</code>的函数</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">methods</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //靠mapActions生成：incrementOdd、incrementWait（对象形式）</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">    ...</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mapActions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">incrementOdd</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'jiaOdd'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">incrementWait</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'jiaWait'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //靠mapActions生成：incrementOdd、incrementWait（数组形式）</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">    ...</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mapActions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">([</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'jiaOdd'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'jiaWait'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">])</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>[&gt;] <strong>mapMutations方法：</strong>用于帮助我们生成与<code v-pre>mutations</code>对话的方法，即：包含<code v-pre>$store.commit(xxx)</code>的函数</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">methods</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //靠mapActions生成：increment、decrement（对象形式）</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">    ...</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mapMutations</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">increment</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'JIA'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">decrement</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'JIAN'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //靠mapMutations生成：JIA、JIAN（对象形式）</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">    ...</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mapMutations</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">([</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'JIA'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'JIAN'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ul>
<li>[!] 备注：
mapActions 与 mapMutations 使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。</li>
</ul>
</blockquote>
</li>
</ul>
<h3 id="_3-10-4-vuex-的模块化" tabindex="-1"><a class="header-anchor" href="#_3-10-4-vuex-的模块化"><span>3.10.4 Vuex 的模块化</span></a></h3>
<p>让代码更好维护，让数据分类更加明确</p>
<ol>
<li>拆分Vuex的入口文件<div class="language-js line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="js" data-title="js" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//该文件用于创建Vuex中最为核心的store</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Vue</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'vue'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//引入Vuex</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Vuex</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'vuex'</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> countOptions</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> './count'</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> personOptions</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> './person'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//应用Vuex插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">use</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Vuex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//创建并暴露store</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> Vuex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Store</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	modules</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		countAbout</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">countOptions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		personAbout</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">personOptions</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ol>
<p>![[Pasted image 20240805182918.png|163]]</p>
<ol>
<li>
<p>数据组件化</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//求和相关的配置</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	namespaced</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	actions</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{},</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	mutations</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{},</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	state</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{},</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	getters</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>数据读取配置</p>
<ol>
<li>map方法<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">computed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//借助mapState生成计算属性，从state中读取数据。（数组写法）</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">	...</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mapState</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'countAbout'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'sum'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'school'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'subject'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]),</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">	...</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mapState</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'personAbout'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'personList'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]),</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//借助mapGetters生成计算属性，从getters中读取数据。（数组写法）</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">	...</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mapGetters</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'countAbout'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'bigSum'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">])</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">methods</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">	...</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mapMutations</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'countAbout'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">increment</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'JIA'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">decrement</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'JIAN'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}),</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">	...</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mapActions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'countAbout'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">incrementOdd</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'jiaOdd'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">incrementWait</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'jiaWait'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>手动方法<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">computed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	personList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">		return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">$store</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">personAbout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">personList</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">methods</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">		const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> personObj</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">nanoid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(),</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">		this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">$store</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">commit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'personAbout/ADD_PERSON'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">personObj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">		this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ''</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</li>
</ol>
<h2 id="_3-11-vue-router" tabindex="-1"><a class="header-anchor" href="#_3-11-vue-router"><span>3.11 Vue Router</span></a></h2>
<blockquote>
<p>一个路由就是一个对应关系，key为路径，value为组件
用来实现单页面应用，每条路径对应一个页面</p>
</blockquote>
<h3 id="_3-11-1-前端路由-和-后端路由" tabindex="-1"><a class="header-anchor" href="#_3-11-1-前端路由-和-后端路由"><span>3.11.1 前端路由 和 后端路由</span></a></h3>
<ul>
<li>
<p><strong>后端路由</strong> 概念：根据不同的用户URL请求，返回不同的内容 本质：<strong>URL请求地址</strong>与<strong>服务器资源</strong>之间的对应关系
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7003de84fdb4beab97303e053b50cf3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt="在这里插入图片描述|575" loading="lazy"></p>
</li>
<li>
<p><strong>前端路由</strong> 概念：根据不同的用户事件，显示不同的页面内容 本质：<strong>用户事件</strong>与<strong>事件处理函数</strong>之间的对应关系
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ceff65c9281743ed8e3125a5fba4206d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt="在这里插入图片描述|575" loading="lazy"></p>
</li>
</ul>
<h3 id="_3-11-2-基本使用" tabindex="-1"><a class="header-anchor" href="#_3-11-2-基本使用"><span>3.11.2 基本使用</span></a></h3>
<ul>
<li>[&gt;] 环境搭建</li>
</ul>
<ol>
<li>安装vue-router <code v-pre>npm i vue-router@3.5.2 -S</code> （vue2版本只能使用 vue-router3）</li>
<li>创建 src/router 文件夹，创建 index.js 文件并配置。<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 该文件专门用于创建整个应用的路由器</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> VueRouter</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'vue-router'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//引入组件</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> About</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '../components/About'</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Home</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '../components/Home'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//创建并暴露一个路由器</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> VueRouter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	routes</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">path</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/about'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">component</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">About</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>在main.js 中引入 VueRouter 插件并注册，然后引入路由，挂载 VueRouter<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//引入VueRouter</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> VueRouter</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'vue-router'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//引入路由器</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> router</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> './router'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//注册插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">use</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">VueRouter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//创建vm</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#app'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	render</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> h</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =></span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">),</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	router</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">router</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//挂载路由</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<ul>
<li>[&gt;] 使用路由</li>
</ul>
<ol>
<li>
<p>修改 a 标签（active-class可配置高亮样式）</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> active-class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"active"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/home'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>首页&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-link</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>指定组件显示的位置</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<ul>
<li>[!] 注意事项
<ol>
<li>路由组件和普通组件分别放在 pages 文件夹和 components 文件夹。</li>
<li>切换路由时，<strong>原来</strong>的路由组件<strong>会被销毁</strong>，当再次切换回来时会<strong>重新挂载</strong>。</li>
<li>每个路由组件上会有两个新的属性，$route 和 $router ，route 存放的是路由信息包括路由路径等等，router 是路由器且整个应用自有一个路由器。</li>
</ol>
</li>
</ul>
<h3 id="_3-11-3-多级路由" tabindex="-1"><a class="header-anchor" href="#_3-11-3-多级路由"><span>3.11.3 多级路由</span></a></h3>
<ol>
<li>
<p>路由器的配置</p>
<div class="language-js line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="js" data-title="js" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 该文件专门用于创建整个应用的路由器</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> VueRouter</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'vue-router'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//引入组件</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Message</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '../pages/Message'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//创建并暴露一个路由器</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> VueRouter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	routes</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		{		</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">path</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/home'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			component</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Home</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">			children</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">				{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">path</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'news'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">component</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">News</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,},</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//在path中不需要 /</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">				{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">path</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'message'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">component</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Message</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,}]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><blockquote>
<ul>
<li>[!] 在path中不需要 /</li>
</ul>
</blockquote>
</li>
<li>
<p>a 标签配置</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/home/message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Message&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-link</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_3-11-4-路由的query-参数" tabindex="-1"><a class="header-anchor" href="#_3-11-4-路由的query-参数"><span>3.11.4 路由的query 参数</span></a></h3>
<ol>
<li>组件传递参数<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 跳转路由并携带query参数，to的字符串写法 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"`/home/message/detail?id=${m.id}&#x26;title=${m.title}`"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{m.title}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-link</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 跳转路由并携带query参数，to的对象写法 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	path:'/home/message/detail',</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	query:{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">		id:m.id,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">		title:m.title</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{m.title}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-link</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>组件接受参数
<code v-pre>$route.query.id</code>
<code v-pre>$route.query.title</code></li>
</ol>
<h3 id="_3-11-5-命名路由" tabindex="-1"><a class="header-anchor" href="#_3-11-5-命名路由"><span>3.11.5 命名路由</span></a></h3>
<p>作用：可以简化路由的跳转。</p>
<ol>
<li>
<p>路由器中配置 name 配置项</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'message'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Message</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">children</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'xiangqing'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		path</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'detail'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		component</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Detail</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>组件中路径使用</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	name:'xiangqin',</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	query:{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">		id:m.id,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">		title:m.title</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{m.title}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-link</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_3-11-6-路由的-params-参数" tabindex="-1"><a class="header-anchor" href="#_3-11-6-路由的-params-参数"><span>3.11.6 路由的 params 参数</span></a></h3>
<ol>
<li>路由器配置<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'message'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Message</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">children</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'xiangqing'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	path</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'detail/:id/:title'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//必须使用：占位符声明接受参数</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	component</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Detail</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ul>
<li>[!] 注意：
在使用params 传递参数时，路由器的路径配置要使用<code v-pre>:参数名字</code>进行占位</li>
</ul>
</blockquote>
</li>
<li>组件传递参数<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 跳转路由并携带params参数，to的字符串写法 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"`/home/message/detail/${m.id}/${m.title}`"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{m.title}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-link</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	&#x3C;!-- 跳转路由并携带params参数，to的对象写法 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> :to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">		name:'xiangqing', //必须使用name</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">		params:{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">			id:m.id,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">			title:m.title</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">		}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>{{m.title}}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-link</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ul>
<li>[!] 注意：
在使用params 传递参数时，组件to 的对象写法路径的必须使用 name</li>
</ul>
</blockquote>
</li>
<li>组件接受参数
<code v-pre>$route.params.id</code>
<code v-pre>$route.params.title</code></li>
</ol>
<h3 id="_3-11-7-路由的props配置" tabindex="-1"><a class="header-anchor" href="#_3-11-7-路由的props配置"><span>3.11.7 路由的props配置</span></a></h3>
<p>​作用：让路由组件更方便的收到参数</p>
<div class="language-js line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="js" data-title="js" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'message'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Message</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">children</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'xiangqing'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		path</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'detail'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		component</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Detail</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		//props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		props</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">b</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'hello'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		//props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">		props</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		//props的第三种写法，值为函数</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		props</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">$route</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			return {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">				id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">$route</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">query</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">				title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">$route</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">query</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E06C75">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">				a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">				b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'hello'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="_3-11-8-router-link-的replace属性" tabindex="-1"><a class="header-anchor" href="#_3-11-8-router-link-的replace属性"><span>3.11.8 <code v-pre>&lt;router-link&gt;</code>的replace属性</span></a></h3>
<ol>
<li>作用：控制路由跳转时操作浏览器历史记录的模式</li>
<li>浏览器的历史记录有两种写入方式：分别为<code v-pre>push</code>和<code v-pre>replace</code>，<code v-pre>push</code>是追加历史记录，<code v-pre>replace</code>是替换当前记录。路由跳转时候默认为<code v-pre>push</code></li>
<li>如何开启<code v-pre>replace</code>模式：<code v-pre>&lt;router-link replace .......&gt;News&lt;/router-link&gt;</code></li>
</ol>
<h3 id="_3-11-9-9-编程式路由导航" tabindex="-1"><a class="header-anchor" href="#_3-11-9-9-编程式路由导航"><span>3.11.9 9.编程式路由导航</span></a></h3>
<ul>
<li>[&gt;] 声明式导航
<ul>
<li>​普通网页中点击 <code v-pre>&lt;a&gt;</code> 链接，在 vue 中点击都属于声明式导航
<br></li>
</ul>
</li>
<li>[&gt;] 编程式导航
<ul>
<li>​调用Api实现页面hash地址的变化，to可以怎么写，push()括号内就可以怎么写</li>
<li>如通过JavaScript的API实现导航的方式 如<code v-pre>location.herf</code>
<br></li>
</ul>
</li>
<li>[&gt;] api:
<ol>
<li><code v-pre>this.$router.push('hash地址')</code> 跳转到指定位置，并增加一条历史记录，可以前进和回退。</li>
<li><code v-pre>this.$router.replace('hash地址')</code> 跳转到指定位置，并且代替原来页面，不能回退。</li>
<li><code v-pre>this.$router.back()</code> 后退一步</li>
<li><code v-pre>this.$router.forward()</code> 前进一步</li>
<li><code v-pre>this.$router.go()</code> 可前进也可后退</li>
</ol>
</li>
</ul>
<h3 id="_3-11-10-缓存路由组件" tabindex="-1"><a class="header-anchor" href="#_3-11-10-缓存路由组件"><span>3.11.10 缓存路由组件</span></a></h3>
<ol>
<li>为了将不展示的组件数据不丢失（路由一切换，默认组件自动销毁）</li>
<li><code v-pre>include=“组件名”</code> 代表要缓存的组件是xxx。</li>
<li><code v-pre>:include=[“组件名”,“组件名”]</code> 缓存多个组件。<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">keep-alive</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> include</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Home"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">router-view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">keep-alive</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
 <keep-alive include="Home">
        <router-view></router-view>
 </keep-alive>
<blockquote>
<ul>
<li>[!]  注意：
include 要写组件名</li>
</ul>
</blockquote>
<h3 id="_3-11-11-路由中独有的声明周期" tabindex="-1"><a class="header-anchor" href="#_3-11-11-路由中独有的声明周期"><span>3.11.11 路由中独有的声明周期</span></a></h3>
<ol>
<li>activated(){} 组件被激活时调用</li>
<li>deactivated(){} 组件失活时调用</li>
</ol>
<h3 id="_3-11-12-路由守卫" tabindex="-1"><a class="header-anchor" href="#_3-11-12-路由守卫"><span>3.11.12 路由守卫</span></a></h3>
<p>就是为了控制路由的访问权限，满足一些条件才能进入页面</p>
<ul>
<li>
<p>[&gt;] 全局前置守卫 <code v-pre>router.beforeEach((to,from,next)=&gt;{})</code></p>
</li>
<li>
<p>参数：</p>
<ol>
<li>to 是将要访问的路由的信息 to.path 是hash地址</li>
<li>from 是将要离开的路由的信息</li>
<li>next( ) 是放行 next(‘/login’) 跳转到登录页面</li>
</ol>
</li>
<li isAuth:true="">
<p>在进行权限校验的路由里配置 meta:</p>
<ul>
<li>meta route上的一个路由元容器，可以存放一些鉴权信息和页面tittle</li>
</ul>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">router</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">beforeEach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'前置路由守卫'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">meta</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">isAuth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){ </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//判断是否需要鉴权</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">		if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">localStorage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getItem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'school'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'atguigu'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">			next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">			alert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'学校名不对，无权限查看！'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>[&gt;] 全局后置守卫  <code v-pre>router.afterEach((to,from)=&gt;{})</code></p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">router</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">afterEach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'后置路由守卫'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">title</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">meta</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">title</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ||</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '硅谷系统'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>[&gt;] 独享守卫  <code v-pre>beforeEnter：(to,from,next) =&gt; {}</code></p>
<ul>
<li>是某个路由独享的，配置在该路由下</li>
</ul>
<div class="language-js line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="js" data-title="js" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'xinwen'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'news'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">News</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">meta</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">isAuth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'新闻'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">beforeEnter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">	console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'独享路由守卫'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">meta</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">isAuth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){ </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//判断是否需要鉴权</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">		if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">localStorage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getItem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'school'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'atguigu'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">			next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">			alert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'学校名不对，无权限查看！'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
<li>
<p>[&gt;] 组件内路由守卫</p>
<ul>
<li>路由进入该组件时进行一些判断
<ol>
<li>进入守卫 <code v-pre>beforeRouteEnter(to,from,next){}</code></li>
<li>离开守卫 <code v-pre>beforeRouteLeave (to, from, next) {}</code></li>
</ol>
</li>
</ul>
<div class="language-js line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="js" data-title="js" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//通过路由规则，进入该组件时被调用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		beforeRouteEnter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">			console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'About--beforeRouteEnter'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">			if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">meta</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">isAuth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){ </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//判断是否需要鉴权</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">				if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">localStorage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getItem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'school'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'atguigu'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">					next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">				}</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">					alert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'学校名不对，无权限查看！'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">				}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			}</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">				next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">			}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		},</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		//通过路由规则，离开该组件时被调用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		beforeRouteLeave</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">			console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'About--beforeRouteLeave'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">			next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
</ul>
<h3 id="_3-11-13-路由器的两种工作模式" tabindex="-1"><a class="header-anchor" href="#_3-11-13-路由器的两种工作模式"><span>3.11.13 路由器的两种工作模式</span></a></h3>
<ol>
<li>对于一个url来说，什么是hash值？—— <code v-pre>#</code> 及其后面的内容就是hash值。</li>
<li>hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器。</li>
<li>hash模式：
<ol>
<li>地址中永远带着#号，不美观 。</li>
<li>若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。</li>
<li>兼容性较好。</li>
</ol>
</li>
<li>history模式：
<ol>
<li>地址干净，美观 。</li>
<li>兼容性和hash模式相比略差。</li>
<li>应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。</li>
<li>解决此问题：
<ol>
<li>可以使用 node.js 中的 connect-history-api-fallback 中间件。</li>
<li>或者使用nigex代理。</li>
</ol>
</li>
</ol>
</li>
</ol>
</div></template>


