---
number headings: auto, first-level 1, max 6, 1.1
title: 《HTML4》
category:
- 前端
- HTML
tags:
- HTML
- HTML4
article: false

date: 2024-06-24
order: 1
---
# HTML4
## 1 HTML 注释
1. 特点：注释的内容会被浏览器所忽略，不会呈现到页面中，但源代码中依然可见。
2. 作用：对代码进行解释和说明。
	```html
	<!-- 下面的文字只能滚动一次 -->
	<marquee loop="1">尚硅谷</marquee>
	
	<!-- 下面的文字可以无限滚动 -->
	<marquee>尚硅谷123</marquee>
	```
1. 注释不可以嵌套，以下这么写是错的（反例）。
	```html
	<!--
	我是一段注释
	<!-- 我是一段注释 -->
	-->
	```

## 2 HTML 文档声明

1. 作用：告诉浏览器当前网页的版本。

2. 写法：

	- 旧写法：要依网页所用的HTML版本而定，写法有很多。
	- **新写法**：一切都变得简单了！W3C 推荐使用 HTML 5 的写法。
	```html
	<!DOCTYPE html>
	或
	<!DOCTYPE HTML>
	或
	<!doctype html>
	```

3. 注意：文档声明，必须在网页的第一行，且在 `html` 标签的外侧。

## 3 HTML 字符编码
1. 计算机对数据的操作：
	- 存储时，对数据进行：编码。
	- 读取时，对数据进行：解码。
2. 编码、解码，会遵循一定的规范 —— 字符集。
3. 字符集有很多中，常见的有（了解）：
	```
	1. ASCII ：大写字母、小写字母、数字、一些符号，共计128个。
	2. ISO 8859-1 ：在 ASCII 基础上，扩充了一些希腊字符等，共计是256个。
	3. GB2312 ：继续扩充，收录了 6763 个常用汉字、682个字符。
	4. GBK ：收录了的汉字和符号达到 20000+ ，支持繁体中文。
	5. UTF-8 ：包含世界上所有语言的：所有文字与符号。—— 很常用。
	```

4. 使用原则是怎样的？
	- 原则1：存储时，务必采用合适的字符编码 。
		- 否则：无法存储，数据会丢失！
	- 原则2：存储时采用哪种方式编码 ，读取时就采用哪种方式解码。
		- 否则：数据错乱（乱码）！

5. 总结：
	- 平时编写代码时，统一采用 UTF-8 编码（最稳妥）。
	- 为了让浏览器在渲染 html 文件时，不犯错误，可以通过 meta 标签配合 charset 属性指定字符编码。
	```html
	<head>
		<meta charset="UTF-8"/>
	</head>
	```

## 4 HTML 设置语言
1. 主要作用：
	- 让浏览器显示对应的翻译提示。
	- 有利于搜索引擎优化。
2. 具体写法：

	```html
	<html lang="zh-CN">
	```

3. 扩展知识： lang 属性的编写规则（作为一个课外扩展知识，了解即可）。
	```
	1. 第一种写法（ 语言-国家/地区 ），例如：
		- zh-CN ：中文-中国大陆（简体中文）
		- zh-TW ：中文-中国台湾（繁体中文）
		- zh ：中文
		- en-US ：英语-美国
		- en-GB ：英语-英国
	
	2. 第二种写法（ 语言—具体种类）已不推荐使用，例如：
		- zh-Hans ：中文—简体
		- zh-Hant ：中文—繁体
	3. W3School 上的说明：《语言代码参考手册》、《国家/地区代码参考手册》
	4. W3C官网上的说明：《Language tags in HTML》
	```


## 5 HTML 4基础

### 5.1 排版标签

| 标签名     | 标签含义                    | 单 / 双 标签 |
| ------- | ----------------------- | -------- |
| h1 ~ h6 | 标题                      | 双        |
| p       | 段落                      | 双        |
| div     | 没有任何含义，用于整体布局（生活中的包装袋）。 | 双        |
> 1.  h1 最好写一个， h2~h6 能适当多写。
> 2. h1~h6 不能互相嵌套，例如： h1 标签中最好不要写 h2 标签了。
> 3. p 标签很特殊！它里面不能有： h1~h6 、 p 、 div 标签（暂时先这样记，后面会说规律）。

### 5.2 语义化标签

