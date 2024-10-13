---
number headings: auto, first-level 1, max 6, contents ^top, 1.1
cssclasses:
  - 前端
tags:
  - Front-end
  - JavaScript
date: 2024-07-01T17:24:00
---
# 1 DOM 简介

## 1.1 为什么需要 DOM
> 前边我们所学习的 JS 基础课程，学习了 JS 的基础知识。但是在学习过程中你会发现，似乎 JS 和网页并没有太大的关系。换句话说，我们所编写的 JS 代码，除了是写在网页中以外，并没有和网页产生任何实质的联系。如果 JS 不能操作网页，那么对于我们来说它就是一个废物，没有任何的使用价值。所以我们就需要一个新的技术，一个可以让我们使用 JS 来操作网页的技术，也就是 DOM。

## 1.2 什么是 DOM
> DOM，全称 Document Object Model，中文翻译为文档对象模型。DOM 属于 Web API 的一部分。Web API 中定义了非常多的对象，通过这些对象可以完成对网页的各种操作（添加删除元素、发送请求、操作浏览器等）。
> 
> DOM 中的 D 意为 Document，即文档。所谓文档就是指整个网页，换言之，DOM 是用来操作网页的。O 意为 Object，即对象。DOM 将网页中的每一部分内容都转换为了对象，div 有 div 的对象，input 有 input 的对象，甚至一段文本，一段注释也有其所对应的对象。转换为对象干什么？还记得面向对象吗？转换对象以后，我们就可以以面向对象的方式去操作网页，想要操作哪个元素就获取哪个元素的对象，然后通过调用其方法或属性完成各种操作。M 意为 Model，即模型。模型用来表示对象之间的关系，也就是父子元素、祖先后代、兄弟元素等，明确关系后我们便可以通过任意一个对象去获取其他的对象。

- DOM树
![[20220808135838431.png|300]]

## 1.3 DOM 概念
### 1.3.1 节点（Node）

- 在 DOM 标准下，网页中的每一个部分都会转换为对象。这些对象有一个共同的称呼——节点（Node）。一个页面将会由多个节点构成，虽然都称为节点，但是它们却有着不同的类型：
	1. 文档节点
	2. 元素节点
	3. 文本节点
	4. 属性节点
	5. …
- 每一个节点都有其不同的作用，文档节点表示整个网页，元素节点表示某个标签，文本节点表示网页中的文本内容，属性节点表示标签中的各种属性。如果从对象的结构上来讲，这些对象都有一个共同的父类 Node。总的来说，都是属于节点，但是具体类型不同。

#### 1.3.1.1 关系
- 祖先 —— 包含后代元素的元素是祖先元素
- 后代 —— 被祖先元素包含的元素是后代元素
- 父 —— 直接包含子元素的元素是父元素
- 子 —— 直接被父元素包含的元素是子元素
- 兄弟 —— 拥有相同父元素的元素是兄弟元素

#### 1.3.1.2 文档节点 (Document Node)

- `Document` 对象代表的是整个的网页，在浏览器中它是 window 对象的属性（也就是全局变量），它也是我们所有 DOM 操作的切入点，实际上之前我们也使用过它，还记得 `document.write()` 吗？现在你可以尝试在控制台中打印 `document`，看看它还在不在？如果它还在那么你需要记住，它代表的是整个网页，它的子元素是 `html`。

- 从现在开始我们实际上进入了宿主对象的学习，`DOM` 就是一种宿主对象，即由运行环境（浏览器）提供的对象。对象的复杂程度也开始提升，我们先来看看 `document` 的继承关系：
![[20220808141848408.png|377]]

- 在标准中，`Document` 继承了 `Node`，`Node` 继承了 `EventTarget`，换言之 `EventTarget`、`Node` 以及 `Document` 中所定义的方法 `document` 都可以调用，它在浏览器中的实际结构会更复杂一些，这里我们暂时不过多的赘述。


- document对象的原型链
	- `HTMLDocument -> Document -> Node -> EventTarget -> Object.prototype -> null`
- 凡是在原型链上存在的对象的属性和方法都可以通过Document去调用
    部分属性：
>         document.documentElement --> html根元素
>         document.head --> head元素
>         document.title --> title元素
>         document.body --> body元素
>         document.links --> 获取页面中所有的超链接

#### 1.3.1.3 元素节点（Element Node）
- 在网页中所有的元素（标签）都是一个 `Element` 对象。`Element` 对象的继承关系和 `Document` 类似：

