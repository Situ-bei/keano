---
number headings: auto, first-level 1, max 6, contents ^top, 1.1
title: 《初识Vue2 --盛夏的回眸》
order: 0
category:
- 前端
- Vue
tags:
- 前端
- Vue2.0

date: 2024-07-16T06:13:00
article: false
---
Vue2.0 学习笔记
<!-- more -->
#  初识Vue2 --盛夏的回眸


## 1.  Vue简介
### 1.1  官网

1. [中文官网](https://cn.vuejs.org/) 

2. [英文官网](https://vuejs.org/)

## 1.2 介绍
### 1.2.1 Vue 是什么？

- 一套用于构建用户界面的渐进式`JavaScript`框架
- 作者：尤雨溪

### 1.2.2 Vue的特点

- 采用**组件化模式**，提高代码复用率、且让代码更好维护

- **声明式编码**，让编码人员无需直接操作DOM，提高开发效率
![[Pasted image 20240716061747.png|600]]

- 使用虚拟`DOM`+优秀的`Diff`算法，尽量复用`DOM`节点
	- 简单理解：虚拟`DOM`就是内存中的一个数据

![[94f89b45481640d989c14c1d73170d55.png|525]]
![[76a0e8aafd15461dae8954ecb245e6c2.png|500]]

> Vue官网的 “资源列表”下拉框——AwesomeVue是Vue官方推荐你用什么库做什么功能

#### 1.2.2.1 与其他前端 JS 框架的关联

- 借鉴 angular 的 模板 和 数据绑定 技术
- 借鉴 react 的 组件化 和 虚拟DOM 技术
#### 1.2.2.2 Vue 扩展插件

- vue-cli：vue 脚手架
- vue-resource(axios)：ajax 请求
- vue-router：路由
- vuex：状态管理（它是 vue 的插件但是没有用 vue-xxx 的命名规则）
- vue-lazyload：图片懒加载
- vue-scroller：页面滑动相关
- mint-ui：基于 vue 的 UI 组件库（移动端）
- element-ui：基于 vue 的 UI 组件库（PC 端）

## 2   Vue 2 BasicGrammer
### 2.1 引入Vue.js
- 本地引入 
- CDN引入
	```js
	<script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"></script>
	```

### 2.2 创建Vue对象

- 想让`Vue`工作，就必须创建一个`Vue`实例，且要传入一个配置对象；
- `root`容器里的代码依然符合`html`规范，只不过混入了一些特殊的`Vue`语法；
- `root`容器里的代码被称为【Vue模板】；
- `Vue`实例和容器是一一对应的；
- 真实开发中只有一个Vue实例，并且会配合着组件一起使用；
- `{{xxx}}`中的xxx要写`js`表达式，且xxx可以自动读取到`data`中的所有属性；
- 一旦`data`中的数据发生改变，那么页面中用到该数据的地方也会自动更新；
	```js
	//创建Vue实例
	new Vue({
		el:'#root', //el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串。
		data:{ //data中用于存储数据，数据供el所指定的容器去使用，值我们暂时先写成一个对象。
			name:'YK菌',
			address:'合肥'
		}
	})
	```

> 意区分：js表达式 和 js代码(语句)
> 
> - 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：
> 	1. `a` 
> 	2. `a+b` 
> 	3. `demo(1)`
> 	4.  `x === y ? 'a' : 'b'`
> 
> - js代码(语句) 
> 	1. `if(){}` 
> 	2. `for(){}`


#### 2.2.1 el

- 指定根 `element`(选择器)
- el有2种写法
	```javascript
	//1. new Vue时候配置el属性。
	const v = new Vue({
		el:'#root', //第一种写法
		data:{
			name:'YK菌'
		}
	})
	//2. 先创建Vue实例，随后再通过`vm.$mount('#root')`指定el的值。
	const v = new Vue({
		data:{
			name:'YK菌'
		}
	})
	v.$mount('#root') //第二种写法 */
	```
#### 2.2.2 data

- 初始化数据(页面可以访问)
- data有2种写法

	```js
	//(1) 对象式
	data:{
		name:'YK菌'
	} 
	//(2) 函数式
	data(){
		console.log('@@@',this) //此处的this是Vue实例对象
		return{
			name:'YK菌'
		}
	}
	```




- 如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。
> - **一个重要的原则**
> 	- 由 `Vue` 管理的函数，一定不要写箭头函数，一旦写了箭头函数，`this` 就不再是 `Vue` 实例了。

### 2.3 Vue的MVVM实现
![[2cfaef66bd3b4b67b032b225ffa34483~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp|575]]

- M
	模型(Model) ：data中的数据


- V
	视图(View) ：模板代码（不是静态页面） （两个语法：指令，大括号表达式）

- VM
	> viewModel: 视图模型（Vue的实例）
	> - Dom Listeners （Dom 监听）
	> - Data Bindings （数据绑定）
	> 	- data中所有的属性，最后都出现在了vm身上。
	> 	- vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。

- MVVM

	- MVVM 本质上是 MVC （Model-View- Controller）的改进版。即模型-视图-视图模型。
	
	- 模型model指的是后端传递的数据，视图view指的是所看到的页面。
	
	- 视图模型viewModel是 mvvm 模式的核心，它是连接 view 和 model 的桥梁。它有两个方向：
		- 将模型转化成视图，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定 将视图转化成模型，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听
		- 这两个方向都实现的，我们称之为数据的双向绑定

## 2.4 模板语法


### 2.4.1 模板的理解

- 我们先来理解理解什么是模板？
	- 模板就是`动态html页面`，这里面包含了一些`js语法代码`

- Vue的模板语法分为两种，分别是：
	- 【插值语法】双大括号表达式 （“Mustache”语法）【一个】
	- 【指令语法】指令（以v-开头的自定义标签属性）【很多】

### 2.4.2 插值语法：	
- 功能：用于解析标签体内容，向页面输出数据
- 写法：`{{xxx}}`，xxx是js表达式，且可以直接读取到`data`中的所有属性，可以调用对象的方法
- **备注**：里面写js表达式：有返回值的js代码，而不是js语句

### 2.4.3 指令语法：
- 功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）
- 举例：`v-bind:href="xxx"` 或 简写为 `:href="xxx"`，xxx 同样要写 js 表达式，且可以直接读取到 `data` 中的所有属性

- **备注**：Vue中有很多的指令，且形式都是：`v-????`


#### 2.4.3.1 `v-bind:` 强制数据绑定 

- 功能：指定变化的属性值
	```js
	//完整写法
	v-bind:xxx='yyy'  // yyy会作为表达式解析执行
	
	//简洁写法
	:xxx='yyy'
	```

- 单向数据绑定
    - 语法：`v-bind:href ="xxx"` 或简写为 `:href ="xxx"`
    - 特点：数据只能从 `data` 流向页面
	```html
	<h2>2. 指令一： 强制数据绑定</h2>
	<img src="imgUrl" alt="Vue">         //无法显示图片，没有识别成js表达式 
	<img v-bind:src="imgUrl" alt="Vue">   //属性值识别成js表达式 
	<img :src="imgUrl" alt="Vue">
	
	<script>
		new Vue({
			el: '#app',
			data: {
				msg: '<a href="http:www.baidu.com">I Will Back!</a>',
				imgUrl: "https://cn.vuejs.org/images/logo.png"
			},
		})
	</script>
	```
- 双向数据绑定 指令 `v-model`
    - 语法：`v-mode:value="xxx"` 或简写为 `v-model="xxx"`
    - 特点：数据不仅能从 data 流向页面，还能从页面流向 data


- 双向数据绑定 : `v-model` & 显示数据 : `{{xxx}}` 插值语法
- 实例：
	```html
	<div id="test"> <!--view-->
	  <input type="text" v-model="msg"><br><!--指令-->
	  <p>Hello {{msg}}</p><!--大括号表达式-->
	</div>
	
	<script src="../js/vue.js"></script>
	<script>
	  const vm = new Vue({ // 配置对象 options 
	    // 配置选项(option)
	    el: '#test',  // element: 指定用vue来管理页面中的哪个标签区域
	    data: { // 数据（model）
	      msg: 'World'
	    }
	  })
	</script>
	```

![[e68bf479324e4db99d6f568a1de206b3~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp]]
#### 2.4.3.2 `v-on` 绑定事件监听
- 功能：绑定指定事件名的回调函数
	```js
	//完整写法
	v-on:click='xxx'
	v-on:keyup='xxx(参数)'
	v-on:keyup.enter='xxx'
	
	//简洁写法
	@click='xxx'
	@keyup='xxx'
	@keyup.enter='xxx'
	```

#### 2.4.3.3 内置指令
##### 2.4.3.3.1 v-text与v-html

1. `v-text`
	- 作用：向其所在的节点中渲染文本内容。
	- 与插值语法的区别：`v-text`会替换掉节点中的内容，`{{xx}}`则不会。
	<br>
1. `v-html`
	- 作用：向指定节点中渲染包含`html`结构的内容。
	- 与插值语法的区别：
		- `v-html`会替换掉节点中所有的内容，`{{xx}}`则不会。
		- `v-html`可以识别`html`结构。
	```html
	<p v-html="msg"> </p> <!--innerHTML -->
	
	<p v-text="msg"> </p> <!--textContent -->
	<p v-text="msg.toUpperCase()"> </p>
	```

> 严重注意：v-html有安全性问题！！！！
> 1. 在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。
> 2. 一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！

##### 2.4.3.3.2 条件渲染指令 v-if  v-else  v-show
**v-if  v-else**
- 写法：
    - v-if="表达式"
    - v-else-if="表达式"
    - v-else="表达式"

> 适用于：切换频率较低的场景。 特点：不展示的DOM元素直接被移除。 注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。


**v-show**

- 写法：v-show="表达式" 适用于：切换频率较高的场景。 特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉

> 【备注】使用v-if的时候，元素可能无法获取到，而使用v-show一定可以获取到。

**比较v-if与v-show**

- v-if是控制元素是否加载到页面上（有性能开销） v-show是控制元素的显示与隐藏 （初始创建时加载一次）

    - 如果需要频繁切换 v-show 较好
    - 当条件不成立时, v-if 的所有子节点不会解析


```html
<div id="demo">
	<p v-if="ok">成功了</p> <!-- 移除标签删除 -->
	<p v-else>失败了</p>
	<p v-show="ok">又成功了</p> <!-- 添加样式隐藏 -->
	<p v-show="!ok">又失败了</p>
	<button @click="ok = !ok">切换</button>
</div>
<script src="../js/vue.js"></script>
<script>
	new Vue({
		el: '#demo',
		data: {
			ok: false,
		}
	})
</script>
```

##### 2.4.3.3.3 一些常用的指令

1. `v-text` : 更新元素的 `textContent`
2. `v-html` : 更新元素的 `innerHTML`
3. `v-if` : 如果为true, 当前标签才会输出到页面
4. `v-else:` 如果为`false,` 当前标签才会输出到页面
5. `v-show` : 通过控制`display`样式来控制显示/隐藏
6. `v-for` : 遍历数组/对象
7. `v-on` : 绑定事件监听, 一般简写为`@`
8. `v-bind` : 强制绑定解析表达式, 可以省略`v-bind`
9. `v-model` : 双向数据绑定
10. `ref` : 为某个元素注册一个唯一标识, vue对象通过$refs属性访问这个元素对象
11. `v-cloak` : 使用它防止闪现表达式, 与css配合: `[v-cloak] { display: none }`
12. `v-once`指令：
	- 1.`v-once`所在节点在初次动态渲染后，就视为静态内容了。
	- 2.以后数据的改变不会引起`v-once`所在结构的更新，可以用于优化性能。
1. `v-pre`指令：
	- 跳过其所在节点的编译过程。
	- 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。

#### 2.4.3.4 自定义指令
需求1：定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍。
需求2：定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点。

> 备注：
> 1. 指令定义时不加v-，但使用时要加v-；
> 2. 指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。

1. 局部指令：
new Vue({directives:{指令名:配置对象}	}) 														
new Vue({directives{指令名:回调函数}})
1. 全局指令：
Vue.directive(指令名,配置对象) 或   Vue.directive(指令名,回调函数)
##### 2.4.3.4.1 局部指令
**自定义指令函数式**

1. 把要构造的指令写在`directives：{ }`, 跟`methods`类似
2. 在标签里写`v-big`，在`directives`中构造是就只用`big(){}`
3. 只要`data`中数据发生改变，模板重新解析时，就会重新调用该函数
4. 相当于对象式的`bind`和`update`
	```js
	directives:{
		//big函数何时会被调用？1.指令与元素成功绑定时（一上来）。2.指令所在的模板被重新解析时。
		'big-number'(element,binding){ //命名规则
			element.innerText = binding.value * 10
		}, 
		big(element,binding){
			console.log('big',this) //注意此处的this是window
			element.innerText = binding.value * 10
		},
	}
	```

**自定义指令对象**

- 对象中包含三个回调函数
	1. `bind(element,binding){ }` 当指令与元素绑定成功时调用
	2. `inserted(element,binding){ }` 当指令所对应的元素插入到页面后调用
	1. `update(element,binding){ }` 当data中数据发生变化时调用
	```js
	directives:{
		//big函数何时会被调用？1.指令与元素成功绑定时（一上来）。2.指令所在的模板被重新解析时。
		fbind:{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		}
	}
	```

##### 2.4.3.4.2 全局指令
```js
//对象式
 Vue.directive('fbind',{
	//指令与元素成功绑定时（一上来）
	bind(element,binding){
		element.value = binding.value
	},
	//指令所在元素被插入页面时
	inserted(element,binding){
		element.focus()
	},
	//指令所在的模板被重新解析时
	update(element,binding){
		element.value = binding.value
	}
})
//函数式
 Vue.directive('big-number',function(element,binding)){
 	element.innerText = binding.value * 10
 })
```


## 2.5 数据代理
### 2.5.1 Object.defineProperty()
- 要理解数据代理，就要对ES6中的 `Object.defineProperty()` 
- `Object.defineProperty(obj, prop, descriptor)`  ：静态方法会直接在一个对象上定义一个新属性，或修改其现有属性，并返回此对象。
- 参数：
	- obj ：要定义属性的对象。
	- prop：一个字符串或 `Symbol`，指定了要定义或修改的属性键。
	- descriptor：要定义或修改的属性的描述符。
- 返回值
	- 传入函数的对象(`obj`)，其指定的属性已被添加或修改。
- 参数 `descriptor` ：
	- `enumerable:true,` 控制属性是否可以枚举,默认值是false
	- `writable:true,`控制属性是否可以被修改,默认值是false
	- `configurable:true`控制属性是否可以被删除,默认值是false
	- `value: 18,`修改传入对象key值
	- `get(){}` : 获取变量
	- `set(){}`:修改变量
- 实例：
	```js
	let number = 18
	let person = {
		name:'张三',
		sex:'男',
	}
	Object.defineProperty(person, 'age' , {
		value: 18,
		enumerable:true,//控制属性是否可以枚举,默认值是false
		writable:true,//控制属性是否可以被修改,默认值是false
		configurable:true//控制属性是否可以被删除,默认值是false
		//当有人读取person的age属性时,get函数(getter)就会被调用,且返回值就是age的值
		get(){
			console.log('有人读取age属性了')
			return number
		}
		//当有人修改person的age属性时,set函数(setter)就会被调用,且会收到修改的具体值
		set (value){
			console.log('有人修改了age属性,且值是’,value)
			number = value
		}
	})
	```

### 2.5.2 数据代理的定义

- 定义：通过一个对象代理对另一个对象中属性的操作（读/写）
- 实例：一个最简单的数据代理的例子通过 `obj2` 代理对 `obj` 中属性的操作
![[94865e42073649088e067c197bca56f3.png|475]]


### 2.5.3 Vue中的数据代理

- 通过 vm 对象（vue实例）来代理 data 对象中属性的操作（读/写）
- Vue中数据代理的好处
- 更加方便地操作 `data` 中的数据
- 基本原理
- 通过 `Object.defineProperty()` 把 `data` 对象中所有属性添加到 `vm` 上
- 为每一个添加到vm上的属性，都指定一个`getter/setter`
- 在`getter/setter`内部去操作（读/写）`data`中对应的属性

![[add8ed3573e04040b37b46a844be51f8.png|550]]

![[5722f882d7f04c2a8d46c40165bd71de.png|575]]

## 2.6 事件处理

### 2.6.1 事件的基本使用

- 使用 `v-on:xxx` 或`@xxx`绑定事件，其中xxx是事件名
- 事件的回调需要配置在methods对象中，最终会在vm上
- `methods`中配置的函数，不要使用箭头函数，否则`this`就不是`vm`了
- `methods`中配置的函数，都是被vue所管理的函数，this的指向是vm或者组件实例对象
- `@click="demo"`和`@click="demo($event)"`效果一致，但后者可以传参

### 2.6.2 事件修饰符

- Vue 中的事件修饰符：
    - `prevent`：阻止默认事件（常用）
    - `stop`：阻止事件冒泡（常用）
    - `once`：事件只触发一次（常用）
    - capture：使用事件的捕获模式
    - self：只有event.target是当前操作的元素时才触发事件
    - passive：事件的默认行为是立即执行，无需等待事件回调执行完毕

> <span style="background:rgba(240, 200, 0, 0.2)">随记</span>：
> - `@scroll`和`@wheel`的区别
> 	- `@scroll`是滚动套的滚动，`@wheel`是鼠标滚轮的滚动
> 	- 在 `scroll`中，当滚动条到底之后，再拖动滚动条往下是不会触发 `scroll`事件的
> 	- 在`wheel`中，即使已经到底了，再操作鼠标滚轮往下，还是会触发`wheel`事件
> 	- 如果存在事件回调，`wheel`会先执行完回调函数，再来进行（响应）滚动条的滚动； `scroll`优先响应滚动条的滚动

### 2.6.3 键盘事件

Vue 中常用的按键别名：

| 按键  | 别名    | 按键  | 别名     |
| --- | ----- | --- | ------ |
| 回车  | enter | 删除  | delete |
| 退出  | esc   | 空格  | space  |
| 换行  | rab   |     |        |
| 上   | up    | 左   | left   |
| 下   | down  | 右   | right  |

- Vue 未提供别名的按键，可以使用按键原始的`key`值去绑定，但要注意转为`kebab-case`（短横线命名）
- 系统修饰键（用法特殊）：`ctrl`、`alt`、`shift`、`meta`
	- 配合`keyup`使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才会触发
	- 配合 `keydown` 使用：正常触发事件
- 也可以使用 `keycode` 去指定具体的按键（不推荐）
- `Vue.config.keycode.`自定义键名 = 键码，可以去定制键别名

- 一点小技巧：
    - 事件修饰符可以连续写
![[3b8c9a95881840678326086c041d2387.png|525]]


## 2.7 计算属性（computed）
### 2.7.1 计算属性的定义和理解

- 定义
	- 要用的属性不存在，需要通过已有的属性进行计算的来
- 原理
	- 底层借助了`Object.defineProperty`方法提供的`getter`和`setter`
- get函数什么时候执行
	- 初次读取属性值时会执行一次
	- 当依赖的数据发生变化时会被再次调用
- 优势
	- 与`methods`相比，内部有缓存机制（复用）），效率更高，调式方便

> 备注
> 	计算属性最终会出现在vm上（而不是出在`vm._data`上），直接读取使用即可
> 	如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变

- 语法:

	```js
	const vm = new Vue({
		el: '#root',
		data: {
			firstName: '张',
			lastName: '三'
		},
		computed: {
			fullName: {
				get() {
					return this.firstName + this.lastName
				},
				set(value){
					console.log('set',value);
					const str = value.split('-')
					this.firstName = str[0],
					this.lastName = str[1]
				}
			}
		}
	})
	```

### 2.7.2 计算属性的简写
- Q：什么时候用简写？
- A：属性值只读不改的时候
	```js
	computed: {
		fullName(){
			return this.firstName + this.lastName
		}
	}
	```

## 2.8 监视属性（watch）
```js
watch:{
	isHot:{
		immediate:true, //初始化时让handler调用一下
		//handler什么时候调用？当isHot发生改变时。
		handler(newValue,oldValue){
			console.log('isHot被修改了',newValue,oldValue)
		}
	}
} 
```
```js
vm.$watch('isHot',{
	immediate:true, //初始化时让handler调用一下
	//handler什么时候调用？当isHot发生改变时。
	handler(newValue,oldValue){
		console.log('isHot被修改了',newValue,oldValue)
	}
})
```

- 监视的两种写法：
	- new Vue 时传入 `watch`配置来监视指定的属性
	- 通过vm对象的`$watch()`
- 当属性变化时，回调函数自动调用，在函数内部进行计算
- 监视的属性必须存在，才能进行监视（在`data`或者`compued`里）
- `immediate`属性
	- 使用`watch` 时有一个特点，就是当值第一次绑定时，不会执行监听函数，只有值发生改变时才会执行。如果需要在最初绑定值的时候执行函数，就需要用到 `immediate`属性
- `handler`属性
	- `watch`中需要具体执行的方法

### 2.8.1 深度监视

- 深度监视的错误写法
	- numbers中属性a、b值的改变，不会导致numbers在内存中地址的改变

![[257e73d16d85455c8ca57289090ea4e7.png|525]]

- 深度监视正确的打开方式
![[ba4186bb574844fa8e7b4290b8c7f71f.png|550]]


- 深度监视
    - Vue 中的`watch`默认不监视对象内部值的改变（只监视一层）
    - 配置`deep:true`可以监视对象内部值的改变（可以监视多层）

> 备注
>     Vue 自身可以监视多级结构（对象）中数据的改变，但Vue提供给程序员的`watch`默认无法监视多级结构中属性的改变
>     使用`watch`时根据数据的具体结构，决定是否采用深度监视

### 2.8.2 监视的简写

`Q`：社么时候可以简写  
`A`：当要监视的属性的配置项只有`handler`的时候可以写成简写的形式。

```js
watch:{
	//正常写法
	/isHot:{
		immediate:true, //初始化时让handler调用一下
		deep:true,//深度监视
		handler(newValue,oldValue){
			console.log('isHot被修改了',newValue,oldValue)
		}
	}, 
	//简写
	isHot(newValue,oldValue){
		console.log('isHot被修改了',newValue,oldValue,this)
	} 
}
```

```js
//正常写法
vm.$watch('isHot',{
	immediate:true, //初始化时让handler调用一下
	deep:true,//深度监视
	handler(newValue,oldValue){
		console.log('isHot被修改了',newValue,oldValue)
	}
}) 

//简写
vm.$watch('isHot',(newValue,oldValue)=>{
	console.log('isHot被修改了',newValue,oldValue,this)
}) 
```

### 2.8.3 watch VS computed

- 区别
	- `computed`能完成的功能，`watch`都可以完成
	- `watch`能完成的功能， `computed`不一定能完成，例如： `watch`可以进行异步操作
- 两个重要的小原则
	- 所被Vue管理的函数，最好写成普通函数，这样`this`的指向才是vm或者组件实例对象
	- 所有不被Vue所管理的函数（定时器的回调函数、`ajax`的回调函数等），最好写成箭头函数，这样`this`的指向才是vm或者组件实例对象

- 在这里插入图片描述

![[f794ebb0bcc54d7ead5dbf42b864cb06.png|575]]

![[ebacab11a0c4422db3e7dd975d536a7d.png|575]]

## 2.9 样式绑定
### 2.9.1 class样式
- 写法`:class="xxx"` xxx可以是字符串、对象、数组。
- 字符串写法适用于：类名不确定，要动态获取。
	```html
	<!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
	<div class="basic" :class="mood" @click="changeMood">{{name}}</div> <br/><br/>
	<script type="text/javascript">
		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				mood:'normal',
			},
			methods: {
				changeMood(){
					const arr = ['happy','sad','normal']
					const index = Math.floor(Math.random()*3)
					this.mood = arr[index]
				}
			},	
		})
	</script>
	```
- 对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
	```html
	<!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
	<div class="basic" :class="classArr">{{name}}</div> <br/><br/>
	<script type="text/javascript">
		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				classArr:['atguigu1','atguigu2','atguigu3'],
			},
		})
	</script>
	```
- 数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。
	```html
	<!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
	<div class="basic" :class="classObj">{{name}}</div> <br/><br/>
		<script type="text/javascript">
			const vm = new Vue({
				el:'#root',
				data:{
					name:'尚硅谷',
					classObj:{
						atguigu1:false,
						atguigu2:false,
					},
				},
			})
		</script>
	```

### 2.9.2 tyle样式
- `:style="{fontSize: xxx}"`其中xxx是动态值。
	```html
	<!-- 绑定style样式--对象写法 -->
	<div class="basic" :style="styleObj">{{name}}</div> <br/><br/>
	<script type="text/javascript">
		Vue.config.productionTip = false
		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				styleObj:{
					fontSize: '40px',
					color:'red',
				},
			},
		})
		</script>
	```
- `:style="[a,b]"`其中a、b是样式对象。
	```html
	<!-- 绑定style样式--数组写法 -->
	<div class="basic" :style="styleArr">{{name}}</div>
	<script type="text/javascript">
		Vue.config.productionTip = false
		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				styleArr:[
					{
						fontSize: '40px',
						color:'blue',
					},
					{
						backgroundColor:'gray'
					}
				]
			},
		})
		</script>
	```

## 2.10 条件渲染
### 2.10.1 `v-if`
- 写法：
	1. `v-if="表达式"` 
	2. `v-else-if="表达式"`
	3. `v-else="表达式"`
- 适用于：切换频**率较低**的场景。
- 特点：不展示的`DOM`元素直接被移除。
- 注意：`v-if`可以和`v-else-if`、`v-else`一起使用，但要求结构不能被“打断”。
- 语法:
```html
<div id="root">
	<h2>当前的n值是:{{n}}</h2>
	<button @click="n++">点我n+1</button>
	<!-- 使用v-if做条件渲染 -->
	 <h2 v-if="false">欢迎来到{{name}}</h2> 
	<h2 v-if="1 === 1">欢迎来到{{name}}</h2> 

	<!-- v-else和v-else-if -->
	<<div v-if="n === 1">Angular</div>
	<div v-else-if="n === 2">React</div>
	<div v-else-if="n === 3">Vue</div>
	<div v-else>哈哈</div> 

	<!-- v-if与template的配合使用，不影响DOM结构 -->
	<template v-if="n === 1">
		<h2>你好</h2>
		<h2>尚硅谷</h2>
		<h2>北京</h2>
	</template>
</div>
<script type="text/javascript">
	Vue.config.productionTip = false
	const vm = new Vue({
		el:'#root',
		data:{
			name:'尚硅谷',
			n:0
		}
	})
</script>
```
### 2.10.2 `v-show`
- 写法：`v-show="表达式"`
- 适用于：切换频**率较高**的场景。
- 特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉
- 语法:
```html
<div id="root">
	<h2>当前的n值是:{{n}}</h2>
	<button @click="n++">点我n+1</button>
	<!-- 使用v-show做条件渲染 -->
	<h2 v-show="false">欢迎来到{{name}}</h2>
	<h2 v-show="1 === 1">欢迎来到{{name}}</h2>
</div>
<script type="text/javascript">
	Vue.config.productionTip = false
	const vm = new Vue({
		el:'#root',
		data:{
			name:'尚硅谷',
			n:0
		}
	})
</script>
```
### 2.10.3 `v-if`和`v-show`
- 使用`v-if`的时，元素可能无法获取到，而使用`v-show`一定可以获取到。

## 2.11 列表渲染

### 2.11.1 基本列表
- **v-for 指令**
	- 用于展示列表数据
- 语法：`v-for="(item, index) in xxx" :key="yyy"`
- 可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）
- 参数：
	- 数组: (`item`, `index`)
	- 对象: (`value`, `key`)
	- 字符串：(`char`, `index`)
	- 数字：(`number`, `index`)
	<br>

- 遍历数组 `item`是每一个对象，`index`为索引
	```html
	<li v-for="(item,index) in person" :key="item.id">
	 {{item.name}}---{{item.age}}
	</li>
	```

- 遍历对象 第一个收到的是值，第二个是键
	```html
	<li v-for="(value,key) in car" :key="k">
	 {{value}}---{{key}}
	</li>
	```

### 2.11.2 key的原理

1. 虚拟`DOM`中key的作用：
	- key是虚拟`DOM`对象的标识，当数据发生变化时，Vue 会根据【新数据】生成【新的虚拟`DOM`】, 随后Vue进行【新虚拟`DOM`】与【旧虚拟`DOM`】的差异比较，比较规则如下：
	<br>

1. 对比规则：
	1. 旧虚拟`DOM`中找到了与新虚拟`DOM`相同的key：
		- 若虚拟`DOM`中内容没变, 直接使用之前的真实`DOM`
		- 若虚拟`DOM`中内容变了, 则生成新的真实`DOM`，随后替换掉页面中之前的真实`DOM`
	1. 旧虚拟`DOM`中未找到与新虚拟`DOM`相同的key创建新的真实`DOM`，随后渲染到到页面。
	2. 用`index`作为`key`可能会引发的问题：
		- 若对数据进行：逆序添加、逆序删除等破坏顺序操作: 会产生没有必要的真实`DOM`更新 ==> 界面效果没问题, 但效率低
		- 如果结构中还包含输入类的`DOM`： 会产生错误`DOM`更新 ==> 界面有问题
	1. 开发中如何选择`key`:
		- 最好使用每条数据的唯一标识作为`key`, 比如id、手机号、身份证号、学号等唯一值。
		- 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用`index`作为`key`是没有问题的。

![[7061a909799846959d817c2f1b5952d6.png|640]]
![[a6c68d2e5e8c4dba81acd6153053e31a.png|640]]
### 2.11.3 Vue监视数据的原理

1. Vue会监视`data`中所有层次的数据。
    
2. 如何监测对象中的数据？
	- 通过setter实现监视，且要在new Vue时就传入要监测的数据。
	- 对象中后追加的属性，Vue默认不做响应式处理
	- 如需给后添加的属性做响应式，请使用如下API：`Vue.set(target，propertyName/index，value)` 或 `vm.$set(target，propertyName/index，value)`
	
1. 如何监测数组中的数据？ 通过包裹数组更新元素的方法实现，本质就是做了两件事：
    
    1. 调用原生对应的方法对数组进行更新。
    2. 重新解析模板，进而更新页面。
4. 在Vue修改数组中的某个元素一定要用如下方法：
    
    1. 使用这些API: `push()`、`pop()`、`shift()`、`unshift()`、`splice()`、`sort()`、`reverse()`
    2. `Vue.set()` 或 `vm.$set()`

> 特别注意：`Vue.set()` 和 `vm.$set()` 不能给 `vm` 或 `vm` 的根数据对象 添加属性！！！

### 2.11.4 数组更新检测

- Vue 重写了数组中的一系列改变数组内部数据的方法（先调用原生，再更新界面） 
- Vue将被侦听的数组的变更方法进行了包裹,所以它们也将会触发视图更新。这些被包裹过的方法
- 包括: `push()，pop()，shift()，unshift()，splice()，sort()，reverse()`


### 2.11.5 过滤与排序

#### 2.11.5.1 过滤操作

- 可以使用`watch`也可以使用计算属性，使用计算属性更加简单方便一点
<br>
- 语法:
	```html
	<body>
	  <!-- 准备好一个容器-->
	  <div id="root">
	    <h2>人员列表</h2>
	    <input type="text" placeholder="请输入名字" v-model="keyWord">
	    <ul>
	      <li v-for="(p,index) of filPerons" :key="index">
	        {{p.name}}-{{p.age}}-{{p.sex}}
	      </li>
	    </ul>
	  </div>
	
	  <script type="text/javascript">
	    Vue.config.productionTip = false
	
	    //用watch实现
	    //#region 
	    new Vue({
	      el:'#root',
	      data:{
	        keyWord:'',
	        persons:[
	          {id:'001',name:'马冬梅',age:19,sex:'女'},
	          {id:'002',name:'周冬雨',age:20,sex:'女'},
	          {id:'003',name:'周杰伦',age:21,sex:'男'},
	          {id:'004',name:'温兆伦',age:22,sex:'男'}
	        ],
	        filPerons:[]
	      },
	      watch:{
	        keyWord:{
	          immediate:true,
	          handler(val){
	            this.filPerons = this.persons.filter((p)=>{
	              return p.name.indexOf(val) !== -1
	            })
	          }
	        }
	      }
	    }) 
	    //#endregion
	
	    //用computed实现
	    new Vue({
	      el: '#root',
	      data: {
	        keyWord: '',
	        persons: [
	          {id: '001',name: '马冬梅',age: 19,sex: '女'},
	          {d: '002',name: '周冬雨',age: 20,sex: '女'},
	          {id: '003',name: '周杰伦',age: 21,sex: '男'},
	          {id: '004',name: '温兆伦',age: 22,sex: '男'}
	        ]
	      },
	      computed: {
	        filPerons() {
	          return this.persons.filter((p) => {
	            return p.name.indexOf(this.keyWord) !== -1
	          })
	        }
	      }
	    })
	  </script>
	```

#### 2.11.5.2 排序
- 语法:
	```html
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>人员列表</h2>
			<input type="text" placeholder="请输入名字" v-model="keyWord">
			<button @click="sortType = 2">年龄升序</button>
			<button @click="sortType = 1">年龄降序</button>
			<button @click="sortType = 0">原顺序</button>
			<ul>
				<li v-for="(p,index) of filPerons" :key="p.id">
					{{p.name}}-{{p.age}}-{{p.sex}}
					<input type="text">
				</li>
			</ul>
		</div>
	
		<script type="text/javascript">
			Vue.config.productionTip = false
			
			new Vue({
				el:'#root',
				data:{
					keyWord:'',
					sortType:0, //0原顺序 1降序 2升序
					persons:[
						{id:'001',name:'马冬梅',age:30,sex:'女'},
						{id:'002',name:'周冬雨',age:31,sex:'女'},
						{id:'003',name:'周杰伦',age:18,sex:'男'},
						{id:'004',name:'温兆伦',age:19,sex:'男'}
					]
				},
				computed:{
					filPerons(){
						const arr = this.persons.filter((p)=>{
							return p.name.indexOf(this.keyWord) !== -1
						})
						//判断一下是否需要排序
						if(this.sortType){
							arr.sort((p1,p2)=>{
								return this.sortType === 1 ? p2.age-p1.age : p1.age-p2.age
							})
						}
						return arr
					}
				}
			}) 
		</script>
	```

## 2.12 表单数据的收集


- 若：`<input type="text"/>`，则`v-model`收集的是`value`值，用户输入的就是`value`值。
	```html
	<input type="text" v-model.trim="userInfo.account"> 
	<input type="password" v-model="userInfo.password"> 
	<input type="number" v-model.number="userInfo.age"> 
	<textarea v-model.lazy="userInfo.other"></textarea>
	data:{
	userInfo:{
		account:'',
		password:'',
		age:'',
		other:'',
		}
	}
	```

- 若：`<input type="radio"/>`，则`v-model`收集的是`value`值，且要给标签配置`value`值。
	```html
	男<input type="radio" name="sex" v-model="userInfo.sex" value="male">
	女<input type="radio" name="sex" v-model="userInfo.sex" value="female">
	data:{
		userInfo:{
			gender:'female',
		}
	}
	```

- 若：`<input type="checkbox"/>`
	1. 没有配置`input`的`value`属性，那么收集的就是`checked`（勾选 or 未勾选，是布尔值）
	2. 配置`input`的`value`属性:
		- `v-model`的初始值是非数组，那么收集的就是`checked`（勾选 or 未勾选，是布尔值）
		- `v-model`的初始值是数组，那么收集的的就是`value`组成的数组

	```html
	学习<input type="checkbox" v-model="userInfo.hobby" value="study">
	打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
	吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
	data:{
		userInfo:{
			hobby:[],
		}
	}
	```
	
> - [!]  备注：`v-model`的三个修饰符：
> 	- `lazy`：失去焦点再收集数据
> 	- `number`：输入字符串转为有效的数字
> 	- `trim`：输入首尾空格过滤
> 


## 2.13 过滤器 
- ~~第三方库：dayjs~~
- ~~定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。~~
- ~~语法：~~
	1. ~~注册过滤器：**全局过滤器**`Vue.filter(name,callback)` 或 **局部过滤器**`new Vue{filters:{}}`~~
	2. ~~使用过滤器：`{{ xxx | 过滤器名}}`  或  `v-bind:属性 = "xxx | 过滤器名"`~~
- ~~备注：~~
	1. ~~过滤器也可以接收额外参数、多个过滤器也可以串联~~
	2. ~~并没有改变原本的数据, 是产生新的对应的数据~~


	```html
	<!-- 过滤器实现 -->
	<h3>现在是：{{time | timeFormater}}</h3>
	<!-- 过滤器实现（传参） -->
	<h3>现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
	<script type="text/javascript">
	//全局过滤器
	Vue.filter('mySlice',function(value){
		return value.slice(0,4)
	})
	//局部过滤器
	filters:{
		timeFormater(value,str='YYYY年MM月DD日 HH:mm:ss'){//str设置了形参默认值
			return dayjs(value).format(str)
		}
	}
	</script>
	```

## 2.14 Vue 对象的生命周期

-  **生命周期**：
    1. 又名：**生命周期回调函数**、**生命周期函数**、**生命周期钩子**。
    2. 是什么：Vue 在关键时刻帮我们调用的一些特殊名称的函数。
    3. 生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。
    4. 生命周期函数中的 `this` 指向是 vm 或 组件实例对象(VueComponents)。
	<br>

1. **初始化显示**
	- `beforeCreate()`  
		- 无法通过 vm 去访问 `data`/`props`/`methods`，初始化声明周期、事件，没有开始==数据代理，数据监测==
	- `created()`
		- `data`/`props`/`methods` 都可用,可以通过vm去访问，但组件的结构尚未生成，不能操作`DOM`，只是在内存中生成了 `HTML`结构
	- `beforeMount()`
		- 页面生成Vue未解析的`DOM`元素，只是将要将内存中的`HTML`结构渲染到页面
	- `mounted()`
		- 生成经过Vue解析后`DOM`元素，页面渲染到浏览器，可以操作`DOM`元素了
		<br>
1. **更新状态**
	- `beforeUpdate()`
		- `data`中数据更新完成，页面还没修改，还是旧数据，相当于`data`中数据是新数据，页面还是旧数据，还没有将`data`数据渲染到页面当数据变化之后，操作`DOM`元素，就用`updated`
	- `updated()`
		- 页面和数据都是`data`更新后的，最新的数据
		<br>
1. **销毁 vue 实例**: `vm.$destory()`
	- `beforeDestory()`
	- `destoryed()`

-  常用的生命周期方法
	- `mounted()`: 发送ajax请求, 启动定时器、绑定自定义事件、订阅消息等异步任务【初始化操作】
	- `beforeDestroy()`: 做收尾工作, 如: 清除定时器、解绑自定义事件、取消订阅消息等【首尾工作】

-  关于销毁 Vue 实例
    1. 销毁后借助Vue开发者工具看不到任何信息
    2. 销毁后自定义事件会失效，但原生`DOM`事件依然有效
    3. 一般不会在`beforeDestroy`操作数据，因为即使操作数据，也不会再触发更新流程了。


![[794c68579d2202ac968b946e050e7201.png|650]]
### 2.14.1 原理解释图

![[Pasted image 20240724201230.png|650]]

![[Pasted image 20240724201309.png|650]]


### 2.14.2 父子组件的生命周期

- 加载渲染过程
	```js
	父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate->子created->子beforeMount->子mounted->父mounted
	```
- 更新过程
	```js
	父beforeUpdate->子beforeUpdate->子updated->父updated
	```
- 销毁过程
	```js
	父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
	```
- 常见钩子版本

	```js
	父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
	```

## 2.15 组件
### 2.15.1 组件的概念
-  传统方式编写应用
- 存在问题：
    - 依赖关系混乱，不好维护
    - 代码复用率不高

![[a5e67412b8c24658a2455130cbadcf6a~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp|650]]
<br>

-  使用组件方式编写应用
- 组件的定义——实现应用中局部功能代码和资源的集合

![[30ec041452744aa19d302efc96d4d270~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp|650]]
### 2.15.2 非单文件组件
#### 2.15.2.1 使用组件的三大步骤
-  定义组件（创建组件）
-  注册组件
-  使用组件（写组件标签）
##### 2.15.2.1.1 定义组件
-  `const school = Vue.extend({})`
-  用`Vue.extend(options)`创建，其中`options`和`new Vue（options)` 时传入的那个`options`几乎一样，但有以下区别
	1. 不要写`el`——最终所有的组件都要经过一个vm的管理，由vm中的`el`决定服务哪个容器
	2. `data`必须写成函数——避免组件被复用时，数据存在引用关系

> - [!] 使用 `<tempalte>` 可以配置组件结构，模板内使用模板字符串，可以换行，使结构更加清楚

- 语法:
	```js
	const school = Vue.extend({
	    template: `  
	        <div class="demo">
	            <h2>学校名称：{{schoolName}}</h2>
	            <h2>学校地址：{{address}}</h2>
	            <button @click="showName">点我提示学校名</button>	
	        </div>
		`,//模板内使用模板字符串，可以换行，使结构更加清楚
	    // el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
	    data() {
	      return {
	        schoolName: '尚硅谷',
	        address: '北京昌平'
	      }
	    },
	    methods: {
	      showName() {
	        alert(this.schoolName)
	      }
	    },
	  })
	```

##### 2.15.2.1.2 注册组件
-  局部注册：`new Vue`的时候传入`components`选项
-  全局注册：`Vue.component`('组件名', 组件)
- - 语法:
	```js
	//全局注册组件
	  Vue.component('hello', hello)
	
	  //创建vm
	  new Vue({
	    el: '#root',
	    data: {
	      msg: '你好啊！'
	    },
	    //第二步：注册组件（局部注册）
	    components: {
	      school,
	      student
	    }
	  })
	```
##### 2.15.2.1.3 使用组件
- 语法:
	```html
	<!-- 准备好一个容器-->
	  <div id="root">
	    <!-- 第三步：编写组件标签 -->
	    <school></school>
	    <!-- 第三步：编写组件标签 -->
	    <student/>  <!--可以成自结束标签（非脚手架情况下尽量不使用）-->
	  </div>
	```

#### 2.15.2.2 组件使用的注意点

-  关于组件名
- 一个单词组成
	1. 第一种写法（首字母小写）：`school`
	2. 第二种写法（首字母大写）：`School`
- 多个单词组成 
	1. 第一种写法（`kebab-case`命名）：`my-school`
	2. 第二种写法（`CamelCase`命名）：`MySchool`（需要Vue脚手架支持）
> - [!] 备注 
> 	- 组件名尽可能回避HTML中已有的元素名称，例如h2、H2
> 	- 可以使用`name`配置项指定组件在开发者工具中呈现的名字

- 语法:
	```html
	<body>
	    <!-- 准备好一个容器-->
	    <div id="root">
	        <h1>{{msg}}</h1>
	        <school></school>
	    </div>
	</body>
	<script type="text/javascript">
	    Vue.config.productionTip = false
	    //定义组件
	    const s = Vue.extend({
	        name: 'atguigu',
	        template: `
	          <div>
	              <h2>学校名称：{{name}}</h2>	
	              <h2>学校地址：{{address}}</h2>	
	          </div>
	      `,
	        data() {
	            return {
	                name: '尚硅谷',
	                address: '北京'
	            }
	        }
	    })
	    new Vue({
	        el: '#root',
	        data: {
	            msg: '欢迎学习Vue!'
	        },
	        components: {
	            school: s
	        }
	    })
	</script>
	```

![[Pasted image 20240725031412.png|250]]
-  关于组件标签
	- 第一种写法：`<school></school>`
	- 第二种写法：`<school/>` (不使用脚手架会导致后续组件不能渲染)

-  简写方式 `const school = Vue.extend({options})` 可以简写成 `const school = {options}`

#### 2.15.2.3 VueComponent

1. `app` 组件本质是一个名为 `VueComponent` 的构造函数，且不是程序员定义的，是`Vue.extend`生成的

2. 我们只需要写`<app/>`或`<app></app>`，Vue解析时会帮我们创建`app组件`的实例对象，即Vue帮我们执行`new VueComponent({options})`

3. 特别注意：每次调用`Vue.extend`，返回的都是一个全新的`VueComponent`

4. 关于`this`指向
	- 组件配置中：`data函数`、`methods中的函数`、`watch中的函数`、`computed中的函数` 它们的`this`均是【VueComponent实例对象】 
	- `new Vue(options)`配置中：`data函数`、`methods中的函数`、`watch中的函数`、`computed中的函数` 它们的`this`均是【Vue实例对象】

1. VueComponent的实例对象，以后简称VC（也可称之为：组件实例对象）

2. Vue的实例对象，以后简称为VM

> - [!] 一个重要的内置关系
> 	```js
> 	VueComponent.prototype.__proto__ === Vue.prototype
> 	```



### 2.15.3 单文件组件

#### 2.15.3.1 组成
-  模板页面
	```html
	<template>
		页面模板
	</template>
	```
-  JS 模块对象
	```js
	<script>
	export default {
	    data() {return {}},
	    methods: {},
	    computed: {},
	    components: {}
	}
	</script>
	```
-  样式
	```html
	<style>
	    样式定义
	</style>
	```


#### 2.15.3.2 基本使用

1. 引入组件
1. 注册成标签
2. 使用组件标签

- 语法:
	```html
	<template>
	    <div>
	        <HelloWorld></HelloWorld> <!-- 3. 使用组件标签-->
	        <hello-world></hello-world>
	    </div>
	</template>
	<script type="text/javascript">
	    import HelloWorld from './components/HelloWorld' //1. 引入组件
	    export default {
	        name: 'App',
	        components: { //2. 注册成标签
	            HelloWorld
	        }
	    }
	</script>
	```

# 3 Vue Advanced
## 3.1 Vue 脚手架(Vue Cli)

### 3.1.1 cli基本目录
├── **node_modules**   存放项目依赖
├── **public**
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── **src**
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   │── main.js: 入口文件
├── **.gitignore**: git版本管制忽略的配置
├── **babel.config.js**: babel的配置文件
├── **package.json**: 应用包配置文件
├── **README.md**: 应用描述文件
├── **package-lock.json**：包版本控制文件

### 3.1.2 创建Vue项目
```bash
//全局安装脚手架
npm install -g @vue/cli
//安装vue
npm install vue@^2
//创建项目
vue creat xx
```
### 3.1.3 不同版本的Vue

1. `vue.js`与`vue.runtime.xxx.js`的区别：
   1. vue.js是完整版的Vue，包含：核心功能 + 模板解析器。
   2. vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需要使用 `render` 函数接收到的 createElement 函数去指定具体内容。
	```js
	new Vue({
		el:'#app',
		//render函数完成了这个功能：将App组件放入容器中
	  render: h => h(App),
		// render:q=> q('h1','你好啊')
		// template:`<h1>你好啊</h1>`,
		// components:{App},
	})
	```

### 3.1.4 vue.config.js配置文件

1. 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
2. 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

## 3.2 ref属性

1. 被用来给元素或子组件注册引用信息（id的替代者）
2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）然后就可以调用该组件的方法和数据
3. ref可以加在组价标签里，得到这个组件的实例对象,实现父组件直接**调用子组件的方法和数据**,给子组件绑定事件,但是要在`Mounted`函数里执行。
4. 使用方式：`ref="title"`  `this.$refs.title`
- 语法:
	```html
	<h1 v-text="msg" ref="title"></h1>
	<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
	<School ref="sch"/>
	<script type ="text/javascript">
	methods: {
		showDOM(){
			console.log(this.$refs.title) //真实DOM元素
			console.log(this.$refs.btn) //真实DOM元素
			console.log(this.$refs.sch) //School组件的实例对象（vc）
		}
	},
	</script>
	```

## 3.3 mixin(混入)
1. 功能：可以把多个组件共用的配置提取成一个混入对象
2. 使用方式：

-  创建混入组件   
	- mixin.js
	```js
	export const hunhe = {
		methods: {
			showName(){
				alert(this.name)
			}
	```
-  入口文件引入并注册组件（全局注册：vm和所有vc都会得到mixin.js中的方法）
	```js
	import {hunhe,hunhe2} from './mixin' //引入两个组件
	Vue.mixin(hunhe)//同时也要注册两个组件
	Vue.mixin(hunhe2)//全局注册
	```

-  在需要的组件中引入并注册（局部注册：当前组件可用）
	```js
	import {hunhe,hunhe2} from './mixin'
	mixins: [hunru],//在组件data 中的 mixins 属性中注册
	```

## 3.4 Vue 插件

1. 功能：用于增强 Vue
2. 本质：包含`install`方法的一个对象，`install`的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
3. 定义插件：
	```js
	export default {
		install (Vue, options) {
		   // 1. 添加全局过滤器
		   Vue.filter(....)
		   // 2. 添加全局指令
		   Vue.directive(....)
		   // 3. 配置全局混入(合)
		   Vue.mixin(....)
		   // 4. 添加实例方法
		   Vue.prototype.$myMethod = function () {...}
		   Vue.prototype.$myProperty = xxxx
		}
	}
	```

4. 使用插件：```Vue.use()```（入口文件中）

## 3.5 scoped样式
1. 作用：让样式在局部生效，防止冲突。
2. 写法：```<style scoped>```

## 3.6 webStorage

1. 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
2. 浏览器端通过 `Window.sessionStorage` 和 `Window.localStorage` 属性来实现本地存储机制。
3. 相关API：
   1. ```xxxxxStorage.setItem('key', 'value');```
      		该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
   2. ```xxxxxStorage.getItem('person');```
      ​		该方法接受一个键名作为参数，返回键名对应的值。
   3. ```xxxxxStorage.removeItem('key');```
      ​		该方法接受一个键名作为参数，并把该键名从存储中删除。
   4. ``` xxxxxStorage.clear()```
      ​		该方法会清空存储中的所有数据。
4. 备注：
   1. SessionStorage存储的内容会随着浏览器窗口关闭而消失。
   2. LocalStorage存储的内容，需要手动清除才会消失。
   3. ```xxxxxStorage.getItem(xxx)```如果xxx对应的value获取不到，那么getItem的返回值是null。
   4. ```JSON.parse(null)```的结果依然是null。

## 3.7 组件间通讯

### 3.7.1 props配置项  **父组件 ==> 子组件**
- 功能：让组件接收外部传过来的数据
- 传递数据：
	```html
	<!-- 父组件携带信息-->
	<Student name="李四" sex="女" :age="18"/>
	```
- 接收数据：
   1. 第一种方式（只接收）：```props:['name'] ```
   2. 第二种方式（限制类型）：```props:{name:String}```
   3. 第三种方式（限制类型、限制必要性、指定默认值）：
- 语法:
	```js
	//简单声明接收
	props:['name','age','sex'] 
	
	//接收的同时对数据进行类型限制
	props:{
		name:String,
		age:Number,
		sex:String
	} 
	
	//接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
	props:{
		name:{
			type:String, //name的类型是字符串
			required:true, //name是必要的
		},
		age:{
			type:Number,
			default:99 //默认值
		},
		sex:{
			type:String,
			required:true
		}
	}
	```

>- [!]   props是只读的，Vue 底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

### 3.7.2 自定义事件    **子组件 ==> 父组件**

1. 主要实现子向父组件进行数据传递

2. 和click等内置事件一样（@click="")，要在父组件中给子组件添加一个自定义事件，父组件会收到子组件传过来的值,也可以添加事件修饰符.once之类的
	```js
	<School @getSchoolName="schoolName" />
	methods: {
	 	schoolName(name) {
		   console.log("我的学校是" + name);
		 },
	},
	```

3. 在子组件内用`$emit(“自定义事件名”,要传的参数)` 来使用该自定义事件

	```js
	methods: {
	    send() {
	      this.$emit("getSchoolName", this.name);
	    },
	  },
	```

-  **解绑自定义事件**
	```js
	this.$off('atguigu') //解绑一个自定义事件
	this.$off(['atguigu','demo']) //解绑多个自定义事件
	this.$off() //解绑所有的自定义事件
	```

-  **子组件使用原生事件**
- 使用一个事件修饰符(.native)
- vue会将写在组件中的事件都看做自定义事件，要想触发原生的事件，要加.native
- `<School @click.native="schoolName" />`

### 3.7.3 全局事件总线
实现任意组件间的通信
-  过程
	1. 数据发送方，调用 emit ( ′ 事件名称 ′ , 要发送的数据 ) 
	2. 据接收方，调用on(‘事件名称’，事件处理函数) 
	3. 最后在beforeDestory()函数中解绑自定义事件


-  安装全局事件总线$bus （入口文件）
	- on, emit,off 属性只有在 vue.prototype上才有，而 vc , vm 都可以访问 vue.prototype ，所以每个组件都可以获得 on, emit,off 属性只有在vue.prototype上才有，并且将 bus 绑定在 vue.prototype 上，每个组件都可以看见它，并且将bus配置为 vm，即 bus 也会拥有on, emit,off属性
	```js
	new Vue({
		el:'#app',
		render: h => h(App),
		beforeCreate() {
			Vue.prototype.$bus = this
		},
	})
	```

-  发送数据
	```js
	<button @click="sendStudentName">把学生名给School组件</button>
	methods: {
		sendStudentName(){
			this.$bus.$emit('hello',this.name)
		}
	},
	```

-  接受数据
	```js
	mounted() {
		this.$bus.$on('hello',(data)=>{
			console.log('我是School组件，收到了数据',data)
		})
	},
	beforeDestroy() {
		this.$bus.$off('hello')
	},
	```

### 3.7.4 消息订阅与发布
一种任意组件间通信的方式
-  一个第三方库 **pubsub-js**
	- `npm i pubsub-js`
	- 提供了两个方法 
		- `pubsub.subscribe("  ",opition)`
		- `pubsub.publish("  ",opition)`
		- 第一个参数是消息名字，第二个是数据，需要传入一个回调函数，函数传参

-  发布消息
	```js
	import pubsub from 'pubsub-js'//引入第三方库
	<button @click="sendStudentName">把学生名给School组件</button>
	methods: {
		sendStudentName(){
			pubsub.publish('hello',666)
		}
	},
	```

-  接受消息
	```js
	import pubsub from 'pubsub-js'//引入第三方库
	mounted() {
		this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
			console.log(this)
			// console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
		})
	},
	beforeDestroy() {
		pubsub.unsubscribe(this.pubId)
	},
	```

## 3.8 $nextTick

- this.$nextTick(回调函数)

- vue在解析模板时，不会立即更改，只有将代码执行一遍后统一重新解析

- 只有在DOM元素更新到页面之后才执行函数体内代码

	```js
	this.$nextTick( () =>{
		this.$refs.inputTitle.focus();
	  });
	```

## 3.9 插槽（部分api已经弃用）
就是在复用组件时，对复用组件的html结构进行调整
1. 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 <strong style="color:red">父组件 ===> 子组件</strong> 。
2. 分类：默认插槽、具名插槽、作用域插槽
3. api：
	1. **默认插槽**
		1. 子组件：`<slot></slot>`
		2. 父组件： 直接在组件标签里面写结构
	2. **具名插槽**
		1. 子组件：`<slot name="名字"></slot>`
		2. 父组件：在要添加的结构上加上`slot="名字"`
	3. **作用域插槽**
		1. 子组件：`<slot :games="games" msg="hello"></slot>`，绑定数据，传递数据
		2. 父组件：`<template scope="自己命名"></template>`,写在结构外

### 3.9.1 默认插槽
- 语法:
	```jsx
	子组件：
	<template>
		<div class="category">
			<h3>{{title}}分类</h3>
			<!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
			<slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
		</div>
	</template>
	
	父组件：
	<template>
		<Category title="美食" >
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
		</Category>
		<Category title="游戏" >
			<ul>
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
		</Category>
	</template>
	```

### 3.9.2 具名插槽
 - 语法:
	```jsx
	子组件：
	<template>
		<div class="category">
			<h3>{{title}}分类</h3>
			<!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
			<slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
			<slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot>
		</div>
	</template>
	父组件：
	<template>
		<Category title="美食" >
			<img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
			<a slot="footer" href="http://www.atguigu.com">更多美食</a>
		</Category>
		<Category title="游戏" >
			<ul slot="center">
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
			<div class="foot" slot="footer">
				<a href="http://www.atguigu.com">单机游戏</a>
				<a href="http://www.atguigu.com">网络游戏</a>
			</div>
		</Category>
	</template>
	```



### 3.9.3 作用域插槽
- 使用api：
	- `<template></template>`,包裹结构
	- `scope="自己命名"`，子组件带过来的数据是一个对象，可用传递多组数据，可以结构赋值简化。

- 数据在子组件，父组件使用api接收
- 语法:
	```vue
	子组件：
	<template>
		<div class="category">
			<h3>{{title}}分类</h3>
			<slot :games="games" msg="hello">我是默认的一些内容</slot>
		</div>
	</template>
	父组件：
	<template>
		<Category title="游戏">
			<template scope="atguigu">
				<ul>
					<li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
				</ul>
			</template>
		</Category>
		
		<Category title="游戏">
			<template scope="{games}">
				<ol>
					<li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
				</ol>
			</template>
		</Category>
	</template>
	```


## 3.10 VueX

 vuex  中一般存储组件之间共享的数据，适用于多组件共享某些数据，将这些共享的数据集中起来管理。

 vuex 中数据都是响应式的，能够保持数据与页面的同步，数据改变重新解析模板。

 vuex 是实现集中式状态管理的一个 Vue 插件，适用于任意组件间通信。
![[26486ea99d7870ae76f53445b661bdcd.png|475]]

### 3.10.1 搭建 < Vuex  环境
- api：
	- **数据使用组件**：
		- `$store.dispatch('a',value)`
			- 参数一：store 中 actions 的配置项
			- 参数二：用户输入或者选择的数据
		- `$store.commit('a',value)`
			- 参数一：store 中 mutations 的配置项
			- 参数二：用户输入或者选择的数据
	- **store 组件**：
		- actions 配置项
			- `context.commit('A',value)`
				- 参数一：context （一个mini state ，它拥有部分state 的属性）
				- 参数二：用户输入或者选择的数据
	 
-  安装vuex
	- `npm i vuex`安装的是 vuex4 版本，该版本只能用在 vue3，vue2 只能用 vuex3 版本 `npm i vuex@3`
		- vue3 ---> vuex4   `npm i vuex`
		- vue2 ---> vuex3   `npm i vuex@3`
		<br>

-  创建store文件
	- src/store/index.js （先要有 vuex，再创建 `store`实例）
	- `store`实例对象是由`Vuex.store({})`构造出来的，构造之后，在vc,vm上就会出现`$store`属性。
	- `$store`属性中有`dispatch`，`commit`方法
	- 实例：构建`index.js`
		```js
		//引入vue
		import Vue from 'vue'
		//引入vuex
		import Vuex from 'vuex'
		Vue.use(Vuex)
		//用于响应组件中的动作
		const actions = {}
		
		//用于操作数据
		const mutations = {}
		
		//用于储存数据
		const state = {}
		
		//数据进行运算加工（类似于 data 中的 computed）
		const getter = {
			return //必须用 return 返回数据
		}
		//创建并导出store
		export default new Vuex.Store({
		  actions, mutations, state
		})
		```

	- 实例：在`main.js`中引入 store
		```js
		//引入store
		import store from './store'
		//创建vm
		new Vue({
		  render: h => h(App),
		  store,
		  beforeCreate() {
		    Vue.prototype.$bus = this
		  }
		}).$mount('#app')
		```

> - [!] 一个注意点:
> 脚手架在解析代码时，会优先解析 import (引入的文件)，所以在引入 store 和 `Vue.use(store)` 时要注意这个情况，那最终的解决办法就是直接在组件 store 里面引入 Vue.js 以及 Vuex 并注册好 Vuex。

### 3.10.2 Vuex 的使用
1. 在组件中使用 `dispatch` 给 **actions**

	```js
	 this.$store.dispatch("jia", this.n);
	```

1. 在 store 中配置 actions , actions 主要写业务逻辑，将数据 commit 给 mutations 进行操作
	```js
	const actions = {
	  //context上下文，有commit，dispatch,state属性
	  jia(context, value) {
	    context.commit('JIA', value)
	  },
	  jian(context, value) {
	    if(context.state.sum % 2){
	        context.commmit('JIA',value)
	    }
	  }
	}
	```

	> 如果没有网络请求或业务逻辑，可以直接越过actions，直接编写 commit

1. mutations主要进行数据加工
	mutations会收到两个参数，第一个是state，第二个就是传递过来的数据
	```js
	const mutations = {
	  JIA(state, value) {
	    state.sum += value;
	  },
	  JIAN(state, value) {
	    state.sum -= value;
	  }
	}
	```

1. state 就是将一些共享的数据存放进来，类似与组件中的 data
    在组件模板中想使用 state 中数据 `$store.state.sum`

	```js
	//用于储存数据
	const state = {
	  sum: 0
	}
	```

1. getters 就是将 state 中的数据进行运算加工，类似与组件中的 computed
    在组件中读取 `$store.getters.bigData`

	```js
	const getters = {
	  bigData(state){
	     return state.sum*10  //必须要用return语句，收到的参数就是state
	  }
	}
	```


### 3.10.3 数据映射
api：mapState ， mapGetter ， mapActions ， mapMutations
> 首先要在组件中引入mapState `import {mapState} from 'vuex'`
-  mapState方法：用于帮助我们映射`state`中的数据为计算属性
	```js
	computed: {
	    //借助mapState生成计算属性：sum、school、subject（对象写法）
	     ...mapState({sum:'sum',school:'school',subject:'subject'}),
	         
	    //借助mapState生成计算属性：sum、school、subject（数组写法）
	    ...mapState(['sum','school','subject']),
	},
	```



-  <strong>mapGetters方法：</strong>用于帮助我们映射```getters```中的数据为计算属性
	```js
	computed: {
	    //借助mapGetters生成计算属性：bigSum（对象写法）
	    ...mapGetters({bigSum:'bigSum'}),
	
	    //借助mapGetters生成计算属性：bigSum（数组写法）
	    ...mapGetters(['bigSum'])
	},
	```


-  <strong>mapActions方法：</strong>用于帮助我们生成与```actions```对话的方法，即：包含```$store.dispatch(xxx)```的函数
	```js
	methods:{
	    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
	    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
	
	    //靠mapActions生成：incrementOdd、incrementWait（数组形式）
	    ...mapActions(['jiaOdd','jiaWait'])
	}
	```

-  <strong>mapMutations方法：</strong>用于帮助我们生成与```mutations```对话的方法，即：包含```$store.commit(xxx)```的函数
	```js
	methods:{
	    //靠mapActions生成：increment、decrement（对象形式）
	    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
	    
	    //靠mapMutations生成：JIA、JIAN（对象形式）
	    ...mapMutations(['JIA','JIAN']),
	}
	```
	
	> - [!] 备注：
	> mapActions 与 mapMutations 使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。

### 3.10.4 Vuex 的模块化
让代码更好维护，让数据分类更加明确

1. 拆分Vuex的入口文件
	```js
	//该文件用于创建Vuex中最为核心的store
	import Vue from 'vue'
	//引入Vuex
	import Vuex from 'vuex'
	import countOptions from './count'
	import personOptions from './person'
	//应用Vuex插件
	Vue.use(Vuex)
	
	//创建并暴露store
	export default new Vuex.Store({
		modules:{
			countAbout:countOptions,
			personAbout:personOptions
		}
	})
	```

![[Pasted image 20240805182918.png|163]]

1. 数据组件化
	```js
	//求和相关的配置
	export default {
		namespaced:true,
		actions:{},
		mutations:{},
		state:{},
		getters:{},
	}
	```

1. 数据读取配置
	1. map方法
		```js
		computed:{
			//借助mapState生成计算属性，从state中读取数据。（数组写法）
			...mapState('countAbout',['sum','school','subject']),
			...mapState('personAbout',['personList']),
			//借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
			...mapGetters('countAbout',['bigSum'])
		},
		methods: {
			//借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
			...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
			//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
			...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
		},
		```
	1. 手动方法
		```js
		computed:{
			personList(){
				return this.$store.state.personAbout.personList
			},
		},
		methods: {
			add(){
				const personObj = {id:nanoid(),name:this.name}
				this.$store.commit('personAbout/ADD_PERSON',personObj)
				this.name = ''
			},
		}
		```


## 3.11 Vue Router
> 一个路由就是一个对应关系，key为路径，value为组件
> 用来实现单页面应用，每条路径对应一个页面

### 3.11.1 前端路由 和 后端路由
- **后端路由** 概念：根据不同的用户URL请求，返回不同的内容 本质：**URL请求地址**与**服务器资源**之间的对应关系
![在这里插入图片描述|575](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7003de84fdb4beab97303e053b50cf3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

- **前端路由** 概念：根据不同的用户事件，显示不同的页面内容 本质：**用户事件**与**事件处理函数**之间的对应关系 
![在这里插入图片描述|575](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ceff65c9281743ed8e3125a5fba4206d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 3.11.2 基本使用

- 环境搭建
1. 安装vue-router `npm i vue-router@3.5.2 -S` （vue2版本只能使用 vue-router3）
2. 创建 src/router 文件夹，创建 index.js 文件并配置。
	```js
	// 该文件专门用于创建整个应用的路由器
	import VueRouter from 'vue-router'
	//引入组件
	import About from '../components/About'
	import Home from '../components/Home'
	//创建并暴露一个路由器
	export default new VueRouter({
		routes:[
			{path:'/about',component:About},
		]
	})	
	```
3. 在main.js 中引入 VueRouter 插件并注册，然后引入路由，挂载 VueRouter
	```js
	//引入VueRouter
	import VueRouter from 'vue-router'
	//引入路由器
	import router from './router'
	//注册插件
	Vue.use(VueRouter)
	//创建vm
	new Vue({
		el:'#app',
		render: h => h(App),
		router:router//挂载路由
	})
	```


-  使用路由
1. 修改 a 标签（active-class可配置高亮样式）
	```html
	<router-link active-class="active" to='/home'>首页</router-link>
	```

2. 指定组件显示的位置
	```html
	<router-view></router-view>
	```


- [!] 注意事项
	1. 路由组件和普通组件分别放在 pages 文件夹和 components 文件夹。
	2. 切换路由时，**原来**的路由组件**会被销毁**，当再次切换回来时会**重新挂载**。
	3. 每个路由组件上会有两个新的属性，$route 和 $router ，route 存放的是路由信息包括路由路径等等，router 是路由器且整个应用自有一个路由器。

### 3.11.3 多级路由
1. 路由器的配置
	```js
	// 该文件专门用于创建整个应用的路由器
	import VueRouter from 'vue-router'
	//引入组件
	import Message from '../pages/Message'
	//创建并暴露一个路由器
	export default new VueRouter({
		routes:[
			{		path:'/home',
				component:Home,
				children:[
					{path:'news',component:News,},//在path中不需要 /
					{path:'message',component:Message,}]
			}
		]
	})
	```

	> - [!] 在path中不需要 /
1. a 标签配置
	```html
	<router-link to="/home/message">Message</router-link>
	```

### 3.11.4 路由的query 参数
1. 组件传递参数
	```html
	<!-- 跳转路由并携带query参数，to的字符串写法 -->
	<router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>
	<!-- 跳转路由并携带query参数，to的对象写法 -->
	<router-link :to="{
		path:'/home/message/detail',
		query:{
			id:m.id,
			title:m.title
		}
	}">{{m.title}}</router-link>
	```
1. 组件接受参数
`$route.query.id`
`$route.query.title`

### 3.11.5 命名路由
作用：可以简化路由的跳转。
1. 路由器中配置 name 配置项
	```js
	path:'message',
	component:Message,
	children:[
		{
			name:'xiangqing',
			path:'detail',
			component:Detail,
		}
	]
	```
1. 组件中路径使用

	```html
	<router-link :to="{
		name:'xiangqin',
		query:{
			id:m.id,
			title:m.title
		}
	}">{{m.title}}</router-link>
	```

### 3.11.6 路由的 params 参数
1. 路由器配置
	```js
	path:'message',
	component:Message,
	children:[
		{name:'xiangqing',
		path:'detail/:id/:title',//必须使用：占位符声明接受参数
		component:Detail,}
	]
	```
	> - [!] 注意：
	> 在使用params 传递参数时，路由器的路径配置要使用`:参数名字`进行占位
1. 组件传递参数
	```html
	<!-- 跳转路由并携带params参数，to的字符串写法 -->
		<router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>
		<!-- 跳转路由并携带params参数，to的对象写法 -->
		<router-link :to="{
			name:'xiangqing', //必须使用name
			params:{
				id:m.id,
				title:m.title
			}
		}">{{m.title}}</router-link>
	```
	> - [!] 注意：
	> 在使用params 传递参数时，组件to 的对象写法路径的必须使用 name 
1. 组件接受参数
`$route.params.id`
`$route.params.title`

### 3.11.7 路由的props配置
​作用：让路由组件更方便的收到参数

```js
path:'message',
component:Message,
children:[
	{
		name:'xiangqing',
		path:'detail',
		component:Detail,
		//props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
		props:{a:1,b:'hello'}
		//props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
		props:true
		//props的第三种写法，值为函数
		props($route){
			return {
				id:$route.query.id,
				title:$route.query.title,
				a:1,
				b:'hello'
			}
		}
	}
]
```


### 3.11.8 ```<router-link>```的replace属性

1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为```push```和```replace```，```push```是追加历史记录，```replace```是替换当前记录。路由跳转时候默认为```push```
3. 如何开启```replace```模式：```<router-link replace .......>News</router-link>```

### 3.11.9 9.编程式路由导航

-  声明式导航
	- ​普通网页中点击 `<a>` 链接，在 vue 中点击都属于声明式导航
	<br>
-  编程式导航
	- ​调用Api实现页面hash地址的变化，to可以怎么写，push()括号内就可以怎么写
	- 如通过JavaScript的API实现导航的方式 如`location.herf`
	<br>
-  api:
	1. `this.$router.push('hash地址')` 跳转到指定位置，并增加一条历史记录，可以前进和回退。
	2. `this.$router.replace('hash地址')` 跳转到指定位置，并且代替原来页面，不能回退。
	3. `this.$router.back()` 后退一步
	4. `this.$router.forward()` 前进一步
	5. `this.$router.go()` 可前进也可后退

### 3.11.10 缓存路由组件
1. 为了将不展示的组件数据不丢失（路由一切换，默认组件自动销毁）
2. `include=“组件名”` 代表要缓存的组件是xxx。
3. `:include=[“组件名”,“组件名”]` 缓存多个组件。
	```html
	<keep-alive include="Home">
		<router-view></router-view>
	</keep-alive>
	```
 <keep-alive include="Home">
        <router-view></router-view>
 </keep-alive>

> - [!]  注意：
> 	include 要写组件名

### 3.11.11 路由中独有的声明周期
1. activated(){} 组件被激活时调用
2. deactivated(){} 组件失活时调用

### 3.11.12 路由守卫

就是为了控制路由的访问权限，满足一些条件才能进入页面

-  全局前置守卫 `router.beforeEach((to,from,next)=>{})`
- 参数：
	1. to 是将要访问的路由的信息 to.path 是hash地址
	2. from 是将要离开的路由的信息
	3. next( ) 是放行 next(‘/login’) 跳转到登录页面

- 在进行权限校验的路由里配置 meta:{isAuth:true}
	- meta route上的一个路由元容器，可以存放一些鉴权信息和页面tittle

	```js
	//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
	router.beforeEach((to,from,next)=>{
		console.log('前置路由守卫',to,from)
		if(to.meta.isAuth){ //判断是否需要鉴权
			if(localStorage.getItem('school')==='atguigu'){
				next()
			}else{
				alert('学校名不对，无权限查看！')
			}
		}else{
			next()
		}
	})
	```

-  全局后置守卫  `router.afterEach((to,from)=>{})`
	```js
	//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
	router.afterEach((to,from)=>{
		console.log('后置路由守卫',to,from)
		document.title = to.meta.title || '硅谷系统'
	})
	```

-  独享守卫  `beforeEnter：(to,from,next) => {}`
	- 是某个路由独享的，配置在该路由下

	```js
	name:'xinwen',
	path:'news',
	component:News,
	meta:{isAuth:true,title:'新闻'},
	beforeEnter: (to, from, next) => {
		console.log('独享路由守卫',to,from)
		if(to.meta.isAuth){ //判断是否需要鉴权
			if(localStorage.getItem('school')==='atguigu'){
				next()
			}else{
				alert('学校名不对，无权限查看！')
			}
		}else{
			next()
		}
	}
	```

-  组件内路由守卫
	- 路由进入该组件时进行一些判断
		1. 进入守卫 `beforeRouteEnter(to,from,next){}`
		2. 离开守卫 `beforeRouteLeave (to, from, next) {}`
	```js
	//通过路由规则，进入该组件时被调用
			beforeRouteEnter (to, from, next) {
				console.log('About--beforeRouteEnter',to,from)
				if(to.meta.isAuth){ //判断是否需要鉴权
					if(localStorage.getItem('school')==='atguigu'){
						next()
					}else{
						alert('学校名不对，无权限查看！')
					}
				}else{
					next()
				}
			},
			//通过路由规则，离开该组件时被调用
			beforeRouteLeave (to, from, next) {
				console.log('About--beforeRouteLeave',to,from)
				next()
			}
	```

### 3.11.13 路由器的两种工作模式

1. 对于一个url来说，什么是hash值？—— `#` 及其后面的内容就是hash值。
2. hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器。
3. hash模式：
   1. 地址中永远带着#号，不美观 。
   2. 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
   3. 兼容性较好。
4. history模式：
   1. 地址干净，美观 。
   2. 兼容性和hash模式相比略差。
   3. 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。
   4. 解决此问题：
	   1. 可以使用 node.js 中的 connect-history-api-fallback 中间件。
	   2. 或者使用nigex代理。



