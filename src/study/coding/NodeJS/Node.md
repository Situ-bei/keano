---
number headings: auto, first-level 1, max 6, contents ^top, 1.1
title: NodeJS 尚硅谷版本
category:
- 前端
- NodeJS
tags:
- NodeJS
- NodeJS 基础
date: 2024-07-04T18:43:00
article: false
---
NodeJS 尚硅谷版本
<!-- more -->
# Node.js简介

## 1.1 Node.js
- 运行在服务器端的 JavaScript
- 用来编写服务器
- 特点：
	- 单线程、异步、非阻塞
	- 统一 `API`

## 1.2 NodeJS的安装
- nvm(推荐)
	- 命令
		- `nvm list`  显示已安装的node版本
		- `nvm install 版本号`  安装指定版本的 `node`
		- 配置 `nvm`  的镜像服务器
			- nvm node_mirror https://npmmirror.com/mirrors/node/
		- `nvm use 版本`  指定要使用的 `node` 版本

## 1.3 node.js和JavaScript有什么区别
- `ECMAScript`（node有） `DOM`（node没有） `BOM`（node没有）


# 2 异步编程

## 2.1 进程和线程
- 进程（厂房）
	- 程序的运行的环境
- 线程（工人）
	- 线程是实际进行运算的东西

## 2.2 同步
- 通常情况代码都是自上向下一行一行执行的
- 前边的代码不执行后边的代码也不会执行
- 同步的代码执行会出现阻塞的情况
- 一行代码执行慢会影响到整个程序的执行

### 2.2.1 解决同步问题：
- `java` `python`
	- 通过多线程来解决
- `node.js`
	- 通过异步方式来解决

## 2.3 异步

![[74d580d4b9924507b5148e6a8a6ae6ea.png|375]]
- 一段代码的执行不会影响到其他的程序
- 异步的问题：
	- 异步的代码无法通过 `return` 来设置返回值
- 特点：
	1. 不会阻塞其他代码的执行
	2. 需要通过回调函数来返回结果
- 基于回调函数的异步带来的问题
	1. 代码的可读性差
	2. 可调试性差
- 解决问题：
	- 需要一个东西，可以代替回调函数来给我们返回结果
	- `Promise` 横空出世
		- `Promise` 是一个可以用来存储数据的对象
			- `Promise` 存储数据的方式比较特殊，
			- 这种特殊方式使得`Promise`可以用来存储异步调用的数据
# 3 Promise
## 3.1 回调地狱

- 回调地狱这个词听起来就非常的高大上，想要接触`Promise`之前，必须要懂得什么是回调地狱，以及为什么会产生回调地狱？
- 先来看看概念：当一个回调函数嵌套一个回调函数的时候就会出现一个嵌套结构当嵌套的多了就会出现回调地狱的情况。

---
- 举个例子：
	- 比如我们发送三个 `ajax` 请求：
		1. 第一个正常发送
		2. 第二个请求需要第一个请求的结果中的某一个值作为参数
		1. 第三个请求需要第二个请求的结果中的某一个值作为参数
	```js
	$.ajax({
	  url: '我是第一个请求',
	  type: 'get',
	  success (res) {
	    // 现在发送第二个请求
	    $.ajax({
	      url: '我是第二个请求'，
	      type:'post',
	      data: { a: res.a, b: res.b },
	      success (res1) {
	        // 进行第三个请求
	        $.ajax({
	          url: '我是第三个请求',
	          type:'post',
	          data: { a: res1.a, b: res1.b },
	                  success (res2) { 
	            console.log(res2) 
	          }
	        })
	      }
	    })
	  }
	})
	```


## 3.2 Promise

- Promise 是异步编程的一种解决方案，比传统的解决方案—**回调函数**和**事件**—更合理和更强大,它是一个 ECMAScript 6 提供的类，目的是更加优雅地书写复杂的异步任务。

> - Promise 对象有以下**两个特点**:
> 
> 	1.  对象的状态不受外界影响。`Promise` 对象代表一个异步操作，有三种状态：`pending`（进行中）、`fulfilled`（已成功）`和rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是`Promise`这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
> 	2.  一旦状态改变，就不会再变，任何时候都可以得到这个结果。`Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 `resolved`（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（`Event`）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的

### 3.2.1 Promise语法格式

- 参考：http://t.csdnimg.cn/OopcU

```js
new Promise(function (resolve, reject) {
  // resolve 表示成功的回调
  // reject 表示失败的回调
}).then(function (res) {
  // 成功的函数
}).catch(function (err) {
  // 失败的函数
})
```

- 出现了`new`关键字，就明白了Promise对象其实就是一个构造函数，是用来生成Promise实例的。能看出来构造函数接收了一个函数作为参数，该函数就是Promise构造函数的回调函数，该函数中有两个参数`resolve`和`reject`，这两个参数也分别是两个函数！

- 简单的去理解的话`resolve`函数的目的是将Promise对象状态变成成功状态，在异步操作成功时调用，将异步操作的结果，作为参数传递出去。`reject`函数的目的是将Promise对象的状态变成失败状态，在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

> - Promise实例生成以后，可以用`then`方法分别指定`resolved`状态和`rejected`状态的回调函数。
- **代码示例**：
	```js
	const promise = new Promise((resolve,reject)=>{
		//异步代码
		setTimeout(()=>{
			// resolve(['111','222','333'])
			reject('error')
		},2000)
	})
	promise.then((res)=>{
		//兑现承诺，这个函数被执行
		console.log('success',res);
	}).catch((err)=>{
		//拒绝承诺，这个函数就会被执行
		console.log('fail',err);
	})
	```

![[a4a0aebebaf54ba7a2b20305c4e0354a.png|550]]

