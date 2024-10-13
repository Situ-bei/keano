---
number headings: auto, first-level 1, max 6, contents ^TOC, skip ^skipped, 1.1
---
# 1 Java script 简介
## 1.1 历史
```
JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

JavaScript（JS）是一种轻量级、解释式或即时编译的编程语言，具有一流的功能。虽然它作为网页的脚本语言最为人所知，但许多非浏览器环境也使用它，如Node.js、Apache CouchDB和Adobe Acrobat。JavaScript是一种基于原型、多范式、单线程、动态的语言，支持面向对象、命令式和声明式（如函数式编程）风格。

```

### 1.1.1 起源
JS 诞生于 1995 年，当时网景公司（Netscape）开发的 Navigator 浏览器拥有着世界第一的市场占有率。网景公司一时风光无两。


当时的浏览器只能只能运行包含了 HTML 和 CSS 的静态网页，网页就相当于是报纸或杂志的电子版，没有任何的动态交互行为。网景公司预见到静态页面并不能够满足市场的需求，于是决定开发一款可以直接运行在浏览器端的编程语言以增加网页的动态交互功能。因此在 1995 年，Netscape 决定在自家浏览器中添加一种脚本语言。

起初网景公司选择了两种方案，第一、和 Sun 公司和做直接在浏览器中嵌入 Java。第二、聘请了一个程序员布兰登·艾克，让他在浏览器中嵌入 Scheme 语言，由于种种原因两种方案都没有实现。网景公司改变了方向，转而尝试开发一种新的编程语言，他们希望这种编程语言的语法类似于 Java。开发新语言的任务落在了上文提到的布兰登·艾克身上。

艾克在很短的时间就完成了语言的设计，并于 1995 年 9 月首次发布测试版并且命名为 LiveScript，12 月发布正式版时又被重命名为 JavaScript。为什么命名为 JavaScript 呢？因为 Java 当时比较火，这里可以理解为网景公司蹭了一下 Java 的热度。

### 1.1.2 战争
同年微软公司推出了新版本的 IE，并引发了第一次浏览器大战。微软更是不讲武德的直接对 JavaScript 解释器进行了逆向工程并创建了 IE 版的 JavaScript 解释器，并且命名为 JScript。JScript 的功能和 JavaScript 一致，但实现方式上却不尽相同。这导致了同样的一个网页在不同的浏览器中有了不同的显示效果，于是浏览器的兼容问题出现了，网页工程师们的痛苦生活开始了。

为了促进 JavaScript 的标准化，网景公司向欧洲计算机制造商协会（ECMA International）提交了 JavaScript，希望能由其制定发布 JavaScript 的语言规范。于是 1997 年 6 月，ECMAScript 语言规范正式发布。1998 年 6 月 ECMAScript2 发布，1999 年 12 月 ECMAScript3 发布。与此同时，微软已经完全取得了第一次浏览器大战的胜利。IE 浏览器的市占率达到了 95%，JScript 成为了 JavaScript 的事实标准，微软不再和 ECMA 合作，因此 ECMAScript4 被迫中止。

### 1.1.3 转折
这一情况持续到了 2008 年，谷歌推出了 Chrome 浏览器，其 V8 引擎的执行速度远远超过了其他的竞争对手。Chrome 的出现使得微软的反抗者们看到了希望，他们在 2008 年开了一个小会，为了推动语言的发展，又将网页标准的制订工作推上了日程，于是 2009 年 12 月 ECMAScript5 标准发布，于此同时 Nodes.js 的发布使得 JS 在浏览器以外的地方大放异彩。自此开始，JavaScript 进入了新的纪元。

自 2015 年起，ES 标准开始固定在每年的 6 月份更新，并以年份命名。ES2015（ES6）、ES2016（ES7）一直到今天的 ES2022（ES13）。

## 1.2 特点
JavaScript 是一门非常有特点的编程语言。很多语言的特点在它身上都有所提现，这里我们只罗列了它众多特点中的一小部分。

## 1.3 解释型
JavaScript 是一门解释型编程语言，解释型编程语言指代码不需要手动编译，而是通过解释器边编译边执行。所以要运行 JS，我们必须现在计算机中安装 JS 的解释器。像是我们使用的浏览器都已经自动集成了 JS 的解释器（我们也称它是 JS 引擎）。Node.JS 也是 JS 引擎，它使得 JS 可以直接在计算机中运行。无论是浏览器还是 Node.js 都需要遵循 ECMAScript（ES）标准。

## 1.4 函数式编程
在 JavaScript 中函数是一等公民，它可以像其他类型的值一样赋值给任意变量，也可以作为参数传递给其他函数。所以在 JS 中函数是非常非常重要，通过函数式编程可以编写出功能强大又灵活的代码。

## 1.5 单线程
JavaScript 是一个单线程的编程语言。简言之，JS 同一时间只能做一件事，一件事完成才会继续做另一件事。单线程降低了 JS 代码的复杂度，也在某些场景下使得 JS 性能变差，所以 JS 又为我们提供了异步的编程方式，以提高代码的运行速度。

## 1.6 面向对象
几乎所有的现代的编程语言都是面向对象的编程语言，JS 也不例外。所谓的面向对象，指将一组相关的功能（数据）统一封装到一个对象中，使用功能时无需考虑其实现的细节，直接找到对应的对象即可完成功能的调用。

## 1.7 扩展 ES
ECMAScript 只是为我们定义最基本的语法，像是数据类型（原始值、对象）、运算符、流程控制语句等内容。为了使 JS 可以适用于不同的场景，在不同的 JS 解释器中还为我们提供了不同的扩展以增强其功能。像是浏览器中的 DOM、BOM 使得我们可以通过 JS 操作网页和浏览器。NodeJS 中的 fs 模块可以使我们直接操作计算机系统中的各种文件。所以我们学习 JS 时，除了要学习 ES 标准以外，还要学习它的各种扩展，才能在不同的环境中发挥出 JS 的最大威力。

# 2 Hello World

```js
## 2.1 编写位置
    - 在网页中，可以在这些位置编写JS代码：
### 2.1.1 Script标签
    <script>
        // JS代码
    </script>

### 2.1.2 外部Js文件
    - <script src="xxx.script"></script>

### 2.1.3 标签的属性中
    - <button onclick="js代码">按钮</button>
    - <a href="javascript:js代码;">超链接</a>

### 2.1.4 打印语句
    <script>
        alert(...)
        console.log(...)
        document.write(...)
    </script>
```

## 2.1 基本语法
```js
### 2.2.1 单行注释
    - // 单行注释

 ### 2.2.2 多行注释
    - /* 多行注释 */

### 2.2.3 分号
    - JS中每一条语句都应该以;结尾，但是JS解释器中有自动添加分号的机制，所以即使不加括号JS解释器会自动根据代码的上下文添加分号，虽然在极少数的情况下会加错，但不写分号依然是偷懒的不错选择，所以加不加;完全看你自己的心情。

### 2.2.4 大小写
    - JS会严格区分字母的大小写，A和a是两个东西，所以注意区分。

### 2.2.5 忽略空格
    - 和HTML相同，JS中的多个空格和换行会被忽略，所以可以借助空格或换行来对代码进行格式化，不会影响代码的运行逻辑。
```

# 3 字面量和变量

```
1. 字面量
    - 字面量其实就是一个值,它所代表的含义就是它字面的意思
    - 比如:1 2 3 4 100 "hello" true null ....

2. 变量
    - 变量可以用“存储”字面量
    - 并且变量中存储的字面量可以随意的修改
    - 通过变量可以对字面量描述，变量比较方便修改
    
    - 变量的使用
        - 声明变量 
            - -->  let 变量名
            - -->  var 变量名
        - 变量赋值 
            - -->  a =xx
    - 声明变量同时进行赋值
        - let i=100

3. 变量的内存
    - 变量中并不存储任何值,而是存储值的内存地址!

4. 常量
    - 在js中使用const声明常量在JS中,常量只能赋值一次,重复赋值会报错
        - 在JS中除了常规的常量外,有一些对象类型的数据我们也会声明为常量

5. 标识符
    - 在JS中,所有可以由我们自主命名的内容,都可以认为是一个标识符
        - 像 变量名 函数名 类名 ...
    - 使用标识符需要遵循如下的命名规范:
        1. 标识符只能含有字母、数字、下划线、$,且不能以数字开头
        2. 标识符不能是JS中的关键字和保留字,也不建议使用内置的函数或类名作为变量名
            - 命名规范:
                - 通常会使用驼峰命名法
                - 首字母小写,每个单词开头大写
                    - maxlength -- > maxLength
                
                - 类名会使用大驼峰命名法
                    - 首字母大写,每个单词开头大写
                    - maxlength -- > MaxLength
                
                - 常量的字母会全部大写
                    - MAX LENGTH

```

```js
//声明变量
let a
let b, c, d
//变量赋值
a = 10
a ='hello'
a = true
    //声明变量同时进行赋值
    - let i=100
//打印变量
console. log(a)
```

# 4 数据类型

```
    数据类型，指那些可以赋值给变量的值，JS中的数据类型由原始值和对象共同组成。
JavaScript中一共有七种原始值：
    1. 数值（Number）
    2. 大整数（BigInt）
    3. 字符串（String）
    4. 布尔值（Boolean）
    5. 空值（Null）
    6. 未定义（Undefined）
    7. 符号（Symbol）
```

