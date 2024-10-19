---
title: 《HTML<废案>》
date: 2024-06-13
category:
- 前端
- HTML
tags:
- HTML
article: false


---

# HTML


## 1.1 认识HTML
### 1.1.1 HTML简述
* **HTML**是HyperText Mark-up Language 的首字母简写。 超文本标记语言。它是一种标识语言，非编程语言，不能使用逻辑运算，通过标签将网络上的文档格式进行统一，使分散的网络资源连接成一个逻辑整体。
	* **语言**: 人们用于交流的工具;
	* **超文本**: 就是指页面内可以包含图片、链接,甚至音乐、视频等非文字元素;
	* **标记**:种标记符,可以告诉浏览器如何显示其中的内容;
		* 比如: ``<b>求知讲堂web前端开发</b>`` ,这里的<b></b>就是一种标记符。
* 注意:
	1. HTML不是一种编程语言(因为HTML中没有变量,流程控制等) ,它是一种标记语言(Markup Language）
	2. 标记语言是一套标记标签(Markup Tag) ,例如: ``<b>求知讲堂web前端开发</b><i>前端开发</i> ``
	3. HTML使用标记标签来描述网页内容。
### 1.1.2 HTML的功能
* 展示在线的文档,其中包含了标题、文本、表格、列表以及照片等内容。
* 通过超链接检索在线的信息。
* 为获取远程服务而设计表单,可用于检索信息、定购产品等。
* 在文档中直接包含电子表格、视频剪辑、声音剪辑以及其他的一些应用。
### 1.1.3 HTML历史版本
* **HTML 1.0**：在1993年6月作为互联网工程 工作小组( IETF)工作草案发布(并非标准)。
* **HTML 2.0**：1995年11月作为RFC ]1866发布,在RFC 2854于2000年6月发布之后被宣布已经过时。
* **HTML 3.2**： 1996年1月 14日, W3C推荐标准。
* HTML 4.0：1997年12月18日, W3C推荐标准。
* HTML 4.01：1999年12月24日,是在HTML4.0基础上的微小改进W3C推荐标准。
* xHTML
* HTML 5.0：2014年10月28日 , W3C推荐标准。
### 1.1.4 HTML与互联网
* HTML
	HTML超文本标记语言( Hyper Text Markup Language )是一种制作万维网页面的标准语言，它是目前网络上应用最为广泛的语言,也是构成网页文档的主要语言。HTML文件是由HTML命令组成的描述性文本, HTML命令可以说明文字、图形、动画、声音、表格、链接等。
* 互联网
	互联网(英语: Internet) , 又称网际网络,或者音译因特网、英特网,是网络与网络之间所串连成的庞大网络,这些网络以一-组通用的协议相连,形成逻辑.上的单- -巨大国际网络。
### 1.1.5 动态网页与静态网页
* **静态网页**: HTML代码和内容书写完毕后,页面的内容和显示效果就基本上不会发生变化了一除非你修改页面代码。
* **动态网页**: 页面代码虽然没有变,但是显示的内容却是可以随着时间、环境或者数据库操作的结果而发生改变的。
* **注意**: 不要将动态网页和页面内容是否有动画效果混为- -谈,比如网页中幻灯片效果,文字滚动效果,如果内容本身没有变化,那么也属于静态网页。
### 1.1.6 什么是浏览器
* 浏览器是解释和执行HTML源码的工具。
* 五大主流浏览器: Internet Explorer (IE) , FireFox(火狐) , Chrome (谷歌) , Opera (欧朋) , Safari(苹果)。
### 1.1.7 浏览器内核
1. **Trident内核**:代表产品IE,又称为IE内核。是微软开发的一种排版引擎。使用Trident渲染引擎的浏览器有:IE、遨游、世界之窗浏览器、腾讯TT等等。
2. **Gecko内核**:代表产品Mozilla FirefoxGecko是一套开源的, C+ +编写的排版引擎。使用它最著名的浏览器有Firefox,Netscape 6至9。
3. **WebKit内核**:代表产品有Safari ,主要用于Mac OS系统。使用它的浏览器是Safari和谷歌浏览器Chrome.
4. **Presto内核**:代表产品OperaPresto是由Opera Software开发的浏览器排版引擎,它是世界公认最快的渲染速度的引擎。在13年之后, Opera宣布加入谷歌阵营,弃用了。
5. **Blink内核**:由Google和Opera Software开发的浏览器排版引擎, 2013年4月发布。现在Chrome和Opera内核是Blink。

---
## 1.2 开发工具
1. **DCloud HBuilder**
	HBuilder是DCloud (数字天堂)推出的一款支持HTML5的Web开发IDE。 HBuilder的最大优势 ,就是其拥有完整的语法提示和代码输入法,可以在编写HTML、CSS. JavaScript时更加快速便捷 ,同时默认添加了emmet语法插件,前端程序员在编写HTML代码时可以更加暴力。