> 这两个函数分别做为参数(`reslove`和`reject`)传到上方的函数中去了.随后在构造函数的回调函数中写入异步代码(例如：`ajax`和定时器)，这里使用了定时器作为例子，如果你想表达的是成功回调，你可以在内部调用函数`reslove`('**一般情况下是后端返回的成功数据**)。如果你想表达的是失败回调，你可以调用`reject`('**一般情况下是后端返回的失败信息**').


### 3.2.2 Promise链式

- `then`方法返回的是一个新的Promise实例（注意:不是原来那个Promise实例）。因此可以采用链式写法，即`then`方法后面再调用另一个`then`方法


实际案例：
- 我想要实现在一个数组中查看一个帖子，但是我最终的目的是得到这个帖子下面的所有评论，这该怎么实现呢？

实现思路：
- 先从一个接口中获取这个帖子的信息，然后通过该帖子的帖子id从而获取到该帖子下的所有评论

### 3.2.3 Promise的方法

- 参考：http://t.csdnimg.cn/RPm6h

| 方法                | 参数           | 含义                                                                                        | 返回值         |
| ----------------- | ------------ | ----------------------------------------------------------------------------------------- | ----------- |
| then()            | 两个回调函数       | 读取Promise中存储的数据                                                                           | 一个promise实例 |
| catch()           | 一个回调         | 专门处理Promise异常的方法                                                                          | 异常          |
| finally()         | 不会接收到数据      | 编写一些无论成功与否都要执行代码                                                                          |             |
| resolve()         |              | 创建一个立即完成的Promise                                                                          |             |
| all()             | promise对象的数组 | 同时返回多个Promise的执行结果<br>其中有一个报错，就返回错误                                                       |             |
| allSettled([...]) | promise对象的数组 | 同时返回多个Promise的执行结果(无论成功或失败)                                                               |             |
| race([...])       |              | 当任何一个promise的状态先确定（拒绝或者成功），则会执行.race中的回调函数                                                |             |
| any([...])        |              | 其中有一个Promise成功执行，就会返回已经成功执行的Promise的结果；若全部为rejected状态，则会到最后的promise执行完，全部的promise返回到异常函数中 |             |

# 4 async和await

## 4.1 async 和 await

- promise 使用 `.then` 链式调用，但也是基于回调函数
- `async/await` 更加优雅的异步编程的写法
	1. 它是消灭异步回调的终极武器
	2. 它是同步语法，也就是用同步的写法写异步的代码
- await只能用于asynchronous 声明的函数中或者ES模块的顶级作用域中


# 5 CommonJS简介

- 前端主要有两大模块化标准：
	- `CommonJS`，简称 `CMJ`，这是一个社区规范，出现时间较早，目前仅 `node` 环境支持
	- `ES Module`，简称 `ESM`，这是随着 `ES6` 发布的官方模块化标准，目前浏览器和新版本 `node` 环境均支持
- NodeJS 默认支持 CommonJS，扩展名为 `.js` 或者 `.cjs`
	- 如果要使用ES6的模块化标准
		1. 可以将扩展名改为`.mjs`
		2. 或者在`package.json` 文件中将 `type` 类型改为 `"module"`
			- 那当前项目下的模块都默认为 `ES module`
## 5.1 模块分类
### 5.1.1 内置模块

- 内置模块是由Node.js官方提供的
> `fs` 模块：用于文件操作，包括读取文件、写入文件、创建目录、删除文件等。
> `http` 模块：用于创建 `HTTP` 服务器和客户端，可以处理 `HTTP` 请求和响应。
> `https` 模块：与 `http` 模块类似，但支持安全的 `HTTPS` 协议。
> `path` 模块：用于处理文件路径，包括路径解析、拼接、规范化等。
> `events` 模块：用于实现事件驱动的编程，可以创建和处理事件。
> `stream` 模块：用于处理流式数据，可以读取和写入可流式的数据。
> `util` 模块：包含一些实用工具函数，如继承、类型判断、错误处理等。
> `crypto` 模块：提供加密和解密功能，包括哈希算法、对称加密和非对称加密等。
> `os` 模块：提供与操作系统相关的功能，如获取操作系统信息、处理文件路径等。
> `querystring` 模块：用于解析和序列化 `URL` 查询字符串。


### 5.1.2 自定义模块

- 每个用户创建的 .js文件，都是自定义模块
### 5.1.3 第三方模块

- 由第三方开发出来的模块，使用前需先下载，如：md5
## 5.2 语法

- 导入：`require`
> 1. 加载内置模块
> 	- 内置模块是由node.js官方提供的模块，内置模块的加载优先级最高。
> 	- `const fs = require("fs");`
> 
> 2. 加载自定义模块
> 	- 当调用`require()`方法加载自定义模块时，必须指定以`./`或`…/`开头的路径标识符，如果没有路径标识符，则node.js会把它当作内置模块或第三方模块加载。
> 		- 模块名中的`.js`可省略
> 		- 相对路径与绝对路径皆可
> 1. 加载第三方模块
> 	- 如果传递给`require()`的不是 `node.js` 的一个内置模块，也没有路径标识符，则node.js会从当前模块的父目录开始，尝试从`/node_modules`文件夹中加载第三方模块。
> 	- 如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录中。
> 	- 即从当前目录开始，寻找`node_modules`文件夹，找不到就从上级目录中找，直到文件根目录中，找到后就会加载对应的第三方模块。
- 导出：
	1. `module.exports`
	2. `exports`
- 代码实例：
	```js
	// 导出两个函数
	exports.add = function(a, b) {
	  return a + b;
	};
	exports.multiply = function(a, b) {
	  return a * b;
	};
	
	// 引入 math 模块
	var math = require('./math');
	// 使用 math 模块中的函数
	var sum = math.add(5, 3);
	var product = math.multiply(4, 6);
	console.log('Sum:', sum);
	console.log('Product:', product);
	```
- 批量导入导出：
	```js
	// 定义多个实用函数
	function add(a, b) {
	  return a + b;
	}
	function subtract(a, b) {
	  return a - b;
	}
	// 将这些函数添加到一个对象中并导出该对象
	module.exports = {
	  add,
	  subtract
	};
	
	// main.js
	// 引入 utils 模块
	var utils = require('./utils');
	// 使用 utils 模块中的函数
	var sum = utils.add(5, 3);
	var difference = utils.subtract(8, 2);
	console.log('Sum:', sum);
	console.log('Difference:', difference);
	```

## 5.3 模块作用域
- 模块作用域：模块作用域和函数作用域类似，在自定义模块中定义的变量、方法只能在当前模块内被访问，这种模块级别的访问限制。模块作用域的好处可以防止全局变量污染的问题。






# 6 Buffer（缓冲器）

## 6.1 概念
`Buffer` 是一个类似于数组的 对象 ，用于表示固定长度的字节序列
`Buffer` 本质是一段内存空间，专门用来处理 二进制数据 。
![[Pasted image 20240704184048.png]]

## 6.2 特点
1. `Buffer` 大小固定且无法调整
2. `Buffer` 性能较好，可以直接对计算机内存进行操作
3. 每个元素的大小为 1 字节（`byte`）
![[Pasted image 20240704184104.png]]


## 6.3 使用
### 6.3.1 3-1. 创建 Buffer
`Node.js` 中创建 `Buffer` 的方式主要如下几种：
1. `Buffer.alloc`
	```js
	//创建了一个长度为 10 字节的 Buffer，相当于申请了 10 字节的内存空间，每个字节的值为 0
	let buf_1 = Buffer.alloc(10); // 结果为 <Buffer 00 00 00 00 00 00 00 00 00 00>
	```

2. `Buffer.allocUnsafe`
	```js
	//创建了一个长度为 10 字节的 Buffer，buffer 中可能存在旧的数据, 可能会影响执行结果，所以叫unsafe
	let buf_2 = Buffer.allocUnsafe(10);
	```

3. `Buffer.from`
	```js
	//通过字符串创建 Buffer
	let buf_3 = Buffer.from('hello');
	//通过数组创建 Buffer
	let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
	```

### 6.3.2 Buffer 与字符串的转化
- 我们可以借助 `toString` 方法将 `Buffer` 转为字符串
	```js
	let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
	console.log(buf_4.toString())
	```
	
> `toString` 默认是按照 `utf-8` 编码方式进行转换的。

### 6.3.3 Buffer 的读写
- `Buffer` 可以直接通过 `[]` 的方式对数据进行处理

	```js
	//读取
	console.log(buf_3[1]);
	//修改
	buf_3[1] = 97;
	//查看字符串结果
	console.log(buf_3.toString());
	```

> 注意:
> 1. 如果修改的数值超过 255 ，则超过 8 位数据会被舍弃
> 2. 一个 utf-8 的字符 一般 占 3 个字节

# 7 FS 模块

- `fs` 全称为 `file system` ，称之为 文件系统 ，是 `Node.js` 中的 内置模块 ，可以对计算机中的磁盘进行操作

## 7.1 文件写入
- 文件写入就是将 数据 保存到 文件 中，我们可以使用如下几个方法来实现该效果

| 方法                          | 说明   |
| --------------------------- | ---- |
| writeFile                   | 异步写入 |
| writeFileSync               | 同步写入 |
| appendFile / appendFileSync | 追加写入 |
| createWriteStream           | 流式写入 |
### 7.1.1 writeFile 异步写入
- 语法： `fs.writeFile(file, data[, options], callback)`
- 参数说明：
	- `file` 文件名
	- `data` 待写入的数据
	- `options` 选项设置 （可选）
	- `callback` 写入回调
- 返回值： `undefined`
- 代码示例
	```js
	// require 是 Node.js 环境中的'全局'变量，用来导入模块
	const fs = require('fs');
	//将 『三人行，必有我师焉。』 写入到当前文件夹下的『座右铭.txt』文件中
	fs.writeFile('./座右铭.txt', '三人行，必有我师焉。', err => {
	//如果写入失败，则回调函数调用时，会传入错误对象，如写入成功，会传入 null
	if(err){
	console.log(err);
	return;
	}
	console.log('写入成功')；
	});
	```

### 7.1.2 writeFileSync 同步写入
- 语法: `fs.writeFileSync(file, data[, options])`
- 参数与 fs.writeFile 大体一致，只是没有 callback 参数
- 返回值： undefined
- 代码示例：
	```js
	try{
	fs.writeFileSync('./座右铭.txt', '三人行，必有我师焉。');
	}catch(e){
	console.log(e);
	}
	```

> - Node.js 中的磁盘操作是由其他 线程 完成的，结果的处理有两种模式：
> 	- 同步处理 JavaScript 主线程 会等待 其他线程的执行结果，然后再继续执行主线程的代码，**效率较低**
> 	- 异步处理 JavaScript 主线程 不会等待 其他线程的执行结果，直接执行后续的主线程代码，**效率较好**

### 7.1.3 appendFile / appendFileSync 追加写入
- `appendFile` 作用是在文件尾部追加内容，`appendFile` 语法与 `writeFile` 语法完全相同
- 语法:
	- `fs.appendFile(file, data[, options], callback)`
	- `fs.appendFileSync(file, data[, options])`
- 返回值： 二者都为 `undefined`
- 实例代码：
	```js
	fs.appendFile('./座右铭.txt','择其善者而从之，其不善者而改之。', err => {
	if(err) throw err;
	console.log('追加成功')
	});
	fs.appendFileSync('./座右铭.txt','\r\n温故而知新, 可以为师矣');
	```

### 7.1.4 createWriteStream 流式写入
- 语法： `fs.createWriteStream(path[, options])`
- 参数说明：
	- `path` 文件路径
	- `options` 选项配置（ 可选 ）
- 返回值： `Object`
- 代码示例
	```js
	let ws = fs.createWriteStream('./观书有感.txt');
	ws.write('半亩方塘一鉴开\r\n');
	ws.write('天光云影共徘徊\r\n');
	ws.write('问渠那得清如许\r\n');
	ws.write('为有源头活水来\r\n');
	ws.end();
	```

> 程序打开一个文件是需要消耗资源的 ，流式写入可以减少打开关闭文件的次数。
> 流式写入方式适用于 大文件写入或者频繁写入 的场景, `writeFile` 适合于 写入频率较低的场景

### 7.1.5 写入文件的场景
- 文件写入 在计算机中是一个非常常见的操作，下面的场景都用到了文件写入
	- 下载文件
	- 安装软件
	- 保存程序日志，如 `Git`
	- 编辑器保存文件
	- 视频录制

> 当 **需要持久化保存数据** 的时候，应该想到 文件写入




## 7.2 文件读取
- 文件读取顾名思义，就是通过程序从文件中取出其中的数据，我们可以使用如下几种方式：

| 方法               | 说明   |
| ---------------- | ---- |
| readFile         | 异步读取 |
| readFileSync     | 同步读取 |
| createReadStream | 流式读取 |
### 7.2.1 readFile 异步读取
- 语法： `fs.readFile(path[, options], callback)`
- 参数说明：
	- `path` 文件路径
	- `options` 选项配置
	- `callback` 回调函数
- 返回值： `undefined`
- 代码示例
	```js
	//导入 fs 模块
	const fs = require('fs');
	fs.readFile('./座右铭.txt', (err, data) => {
	if(err) throw err;
	console.log(data);
	});
	fs.readFile('./座右铭.txt', 'utf-8',(err, data) => {
	if(err) throw err;
	console.log(data);
	});
	```

### 7.2.2 readFileSync 同步读取
- 语法： `fs.readFileSync(path[, options])`
- 参数说明：
	- `path` 文件路径
	- `options` 选项配置
- 返回值： `string | Buffer`
- 代码示例
	```js
	let data = fs.readFileSync('./座右铭.txt');
	let data2 = fs.readFileSync('./座右铭.txt', 'utf-8');
	```

### 7.2.3 createReadStream 流式读取
- 语法： `fs.createReadStream(path[, options])`
- 参数说明：
	- `path` 文件路径
	- `options` 选项配置（ 可选 ）
- 返回值： `Object`
- 代码示例
	```js
	//创建读取流对象
	let rs = fs.createReadStream('./观书有感.txt');
	//每次取出 64k 数据后执行一次 data 回调
	rs.on('data', data => {
	console.log(data);
	console.log(data.length);
	});
	//读取完毕后, 执行 end 回调
	rs.on('end', () => {
	console.log('读取完成')
	})
	```

### 7.2.4 读取文件应用场景
- 电脑开机
- 程序运行
- 编辑器打开文件
- 查看图片
- 播放视频
- 播放音乐
- Git 查看日志
- 上传文件
- 查看聊天记录






## 7.3 文件移动与重命名
- 在 Node.js 中，我们可以使用 `rename` 或 `renameSync` 来移动或重命名 文件或文件夹
- 语法：
	- `fs.rename(oldPath, newPath, callback)`
	- `fs.renameSync(oldPath, newPath)`
- 参数说明：
	- `oldPath` 文件当前的路径
	- `newPath` 文件新的路径
	- `callback` 操作后的回调
- 代码示例：
	```js
	fs.rename('./观书有感.txt', './论语/观书有感.txt', (err) =>{
	if(err) throw err;
	console.log('移动完成')
	});
	fs.renameSync('./座右铭.txt', './论语/我的座右铭.txt');
	```


## 7.4 文件删除

- 在 Node.js 中，我们可以使用 `unlink` 或 `unlinkSync` 来删除文件
- 语法：
	- `fs.unlink(path, callback)`
	- `fs.unlinkSync(path)`
- 参数说明：
	- `path` 文件路径
	- `callback` 操作后的回调
- 代码示例：
	```js
	const fs = require('fs');
	fs.unlink('./test.txt', err => {
	if(err) throw err;
	console.log('删除成功');
	});
	fs.unlinkSync('./test2.txt');
	
	fs.rm('./test.txt', err => {
	if(err) throw err;
	console.log('删除成功');
	})//同步方法 rmSync
	```

## 7.5 文件夹操作
- 借助 Node.js 的能力，我们可以对文件夹进行 **创建** 、 **读取** 、 **删除** 等操作

| 方法                    | 说明    |
| --------------------- | ----- |
| mkdir / mkdirSync     | 创建文件夹 |
| readdir / readdirSync | 读取文件夹 |
| rmdir / rmdirSync     | 删除文件夹 |
### 7.5.1 mkdir 创建文件夹
- 在 Node.js 中，我们可以使用 `mkdir` 或 `mkdirSync` 来创建文件夹
- 语法：
	- `fs.mkdir(path[, options], callback)`
	- `fs.mkdirSync(path[, options])`
- 参数说明：
	- `path` 文件夹路径
	- `options` 选项配置（ 可选 ）
	- `callback` 操作后的回调
- 示例代码
	```js
	//异步创建文件夹
	fs.mkdir('./page', err => {
	if(err) throw err;
	console.log('创建成功');
	});
	//递归异步创建
	fs.mkdir('./1/2/3', {recursive: true}, err => {
	if(err) throw err;
	console.log('递归创建成功');
	});
	//递归同步创建文件夹
	fs.mkdirSync('./x/y/z', {recursive: true});
	```

### 7.5.2 readdir 读取文件夹
- 在 Node.js 中，我们可以使用 `readdir` 或 `readdirSync` 来读取文件夹
- 语法：
	- `fs.readdir(path[, options], callback)`
	- `fs.readdirSync(path[, options])`
- 参数说明：
	- `path` 文件夹路径
	- `options` 选项配置（ 可选 ）
	- `callback` 操作后的回调
- 示例代码
	```js
	//异步读取
	fs.readdir('./论语', (err, data) => {
	if(err) throw err;
	console.log(data);
	});
	//同步读取
	let data = fs.readdirSync('./论语');
	console.log(data)
	```
### 7.5.3 rmdir 删除文件夹
- 在 Node.js 中，我们可以使用 `rmdir` 或 `rmdirSync` 来删除文件夹
- 语法：
	- `fs.rmdir(path[, options], callback)`
	- `fs.rmdirSync(path[, options])`
- 参数说明：
	- `path` 文件夹路径
	- `options` 选项配置（ 可选 ）
	- `callback` 操作后的回调
- 示例代码：
	```js
	//异步删除文件夹
	fs.rmdir('./page', err => {
	if(err) throw err;
	console.log('删除成功');
	});
	//异步递归删除文件夹
	fs.rmdir('./1', {recursive: true}, err => {
	if(err) {
	console.log(err);
	}
	console.log('递归删除')
	});
	//同步递归删除文件夹
	fs.rmdirSync('./x', {recursive: true})
	```

## 7.6 查看资源状态
- 在 Node.js 中，我们可以使用 `stat` 或 `statSync` 来查看资源的详细信息
- 语法：
	- `fs.stat(path[, options], callback)`
	- `fs.statSync(path[, options])`
- 参数说明：
	- `path` 文件夹路径
	- `options` 选项配置（ 可选 ）
	- `callback` 操作后的回调
- 示例代码
	```js
	//异步获取状态
	fs.stat('./data.txt', (err, data) => {
	if(err) throw err;
	console.log(data);
	});
	//同步获取状态
	let data = fs.statSync('./data.txt');
	```

- 结果值对象结构：
	- size 文件体积
	- birthtime 创建时间
	- mtime 最后修改时间
	- isFile 检测是否为文件
	- isDirectory 检测是否为文件夹
	- ....





## 7.7 相对路径问题

- fs 模块对资源进行操作时，路径的写法有两种：
1. 相对路径
	- `./座右铭.txt`    当前目录下的座右铭.txt
	- `座右铭.txt`      等效于上面的写法
	- `../座右铭.txt`   当前目录的上一级目录中的座右铭.txt
1. 绝对路径
	- `D:/Program Files`     windows 系统下的绝对路径
	- `/usr/bin`                   Linux 系统下的绝对路径

> 相对路径中所谓的 当前目录 ，指的是 命令行的工作目录 ，而并非是文件的所在目录
> 所以当命令行的工作目录与文件所在目录不一致时，会出现一些 BUG



## 7.8 `__dirname`

- `__dirname` 与 `require` 类似，都是 Node.js 环境中的'全局'变量
- `__dirname` 保存着 当前文件所在目录的绝对路径 ，可以使用 `__dirname` 与文件名拼接成绝对路径
- 代码示例：
	```js
	let data = fs.readFileSync(__dirname + '/data.txt');
	console.log(data)
	```

> 使用 fs 模块的时候，尽量使用 `__dirname` 将路径转化为绝对路径，这样可以避免相对路径产生的`Bug`


# 8 path 模块
- `path` 模块提供了 操作路径 的功能，我们将介绍如下几个较为常用的几个 `API`：

| API           | 说明           |
| ------------- | ------------ |
| path.resolve  | 拼接规范的绝对路径 常用 |
| path.sep      | 获取操作系统的路径分隔符 |
| path.parse    | 解析路径并返回对象    |
| path.basename | 获取路径的基础名称    |
| path.dirname  | 获取路径的目录名     |
| path.extname  | 获得路径的扩展名     |
| `__fileName`  | 文件的绝对路径      |
- 代码示例：
	```js
	const path = require('path');
	//获取路径分隔符
	console.log(path.sep);//    /
	//拼接绝对路径
	console.log(path.resolve(__dirname, 'practice'));//F:\桌面\倉的前端历程\Node.js\bro jin’s nodeJS\practice\practice
	//解析路径
	let pathname = 'D:/program file/nodejs/node.exe';
	console.log(path.parse(pathname));
	//获取路径基础名称
	console.log(path.basename(pathname))
	//获取路径的目录名
	console.log(path.dirname(pathname));
	//获取路径的扩展名
	console.log(path.extname(pathname))
	```

## 8.1 `__fileName`

- 保存的是文件的绝对路径
- `__dirname` 保存着 当前文件所在目录的绝对路径

	```js
	console.log(__filename);//F:\桌面\倉的前端历程\Node.js\bro jin’s nodeJS\practice\practice.js
	console.log(__dirname);//F:\桌面\倉的前端历程\Node.js\bro jin’s nodeJS\practice
	```

## 8.2 path.parse()

- 返回值：对象
- root：所在盘符的名字
- dir：文件夹的绝对路径
- base：文件名字(文件名字+拓展名)
- ext：文件的拓展名
- name：文件名字
	```js
	root: 'F:\\',
	dir: 'F:\\桌面\\倉的前端历程\\Node.js\\bro jin’s nodeJS\\practice',     
	base: 'practice.js',
	ext: '.js',
	name: 'practice'
	
	const str1 = path.parse(__filename)
	console.log(str1.dir);//F:\桌面\倉的前端历程\Node.js\bro jin’s nodeJS\practice
	```

# 9 NPM

![[npm|npm]]






# 10 Http协议

## 10.1 概念
- HTTP（hypertext transport protocol）协议；中文叫超文本传输协议
- 是一种基于`TCP/IP`的应用层通信协议
- 这个协议详细规定了 浏览器 和万维网 服务器 之间互相通信的规则。
- 协议中主要规定了两个方面的内容
	- **客户端**：用来向服务器发送数据，可以被称之为请求报文
	- **服务端**：向客户端返回数据，可以被称之为响应报文
报文：可以简单理解为就是一堆字符串
## 10.2 请求报文的组成
- 请求行
- 请求头
- 空行
- 请求体
### 10.2.1 HTTP 的请求行
- 请求方法（get、post、put、delete等）
- 请求 URL（统一资源定位器）
- 例如：`http://www.baidu.com:80/index.html?a=100&b=200#logo`


|                 |                    |
| --------------- | ------------------ |
| http：           | 协议（https、ftp、ssh等） |
| `www.baidu.com` | 域名                 |
| 80              | 端口号                |
| /index.html     | 路径                 |
| a=100&b=200     | 查询字符串              |
| `#logo`         |  哈希（锚点链接）          |

- HTTP协议版本号
### 10.2.2 HTTP 请求头
- 格式：『头名：头值』
- 常见的请求头有
![[Pasted image 20240705051220.png|475]]

### 10.2.3 HTTP 的请求体
- 请求体内容的格式是非常灵活的，
	- （可以是空）==> GET请求，
	- （也可以是字符串，还可以是JSON）===> POST请求
- 例如：
	- 字符串：keywords=手机&price=2000
	- JSON：{"keywords":"手机","price":2000}
## 10.3 响应报文的组成
### 10.3.1 响应行
```http
HTTP/1.1 200 OK
```
- `HTTP/1.1`：HTTP协议版本号
- `200`：响应状态码 404 Not Found 500 Internal Server Error
	- 还有一些状态码，参考：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status
- `OK`：响应状态描述
> 响应状态码和响应字符串关系是一一对应的。


### 10.3.2 响应头
```http
Cache-Control:缓存控制 private 私有的，只允许客户端缓存数据
Connection 链接设置
Content-Type:text/html;charset=utf-8 设置响应体的数据类型以及字符集,响应体为html，字符集
utf-8
Content-Length:响应体的长度，单位为字节
```

### 10.3.3 空行
### 10.3.4 响应体
- 响应体内容的类型是非常灵活的，常见的类型有 `HTML`、`CSS`、`JS`、图片、`JSON`


## 10.4 创建 HTTP 服务
- 使用 nodejs 创建 HTTP 服务
### 10.4.1 操作步骤
```js
//1. 导入 http 模块
const http = require('http');
//2. 创建服务对象 create 创建 server 服务
// request 意为请求. 是对请求报文的封装对象, 通过 request 对象可以获得请求报文的数据
// response 意为响应. 是对响应报文的封装对象, 通过 response 对象可以设置响应报文
const server = http.createServer((request, response) => {
	response.end('Hello HTTP server');
});
//3. 监听端口, 启动服务
server.listen(9000, () => {
	console.log('服务已经启动, 端口 9000 监听中...');
});
```

> `http.createServer` 里的回调函数的执行时机： 当接收到 HTTP 请求的时候，就会执行

### 10.4.2 测试
- 浏览器请求对应端口

### 10.4.3 注意事项
1. 命令行 `ctrl + c` 停止服务
2. 当服务启动后，更新代码 必须重启服务才能生效
3. 响应内容中文乱码的解决办法
	```js
	response.setHeader('content-type','text/html;charset=utf-8');
	```
4. 端口号被占用
	- 关闭当前正在运行监听端口的服务 （ 使用较多 ）
	- 修改其他端口号
	```js
	Error: listen EADDRINUSE: address already in use :::9000
	```
5. HTTP 协议默认端口是 **80** 。HTTPS 协议的默认端口是 **443**, HTTP 服务开发常用端口有 3000，8080，8090，9000 等

## 10.5 浏览器查看 HTTP 报文

### 10.5.1 点击步骤
![[Pasted image 20240705052404.png|375]]


### 10.5.2 查看请求行与请求头
![[Pasted image 20240705052447.png|400]]

### 10.5.3 查看请求体
![[Pasted image 20240705052509.png|400]]

### 10.5.4 查看 URL 查询字符串
![[Pasted image 20240705052533.png|400]]

### 10.5.5 查看响应行与响应头
![[Pasted image 20240705052606.png|375]]


### 10.5.6 查看响应体
![[Pasted image 20240705052619.png]]


## 10.6 获取 HTTP 请求报文

- 想要获取请求的数据，需要通过 `request` 对象
![[Pasted image 20240705052723.png]]

> **注意事项**：
> 
> 1. `request.url` 只能获取路径以及查询字符串，无法获取 `URL` 中的域名以及协议的内容
> 2. `request.headers` 将请求信息转化成一个对象，并将属性名都转化成了『小写』
> 3. 关于路径：如果访问网站的时候，只填写了 `IP` 地址或者是域名信息，此时请求的路径为『 / 』
> 4. 关于 `favicon.ico`：这个请求是属于浏览器自动发送的请求

### 10.6.1 练习(practice)
![[Pasted image 20240705053141.png]]

```js
//1、引入http模块
const http = require("http");
//2、建立服务
const server = http.createServer((request,response)=>{
let {url,method} = request; //对象的解构赋值
//设置响应头信息
//解决中文乱码
response.setHeader("Content-Type","text/html;charset=utf-8")
if(url == "/register" && method == "GET"){
response.end("注册页面");
}else if(url=="/login" && method == "GET"){
response.end("登录页面");
}else{
response.end("<h1>404 Not Found</h1>")
}
})
//3、监听端口
server.listen(8000,()=>{
console.log('服务启动中....');
})
```

## 10.7 设置 HTTP 响应报文

![[Pasted image 20240705053235.png|400]]

```js
write 和 end 的两种使用情况：
//1. write 和 end 的结合使用 响应体相对分散
response.write('xx');
response.write('xx');
response.write('xx');
response.end(); //每一个请求，在处理的时候必须要执行 end 方法的
//2. 单独使用 end 方法 响应体相对集中
response.end('xxx');
```
### 10.7.1 练习(practice)
- 搭建 HTTP 服务，响应一个 4 行 3 列的表格，并且要求表格有 隔行换色效果 ，且 点击 单元格能 高亮显示
```js
//导入 http 模块
const http = require('http');
//创建服务对象
const server = http.createServer((request, response) => {
response.end(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
td{
padding: 20px 40px;
}
table tr:nth-child(odd){
background: #aef;
}
table tr:nth-child(even){
background: #fcb;
}
table, td{
border-collapse: collapse;
}
</style>
</head>
<body>
<table border="1">
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
</table>
<script>
//获取所有的 td
let tds = document.querySelectorAll('td');
//遍历
tds.forEach(item => {
item.onclick = function(){
this.style.background = '#222';
}
})
</script>
</body>
</html>
`); //设置响应体
});
//监听端口, 启动服务
server.listen(9000, () => {
console.log('服务已经启动....')
});
```
## 10.8 网页资源的基本加载过程
- 网页资源的加载都是循序渐进的，首先获取 `HTML` 的内容， 然后解析 `HTML` 在发送其他资源的请求，如 `CSS`，`Javascript`，图片等。 理解了这个内容对于后续的学习与成长有非常大的帮助

## 10.9 静态资源服务
- 静态资源是指 内容长时间不发生改变的资源 ，例如图片，视频，`CSS` 文件，`JS`文件，`HTML文件`，字体文件等
- 动态资源是指 内容经常更新的资源 ，例如百度首页，网易首页，京东搜索列表页面等
### 10.9.1 网站根目录或静态资源目录
- HTTP 服务在哪个文件夹中寻找静态资源，那个文件夹就是 静态资源目录 ，也称之为 网站根目录
> 思考：`vscode` 中使用 l`ive-server` 访问 `HTML` 时， 它启动的服务中网站根目录是谁？
### 10.9.2 网页中的 URL
- 网页中的 `URL` 主要分为两大类：相对路径与绝对路径
#### 10.9.2.1 绝对路径
- 绝对路径可靠性强，而且相对容易理解，在项目中运用较多
![[Pasted image 20240706035656.png|400]]

#### 10.9.2.2 相对路径
- 相对路径在发送请求时，需要与当前页面 URL 路径进行 计算 ，得到完整 URL 后，再发送请求，学习阶段用的较多
- 例如当前网页 url 为 http://www.atguigu.com/course/h5.html
![[Pasted image 20240706035734.png]]
### 10.9.3 网页中使用 URL 的场景小结
- 包括但不限于如下场景：
- `a` 标签 `href`
- `link` 标签 `href`
- `script` 标签 `src`
- `img` 标签 `src`
- `video` `audio` 标签 `src`
- `form` 中的 `action`
- `AJAX` 请求中的 `URL`

### 10.9.4 设置资源类型（mime类型）
- 媒体类型（通常称为 Multipurpose Internet Mail Extensions 或 MIME 类型 ）是一种标准，用来表示文档、文件或字节流的性质和格式。
> `mime` 类型结构： [type]/[subType]
> 例如： `text/html` `text/css` `image/jpeg` `image/png` `application/json`


- HTTP 服务可以设置响应头 Content-Type 来表明响应体的 MIME 类型，浏览器会根据该类型决定如何处理资源
- 下面是常见文件对应的 mime 类型
> html:  'text/html',
> css:     'text/css',
> js:       'text/javascript',
> png: 'image/png',
> jpg: 'image/jpeg',
> gif: 'image/gif',
> mp4: 'video/mp4',
> mp3: 'audio/mpeg',
> json: 'application/json'

> 对于未知的资源类型，可以选择 `application/octet-stream` 类型，浏览器在遇到该类型的响应时，会对响应体内容进行独立存储，也就是我们常见的 下载 效果

## 10.10 GET和POST请求的区别
- `GET` 和 `POST` 是 `HTTP` 协议请求的两种方式。
	- `GET` 主要用来获取数据，`POST` 主要用来提交数据
	- `GET` 带参数请求是将参数缀到 URL 之后，在地址栏中输入 url 访问网站就是 `GET` 请求，
	- `POST` 带参数请求是将参数放到请求体中
	- `POST` 请求相对 `GET` 安全一些，因为在浏览器中参数会暴露在地址栏
	- `GET` 请求大小有限制，一般为 `2K`，而 `POST` 请求则没有大小限制

### 10.10.1 GET 和 POST 请求场景小结
1. `GET` 请求的情况：
	- 在地址栏直接输入 `url` 访问
	- 点击 `a` 链接
	- `link` 标签引入 `css`
	- `script` 标签引入 `js`
	- `img` 标签引入图片
	- `form` 标签中的 `method` 为 `get` （不区分大小写）
	- `ajax` 中的 `get` 请求
1. `POST` 请求的情况：
	- `form` 标签中的 `method` 为 `post`（不区分大小写）
	- `AJAX` 的 `post` 请求

# 11 ExpressJS

## 11.1 express 介绍
- `express` 是一个基于 `Node`.`js` 平台的极简、灵活的 `WEB` 应用开发框架，官方网址：https://www.expressjs.com.cn/
- 简单来说，`express` 是一个封装好的工具包，封装了很多功能，便于我们开发 `WEB` 应用（`HTTP` 服务）
## 11.2 `express` 使用
### 11.2.1 `express` 下载
- `express` 本身是一个 `npm` 包，所以可以通过 `npm` 安装
	```js
	npm init
	npm i express
	```

### 11.2.2 express 初体验
- 大家可以按照这个步骤进行操作：
	1. 创建 JS 文件，键入如下代码
	```js
	//1. 导入 express
	const express = require('express');
	//2. 创建应用对象
	const app = express();
	//3. 创建路由规则
	app.get('/home', (req, res) => {
	res.end('hello express server');
	});
	//4. 监听端口 启动服务
	app.listen(3000, () =>{
	console.log('服务已经启动, 端口监听为 3000...');
	});
	```

## 11.3 express 路由
### 11.3.1 什么是路由
- 官方定义： <span style="background:#fff88f">路由确定了应用程序如何响应客户端对特定端点的请求</span>
### 11.3.2 路由的使用
- 一个路由的组成有 <span style="background:#fff88f">请求方法</span> ， <span style="background:#fff88f">请求方法</span> 和 <span style="background:#fff88f">请求方法</span> 组成
- `express` 中提供了一系列方法，可以很方便的使用路由，使用格式如下：
	- `app.<method>(path，callback)`

- 代码示例：
	```js
	//导入 express
	const express = require('express');
	//创建应用对象
	const app = express();
	//创建 get 路由
	app.get('/home', (req, res) => {
		res.send('网站首页');
	});
	//首页路由
	app.get('/', (req,res) => {
		res.send('我才是真正的首页');
	});
	//创建 post 路由
	app.post('/login', (req, res) => {
		res.send('登录成功');
	});
	//匹配所有的请求方法
	app.all('/search', (req, res) => {
		res.send('1 秒钟为您找到相关结果约 100,000,000 个');
	});
	//自定义 404 路由
	app.all("*", (req, res) => {
		res.send('<h1>404 Not Found</h1>')
	});
	//监听端口 启动服务
	app.listen(3000, () =>{
		console.log('服务已经启动, 端口监听为 3000');
	});
	```


### 11.3.3 获取请求参数
- `express` 框架封装了一些 `API` 来方便获取请求报文中的数据，并且兼容原生 `HTTP` 模块的获取方式
	```js
	//导入 express
	const express = require('express');
	//创建应用对象
	const app = express();
	//获取请求的路由规则
	app.get('/request', (req, res) => {
	//1. 获取报文的方式与原生 HTTP 获取方式是兼容的
	console.log(req.method);
	console.log(req.url);
	console.log(req.httpVersion);
	console.log(req.headers);
	//2. express 独有的获取报文的方式
	//获取查询字符串
	console.log(req.query); // 『相对重要』
	// 获取指定的请求头
	console.log(req.get('host'));
	res.send('请求报文的获取');
	});
	//启动服务
	app.listen(3000, () => {
	console.log('启动成功....')
	})
	```

### 11.3.4 获取路由参数
- 路由参数指的是 URL 路径中的参数（数据）

	```js
	app.get('/:id.html', (req, res) => {
	res.send('商品详情, 商品 id 为' + req.params.id);
	})
	```

## 11.4 express 响应设置
- `express` 框架封装了一些 `API` 来方便给客户端响应数据，并且兼容原生 `HTTP` 模块的获取方式

	```js
	//获取请求的路由规则
	app.get("/response", (req, res) => {
	//1. express 中设置响应的方式兼容 HTTP 模块的方式
		res.statusCode = 404;
		res.statusMessage = 'xxx';
		res.setHeader('abc','xyz');
		res.write('响应体');
		res.end('xxx');
	//2. express 的响应方法
		res.status(500); //设置响应状态码
		res.set('xxx','yyy');//设置响应头
		res.send('中文响应不乱码');//设置响应体
	//连贯操作
		res.status(404).set('xxx','yyy').send('你好朋友')
	//3. 其他响应
		res.redirect('http://atguigu.com')//重定向
		res.download('./package.json');//下载响应
		res.json();//响应 JSON
		res.sendFile(__dirname + '/home.html') //响应文件内容	
	});
	```

## 11.5 express 中间件
### 11.5.1 什么是中间件
- 中间件（`Middleware`）本质是一个回调函数
- 中间件函数 可以像路由回调一样访问 请求对象（`request`） ， 响应对象（`response`）
### 11.5.2 中间件的作用
- 中间件的作用 就是 使用函数封装公共操作，简化代码
### 11.5.3 中间件的类型
- 全局中间件
- 路由中间件
#### 11.5.3.1 定义全局中间件
- <span style="background:#fff88f">每一个请求</span> 到达服务端之后 <span style="background:#fff88f">都会执行全局中间件函数</span>
- 声明中间件函数
	```js
	let recordMiddleware = function(request,response,next){
	//实现功能代码
	//.....
	//执行next函数(当如果希望执行完中间件函数之后，仍然继续执行路由中的回调函数，必须调用next)
	next();
	}
	```

- 应用中间件
	```js
	app.use(recordMiddleware);
	```

#### 11.5.3.2 多个全局中间件
- `express` 允许使用 `app.use()` 定义多个全局中间件
	```js
	app.use(function (request, response, next) {
		console.log('定义第一个中间件');
		next();
	})
	app.use(function (request, response, next) {
		console.log('定义第二个中间件');
		next();
	})
	app.use( (request, response, next) =>{
		console.log('定义第二个中间件');
		next();
	})
	```

#### 11.5.3.3 定义路由中间件
- 如果 只需要对某一些路由进行功能封装 ，则就需要路由中间件
- 调用格式如下：
	```js
	app.get('/路径',`中间件函数`,(request,response)=>{
	});
	app.get('/路径',`中间件函数1`,`中间件函数2`,(request,response)=>{
	})
	```

#### 11.5.3.4 静态资源中间件
- `express` 内置处理静态资源的中间件
	```js
	//引入express框架
	const express = require('express');
	//创建服务对象
	const app = express();
	//静态资源中间件的设置，将当前文件夹下的public目录作为网站的根目录
	app.use(express.static('./public')); //当然这个目录中都是一些静态资源
	//如果访问的内容经常变化，还是需要设置路由
	//但是，在这里有一个问题，如果public目录下有index.html文件，单独也有index.html的路由，
	//则谁书写在前，优先执行谁
	app.get('/index.html',(request,response)=>{
	respsonse.send('首页');
	});
	//监听端口
	app.listen(3000,()=>{
	console.log('3000 端口启动....');
	});
	```

> 注意事项:
> 1. `index.html` 文件为默认打开的资源
> 2. 如果静态资源与路由规则同时匹配，谁先匹配谁就响应
> 3. 路由响应动态资源，静态资源中间件响应静态资源

#### 11.5.3.5 获取请求体数据 body-parser
- `express` 可以使用 `body-parser` 包处理请求体
1. 第一步：安装
	```js
	npm i body-parser
	```

1. 第二步：导入 `body-parser` 包
	```js
	const bodyParser = require('body-parser');
	```

1. 第三步：获取中间件函数
	```js
	//处理 querystring 格式的请求体
	let urlParser = bodyParser.urlencoded({extended:false}));
	//处理 JSON 格式的请求体
	let jsonParser = bodyParser.json();
	```

1. 第四步：设置路由中间件，然后使用 request.body 来获取请求体数据

	```js
	app.post('/login', urlParser, (request,response)=>{
	//获取请求体数据
	//console.log(request.body);
	//用户名
	console.log(request.body.username);
	//密码
	console.log(request.body.userpass);
	response.send('获取请求体数据');
	});
	```

1. 获取到的请求体数据：
	```js
	[Object: null prototype] { username: 'admin', userpass: '123456' }
	```

## 11.6 Router(中间件的一种)
### 11.6.1 什么是 Router
- `express` 中的 `Router` 是一个完整的中间件和路由系统，可以看做是一个小型的 `app` 对象。
### 11.6.2 Router 作用
- 对路由进行模块化，更好的管理路由
### 11.6.3 Router 使用
- 创建独立的 JS 文件（`homeRouter.js`）
	```js
	//1. 导入 express
	const express = require('express');
	//2. 创建路由器对象
	const router = express.Router();
	//3. 在 router 对象身上添加路由
	router.get('/', (req, res) => {
		res.send('首页');
	})
	router.get('/cart', (req, res) => {
		res.send('购物车');
	});
	//4. 暴露
	module.exports = router;
	```

- 主文件
	```js
	const express = require('express');
	const app = express();
	//5.引入子路由文件
	const homeRouter = require('./routes/homeRouter');
	//6.设置和使用中间件
	app.use(homeRouter);
	app.listen(3000,()=>{
		console.log('3000 端口启动....');
	})
	```


# 12 EJS 模板引擎
## 12.1 什么是模板引擎
- 模板引擎是分离 用户界面和业务数据 的一种技术
## 12.2 什么是 EJS
- EJS 是一个高效的 Javascript 的模板引擎
	- 官网: https://ejs.co/
	- 中文站：https://ejs.bootcss.com/
## 12.3 EJS 初体验
- 下载安装EJS
	```js
	npm i ejs --save
	```

- 代码示例
	```js
	//1.引入ejs
	const ejs = require('ejs');
	//2.定义数据
	let person = ['张三','李四','王二麻子'];
	//3.ejs解析模板返回结构
	//<%= %> 是ejs解析内容的标记，作用是输出当前表达式的执行结构
	let html = ejs.render(‘<%= person.join(",") %>’, {person:person});
	//4.输出结果
	console.log(html);
	```

## 12.4 EJS 常用语法
- 执行JS代码
	```js
	<% code %>
	```

- 输出转义的数据到模板上
	```js
	<%= code %>
	```
- 输出非转义的数据到模板上
	```js
	<%- code %>
	```













































