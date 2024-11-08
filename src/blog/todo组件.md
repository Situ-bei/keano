---
date: 2024-11-03
title: TODO组件
category:
- blog
- do it
tag:
- 关于本站
- 布局
excerpt: <p>TODO 组件开发记录</p>
---

## 完成接口组件

## 布局组件


## 拖拽排序(原生 HTML5 拖拽 API)


让我详细解释一下 HTML5 拖拽排序的实现原理：


### 1. 拖拽基础

```vue
<div class="todo_item"
     draggable="true"  // 1. 启用拖拽
     @dragstart="handleDragStart($event, index)"  // 2. 开始拖拽
     @dragover.prevent  // 3. 拖拽经过
     @dragenter.prevent // 4. 进入目标区域
     @drop="handleDrop($event, index)">  // 5. 放置
     ...
</div>
```

**拖拽事件流程：**
1. `draggable="true"` - 使元素可拖拽
2. `dragstart` - 用户开始拖动元素时触发
3. `dragover` - 被拖动元素在目标元素上方移动时触发
4. `dragenter` - 被拖动元素进入目标元素时触发
5. `drop` - 在目标元素上释放鼠标时触发

### 2. 事件处理

```typescript
// 记录被拖拽元素的索引
const dragIndex = ref<number>(-1)

// 开始拖拽
const handleDragStart = (e: DragEvent, index: number) => {
    dragIndex.value = index  // 保存被拖拽元素的索引
    if (e.target instanceof HTMLElement) {
        e.target.style.opacity = '0.5'  // 视觉反馈
    }
}

// 处理放置
const handleDrop = (e: DragEvent, index: number) => {
    e.preventDefault()
    
    // 1. 获取被拖拽的元素
    const draggedTodo = todos.value[dragIndex.value]
    
    // 2. 从原位置删除
    todos.value.splice(dragIndex.value, 1)
    
    // 3. 插入到新位置
    todos.value.splice(index, 0, draggedTodo)
    
    // 4. 重置样式
    if (e.target instanceof HTMLElement) {
        e.target.style.opacity = '1'
    }
    
    // 5. 保存更新后的顺序
    todoStorage.save(todos.value)
}

// 拖拽结束
const handleDragEnd = (e: DragEvent) => {
    if (e.target instanceof HTMLElement) {
        e.target.style.opacity = '1'  // 恢复透明度
    }
}
```

### 3. 防止默认行为

```vue
@dragover.prevent
@dragenter.prevent
```
- 默认情况下，浏览器不允许将元素放置到其他元素上
- 需要阻止 `dragover` 和 `dragenter` 的默认行为才能实现放置
- `dragenter` 和 `dragover` 事件会在元素上方持续触发，直到拖动元素离开元素为止


### 4. 样式处理
```scss
.todo_item {
    cursor: move;  // 鼠标变为移动图标
    user-select: none;  // 防止拖拽时选中文本
    
    // 添加过渡动画
    transition: transform 0.2s ease, opacity 0.2s ease;
    
    &:hover {
        transform: translateY(-2px);  // 悬停效果
    }
    
    &:active {
        transform: scale(1.02);  // 拖动时放大效果
    }
}
```

### 5. 数据更新原理
```typescript
// 1. 记录原始位置
dragIndex.value = index

// 2. 数组重排
const draggedTodo = todos.value[dragIndex.value]  // 获取元素
todos.value.splice(dragIndex.value, 1)  // 删除原位置
todos.value.splice(index, 0, draggedTodo)  // 插入新位置
```

这是一个数组重排的过程：
1. 先保存被拖拽元素
2. 从原位置删除
3. 插入到新位置

### 6. 生命周期处理
```typescript
onMounted(() => {
    // 添加全局拖拽结束监听
    document.addEventListener('dragend', handleDragEnd)
})

onUnmounted(() => {
    // 移除监听，防止内存泄漏
    document.removeEventListener('dragend', handleDragEnd)
})
```

### 7. 数据持久化
```typescript
// 保存到本地存储
todoStorage.save(todos.value)
```

整个过程的数据流：
1. 用户开始拖拽 → 记录原始位置
2. 拖动过程中 → 显示视觉反馈
3. 放置到新位置 → 更新数组顺序
4. 更新完成 → 保存到本地存储
5. 拖拽结束 → 重置视觉效果

这样实现的拖拽排序既有良好的用户体验，又能保证数据的可靠性。

