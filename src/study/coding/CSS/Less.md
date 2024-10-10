---
number headings: auto, first-level 1, max 6, contents ^top, 1.1
cssclasses:
  - 前端
tags:
  - CSS
  - Front-end
data: 2024-07-02T02:16:00
---
# 1 注释
## 1.1 单行注释
- 语法：`//` 注释内容
- 快捷键：`ctrl + /`
## 1.2 块注释
语法：`/*` 注释内容 `*/`
快捷键： `Shift + Alt + A`
# 2 运算
- 加、减、乘直接书写计算表达式
- 除法需要添加 `（）` 或 `.`
- 表达式存在多个单位以第一个单位为准

# 3 嵌套
- 作用：快速生成后代选择器
![[Pasted image 20240702021844.png|550]]


- 提示：用 `&` 表示当前选择器，不会生成后代选择器，通常配合伪类或伪元素使用
![[Pasted image 20240702021948.png|550]]
# 4 变量
- 概念：容器，存储数据
	- 作用：存储数据，方便使用和修改
- 语法：
	- 定义变量：@变量名: 数据;
	- 使用变量：CSS属性：@变量名;
	```less
	// 定义变量
	@myColor: pink;
	// 使用变量
	.box {
	color: @myColor;
	}
	a {
	color: @myColor;
	}
	```

# 5 导入
- 作用：导入 `less` 公共样式文件
- 语法：导入: `@import “文件路径”;`
- 提示：如果是 `less` 文件可以省略后缀
	```less
	@import './base.less';
	@import './common';
	```

# 6 导出
- 写法：在 `less` 文件的第一行添加 `// out: 存储URL`
- 提示：文件夹名称后面添加 `/`
	```less
	// out: ./index.css
	// out: ./css/
	```
## 6.1 禁止导出
- 写法：在 `less` 文件第一行添加:  `// out: false`
















