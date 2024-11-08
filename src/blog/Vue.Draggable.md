---
date: 2024-11-08
title: Vue.Draggable
category:
- blog
- do it
tag:
- 关于本站
- Vue.Draggable
- 拖拽排序
excerpt: <p>Vue.Draggable 指南</p>
---

## 1. 安装

::: code-tabs
@tab npm
```bash
npm install vuedraggable@next
```
@tab yarn
```bash
yarn add vuedraggable@next
```
:::

## 2. 使用
### 2.1 结构和配置
```vue
<template>
    <!-- 其他代码保持不变 -->
    
    <!-- 将原来的拖拽列表替换为 draggable 组件 -->
    <draggable
        v-model="todos"  // 双向绑定待办事项数组
        :animation="150"  // 动画持续时间（毫秒）
        item-key="id"  // 每项的唯一标识字段
        class="sortable-list"  // 列表样式
        handle=".todo_item_inner"  // 拖拽把手选择器
        ghost-class="sortable-ghost"  // 拖动时原位置的占位元素样式
        chosen-class="sortable-chosen"  // 当元素被选中准备拖动时的样式
        drag-class="sortable-drag"  // 正在被拖动的元素的样式
        :delay="500"  // 开始拖动的延迟（毫秒）
        :delay-on-touch-only="true"  // 仅在触摸设备上延迟
        :touch-start-threshold="5"  // 触摸开始阈值
        direction="vertical"  // 拖动方向限制
        @start="onDragStart"  // 开始拖动事件
        @end="onDragEnd">  // 开始拖动事件
        <template #item="{ element: todo }">
            <div class="todo_item">
                <!-- 拖拽把手容器 -->
                <div class="todo_item_inner">
                    <!-- 原来的 todo item 内容 -->
                    <!-- ... -->
                </div>
            </div>
        </template>
    </draggable>
    
    <!-- 其他代码保持不变 -->
</template>
```
#### 主要功能点解析

1. **数据绑定**
```vue
v-model="todos"
item-key="id"
```
- `v-model` 实现数组的双向绑定
- `item-key` 每项的唯一标识字段


2. **拖拽控制**
```vue
handle=".todo_item_inner"
direction="vertical"
```
- `handle` 拖拽把手选择器
- `direction` 拖动方向限制


3. **视觉反馈**
```vue
ghost-class="sortable-ghost"
chosen-class="sortable-chosen"
drag-class="sortable-drag"
:animation="150"
```
- `ghost-class` 拖动时原位置的占位元素样式
- `chosen-class` 当元素被选中准备拖动时的样式
- `drag-class` 正在被拖动的元素的样式
- `animation` 动画持续时间（毫秒）


4. **触摸优化**
```vue
:delay="500"
:delay-on-touch-only="true"
:touch-start-threshold="5"
```
- `delay` 开始拖动的延迟（毫秒）
- `delay-on-touch-only` 仅在触摸设备上延迟
- `touch-start-threshold` 触摸开始阈值

- 防止意外触发拖动
- 优化触摸设备体验

5. **项目模板**
```vue
<template #item="{ element: todo }">
    <!-- 使用作用域插槽渲染每一项 -->
</template>
```

- 使用作用域插槽定制每项的渲染
- `element` 是当前项的数据

6. **事件处理**
```vue
@start="onDragStart"
@end="onDragEnd"
```
- 监听拖动开始和结束事件
- 可以在这些事件中添加自定义逻辑


工作流程：
1. 用户触摸/点击拖动把手
2. 延迟后开始拖动
3. 显示拖动状态和占位元素
4. 用户移动元素
5. 放下元素时自动更新数组顺序
6. 触发 end 事件，可以保存新顺序
这种实现比原生 Sortable.js 更符合 Vue 的开发风格，且更容易维护。

### 2.2 逻辑处理
```ts
import draggable from 'vuedraggable'  // 引入 vuedraggable
import { debounce } from '../../utils/debounce'

/ 拖拽事件处理
const onDragStart = (evt: any) => {
    // 触觉反馈
    if (navigator.vibrate) {
        navigator.vibrate(50)
    }
}

const onDragEnd = debounce(async (evt: any) => {
    try {
        await todoStorage.save(todos.value)
        console.log('保存成功')
    } catch (error) {
        console.error('保存失败:', error)
    }
}, 1000)

```

## 3. Vue.Draggable 详细指南


Vue.Draggable 的详细使用指南：

