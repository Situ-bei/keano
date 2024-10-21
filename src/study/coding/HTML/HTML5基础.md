---
number headings: auto, first-level 1, max 6, 1.1
title: 《HTML5》
category:
- 前端
- HTML
tags:
- HTML
- HTML5
article: false

date: 2024-06-28
order: 2
headerDepth: 4 #文章标题深度
---


# 1 HTML5简介
## 1.1 什么是HTML5
- `HTML5` 是新一代的 `HTML` 标准，2014年10月由万维网联盟（ W3C ）完成标准制定。
- 官网地址：
	- W3C 提供： https://www.w3.org/TR/html/index.html
	- WHATWG 提供：https://whatwg-cn.github.io/html/multipage
- `HTML5` 在狭义上是指新一代的 `HTML` 标准，在广义上是指：整个前端。
## 1.2 HTML5 优势
1. 针对 `JavaScript` ，新增了很多可操作的接口。
2. 新增了一些语义化标签、全局属性。
3. 新增了多媒体标签，可以很好的替代 `flash` 。
4. 更加侧重语义化，对于 `SEO` 更友好。
5. 可移植性好，可以大量应用在移动设备上。
## 1.3 3.HTML5兼容性
支持： Chrome 、 Safari 、 Opera 、 Firefox 等主流浏览器。
IE 浏览器必须是 9 及以上版本才支持 `HTML5` ，且 IE9 仅支持部分 `HTML5` 新特性。
# 2 新增语义化标签
## 2.1 新增布局标签
![[Pasted image 20240628002803.png]]
关于 `article` 和 `section` ：
1. `artical` 里面可以有多个 `section` 。
2. `section` 强调的是分段或分块，如果你想将一块内容分成几段的时候，可使用 `section` 元素。``
3. `article` 比 `section` 更强调独立性，一块内容如果比较独立、比较完整，应该使用 `article` 元素。
## 2.2 新增状态标签
### 2.2.1 meter 标签
- 语义：定义已知范围内的标量测量。也被称为 `gauge` （尺度），双标签，例如：电量、磁盘用量等。
- 常用属性如下：

| 属性      | 值   | 描述    |
| ------- | --- | ----- |
| high    | 数值  | 规定高值  |
| low     | 数值  | 规定低值  |
| max     | 数值  | 规定最大值 |
| min     | 数值  | 规定最小值 |
| optimum | 数值  | 规定最优值 |
| value   | 数值  | 规定当前值 |
### 2.2.2 progress 标签
- 语义：显示某个任务完成的进度的指示器，一般用于表示进度条，双标签，例如：工作完成进度等。
- 常用属性如下：
	```bash
	属性   值      描述
	max    数值   规定目标值。
	value  数值  规定当前值。
	```

## 2.3 新增列表标签
![[Pasted image 20240628003744.png]]

```html
<input type="text" list="mydata">
<datalist id="mydata">
	<option value="周冬雨">周冬雨</option>
	<option value="周杰伦">周杰伦</option>
	<option value="温兆伦">温兆伦</option>
	<option value="马冬梅">马冬梅</option>
</datalist>

<details>
	<summary>如何走上人生巅峰？</summary>
	<p>一步一步走呗</p>
</details>
```

## 2.4 新增文本标签

### 2.4.1 文本注音
![[Pasted image 20240628004024.png]]

```html
<ruby>
	<span>魑魅魍魉</span>
	<rt>chī mèi wǎng liǎng </rt>
</ruby>
```
### 2.4.2 文本标记
![[Pasted image 20240628004124.png]]
> 注意： W3C 建议 `mark` 用于标记搜索结果中的关键字。

# 3 新增表单功能
## 3.1 表单控件新增属性
![[Pasted image 20240628004200.png]]

## 3.2 input 新增属性值
![[Pasted image 20240628004228.png]]

## 3.3 form 标签新增属性
![[Pasted image 20240628004535.png]]
# 4 新增多媒体标签
## 4.1 视频标签

- `<video>` 标签用来定义视频，它是双标签。
![[Pasted image 20240628004702.png]]

## 4.2 音频标签
- `<audio>` 标签用来定义音频，它是双标签。
![[Pasted image 20240628004751.png]]

# 5 新增全局属性（了解）
![[Pasted image 20240628004813.png]]

# 6 HTML5兼容性处理
- 添加元信息，让浏览器处于最优渲染模式。
	```html
	<!--设置IE总是使用最新的文档模式进行渲染-->
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<!--优先使用 webkit ( Chromium ) 内核进行渲染, 针对360等壳浏览器-->
	<meta name="renderer" content="webkit">
	```
- 使用 `html5shiv` 让低版本浏览器认识 `H5` 的语义化标签。
	```html
	<!--[if lt ie 9]>
	<script src="../sources/js/html5shiv.js"></script>
	<![endif]-->
	```

- 扩展
> lt 小于
> lte 小于等于
> gt 大于
> gte 大于等于
> ! 逻辑非
- 示例：
	```html
	<!--[if IE 8]>仅IE8可见<![endif]-->
	<!--[if gt IE 8]>仅IE8以上可见<![endif]—>
	<!--[if lt IE 8]>仅IE8以下可见<![endif]—>
	<!--[if gte IE 8]>IE8及以上可见<![endif]—>
	<!--[if lte IE 8]>IE8及以下可见<![endif]—>
	<!--[if !IE 8]>非IE8的IE可见<![endif]-->
	```