- 概念：用特定的标签，去表达特定的含义。
- 原则：标签的默认效果不重要（后期可以通过 CSS 随便控制效果），语义最重要！
- 举例：对于 h1 标签，效果是文字很大（不重要），语义是网页主要内容（很重要）。
- 优势：
	- 代码结构清晰可读性强。
	- 有利于 SEO（搜索引擎优化）。
	- 方便设备解析（如屏幕阅读器、盲人阅读器等）。

### 5.3 块级元素 与 行内元素
1. 块级元素：独占一行（排版标签都是块级元素）。

2. 行内元素：不独占一行（目前只学了： input ，稍后会学习更多）。

3. 使用原则：
> [!NOTE]
> 1. 块级元素 中能写 行内元素 和 块级元素（简单记：块级元素中几乎什么都能写）。
> 2. 行内元素 中能写 行内元素，但不能写 块级元素。
> 3. 一些特殊的规则：
> h1~h6 不能互相嵌套。
> p 中不要写块级元素。
> 
> 备注： marquee 元素设计的初衷是：让文字有动画效果，但如今我们可以通过 CSS 来实现了，而且还可以实现的更加炫酷，所以 marquee 标签已经：过时了（废弃了），不推荐使用。我们只是在开篇的时候，用他做了一个引子而已，在后续的学习过程中，这些已经废弃的标签，我们直接跳过。

### 5.4 文本标签_常用的
1. 用于包裹：词汇、短语等。
2. 通常写在排版标签里面。
3. 排版标签更宏观（大段的文字），文本标签更微观（词汇、短语）。
4. 文本标签通常都是行内元素。
	```html
	em         要<em>着重</em>阅读的内容
	strong    十分重要的内容（语气比em要强）
	span       没有语义，用于包裹短语的通用容器
	```

### 5.5 文本标签_不常用的
| 标签名        | 标签语义                                           |
|------------|------------------------------------------------|
| cite       | 作品标题（书籍、歌曲、电影、电视节目、绘画、雕塑）                      |
| dfn        | 特殊术语 ，或专属名词                                    |
| del 与 ins  | 删除的文本 【与】 插入的文本                                |
| sub 与 sup  | 下标文字 【与】 上标文字                                  |
| code       | 一段代码                                           |
| samp       | 从正常的上下文中，将某些内容提取出来，例如：标识设备输出                   |
| kbd        | 键盘文本，表示文本是通过键盘输入的，经常用在与计算机相关的手册中               |
| abbr       | 缩写，最好配合上 title 属性                              |
| bdo        | 更改文本方向，要配合 dir 属性，可选值: ltr（默认值）rtl             |
| var        | 标记变量，可以与 code 标签一起使用                           |
| small      | 附属细则，例如：包括版权、法律文本。—— 很少使用                      |
| b          | 摘要中的关键字、评论中的产品名称。—— 很少使用                       |
| i          | 本意是：人物的思想活动、所说的话等等。<br/>现在多用于：呈现字体图标（后面要讲的内容）。 |
| u          | 与正常内容有反差文本，例如：错的单词、不合适的描述等。——<br/>很少使用         |
| q          | 短引用 —— 很少使用                                    |
| blockquote | 长引用 —— 很少使用                                    |
| address    | 地址信息                                           |

> [!important]
> 备注：
> 1. 这些不常用的文本标签，编码时不用过于纠结（酌情而定，不用也没毛病）。
> 2. blockquote 与 address 是块级元素，其他的文本标签，都是行内元素。
> 3. 有些语义感不强的标签，我们很少使用，例如：
> small 、 b 、 u 、 q 、 blockquote
> 4. HTML标签太多了！记住那些：重要的、语义感强的标签即可；截止目前，有这些：
> h1~h6 、 p 、 div 、 em 、 strong 、 span

### 5.6 图片标签

#### 5.6.1 基本使用
| 标签名<br/> | 常用属性                                                                                                                         |
|----------|------------------------------------------------------------------------------------------------------------------------------|
| img      | src ：图片路径（又称：图片地址）—— 图片的具体位置<br/>alt ：图片描述<br/>width ：图片宽度，单位是像素，例如： 200px 或 200<br/>height ：图片高度， 单位是像素，例如： 200px 或<br/>200 |