## 4.1 数值（Number）
```
数值
    - 在JS中所有的整数和浮点数都是Number类型
        - 浮点数就是小数
    - JS中的数值并不是无限大的,当数值超过一定范围后会显示近似值
    - 数值非常大的时候会显示 infinity 表示一个特殊的数值无穷大
    - 在js中进行一些精度比较高的运算时要十分注意（浮点运算丢精度）
    - NaN是一个特殊的数值，表示非法数值 （not a number）

大整数（BigInt）
    - 大整数用来表示一些比较大的整数
    - 大整数使用n结尾,它可以表示的数字范围是无限大
    - 大整数只能和大整数计算
    - 其他进制的数值
        - 二进制：0b
        - 八进制：0o
        - 十六进制：0x

字符串（String）
    - 在JS中使用单引号或双引号来表示字符串
        - 转义字符 \
            - \" --> =
            - \' --> '
            - 11 --> 11
            - \t --> 制表符
            - \n --> 换行
    - 模版字符串
        - 使用反单引号`来表示模板字符串
        - 可以换行
        - 模板字符串中可以嵌入变量
            - let b = 10   console.log(`b =${b}`）,那打印出来就是b=10
        - 使用 typeof 进行检查数据类型时会反馈 string

布尔值（Boolean）
    - 布尔值主要用来进行逻辑判断
    - 布尔值只有两个true 和 false
        - true 真  1
        - false 假 0

空值（null）
    - 用来表示空对象
    - 空值只有一个 null
    - 使用typeof来检查 会返回object
    - 使用typeof无法检查空值

未定义(Undefined)
    - 当声明一个变量而没有赋值时,它的值就是Undefined
    - Undefined类型的值只有一个就是 undefined
    - 使用typeof检查一个Undefined类型的值时,会返回“undefined"

符号(Symbol)
    - 用来创建一个唯一的标识
    - 使用typeof检查符号时会返回"symbol”

数据检查
    - typeof 运算符
        - typeof用来检查不同的值的类型
        - 它会根据不同的值返回不同的结果
        - 使用方法  使用console.log(typeof a)
```

### 4.1.1 类型转换

```
类型转换
    - 类型转换值将一种数据类型转换成其他类型
    
    - 1.转换为字符串
        1. 调用toString()方法将其他类型转换为字符串
            - 调用xxx的yyy方法
                -- > xxx.yyy()  a.toString（）
            - 由于null和undefined中没有toString()
                - 所以对这两个东西调用toString()时会报错
        2. 调用 String() 函数将其他类型转换为字符串
            - 调用xxx函数  String()
                -- > xxx()
            - 原理:
                - 对于拥有toString()方法的值调用String()函数时
                    - 实际上就是在调用toString()方法
                - 对于null,则直接转换为“null"
                - 对于undefined,直接转换为"undefined"
    
    - 2.转换为数值   将其他的数据类型转换为数值
        - 1. 使用Number()函数来将其他类型转换为数值
            - 转换的情况:
                - 字符串:
                    - 如果字符串是一个合法的数字,则会自动转换为对应的数字
                    - 如果字符串不是合法数字,则转换为NaN 
                    - 如果字符串是空串或纯空格的字符串,则转换为0
                - 布尔值:
                    - true转换为1,false转换为0
                - null       转换为 0
                - undefined  转换为 NaN
        - 2. 专门用来将字符串转换为数值的两个方法
            - parseInt()    将一个字符串转换为一个整数
                - 解析时会从左到右解析字符串，直到读取一个有效的字符串
                - 可以使用 parseInt 对小数取整
            - parseFloat()  将一个字符串转换为浮点数
                - 解析时会从左到右解析字符串，直到读取一个有效的小数位
    
    - 3. 转换为布尔值
        - 使用boolean（）函数进行转换
        - 转换的情况:
            - 数字:
                - 0 和 NaN 转换为false
                - 其余是 true
            - 字符串:
                - 空串 转换为 false
                - 其余是true
            - null和undefined 都转换为 false
            - 对象都会转换为true
        - 所有表示空性的没有的错误的值都会转换为false:
            - 0、NaN、空串、null、undefined、false

类型转换总结

- 转换为字符串
    - 显式转换
        - String()函数
    - 隐式转换
        - +""  算数运算符  加减""空值 

- 转换为数值
    - 显式转换
        - Number()函数
    - 隐式转换
        + 
- 转换为布尔值
    - 显式转换
        - Boolean()
    - 隐式转换
        - !!

```

```js
//不同类型转换成字符串的方法
    //a.toString（）方法
let a = 10 // "10" 输出的值
a = true // "true"
a = 11n // "11"
a = undefined
console.log(typeof a, a)
a = a.toString() // "10"
console.log(typeof a, a)
    //String()函数
let b = 33 // "33"
b = null // "null"
b = undefined // "undefined"
b = true
console.log(typeof b, b)
b = String(b)
console.log(typeof b, b)

//不同类型转换成数值的方法
    //Number()函数
let a = '123' // 123 输出的值
a = 'abc'     // NaN
a = '3.1415926' // 3.1415926
a = '11px' // NaN
a =''      // 0
a ='    ': // 0
a = true // 1
a = false // 0
a = null // 0
a = undefined // NaN
a = Number(a)
console.log(typeof a, a)
//parseInt() 函数
let b = '123px'  //123
b = 'a123'       //123
b = '123.45'     //123
b = parseInt(b)
console. log(typeof b, b)

//不同类型转换成布尔值的方法
    //Boolean（）函数
let a = 1  // true
a = -1     // true
a = 0      // false
a = NaN    // false
a = Infinity // true

a = 'abc' // true
a ='true' // true
a ='false' // true
a = ''   // false
a= ""     // true
a = Boolean(a)
console.log(typeof a, a)

```

### 4.1.2 运算符

```
运算符(操作符)
    - 运算符可以用来对一个或多个操作数(值)进行运算
        1. 算术运算符:
            +  加法运算符
            -  减法运算符
            *  乘法运算符
            /  除法运算符
            ** 幂运算
            %  模运算（取余数）
            - 注意:
                - 算术运算时,除了字符串的加法,
                    其他运算的操作数是非数值时,都会转换为数值然后再运算
                - 可以利用这一特点来完成类型转换
                    - 可以通过为任意类型+一个空串的形式来将其转换为字符串
                    - 其原理和String()函数相同,但使用起来更加简洁
        
        2. 赋值运算符   用来将一个值赋值给一个变量
            -x = x + xx
            - 将符号右侧的值赋值给左侧的变量.
            - ??=
                - 空赋值
                - 只有当变量的值为null或undefined时才会对变量进行赋值
                - +=  a+=n 等价于 a=a+n
                - *=  a *= n 等价于 a=a*n
                - -=  a -= n 等价于a=a-n
                - /=  a/=n 等价于 a=a/n
                - %=  a %=n 等价于 a=a%n
                - **= a **= n 等价于 a=a ** n
        
        3. 一元的±
            - + 正号
                - 不会改变数值的符号
            - 负号
                - 可以对数值进行符号位取反
            当我们对非数值类型进行正负运算时,会先将其转换为数值然后再运算
        
        4. 自增自减运算符  ++  --
            - 自增运算符
                - ++ 使用后会使得原来的变量立刻增加1
                - 自增分为前自增(++a)和后自增(a++)
                - 无论是++a还是a++都会使原变量立刻增加1
                - 不同的是++a和a++所返回的值不同
                    - a++ 是自增前的值  旧值
                    - ++a 是自增后的值  新值
            - 自减运算符
                - -- 使用后会使得原来的变量立刻增加1
                - 自增分为前自增(--a)和后自增(a--)
                - 无论是--a还是a--都会使原变量立刻增加减少1
                    - a-- 是自减前的值  旧值
                    - --a 是自减后的值  新值
        
        5. 逻辑运算符
            - ! 逻辑非
                -! 可以用来对一个值进行非运算
                - 它可以对一个布尔值进行取反操作
                    true -- > false
                    false -- > true
                - 
            
            - && 逻辑与
                - 可以对两个值进行与运算
                - 当 && 左右都为true时,则返回true,否则返回false
                - 与运算是短路的与 如果第一个值是false 则不看第二个值，直接返回false
                - 对于非布尔值进行与运算,它会转换为布尔值然后运算，但是最终会返回原值
                    - 如果第一个值为false,则直接返回第一个值
                    - 如果第一个值为true,则返回第二个值
                    - 总结：与运算返回的值就是能够直接决定其是true还是false的值
            
            - || 逻辑或
                - 可以对两个值进行或运算
                - 当 || 左右有true时,则返回true,否则返回false
                - 或运算也是短路的或,如果第一个值为true,则不看第二个值
                - 或运算是找true,如果找到true则直接返回,没有true才会返回false
                - 对于非布尔值或运算,它会转换为布尔值然后运算
                    - 但是最终会返回原值
                        - 如果第一个值为true,则返回第一个
                        - 如果第一个值为false,则返回第二个
        
        6. 关系运算符
            - 关系运算符用来检查两个值之间的关系是否成立
                成立返回true,不成立返回false
                >   用来检查左值是否大于右值
                =   用来检查左值是否大于或等于右值
                <   用来检查左值是否小于右值
                <=  用来检查左值是否小于或等于右值
            - 注意:
                当对非数值进行关系运算时,它会先将前转换为数值然后再比较
                当关系运算符的两端是两个字符串,它不会将字符串转换为数值,而是(逐位)的比较字符的Unicode编码
                利用这个特点可以对字符串按照字母排序
        
        7. 相等运算符
            -  （==）相等运算符
                - 相等运算符,用来比较两个值是否相等
                - 使用相等运算符比较两个不同类型的值时,
                    它会将其转换为相同的类型(通常转换为数值)然后再比较
                    类型转换后值相同也会返回true
                - null和undefined进行相等比较时会返回true
                - NaN不和任何值相等,包括它自身
                    -   let result = 1 == 1 // true
                        result = 1 == 2 // false
                        result = 1 == '1' // true
                        result = true == "1" // true
                        result = null == undefined // true
                        result = NaN == NaN // false
            
            - （===）全等运算符
                - 全等运算符,用来比较两个值是否全等
                - 它不会进行自动的类型转换,如果两个值的类型不同直接返回false
                - null和undefined进行全等比较时会返回false
                    -   result = 1 === "1" // false
                        result = null === undefined // false
            
            - (!=) 不等运算符
                - 不等,用来检查两个值是否不相等
                - 会自动的进行类型转换
            
            - (!=) 不全等运算符
                - 不全等,比较两个值是否不全等
                - 不和自动的类型转换
        
        8. 条件运算符 
            - 条件表达式?表达式1:表达式2
            - 执行顺序:
                条件运算符在执行时,会先对条件表达式进行求值判断,
                    如果结果为true,则执行表达式1
                    如果结果为false,则执行表达式2

运算符优先级
    - 在表格中位置越靠上的优先级越高,优先级越高越先执行,优先级一样自左向右执行
        优先级我们不需要记忆,甚至表格都不需要看
        因为 () 拥有最高的优先级,使用运算符时,如果遇到拿不准的,可以直接通过 ()来改变优先级即可
```

```js
//1. 算术运算符
let a = 1 + 1
a = 10 - 5
a = 2 * 4
a = 10-'5'  //5  js是一门若类型语言，运算时会自动进行数据类型转换
console.log(a)

//当任意一个值和字符串做加法运算时,它会先将其他值转换为字符串,然后再做拼串的操作
a = 'hello' + 'world'    //helloworld
a = '1' + 2 // "1" + "2" //12

//2. 赋值运算符
let a = 10
a=5     //将右边的值 赋值 给左边的变量
let b=a //一个变量只有在=左边时才是变量,在=右边时它是值

a = 66
a=a+11//大部分的运算符都不会改变变量的值,赋值运算符除外

a = 5
a = a+5 // 10
a += 5 //  等于a = a+5

console. log(a)

//3. 一元的 ±
let a = -10
a = -a// a=10

let b = '123'

b =+b// b = Number(b)

console.log(typeof b, b)

//4. 自增自减运算符  ++
<script> 
let n = 5
//            5  + 7   + 7
let result = n++ + ++n + n
console.log(result)
</script>

//5. 逻辑运算符
    // ！ 逻辑非
    let a = false
    a = !a  // 打印结果  true
    console.log(a)
    //&& 逻辑与
    let result = true 88 true // true
    result = true 88 false   // false
    result = false 88 true   // false
    
    //true && true -> true
    result = 1 && 2 // 2
    //true && false -> false
    result = 1 && 0 // 0
    //false && false -> false
    result = 0 && NaN // 0

//关系运算符
let result = 10 > 5 // true
result = 5 > 5   // false
result = 5 >= 5  // true
result = 5 < "10" // true
result = "1" > false // true
result = "a" < "b" // true
result = "z" < "f" // false
result = "abc" < "b" // true
result = "12" < "2" // true

//相等运算符
let result = 1 == 1 // true
result = 1 == 2 // false
result = 1 == '1' // true
result = true == "1" // true

result = null == undefined // true
result = NaN == NaN // false

//全等运算符
result = 1 === "1" // false
result = null === undefined // false

//条件运算符
false ? alert(1) : alert(2)

let a = 100
let b = 200
a >b?alert('a大!'):alert("b大!”)

let a = 100
let b = 200
let max = a > b ? a : b
alert(max)
```

### 4.1.3 代码块

```
使用{}来创建代码块,代码块可以用来对代码进行分组,
    - 同一个代码中的代码,就是同一组代码,一个代码块中的代码要么都执行要么都不执行

let 和 var  （局部变量和全局变量）
    - 在JS中,使用let声明的变量具有块作用域
        在代码块中声明的变量无法在代码块的外部访问
    - 使用var声明的变量,不具有块作用域
        - 在代码块中声明的变量可以在代码块的外部访问

```

## 4.2 对象

```
数据类型:
    原始值
        1.数值 Number
        2.大整数 BigInt
        3.字符串 String
        4.布尔值 Boolean
        5.空值 Null
        6.未定义 Undefined
        7.符号 Symbol

    对象
        - 对象是JS中的一种复合数据类型,
            它相当于一个容器,在对象中可以存储各种不同类型数据

    原始值只能用来表示一些简单的数据,不能表示复杂数据

```

```
# 对象

    对象中可以存储多个各种类型的数据
        对象中存储的数据,我们称为属性
    
    向对象中添加属性:
        对象.属性名=属性值

    读取对象中的属性
        对象.属性名

    如果读取的是一个对象中没有的属性
        不会报错而是undefined

    使用typeof检查一个对象时,会返回object
    
    in 运算符
        使用 in 运算符 检查对象中是否含有一个属性值
            如果有返回true
            没有返回false

## 属性名
    通常属性名就是一个字符串,所以属性名可以是任何值,没有什么特殊要求
        但是如果你的属性名太特殊了,不能直接使用,需要使用[]来设置
        虽然如此,但是我们还是强烈建议属性名也按照标识符的规范命名

    也可以使用符号(symbol)作为属性名,来添加属性
        获取这种属性时,也必须使用symbol
        使用symbol添加的属性,通常是那些不希望被外界访问的属性

    使用[]去操作属性时,可以使用变量

## 属性值
    - 对象的属性值可以是任意的数据类型,
    - 也可以是一个对象

## 对象的字面量
    - 可以直接使用{}来创建对象
    - 使用{}所创建的对象,可以直接向对象中添加属性
    - 语法:
        {
        属性名:属性值,
        [属性名]:属性值,
        }

## 枚举属性   指将对象中的所有的属性全部获取

    - for-in语句
        - 语法:
            for(let propName in 对象){
            语句 ...
        }

    - for-in的循环体会执行多次,有几个属性就会执行几次,
        每次执行时,都会将一个属性名赋值给我们所定义的变量

    -注意:并不是所有的属性都可以枚举,比如 使用符号添加的属性

## 可变类型
    - 对象属于可变类型
    - 对象创建完成后,可以任意的添加删除修改对象中的属性
    - 注意:
        - 当对两个对象进行相等或全等比较时,比较的是对象的内存地址
            如果有两个变量同时指向一个对象,
                通过一个变量修改对象时,对另外一个变量也会产生影响

原始值都属于不可变类型,一旦创建就无法修改
在内存中不会创建重复的原始值

## 变量和对象
    修改对象
        - 修改对象时,如果有其他变量指向该对象则所有指向该对象的变量都会收到影响
    
    修改变量
        - 修改变量时,只会影响当前的变量
        
        - 在使用变量存储对象时,很容易因为改变变量指向的对象,提高代码的复杂度
            所以通常情况下,声明存储对象的变量时会使用const

## 方法(method)
    - 当一个对象的属性指向一个函数,
        那么我们就称这个函数是该对象的方法
        调用函数就称为调用对象的方法

```

#各种对象创建方法
```js
//创建对象
let obj = Object()
let obj1 = {}

//函数定义的方式
    //1. 函数声明
    function fn(形式参数){
        console.log("函数声明定义的函数")
    }
    //2. 函数表达式  匿名函数需要赋值给变量
    function(形式参数){
        console.log("函数表达式定义的函数")
    }
    const fn = function(形式参数){
        console.log("函数表达式定义的函数")
    }
    //3. 箭头函数 匿名函数需要赋值给变量
    (形式参数) => {
        console.log("箭头函数定义的函数")
    }
    (形式参数) => console.log("箭头函数定义的函数")
    const fn //需要赋值给fn变量

//## 创建数组
const array = new Array()  //调用Array构造函数创建数组
const arr2 = []  //通过数组字面量创建数组

//# 语法:
class 类名 {}  //类名要使用大驼峰命名
const 类名= class {}

```

```js
//创建对象
let obj = Object()
let obj1 = {}
//添加属性
let obj = Object()
    obj.name = "孙悟空"
    obj.age = "10"   
//读取对象
console.log（obj.name）
//修改属性
let obj = Object()
    obj.name = "孙悟空"
    obj.age = "10" 
    obj.name = "Tom sun"
//删除属性
delete obj.name
//继续读取没有属性
console.log（obj.name）//返回undefined

//属性名字
    //属性名就是一个字符串,所以属性名可以是任何值
    obj.if = "哈哈哈"
    obj.let = "hhh"
    //但是如果你的属性名太特殊了,不能直接使用,需要使用[]来设置
    obj["12345678##@@"] = "HHH"//不建议
    //可以使用符号(symbol)作为属性名
    obj[mySymbol] = "通过symbol添加属性"
    //使用[]去操作属性时,可以使用变量
    let str = "address"
    obj[str] = "花果山"//等价于obj["address"] = "花果山"

//属性值
    //对象的属性值可以是任意的数据类型
    obj.a = "字符串"//字符串
    obj.b = 1      //数值
    obj.c = 123n   //大整数
    obj.d = true   //布尔值
    //对象的属性值也可以是一个对象
    obj.aa = object（）
    obj.aa.name= 孙悟空

//使用typeof检查一个对象时,会返回object
console.log（typeof obj）//object

//使用 in 运算符 检查对象中是否含有一个属性值
console.log（"name" in obj）

//对象的字面量
    //使用{}所创建的对象,可以直接向对象中添加属性
    let obj = {
        name:"孙悟空"，
        age:"18",
        ["gender"]:"男"，
        [mySymbol]:"特殊属性"
        obj2：{
            name："猪八戒"
            age:"28"
        }
    }

//枚举属性
    let obj ={
        name："孙悟空",
        age:"18",
        gender:"男",
        [Symbol()]:"测试"
    }
    for(let propName in obj){
        console.log(propName, obj[propName])//name 孙悟空 //age 10 //gender 男
    }

//方法(method)
let obj ={
        name："孙悟空",
        age:"18",
        gender:"男",
        [Symbol()]:"测试"
        obj.sayHello:function(){
        alert("hello")//那么我们就称这个函数是该对象的方法
        }
    }
obj.sayHello()//调用函数就称为调用对象的方法

```

当对两个对象进行相等或全等比较时,比较的是对象的内存地址
            如果有两个变量同时指向一个对象,
                通过一个变量修改对象时,对另外一个变量也会产生影响

![[Pasted image 20240520071840.png]]

## 4.3 函数（Function）

```
# 函数(Function)
    - 函数也是一个对象
    - 它具有其他对象所有的功能
    - 函数中可以存储代码,且可以在需要时调用这些代码

    语法:
        function 函数名(){
        语句...
        }
    
    调用函数:
        - 调用函数就是执行函数中存储的代码
        - 语法:
            函数对象()

使用typeof 检查函数时会返回 function

## 函数定义的方式
    1. 函数声明
        function 函数名(){
        语句...
        }
    
    2. 函数表达式
        const 变量 =function(){
            语句...
        }
    
    3. 箭头函数
        ()=>{
            语句...
        }

# 参数
    形式参数
        - 在定义函数时,可以在函数中指定数量不等的形式参数(形参)
        - 在函数中定义形参,就相当于在函数内部声明了对应的变量但是没有赋值
        - 形式参数可以设置默认值
            默认值在没有对应实际参数是使用
    
    实际参数
        - 在调用函数时,可以在函数的()传递数量不等的实参
        - 实参会赋值给其对应的形参
        - 参数:
            1.如果实参和形参数量相同,则对应的实参赋值给对应的形参
            2.如果实参多余形参,则多余的实参不会使用
            3.如果形参多余实参,则多余的形参为undefined
        - 参数的类型
            JS中不会检查参数的类型,可以传递任何类型的值作为参数
    
# 对象可以作为参数传递
# 函数每次调用都会重新创建默认值

# 函数的返回值
    1.在函数中,可以通过return关键字来指定函数的返回值
        返回值就是函数的执行结果,函数调用完毕返回值便会作为结果返回

    2.任何值都可以作为返回值使用(包括对象和函数之类)
        如果return后不跟任何值,则相当于返回undefined
        如果不写return,那么函数的返回值依然是undefined

    3.return-执行函数立即结束

```

```js
//创建一个函数对象
function fn(){
    console.log("函数声明定义的函数")
}

//调用函数
fn(实际参数)

//函数定义的方式
    //1. 函数声明
    function fn(形式参数){
        console.log("函数声明定义的函数")
    }
    //2. 函数表达式  匿名函数需要赋值给变量
    function(形式参数){
        console.log("函数表达式定义的函数")
    }
    const fn = function(形式参数){
        console.log("函数表达式定义的函数")
    }
    //3. 箭头函数 匿名函数需要赋值给变量
    (形式参数) => {
        console.log("箭头函数定义的函数")
    }
    (形式参数) => console.log("箭头函数定义的函数")
    const fn //需要赋值给fn变量

//对象可以作为参数传递,传递的不是变量本身而是变量中储存的值
    function fn(a){
        console.log(a)//name:"孙悟空"
        console.log(a.name)//孙悟空
    }
    let obj = {name:"孙悟空"}
    fn(obj)

//函数每次调用都会重新创建默认值
    //情况一
function fn(a = {name:"沙和尚"}){
    comsole.log(a)//沙和尚
    a.name = "唐僧"
    comsole.log(a)//唐僧
}
fn() //沙和尚  唐僧
fn() //沙和尚  唐僧    主要体现在第二次调用函数 对象的变化
    
    //情况二
let obj = {name:"沙和尚"}

function fn(a = obj){
    comsole.log(a)//沙和尚
    a.name = "唐僧"
    comsole.log(a)//唐僧
}
fn() //沙和尚  唐僧
fn() //唐僧  唐僧    主要体现在第二次调用函数 对象的变化

//# 函数的返回值
    //1.在函数中,可以通过return关键字来指定函数的返回值
function sum(a,b){
    return a+b
}
sum(10,20)

    //2.任何值都可以作为返回值使用(包括对象和函数之类)
function fn(){
    return {name:"tom sun"}//可以返回对象
    return ()=>alert(111) //可以返回函数
    return 111            //可以返回数值
    return "tom sun"      //可以返回字符串
    return 111n           //可以返回大整数
    return true           //可以返回布尔值
    return NaN            //可以返回NaN
    return undefined      //可以返回undefined
}
let result = fn()
console.log(fn());

        //如果return后不跟任何值,则相当于返回undefined
function fn(){
    return 
}
        //如果不写return,那么函数的返回值依然是undefined
function fn(){
}

    //3.return-执行函数立即结束
function fn(){
    alert (111)
    return
    alert (222)//当执行完第一个返回值，函数立即结束，不会执行下面的返回值
}

```

### 4.3.1 windows 对象

```
Window对象
    - 在浏览器中,浏览器为我们提供了一个window对象,可以直接访问
    - window对象代表的是浏览器窗口,通过该对象可以对浏览器窗口进行各种操作
        除此之外window对象还负责存储JS中的内置对象和浏览器的宿主对象
    - window对象的属性可以通过window对象访问,也可以直接访问
    - 函数就可以认为是window对象的方法

var 用来声明变量,作用和let相同,但是var不具有块作用域
    - 在全局中使用var声明的变量,都会作为window对象的属性保存
    - 使用function声明的函数,都会作为window的方法保存
    - 使用Let声明的变量不会存储在window对象中,而存在一个秘密的小地方(无法访问)
    -var虽然没有块作用域,但有函数作用域

var 变量的提升
    - 使用var声明的变量,它会在所有代码执行前被声明
        所以我们可以在变量声明前就访问变量

let 变量的提升
    let声明的变量实际也会提升,但是在赋值之前解释器

函数的提升
    - 使用函数声明创建的函数,会在其他代码执行前被创建
        所以我们可以在函数声明前调用函数
```

```js
//var 变量的提升
    //使用var声明的变量,它会在所有代码执行前被声明
        //所以我们可以在变量声明前就访问变量

console.log(a)  //提前打印a，只会打印出undefined
var a = 10      

//let 变量的提升
    //let声明的变量实际也会提升,但是在赋值之前解释器
console.log(a) //Cannot access 'a' before
let a = 10

//函数的提升
    //使用函数声明创建的函数,会在其他代码执行前被创建
        //所以我们可以在函数声明前调用函数
fn()
function fn(){
    alert("我是一个函数")
}
```

### 4.3.2 作用域（scope）

```
# 作用域(scope)
    - 作用域指的是一个变量的可见区域
    - 作用域有两种:
    
    1.全局作用域
        - 全局作用域在网页运行时创建,在网页关闭时销毁
        - 所有直接编写到script标签中的代码都位于全局作用域中
        - 全局作用域中的变量是全局变量,可以在任意位置访问

    2.局部作用域
        1.块作用域
            - 块作用域是一种局部作用域
            - 块作用域在代码块执行时创建,代码块执行完毕它就销毁
            - 在块作用域中声明的变量是局部变量,只能在块内部访问,外部无法访问
        2.函数作用域
            - 函数作用域也是一种局部作用域
            - 函数作用域在函数调用时产生,调用结束后销毁
            - 函数每次调用都会产生一个全新的函数作用域
            - 在函数中定义的变量是局部变量,只能在函数内部访问,外部无法访问

# 作用域链  就近原则
    - 当我们使用一个变量时,
        - JS解释器会优先在当前作用域中寻找变量,
            1.如果找到了则直接使用
            2.如果没找到,则去上一层作用域中寻找,找到了则使用
            3.如果没找到,则继续去上一层寻找,以此类推
            4.如果一直到全局作用域都没找到,则报错 xxx is not defined

# 立即执行函数(IIFE)
    - 立即是一个匿名的函数,并它只会调用一次
    - 可以利用IIFE来创建一个一次性的函数作用域,避免变量冲突的问题

```

```js
let a = 11  //全局变量a
function fn(){
    let a = 22  //局部的代码块中的变量a
    function fn2(){
    let a = 33  //局部的代码块中嵌套的代码块中的变量a
    console.log(a)  //根据就近原则 会打印fn2函数的a 33
    }  
}

//立即执行函数(IIFE)
(function(){
let a = 10
console.log(111)
}())；  //使用；隔开 防止游览器解析成一个函数（）
(function(){
# let a = 100
console.log(222)
}())；
```

### 4.3.3 this 隐含参数
```
# this
    - 函数在执行时,JS解析器每次都会传递进一个隐含的参数
    - 这个参数就叫做 this
    - this会指向一个对象
        this所指向的对象会根据函数调用方式的不同而不同
            1.以函数形式调用时,this指向的是window
            2.以方法的形式调用时,this指向的是调用方法的对劇

# 箭头函数:
    ([参数])=>返回值
    
    无参箭头函数:()=>返回值
例子:
    一个参数的: a=>返回值
    多个参数的: (a,b)=>返回值
    
    只有一个语句的函数:  ()=>返回值
    只返回一个对象的函数: ()=>({...})
    有多行语句的函数:  ()=>{
        ....
        return 返回值
    }

# 箭头函数
    - 箭头函数没有自己的this,它的this有外层作用域决定
        箭头函数的this和它的调用方式无关

```

```js
//this 隐含参数
const obj1 = {
    name : "孙悟空",
    sayHello : function(){
        console.log(this.name)
    },
}
const obj2 = {
    name : "猪八戒",
    sayHello : function(){
        console.log(this.name)
    },
}

obj1.sayHello()  //孙悟空
obj2.sayHello()  //猪八戒

//箭头函数

function fn() {
    console.log("fn -- >", this) // window
}
fn() //this  window
const fn2 = () => {
console.log("fn2 -- >", this) // 总是window
}
fn2()  //this  总是window

const obj = {
    name : "sun",
    fn : fan,
    fn2 : fan2,
    sayHello : function(){
        console.log(this)
        function t(){
            console.log("t-->",this)  //总是window
        }
        t()
        const t2 =() =>{
            console.log("t2-->",this)//obj
        }
        t2()
    },
}
obj.fn()  //obj
obj.fn2() //总是 window  fn2在外部创建 其this总是window
```

### 4.3.4 严格模式

```
JS运行代码的模式有两种：
    1.正常模式
        - 默认情况下代码都运行在正常模式中,
            在正常模式,语法检查并不严格
            它的原则是:能不报错的地方尽量不报错
        - 这种处理方式导致代码的运行性能较差
    
    2.严格模式
        - 在严格模式下,语法检查变得严格
            1.禁止一些语法
            2.更容易报错
            3.提升了性能
    
    - 在开发中,应该尽量使用严格模式,
        这样可以将一些隐藏的问题消灭在萌芽阶段,
        同时也能提升代码的运行性能
```

```js
"use strict" //全局严格模式

functionfn(){
    "use strict"// 函数严格模式
}
```

## 4.4 面相对象编程（OOP）

```
# 面向对象编程(00P)
    1. 程序是干嘛的?
        -程序就是对现实世界的抽象(照片就是对人的抽象)
    1. 对象是干嘛的?
        - 一个事物抽象到程序中后就变成了对象
        - 在程序的世界中,一切皆对象
    1. 面向对象的编程
        - 面向对象的编程指,程序中的所有操作都是通过对象来完成
        - 做任何事情之前都需要先找到它的对象,然后通过对象来完成各种操作

# 心仪的女人:王老五
    - 一个事物通常由两部分组成:数据和功能
    - 一个对象由两部分组成:属性和方法
    - 事物的数据到了对象中,体现为属性
    - 事物的功能到了对象中,体现为方法
```

### 4.4.1 类（class）


```
# 使用Object创建对象的问题:
    1. 无法区分出不同类型的对象
    2. 不方便批量创建对象

# 在JS中可以通过类(class)来解决这个问题:
    1. 类是对象模板,可以将对象中的属性和方法直接定义在类中
        定义后,就可以直接通过类来创建对象
    2. 通过同一个类创建的对象,我们称为同类对象
        可以使用 instanceof 来检查一个对象是否是由某个类创建
        如果某个对象是由某个类所创建,则我们称该对象是这个类的实例

# 语法:
    class 类名 {}  //类名要使用大驼峰命名
    const 类名= class {}

# 通过类创建对象
    new 类()

```

#### 4.4.1.1 类属性
```
# 类的属性
    - 类的代码块,默认就是严格模式,
        类的代码块是用来设置对象的属性的,不是什么代码都能写
    - 实例属性
        只能通过实例访问
    - 静态属性
        只能通过类去访问
```

```js
class Person{
    name = "孙悟空"  //实例属性
    age ="18"       //实例属性
    static test = "text静态属性" //静态属性，只能通过类去访问  Person.text
}
p1 = new Person()
console.log(p1.name) //实例属性,只能通过实例访问

```

#### 4.4.1.2 类方法

```
# 类的方法
    - 实例方法
    - 
    - 静态方法
```

```js
class Person{
    sayHello(){
        console.log("hhh")
    }//实例方法
    static test(){
        console.log("OOO")
    }//静态方法

const p1 = new Person()
p1.sayHello()  //调用实例方法
console.log(p1.sayHello) //实例属性,只能通过实例访问

Person.test()  //调用静态方法  通过类调用

```

#### 4.4.1.3 类中的 构造函数（constructor）

```
# 构造函数（constructor）
    在类中可以添加一个特殊的方法constructor
    该方法我们称为构造函数(构造方法)
    构造函数会在我们调用类创建对象时执行
```

```js
class Person{
    constructor(name,age,gender){
        this.name = name
        this.age = age
        this.gender = gender
    }
}
const p1 = new Person("孙悟空",180,"男")
const p2 = new Person("猪八戒",280,"男")
const p3 = new Person("沙和尚",380,"男")
console.log(p1)
console.log(p2)
console.log(p3)
```

### 4.4.2 封装、继承和多态
#### 4.4.2.1 封装

```
面向对象的特点:
    封装、继承和多态

    1.封装
        - 对象就是一个用来存储不同属性的容器
        - 对象不仅存储属性,还要负责数据的安全
        - 直接添加到对象中的属性,并不安全,因为它们可以被任意的修改
        - 如何确保数据的安全:
            1.私有化数据
                - 将需要保护的数据设置为私有,只能在类内部使用
            2.提供setter和getter方法来开放对数据的操作
                - 属性设置私有,通过getter setter方法操作属性带来的好处
                    1. 可以控制属性的读写权限
                    2. 可以在方法中对属性的值进行验证
    
        - 封装主要用来保证数据的安全
        - 实现封装的方式:
            1.属性私有化 加#
            2.通过getter和setter方法来操作属性
                get 属性名(){
                return this.#属性
                }
                set 属性名(参数){
                return this.#属性 = 参数
                }

```

```js
class Person{
    #address = "花果山" //实例使用#开头就变成了私有属性,私有属性只能在类内部访问
    #name 
    #age 
    #gender 
    constructor(name,age,gender){
        this.name = name
        this.age = age
        this.gender = gender
    }
    
    getAge(){
        return this.#age
    }//get 方法可以提供访问
    
    setAge(age){
        this.#age = age
    }//setter方法 用来设置加密属性
    
    setAge(age){
        if(age >= 0){
            this.#age = age
        }//可以用来判断数据合法性
    }
    //js标准getter和 setter 方法
    get gender(){
        return this.#gender
    }
    
    set gender(gender){
         this.#gender = gender
    }
}

```

#### 4.4.2.2 多态

```
多态
    - 在JS中不会检查参数的类型,所以这就意味着任何数据都可以作为参数传递
    - 要调用某个函数,无需指定的类型,只要对象满足某些条件即可
```

```js
//定义一个函数,这个函数将接收一个对象作为参数,他可以输出hello并打印对象的name属性

class Person{
    constructor(name){
        this.name = name
    }
}

class Dog{
    constructor(name){
        this.name = name
    }
}

const p1 = new Person("孙悟空")
const p2 = new Dog("旺财")

function sayHello(a){
    console.log("hello" + a)
}

sayHello(p1)
```

#### 4.4.2.3 继承

```
继承
    - 可以通过 extends 关键来完成继承
    - 当一个类继承另一个类时,就相当于将另一个类中的代码复制到了当前类中(简单理解)
    - 继承发生时,被维承的类称为 父类(超类),继承的类称为 子类
    - 通过继承可以减少重复的代码,并且可以在不修改一个类的前提对其进行扩展
    - OCP 开闭原则
        程序应该对修改关闭,对扩展开放

面相对象的特点
    - 封装 –安全性
    - 继承 -扩展性
    - 多态–灵活性

```

```js
class Animal{
            constructor(name){
                this.name = name
            }
            sayHello(){
                console.log("动物叫声")
            }
} 

class Dog extends Animal{ 
    //在子类中，可以通过创建同名方法来覆写父类的方法
    sayHello(){
        console.log("汪汪汪")
            }
}  //extends  继承

class Cat extends Animal{
    //重写构造函数
    constructor(name){
        //重写构造函数时，构造函数懂得第一行代码必须是super（）
        super()  //调用父类的构造函数
        this.age = age
    }
    
} //extends  继承

const dog = new Dog("旺财")
const cat = new Cat("Tom")
dog.sayHello() //动物叫声
console.log(dog) //Dog {name: '旺财'}
cat.sayHello() //动物叫声
console.log(cat) //Cat {name: 'Tom'}

```

### 4.4.3 对象的结构

```
对象中存储属性的区域实际有两个:
    1. 对象自身
        - 直接通过对象所添加的属性,位于对象自身中
        - 在类中通过 x=y 的形式添加的属性,位于对象自身中
    
    2. 原型对象(prototype)
        - 对象中还有一些内容,会存储到其他的对象里(原型对象)
        - 在对象中会有一个属性用来存储原型对象,这个属性叫做 __ proto
        - 原型对象也负责为对象存储属性,
            当我们访问对象中的属性时,会优先访问对象自身的属性,
            对象自身不包含该属性时,才会去原型对象中寻找
        - 会添加到原型对象中的情况:
            1. 在类中通过xxx(){}方式添加的方法,位于原型中
            2. 主动向原型中添加的属性或方法

```

```js

class Animal{
            constructor(name){
                this.name = name
            }
            sayHello(){
                console.log("动物叫声")
            } //存在于原型对象中
} 

const a = new Animal()
a.sayHello = "hello" //存在于对象本身中

```
![[Pasted image 20240523065125.png]]

#### 4.4.3.1 原型对象

```
# 访问一个对象的原型对象
    对象.__proto__
    Object.getPrototypeOf( 对象 )

# 原型对象中的数据:
    1. 对象中的数据(属性、方法等)
    2. constructor(对象的构造函数)

# 注意:
    原型对象也有原型,这样就构成了一条原型链,根据对象的复杂程度不同,原型链的长度也不同
    p对象的原型链:p对象 -- >原型 -- >原型 -- >null
    obj对象的原型链:obj对象 -- >原型 -- >null

# 原型链:
    - 读取对象属性时,会优先对象自身属性,
        - 如果对象中有,则使用,没有则去对象的原型中寻找
        - 如果原型中有,则使用,没有则去原型的原型中寻找
        - 直到找到Object对象的原型(Object的原型没有原型(为null))
            如果依然没有找到,则返回undefined

# 作用域链,是找变量的链,找不到会报错
# 原型链,是找属性的链,找不到会返回undefined

```

#### 4.4.3.2 原型的作用

```
# 所有的同类型对象它们的原型对象都是同一个,
    也就意味着,同类型对象的原型链是一样的

# 原型的作用:
    - 原型就相当于是一个公共的区域,可以被所有该类实例访问,
    - 可以将一个该类实例中,所有的公共属性(方法)统一存储到原型中
    - 这样我们只需要创建一个属性,即可被所有实例访问

# 在对象中有些值是对象独有的,像属性(name,age,gender)每个对象都应该有自己值,
    但是有些值对于每个对象来说都是一样的,像各种方法,对于一样的值没必要重复的创建

# JS中的继承就是通过原型实现的
```

#### 4.4.3.3 原型的修改

```
# 大部分情况下,我们是不需要修改原型对象
    注意:
        千万不要通过类的实例去修改原型
            1. 通过一个对象影响所有同类对象,这么做不合适
            2. 修改原型先得创建实例,麻烦

# 处理通过 __ proto __ 能访问对象的原型外,
    还可以通过类的prototype属性,来访问实例的原型
    修改原型时,最好通过通过类去修改
    好处:
        1. 一修改就是修改所有实例的原型
        2. 无需创建实例即可完成对类的修改

# 原则:
    1. 原型尽量不要手动改
    2. 要改也不要通过实例对象去改
    3. 通过 类.prototype 属性去修改
    4. 最好不要直接给prototype去赋值
```

```js
class Person{
    name ="孙悟空"
    age = 18
    sayHello(){
        console.log("hello，我是"，this.name)
    }
}

const p1 = new Person()
const p2 = new Person()

p.__proto__.run = () => {
    console.log("我在跑")
}//直接通过实例去修改了原型，只影响p 实例

Person.__proto__.fly = (){
    console.log("我在飞~")
}//通过类去修改，直接修改了父元素 类 同时影响通过类创建的所有实例

```

#### 4.4.3.4 instance 和 hasOwn

```
# instanceof 用来检查一个对象是否是一个类的实例
    - instanceof检查的是对象的原型链上是否有该类实例
        只要原型链上有该类实例,就会返回true

# in 运算符 (属性名 in 对象)
    - 使用in运算符检查属性时,无论属性在对象自身还是在原型中,都会返回true

# Object.hasOwn（Object.hasOwn(对象,属性名)）
    - 用来检查一个对象的自身是否含有某个属性

```

```js
class Animal{}
class Dog extends Animal{}
const dog = new Dog()
console.log(dog instanceof Dog)    //true  只要原型链上有该类实例,就会返回true
console.log(dog instanceof Animal) //true  只要原型链上有该类实例,就会返回true
//dog --> Animal实例 -->  Object实例 -->  Object原型

console.log("sayHello" in p) //true  只要原型链上有该类实例,就会返回true

console.log(Object.hasOwn(p,"sayHello")) 

```

#### 4.4.3.5 new 运算符
```
# new运算符是创建对象时要使用的运算符
    - 使用new时,到底发生了哪些事情:
    - 当使用new去调用一个函数时,这个函数将会作为构造函数调用,
        使用new调用函数时,将会发生这些事:
            1. 创建一个普通的JS对象(Object对象 {}),为了方便,称其为新对象
            2. 将构造函数的prototype属性设置为新对象的原型
            3. 使用实参来执行构造函数,并且将新对象设置为函数中的this
            4. 如果构造函数返回的是一个非原始值,则该值会作为new运算的返回值返回(千万不要这么做)
                如果构造函数的返回值是一个原始值或者没有指定返回值,则新的对象将会作为返回值返回
                    通常不会为构造函数指定返回值
```

### 4.4.4 旧类

```js
function Person(){
    this.name = name
    this.age = age
    this.sayHello(){
        console.log()
    } //直接添加到对象中
}
//向原型中添加属性(方法)
Person.prototype.sayHello = (){
    console.log(this.name)
}
// 静态属性
Person.staticProperty = "xxx"
// 静态方法
Person.staticMethod = function(){}

```

### 4.4.5 面向对象编程的总结

```
# 面向对象本质就是,编写代码时所有的操作都是通过对象来进行的。
    面向对象的编程的步骤:
        1. 找对象
        2. 搞对象

# 学习对象:
    1. 明确这个对象代表什么,有什么用
    2. 如何获取到这个对象
    3. 如何使用这个对象(对象中的属性和方法)

# 对象的分类:
    内建对象
        - 由ES标准所定义的对象
            - 比如 Object Function String Number
    宿主对象
        - 由浏览器提供的对象
        - BOM. DOM
    自定义对象
        - 由开发人员自己创建的对象
```

## 4.5 数组（Array）

### 4.5.1 数组（Array）
```
# 数组(Array)
    - 数组也是一种复合数据类型,在数组可以存储多个不同类型的数据
    - 数组中存储的是有序的数据,数组中的每个数据都有一个唯一的索引
        可以通过索引来操作获取数据
    - 数组中存储的数据叫做元素（element）
    - 索引(index)是一组大于 0 的整数
    ## 创建数组
        通过 Array() 来创建数组
        也可以通过[]来创建数组
    ## 向数组中添加元素
        语法:
            数组[索引]=元素

    ## 读取数组中的元素
        语法:
            数组[索引]
            - 如果读取了一个不存在的元素,不好报错而是返回undefined
    
    ## length
        - 获取数组的长度
        - 获取的实际值就是数组的最大索引 +1
        - 向数组最后添加元素:
            数组[数组.length]=元素
        - length是可以修改的
```

```js
//## 创建数组
const array = new Array()  //调用Array构造函数创建数组
const arr2 = []  //通过数组字面量创建数组

//## 向数组中添加元素
const array = new Array() 
array[0] = 10
array[1] = 20
array[2] = 30  //Array构造函数 添加元素
    //array[100] = 100  非连续性数组  不建议使用 性能不好

const arr2 = [1, 2, 3, 4, 5]  //数组字面量数组 添加元素

//# 读取数组中的元素  语法：数组[索引]
console.log(array[0])  

## length
console.log(array.length)  //获取数组的长度

array[array.length] = 55  //向数组最后添加元素  语法:数组[数组.length]=元素
array.length =2  //修改数组的元素
```

### 4.5.2 遍历数组

```js
//任何类型的值都可以成为数组中的元素
let arr = [1, "hello",true, null, {name:"孙悟空"},()=>{}]
//创建数组时尽量要确保数组中存储的数据的类型是相同
arr = [“孙悟空”,“猪八戒”,“沙和尚”]

//遍历数组
    //- 遍历数组简单理解,就是获取到数组中的每一个元素

arr =[“孙悟空",“猪八戒”,“沙和尚”,“唐僧”,“白骨精”]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2]) //一行行打印太麻烦

for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}//正向循环

for(let i=arr.length-1; i>=0; i --){
    console.log(arr[i])
}//反向循环

//打印出小于18岁的元素
class Person {
    constructor(name, age) {
    this.name = name
    this.age = age
    }
}

const personArr = [
    new Person("孙悟空",18),
    new Person("沙和尚",38),
    new Person("红孩儿",8),
]
    //console.log(personArr.length);
for(let i=0; i<personArr.length; i++){
    if(personArr[i].age < 18){
        console.log(personArr[i])
    }
}  

    //for of 语句
for(let value of personArr){
    if(value.age < 18){
        console.log(value)
    }
}  
```

#### 4.5.2.1 for of  语句

```
# for-of语句可以用来遍历可迭代对象

# 语法:
    for(变量 of 可迭代的对象){
    语句...
    }

# 执行流程:
    for-of的循环体会执行多次,数组中有几个元素就会执行几次,
    每次执行时都会将一个元素赋值给变量

```

```js
const arr = ["孙悟空",“猪八戒",“沙和尚",“唐僧"]

for(let value of arr){
    console.log(value)
}
```

### 4.5.3 数组的方法（非破坏性）

```
# Array.isArray()
    - 用来检查一个对象是否是数组

# Array.at()
    - 可以根据索引获取数组中的指定元素
    - at可以接收负索引作为参数
# Array.concat()
    - 用来连接两个或多个数组
    - 非破坏性方法,不会影响原数组,而是返回一个新的数组
# Array.indexOf()
    - 获取元素在数组中第一次出现的索引
    - 参数:
        1. 要查询的元素
        2. 查询的其实位置
# Array.lastIndexOf()
    - 获取元素在数组中最后一次出现的位置
    - 返回值:
        找到了则返回元素的索引,
        没有找到返回-1

# Array.join()
    - 将一个数组中的元素连接为一个字符串
    - [“孙悟空”,“猪八戒”,“沙和尚”,“唐僧”,“沙和尚”] ->“孙悟空,猪八戒,沙和尚,唐僧,沙和尚”
    - 参数:
        指定一个字符串作为连接符

# Array.slice()
    - 用来截取数组(非破坏性方法)
    - 参数:
        1. 截取的起始位置(包括该位置)
        2. 截取的结束位置(不包括该位置)
            1. 第二个参数可以不写，如果省略直接截取到结尾
            2. 索引可以为负数
        3. 如果不传参数可以对数组进行浅复制

```

```js
//# Array.isArray()
console.log(Array.isArray({ name: "" })) // false
console.log(Array.isArray([1, 2, 3]))    // true

//# at()
const arr = ["孙悟空","猪八戒","沙和尚","唐僧"]
console.log(arr.at(-2))  // 沙和尚
console. log(arr[arr. length - 1])  //唐僧

//# concat()  用来连接两个或多个数组
const arr = ["孙悟空","猪八戒","沙和尚","唐僧"]
const arr2=["白骨精","蜘蛛精","玉兔精"]

arr.concat(arr2)  //非破坏性方法,不会影响原数组,而是返回一个新的数组

//# indexOf(要查询的元素，查询的起始位置)
const arr = ["孙悟空","猪八戒","沙和尚","唐僧","沙和尚"]

let result =arr.indexOf(“沙和尚”,3)  //4
result =arr.lastIndexOf(“沙和尚”,3)  //2
result= arr.indexOf("白骨精")   //如果不存在则返回 -1

console.log(result)

//# join()将一个数组中的元素连接为一个字符串
const arr = ["孙悟空","猪八戒","沙和尚","唐僧","沙和尚"]
result = arr.join()  //孙悟空,猪八戒,沙和尚,唐僧,沙和尚
result = arr. join("a-a")//孙悟空a-a猪八戒a-a沙和尚a-a唐僧a-a沙和尚
result = arr.join("")//孙悟空猪八戒沙和尚唐僧沙和尚
console.log(result)

//# slice()
const arr = ["孙悟空","猪八戒","沙和尚","唐僧","沙和尚"]
result = arr.slice(0, 2) // ['孙悟空', '猪八戒']
result = arr.slice(1, -1)//['猪八戒', '沙和尚', '唐僧']
result = arr.slice()//['孙悟空', '猪八戒', '沙和尚', '唐僧', '沙和尚']
console.log(result)
```

#### 4.5.3.1 对象的复制

```
# 如何去复制一个对象 复制必须要产生新的对象
# 当调用slice时,会产生一个新的数组对象,从而完成对数组的复制

# 浅拷贝(shallow copy)
    - 通常对对象的拷贝都是浅拷贝
    - 浅拷贝顾名思义,只对对象的浅层进行复制(只复制一层)
    - 如果对象中存储的数据是原始值,那么拷贝的深浅是不重要
    - 浅拷贝只会对对象本身进行复制,不会复制对象中的属性(或元素)

# 深拷贝(deep copy)
    - 深拷贝指不仅复制对象本身,还复制对象中的属性和元素
    - 因为性能问题,通常情况不太使用深拷贝

# ...展开运算符
    - 可以将一个数组中的元素展开到另一个数组中或者作为函数的参数传递
    - 通过它也可以对数组进行浅复制

# Object.assign
    - Object.assign(目标对象,被复制的对象)
    - 将被复制对象中的属性复制到目标对象里,并将目标对象返回
```

```js
const arr=[{name:"孙悟空”},{name:”猪八戒”}]
const arr2 =arr.slice()// 浅拷贝
const arr3= structuredClone(arr)//专门用来深拷贝的方法

//# ...展开运算符
const arr=[{name:"孙悟空”},{name:”猪八戒”}]
const arr3 = [arr[0], arr[1], arr[2]]
const arr3 = [ ... arr]
const arr3=["唐僧”, …. arr,“白骨精”]

function sum(a, b, c) {
    return a + b + c
}
const arr4 = [10, 20, 30]

let result = sum(arr4[0], arr4[1], arr4[2])//
result = sum( ... arr4)//通过它也可以对数组进行浅复制

console.log(result)

//Object.assign
const obj = {name:"孙悟空",age = 18}
const obj2 =Object.assign({}, obj)//{name: '孙悟空', age: 18}
const obj2 = {address:"花果山", age:28}//{address: '花果山', age: 18, name: '孙悟空'}
const obj2 = {address:"花果山"，...obj，age:28}//{address: '花果山', name: '孙悟空', age: 18}
Object.assign(obj2, obj)
```

### 4.5.4 数组的方法（破坏性）

```
# push()
    - 向数组的末尾添加一个或多个元素,并返回新的长度
# pop()
    - 从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。
# unshift()
    - 向数组的开头添加一个或多个元素,并返回新的长度
# shift()
    - 删除并返回数组的第一个元素
# splice()
    - 可以删除、插入、替换数组中的元素
    - 参数:
        1.删除的起始位置
        2.删除的数量
        3. 要插入的元素

    - 返回值:
        - 返回被删除的元素 
# reverse( )
    - 反转数组
```

```js
//# push()
const arr = ["孙悟空","猪八戒","沙和尚"]
arr.push("唐僧")//['孙悟空', '猪八戒', '沙和尚', '唐僧']
result = arr.push()//返回新的长度
console.log(result)//打印
//# pop()
const arr = ["孙悟空","猪八戒","沙和尚"]
arr.pop()//['孙悟空', '猪八戒']
console.log(arr)

//# unshift()
const arr = ["孙悟空","猪八戒","沙和尚"]
arr.unshift("唐僧")//['唐僧', '孙悟空', '猪八戒', '沙和尚']
console.log(arr)

//# shift()
const arr = ["孙悟空","猪八戒","沙和尚"]
arr.shift()// ['猪八戒', '沙和尚']
result = arr.shift//孙悟空
console.log(arr)
console.log(result)

//# splice(删除的起始位置,删除的数量,要插入的元素)
const arr = ["孙悟空","猪八戒","沙和尚"]
arr.splice(1,1,"zzx")//['孙悟空', 'zzx', '沙和尚']
arr.splice(0,0,"zzx")//['zzx', '孙悟空', '猪八戒', '沙和尚']
arr.splice(3,0,"zzx")//['孙悟空', '猪八戒', '沙和尚', 'zzx']
console.log(arr)

//# reverse( )
const arr = ["孙悟空","猪八戒","沙和尚"]
arr.reverse()//['沙和尚', '猪八戒', '孙悟空']
console.log(arr)

```

### 4.5.5 数组的去重

```js
//方法1
const arr =[8, 2,5, 9, 7, 5, 5,6, 4, 3, 1, 2]
    for(let i=0;i<arr.length;i++){
        for(let j= i+1; j<arr.length; j++){
            if (arr[i] === arr[j]) {
                arr.splice(j, 1)
                j--
            }
        }
    }
console.log(arr);

//方法2
const arr =[1,2,2,2,3,3,4,4,4,5,5,6,6,6,7,7,8,8,9,]
    for(let i=0;i<arr.length;i++){
        const index = arr.indexOf(arr[i], i+1)
        if(index !== -1){
            arr.splice(index, 1)
            i--
        }
    }
console.log(arr);

//方法3  非破坏性  创建新数组复制结果
const arr =[1,2,2,2,3,3,4,4,4,5,5,6,6,6,7,7,8,8,9,]
const newArr =[]
for(let element of arr){
    if(newArr.indexOf(element) === -1){
        newArr.push(element)
    }
}
console.log(newArr);
```

### 4.5.6 排序

```js
//# 冒泡排序  速度慢 适合数据量小的
const arr =[9, 8, 5, 7, 6, 3, 4, 1, 2, 0,]
for(let j=0; j<arr.length-1; j++){
    //console.log(arr[j])
    for(let i=0; i<arr.length-1; i++){
        //arr[i]为前边元素，arr[i]为后边元素
        if(arr[i] > arr[ i + 1 ]){
            let temp = arr[i]//创建临时变量存储arr[i]
            arr[i] = arr[i+1]//将arr[i+1]的值赋给arr[i]
            arr[i+1] = temp //修改arr[i+1]的值
        }
    }
}   
console.log(arr)
    //优化
const arr =[9, 8, 5, 7, 6, 3, 4, 1, 2, 0,]
for(let j=0; j<arr.length-1; j++){
    //console.log(arr[j])
    for(let i=0; i<arr.length-1-j; i++){
        //arr[i]为前边元素，arr[i]为后边元素
        if(arr[i] > arr[ i + 1 ]){
            let temp = arr[i]//创建临时变量存储arr[i]
            arr[i] = arr[i+1]//将arr[i+1]的值赋给arr[i]
            arr[i+1] = temp //修改arr[i+1]的值
        }
    }
}   

//# 选择排序

console.time("计算速度")//计数器
const arr =[9, 9, 8, 8,5,9,6,3,4, 5, 7, 6, 3, 4, 1, 2, 0,]
//去重
for(let i=0; i<arr.length; i++){
    const index=arr.indexOf(arr[i],i+1)
    if(index !==-1){
        arr.splice(index,1)
        i--
    }
}
//排序
for(let i=0; i<arr.length-1; i++){
    for(let j=i+1; j<arr.length;j++){
        if(arr[i] > arr[j]){
            let temp = arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
    console.log(arr);
}
console.log(arr);
console.timeEnd("计算速度")

```

### 4.5.7 封装函数

```js

//封装函数
const arr = [9, 8, 5, 7, 6, 3, 4, 1, 2, 0,]
const arr2 =[9, 9, 8, 8,5,9,6,3,4, 5, 7, 6, 3, 4, 1, 2, 0,]
function sort(arr){
    //去重
    for(let i=0; i<arr.length; i++){
        const index=arr.indexOf(arr[i],i+1)
        if(index !==-1){
            arr.splice(index,1)
            i--
        }
    }
    //排序
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i] > arr[j]){
                let temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
}
sort(arr2)//将常量arr2作为参数传入函数sort
console.log(arr2);//打印arr2

```

### 4.5.8 高阶函数
#### 4.5.8.1 回调函数

```
高阶函数
    - 如果一个函数的参数或返回值是函数,则这个函数就称为高阶函数
    - 为什么要将函数作为参数传递?(回调函数有什么作用?)
    - 将函数作为参数,意味着可以对另一个函数动态的传递代码

```

```js
function filter(arr,cb) {
    const newArr =[]//设置一个空数组
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newArr.push(arr[i])
        }
    } 
    return newArr
}
const arr2 = [0,2,3,1,5,6,7,8,9,10,15,12,14,18,19]
result = filter(arr2,a => a %2 === 0) 
console.log(result);

```

#### 4.5.8.2 高阶函数的返回值
```
希望在someFn()函数执行时,可以记录一条日志

在不修改原函数的基础上,为其增加记录日志的功能

可以通过高阶函数,来动态的生成一个新函数
```

```js
function someFn() {
    return "hello"
}

function outer(cb){
    return () => {
        console.log(“记录日志 ~~~ ")
        const result = cb()//调用函数someFn()
        return result    //把调用结果作为返回值返回给匿名箭头函数
    }
}
let result = outer(someFn)
console.log(result)

```

#### 4.5.8.3 闭包

```
# 闭包：  闭包就是能访问到外部函数作用域中变量的函数

# 什么时候使用:
    当我们需要隐藏一些不希望被别人访问的内容时就可以使用闭包
构成闭包的要件:
    1. 函数的嵌套
    2. 内部函数要引用外部函数中的变量
    3. 内部函数要作为返回值返回
# 闭包的生命周期:
    1. 闭包在外部函数调用时产生,外部函数每次调用都会产生一个全新的闭包
    2. 在内部函数去失时销毁(内部函数被垃圾回收了,闭包才会消失)

# 注意事项:
    闭包主要用来隐藏一些不希望被外部访问的内容,
        这就意味着闭包需要占用一定的内存空间
    相较于类来说,闭包比较浪费内存空间(类可以使用原型而闭包不能),
        需要执行次数较少时,使用闭包
        需要大量创建实例时,使用类

# 函数的作用域，在函数创建时就已经确定的(词法作用域)，和调用的位置无关。

```

```js
//闭包
function outer(){
    let num=0 // 位于函数作用域中
    return () => {
        num++
    console.log(num)
    }    
}    

const newFn = outer()
newFn()
//闭包的典型结构
function outer( ){
    let someVariable = "someValue"
    return function( ){
    console. log(someVariable)
    }
}

//函数的作用域
let a="全局变量a”
function fn( ){
    console.log(a)
}

function fn2(){
    let a="fn2中的a”
    fn()//打印"全局变量a”
.}
fn()//打印"全局变量a”
fn2()//打印"fn2中的a”

//闭包的生命周期
function outer2(){
    let num = 0
    return () => {
    num++
    console.log(num)    
    }
}
let fn1=outer2()//独立闭包
let fn2= outer2()// 独立闭包
fn1()
fn2()
fn1 = null
fn2 = null

```

#### 4.5.8.4 递归

```
# 递归
    - 调用自身的函数称为递归函数
    - 递归的作用和循环是基本一直

// 创建一个函数，可以用来求任意数的阶乘
1!  1
2!  1 x 2 = 2
3!  1 x 2 x 3 = 6
...
10!  1 x 2 x 3 x 4 x 5 x 6 x 7 x 8 x 9 x 10 = xxx

如果用递归来解决阶乘的问题？
    5! = 4! x 5
    4! = 3! x 4
    3! = 2! x 3
    2! = 1! x 2
    1! = 1

递归的核心思想就是将一个大的问题拆分为一个一个小的问题，小的问题解决了，大的问题也就解决了

编写递归函数，一定要包含两个要件：
    1.基线条件 ——  递归的终止条件
    2.递归条件 ——  如何对问题进行拆分

递归的作用和循环是一致的，不同点在于，递归思路的比较清晰简洁，循环的执行性能比较好
在开发中，一般的问题都可以通过循环解决，也是尽量去使用循环，少用递归
只在一些使用循环解决比较麻烦的场景下，才使用递归

```

```js
// 创建一个函数，可以用来求任意数的阶乘
//使用循环解决
function jieCheng(num){
    // 创建一个变量用了记录结果
    let result = 1
    for(let i=2; i<=num; i++){
        result *= i//result = result * i
    }
    return result
}
let result = jieCheng(3)
console.log(result)

//使用递归
function jieCheng2(num){
    // 基线条件
    if(num === 1){
        return 1
    }
    // 递归条件
    // num! = (num-1)! * num
    return jieCheng2(num-1) * num
}
result = jieCheng2(5)
//递归原理
jieCheng2(5)
    - return jieCheng2(4) * 5
     - return jieCheng2(3) * 4
      - return jieCheng2(2) * 3
        - return jieCheng2(1) * 2
         - return 1

```

```js
//递归练习
/* 
一对兔子出生后的两个月后每个月都能生一对小兔子
    - 编写一个函数，可以用来计算第n个月的兔子的数量

1   2   3   4   5   6   7     8    9   10  11  12....50
1   1   2   3   5   8   13  21  34   55............12586269025
- 规律，当前数等于前两个数之和（斐波那契数列）
*/

// 求斐波那契数列中的第n个数
function fib(n) {
    // 确定基线条件
    if (n < 3) {
        return 1
    }
    // 设置递归条件
    // 第n个数 = 第n-1个数 + 第n-2个数
    return fib(n - 1) + fib(n - 2)
}
let result = fib(10)
console.log(result)

```

#### 4.5.8.5 数组的方法（高阶函数）

```
# sort()
    - sort 用来对数组进行排序（会对改变原数组）
    - sort 默认会将数组升序排列
        注意：sort默认会按照Unicode编码进行排序，所以如果直接通过sort对数字进行排序可能会得到一个不正确的结果
    - 参数：
        - 可以传递一个回调函数作为参数，通过回调函数来指定排序规则
            (a, b) => a - b 升序排列
            (a, b) => b - a 降序排列
# forEach()
    - 用来遍历数组
    - 它需要一个回调函数作为参数，这个回调函数会被调用多次
        数组中有几个元素，回调函数就会调用几次
        每次调用，都会将数组中的数据作为参数传递
    - 回调函数中有三个参数：
        element 当前的元素
        index 当前元素的索引
        array 被遍历的数组

# filter()
    - 将数组中符合条件的元素保存到一个新数组中返回
    - 需要一个回调函数作为参数，会为每一个元素去调用回调函数，并根据返回值来决定是否将元素添加到新数组中
    - 非破坏性方法，不会影响原数组

# map()
    - 根据当前数组生成一个新数组
    - 需要一个回调函数作为参数，
        回调函数的返回值会成为新数组中的元素
    - 非破坏性方法不会影响原数组

# reduce()
    - 可以用来将一个数组中的所有元素整合为一个值
    - 参数：
        1. 回调函数，通过回调函数来指定合并的规则
        2. 可选参数，初始值
```

```js
//# sort()
let arr = ["a", "c", "e", "f", "d", "b"]
arr = [2, 3, 1, 9, 0, 4, 5, 7, 8, 6, 10]
arr.sort((a, b) => a - b)
arr.sort((a, b) => b - a)

//# forEach(element, index, array)
arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧"]
 arr.forEach((element, index, array) => {
     console.log(array)
 })
 arr.forEach((element, index) => console.log(index, element))

//# filter(element, index, array)
arr = [1, 2, 3, 4, 5, 6, 7, 8]
    // 获取数组中的所有偶数
let result = arr.filter((ele) => ele % 2 === 0 )
console.log(result)
    //true和false
let result = arr.filter((ele) => true )
console.log(result)//[1, 2, 3, 4, 5, 6, 7, 8]

let result = arr.filter((ele) => false )
console.log(result)//[]
    //取大于5的数字
let result = arr.filter((ele) => ele > 5 )
console.log(result)//[6, 7, 8]

//# map(element, index, array)
    //给原数组*2
arr = [1, 2, 3, 4, 5, 6, 7, 8]
result = arr.map((ele) => ele * 2)
    //给原数组加标签
result = arr.map((ele) => "<li>" + ele + "</li>")

//# reduce()
arr = [1, 2, 3, 4, 5, 6, 7, 8]
result = arr.reduce((a, b) => {
/* 
1, 2
3, 3
6, 4
10, 5
*/
console.log(a, b)

return a * b
})
result = arr.reduce((a, b) => a + b, 10)//10在结果上加10
console.log(result)
```

#### 4.5.8.6 可变参数/剩余参数

```
# arguments
    - arguments是函数中又一个隐含参数
    - arguments是一个类数组对象（伪数组）
        和数组相似，可以通过索引来读取元素，也可以通过for循环变量，但是它不是一个数组对象，不能调用数组的方法
    - arguments用来存储函数的实参，
        无论用户是否定义形参，实参都会存储到 arguments 对象中
        可以通过该对象直接访问实参

# 可变参数，在定义函数时可以将参数指定为可变参数
    - 可变参数可以接收任意数量实参，并将他们统一存储到一个数组中返回
    - 可变参数的作用和arguments基本是一致，但是也具有一些不同点：
        1. 可变参数的名字可以自己指定
        2. 可变参数就是一个数组，可以直接使用数组的方法
        3. 可变参数可以配合其他参数一起使用

```

### 4.5.9 函数的.call()和.apply()和.bind()

```
# 根据函数调用方式的不同，this的值也不同：
    1. 以函数形式调用，this是window
    2. 以方法形式调用，this是调用方法的对象
    3. 构造函数中，this是新建的对象
    4. 箭头函数没有自己的this，由外层作用域决定
    5. 通过call和apply调用的函数，它们的第一个参数就是函数的this
    6. 通过bind返回的函数，this由bind第一个参数决定（无法修改）

# 调用函数除了通过 函数() 这种形式外，还可以通过其他的方式来调用函数
    比如，我们可以通过调用函数的call()和apply()来个方法来调用函数
        函数.call()
        函数.apply()
        - call 和 apply除了可以调用函数，还可以用来指定函数中的this
        - call和apply的第一个参数，将会成为函数的this
        - 通过call方法调用函数，函数的实参直接在第一个参数后一个一个的列出来
        - 通过apply方法调用函数，函数的实参需要通过一个数组传递

# bind() 是函数的方法，可以用来创建一个新的函数
    - bind可以为新函数绑定this
    - bind可以为新函数绑定参数

# 箭头函数没有自身的this，它的this由外层作用域决定，
    也无法通过call apply 和 bind修改它的this 
    箭头函数中没有arguments

```

```js
function fn2(a, b) {
    console.log("a =", a, "b =", b, this)
}
fn2.call(obj, "hello", true)//通过call方法调用函数，函数的实参直接在第一个参数后一个一个的列出来
fn2.apply(obj, ["hello", true])//通过apply方法调用函数，函数的实参需要通过一个数组传递

//
 function fn(a, b, c) {
    console.log("fn执行了~~~~", this)
    console.log(a, b, c)
}
const obj = {name:"孙悟空"}
const newFn = fn.bind(obj, 10, 20, 30)//第一个参数绑定this，后面参数绑定形参
 newFn()

```

# 5 流程控制语句
```
流程控制语句可以用来改变程序执行的顺序
    1. 条件判断语句（if语句）
    2. 条件分支语句
    3. 循环语句
```

## 5.1 if 语句

```
1. if语句
    - 语法:
        if(条件表达式){
            语句
        }
    
    - 执行流程
        - if语句在执行会先对if后的条件表达式进行求值判断,
            如果结果为true,则执行if后的语句
            如果为false则不执行
        
        - if语句只会控制紧随其后其后的那一行代码,如果希望可以控制多行代码,可以使用{}将语句扩起来
            最佳实践:即使if后只有1行代码,我们也应该编写代码块,这样结构会更加的清晰
        
        - 如果if后的添加表达式不是布尔值,会转换为布尔值然后再运算

2.  if-else语句
    - 语法:
        if(条件表达式){
            语句 …
        }else{
            语句 …
        }
    
    - 执行流程:
        if-else执行时,先对条件表达式进行求值判断,
            如果结果为true 则执行if后的语句
            如果结果为false 则执行else后的语句

3.  if-else语句 if-else语句
    - 语法:
            if(条件表达式){
                语句 …
            }else if(条件表达式){
                语句 …
            }else if(条件表达式){
                语句 …
            }else{
                语句 …
            }
    
    - 执行流程:
        - if-else if-else语句,会自上向下依次对if后的条件表达式进行求值判断,
            如果条件表达式结果为true,则执行当前if后的语句,执行完毕语句结束
            如果条件表达式结果为false,则继续向下判断,直到找到true为止
            如果所有的条件表达式都是false,则执行else后的语句
        
        - 注意:
            if-else if-else语句中只会有一个代码块被执行,
            一旦有执行的代码块,下边的条件都不会在继续判断了
            所以一定要注意,条件的编写顺序
```

```js
//if-else语句
let age = 70

if(age >=60){
    alert('你已经退休了!’)
}else{
    alert('你还没有退休!')
}

//if-else语句 if-else语句
let age = 70

if(age>=100){
    alert('你真是一个长寿的人!')
}else if(age >= 80){
    alert('你比楼上那位还年轻不小!')
}else if(age >= 60 ){
    alert('你已经退休了!')
}else if(age >= 30){
    alert('你已经步入中年了!’)
}else if(age >= 18){
    alert('你已经成年了!')
}else{
    alert('你还未成年!')
}
```

## 5.2 switch 语句

```
switch语句
- 语法 
    - switch（表达式）{
        - case 表达式：
            - break
        - case 表达式：
            - break
        - default
    - }

- 执行的流程
    switch语句在执行时,会依次将switch后的表达式和case后的表单式进行全等比较
        如果比较结果为true,则自当前case处开始执行代码
        如果比较结果为false,则继续比较其他case后的表达式,直到找到true为止
        如果所有的比较都是false,则执行default后的语句

- 注意:
    当比较结果为true时,会从当前case处开始执行代码
        也就是说case是代码执行的起始位置
    这就意味着只要是当前case后的代码,都会执行
    可以使用break来避免执行其他的case

- 总结
    switch语句和if语句的功能是重复,switch能做的事if也能做,反之亦然
        switch在多个全等判断时结构更清晰
```

# 6 循环语句

- 通过循环语句可以使指定的代码反复执行
- JS 中一共有三种循环语句
    - while 语句
    - do-while 语句
    - for 语句

## 6.1 while 循环
```
while语句
语法:
    while(条件表达式){
        语句 …..
    }

- 执行流程:
    while语句在执行时,会先对条件表达式进行判断,
        如果结果为true,则执行循环体,执行完毕,继续判断
        如果为true,则再次执行循环体,执行完毕,继续判断,如此重复
        知道条件表达式结果为false时,循环结束

```

```js
//练习:假设银行存款的年利率为5%,问1000块存多少年可以变成5000块

// 创建一个变量表示钱数
let money = 1000

//1000 存一年是多少钱?
// money *= 1.05

//创建一个计数器来记录循环执行的次数
let year = 0

// 编写循环,计算存款的年数
while(money < 5000){
money *= 1.05//循环没执行一次,就相当于钱存了一年
year++
}
console.log(`需要存${year}年,最终的钱数为${money}元!`)//一共需要33年，共存钱5003.18854203379
```

## 6.2 do-while 循环

```
do-while循环
语法:
    do{
        语句 ...
    }while(条件表达式)

执行顺序:
    do-while语句在执行时,会先执行do后的循环体,
        执行完毕后,会对while后的条件表达式进行判断
        如果为false,则循环终止
        如果为true,则继续执行循环体,以此类推

do-while和while的区别:
    while语句是先判断再执行
    do-while语句是先执行再判断
    
    实质的区别:
        do-while语句可以确保循环至少执行一次

```

## 6.3 for 循环

```
 for循环
    - for循环和while没有本质区别,都是用来反复执行代码
    - 不同点就是语法结构,for循环更加清晰
    - 语法:
        for(1初始化表达式 ; 2条件表达式 ; 3更新表达式){
        语句 ...
    }

执行流程:
    1 执行初始化表达式,初始化变量
    2 执行条件表达式,判断循环是否执行(true执行,false终止)
    3 判断结果为true,则执行循环体
    4 执行更新表达式,对初始化变量进行修改
    5 重复2,知道判断为false为止

    -初始化表达式,住備坏的整个的生命周期中只会执行1次
    - for循环中的三个表达式都可以省略
    - 使用let在for循环的()中声明的变量是局部变量,只能在for循环内部访问
        使用var在for循环的()中声明的变量可以在for循环的外部访问
    - 创建死循环的方式:
        while(1){}
        for( ;; ){}

```

```js
for(let i=0; i<5; i++){
console.log(i)
}

//三种循环语法总结
while(条件表达式){
        语句 …..
    }

do{
    语句 ...
}while(条件表达式)

for(1初始化表达式 ; 2条件表达式 ; 3更新表达式){
        语句 ...
    }

//求100以内所以3的倍数的个数，以及他们的和
    //第一种方式
let count = 0  //设置计数器
let result = 0  //设置累加器
       //1初始化表达式，2条件表达式，3更新表达式
       for(let i = 1 ; i<=100 ; i++){  //获取100以内所有的数
        if(i % 3 === 0){  //获取3的倍数
            count++
            result = result + i //获取i倍数的总和，可以换做 result += i
        }
       }
       console.log(`3的倍数一共有${count}个,总和为${result}`);

    //第二种方式
let count = 0  //设置计数器
let result = 0  //设置累加器
for(let i=3; i<=100; i+=3){
    count++
    result.+=i
}
console.log('3的倍数一共有${count}个,总和为${result}`)

```

练习
```js

/*求,1000 以内的水仙花数
    水仙花数
        - 一个n位数(n>=3),如果它各个位上数字的n次幂之和还等于这个数,那么这个数就是一个水仙花数
        - 153  -- > 1 5 3  -- > 1 125 27  -- > 153*/

for(let i=100; i<1000; i++){
    //如果i的百位数字 十位数字 个位数字的立方和 还等于 i 则i就是水仙花数
    let bai = parseInt(i / 100)
    
    //获取十位数
    let shi = parseInt((i-bai * 100) / 10)
    
    //获取个位数
    let ge = i % 10
    
    // console.log(i," -- >",bai, shi, ge)
    
    // 判断i是否是水仙花数
    if(bai ** 3 + shi ** 3 + ge ** 3 === i){
    console.log(i)
    }
}

//使用字符串索引
for(let i=100; i<1000; i++){
    let strI = i + ""  //把数值转换成字符串，并赋值给strI
    if(strI[0] ** 3 + strI[1] ** 3 + strI[2] ** 3 === i)  //利用索引把百位，十位，个位的数值都取出来并做幂运算相加
    {
    console.log(i)
    }
}

/*
获取用户输入的大于1的整数(暂时不考虑输错的情况)，然后编写代码检查这个数字是否是质数,并打印结果

    质数
        - 一个数如果只能被1和它本身整除,那么这个数就是质数
        - 1既不是质数也不是合数
*/

// 获取用户输入的数值
let num =+prompt("请输入一个大于1的整数:")

//用来记录num的状态,默认为true,num是质数
let flag = true

for(let i=2; i<num; i++){
    if(num % i === 0){
    //如果num能被i整除,说明num一定不是质数
    // 当循环执行时,如果从来没有进入过判断(判断代码没有执行),则说明9是质数
    // 如果判断哪怕只执行了一次,也说明 9 不是质数
    flag = false
    }
}

if(flag){
    alert(`${num}是质数!`)
}else{
    alert(`${num}不是质数!`)
}

```

## 6.4 循环嵌套
```js
希望在网页中打印出如下图形
*  
**  
***  
****  
*****
-------
*****  
****  
***  
**  
*

*****  
*****  
*****  
*****  
*****

//这个for循环,可以用来控制图形的高度
for(i = 0; i < 5; i++){
    for(j=0; j<i+1; j++){
        document.write("*")
    }
    document.write("<br>")
}
document.write("<hr>")
for(i = 0; i < 5; i++){
    for(j=0; j<5-i; j++){
        document.write("*")
    }
    document.write("<br>")
}
for(i = 0; i < 5; i++){
    for(j=0; j<5; j++){
        document.write("*")
    }
    document.write("<br>")
}

//使用循环嵌套打印九九乘法表

for(i=1; i<10; i++){
    for(j=1; j<i+1; j++){
        document.write(`${i} * ${j} = ${i * j}`)
    }
    document.write("<br> <br>")
    
}
/*
1      
2    4      
3    6    9      
4    8    12    16      
5    10    15    20    25      
6    12    18    24    30    36      
7    14    21    28    35    42    49      
8    16    24    32    40    48    56    64      
9    18    27    36    45    54    63    72    81
*/

//打印出100以内的质数
for(let i=2; i<100; i++){
    let flag = true
    for(let j=2; j<i; j++){
        if(i % j === 0){
            flag = false
        }
    }
    if(flag){
    console.log(i);
    } 
}

```

## 6.5 break 和 continue

```
break
    - break用来终止switch和循环语句
    - break执行后,当前的switch或循环会立刻停止
    - break会终止离他最近的循环

continue
    - continue用来跳过当次循环

利用break进行代码性能优化

```

```js
//break执行后,当前的switch或循环会立刻停止
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break
    }
    console.log(i)
}

//break会终止离他最近的循环
for (let i = 0; i < 5; i++) {
    console.log(i)
        for(let j=0; j<5; j++){
            if(j === 1) break
            console.log('内层循环 --- >’,j)
    }
}

//continue用来跳过当次循环
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue
    }
    console.log(i)
}

//利用break进行代码性能优化
for (let i=2; i < 1000000; i++) {
    let flag = true
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
        flag = false
        // 进入判断说明i一定不是质数,后续检查没有执行的必要
        break
        
        }
    }
    if (flag) {
    //console.log(i)
}
//利用break进行代码性能优化  进一步
for (let i=2; i < 1000000; i++) {
    let flag = true
    
    for (let j = 2; j < = i ** .5; j++) {
        if (i % j === 0) {
        flag = false
        // 进入判断说明i一定不是质数,后续检查没有执行的必要
        break
        
        }
    }
    if (flag) {
    //console.log(i)
}

console.time（计数器名字）//开启一个计数器
console.timeEnd（计数器名字）//结束一个计数器
```

# 7 内建对象
## 7.1 解构赋值(数组)

```js
const arr = ["孙悟空", "猪八戒", "沙和尚"]
# //声明三个变量，并将数组中的元素赋值给三个变量
let     a,b,c
a = arr[0]
b = arr[1]
c = arr[2]
//解构赋值
[a, b, c] = arr
# // 声明同时解构
let [d, e, f, g] = ["唐僧", "白骨精", "蜘蛛精", "玉兔精"] 

# // 解构数组时，可以使用...来设置获取多余的元素
let [n1, n2, ...n3] = [4, 5, 6, 7]//n1=4，n2=5，n3=6，7

# //可以设置默认值
let [d, e, f, g] = ["唐僧", "白骨精", "蜘蛛精", "玉兔精"] 
;[d, e, f = 77, g = g] = [1, 2, 3]//f=77不赋值保持默认值，g=g不赋值用原来的值  玉兔精

# //对函数进行解构
function fn(){
    return ["二郎神", "猪八戒"]
}
let [name1, name2] = fn()

# // 可以通过解构赋值来快速交换两个变量的值
/*let temp = a1
 a1 = a2
 a2 = temp*/
[a1, a2] = [a2, a1] // [20, 10]

const arr2 = ["孙悟空", "猪八戒"]
;[arr2[0], arr2[1]] = [arr2[1], arr2[0]]

# //二维数组    
/*
数组中可以存储任意类型的数据，也可以存数组,
如果一个数组中的元素还是数组，则这个数组我们就称为是二维数组
*/

## //二维数组的遍历
const arr3 = [["孙悟空", 18, "男"], ["猪八戒" ,28, "男"]]

for(let stu of arr3){
     for(let v of stu){
        console.log(v)
    }
 }

## //二维数组的解构
const arr3 = [["孙悟空", 18, "男"], ["猪八戒" ,28, "男"]]
let [[name, age, gender], obj] = arr3//解构给数组
console.log(name, age, gender)
console.log(obj)

```

## 7.2 解构赋值(对象)

```js
const obj = { name: "孙悟空", age: 18, gender: "男" }

// 声明变量同时解构对象
const obj = { name: "孙悟空", age: 18, gender: "男" }
let { name, age, gender } = obj 
//常规方法
let name = obj.name
let age = onj.age
let gender = obj.gender

//先声明变量在解构
let name, age, gender
({ name, age, gender } = obj)

// 没有的属性返回undefined
let { address } = obj 

//别名，可以更改对应键值的名字
let {name:a, age:b, gender:c, address:d="花果山"} = obj

```

## 7.3 对象的序列化（JSON）

```
# 对象的序列化
    - JS中的对象使用时都是存在于计算机的内存中的
    - 序列化指将对象转换为一个可以存储的格式
        在JS中对象的序列化通常是将一个对象转换为字符串（JSON字符串）
    
    - 序列化的用途（对象转换为字符串有什么用）：
        - 对象转换为字符串后，可以将字符串在不同的语言之间进行传递
            甚至人可以直接对字符串进行读写操作，使得JS对象可以不同的语言之间传递
        - 用途：
            1. 作为数据交换的格式
            2. 用来编写配置文字
    
    - 如何进行序列化：
        - 在JS中有一个工具类 JSON （JavaScript Object Notation） JS对象表示法
        - JS对象序列化后会转换为一个字符串，这个字符串我们称其为JSON字符串  
        
    - 也可以手动的编写JSON字符串，在很多程序的配置文件就是使用JSON编写的
    - 编写JSON的注意事项：
        1. JSON字符串有两种类型：
            JSON对象 {}
            JSON数组 []
        2. JSON字符串的属性名必须使用双引号引起来
        3. JSON中可以使用的属性值（元素）
            - 数字（Number）
            - 字符串（String） 必须使用双引号
            - 布尔值（Boolean）
            - 空值（Null）
            - 对象（Object {}）
            - 数组（Array []）
        4. JSON的格式和JS对象的格式基本上一致的，
            注意：JSON字符串如果属性是最后一个，则不要再加,
```

```js
const obj = {
    name: "孙悟空",
    age: 18,
}
// 将obj转换为JSON字符串
const str = JSON.stringify(obj) //JSON.stringify()可以将一个对象转换为JSON字符串
const obj2 = JSON.parse(str) // JSON.parse() 可以将一个JSON格式的字符串转换为JS对象

//JSON的编写
const str2 = `{"name":"猪八戒","age":28}`//对象
const str4 = '["hello", true, []]'//数组和二维数组

```

### 7.3.1 JSON 可以进行深复制

```js
const obj = {
    name: "孙悟空",
    friend: {
        name: "猪八戒",
    },    
}

// 对obj进行浅复制
const obj2 = Object.assign({}, obj)

// 对obj进行深复制
const obj3 = structuredClone(obj)

// 利用JSON来完成深复制
const str = JSON.stringify(obj)
const obj4 = JSON.parse(str)

const obj5 = JSON.parse(JSON.stringify(obj))
```

## 7.4 map

```
Map
    - Map用来存储键值对结构的数据（key-value）
    - Object中存储的数据就可以认为是一种键值对结构
    - Map和Object的主要区别：
        - Object中的属性名只能是字符串或符号，如果传递了一个其他类型的属性名，
            JS解释器会自动将其转换为字符串
        - Map中任何类型的值都可以称为数据的key

创建：
    new Map()

属性和方法：
    map.size() 获取map中键值对的数量
    map.set(key, value) 向map中添加键值对
    map.get(key) 根据key获取值   
    map.delete(key) 删除指定数据
    map.has(key) 检查map中是否包含指定键
    map.clear() 删除全部的键值对
```

```js
//创建一个Map
const map = new Map()
//map.set(key, value) 向map中添加键值对
map.set("name", "孙悟空")
map.set(obj2, "呵呵")
map.set(NaN, "哈哈哈")

//map.get(key) 根据key获取值   
console.log(map.get("name"))

//map.has(key) 检查map中是否包含指定键
console.log(map.has("name"))

//map.delete(key) 删除指定数据
map.delete(NaN)

//删除全部的键值对
map.clear()

```

#### 7.4.1.1 Map 和数组的转换

```js
const map = new Map()
map.set("name", "孙悟空") 
map.set("age", 18)
map.set({}, "呵呵")
// 将map转换为数组
const arr = Array.from(map) // [["name","孙悟空"],["age",18]]
const arr = [...map]//利用展开运算符
//将数组转换为Map
const map2 = new Map([
 ["name", "猪八戒"],
["age", 18],
[{}, () => {}],
])//直接将数组作为参数

// 遍历map
    //for循环
for (const [key, value] of map) {
     // const [key, value] = entry
    console.log(key, value)
 }
    //forEach
map.forEach((key, value)=>{
     console.log(key, value)
 })

//Map的方法
map.keys() //获取map的所有的key
map.values() // 获取map的所有的value
```

## 7.5 Set

```
Set
    - Set用来创建一个集合
    - 它的功能和数组类似，不同点在于Set中不能存储重复的数据

- 使用方式：
    创建
        - new Set()
        - new Set([...])

    方法
        size 获取数量
        add() 添加元素
        has() 检查元素
        delete() 删除元素
```

```js
// 创建一个Set
const set = new Set()
// 向set中添加数据
set.add(10)
set.add("孙悟空")
set.add(10)
//set遍历
for(const item of set){
     console.log(item)
 }
 //转换成数组
 const arr = [...set]

```

## 7.6 Math

```
Math
    - Math一个工具类
    - Math中为我们提供了数学运算相关的一些常量和方法
    - 常量：
        Math.PI 圆周率
    - 方法：
        Math.abs() 求一个数的绝对值
        Math.min() 求多个值中的最小值
        Math.max() 求多个值中的最大值
        Math.pow() 求x的y次幂
        Math.sqrt() 求一个数的平方根
    
        Math.floor() 向下取整
        Math.ceil() 向上取整
        Math.round() 四舍五入取整
        Math.trunc() 直接去除小数位
    
        Math.random() 生成一个0-1之间的随机数
```

## 7.7 Date

```
Date
    - 在JS中所有的和时间相关的数据都由Date对象来表示
    - 对象的方法：
        getFullYear() 获取4位年份
        getMonth() 返当前日期的月份（0-11）
        getDate() 返回当前是几日
        getDay() 返回当前日期是周几（0-6） 0表示周日
        ......
    
        getTime() 返回当前日期对象的时间戳
            时间戳：自1970年1月1日0时0分0秒到当前时间所经历的毫秒数
            计算机底层存储时间时，使用都是时间戳
        Date.now() 获取当前的时间戳
```

```js
// 直接通过new Date()创建时间对象时，它创建的是当前的时间的对象
let d = new Date()
    // 可以在Date()的构造函数中，传递一个表示时间的字符串
    // 字符串的格式：月/日/年 时:分:秒
     // 年-月-日T时:分:秒
    d = new Date("2019-12-23T23:34:35")
    //// new Date(年份, 月, 日, 时, 分, 秒, 毫秒)
    d = new Date(2016, 0, 1, 13, 45, 33)

//
d = new Date()
result = d.getFullYear()//获取4位年份
result = d.getMonth()//返当前日期的月份（0-11）
result = d.getDate()//getDate() 返回当前是几日
result = d.getDay()//getDay() 返回当前日期是周几（0-6） 0表示周日
result = d.getTime()//返回当前日期对象的时间戳
result = d.getNow()//获取当前的时间戳

```

### 7.7.1 日期的格式化
```js
const d = new Date()
let result = d.toLocaleDateString() // 将日期转换为本地的字符串
result = d.toLocaleTimeString() // 将时间转换为本地的字符串

result = d.toLocaleString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    weekday: "short",
})
/*
toLocaleString()
    - 可以将一个日期转换为本地时间格式的字符串
    - 参数：
        1. 描述语言和国家信息的字符串
            zh-CN 中文中国
            zh-HK 中文香港
            en-US 英文美国
        2. 需要一个对象作为参数，在对象中可以通过对象的属性来对日期的格式进行配置
                dateStyle 日期的风格
                timeStyle 时间的风格
                    full
                    long
                    medium
                    short
                hour12 是否采用12小时值
                    true
                    false
                weekday 星期的显示方式
                    long
                    short
                    narrow

                year
                    numeric
                    2-digit
*/
```

## 7.8 包装类

```
在JS中，除了直接创建原始值外，也可以创建原始值的对象
    通过 new String() 可以创建String类型的对象
    通过 new Number() 可以创建Number类型的对象
    通过 new Boolean() 可以创建Boolean类型的对象
        - 但是千万不要这么做

包装类：
    JS中一共有5个包装类
        String --> 字符串包装为String对象
        Number --> 数值包装为Number对象
        Boolean --> 布尔值包装为Boolean对象
        BigInt --> 大整数包装为BigInt对象
        Symbol --> 符号包装为Symbol对象
        - 通过包装类可以将一个原始值包装为一个对象，
            当我们对一个原始值调用方法或属性时，JS解释器会临时将原始值包装为对应的对象
                然后调用这个对象的属性或方法

    - 由于原始值会被临时转换为对应的对象，这就意味着对象中的方法都可以直接通过原始值来调用
```

### 7.8.1 字符串的方法

```
字符串：
    - 字符串其本质就是一个字符数组
    - "hello" --> ["h", "e", "l", "l", "o"]
    - 字符串的很多方法都和数组是非常类似的
    - 属性和方法：
        length 获取字符串的长度
        字符串[索引] 获取指定位置的字符
        str.at() （实验方法）
            - 根据索引获取字符，可以接受负索引
        str.charAt()
            - 根据索引获取字符
        str.concat()
            - 用来连接两个或多个字符串
        str.includes()
            - 用来检查字符串中是否包含某个内容
                有返回true
                没有返回false
        str.indexOf()
        str.lastIndexOf()
            - 查询字符串中是否包含某个内容
        str.startsWith()
            - 检查一个字符串是否以指定内容开头
        str.endsWith()
            - 检查一个字符串是否以指定内容结尾
        str.padStart()
        str.padEnd()
            - 通过添加指定的内容，使字符串保持某个长度
        str.replace()
            - 使用一个新字符串替换一个指定内容
        str.replaceAll()    
            - 使用一个新字符串替换所有指定内容
        str.slice()
            - 对字符串进行切片
        str.substring()
            - 截取字符串
        str.split()
            - 用来将一个字符串拆分为一个数组
        str.toLowerCase()
            - 将字符串转换为小写
        str.toUpperCase()
            - 将字符串转换为大写
        str.trim()
            - 去除前后空格
        str.trimStart()
            - 去除开始空格
        str.trimEnd()
            - 去除结束空格
```

## 7.9 正则表达式

```
正则表达式
    - 正则表达式用来定义一个规则
    - 通过这个规则计算机可以检查一个字符串是否符合规则
        或者将字符串中符合规则的内容提取出来
    - 正则表达式也是JS中的一个对象，
        所以要使用正则表达式，需要先创建正则表达式的对象

创建方式
    1. 通过构造函数创建
        new RegExp() 可以接收两个参数（字符串） 
            1.正则表达式 
            2.匹配模式
    2. 使用字面量来创建正则表达式：/正则/匹配模式
        reg = /a/i

```

```js
//通过构造函数创建
let reg = new RegExp("a", "i")
//使用字面量来创建正则表达式：/正则/匹配模式
let reg = /a/i

reg = new RegExp("a") // /a/ 表示，检查一个字符串中是否有a

// 通过正则表达式检查一个字符串是否符合规则
let str = "a"

let result = reg.test(str) // true
result = reg.test("b") // false
result = reg.test("abc") // true
result = reg.test("bcabc") // true

```

### 7.9.1 正则表达式的语法

```
1.在正则表达式中大部分字符都可以直接写
2.| 在正则表达式中表示或
3.[] 表示或（字符集）
    [a-z] 任意的小写字母
    [A-Z] 任意的大写字母
    [a-zA-Z] 任意的字母
    [0-9]任意数字
4.[^] 表示除了
    [^x] 除了x
5. . 表示除了换行外的任意字符
6. 在正则表达式中使用\作为转义字符
7. 其他的字符集
    \w 任意的单词字符 [A-Za-z0-9_]
    \W 除了单词字符 [^A-Za-z0-9_]
    \d 任意数字 [0-9]
    \D 除了数字 [^0-9]
    \s 空格
    \S 除了空格
    \b 单词边界
    \B 除了单词边界
8. 开头和结尾
    ^ 表示字符串的开头
    $ 表示字符串的结尾
    /^a{3}$/  完全匹配
```

#### 7.9.1.1 正则表达式的量词

```
量词
    {m} 正好m个
    {m,} 至少m个
    {m,n} m-n个
    + 一个以上，相当于{1,}
    * 任意数量的a
    ? 0-1次 {0,1}
```

#### 7.9.1.2 正则表达式的方法

```
re.exec()
     - 获取字符串中符合正则表达式的内容
re.test()
    - 测试方法

i表示忽略大小写    g表示全局匹配
```

#### 7.9.1.3 练习

```js
/*
dajsdh13715678903jasdlakdkjg13457890657djashdjka13811678908sdadadasd
  */

let re = /1[3-9]\d{9}/g
let str = "dajsdh13715678903jasdlakdkjg13457890657djashdjka13811678908sdadadasd"
let result
while (result = re.exec(str)) {
    // console.log(result[0], result[1], result[2])
    console.log(result[1]+"****"+result[2])
}

//检查手机号是否合法
let re = /^1[3-9]\d{9}$/
console.log(re.test("13456789042"))

```

## 7.10 垃圾回收

```
垃圾回收（Garbage collection）
    - 和生活一样，生活时间长了以后会产生生活垃圾
        程序运行一段时间后也会产生垃圾
    - 在程序的世界中，什么是垃圾？
        - 如果一个对象没有任何的变量对其进行引用，那么这个对象就是一个垃圾
        - 垃圾对象的存在，会严重的影响程序的性能
        - 在JS中有自动的垃圾回收机制，这些垃圾对象会被解释器自动回收，我们无需手动处理
        - 对于垃圾回收来说，我们唯一能做的事情就是将不再使用的变量设置为null
```

---

# 8 DOM

## 8.1 DOM 简介
### 8.1.1 为什么需要 DOM

前边我们所学习的 JS 基础课程，学习了 JS 的基础知识。但是在学习过程中你会发现，似乎 JS 和网页并没有太大的关系。换句话说，我们所编写的 JS 代码，除了是写在网页中以外，并没有和网页产生任何实质的联系。如果 JS 不能操作网页，那么对于我们来说它就是一个废物，没有任何的使用价值。所以我们就需要一个新的技术，一个可以让我们使用 JS 来操作网页的技术，也就是 DOM。

### 8.1.2 什么是 DOM

DOM，全称 Document Object Model，中文翻译为文档对象模型。DOM 属于 Web API 的一部分。Web API 中定义了非常多的对象，通过这些对象可以完成对网页的各种操作（添加删除元素、发送请求、操作浏览器等）。

DOM 中的 D 意为 Document，即文档。所谓文档就是指整个网页，换言之，DOM 是用来操作网页的。O 意为 Object，即对象。DOM 将网页中的每一部分内容都转换为了对象，div 有 div 的对象，input 有 input 的对象，甚至一段文本，一段注释也有其所对应的对象。转换为对象干什么？还记得面向对象吗？转换对象以后，我们就可以以面向对象的方式去操作网页，想要操作哪个元素就获取哪个元素的对象，然后通过调用其方法或属性完成各种操作。M 意为 Model，即模型。模型用来表示对象之间的关系，也就是父子元素、祖先后代、兄弟元素等，明确关系后我们便可以通过任意一个对象去获取其他的对象。
```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <title>My Title</title>
</head>
<body>
    <h1>A Heading</h1>
    <a href="#">Link Text</a>
</body>
</html>
```

![[20220808135838431.png|300]]

### 8.1.3 DOM 概念

#### 8.1.3.1 节点（Node）

在 DOM 标准下，网页中的每一个部分都会转换为对象。这些对象有一个共同的称呼——节点（Node）。一个页面将会由多个节点构成，虽然都称为节点，但是它们却有着不同的类型：

1. 文档节点
2. 元素节点
3. 文本节点
4. 属性节点
5. …

每一个节点都有其不同的作用，文档节点表示整个网页，元素节点表示某个标签，文本节点表示网页中的文本内容，属性节点表示标签中的各种属性。如果从对象的结构上来讲，这些对象都有一个共同的父类 Node。总的来说，都是属于节点，但是具体类型不同。

#### 8.1.3.2 关系

- 祖先 —— 包含后代元素的元素是祖先元素
- 后代 —— 被祖先元素包含的元素是后代元素
- 父 —— 直接包含子元素的元素是父元素
- 子 —— 直接被父元素包含的元素是子元素
- 兄弟 —— 拥有相同父元素的元素是兄弟元素

## 8.2 如何使用 DOM

面向对象的编程语言，无非就是两个步骤：1.找对象。2.搞对象。所以使用 DOM 我们首先要先拿到一个 DOM 对象，然后以该对象为切入点来完成各种操作。

### 8.2.1 文档节点 (Document Node)

Document 对象代表的是整个的网页，在浏览器中它是 window 对象的属性（也就是全局变量），它也是我们所有 DOM 操作的切入点，实际上之前我们也使用过它，还记得 `document.write()` 吗？现在你可以尝试在控制台中打印 document，看看它还在不在？如果它还在那么你需要记住，它代表的是整个网页，它的子元素是 html。

从现在开始我们实际上进入了宿主对象的学习，DOM 就是一种宿主对象，即由运行环境（浏览器）提供的对象。对象的复杂程度也开始提升，我们先来看看 document 的继承关系：
![[20220808141848408.png|377]]

在标准中，Document 继承了 Node，Node 继承了 EventTarget，换言之 EventTarget、Node 以及 Document 中所定义的方法 document 都可以调用，它在浏览器中的实际结构会更复杂一些，这里我们暂时不过多的赘述。

```
document对象
    - document对象表示的是整个网页
    - document对象的原型链
        HTMLDocument -> Document -> Node -> EventTarget -> Object.prototype -> null
    - 凡是在原型链上存在的对象的属性和方法都可以通过Document去调用
    - 部分属性：
        document.documentElement --> html根元素
        document.head --> head元素
        document.title --> title元素
        document.body --> body元素
        document.links --> 获取页面中所有的超链接
```

### 8.2.2 元素节点（Element Node）

在网页中所有的元素（标签）都是一个 Element 对象。Element 对象的继承关系和 Document 类似：

![](https://my-wp.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2022/08/20220808210844195.png)

可以通过 Document 或其他元素直接获取已有的 Element 对象，也可以使用 Document 来创建新的 Element 对象。我们先来看看如何通过 document 获取已有的 Element 对象。

```
- `document.documentElement`                 获取html根元素
- `document.body`                                      获取body元素
- `document.getElementByID()`                根据id获取一个元素
- `document.getElementsByClassName()` 根据class属性获取元素（实时更新列表）
- `document.getElementsByTagName()`    根据标签名获取元素（实时更新列表）
- `document.getElementsByName()`          根据name属性获取元素（实时更新列表）
- `document.querySelector()`                      根据选择器获取一个元素
- `document.querySelectorAll()`                  根据选择器获取一组元素
```

通过其他元素获取已有的 Element 对象：

- `element.children`
- `element.parentNode`
- `` `element`.firstElementChild ``
- ``` `` `element` ``.lastElementChild ```
- ……

创建 Element 对象：
- `document.createElement()` 根据标签名创建元素节点对象

```
元素节点对象（element）
    - 在网页中，每一个标签都是一个元素节点
    - 如何获取元素节点对象？
        1. 通过document对象来获取元素节点
        2. 通过document对象来创建元素节点
    - 通过document来获取已有的元素节点：
        document.getElementById()
            - 根据id获取一个元素节点对象
        document.getElementsByClassName()
            - 根据元素的class属性值获取一组元素节点对象
            - 返回的是一个类数组对象
            - 该方法返回的结果是一个实时更新的集合
                当网页中新添加元素时，集合也会实时的刷新
        document.getElementsByTagName()
            - 根据标签名获取一组元素节点对象
            - 返回的结果是可以实时更新的集合
            - document.getElementsByTagName("*") 获取页面中所有的元素
        document.getElementsByName()
            - 根据name属性获取一组元素节点对象
            - 返回一个实时更新的集合
            - 主要用于表单项
        document.querySelectorAll()
            - 根据选择器去页面中查询元素
            - 会返回一个类数组（不会实时更新）
        document.querySelector()
            - 根据选择器去页面中查询第一个符合条件的元素

    - 创建一个元素节点
        document.createElement()
            - 根据标签名创建一个元素节点对象
```

#### 8.2.2.1 Element Method (元素方法)
```
div元素的原型链
    HTMLDivElement -> HTMLElement -> Element -> Node -> ...

通过元素节点对象获取其他节点的方法
    element.childNodes 获取当前元素的子节点（会包含空白的子节点）
    element.children 获取当前元素的子元素
    element.firstElementChild 获取当前元素的第一个子元素
    element.lastElementChild 获取当前元素的最后一个子元素
    element.nextElementSibling 获取当前元素的下一个兄弟元素
    element.previousElementSibling 获取当前元素的前一个兄弟元素
    element.parentNode 获取当前元素的父节点
    element.tagName 获取当前元素的标签名
```

### 8.2.3 文本节点(Text Node)

在 DOM 中，文本内容也是一个节点对象（Text），可以通过获取文本对象然后完成对它的各种操作，但这种做法会使得事情变得复杂，并不建议这么做。在大部分场景下，可以通过元素的属性来操作其中的文本内容，比如有如下文本：

```html
<div>div中的文本内容</div>
```

假设我们已经获取到了 div 的元素节点对象，我们可以通过以下的属性来完成对文本的操作：
- `element.textContent`
- `element.innerText`
- `element.innerHTML`
```
在DOM中，网页中所有的文本内容都是文本节点对象,
    可以通过元素来获取其中的文本节点对象，但是我们通常不会这么做

    我们可以直接通过元素去修改其中的文本
        修改文本的三个属性
            element.textContent 获取或修改元素中的文本内容
                - 获取的是标签中的内容，不会考虑css样式

            element.innerText 获取或修改元素中的文本内容
                - innerText获取内容时，会考虑css样式
                - 通过innerText去读取CSS样式，会触发网页的重排（计算CSS样式）
                - 当字符串中有标签时，会自动对标签进行转义
                - <li> --> &lt;li&gt;

            element.innerHTML 获取或修改元素中的html代码
                - 可以直接向元素中添加html代码
                - innerHTML插入内容时，有被xss注入的风险
```
### 8.2.4 属性节点 (Attr Node)

属性也是一个节点对象（Attr），和文本一样，通常我们不会去直接获取节点对象，而是通过元素来完成对属性的操作：

- `element.attrName`
- `element.getAttribute(attrName)`
- `element.setAttribute(name, value)`
```
属性节点（Attr）
    - 在DOM也是一个对象，通常不需要获取对象而是直接通过元素即可完成对其的各种操作
    - 如何操作属性节点：
        方式一：
            读取：元素.属性名（注意，class属性需要使用className来读取）
                    读取一个布尔值时，会返回true或false

            修改：元素.属性名 = 属性值

        方式二：
            读取：元素.getAttribute(属性名)

            修改：元素.setAttribute(属性名, 属性值)

            删除：元素.removeAttribute(属性名)
```
## 8.3 事件节点（Event Node）

事件指用户和网页之间发生的交互行为。比如点击按钮、移动鼠标、改变窗口大小、表单输入等等等等，用户的所有操作都可以被当成是一个事件。JS 中通过为事件绑定回调函数来处理事件，绑定回调函数后，事件触发后回调函数便会执行，以此来响应用户的行为，所以事件的回调函数我们也称其为事件的响应函数。

```
事件（event）
    - 事件就是用户和页面之间发生的交互行为
        比如：点击按钮、鼠标移动、双击按钮、敲击键盘、松开按键...  
    - 可以通过为事件绑定响应函数（回调函数），来完成和用户之间的交互
    - 绑定响应函数的方式：
        1.可以直接在元素的属性中设置
        2.可以通过为元素的指定属性设置回调函数的形式来绑定事件（一个事件只能绑定一个响应函数）
        3.可以通过元素 addEventListener()方法来绑定事件
```

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

## 8.4 文档加载事件

在网页中编写 DOM 代码时，如果依然将 script 标签编写到 head 中，会有无法获取 DOM 对象情况出现。这是因为网页的加载是自上向下依次加载的，如果将代码写在前边会导致代码执行时网页还没有加载，DOM 对象也就无法获取了。

如何解决这个问题呢？有这么几种方案：

1. 将 script 标签写在 body 的最后
2. 将 js 代码编写到 window.onload 事件的回调函数中
3. 将 js 代码编写到 document 对象的 DOMContentLoaded 事件的回调函数中
4. 将 js 代码编写到外部的 js 文件中，引入时为 script 标签添加 defer 属性

方式一：
```html
<!DOCTYPE html>
<html lang="zh">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <button type="button" id="btn">点我一下</button>

        <script>
            const btn = document.getElementById("btn")
            btn.addEventListener("click", function () {
                alert("按钮被点了")
            })
        </script>
    </body>
</html>
```

代码编写到了 body 的最后，代码执行时网页已经加载完毕了，不会出现无法获取 DOM 对象的问题。

方式二：
```js
window.onload = () => {
    const btn = document.getElementById("btn")
    btn.addEventListener("click", function () {
        alert("按钮被点了")
    })
}
```

```js
window.addEventListener("load", () => {
    const btn = document.getElementById("btn")
    btn.addEventListener("click", function () {
        alert("按钮被点了")
    })
})
```

将 js 代码编写到 window 的 load 事件的回调函数中，load 事件会在页面加载完毕后触发，同样可以避免上述问题。

方式三：
```js
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn")
    btn.addEventListener("click", function () {
        alert("按钮被点了")
    })
})
```

将 js 代码编写到 document 的 DOMContentLoaded 事件的回调函数中，代码会在当前文档加载完毕后执行也可以避免上述情况。（相较于 load 事件，DOMContentLoaded 事件的执行更早一些）

方式四：
```html
<script src="./script.js" defer></script>
```
设置 defer 后，脚本将会在文档解析之后加载，同样可以避免上述问题。（执行时机早于 DOMContentLoaded）

## 8.5 Dom 的修改

```
# 添加
    1. appendChild(li) 用于给一个节点添加子节点
    2. insertAdjacentElement()可以向元素的任意位置添加元素
        两个参数：1.要添加的位置 2.要添加的元素
            beforeend 标签的最后 
            afterbegin 标签的开始
            beforebegin 在元素的前边插入元素（兄弟元素）
            afterend 在元素的后边插入元素（兄弟元素）
            list.insertAdjacentElement("afterend", li)
    3. element.insertAdjacentHTML("beforeend", "<li id='bgj'>白骨精</li>")

# 修改替换
element.replaceWith() 使用一个元素替换当前元素

# 删除
element.remove()

```

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

### 8.5.1 节点的克隆(cloneNode )

```
使用 cloneNode() 方法对节点进行复制时，它会复制节点的所有特点包括各种属性
    这个方法默认只会复制当前节点，而不会复制节点的子节点
    可以传递一个true作为参数，这样该方法也会将元素的子节点一起复制
```

```js
<button id="btn01">点我一下</button>
<ul id="list1">
    <li id="l1">孙悟空</li>
    <li id="l2">猪八戒</li>
    <li id="l3">沙和尚</li>
</ul>
<ul id="list2">
    <li>蜘蛛精</li>
</ul>

const list2 = document.getElementById("list2")
const l1 = document.getElementById("l1")
const btn01 = document.getElementById("btn01")
btn01.onclick = function () {
    const newL1 = l1.cloneNode(true) // 用来对节点进行复制的
    newL1.id = "newL1"
    list2.appendChild(newL1)
}

```

## 8.6 修改 CSS 样式

```js
const btn = document.getElementById("btn")
const box1 = document.querySelector(".box1")

btn.onclick = function () {
    // 修改box1的样式
    // 修改样式的方式：元素.style.样式名 = 样式值
    // 如果样式名中含有-，则需要将样式表修改为驼峰命名法
    // background-color --> backgroundColor
    box1.style.width = "400px"
    box1.style.height = "400px"
    box1.style.backgroundColor = "yellow"
}

注意：！important  权重问题
```

### 8.6.1 读取样式

```
getComputedStyle()
    - 它会返回一个对象，这个对象中包含了当前元素所有的生效的样式
    - 参数：
        1. 要获取样式的对象
        2. 要获取的伪元素
    - 返回值：
        返回的一个对象，对象中存储了当前元素的样式

    - 注意：
        样式对象中返回的样式值，不一定能来拿来直接计算
            所以使用时，一定要确保值是可以计算的才去计算

    元素.clientHeight
    元素.clientWidth
        - 获取元素内部的宽度和高度（包括内容区和内边距）

    元素.offsetHeight
    元素.offsetWidth
        - 获取元素的可见框的大小（包括内容区、内边距和边框）

    元素.scrollHeight
    元素.scrollWidth
        - 获取元素滚动区域的大小

    元素.offsetParent
        - 获取元素的定位父元素
        - 定位父元素：离当前元素最近的开启了定位的祖先元素，
            如果所有的元素都没有开启定位则返回body

    元素.offsetTop
    元素.offsetLeft
        - 获取元素相对于其定位父元素的偏移量

    元素.scrollTop
    元素.scrollLeft
        - 获取或设置元素滚动条的偏移量

```

```js
const styleObj = getComputedStyle(box1)
console.log(styleObj.width)
console.log(styleObj.left)
//伪元素样式的读取
const beforeStyle = getComputedStyle(box1, "::before")

//样式读取计算
console.log(parseInt(styleObj.width) + 100)
box1.style.width = parseInt(styleObj.width) + 100 + "px"

```

### 8.6.2 操作 class 类改变 CSS

```
除了直接修改样式外，也可以通过修改class属性来间接的修改样式
    通过class修改样式的好处：
        1. 可以一次性修改多个样式
        2. 对JS和CSS进行解耦
    // box1.className += " box2"
    
    // 元素.classList 是一个对象，对象中提供了对当前元素的类的各种操作方法
        元素.classList.add() 向元素中添加一个或多个class
        元素.classList.remove() 移除元素中的一个或多个class
        元素.classList.toggle() 切换元素中的class
        元素.classList.replace() 替换class
        元素.classList.contains() 检查class
```

## 8.7 事件对象

```
event 事件
    - 事件对象
        - 事件对象是有浏览器在事件触发时所创建的对象，
            这个对象中封装了事件相关的各种信息
        - 通过事件对象可以获取到事件的详细信息
            比如：鼠标的坐标、键盘的按键..
        - 浏览器在创建事件对象后，会将事件对象作为响应函数的参数传递，
            所以我们可以在事件的回调函数中定义一个形参来接收事件对象
```

### 8.7.1 不同的事件对象和事件的冒泡（bubble）

```
在DOM中存在着多种不同类型的事件对象
    - 多种事件对象有一个共同的祖先 Event
        - event.target 触发事件的对象
        - event.currentTarget 绑定事件的对象（同this）
        - event.stopPropagation() 停止事件的传导
        - event.preventDefault() 取消默认行为
        
    - 事件的冒泡（bubble）
        - 事件的冒泡就是指事件的向上传到
        - 当元素上的某个事件被触发后，其祖先元素上的相同事件也会同时被触发
        - 冒泡的存在大大的简化了代码的编写，但是在一些场景下我们并不希望冒泡存在
            不希望事件冒泡时，可以通过事件对象来取消冒泡
```

#### 8.7.1.1 冒泡练习
```html
<style>
    #box1 {
        width: 100px;
        height: 100px;
        background-color: greenyellow;
        border-radius: 50%;
        position: absolute;
    }
    #box2 {
        width: 500px;
        height: 500px;
        background-color: orange;
    }
    #box3{
        width: 200px;
        height: 200px;
        background-color: tomato;
    }
    #box4{
        width: 100px;
        height: 100px;
        background-color: skyblue;
        position: absolute;
        bottom: 0;
    }
</style>
</head>
<body>
<div id="box1"></div>
<div id="box2"></div>
<div id="box3" onclick="alert(3)">
    <div id="box4" onclick="alert(4)"></div>
</div>
<script>
    /*
        使小绿球可以跟随鼠标一起移动
        事件的冒泡和元素的样式无关，之和结构相关
    */
    const box1 = document.getElementById("box1")
    const box2 = document.getElementById("box2")
    document.addEventListener("mousemove", (event) => {
        box1.style.left = event.x + "px"
        box1.style.top = event.y + "px"
    })
    box2.addEventListener("mousemove", event => {
        event.stopPropagation()
    })
    
</script>
</body>

```

### 8.7.2 事件的委派

```
我一个希望：
    只绑定一次事件，既可以让所有的超链接，包括当前的和未来新建的超链接都具有这些事件

思路：
    可以将事件统一绑定给document，这样点击超链接时由于事件的冒泡，
        会导致document上的点击事件被触发，这样只绑定一次，所有的超链接都会具有这些事件

委派就是将本该绑定给多个元素的事件，统一绑定给document，这样可以降低代码复杂度方便维护
```

```js
<button id="btn">点我一下</button>
<hr />
<ul id="list">
    <li><a href="javascript:;">链接一</a></li>
    <li><a href="javascript:;">链接二</a></li>
    <li><a href="javascript:;">链接三</a></li>
    <li><a href="javascript:;">链接四</a></li>
</ul>

<script>
 const list = document.getElementById("list")
const btn = document.getElementById("btn")
// 获取list中的所有链接
const links = list.getElementsByTagName("a")
document.addEventListener("click", (event) => {
 // 在执行代码前，先来判断一下事件是由谁触发
 // 检查event.target 是否在 links 中存在
 // console.log(Array.from(links))
    if([...links].includes(event.target)){
            alert(event.target.textContent)
        }                
})  
// 点击按钮后，在ul中添加一个新的li
btn.addEventListener("click", () => {
    list.insertAdjacentHTML(
        "beforeend",
        "<li><a href='javascript:;'>新超链接</a></li>"
    )
})
</script>

```

### 8.7.3 事件的捕获

```
事件的传播机制：
    - 在DOM中，事件的传播可以分为三个阶段：
        1.捕获阶段 （由祖先元素向目标元素进行事件的捕获）（默认情况下，事件不会在捕获阶段触发）
        2.目标阶段 （触发事件的对象）
        3.冒泡阶段 （由目标元素向祖先元素进行事件的冒泡）

    - 事件的捕获，指事件从外向内的传导，
        当前元素触发事件以后，会先从当前元素最大的祖先元素开始向当前元素进行事件的捕获

    - 如果希望在捕获阶段触发事件，可以将addEventListener的第三个参数设置为true
        一般情况下我们不希望事件在捕获阶段触发，所有通常都不需要设置第三个参数
```

```js
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")

box1.addEventListener("click", event => {
    alert("1" + event.eventPhase) // eventPhase 表示事件触发的阶段
    //1 捕获阶段 2 目标阶段 3 冒泡阶段
},ture)

box2.addEventListener("click", event => {

    alert("2" + event.eventPhase)
})

box3.addEventListener("click", event => {
    alert("3" + event.eventPhase)
})
```

# 9 BOM

```
BOM
    - 浏览器对象模型
    - BOM为我们提供了一组对象，通过这组对象可以完成对浏览器的各种操作
    - BOM对象：
        - Window —— 代表浏览器窗口（全局对象）
        - Navigator —— 浏览器的对象（可以用来识别浏览器）
        - Location —— 浏览器的地址栏信息
        - History —— 浏览器的历史记录（控制浏览器前进后退）
        - Screen —— 屏幕的信息

    - BOM对象都是作为window对象的属性保存的，所以可以直接在JS中访问这些对象
```

## 9.1 Navigator

```
navigator.userAgent   返回一个用来描述浏览器信息的字符串

```

```js
let sBrowser
const sUsrAg = navigator.userAgent

// The order matters here, and this may report false positives for unlisted browsers.

if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox"
    // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
} else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
    sBrowser = "Samsung Internet"
    // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
} else if (
    sUsrAg.indexOf("Opera") > -1 ||
    sUsrAg.indexOf("OPR") > -1
) {
    sBrowser = "Opera"
    // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
} else if (sUsrAg.indexOf("Trident") > -1) {
    sBrowser = "Microsoft Internet Explorer"
    // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
} else if (sUsrAg.indexOf("Edge") > -1) {
    sBrowser = "Microsoft Edge (Legacy)"
    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
} else if (sUsrAg.indexOf("Edg") > -1) {
    sBrowser = "Microsoft Edge (Chromium)"
    // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64
} else if (sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome or Chromium"
    // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
} else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari"
    // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
} else {
    sBrowser = "unknown"
}

