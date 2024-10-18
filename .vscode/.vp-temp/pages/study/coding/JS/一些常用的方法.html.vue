<template><div><p>常用的JS方法</p>
<!-- more -->
<h1 id="_1-对象的方法-object-method" tabindex="-1"><a class="header-anchor" href="#_1-对象的方法-object-method"><span>1 对象的方法（object method）</span></a></h1>
<h1 id="_2-数组的方法-array-method" tabindex="-1"><a class="header-anchor" href="#_2-数组的方法-array-method"><span>2 数组的方法(Array Method)</span></a></h1>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># Array.Prototype.toString()</span></span>
<span class="line"><span>可以将数组转换成字符串</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const a = [1,2,3,4,5]</span></span>
<span class="line"><span>const a = [[[1,[2,3],4],5]]//对于嵌套数组依然可用</span></span>
<span class="line"><span>console.log(a.toString.call(a));//"1,2,3,4,5"</span></span>
<span class="line"><span>console.log(a.toString(a));//"1,2,3,4,5"</span></span>
<span class="line"><span>console.log(Object.prototype.toString.call(a));//[object Array]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># Array.join()</span></span>
<span class="line"><span>    - 将一个数组中的元素连接为一个字符串</span></span>
<span class="line"><span>    - 参数:</span></span>
<span class="line"><span>        指定一个字符串作为连接符</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const a1 = [1,[2,3],[4,5]]</span></span>
<span class="line"><span>console.log(a1.join("/"));//1/2,3/4,5</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>str.split()</span></span>
<span class="line"><span>	- 用来将一个字符串拆分为一个数组</span></span>
<span class="line"><span>	- 参数</span></span>
<span class="line"><span>		- 传分隔符，将字符串拼接成一个数组</span></span>
<span class="line"><span>		- 传字符串内的数字或元素，以当前元素为分割线拼接成2个数组</span></span>
<span class="line"><span>		- 传空字符串，以每一个元素为单位，拼接成数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const f = "12345"</span></span>
<span class="line"><span>console.log(f.split("+"));//['12345']</span></span>
<span class="line"><span> console.log(f.split("2"))//['1', '345']</span></span>
<span class="line"><span> console.log(f.split(""))//['1', '2', '3', '4', '5']</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" data-title="" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># push( )  破坏性方法</span></span>
<span class="line"><span>    - 向数组的末尾添加一个或多个元素</span></span>
<span class="line"><span>    - 返回值是新的数组的长度</span></span>
<span class="line"><span>    - 会破坏原数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const a = [1,2,3,4,5]</span></span>
<span class="line"><span>console.log(a.push(6,5,8));//8</span></span>
<span class="line"><span>console.log(a);//[1, 2, 3, 4, 5, 6, 5, 8]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># pop( )  破坏性方法</span></span>
<span class="line"><span>    - 从数组中删除最后一个元素，</span></span>
<span class="line"><span>    - 并返回该元素的值。</span></span>
<span class="line"><span>    - 此方法会更改数组的长度。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const a = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>console.log(a.pop());//5</span></span>
<span class="line"><span>console.log(a);//[1, 2, 3, 4]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" data-title="" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># unshift() 破坏性方法</span></span>
<span class="line"><span>    - 向数组的开头添加一个或多个元素</span></span>
<span class="line"><span>	- 返回值是新的数组的长度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const a = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>console.log(a.unshift(5));//6</span></span>
<span class="line"><span>console.log(a);//[5, 1, 2, 3, 4, 5]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># shift() 破坏性方法</span></span>
<span class="line"><span>    - 删除并返回数组的第一个元素</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const a = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>console.log(a.shift());//1</span></span>
<span class="line"><span>console.log(a);//[2, 3, 4, 5]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" data-title="" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># Array.slice()</span></span>
<span class="line"><span>    - 用来截取数组(非破坏性方法)</span></span>
<span class="line"><span>    - 参数:</span></span>
<span class="line"><span>        1. 截取的起始位置(包括该位置)</span></span>
<span class="line"><span>        2. 截取的结束位置(不包括该位置)</span></span>
<span class="line"><span>            1. 第二个参数可以不写，如果省略直接截取到结尾</span></span>
<span class="line"><span>            2. 索引可以为负数</span></span>
<span class="line"><span>        3. 如果不传参数可以对数组进行浅复制</span></span>
<span class="line"><span>    - 返回值是一个新的数组，包含了截取的内容</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const a = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>console.log(a.slice(0,4));//[1, 2, 3, 4]</span></span>
<span class="line"><span>console.log(a.slice());//[1, 2, 3, 4, 5]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># splice( )  破坏性方法</span></span>
<span class="line"><span>    - 可以删除、插入、替换数组中的元素</span></span>
<span class="line"><span>    - 参数:</span></span>
<span class="line"><span>        1.删除的起始位置</span></span>
<span class="line"><span>        2.删除的数量</span></span>
<span class="line"><span>        3. 要插入的元素</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - 返回值:</span></span>
<span class="line"><span>        - 返回被删除的元素 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>const a = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>1. 删除元素</span></span>
<span class="line"><span>console.log(a.splice(1,2));//[2, 3]</span></span>
<span class="line"><span>console.log(a)//[1, 4, 5]</span></span>
<span class="line"><span>2. 删除并替换</span></span>
<span class="line"><span>console.log(a.splice(1,1,8))//[2]</span></span>
<span class="line"><span>console.log(a)//[1, 8, 3, 4, 5]</span></span>
<span class="line"><span>3. 相当于unshift</span></span>
<span class="line"><span>console.log(a.splice(0,0,8))//[]</span></span>
<span class="line"><span>console.log(a)//[8, 1, 2, 3, 4, 5]</span></span>
<span class="line"><span>4.相当于push</span></span>
<span class="line"><span>console.log(a.splice(a.length,0,8))//[]</span></span>
<span class="line"><span>console.log(a);//[1, 2, 3, 4, 5, 8]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># toSpliced( )</span></span>
<span class="line"><span>	- 用法和splice一样，但是其不会破坏原数组，会返回一个包含删除元素的新数组</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#sort( )    破坏性方法</span></span>
<span class="line"><span>	- 默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arr = [1,5,6,4,2,8,9,3,7,,80]</span></span>
<span class="line"><span>const arr1 = ["a","e","k","d",,"g"]</span></span>
<span class="line"><span>1. 稀疏数组空白处总放在最后</span></span>
<span class="line"><span>console.log(arr1.sort());//['a', 'd', 'e', 'g', 'k', 空白]</span></span>
<span class="line"><span>console.log(arr.sort());//[1, 2, 3, 4, 5, 6, 7, 8, 80, 9, 空白]</span></span>
<span class="line"><span>console.log(arr.sort((a,b)=>(b-a)));//[80, 9, 8, 7, 6, 5, 4, 3, 2, 1, 空白]</span></span>
<span class="line"><span>console.log(arr.sort((a,b)=>(a-b)));//[1, 2, 3, 4, 5, 6, 7, 8, 9, 80, 空白]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#toSorted()  </span></span>
<span class="line"><span>	- 用法和sort一样，但不会破坏原数组</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># forEach(  )</span></span>
<span class="line"><span>	-语法</span></span>
<span class="line"><span>		forEach(callbackFn)</span></span>
<span class="line"><span>			- element   数组中正在处理的当前元素。</span></span>
<span class="line"><span>			- index 数组中正在处理的当前元素的索引。</span></span>
<span class="line"><span>			- array  调用了 forEach() 的数组本身。</span></span>
<span class="line"><span>		forEach(callbackFn, thisArg)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># map()</span></span>
<span class="line"><span>    - 根据当前数组生成一个新数组</span></span>
<span class="line"><span>    - 需要一个回调函数作为参数，</span></span>
<span class="line"><span>        回调函数的返回值会成为新数组中的元素</span></span>
<span class="line"><span>        - 回调函数中有三个参数</span></span>
<span class="line"><span>	        - element   数组中正在处理的当前元素。</span></span>
<span class="line"><span>			- index 数组中正在处理的当前元素的索引。</span></span>
<span class="line"><span>			- array  调用了 forEach() 的数组本身。</span></span>
<span class="line"><span>    - 非破坏性方法不会影响原数组</span></span>
<span class="line"><span>    - 返回值是一个新数组</span></span>
<span class="line"><span>const a = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>console.log(a.map((a)=>(a*2)));//[2, 4, 6, 8, 10]</span></span>
<span class="line"><span>console.log(a.map((a)=>(a%2)));//[1, 0, 1, 0, 1]</span></span>
<span class="line"><span>console.log(a.map((e)=>("&#x3C;li>"+e+"&#x3C;/li>")));//['&#x3C;li>1&#x3C;/li>', '&#x3C;li>2&#x3C;/li>', '&#x3C;li>3&#x3C;/li>', '&#x3C;li>4&#x3C;/li>', '&#x3C;li>5&#x3C;/li>']</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># Array.form()</span></span>
<span class="line"><span>Array.from(arrayLike, mapFn, thisArg)</span></span>
<span class="line"><span>	-  静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例。</span></span>
<span class="line"><span>	- 回调函数包含两个参数</span></span>
<span class="line"><span>		- element   数组中正在处理的当前元素。</span></span>
<span class="line"><span>		- index 数组中正在处理的当前元素的索引。</span></span>
<span class="line"><span>	- 返回值是一个新的数组</span></span>
<span class="line"><span>1.将字符串转换成数组</span></span>
<span class="line"><span>const string="我放好"</span></span>
<span class="line"><span>console.log(Array.from(string));//['我', '放', '好']</span></span>
<span class="line"><span>2.对数组进行浅复制</span></span>
<span class="line"><span>const a = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>console.log(Array.from(a));//[1, 2, 3, 4, 5]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># reduce(  )</span></span>
<span class="line"><span>	- reduce()方法从数组的第一项开始，逐个遍历到最后</span></span>
<span class="line"><span>	- 返回值是遍历结果</span></span>
<span class="line"><span>	- 参数是回调函数</span></span>
<span class="line"><span>		- 4个参数：前一个值、当前值、项的索引和数组对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const a = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>console.log(a.reduce((a,b)=>(a+b)));//15</span></span>
<span class="line"><span></span></span>
<span class="line"><span># reduceRight</span></span>
<span class="line"><span>	- 从数组的最后一项开始。向前遍历到第一项</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># find()和findIndex()</span></span>
<span class="line"><span>	- 都接受两个参数：一个回调函数，一个可选值用于指定回调函数内部的this</span></span>
<span class="line"><span>	- 该回调函数可接受3个参数：数组的某个元素、该元素对应的索引位置、数组本身，在回调函数第一次返回true时停止查找。</span></span>
<span class="line"><span>	- 二者的区别是：find()方法返回匹配的值，而findIndex()方法返回匹配位置的索引</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr = [1,2,3,4,5];</span></span>
<span class="line"><span>let num = arr.find(item => item > 1);</span></span>
<span class="line"><span>console.log(num) // 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr = [1,2,3,4,5];</span></span>
<span class="line"><span>let num = arr.findIndex(item => item > 1);</span></span>
<span class="line"><span>console.log(num) // 1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" data-title="" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># entries()、keys()和values()</span></span>
<span class="line"><span>	- es6新增</span></span>
<span class="line"><span>	- entries()、keys()和values()--用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历</span></span>
<span class="line"><span>	- 区别是keys()是对键名的遍历、values()是对键值的遍历、entries()是对键值对的遍历</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const a = ["a", "b", "c", "d", "f"]</span></span>
<span class="line"><span>for (let index of a.keys()) {</span></span>
<span class="line"><span>	console.log(index);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 0 1 2 3 4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (let elem of a.values()) {</span></span>
<span class="line"><span>	console.log(elem);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// a b c d f</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (let [index, elem] of a.entries()) {</span></span>
<span class="line"><span>	console.log(index, elem);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 0 'a'</span></span>
<span class="line"><span>// 1 'b'</span></span>
<span class="line"><span>// 2 'c'</span></span>
<span class="line"><span>// 3 'd'</span></span>
<span class="line"><span>// 4 'f'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" data-title="" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># indexOf()</span></span>
<span class="line"><span>	indexof方法可以在字符串和数组上使用。</span></span>
<span class="line"><span>	indexOf() 方法可返回某个指定的字符串值（基本数据类型）在字符串、数组中首次出现的位置。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>arr = ['mfg', '2017', '2016'];</span></span>
<span class="line"><span>console.log(arr.indexOf('mfg')); // 0</span></span>
<span class="line"><span>console.log(arr.indexOf('m')); // -1</span></span>
<span class="line"><span>console.log(arr.indexOf('2017'));// 1</span></span>
<span class="line"><span>console.log(arr.indexOf(2017)); // -1，这里不会做隐式类型转换</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arr = ['111', '222', '333', 'NaN']</span></span>
<span class="line"><span>console.log(arr.indexOf(NaN)) // -1</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># Array.indexOf()</span></span>
<span class="line"><span>    - 获取元素在数组中第一次出现的索引</span></span>
<span class="line"><span>    - 参数:</span></span>
<span class="line"><span>        1. 要查询的元素</span></span>
<span class="line"><span>        2. 查询的其实位置</span></span>
<span class="line"><span># Array.lastIndexOf()</span></span>
<span class="line"><span>    - 获取元素在数组中最后一次出现的位置</span></span>
<span class="line"><span>    - 返回值:</span></span>
<span class="line"><span>        找到了则返回元素的索引,</span></span>
<span class="line"><span>        没有找到返回-1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" data-title="" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># includes()</span></span>
<span class="line"><span>	- es7新增，用来判断一个数组、字符串是否包含一个指定的值（基本数据类型），</span></span>
<span class="line"><span>	- 使用===运算符来进行值比较，如果是返回true，否则false，</span></span>
<span class="line"><span>	- 参数有两个，第一个是(必填)需要查找的元素值，第二个是(可选)开始查找元素的位置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var arr1 = [22,3,31,12,58];</span></span>
<span class="line"><span>var includes = arr1.includes(31);</span></span>
<span class="line"><span>console.log(includes);   // true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var includes2 = arr1.includes(31,3);   // 从索引3开始查找31是否存在</span></span>
<span class="line"><span>console.log(includes2);   // false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var includes3 = arr1.includes(31,-1);   // 从最后一个开始向后查找31是否存在</span></span>
<span class="line"><span>console.log(includes3);   // false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arr = ['111', '222', '333', 'NaN']</span></span>
<span class="line"><span>console.log(arr.includes(NaN)) // true</span></span>
<span class="line"><span>console.log(arr.includes(111)) // false 不做隐式转换</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></div></template>