#### 5.6.2 路径的分类
1. 相对路径：以当前位置作为参考点，去建立路径。
![[Pasted image 20240626032246.png|550]]
> 注意点：
> - 相对路径中的 ./ 可以省略不写。
> - 相对路径依赖的是当前位置，后期若调整了文件位置，那么文件中的路径也要修改。

2. 绝对路径：以根位置作为参考点，去建立路径。
	- 本地绝对路径： E:/a/b/c/奥特曼.jpg 。（很少使用）
	- 网络绝对路径： http://www.atguigu.com/images/index_new/logo.png 。
> 注意点：
> - 使用本地绝对路径，一旦更换设备，路径处理起来比较麻烦，所以很少使用。
> - 使用网络绝对路径，确实方便，但要注意：若服务器开启了防盗链，会造成图片引入失败。

### 5.7 超链接

- 主要作用：从当前页面进行跳转。

- 可以实现：①跳转到指定页面、②跳转到指定文件（也可触发下载）、③跳转到锚点位置、④唤起指定应用。
	```html
	<a>
		- href ： 指定要跳转到的具体目标。
		- target ： 控制跳转时如何打开页面，常用值如下:
		- _self ：在本窗口打开。
		- _blank ：在新窗口打开。
		- id ： 元素的唯一 标识，可用于设置锚点。
		- name ： 元素的名字，写在 a 标签中，也能设置锚点。
	```

#### 5.7.1 跳转到页面

```html
<!-- 跳转其他网页 -->
<a href="https://www.jd.com/" target="_blank">去京东</a>
<!-- 跳转本地网页 -->
<a href="./10_HTML排版标签.html" target="_self">去看排版标签</a>
```
> 注意点：
> 1. 代码中的多个空格、多个回车，都会被浏览器解析成一个空格！
> 2. 虽然 a 是行内元素，但 a 元素可以包裹除它自身外的任何元素！
> 
> 想展示多个回车或空格，怎么办呢？ —— 后面会讲。

#### 5.7.2 跳转到文件

```html
<!-- 浏览器能直接打开的文件 -->
<a href="./resource/自拍.jpg">看自拍</a>
<a href="./resource/小电影.mp4">看小电影</a>
<a href="./resource/小姐姐.gif">看小姐姐</a>
<a href="./resource/如何一夜暴富.pdf">点我一夜暴富</a>
<!-- 浏览器不能打开的文件，会自动触发下载 -->
<a href="./resource/内部资源.zip">内部资源</a>
<!-- 强制触发下载 -->
<a href="./resource/小电影.mp4" download="电影片段.mp4">下载电影</a>

```

> 注意1：若浏览器无法打开文件，则会引导用户下载。
> 注意2：若想强制触发下载，请使用 download 属性，属性值即为下载文件的名称。

#### 5.7.3 跳转到锚点

什么是锚点？—— 网页中的一个标记点。

具体使用方式：

- 第一步：设置锚点

	```html
	<!-- 第一种方式：a标签配合name属性 -->
	<a name="test1"></a>
	<!-- 第二种方式：其他标签配合id属性 -->
	<h2 id="test2">我是一个位置</h2>
	```

- 第二步：跳转锚点

	```html
	<!-- 跳转到test1锚点-->
	<a href="#test1">去test1锚点</a>
	<!-- 跳到本页面顶部 -->
	<a href="#">回到顶部</a>
	<!-- 跳转到其他页面锚点 -->
	<a href="demo.html#test1">去demo.html页面的test1锚点</a>
	<!-- 刷新本页面 -->
	<a href="">刷新本页面</a>
	<!-- 执行一段js,如果还不知道执行什么，可以留空，javascript:; -->
	<a href="javascript:alert(1);">点我弹窗</a>
	```

#### 5.7.4 唤起指定应用
- 通过 a 标签，可以唤起设备应用程序。
	```html
	<!-- 唤起设备拨号 -->
	<a href="tel:10010">电话联系</a>
	<!-- 唤起设备发送邮件 -->
	<a href="mailto:10010@qq.com">邮件联系</a>
	<!-- 唤起设备发送短信 -->
	<a href="sms:10086">短信联系</a>
	```

### 5.8 列表

#### 5.8.1 有序列表

- 概念：有顺序或侧重顺序的列表。
	```html
	<ol>
		<li>把冰箱门打开</li>
		<li>把大象放进去</li>
		<li>把冰箱门关上</li>
	</ol>
	```