alert(`You are using: ${sBrowser}`)

```

## 9.2 Location

```
location 表示的是浏览器地址栏的信息
    - 可以直接将location的值修改为一个新的地址，这样会使得网页发生跳转
    - location.assign()  跳转到一个新的地址
    - location.replace() 跳转到一个新的地址（无法通过回退按钮回退）
    - location.reload()  刷新页面，可以传递一个true来强制清缓存刷新
    - location.href        获取当前地址
```

## 9.3 History

```
history.back()
    - 回退按钮
history.forward()
    - 前进按钮
history.go()
    - 可以向前跳转也可以向后跳转
history.length  
```

## 9.4 定时器

```
通过定时器，可以使代码在指定时间后执行
    - 设置定时器的方式有两种：
        setTimeout(参数，参数)
            - 参数：
                1. 回调函数（要执行的代码）
                2. 间隔的时间（毫秒）
            - 关闭定时器
                clearTimeout()

        setInterval(参数，参数) (每间隔一段时间代码就会执行一次)
            - 参数：
                1. 回调函数（要执行的代码）
                2. 间隔的时间（毫秒）
            - 关闭定时器
                clearInterval()
```

### 9.4.1 事件循环(event loop)

```
事件循环（event loop）
    - 函数在每次执行时，都会产生一个执行环境
    - 执行环境负责存储函数执行时产生的一切数据
    - 问题：函数的执行环境要存储到哪里呢？
        - 函数的执行环境存储到了一个叫做调用栈的地方
        - 栈，是一种数据结构，特点 后进先出
    
    调用栈（call stack）
        - 调用栈负责存储函数的执行环境
        - 当一个函数被调用时，它的执行环境会作为一个栈帧
            插入到调用栈的栈顶，函数执行完毕其栈帧会自动从栈中弹出
            
    消息队列
        - 消息队列负责存储将要执行的函数
        - 当我们触发一个事件时，其响应函数并不是直接就添加到调用栈中的
            因为调用栈中有可能会存在一些还没有执行完的代码
        - 事件触发后，JS引擎是将事件响应函数插入到消息队列中排队
```