1. **基础使用**
```vue
<template>
    <draggable 
        v-model="list"
        :animation="200"
        item-key="id">
        <template #item="{element}">
            <div class="item">
                {{ element.name }}
            </div>
        </template>
    </draggable>
</template>

<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'

const list = ref([
    { id: 1, name: '项目1' },
    { id: 2, name: '项目2' },
    { id: 3, name: '项目3' }
])
</script>
```

2. **完整配置示例**
```vue
<template>
    <draggable
        v-model="list"
        :animation="200"
        item-key="id"
        :group="group"
        :disabled="disabled"
        :sort="true"
        ghost-class="ghost"
        chosen-class="chosen"
        drag-class="drag"
        handle=".handle"
        @start="onStart"
        @end="onEnd"
        @change="onChange">
        <template #item="{element}">
            <div class="item">
                <span class="handle">⋮</span>
                {{ element.name }}
            </div>
        </template>
    </draggable>
</template>

<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'

const list = ref([/* 数据 */])
const disabled = ref(false)

// 分组配置
const group = {
    name: 'shared',
    pull: true,
    put: true
}

// 事件处理
const onStart = (evt) => {
    console.log('开始拖动', evt)
}

const onEnd = (evt) => {
    console.log('结束拖动', evt)
}

const onChange = (evt) => {
    console.log('列表变化', evt)
}
</script>

<style scoped>
.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}

.chosen {
    background: #f0f0f0;
}

.drag {
    opacity: 0.8;
}

.handle {
    cursor: move;
    margin-right: 10px;
}
</style>
```

3. **多列表拖拽**
```vue
<template>
    <div class="lists-container">
        <draggable
            v-model="list1"
            :group="{ name: 'shared', pull: true, put: true }"
            item-key="id"
            class="list">
            <template #item="{element}">
                <div class="item">{{ element.name }}</div>
            </template>
        </draggable>

        <draggable
            v-model="list2"
            :group="{ name: 'shared', pull: true, put: true }"
            item-key="id"
            class="list">
            <template #item="{element}">
                <div class="item">{{ element.name }}</div>
            </template>
        </draggable>
    </div>
</template>
```

4. **克隆模式**
```vue
<template>
    <draggable
        v-model="list"
        :group="{ name: 'clone', pull: 'clone', put: false }"
        :clone="cloneItem"
        item-key="id">
        <template #item="{element}">
            <div class="item">{{ element.name }}</div>
        </template>
    </draggable>
</template>

<script setup>
const cloneItem = (item) => {
    return {
        ...item,
        id: Date.now(), // 生成新ID
    }
}
</script>
```

5. **带过渡动画**
```vue
<template>
    <draggable v-model="list" item-key="id">
        <template #item="{element}">
            <transition name="fade">
                <div class="item">{{ element.name }}</div>
            </transition>
        </template>
    </draggable>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
```

6. **主要属性说明**
```typescript
interface DraggableProps {
    modelValue: any[]       // v-model绑定值
    itemKey: string        // 项目唯一键名
    animation?: number     // 动画时长
    group?: object        // 分组配置
    disabled?: boolean    // 是否禁用
    sort?: boolean       // 是否允许排序
    ghostClass?: string  // 占位元素类名
    chosenClass?: string // 选中元素类名
    dragClass?: string   // 拖动中元素类名
    handle?: string      // 拖动把手选择器
    filter?: string      // 过滤器
    draggable?: string   // 可拖动元素选择器
    clone?: Function     // 克隆函数
}
```

7. **事件处理**
```vue
<script setup>
const events = {
    onStart: (evt) => {
        // 开始拖动
        const { oldIndex, newIndex, item } = evt
    },
    onEnd: (evt) => {
        // 结束拖动
        const { oldIndex, newIndex, item } = evt
    },
    onChange: (evt) => {
        // 列表变化
        // added: 新增的元素
        // removed: 移除的元素
        // moved: 移动的元素
        const { added, removed, moved } = evt
    },
    onMove: (evt) => {
        // 移动时
        // 返回false阻止移动
        return true
    }
}
</script>
```

8. **性能优化**
```vue
<template>
    <draggable
        v-model="list"
        item-key="id"
        :move="checkMove"
        :force-fallback="true">
        <template #item="{element}">
            <div class="item">{{ element.name }}</div>
        </template>
    </draggable>
</template>

<script setup>
const checkMove = (evt) => {
    // 自定义移动逻辑
    return true
}
</script>
```

这些配置和功能可以根据实际需求组合使用，创建出功能丰富的拖拽排序界面。记住要处理好性能问题，特别是在列表项较多时。