#### 5.8.2 无序列表

- 概念：无顺序或不侧重顺序的列表。
	```html
	<ul>
		<li>成都</li>
		<li>上海</li>
		<li>西安</li>
		<li>武汉</li>
	</ul>
	```
#### 5.8.3 列表嵌套

- 概念：列表中的某项内容，又包含一个列表（注意：嵌套时，请务必把解构写完整）。
	```html
	<ul>
		<li>成都</li>
		<li>
			<span>上海</span>
			<ul>
				<li>外滩</li>
				<li>杜莎夫人蜡像馆</li>
				<li>
					<a href="https://www.opg.cn/">东方明珠</a>
				</li>
				<li>迪士尼乐园</li>
			</ul>
		</li>
		<li>西安</li>
		<li>武汉</li>
	</ul>
	```
#### 5.8.4 自定义列表
 1. 概念：所谓自定义列表，就是一个包含术语名称以及术语描述的列表。
 2. 一个 dl 就是一个自定义列表，一个 dt 就是一个术语名称，一个 dd 就是术语描述（可以有多个）。
	 ```html
	<dl>
		<dt>做好笔记</dt>
			<dd>笔记是我们以后复习的一个抓手</dd>
			<dd>笔记可以是电子版，也可以是纸质版</dd>
		<dt>多加练习</dt>
			<dd>只有敲出来的代码，才是自己的</dd>
		<dt>别怕出错</dt>
			<dd>错很正常，改正后并记住，就是经验</dd>
	</dl>
	```


### 5.9 表格

#### 5.9.1 基本结构

1. 一个完整的表格由：表格标题、表格头部、表格主体、表格脚注，四部分组成。
![[Pasted image 20240626034253.png|375]]

2. 表格涉及到的标签：
	- table ：表格
	- caption ：表格标题
	- thead ：表格头部
	- tbody ：表格主体
	- tfoot ：表格注脚
	- tr ：每一行
	- th 、 td ：每一个单元格（备注：表格头部中用 th ，表格主体、表格脚注中用： td ）
	
#### 5.9.2 常用属性

```
table
	- width ：设置表格宽度。
	- height ：设置表格最小高度，表格最终高度可能比设置的值大。
	- border ：设置表格边框宽度。
	- cellspacing ： 设置单元格之间的间距。

thead
	- height ：设置表格头部高度。
	- align ： 设置单元格的水平对齐方式，可选值如下：
		- left ：左对齐
		- center ：中间对齐
		- right ：右对齐
	- valign ：设置单元格的垂直对齐方式，可选值如下：
		- top ：顶部对齐
		- middle ：中间对齐
		- bottom ：底部对齐

td
	- width ：设置单元格的宽度，同列所有单元格全都受影 响。
	- heigth ：设置单元格的高度，同行所有单元格全都受影响。
	- align ：设置单元格的水平对齐方式。
	- valign ：设置单元格的垂直对齐方式。
	- rowspan ：指定要跨的行数。
	- colspan ：指定要跨的列数。
```

> 注意点：
> 1. table 元素的 border 属性可以控制表格边框，但 border 值的大小，并不控制单元格
> 边框的宽度，只能控制表格最外侧边框的宽度，这个问题如何解决？—— 后期靠 CSS 控制。
> 2. 默认情况下，每列的宽度，得看这一列单元格最长的那个文字。
> 3. 给某个 th 或 td 设置了宽度之后，他们所在的那一列的宽度就确定了。
> 4. 给某个 th 或 td 设置了高度之后，他们所在的那一行的高度就确定了。

#### 5.9.3 跨行跨列

1. rowspan ：指定要跨的行数。
2. colspan ：指定要跨的列数。


### 5.10 常用标签补充

```
br     换行
hr     分隔
pre   按原文显示（一般用于在页面中嵌入大段代码）
```

### 5.11 表单

#### 5.11.1 form

| 属性             | 描述                                      |
|----------------|-----------------------------------------|
| accept-charset | 规定在被提交表单中使用的字符集(默认:页面字符集)。              |
| action         | 规定向何处提交表单的地址(URL)(提交页面)。                |
| autocomplete   | 规定浏览器应该自动完成表单(默认:开启)。                   |
| enctype        | 规定被提交数据的编码(默认:url-encoded)。             |
| method         | 规定在提交表单时所用的HTTP方法(默认:GET)。              |
| name           | 规定识别表单的名称(对于DOM使用:document.forms.name)。 |
| novalidate     | 规定浏览器不验证表单。                             |
| target         | 规定 action 属性中地址的目标(默认 :_ self)。         |

