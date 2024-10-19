---
number headings: auto, first-level 1, max 6, contents ^top, 1.1
title: NodeJS 李李立超老师版本
category: 
- 前端
- NodeJS
tag: 
- NodeJS
- NodeJS 基础
- 李立超
date: 2024-06-29
article: false

---
# 1 NodeJS简介


## 1.1 Node.js
 
- 运行在服务器端的js
- 用来编写服务器
- 特点：
	- 单线程、异步、非阻塞
	- 统一API

## 1.2 nvm(推荐)
- 命令
```shell
nvm list # 显示已安装的node版本
nvm install 版本 # 安装指定版本的node
nvm node_mirror https://npmmirror.com/mirrors/node/ # 配置nvm的镜像服务器
nvm use 版本 # 指定要使用的node版本
```

## 1.3 node.js和JavaScript有什么区别
- ECMAScript（node有） 
- DOM（node没有） 
- BOM（node没有）



# 2 异步编程

1. 进程和线程
	- 进程（厂房）
		- 程序的运行的环境
	- 线程（工人）
		- 线程是实际进行运算的东西

2. 同步
	- 通常情况代码都是自上向下一行一行执行的
	- 前边的代码不执行后边的代码也不会执行
	- 同步的代码执行会出现阻塞的情况
	- 一行代码执行慢会影响到整个程序的执行

3. 解决同步问题：
	- java python
		- 通过多线程来解决
	- node.js
		- 通过异步方式来解决

4. 异步
	- 一段代码的执行不会影响到其他的程序
	- 异步的问题：
		异步的代码无法通过return来设置返回值
	- 特点：
		1.不会阻塞其他代码的执行
		2.需要通过回调函数来返回结果
	- 基于回调函数的异步带来的问题
		1. 代码的可读性差
		2. 可调试性差
	- 解决问题：
		- 需要一个东西，可以代替回调函数来给我们返回结果
		- Promise横空出世
			- Promise是一个可以用来存储数据的对象
				Promise存储数据的方式比较特殊，
				这种特殊方式使得Promise可以用来存储异步调用的数据


## 2.1 Promise

```
异步调用必须要通过回调函数来返回数据，
	当我们进行一些复杂的调用的时，会出现“回调地狱”

问题：
	异步必须通过回调函数来返回结果，回调函数一多就很痛苦

Promise
	- Promise可以帮助我们解决异步中的回调函数的问题
	- Promise就是一个用来存储数据的容器
		它拥有着一套特殊的存取数据的方式
		这个方式使得它里边可以存储异步调用的结果
```


```js
// 创建Promise
// 创建Promise时，构造函数中需要一个函数作为参数
// Promise构造函数的回调函数，它会在创建Promise时调用，调用时会有两个参数传递进去

const promise = new Promise((resolve, reject) => {
    // resolve 和 reject 是两个函数，通过这两个函数可以向Promise中存储数据
    // resolve在执行正常时存储数据，reject在执行错误时存储数据
     reject("哈哈")
    // 通过函数来向Promise中添加数据，好处就是可以用来添加异步调用的数据
     setTimeout(() => {
        resolve("哈哈")
    }, 2000)

    // throw new Error("哈哈，出错了")

    resolve("resolve返回的数据")
    // reject("reject返回的数据")
})

从Promise中读取数据
	- 可以通过Promise的实例方法then来读取Promise中存储的数据
	- then需要两个回调函数作为参数，回调函数用来获取Promise中的数据
		通过resolve存储的数据，会调用第一个函数返回，
			可以在第一个函数中编写处理数据的代码
		通过reject存储的数据或者出现异常时，会调用第二个函数返回
			可以在第二个函数中编写处理异常的代码

promise.then((result) => {
    console.log("1", result)
}, (reason) => {
    console.log("2", reason)
})


```

```js
Promise中维护了两个隐藏属性：
	PromiseResult
		- 用来存储数据

	PromiseState
		- 记录Promise的状态（三种状态）
			pending   （进行中）
			fulfilled（完成） 通过resolve存储数据时
			rejected（拒绝，出错了） 出错了或通过reject存储数据时
		- state只能修改一次，修改以后永远不会在变

	流程：
		当Promise创建时，PromiseState初始值为pending，
			当通过resolve存储数据时 PromiseState 变为fulfilled（完成）
				PromiseResult变为存储的数据
			当通过reject存储数据或出错时 PromiseState 变为rejected（拒绝，出错了）
				PromiseResult变为存储的数据 或 异常对象

		当我们通过then读取数据时，相当于为Promise设置了回调函数，
			如果PromiseState变为fulfilled，则调用then的第一个回调函数来返回数据
			如果PromiseState变为rejected，则调用then的第二个回调函数来返回数据

```

```js
catch() 用法和then类似，但是只需要一个回调函数作为参数
	catch()中的回调函数只会在Promise被拒绝时才调用
	catch() 相当于 then(null, reason => {})
	catch() 就是一个专门处理Promise异常的方法

finally() 
	- 无论是正常存储数据还是出现异常了，finally总会执行
	- 但是finally的回调函数中不会接收到数据
	- finally()通常用来编写一些无论成功与否都要执行代码
```

```
Promise就是一个用来存储数据对象
    但是由于Promise存取的方式的特殊，所以可以直接将异步调用的结果存储到Promise中
对Promise进行链式调用时
    后边的方法（then和catch）读取的上一步的执行结果
     如果上一步的执行结果不是当前想要的结果，则跳过当前的方法

当Promise出现异常时，而整个调用链中没有出现catch，则异常会向外抛出

promise中的
        then (return new Promise())
        catch
        - 这三个方法都会返回一个新的Promise,
            Promise中会存储回调函数的返回值
        finally
            - finally的返回值，不会存储到新的Promise中
```

## 2.2 Promise的静态方法

```
静态方法
	Promise.resolve() 创建一个立即完成的Promise
	Promise.reject() 创建一个立即拒绝的Promise
	Promise.all([...]) 同时返回多个Promise的执行结果
		其中有一个报错，就返回错误
	Promise.allSettled([...]) 同时返回多个Promise的执行结果(无论成功或失败)
	   {status: 'fulfilled', value: 579}
	   {status: 'rejected', reason: '哈哈'}
	Promise.race([...]) 返回执行最快的Promise（不考虑对错）
	Promise.any([...]) 返回执行最快的完成的Promise
```



## 2.3 async和await


nodejs文档： https://nodejs.dev/en/ 通过async可以快速的创建异步函数

```
通过async可以来创建一个异步函数
	异步函数的返回值会自动封装到一个Promise中返回
在async声明的异步函数中可以使用await关键字来调用异步函数
```

































































































