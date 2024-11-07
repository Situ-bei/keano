---
date: 2024-11-01
title: Vue 虚拟列表
category: 
- 前端
- Vue
tag:
- Vue 基础
- 虚拟列表
- 面试
headerDepth: 6
excerpt: <p>JS 中的事件委托</p>
---







下面是一个 Vue 3 的虚拟列表组件实现：

## 1. 虚拟列表组件 (VirtualList.vue)

```vue
<template>
  <div 
    class="virtual-list-container" 
    ref="containerRef" 
    @scroll="handleScroll"
  >
    <!-- 用于撑开滚动条 -->
    <div 
      class="virtual-list-phantom" 
      :style="{ height: totalHeight + 'px' }"
    />
    
    <!-- 实际渲染的列表内容 -->
    <div 
      class="virtual-list-content"
      :style="{ transform: `translateY(${offset}px)` }"
    >
      <div 
        v-for="item in visibleData" 
        :key="item.id"
        class="list-item"
        :style="{ height: itemHeight + 'px' }"
      >
        <slot :item="item">
          <!-- 默认内容 -->
          <div class="item-content">
            <span>{{ item.id }}</span>
            <span>{{ item.text }}</span>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

// 定义 props
const props = defineProps({
  // 列表数据
  listData: {
    type: Array,
    required: true
  },
  // 每项高度
  itemHeight: {
    type: Number,
    default: 60
  },
  // 容器高度
  containerHeight: {
    type: Number,
    default: 400
  }
});

// refs
const containerRef = ref(null); // 容器节点
const scrollTop = ref(0); // 滚动条位置

// 计算属性
const totalHeight = computed(() => props.listData.length * props.itemHeight); // 总高度
const visibleCount = computed(() => Math.ceil(props.containerHeight / props.itemHeight)); // 可见项目数量

// 计算起始索引
const startIndex = computed(() => {
  return Math.floor(scrollTop.value / props.itemHeight);
});

// 计算结束索引
const endIndex = computed(() => {
  return Math.min(startIndex.value + visibleCount.value + 1, props.listData.length);
});

// 获取可见数据
const visibleData = computed(() => {
  return props.listData.slice(startIndex.value, endIndex.value);
});

// 计算偏移量
const offset = computed(() => {
  return startIndex.value * props.itemHeight;
});

// 处理滚动事件
const handleScroll = () => {
  if (containerRef.value) {
    scrollTop.value = containerRef.value.scrollTop;
  }
};

// 生命周期钩子
onMounted(() => {
  if (containerRef.value) {
    containerRef.value.style.height = `${props.containerHeight}px`;
  }
});
</script>

<style scoped>
.virtual-list-container {
  position: relative;
  overflow-y: auto;
}

.virtual-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.virtual-list-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}

.list-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}

.item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
```


## 2. 使用示例 (App.vue)

```vue
<template>
  <div class="app">
    <h2>虚拟列表示例</h2>
    <VirtualList 
      :list-data="listData" 
      :item-height="60"
      :container-height="400"
    >
      <!-- 自定义列表项内容 -->
      <template #default="{ item }">
        <div class="custom-item">
          <div class="avatar">{{ item.id }}</div>
          <div class="info">
            <div class="name">用户 {{ item.id }}</div>
            <div class="desc">{{ item.text }}</div>
          </div>
        </div>
      </template>
    </VirtualList>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VirtualList from './components/VirtualList.vue';

// 生成测试数据
const listData = ref(Array.from({ length: 10000 }, (_, index) => ({
  id: index,
  text: `这是第 ${index} 条数据`
})));
</script>

<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.custom-item {
  display: flex;
  align-items: center;
  padding: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1890ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.info {
  flex: 1;
}

.name {
  font-weight: bold;
}

.desc {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}
</style>
```


## 3. 添加优化功能

```vue
<script setup>
// ... 前面的代码 ...

// 添加缓冲区
const bufferSize = 5;
const visibleData = computed(() => {
  const start = Math.max(0, startIndex.value - bufferSize);
  const end = Math.min(endIndex.value + bufferSize, props.listData.length);
  return props.listData.slice(start, end);
});

// 添加防抖
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
};

const handleScroll = debounce(() => {
  if (containerRef.value) {
    scrollTop.value = containerRef.value.scrollTop;
  }
}, 16);

// 添加滚动到指定索引的方法
const scrollToIndex = (index) => {
  if (containerRef.value) {
    containerRef.value.scrollTop = index * props.itemHeight;
  }
};

// 暴露方法给父组件
defineExpose({
  scrollToIndex
});

// 监听数据变化
watch(() => props.listData, () => {
  scrollTop.value = 0;
}, { deep: true });
</script>
```


## 4. 添加加载状态和空状态

```vue
<template>
  <div class="virtual-list-container" ref="containerRef">
    <!-- 空状态 -->
    <div v-if="listData.length === 0" class="empty-state">
      <slot name="empty">
        <p>暂无数据</p>
      </slot>
    </div>
    
    <!-- 加载状态 -->
    <div v-if="loading" class="loading-state">
      <slot name="loading">
        <p>加载中...</p>
      </slot>
    </div>
    
    <!-- 列表内容 -->
    <template v-else>
      <!-- ... 原有的列表内容 ... -->
    </template>
  </div>
</template>

<script setup>
// 添加 props
const props = defineProps({
  // ... 原有的 props ...
  loading: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
/* ... 原有的样式 ... */

.empty-state,
.loading-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #999;
}
</style>
```


## 5. 使用示例（带分页加载）

```vue
<template>
  <div class="app">
    <VirtualList 
      ref="virtualListRef"
      :list-data="listData" 
      :loading="loading"
      @scroll-end="handleScrollEnd"
    >
      <!-- 自定义空状态 -->
      <template #empty>
        <div class="empty">
          <icon-empty />
          <p>暂无数据</p>
        </div>
      </template>
      
      <!-- 自定义加载状态 -->
      <template #loading>
        <div class="loading">
          <icon-loading />
          <p>加载中...</p>
        </div>
      </template>
      
      <!-- 列表项内容 -->
      <template #default="{ item }">
        <div class="custom-item">
          <!-- ... 列表项内容 ... -->
        </div>
      </template>
    </VirtualList>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VirtualList from './components/VirtualList.vue';

const listData = ref([]);
const loading = ref(false);
const page = ref(1);
const virtualListRef = ref(null);

// 加载数据
const loadData = async () => {
  loading.value = true;
  try {
    const res = await fetchData(page.value);
    listData.value = [...listData.value, ...res.data];
    page.value++;
  } finally {
    loading.value = false;
  }
};

// 处理滚动到底部
const handleScrollEnd = () => {
  if (!loading.value) {
    loadData();
  }
};

onMounted(() => {
  loadData();
});
</script>
```


## 6. 注意事项：

1. **性能优化**：
   - 使用 `transform` 而不是 `top` 做偏移
   - 添加适当的防抖处理
   - 使用合适的缓冲区大小

2. **内存管理**：
   - 及时清理不需要的数据
   - 避免过大的缓冲区

3. **用户体验**：
   - 添加加载状态和空状态
   - 平滑的滚动效果
   - 适当的错误处理

4. **可访问性**：
   - 添加适当的 ARIA 属性
   - 支持键盘导航

这个虚拟列表组件是可复用的，可以根据实际需求进行扩展和优化。