> method属性-------- method属性指定浏览器向服务器发送表单数据时可以使用的两种方法。
> 
> get ：使用get方法向服务器传送表单数据时，表单数据被附加在`<from>`元素中有action指定的URL尾部。使用get请求的优点有可以被缓存、能保存在历史记录中、可以被收为书签。缺点有不能在敏感数据中使用、不够安全信息暴露在地址栏上、数据有长度限制（地址栏默认大小64kb）且数据只能读取不能修改。
> 
> post ：使用post方法向服务器传送表单数据时，表单数据在HTTP头部透明的传送。使用post请求的优点有比get安全，不会将信息暴露在地址栏上、对数据长度没有限制。缺点有不可以被缓存、不能保存在历史记录中、不可以被收为书签。

### 5.11.2 Type属性

```html
 type   属性规定要显示的 <input> 元素的类型。
	- text          文本
	- password 密码
	- radio        单选框，可以用来设置性别选择  
		单选框是通过name属性来分组的,相同name属性的为一组
		
	- checkbox 多选框
	- button   没有默认行为的按钮，上面显示 value 属性的值，默认为空。
	- reset    重置按钮
	- color    用于指定颜色的控件；在支持的浏览器中，激活时会打开取色器。
	- date     输入年、月、日，不包括时间。
	- file	   让用户选择文件的控件。
		- accept   使用 accept 属性规定控件能选择的文件类型。		
			- <input type="file" accept="image/*, text/*" name="file"/>
```

### 5.11.3 常用表单控件
#### 5.11.3.1 文本输入框
`<input type="text">`
> 常用属性如下：
> name 属性：数据的名称。
> value 属性：输入框的默认输入值。
> maxlength 属性：输入框最大可输入长度。

#### 5.11.3.2 密码输入框
`<input type="password">`
> 常用属性如下：
> name 属性：数据的名称。
> value 属性：输入框的默认输入值（一般不用，无意义）。
> maxlength 属性：输入框最大可输入长度。

#### 5.11.3.3 单选框
`<input type="radio" name="sex" value="female">女`
`<input type="radio" name="sex" value="male">男`
> 常用属性如下：
> name 属性：数据的名称，注意：想要单选效果，多个 radio 的 name 属性值要保持一致。
> value 属性：提交的数据值。
> checked 属性：让该单选按钮默认选中。

#### 5.11.3.4 复选框
`<input type="checkbox" name="hobby" value="smoke">抽烟`
`<input type="checkbox" name="hobby" value="drink">喝酒`
`<input type="checkbox" name="hobby" value="perm">烫头`
> 常用属性如下：：
> name 属性：数据的名称。
> value 属性：提交的数据值。
> checked 属性：让该复选框默认选中。

#### 5.11.3.5 隐藏域
`<input type="hidden" name="tag" value="100">`

> 用户不可见的一个输入区域，作用是： 提交表单的时候，携带一些固定的数据。
> name 属性：指定数据的名称。
> value 属性：指定的是真正提交的数据。

#### 5.11.3.6 提交按钮
`<input type="submit" value="点我提交表单">`
`<button>点我提交表单</button>`

注意：
> 1. button 标签 type 属性的默认值是 submit 。
> 2. button 不要指定 name 属性
> 3. input 标签编写的按钮，使用 value 属性指定按钮文字。

#### 5.11.3.7 重置按钮
 `<input type="reset" value="点我重置">`
`<button type="reset">点我重置</button>`

> 注意点：
> 1. button 不要指定 name 属性
> 2. input 标签编写的按钮，使用 value 属性指定按钮文字。

#### 5.11.3.8 普通按钮
```html
<input type="button" value="普通按钮">
<button type="button">普通按钮</button>
```

> 注意点：普通按钮的 type 值为 button ，若不写 type 值是 submit 会引起表单的提交。

#### 5.11.3.9 文本域
```html
<textarea name="msg" rows="22" cols="3">我是文本域</textarea>
```
> 常用属性如下：
> 1. rows 属性：指定默认显示的行数，会影响文本域的高度。
> 2. cols 属性：指定默认显示的列数，会影响文本域的宽度。
> 3. 不能编写 type 属性，其他属性，与普通文本输入框一致。