![[Pasted image 20230503213210.png]]

2. **Sublime Text 3**
	Sublime Text是-一个代码编辑器也是HTML和散文先进的文本编辑器。Sublime Text具有漂亮的用户界面和强大的功能,例如代码缩略图, Python的插件,代码段等。还可自定义键绑定、菜单和工具栏。
	Sublime Text的主要功能包括:拼写检查,书签,完整的Python API，Goto 功能,即时项目切换,多选择,多窗口等等。Sublime Text是-个跨平台的编辑器,同时支持Windows、Linux、 Mac OS X等操作系统。
![[Pasted image 20230503214044.png]]

3. **Visual Studio Code**
	Visual Studio Code (简称VS Code / VSC)是由微软推出的一款免费开源的现代化轻量级代码编辑器。支持语法高亮、智能代码补全、自定义热键、括号匹配、代码片段、代码对比Diff、GIT 等特性,并且有强大的插件库,可以针对不同的开发需求进行对应的插件配置。
![[Pasted image 20230503214159.png]]

4. **WebStorm (推荐使用**)
	WebStorm是JetBrains推出的一款强大的HTML 5编辑工具,拥有丰富的代码快速编辑,可以智能的补全代码、代码格式化、html提示以及代码检查和快速修复等,支持不同浏览器的提示,同时也是一款JavaScript 开发工具,拥有即时编辑( chrome)、自动完成、debugger. Zen Coding. HTML5 支持、jSLint. Less支持、

---
## 1.3 HTML 标签
### 1.3.1 HTML文档结构
1. HTML基本结构
```html
<html>
        <head><!--头部，主要完成网页的相关设置>
		    <meta charset="utf-8"> <!--汉字编码--><meta:元>
			link rel="shortcut icon" href="      "type="image/png"
			<title>文档标题</title>
			<link re1=" stylesheet" type="text/css" href=" style.css">
			<script type="text/javascript" src="index. js"></script>
			<sty1e>样式</style>
		</head>
		<body>
		</body><主体部分>
		<script>
		逻辑代码
		<script>
</html>
```

2. 解释
* ``< html > </html >`` **称为根元素，所有的网页元素都``< html > </html >``中**；
* ``<head ></head >``**元素用于定义文档的头部；**
	* 头部元素含有有: ``<meta>  <title>  <link> <script> <style> ``。
	* ``<title>`` 标签定义文档的标题。
	* ``<meta>`` 标签提供关于 HTML 文档的元数据。元数据不会显示在页面上，但是对于机器是可读的。典型的情况是，meta 元素被用于规定页面的描述、关键词、文档的作者、最后修改时间以及其他元数据。元数据可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。针对搜索引擎的关键词，一些搜索引擎会利用 meta 元素的 name 和 content 属性来索引您的页面。



```html
<meta charset="UTF-8"><!--网页编码-->
<meta name="Generator" content="EditPlus®"><!--用以说明生成工具-->
<meta name="Author" content="Harrison"><!--文档的作者-->
<meta name="Keywords" content="HTML,CSS,HTML5,CSS3,jQuery"><!--关键字-->
<meta name="Description" content="辛苦一阵子，幸福一辈子(学编程口号)"><!--描述-->
```

``<link> `` 元素引入外部样式。

```html
< head>
<meta charset="utf-8">
 <title>文档标题</title>
 <link rel="stylesheet" type="text/css" href="style.css">
 <script type="text/javascript" src="index.js"></script>
 <style></style>
 </ head>
```


```
<script>  元素该元素可以定义页面的脚本内容
<style>   标签用于为 HTML 文档定义样式信息
<body> </body> 元素用于定义网页显示的内容

一个HTML文件就是一个网页，HTML文件用编辑器打开显示的是文本，可以用文本的方式编辑它，如果用浏览器打开，浏览器会按照标签描述内容将文件渲染成网页。
```


### 1.3.2 基本标签
```
<div> 用来布局，层的意思。
	- div 标签。它是可用于组合其他HTML元素的容器。
	- 可用于对大的内容块设置样式属性;
	- 文档布局。它取代了使用表格定义布局的老式方法。

<div>
	abc
	<div>abc<div>(嵌套)
<div>
```

```HTML 
<hx>
	- <hx> 
		- HTML标题标签只用于标题。不要仅仅是为了生成粗体或大号的文本而使用标题。
		- html提供的标题有六种分别是``h1`` ``h2``  ``h3`` ``h4`` ``h5`` ``h6``
	- <h1>
		- 定义字号最大的标题,代表大标题,一般-一个页面只用一次。
	- <h6>
		- 定义字号最小的标题。
```

