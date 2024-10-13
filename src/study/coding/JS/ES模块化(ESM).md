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



























