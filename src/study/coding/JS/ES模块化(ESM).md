---
title: 《ES 模块化(ESM)》
category:
- 前端
- JS
tags:
- JS
- JS基础
- JS模块化

date: 2024-06-29T22:48:00
---
ES模块化（ECMAScript Modules，简称 ESM）是 JavaScript 的官方模块系统，它在 ECMAScript 6（ES6）中被正式引入。ES模块化提供了一种标准化的方式来组织和管理代码，使得代码的复用性和可维护性大大提高。
<!-- more -->
# 1 语法
## 1.1 单个导出导入
-  `(export --> import ... from "url";)`
- a.js中导出：
	```js
	export function a(n) {
	  console.dir("a" + n);
	}
	export function b(n) {
	  console.dir("b" + n);
	}
	export function c(n) {
	  console.dir("c" + n);
	}
	```

- b.js中选择性引入：
	```js
	import { a, b as B } from "./a.js"; // 选择性导入a，b导入后改名为B
	a("可直接使用")
	```

> `as` 可以指定导入后对象的别名

## 1.2 多个导入导出
- `export default --> import utils from "url";`
- a.js中导出：
	```js
	export default {
	  a: function (n) {
	    console.log("a" + n);
	  },
	  b: function (n) {
	    console.log("b" + n);
	  }
	};
	```
	```js
	function a(n) {
	  console.log("a" + n);
	}
	function b(n) {
	  console.log("b" + n);
	}
	export default {
	  a, // es6的语法省略
	  b,
	};
	```

- b.js中引入：
	```js
	import utils from "./a.js";  // 默认要以对象的形式接收
	utils.a("以对象的形式使用");
	```



