```html
<!--hx:标题，从1级到6级， 1级际题最大，6级最小，会自动加粗，有默认字号-->
<h1>前端</h1>
<h2>java</h2>
<h6>kais</h6>
```

```HTML 
<p>(表示段落，相当于回车)
	- p元素会自动在其前后创建一些空白。 浏览器会自动添加这些空间。

<br>
	- br 元素会在浏览器插入一个简单的换行符。

<hr>(生成一条水平线)
	 -hr标签定义HTML页面中的主题变化(比如话题的转移), 并显示为一条水平线。
	- <hr width="80%" align="center" color="red" height="2px">

<a>
	 <a>标签用来设置超文本链接。超链接可以是一个字, 一个词,或者一组词,也可以是一 幅图像,您可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。
	- href   属性 :描述了链接的目标URL ;

```

```
 
- blank   
	- 浏览器总在一个新打开、未命名的窗口中载入目标文档。  

- self   
	- 这个目标的值对所有没有指定目标的<a>标签是默认目标,它使得目标文档载入并显示在相同的框架或者窗口中作为源文档。
	- 这个目标是多余且不必要的,除非和文档标题<base>标签中的target属性一起使用。 

- parent  
	- 这个目标使得文档载入父窗口或者包含来超链接引用的框架的框架集。
	- 如果这个引用在窗口或者在顶级框架中,那么它与目标_ self 等效。               

- top     
	- 这个目标使得文档载入包含这个超链接的窗口，用_top 目标将会清除所有被包含的框架并将文档载入整个浏览器窗口。 
```

```
<img>
	<img>   标签用来申明图像的插入。
		- src属性：规定显示图像的 URL。URL为图片的相对路径或者绝对路径均可；
		- alt属性：规定图像的替代文本；
		- title属性：定义图片的标题，鼠标移动到图片出现。

<span>
	 <span>用来组合文档中的行内元素,可用作文本的容器。 
	 <span>元素没有固定的格式表现，当对它应用样式时，它才会产生视觉上的变化。


```


```

<ul>
	- <ul>标签作为无序列表，它是一个项目的列表，此列项目使用粗体圆点（典型的小黑圆圈）进行标记，无序列表始于 <ul>标签，每个列表项始于 <li> 标签。


<ul>
	<li>无序列表一</li>
	<li>无序列表二</li>
</ul>

<ol>
	- 有序列表 也是一列项目，列表项目使用数字进行标记。 
	- 有序列表始于 <ol> 标签，每个列表项始于<li> 标签。
<!--注释-->
注释标签 用于在源代码中插入注释。注释不会显示在浏览器中。 可使用注释对代码进行解释，这样做有助于在以后的时间对代码的修改，当编写了大量代码时尤其有用。

```

# 2 表格

[[表格练习（日历代码）]]

```HTML
表格（table）

border-collapse: collapse;   设置边框合并
rowspan="2"   纵向单元格合并
colspan="4"   横向合并单元格
<th></th>     可以用来设置表头的单元格，用来区别与tbody
<caption>     设置表格标题
text-align: center;  设置文本居中

<table>
    <!-- 表格头部 -->
    <thead>
        <!-- 表示一行 -->
        <tr>
            <!-- 表示一个单元格 -->
            <td></td>
        </tr>
        
    </thead>
    <!-- 表格主体 -->
    <tbody>
        <tr>
            <td></td>
        </tr>
    </tbody>
    <!-- 表格尾部 -->
    <tfoot>
        <tr>
            <td></td>
        </tr>
    </tfoot>

</table>

  <style>
        table{
            width:50%;
            border: 1px solid #bdf;
            <!-- 设置边框合并 -->
            border-collapse: collapse;
            
        }
        td{
            border: 1px solid #bdf;
        }
    </style>

			 <tr>
                <td>4</td>
                <td>唐僧</td>
                <td>男</td>
                <td>48</td>
                <!-- 纵向单元格合并 -->
                <td rowspan="2">长安<br>
                    东海</td>
            </tr>
            <tr>
                <td>5</td>
                <td>白龙马</td>
                <td>男</td>
                <td>4800</td>
                <!-- <td>东海</td> -->
            </tr>

			<tr>
                <td>汇总</td>
                <!-- 横向合并单元格 -->
                <td colspan="4">不是人</td>
            </tr>

``` 


# 3 表单（form）


## 3.1 `<form>`  元素的基本属性

`<from>`元素通常是用来采集用户输入信息的表单控件，也可以包含其他元素，如段落、标题等。但是，不能包含另一个`<from>`元素，即`<from>`元素不能嵌套。


