---
number headings: auto, first-level 1, max 6, contents ^top, 1.1
category:
- 前端
- Vue
tags:
- 前端
- Vue3.0
- 让我们变得更强大
date: 2024-08-07T17:47:00
---


# Vue3
## 1. Vue3简介

- 2020年9月18日，Vue.js发布3.0版本，代号：One Piece（海贼王）
- 耗时2年多、[2600+次提交](https://github.com/vuejs/vue-next/graphs/commit-activity)、[30+个RFC](https://github.com/vuejs/rfcs/tree/master/active-rfcs)、[600+次PR](https://github.com/vuejs/vue-next/pulls?q=is%3Apr+is%3Amerged+-author%3Aapp%2Fdependabot-preview+)、[99位贡献者](https://github.com/vuejs/vue-next/graphs/contributors) 
- github上的tags地址：[https://github.com/vuejs/vue-next/releases/tag/v3.0.0](https://github.com/vuejs/vue-next/releases/tag/v3.0.0)

## 2. Vue3带来了什么
-  性能的提升
	- 打包大小减少41%
	- 初次渲染快55%, 更新渲染快133%
	- 内存减少54%
	<br>
-  源码的升级
	- 使用Proxy代替defineProperty实现响应式
	- 重写虚拟DOM的实现和Tree-Shaking
	<br>	
-  拥抱TypeScript
	- Vue3可以更好的支持TypeScript
		<br>
-  新的特性
	1. Composition API（组合API）
	   - setup配置
	   - ref与reactive
	   - watch与watchEffect
	   - provide与inject
	2. 新的内置组件
	   - Fragment 
	   - Teleport
	   - Suspense
	3. 其他改变
	   - 新的生命周期钩子
	   - data 选项应始终被声明为一个函数
	   - 移除keyCode支持作为 v-on 的修饰符


## 3. Vue3.0的工程创建

### 3.1 Vue-cli
官方文档：[https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)

```bash
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
## 全局安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建Vue工程
vue create vue_test
## 启动
cd vue_test
npm run serve
```

### 3.2 Vite
[官方文档](https://v3.cn.vuejs.org/guide/installation.html#vite)

[vite官网](https://vitejs.cn)

- 什么是vite？—— 新一代前端构建工具。
- 优势如下：
  - 开发环境中，无需打包操作，可快速的**冷启动**。
  - 轻量快速的**热重载**（HMR）。
  - 真正的**按需编译**，不再等待整个应用编译完成。
- 传统构建 与 vite构建对比图

![[Pasted image 20240807180959.png |425]]
![[Pasted image 20240807181129.png|425]]


```bash
## 创建工程
npm init vite-app <project-name>
## 进入工程目录
cd <project-name>
## 安装依赖
npm install
## 运行
npm run dev
```

## 4. Vue2.0 和 Vue3.0 区别

### 4.1  入口文件 `main.js`
- 语法:
	```js
	//基于Vue-cli 的vue2 入口文件
	import Vue from 'vue'
	import App from './App.vue'
	Vue.config.productionTip = false
	new Vue({
	  render: h => h(App),
	}).$mount('#app')
	
	//基于vite 的 Vue3.0 入口文件
	//引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
	import { createApp } from 'vue'
	import App from './App.vue'
	//创建应用实例对象——app(类似于之前Vue2中的vm，但app比vm更“轻”)
	createApp(App).mount('#app')
	```

## 5. 常用的组合式API（Composition API）

[官方文档](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)

### 5.1 【setup】
`import {setup,ref} from 'vue'`
1. 理解：<font color="#00b050">Vue3.0</font> 中一个新的配置项，值为一个函数。
2. <font color="#f79646">setup</font> 是所有<strong style="color:#DD5145">Composition API（组合API）</strong><i style="color:gray;font-weight:bold">“ 表演的舞台 ”</i>。
3. 组件中所用到的：数据、方法等等，均要配置在 <font color="#f79646">setup</font> 中。
4. <font color="#f79646">setup</font> 函数的两种返回值：
   1. 若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
   2. <span style="color:#aad">若返回一个渲染函数：则可以自定义渲染内容。（了解）</span>
- [!] 注意点：
	   1. 尽量不要与 <font color="#00b050">Vue2.0</font> 配置混用。
	      - <font color="#00b050">Vue2.0</font> 配置（data、methos、computed...）中<strong style="color:#DD5145">可以访问到</strong> <font color="#f79646">setup</font> 中的属性、方法。
	      - 但在 <font color="#f79646">setup</font> 中<strong style="color:#DD5145">不能访问到</strong> <font color="#00b050">Vue2.0</font> 配置（data、methos、computed...）。
	      - 如果有重名的变量和方法, <font color="#f79646">setup</font> 优先。
	   2. <font color="#f79646">setup</font> 不能是一个 async 函数，因为返回值不再是 return 的对象, 而是 promise, 模板看不到 return 对象中的属性。（后期也可以返回一个 Promise 实例，但需要 Suspense 和异步组件的配合）
		<br>
- 语法:
	```js
	export default {
		name: 'App',
		//此处只是测试一下setup，暂时不考虑响应式的问题。
		async setup(){
			//数据
			let name = '张三'
			let age = 18
			let a = 200
	
			//方法
			function sayHello(){
				alert(`我叫${name}，我${age}岁了，你好啊！`)
			}
			function test2(){
				console.log(this.sex)
				console.log(this.sayWelcome)
			}
	
			//返回一个对象（常用）
			return {
				name,age,sayHello,test2,a
			}
	```
### 5.2 【ref】函数
`import {setup,ref} from 'vue'`
- 作用: 定义一个响应式的数据
- 语法: ```const xxx = ref(initValue)``` 
  - 创建一个包含响应式数据的<strong style="color:#DD5145">引用对象（reference对象，简称ref对象）</strong>。
  - JS中操作数据： ```xxx.value```
  - 模板中读取数据: 不需要`.value`，直接：```<div>{{xxx}}</div>```
	<br>
- [!] 备注：
	  - 接收的数据可以是：基本类型、也可以是对象类型。
	  - 基本类型的数据：响应式依然是靠``Object.defineProperty()``的```get```与```set```完成的。
	  - 对象类型的数据：内部 <i style="color:gray;font-weight:bold">“ 求助 ”</i> 了<font color="#00b050">Vue3.0</font>中的一个新函数—— ```reactive```函数。
	<br>
- [*] 实例：
	```js
	setup(){
		//数据
		let name = ref('张三')
		let age = ref(18)
		let job = ref({
			type:'前端工程师',
			salary:'30K'
		})
	
		//方法
		function changeInfo(){
			name.value = '李四'
			age.value = 48
			job.value.type = 'UI设计师'
			job.value.salary = '60K'
		}
	
		//返回一个对象（常用）
		return {
			name,age,job,changeInfo
		}
	}
	```


### 5.3 【reactive】 函数
`import {setup,ref,reactive} from 'vue'`
- 作用: 定义一个<strong style="color:#DD5145">对象类型</strong>的响应式数据（基本类型不要用它，要用```ref```函数）
- 语法：```const 代理对象= reactive(源对象)```接收一个对象（或数组），返回一个<strong style="color:#DD5145">代理对象（Proxy的实例对象，简称proxy对象）</strong>
- reactive 定义的响应式数据是“深层次的”。
- 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。
<br>

- 语法：
	```js
	import {reactive} from 'vue'
		export default {
			name: 'App',
			setup(){
				//数据
				let person = reactive({
					name:'张三',
					age:18,
					job:{
						type:'前端工程师',
						salary:'30K',
						a:{b:{c:666}}
					},
					hobby:['抽烟','喝酒','烫头']
				})
	
				//方法
				function changeInfo(){
					person.name = '李四'
					person.age = 48
					person.job.type = 'UI设计师'
					person.job.salary = '60K'
					person.job.a.b.c = 999
					person.hobby[0] = '学习'
				}
	
				//返回一个对象（常用）
				return {
					person,changeInfo
				}
			}
		}
	```

## 6. <font color="#00b050">Vue3.0</font> 中的响应式原理、

### 6.1 <font color="#00b050">vue2.0</font> 的响应式

- 实现原理：
  - 对象类型：通过```Object.defineProperty()```对属性的读取、修改进行拦截（数据劫持）。
  - 数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。
  - 语法
    ```js
    Object.defineProperty(data, 'count', {
        get () {}, 
        set () {}
    })
    ```

- 存在问题：
  - 新增属性、删除属性, 界面不会更新。
  - 直接通过下标修改数组, 界面不会自动更新。

### 6.2 Vue3.0 的响应式

- 实现原理: 
  - 通过 **Proxy**（代理）:  拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。
  - 通过 **Reflect**（反射）:  对源对象的属性进行操作。
  - MDN文档中描述的Proxy与Reflect：
    - [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
    - [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

- 语法
  ```js
  new Proxy(data, {
	// 拦截读取属性值
	  get (target, prop) {
		return Reflect.get(target, prop)
	  },
	  // 拦截设置属性值或添加新属性
	  set (target, prop, value) {
		return Reflect.set(target, prop, value)
	  },
	  // 拦截删除属性
	  deleteProperty (target, prop) {
		return Reflect.deleteProperty(target, prop)
	  }
  })
  proxy.name = 'tom'   
  ```

## 7. 【reactive】 对比 【ref】


1. 从定义数据角度对比：
   -  ref ：用来定义<strong style="color:#DD5145">基本类型数据</strong>。<Badge text="tip" type="tip" vertical="middle" />
   -  reactive ：用来定义<strong style="color:#DD5145">对象（或数组）类型数据</strong>。
::: warning  备注：
ref 也可以用来定义<strong style="color:#DD5145">对象（或数组）类型数据</strong>, 它内部会自动通过```reactive```转为<strong style="color:#DD5145">代理对象</strong>。
:::


2. 从原理角度对比：
   -  ref通过``Object.defineProperty()``的```get```与```set```来实现响应式（数据劫持）。
   -  reactive通过使用<strong style="color:#DD5145">Proxy</strong>来实现响应式（数据劫持）, 并通过<strong style="color:#DD5145">Reflect</strong>操作<strong style="color:orange">源对象</strong>内部的数据。
3. 从使用角度对比：
   -  ref定义的数据：操作数据<strong style="color:#DD5145">需要</strong>```.value```，读取数据时模板中直接读取<strong style="color:#DD5145">不需要</strong>```.value```。
   -  reactive定义的数据：操作数据与读取数据：<strong style="color:#DD5145">均不需要</strong>```.value```。

## 8. 【setup】的两个注意点
[setup的两个注意点](https://www.bilibili.com/video/BV1Zy4y1K7SH?p=149&vd_source=053c3223e2a8040db0729363a1fd733f) 
<BiliBili aid="804122638" cid="377284811" page="149" />

1. <font color="#f79646">setup</font> 执行的时机
	- 在 beforeCreate 之前执行一次，this 是 undefined。
2. <font color="#f79646">setup</font> 的参数
	  - props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
	  - context：上下文对象
		- attrs: 值为对象，包含：组件外部传递过来，但没有在 props 配置中声明的属性, 相当于 ```this.$attrs```。
		- slots: 收到的插槽内容, 相当于 ```this.$slots```。
		- emit: 分发自定义事件的函数, 相当于 ```this.$emit```。

## 9.  计算属性与监视

### 9.1 【computed】函数

与 <font color="#00b050">Vue2.0</font> 中 computed 配置功能一致

- 语法

	```js
	import {computed} from 'vue'
	
	setup(){
	  ...
	//计算属性——简写
	  let fullName = computed(()=>{
		  return person.firstName + '-' + person.lastName
	  })
	  //计算属性——完整
	  let fullName = computed({
		  get(){
			  return person.firstName + '-' + person.lastName
		  },
		  set(value){
			  const nameArr = value.split('-')
			  person.firstName = nameArr[0]
			  person.lastName = nameArr[1]
		  }
	  })
	}
	```

### 9.2 【watch】函数

与 <font color="#00b050">Vue2.0 </font>中watch配置功能一致

- 两个小“坑”：
  - 监视 reactive 定义的响应式数据时：oldValue 无法正确获取、强制开启了深度监视（deep 配置失效）。
  - 监视 reactive 定义的响应式数据中某个属性时：deep 配置有效。
- 语法
  ```js
  //情况一：监视ref定义的响应式数据
  watch(sum,(newValue,oldValue)=>{
  	console.log('sum变化了',newValue,oldValue)
  },{immediate:true})
  
  //情况二：监视多个ref定义的响应式数据
  watch([sum,msg],(newValue,oldValue)=>{
  	console.log('sum或msg变化了',newValue,oldValue)
  }) 
  
  /* 情况三：监视reactive定义的响应式数据
  			若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
  			若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 
  */
  watch(person,(newValue,oldValue)=>{
  	console.log('person变化了',newValue,oldValue)
  },{immediate:true,deep:false}) //此处的deep配置不再奏效
  
  //情况四：监视reactive定义的响应式数据中的某个属性
  watch(()=>person.job,(newValue,oldValue)=>{
  	console.log('person的job变化了',newValue,oldValue)
  },{immediate:true,deep:true}) 
  
  //情况五：监视reactive定义的响应式数据中的某些属性
  watch([()=>person.job,()=>person.name],(newValue,oldValue)=>{
  	console.log('person的job变化了',newValue,oldValue)
  },{immediate:true,deep:true})
  
  //特殊情况
  watch(()=>person.job,(newValue,oldValue)=>{
      console.log('person的job变化了',newValue,oldValue)
  },{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
  ```

### 9.3 【watchEffect】 函数
- 原理：
	- `watch` 的套路是：既要指明监视的属性，也要指明监视的回调。
	- `watchEffect` 的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。
	- `watchEffect`有点像`computed`：
	    - 但c`omputed`注重的计算出来的值（回调函数的返回值），所以必须要写返回值。
	    - 而`watchEffect`更注重的是过程（回调函数的函数体），所以不用写返回值。

- 语法：

	```vue
	<template>
	  <div class="person">
	    <h1>需求：水温达到50℃，或水位达到20cm，则联系服务器</h1>
	    <h2 id="demo">水温：{{temp}}</h2>
	    <h2>水位：{{height}}</h2>
	    <button @click="changePrice">水温+1</button>
	    <button @click="changeSum">水位+10</button>
	  </div>
	</template>
	
	<script lang="ts" setup name="Person">
	  import {ref,watch,watchEffect} from 'vue'
	  // 数据
	  let temp = ref(0)
	  let height = ref(0)
	
	  // 方法
	  function changePrice(){
	    temp.value += 10
	  }
	  function changeSum(){
	    height.value += 1
	  }
	
	  // 用watch实现，需要明确的指出要监视：temp、height
	  watch([temp,height],(value)=>{
	    // 从value中获取最新的temp值、height值
	    const [newTemp,newHeight] = value
	    // 室温达到50℃，或水位达到20cm，立刻联系服务器
	    if(newTemp >= 50 || newHeight >= 20){
	      console.log('联系服务器')
	    }
	  })
	
	  // 用watchEffect实现，不用
	  const stopWtach = watchEffect(()=>{
	    // 室温达到50℃，或水位达到20cm，立刻联系服务器
	    if(temp.value >= 50 || height.value >= 20){
	      console.log(document.getElementById('demo')?.innerText)
	      console.log('联系服务器')
	    }
	    // 水温达到100，或水位达到50，取消监视
	    if(temp.value === 100 || height.value === 50){
	      console.log('清理了')
	      stopWtach()
	    }
	  })
	</script>
	```

![[Pasted image 20240821175932.png|600]]

## 10. 【2.0 和 3.0 生命周期】

- 原理：
	- Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名：
	  - ```beforeDestroy```改名为 ```beforeUnmount```
	  - ```destroyed```改名为 ```unmounted```
	- Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钩子对应关系如下：
	  - `beforeCreate`===>`setup()`
	  - `created`=======>`setup()`
	  - `beforeMount` ===>`onBeforeMount`
	  - `mounted`=======>`onMounted`
	  - `beforeUpdate`===>`onBeforeUpdate`
	  - `updated` =======>`onUpdated`
	  - `beforeUnmount` ==>`onBeforeUnmount`
	  - `unmounted` =====>`onUnmounted`
	<br>

- 语法：
	```js
	//通过配置项的形式使用生命周期钩子
	//#region 
	beforeCreate() {
		console.log('---beforeCreate---')
	},
	created() {
		console.log('---created---')
	},
	beforeMount() {
		console.log('---beforeMount---')
	},
	mounted() {
		console.log('---mounted---')
	},
	beforeUpdate(){
		console.log('---beforeUpdate---')
	},
	updated() {
		console.log('---updated---')
	},
	beforeUnmount() {
		console.log('---beforeUnmount---')
	},
	unmounted() {
		console.log('---unmounted---')
	},
	//#endregion
	
	//通过组合式API的形式去使用生命周期钩子
	onBeforeMount(()=>{
		console.log('---onBeforeMount---')
	})
	onMounted(()=>{
		console.log('---onMounted---')
	})
	onBeforeUpdate(()=>{
		console.log('---onBeforeUpdate---')
	})
	onUpdated(()=>{
		console.log('---onUpdated---')
	})
	onBeforeUnmount(()=>{
		console.log('---onBeforeUnmount---')
	})
	onUnmounted(()=>{
		console.log('---onUnmounted---')
	})
	
	```
## 11. 【自定义hook函数】

- 原理：
	- 什么是 `hook` ？—— 本质是一个函数，把setup函数中使用的 Composition API 进行了封装。
	- 类似于vue2.0 中的mixin。
	- 自定义 `hook` 的优势: 复用代码, 让 `setup` 中的逻辑更清楚易懂。
![[Pasted image 20240824095858.png]]

- 语法：
	```js
	//定义hook函数  【hook.js】
	import {reactive,onMounted,onBeforeUnmount} from 'vue'
	export default function (){
		//实现鼠标“打点”相关的数据
		let point = reactive({
			x:0,
			y:0
		})
	
		//实现鼠标“打点”相关的方法
		function savePoint(event){
			point.x = event.pageX
			point.y = event.pageY
			console.log(event.pageX,event.pageY)
		}
	
		//实现鼠标“打点”相关的生命周期钩子
		onMounted(()=>{
			window.addEventListener('click',savePoint)
		})
	
		onBeforeUnmount(()=>{
			window.removeEventListener('click',savePoint)
		})
	
		return point
	}
	
	//在需要使用的组件中，引入hook函数，并使用 【Test组件】
	<template>
		<h2>我是Test组件</h2>
		<h2>当前点击时鼠标的坐标为：x：{{point.x}}，y：{{point.y}}</h2>
	</template>
	
	<script>
		import usePoint from '../hooks/usePoint'
		export default {
			name:'Test',
			setup(){
				const point = usePoint()
				return {point}
			}
		}
	</script>
	```


## 12. 【toRef】
- 原理：
	- 作用：创建一个 ref 对象，其 value 值指向另一个对象中的某个属性。
	- 语法：```const name = toRef(person,'name')```
	- 应用:   要将响应式对象中的某个属性单独提供给外部使用时。
	- 扩展：```toRefs``` 与```toRef```功能一致，但可以批量创建多个 ref 对象，语法：```toRefs(person)```

- 语法：
	```vue
	<template>
		<h4>{{person}}</h4>
		<h2>姓名：{{name}}</h2>
		<h2>年龄：{{age}}</h2>
		<h2>薪资：{{job.j1.salary}}K</h2>
		<button @click="name+='~'">修改姓名</button>
		<button @click="age++">增长年龄</button>
		<button @click="job.j1.salary++">涨薪</button>
	</template>
	
	<script>
		import {ref,reactive,toRef,toRefs} from 'vue'
		export default {
			name: 'Demo',
			setup(){
				//数据
				let person = reactive({
					name:'张三',
					age:18,
					job:{
						j1:{
							salary:20
						}
					}
				})
				//返回一个对象（常用）
				return {
					person,
					// name:toRef(person,'name'),
					// age:toRef(person,'age'),
					// salary:toRef(person.job.j1,'salary'),
					...toRefs(person)
				}
			}
		}
	</script>
	```


## 13. 其它 Composition API

### 13.1 【shallowReactive 与 shallowRef】

- 原理：
	- shallowReactive：只处理对象最外层属性的响应式（浅响应式）。
	- shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。
- 什么时候使用?
	-  如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===> `shallowReactive`。
	-  如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> `shallowRef`。

### 13.2  【readonly 与 shallowReadonly】

- 原理：
	- readonly: 让一个响应式数据变为只读的（深只读）。
	- shallowReadonly：让一个响应式数据变为只读的（浅只读）。
	- 应用场景: 不希望数据被修改时。

## 13.3  【toRaw 与 markRaw】

- 原理：
	- toRaw：
		- 作用：将一个由```reactive```生成的<strong style="color:orange">响应式对象</strong>转为<strong style="color:orange">普通对象</strong>。
		- 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
	- markRaw：
		- 作用：标记一个对象，使其永远不会再成为响应式对象。
		- 应用场景:
			1. 有些值不应被设置为响应式的，例如复杂的第三方类库等。
			2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。
- 语法：
	```js
	function showRawPerson(){
		const p = toRaw(person)
		p.age++
		console.log(p)
	}
	
	function addCar(){
		let car = {name:'奔驰',price:40}
		person.car = markRaw(car)
	}
	```


## 13.4  【customRef】
- 原理：
	- 作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。
- 语法：
	- 实现防抖效果：
```vue
<template>
	<input type="text" v-model="keyword">
	<h3>{{keyword}}</h3>
</template>

<script>
	import {ref,customRef} from 'vue'
	export default {
		name:'Demo',
		setup(){
			// let keyword = ref('hello') //使用Vue准备好的内置ref
			//自定义一个myRef
			function myRef(value,delay){
				let timer
				//通过customRef去实现自定义
				return customRef((track,trigger)=>{
					return{
						get(){
							track() //告诉Vue这个value值是需要被“追踪”的
							return value
						},
						set(newValue){
							clearTimeout(timer)
							timer = setTimeout(()=>{
								value = newValue
								trigger() //告诉Vue去更新界面
							},delay)
						}
					}
				})
			}
			let keyword = myRef('hello',500) //使用程序员自定义的ref
			return {
				keyword
			}
		}
	}
</script>
```


## 4.5 【provide 与 inject】
-  原理：

- 作用：实现<strong style="color:#DD5145">祖与后代组件间</strong>通信
- 套路：父组件有一个 `provide` 选项来提供数据，后代组件有一个 `inject` 选项来开始使用这些数据
<br>

- 语法：
```js
//【祖先组件】创建数据
setup(){
	let car = reactive({name:'奔驰',price:'40W'})
	provide('car',car) //给自己的后代组件传递数据
	return {...toRefs(car)}
}
//【后代组件】都可以数据
setup(){
	let x = inject('car')
	return {car}
} 

```


## 4.6 【响应式数据的判断】
-  原理：
- isRef: 检查一个值是否为一个 ref 对象
- isReactive: 检查一个对象是否是由 `reactive` 创建的响应式代理
- isReadonly: 检查一个对象是否是由 `readonly` 创建的只读代理
- isProxy: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理

# 5 Composition API 的优势

## 5.1 【Options API 存在的问题】

使用传统OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改 。

<div style="width:600px;display: flex;align-content: space-between;">
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f84e4e2c02424d9a99862ade0a2e4114~tplv-k3u1fbpfcp-watermark.image" style="width:350px;"/>
<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5ac7e20d1784887a826f6360768a368~tplv-k3u1fbpfcp-watermark.image" style="width:250px;" /> 
</div>


## 5.2 【Composition API 的优势】

我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。

<div style="width:600px;display: flex;">
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc0be8211fc54b6c941c036791ba4efe~tplv-k3u1fbpfcp-watermark.image" style="width:350px;"/>
<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6cc55165c0e34069a75fe36f8712eb80~tplv-k3u1fbpfcp-watermark.image" style="width:250px;" /> 
</div>

​

# 6 新的组件

## 6.1 【Fragment】
-  原理：
- 在Vue2中: 组件必须有一个根标签
    
- 在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中
    
- 好处: 减少标签层级, 减小内存占用


## 6.2 2.【Teleport】
-  原理：
- 什么是Teleport？—— `Teleport` 是一种能够将我们的**组件html结构**移动到指定位置的技术。
<br>

- 语法：
	```js
	<teleport to="移动位置">
		<div v-if="isShow" class="mask">
			<div class="dialog">
				<h3>我是一个弹窗</h3>
				<button @click="isShow = false">关闭弹窗</button>
			</div>
		</div>
	</teleport>
	```

## 6.3 【Suspense】

- 等待异步组件时渲染一些额外内容，让应用有更好的用户体验
<br>

- 语法：
- 异步引入组件

    ```js
    import {defineAsyncComponent} from 'vue'
    const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
    ```

- 使用```Suspense```包裹组件，并配置好```default``` 与 ```fallback```

    ```Html
    <template>
    	<div class="app">
    		<h3>我是App组件</h3>
    		<Suspense>
    			<template v-slot:default>
    				<Child/>
    			</template>
    			<template v-slot:fallback>
    				<h3>加载中.....</h3>
    			</template>
    		</Suspense>
    	</div>
    </template>
    ```










