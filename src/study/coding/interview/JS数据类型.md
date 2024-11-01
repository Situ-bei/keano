--- 
date: 2024-10-31
title: JS数据类型
category: 
- 前端
- JS原理
tag:
- JS数据类型
- 面试
headerDepth: 6
excerpt: <p>JavaScript 是一种动态类型语言，数据类型在运行时确定，而不是在编译时确定。JavaScript 有七种基本数据类型和一种复合数据类型。 </p>
---

JavaScript 的数据类型可以分为两大类：基本数据类型（原始类型）和引用数据类型。


## 1. 基本数据类型（原始类型）

```javascript
// 1. Number
let num = 42;
let float = 42.0;
let infinity = Infinity;
let notANumber = NaN;

// 2. String
let str1 = 'Hello';
let str2 = "World";
let str3 = `Template ${str1}`;

// 3. Boolean
let isTrue = true;
let isFalse = false;

// 4. Undefined
let undefinedVar;
let explicitUndefined = undefined;

// 5. Null
let nullVar = null;

// 6. Symbol (ES6)
let sym1 = Symbol();
let sym2 = Symbol('description');

// 7. BigInt (ES2020)
let bigInt = 9007199254740991n;
```


## 2. 引用数据类型

```javascript
// 1. Object
let obj = {
    name: 'John',
    age: 30
};

// 2. Array
let arr = [1, 2, 3, 'four', { five: 5 }];

// 3. Function
function func() {}
let arrowFunc = () => {};

// 4. Date
let date = new Date();

// 5. RegExp
let regex = /pattern/g;

// 6. Map
let map = new Map();
map.set('key', 'value');

// 7. Set
let set = new Set([1, 2, 3]);

// 8. WeakMap
let weakMap = new WeakMap();

// 9. WeakSet
let weakSet = new WeakSet();
```


## 3. 类型检查

```javascript
// 1. typeof 操作符
console.log(typeof 42);           // "number"
console.log(typeof 'string');     // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof Symbol());     // "symbol"
console.log(typeof 42n);          // "bigint"
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof null);         // "object" (这是一个历史遗留bug)
console.log(typeof function(){}); // "function"

// 2. instanceof 操作符
console.log([] instanceof Array);           // true
console.log({} instanceof Object);          // true
console.log(/regex/ instanceof RegExp);     // true

// 3. Object.prototype.toString
Object.prototype.toString.call([]);         // "[object Array]"
Object.prototype.toString.call({});         // "[object Object]"
Object.prototype.toString.call(null);       // "[object Null]"
```
## 4. 类型转换

```javascript
// 1. 显式转换
Number('42');              // 42
String(42);               // "42"
Boolean(1);               // true
Array.from('hello');      // ['h', 'e', 'l', 'l', 'o']

// 2. 隐式转换
'42' + 1;                 // "421"
'42' - 1;                 // 41
!!42;                     // true
[1, 2] + [3, 4];         // "1,23,4"
```

## 5. 数据类型特点

```javascript
// 1. 基本类型值不可变
let str = 'hello';
str.toUpperCase();        // 返回新字符串 "HELLO"
console.log(str);         // 仍然是 "hello"

// 2. 引用类型可变
let obj = { count: 1 };
obj.count++;
console.log(obj.count);   // 2

// 3. 值比较 vs 引用比较
console.log(42 === 42);   // true
console.log({} === {});   // false
```

## 6. 常见问题和最佳实践

```javascript
// 1. 类型安全检查
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// 2. 空值检查
function isEmpty(value) {
    return value === null || value === undefined;
}

// 3. 安全的类型转换
function toNumber(value) {
    const num = Number(value);
    return isNaN(num) ? 0 : num;
}

// 4. 深拷贝
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// 5. 类型守卫
function processValue(value: string | number) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value.toFixed(2);
}
```


## 注意事项：
1. `typeof null` 返回 "object" 是一个历史遗留bug
2. 使用 `===` 进行严格相等比较
3. 基本类型存储在栈内存，引用类型存储在堆内存
4. 注意隐式类型转换可能带来的问题
5. 使用适当的类型检查方法