![](https://my-wp.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2022/08/20220808210844195.png)

- 可以通过 `Document` 或其他元素直接获取已有的 `Element` 对象，也可以使用 `Document` 来创建新的 `Element` 对象。我们先来看看如何通过 `document` 获取已有的 `Element` 对象。

- **部分属性**：

| 属性                                | 含义                                | 返回值                                      |
| --------------------------------- | --------------------------------- | ---------------------------------------- |
| document.getElementByID()         | 根据 `id` 获取一个元素                    |                                          |
| document.getElementsByClassName() | 据`class`属性获取元素（实时更新列表）            | 类数组对象<br>实时更新的集合<br>当网页中新添加元素时，集合也会实时的刷新 |
| document.getElementsByTagName()   | 根据标签名获取元素（实时更新列表）                 | 可以实时更新的集合                                |
| document.getElementsByName()      | 根据`name`属性获取元素（实时更新列表）<br>主要用于表单项 | 实时更新的集合                                  |
| document.querySelector()          | 根据选择器获取一个元素                       |                                          |
| document.querySelectorAll()       | 根据选择器获取一组元素                       | 类数组（不会实时更新）                              |

- **通过其他元素获取已有的 Element 对象**：

| 属性                             | 含义                    |
| ------------------------------ | --------------------- |
| element.childNodes             | 获取当前元素的子节点（会包含空白的子节点） |
| element.children               | 获取当前元素节点的子元素          |
| element.parentNode             | 获取当前元素的父节点            |
| element.firstElementChild      | 获取当前元素的第一个子元素节点       |
| element.lastElementChild       | 获取当前元素的最后一个子元素节点      |
| element.tagName                | 获取当前元素的标签名            |
| element.previousElementSibling | 获取当前元素的前一个兄弟元素        |
| element.nextElementSibling     | 获取当前元素的下一个兄弟元素        |

- **创建一个元素节点**

| document.createElement() | 根据标签名创建一个元素节点对象 |
| ------------------------ | --------------- |

#### 1.3.1.4 文本节点(Text Node)
在 DOM 中，文本内容也是一个节点对象（Text），可以通过获取文本对象然后完成对它的各种操作，但这种做法会使得事情变得复杂，并不建议这么做。在大部分场景下，可以通过元素的属性来操作其中的文本内容.

- `element.textContent` 获取或修改元素中的文本内容
	- 获取的是标签中的内容，不会考虑`css`样式
- `element.innerTex`t 获取或修改元素中的文本内容
	- `innerText`获取内容时，会考虑`css`样式
	- 通过`innerText`去读取`CSS`样式，会触发网页的重排（计算`CSS`样式）
	- 当字符串中有标签时，会自动对标签进行转义
		- `<li>` --> `&lt;li&gt;`
- `element.innerHTML` 获取或修改元素中的`html`代码
	- 可以直接向元素中添加`html`代码
	- `innerHTML`插入内容时，有被`xss`注入的风险

#### 1.3.1.5 属性节点 (Attr Node)

在DOM也是一个对象，通常不需要获取对象而是直接通过元素即可完成对其的各种操作
- 如何操作属性节点：
	- 方式一：
		- 读取：元素.属性名（注意，class属性需要使用className来读取）
			- 读取一个布尔值时，会返回true或false
		- 修改：元素.属性名 = 属性值
	- 
	- 方式二：
		- 读取：元素.getAttribute(属性名)

		- 修改：元素.setAttribute(属性名, 属性值)

		- 删除：元素.removeAttribute(属性名)

- `element.attrName`
- `element.getAttribute(attrName)`
- `element.setAttribute(name, value)`

#### 1.3.1.6 事件节点（Event Node）
- 事件就是用户和页面之间发生的交互行为
	- 比如：点击按钮、鼠标移动、双击按钮、敲击键盘、松开按键...  
- 可以通过为事件绑定响应函数（回调函数），来完成和用户之间的交互
- 绑定响应函数的方式：
	1. 可以直接在元素的属性中设置
	2. 可以通过为元素的指定属性设置回调函数的形式来绑定事件（一个事件只能绑定一个响应函数）
	3. 可以通过元素 `addEventListener()`方法来绑定事件

- 实例：

	```js
	//可以直接在元素的属性中设置
	<button id="btn" onmouseenter="alert('你点我干嘛~')">点我一下</button>
	
	//可以通过为元素的指定属性设置回调函数的形式来绑定事件
	 const btn = document.getElementById("btn")
	 btn.onclick = function(){
	     alert("我又被点了一下~~")
	}
	
	//addEventListener()方法来绑定事件
	btn.addEventListener("click", function(){
	    alert("哈哈哈")
	})
	```

#### 1.3.1.7 文档加载事件
- 在网页中编写 DOM 代码时，如果依然将 script 标签编写到 head 中，会有无法获取 DOM 对象情况出现。这是因为网页的加载是自上向下依次加载的，如果将代码写在前边会导致代码执行时网页还没有加载，DOM 对象也就无法获取了。

- 如何解决这个问题呢？有这么几种方案：
	1. 将 script 标签写在 body 的最后
	2. 将 js 代码编写到 window.onload 事件的回调函数中
	3. 将 js 代码编写到 document 对象的 DOMContentLoaded 事件的回调函数中
	4. 将 js 代码编写到外部的 js 文件中，引入时为 script 标签添加 defer 属性



- 实例：
	1. 方法1
	```html
	<body>
		<button type="button" id="btn">点我一下</button>
		<script>
			const btn = document.getElementById("btn")
			btn.addEventListener("click", function () {
				alert("按钮被点了")
			})
		</script>
	</body>
	```
	
	> 	代码编写到了 body 的最后，代码执行时网页已经加载完毕了，不会出现无法获取 DOM 对象的问题。

2. 方式二
	```js
	window.onload = () => {
	    const btn = document.getElementById("btn")
	    btn.addEventListener("click", function () {
	        alert("按钮被点了")
	    })
	}
	
	window.addEventListener("load", () => {
	    const btn = document.getElementById("btn")
	    btn.addEventListener("click", function () {
	        alert("按钮被点了")
	    })
	})
	
	```

	> 	将 js 代码编写到 window 的 load 事件的回调函数中，load 事件会在页面加载完毕后触发，同样可以避免上述问题。
1. 方式三：
	```js
	document.addEventListener("DOMContentLoaded", () => {
	    const btn = document.getElementById("btn")
	    btn.addEventListener("click", function () {
	        alert("按钮被点了")
	    })
	})
	```

	> 	将 js 代码编写到 `document` 的 `DOMContentLoaded` 事件的回调函数中，代码会在当前文档加载完毕后执行也可以避免上述情况。（相较于 `load` 事件，`DOMContentLoaded` 事件的执行更早一些）	

1. 方式四：
	```html
	<script src="./script.js" defer></script>
	```

	> 	设置 `defer` 后，脚本将会在文档解析之后加载，同样可以避免上述问题。（执行时机早于 `DOMContentLoaded`）

## 1.4 Dom 的修改

1. 添加
    1. `appendChild(li)` 用于给一个节点添加子节点
    2. `insertAdjacentElement()`可以向元素的任意位置添加元素
        两个参数：1.要添加的位置 2.要添加的元素
            `beforeend` 标签的最后 
            `afterbegin` 标签的开始
            `beforebegin`  在元素的前边插入元素（兄弟元素）
            `afterend`        在元素的后边插入元素（兄弟元素）
            `list.insertAdjacentElement("afterend", li)`
    3. `element.insertAdjacentHTML("beforeend", "<li id='bgj'>白骨精</li>")`
	    ![[Pasted image 20240616044417.png|157]]
	```js
	<button id="btn01">按钮1</button>
	<button id="btn02">按钮2</button>
	<ul id="list">
	    <li id="swk">孙悟空</li>
	    <li id="zbj">猪八戒</li>
	    <li id="shs">沙和尚</li>
	 </ul>
	// 获取ul
	const list = document.getElementById("list")
	// 获取按钮
	const btn01 = document.getElementById("btn01")
	btn01.onclick = function () {
	     // <li id="shs">沙和尚</li>
	     // 创建一个li
	    const li = document.createElement("li")
	     // 向li中添加文本
	     li.textContent = "唐僧"
	    // 给li添加id属性
	     li.id = "ts"
	     // appendChild(li) 用于给一个节点添加子节点
	     list.appendChild(li)
	     # 方法二
	         //insertAdjacentElement()可以向元素的任意位置添加元素
	             //两个参数：1.要添加的位置 2.要添加的元素
	                   // beforeend 标签的最后 afterbegin 标签的开始  
	                   // beforebegin 在元素的前边插入元素（兄弟元素） afterend 在元素的后边插入元素（兄弟元素）
	                  list.insertAdjacentElement("afterend", li)
	           # 方法三
	           list.insertAdjacentHTML("beforeend", "<li id='bgj'>白骨精</li>")
	}
	```



1. 修改替换
- `element.replaceWith()` 使用一个元素替换当前元素
	```js
	// # 替换
	const btn02 = document.getElementById("btn02")
	btn02.onclick = function(){
	    // 创建一个蜘蛛精替换孙悟空
	    const li = document.createElement("li")
	    li.textContent = "蜘蛛精"
	    li.id = "zzj"
	    // 获取swk
	    const swk = document.getElementById("swk")
	    // replaceWith() 使用一个元素替换当前元素
	    swk.replaceWith(li)
	    // remove()方法用来删除当前元素
	    swk.remove()
	}
	```
1. 删除
`element.remove()`












