| 属性             | 描述                                      |
| -------------- | --------------------------------------- |
| accept-charset | 规定在被提交表单中使用的字符集(默认:页面字符集)。              |
| action         | 规定向何处提交表单的地址(URL)(提交页面)。                |
| autocomplete   | 规定浏览器应该自动完成表单(默认:开启)。                   |
| enctype        | 规定被提交数据的编码(默认:url-encoded)。             |
| method         | 规定在提交表单时所用的HTTP方法(默认:GET)。              |
| name           | 规定识别表单的名称(对于DOM使用:document.forms.name)。 |
| novalidate     | 规定浏览器不验证表单。                             |
| target         | 规定 action 属性中地址的目标(默认 :_ self)。         |


> [!补充] 补充
> method属性-------- method属性指定浏览器向服务器发送表单数据时可以使用的两种方法。
> 
> get ：使用get方法向服务器传送表单数据时，表单数据被附加在`<from>`元素中有action指定的URL尾部。使用get请求的优点有可以被缓存、能保存在历史记录中、可以被收为书签。缺点有不能在敏感数据中使用、不够安全信息暴露在地址栏上、数据有长度限制（地址栏默认大小64kb）且数据只能读取不能修改。
> 
> post ：使用post方法向服务器传送表单数据时，表单数据在HTTP头部透明的传送。使用post请求的优点有比get安全，不会将信息暴露在地址栏上、对数据长度没有限制。缺点有不可以被缓存、不能保存在历史记录中、不可以被收为书签。


## 3.2 `<form>`表单的输入元素

### 3.2.1 `<input>`元素

```html
用户输入数据时使用的文本框、复选框、单选按钮等都是通过<input>元素创建的，<input>元素只能在<form>里面使用，用来创建表单的输入元素。
```


```html
表单
	- 在网页中 ，通过表单来将信息提交给服务器
	- action   用来指定表单要提交到哪

<form action="target.html">
        <div class="account">
            账号：<input type="text" name="user">
        </div>
        <div class="password">
            密码：<input type="password" name="user" placeholder="请输入密码">
        </div>
        
        <div class="gender">
            男<input type="radio" name="gender" value="male">
            女<input type="radio" name="gender" value="female">
        </div>
        
        <div class="hobby">
            爱好：
            <input type="checkbox" name="hobby" value="lq" >篮球
            <input type="checkbox" name="hobby" value="ppq" >乒乓球
        </div>
	    
	    你最喜欢的编程语言：
        <select name="language" id="">
            <option value="">java</option>
            <option value="">python</option>
            <option value="">JavaScript</option>
        </select>
        
        <div class="submit">
            <input type="submit" value="登录">
        </div>
</form>

input  提交按钮
	- value  指定文本框中的默认值 
	- name  
	- placeholder  定义了当表单控件没有值时在控件中显示的文本。
		- <input type="password" name="user" placeholder="请输入密码">
		
	- disabled     禁用表单项,不会被提交
		
	- readonly     表单项无法修改,但是可以提交
		
	- checked      默认选中项
		-<input type="checkbox" name="hobby" value="lq" checked >篮球
		
	- type   属性规定要显示的 <input> 元素的类型。
		- text     文本
			
		- password 密码
			
		- radio    单选框，可以用来设置性别选择  
			- 单选框是通过name属性来分组的,相同name属性的为一组
			
		- checkbox 多选框
			
		- button   没有默认行为的按钮，上面显示 value 属性的值，默认为空。
			- <input type="button" name="button" value="Button" />
			
		- reset    重置按钮
			- <input type="reset" name="button" value="reset" />
			
		- color    用于指定颜色的控件；在支持的浏览器中，激活时会打开取色器。
			- <input type="color" name="color"/>
			
		- date     输入年、月、日，不包括时间。
			- <input type="date" name="date"/>
			
		- file	   让用户选择文件的控件。
			- accept   使用 accept 属性规定控件能选择的文件类型。		
			- <input type="file" accept="image/*, text/*" name="file"/>

select  下拉列表
	- autofocus  属性规定下拉列表在页面加载时自动获得焦点。
	- multiple   属性规定可同时选择多个选项，不同操作系统多选方式不一样，
					- 对于 windows：按住 Ctrl 按钮来选择多个选项
					- 对于 Mac：按住 command 按钮来选择多个选项
	- 可选属性
		- option  设置下拉框选择内容
			- <option value="">java</option>
			
		- selected   默认选中下拉项
			- <option value="java" selected>java</option>


txetarea  文本域
	- <textarea name="111" id="111" cols="30" rows="10"></textarea>

label     
	- 将一个 <label> 和一个 <input> 元素匹配在一起，你需要给 <input> 一个 id 属性。
    - 而 <label> 需要一个 for 属性，其值和 <input> 的 id 一样。
	- 另外，你也可以将 <input> 直接放在 <label> 里，此时则不需要 for 和 id 属性，因为关联已隐含存在：
		- 1. <input type="radio" name="gender" value="male" id="male" > <label for="male">男</label>
		- 2. <label>
                <input type="radio" name="gender" value="male" id="male" > 男
            </label>

```