#### 5.11.3.10 下拉框

```html
<select name="from">
	<option value="黑">黑龙江</option>
	<option value="辽">辽宁</option>
	<option value="吉">吉林</option>
	<option value="粤" selected>广东</option>
</select>
```

> 常用属性及注意事项：
> 1. name 属性：指定数据的名称。
> 2. option 标签设置 value 属性， 如果没有 value 属性，提交的数据是 option 中间的文
> 字；如果设置了 value 属性，提交的数据就是 value 的值（建议设置 value 属性）
> 3. option 标签设置了 selected 属性，表示默认选中。

#### 5.11.3.11 禁用表单控件
给表单控件的标签设置 disabled 既可禁用表单控件。
> input 、 textarea 、 button 、 select 、 option 都可以设置 disabled 属性
#### 5.11.3.12 label 标签
label 标签可与表单控件相关联，关联之后点击文字，与之对应的表单控件就会获取焦点。
两种与 label 关联方式如下：
> 1. 让 label 标签的 for 属性的值等于表单控件的 id 。
> 2. 把表单控件套在 label 标签的里面。

#### 5.11.3.13 fieldset 与 legend 的使用（了解）
fieldset 可以为表单控件分组、 legend 标签是分组的标题。
示例：
```html
<fieldset>
	<legend>主要信息</legend>
	<label for="zhanghu">账户：</label>
	<input id="zhanghu" type="text" name="account" maxlength="10"><br>
	<label>
		密码：
		<input id="mima" type="password" name="pwd" maxlength="6">
	</label>
	<br>
	性别：
	<input type="radio" name="gender" value="male" id="nan">
	<label for="nan">男</label>
	<label>
		<input type="radio" name="gender" value="female" id="nv">女
	</label>
</fieldset>
```

### 5.12 iframe 框架标签
框架（在网页中嵌入其他文件）
- name ：框架名字，可以与 target 属性配合。
- width ： 框架的宽。
- height ： 框架的高度。
- frameborder ：是否显示边框，值：0或者1。

> iframe 标签的实际应用：
> 1. 在网页中嵌入广告。
> 2. 与超链接或表单的 target 配合，展示不同的内容。


### 5.13 HTML实体
在 HTML 中我们可以用一种特殊的形式的内容，来表示某个符号，这种特殊形式的内容，就是 HTML 实体。比如小于号 < 用于定义 HTML 标签的开始。如果我们希望浏览器正确地显示这些字符，我们必须在 HTML 源码中插入字符实体。
> 字符实体由三部分组成：一个 & 和 一个实体名称（或者一个 # 和 一个实体编号），最后加上一个分号 ; 。



### 5.14 meta 元信息
1. 配置字符编码
	```html
	<meta charset="utf-8">
	```
1. 针对 IE 浏览器的兼容性配置。
	```html
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	```
1. 针对移动端的配置（移动端课程中会详细讲解）
	```html
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	```
1. 配置网页关键字
	```html
	<meta name="keywords" content="8-12个以英文逗号隔开的单词/词语">
	```
1. 配置网页描述信息
	```html
	<meta name="description" content="80字以内的一段话，与网站内容相关">
	```
1. 针对搜索引擎爬虫配置：
	```html
	<meta name="robots" content="此处可选值见下表">
	```

	```bash
	index     允许搜索爬虫索引此页面。
	noindex 要求搜索爬虫不索引此页面。
	follow   允许搜索爬虫跟随此页面上的链接。
	nofollow 要求搜索爬虫不跟随此页面上的链接。
	all                与 index, follow 等价
	none           与 noindex, nofollow 等价
	noarchive   要求搜索引擎不缓存页面内容。
	nocache      noarchive 的替代名称。
	```
1. 配置网页作者：
	```html
	<meta name="author" content="tony">
	```
1. 配置网页生成工具
	```html
	<meta name="generator" content="Visual Studio Code">
	```
1. 配置定义网页版权信息：
	```html
	<meta name="copyright" content="2023-2027©版权所有">
	```
1. 配置网页自动刷新
	```html
	<meta http-equiv="refresh" content="10;url=http://www.baidu.com">
	```

























