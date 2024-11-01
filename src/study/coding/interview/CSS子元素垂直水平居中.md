--- 
date: 2024-10-31
title: CSS 子元素垂直水平居中
category: 
- 前端
- CSS原理
tag:
- CSS 元素居中
- 面试
headerDepth: 6
excerpt: <p>CSS 子元素垂直水平居中是前端开发中常见的需求，介绍几种实现子元素垂直水平居中的方法。 </p>
---

## 1. Flex 布局（最推荐）
```CSS
/* 父元素 */
.parent {
    display: flex;
    justify-content: center;     /* 水平居中 */
    align-items: center;         /* 垂直居中 */
    height: 100vh;              /* 需要设置高度 */
}

/* 只需水平居中 */
.parent {
    display: flex;
    justify-content: center;
}

/* 只需垂直居中 */
.parent {
    display: flex;
    align-items: center;
    height: 100vh;
}
```

## 2. Grid 布局
```CSS
/* 方法1：place-items */
.parent {
    display: grid;
    place-items: center;        /* align-items + justify-items 简写 */
    height: 100vh;
}

/* 方法2：place-content */
.parent {
    display: grid;
    place-content: center;      /* align-content + justify-content 简写 */
    height: 100vh;
}
```

## 3. Position + Transform（不需要知道子元素尺寸）

::: tabs
@tab 双向居中
```css
.parent {
    position: relative;
    height: 100vh;
}

.child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

@tab 只需水平居中
```css
.child {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
```

@tab 只需垂直居中
```css
.child {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```

:::

### 缺点
1. 模糊渲染问题，当元素宽度为奇数时，可能导致模糊
2. transform 会创建新的图层，可能影响性能，在频繁动画时可能导致性能问题
3. 子元素定位问题，父元素位置发生变化时，子元素位置计算复
4. z-index 层叠问题，创建新的层叠上下文，可能导致层级混乱
5. 文本渲染问题，可能影响文本渲染质量，某些浏览器下文本可能显示模糊
6. 兼容性问题，需要添加浏览器前缀

### 建议使用场景
在现代网页开发中，除非有特殊需求，否则建议优先使用 Flex 或 Grid 布局来实现居中效果，它们提供了更好的可维护性和性能表现。

## 4. Position + Margin（需要知道子元素尺寸）
```css
.parent {
    position: relative;
    height: 100vh;
}

.child {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;              /* 需要固定宽度 */
    height: 100px;             /* 需要固定高度 */
    margin-left: -100px;       /* 负值为宽度的一半 */
    margin-top: -50px;         /* 负值为高度的一半 */
}
```


## 5. Margin Auto（适用于固定宽高）
```css
/* 水平居中 */
.center-horizontal {
    width: 200px;              /* 需要固定宽度 */
    margin: 0 auto;
}

/* 水平垂直居中 */
.center-both {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 200px;              /* 需要固定宽度 */
    height: 100px;             /* 需要固定高度 */
    margin: auto;
}
```

### 缺点
1. 必须要设置父元素的高度以及子元素的宽高
2. 难以适应响应式设计
3. 性能较差，会有内容溢出问题，需要设置 `overflow: hidden `和 `white-space: nowrap;`

### 建议使用场景
✅ 简单的水平居中
✅ 固定尺寸的模态框


## 6. Table 布局（不推荐）
```css
.parent {
    display: table-cell;
    text-align: center;        /* 水平居中 */
    vertical-align: middle;    /* 垂直居中 */
    width: 100vw;
    height: 100vh;
}

.child {
    display: inline-block;
}
```
## 7. 行内块和文本居中


### 1. 水平居中

```css
/* 1. text-align 实现行内元素/行内块居中 */
.parent {
    text-align: center;
    
    /* 作用于行内元素和行内块元素 */
    .inline-element {
        display: inline;
        /* 或 */
        display: inline-block;
    }
}

/* 2. 块级元素内的文本居中 */
.text-center {
    text-align: center;
}

/* 3. 使用 margin auto */
.block-center {
    width: 200px;  /* 需要固定宽度 */
    margin: 0 auto;
}
```


### 2. 垂直居中

```css
/* 1. 单行文本垂直居中 */
.single-line {
    height: 40px;
    line-height: 40px;  /* 与height相等 */
}

/* 2. 多行文本垂直居中 */
.multi-line {
    /* 方法1：使用padding */
    padding: 20px 0;
    
    /* 方法2：使用flex */
    display: flex;
    align-items: center;
    min-height: 100px;
}

/* 3. 表格单元格方式 */
.table-cell {
    display: table-cell;
    vertical-align: middle;
    height: 100px;
}
```

### 3. 同时水平垂直居中

```css
/* 1. Flex方式（推荐） */
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}

/* 2. Grid方式 */
.grid-center {
    display: grid;
    place-items: center;
    height: 200px;
}

/* 3. 表格方式 */
.table-center {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    height: 200px;
}
```

### 4. 特殊情况处理

```css
/* 1. 处理不同字体大小 */
.mixed-text {
    text-align: center;
    
    .large {
        font-size: 24px;
        vertical-align: middle; /* 对齐调整 */
    }
    
    .small {
        font-size: 12px;
        vertical-align: middle;
    }
}

/* 2. 图标与文本对齐 */
.icon-text {
    .icon {
        display: inline-block;
        vertical-align: middle;
    }
    
    .text {
        display: inline-block;
        vertical-align: middle;
    }
}
```

### 5. 响应式处理

```css
/* 响应式文本对齐 */
.responsive-text {
    text-align: center;
    
    @media (max-width: 768px) {
        text-align: left;  /* 小屏幕左对齐 */
    }
    
    /* 处理长文本 */
    .long-text {
        max-width: 100%;
        overflow-wrap: break-word;
    }
}
```


### 6. 常见问题解决

```css
/* 1. 解决行内块元素间隙问题 */
.fix-gap {
    font-size: 0;  /* 移除空白间隙 */
    
    .inline-block {
        display: inline-block;
        font-size: 16px;  /* 恢复字体大小 */
    }
}

/* 2. 处理基线对齐问题 */
.baseline-fix {
    .item {
        display: inline-block;
        vertical-align: top;  /* 或 middle */
    }
}

/* 3. 处理文本换行 */
.wrap-fix {
    white-space: nowrap;  /* 防止换行 */
    /* 或 */
    white-space: normal;  /* 允许换行 */
}
```

### 7. 最佳实践

```css
/* 1. 通用文本居中类 */
.text-center {
    text-align: center;
}

.vertical-center {
    display: flex;
    align-items: center;
}

/* 2. 组合使用 */
.center-all {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;  /* 内部文本也居中 */
}

/* 3. 可维护的方案 */
.content-wrapper {
    --min-height: 100px;
    
    display: flex;
    min-height: var(--min-height);
    align-items: center;
    justify-content: center;
    text-align: center;
    
    /* 处理内容溢出 */
    overflow: hidden;
    
    /* 确保文本可读性 */
    line-height: 1.5;
}
```


