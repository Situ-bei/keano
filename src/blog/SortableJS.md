---
date: 2024-11-08
title: SortableJS
category:
  - blog
  - do it
tag:
  - 关于本站
  - SortableJS
  - 拖拽排序
excerpt: <p>SortableJS 指南</p>
---

## 1. 安装

- 官网：[SortableJS](https://sortablejs.com/)

```bash
npm install sortablejs --save
```

## 2. 使用

### 2.1 结构

```html
<!-- 容器 -->
<div class="todo_list">
  <!-- 拖拽容器 -->
  <div ref="todoListRef" class="sortable-list">
    <!-- 排序内容 -->
    <div class="todo_item" v-for="(todo, index) in todos" :key="todo.id">
      <!-- 包裹容器 -->
      <div class="todo_item_inner">
        <span class="todo_item_title">{{ todo.title }}</span>
      </div>
    </div>
  </div>
</div>
```

- 包裹容器可以额外添加,也可以直接使用拖拽容器的下一层容器
  如 `todo_item`

### 2.2 初始化&逻辑

```javascript
import Sortable from "sortablejs";

// 用于引用DOM元素的ref
const todoListRef = (ref < HTMLElement) | (null > null);
// HTMLElement 是DOM元素类型
// null 表示初始值为空

// 用于引用Sortable实例
let sortableInstance: Sortable | null = null;
// Sortable 是SortableJS的类型
// null 表示初始值为空

onMounted(() => {
  if (todoListRef.value) {
    sortableInstance = new Sortable(todoListRef.value, {
      // 基础配置
      animation: 150, // 动画时间
      delay: 500, // 长按延迟时间
      delayOnTouchOnly: true, // 仅在触摸时启用延迟
      touchStartThreshold: 5, // 触摸移动多少像素才开始拖动
      sort: true, // 是否启用排序

      // 拖动时的CSS类名
      dragClass: "sortable-drag",
      ghostClass: "sortable-ghost",
      chosenClass: "sortable-chosen",

      // 限制拖动方向
      direction: "vertical", // 只允许垂直方向拖动

      // 开始拖动时的回调
      onStart: (evt: any) => {
        // 触觉反馈（震动）- 仅支持的设备
        if (navigator.vibrate) {
          navigator.vibrate(50); // 震动50毫秒
        }
      },

      // 拖动结束时的回调
      onEnd: (evt: { oldIndex: any, newIndex: any }) => {
        // 获取新的排序
        const { oldIndex, newIndex } = evt;
        if (
          oldIndex !== newIndex &&
          oldIndex !== undefined &&
          newIndex !== undefined
        ) {
          // 1. 从旧位置删除项目
          const item = todos.value.splice(oldIndex, 1)[0];
          // 2. 将项目插入新位置
          todos.value.splice(newIndex, 0, item);
          // 3. 保存更新后的顺序
          todoStorage.save(todos.value);
        }
      },
    });
  }
});
```

### 2.3 **实现逻辑详解**




让我用一个具体例子来解释这个数组重排序的原理：

```typescript:src/blog/SortableJS.md
// 假设我们有一个数组
todos.value = ['A', 'B', 'C', 'D', 'E']

// 例如：要把 'B' (index=1) 移动到 'D' (index=3) 的位置

// 1. splice(oldIndex, 1)[0] 从旧位置删除并获取元素
const item = todos.value.splice(1, 1)[0]  // 删除 'B'
// 此时数组变成: ['A', 'C', 'D', 'E']
// item = 'B'

// 2. splice(newIndex, 0, item) 在新位置插入元素
todos.value.splice(3, 0, item)  // 在index=3处插入 'B'
// 最终数组: ['A', 'C', 'D', 'B', 'E']
```


图解过程：
```
初始:     [A, B, C, D, E]
          ↑  ↑
删除B:     [A, C, D, E]
             ↑  ↑
插入B:     [A, C, D, B, E]
```


关键点：
1. `splice(oldIndex, 1)[0]`
   - 第一个参数：开始位置
   - 第二个参数：删除数量
   - `[0]`：获取被删除元素的数组中的第一个元素

2. `splice(newIndex, 0, item)`
   - 第一个参数：插入位置
   - 第二个参数：删除数量（0表示不删除）
   - 第三个参数：要插入的元素

这种方法是数组重排序最常用和高效的方式之一。


### 2.4 逻辑优化

```javascript
import { debounce } from "../../utils/debounce"; // 引入防抖函数

debounce(async () => {
  try {
    await todoStorage.save(todos.value);
    // 可选：成功提示
    console.log("保存成功");
  } catch (error) {
    // 错误处理
    console.error("保存失败:", error);
    // 可以添加重试逻辑
  }
}, 1000);
```

1. 添加防抖，避免频繁保存
2. 增加错误处理
3. 使用异步操作
4. 可以添加保存状态反馈

## 3. 详细配置指南

下面是 SortableJS 的详细配置选项：

```typescript
new Sortable(element, {
    // 基础配置
    group: {
        name: 'shared',    // 分组名称
        pull: true,        // 是否允许拖出
        put: true         // 是否允许放入
    },
    sort: true,           // 是否允许排序
    disabled: false,      // 是否禁用排序
    
    // 动画与延迟
    animation: 150,       // 动画时间
    delay: 0,            // 拖动延迟(ms)
    delayOnTouchOnly: false,  // 仅触摸时延迟
    touchStartThreshold: 0,   // 触摸阈值
    
    // 拖动限制
    direction: 'vertical',    // 拖动方向: 'vertical', 'horizontal'
    draggable: '.item',      // 可拖动元素选择器
    handle: '.handle',       // 拖动把手选择器
    filter: '.ignore',       // 不可拖动元素选择器
    preventOnFilter: true,   // 阻止被过滤元素的默认事件
    
    // 样式类名
    ghostClass: 'sortable-ghost',    // 占位元素类名
    chosenClass: 'sortable-chosen',  // 选中元素类名
    dragClass: 'sortable-drag',      // 拖动中元素类名
    
    // 滚动设置
    scroll: true,           // 是否允许滚动
    scrollSensitivity: 30,  // 滚动敏感度
    scrollSpeed: 10,        // 滚动速度
    bubbleScroll: true,     // 是否冒泡滚动
    
    // 事件回调
    onStart: (evt) => {
        // 开始拖动
        const { item, from, oldIndex } = evt;
    },
    
    onChange: (evt) => {
        // 元素更改位置
        const { item, from, to, oldIndex, newIndex } = evt;
    },
    
    onEnd: (evt) => {
        // 拖动结束
        const { item, from, to, oldIndex, newIndex } = evt;
    },
    
    onAdd: (evt) => {
        // 从另一个列表添加元素
        const { item, from, to, oldIndex, newIndex } = evt;
    },
    
    onUpdate: (evt) => {
        // 列表内元素更新
        const { item, from, to, oldIndex, newIndex } = evt;
    },
    
    onSort: (evt) => {
        // 排序发生变化
        const { item, from, to, oldIndex, newIndex } = evt;
    },
    
    onRemove: (evt) => {
        // 元素被移除到另一个列表
        const { item, from, to, oldIndex, newIndex } = evt;
    },
    
    onFilter: (evt) => {
        // 试图拖动被过滤的元素
        const { item, from } = evt;
    },
    
    onMove: (evt, originalEvent) => {
        // 移动元素时
        // 返回false阻止移动
        return true;
    },
    
    // 高级配置
    fallbackOnBody: false,      // 拖动时是否降级到body
    forceFallback: false,       // 强制使用降级模式
    fallbackClass: 'sortable-fallback',  // 降级模式下的类名
    
    // 多列表配置
    swapThreshold: 1,           // 交换阈值
    invertSwap: false,          // 反转交换
    invertedSwapThreshold: 1,   // 反转交换阈值
    
    // 存储配置
    store: {
        get: (sortable) => {
            // 获取顺序
        },
        set: (sortable) => {
            // 保存顺序
        }
    },
    
    // 其他选项
    setData: (dataTransfer, dragEl) => {
        // 设置数据传输
    },
    
    // 自定义选项
    onChoose: (evt) => {
        // 元素被选中
    },
    onUnchoose: (evt) => {
        // 取消选中
    },
    
    // 性能优化
    forceFallback: false,       // 强制使用回退处理
    fallbackTolerance: 0,       // 回退容差
    dragoverBubble: false,      // 是否冒泡dragover事件
});
```

常用场景示例：

1. **基础拖拽排序**
```typescript
new Sortable(el, {
    animation: 150,
    onEnd: ({oldIndex, newIndex}) => {
        // 处理排序逻辑
    }
});
```

2. **多列表拖拽**
```typescript
new Sortable(el, {
    group: {
        name: 'shared',
        pull: true,
        put: true
    },
    animation: 150
});
```

3. **带把手的拖拽**
```typescript
new Sortable(el, {
    handle: '.my-handle',
    animation: 150
});
```

4. **移动端优化**
```typescript
new Sortable(el, {
    delay: 300,
    delayOnTouchOnly: true,
    touchStartThreshold: 5,
    animation: 150
});
```

5. **自定义存储**
```typescript
new Sortable(el, {
    store: {
        get: (sortable) => {
            const order = localStorage.getItem(sortable.options.group.name);
            return order ? order.split('|') : [];
        },
        set: (sortable) => {
            const order = sortable.toArray();
            localStorage.setItem(sortable.options.group.name, order.join('|'));
        }
    }
});
```

这些配置可以根据具体需求组合使用，创建出功能丰富的拖拽排序功能。
