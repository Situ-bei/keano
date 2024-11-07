---
date: 2024-11-01
title: JS 的DOM 节点所有操作
category: 
- 前端
- JS原理
tag:
- JS 基础
- DOM 节点
- 面试
headerDepth: 6
excerpt: <p>JS 的DOM 节点所有操作</p>
---



让我详细解释 DOM 节点的各种操作方法：

## 1. 创建节点

```javascript
// 1. 创建元素节点
const div = document.createElement('div');
const span = document.createElement('span');

// 2. 创建文本节点
const text = document.createTextNode('Hello World');

// 3. 创建注释节点
const comment = document.createComment('这是一个注释');

// 4. 创建文档片段
const fragment = document.createDocumentFragment();

// 5. 克隆节点
const clone = div.cloneNode(true); // true表示深克隆
```

## 2. 添加节点

```javascript
// 1. appendChild - 在末尾添加
parent.appendChild(child);

// 2. insertBefore - 在指定节点前添加
parent.insertBefore(newNode, referenceNode);

// 3. insertAdjacentHTML - 在指定位置插入HTML
element.insertAdjacentHTML('beforebegin', '<div>Before</div>');
element.insertAdjacentHTML('afterbegin', '<div>First child</div>');
element.insertAdjacentHTML('beforeend', '<div>Last child</div>');
element.insertAdjacentHTML('afterend', '<div>After</div>');

// 4. 使用文档片段添加多个节点
const fragment = document.createDocumentFragment();
['A', 'B', 'C'].forEach(text => {
    const div = document.createElement('div');
    div.textContent = text;
    fragment.appendChild(div);
});
parent.appendChild(fragment);
```

## 3. 移除节点

```javascript
// 1. removeChild - 移除子节点
parent.removeChild(child);

// 2. remove - 直接移除节点
element.remove();

// 3. 移除所有子节点
function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// 4. 替换节点
parent.replaceChild(newChild, oldChild);
```

## 4. 移动节点

```javascript
// 1. 移动到另一个父节点
newParent.appendChild(existingNode); // 自动从原位置移除

// 2. 移动到同级的其他位置
parent.insertBefore(element, parent.firstChild); // 移动到第一个
parent.insertBefore(element, null); // 移动到最后

// 3. 交换两个节点位置
function swapNodes(node1, node2) {
    const temp = document.createElement('div');
    node1.parentNode.insertBefore(temp, node1);
    node2.parentNode.insertBefore(node1, node2);
    temp.parentNode.insertBefore(node2, temp);
    temp.remove();
}
```

## 5. 复制节点

```javascript
// 1. 浅复制（只复制节点本身）
const shallowCopy = node.cloneNode(false);

// 2. 深复制（复制节点及其所有子节点）
const deepCopy = node.cloneNode(true);

// 3. 自定义复制
function customClone(node, callback) {
    const clone = node.cloneNode(false);
    if (callback) {
        callback(clone);
    }
    if (node.hasChildNodes()) {
        node.childNodes.forEach(child => {
            clone.appendChild(customClone(child, callback));
        });
    }
    return clone;
}
```

## 6. 查找节点

```javascript
// 1. 通过ID查找
const elementById = document.getElementById('myId');

// 2. 通过类名查找
const elementsByClass = document.getElementsByClassName('myClass');

// 3. 通过标签名查找
const elementsByTag = document.getElementsByTagName('div');

// 4. 使用CSS选择器查找
const elementByQuery = document.querySelector('.class #id');
const elementsByQuery = document.querySelectorAll('.class');

// 5. 查找父节点
const parent = element.parentNode;
const parentElement = element.parentElement;

// 6. 查找子节点
const children = element.children;
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

// 7. 查找兄弟节点
const nextSibling = element.nextElementSibling;
const previousSibling = element.previousElementSibling;
```

## 7. 实用工具函数

```javascript
// 1. 获取元素的所有父节点
function getParents(element) {
    const parents = [];
    let current = element.parentNode;
    while (current && current !== document) {
        parents.push(current);
        current = current.parentNode;
    }
    return parents;
}

// 2. 获取最近的指定父节点
function closest(element, selector) {
    let current = element;
    while (current && current !== document) {
        if (current.matches(selector)) {
            return current;
        }
        current = current.parentNode;
    }
    return null;
}

// 3. 判断是否包含子节点
function contains(parent, child) {
    return parent !== child && parent.contains(child);
}
```

## 8. 性能优化

```javascript
// 1. 使用文档片段批量操作
function batchAppend(parent, children) {
    const fragment = document.createDocumentFragment();
    children.forEach(child => fragment.appendChild(child));
    parent.appendChild(fragment);
}

// 2. 缓存频繁使用的节点
const cache = new Map();
function getOrCreateElement(id) {
    if (!cache.has(id)) {
        cache.set(id, document.getElementById(id));
    }
    return cache.get(id);
}

// 3. 优化重排和重绘
function optimizedUpdates(element) {
    // 缓存布局属性
    const cssText = element.style.cssText;
    // 批量修改
    element.style.cssText = `
        position: absolute;
        top: 100px;
        left: 100px;
        width: 100px;
        height: 100px;
        ${cssText}
    `;
}
```

这些方法涵盖了 DOM 操作的主要场景，记住：
1. 优先使用现代 API
2. 注意性能优化
3. 考虑浏览器兼容性
4. 适当使用工具函数
5. 注意内存泄漏