<template>
    <!-- 容器 -->
    <div class="todo-container">
        <!-- 头部 -->
        <div class="todo-header">
            <button type="button" class="todo_header_btn" @click="completeAll">
                全部完成
                <FontIcon icon="icon-quanbuwancheng1" class="all_complete_icon" />
            </button>
            <button type="button" class="todo_header_btn" @click="dialogVisible = true">
                <FontIcon icon="icon-xinzeng" /> 新增计划
            </button>
        </div>
        <!-- todobar -->
        <div class="todo_navbar">
            <!-- 统计 -->
            <div class="stat">
                <div class="stat_item">
                    <div class="stat_label">
                        <FontIcon icon="icon-todo-copy" /> 总计划
                    </div>
                    <div class="stat_value">{{ totalCount }}</div>
                </div>
                <div class="stat_item">
                    <div class="stat_label">
                        <FontIcon icon="icon-yiwancheng" /> 已完成
                    </div>
                    <div class="stat_value">{{ completedCount }}</div>
                </div>
                <div class="stat_item">
                    <div class="stat_label">
                        <FontIcon icon="icon-weiwancheng" /> 未完成
                    </div>
                    <div class="stat_value">{{ remainingCount }}</div>
                </div>
            </div>
            <!-- 进度条 -->
            <div class="progress_bar">
                <div class="progress" :style="{ width: `${progress}%` }">
                    <span class="progress_text">{{ progress }}%</span>
                </div>
            </div>
        </div>
        <!-- 计划列表 -->
        <div class="todo_list">
            <div ref="todoListRef" class="sortable-list">
                <div
                        v-for="(todo, index) in todos" 
                        :key="todo.id" 
                        class="todo_item" 
                    >

                        <div class="todo_item_inner">
                            <!-- 左侧 -->
                            <div class="todo_item_top">
                                <!-- 完成按钮 -->
                                <span :class="todo.completed ? 'circle_check' : 'circle'" @click="completeTodo(todo)">
                                </span>

                                <!--  -->
                                <div class="content_wrapper">

                                    <!-- 标题 -->
                                    <span class="title">
                                        <Tooltip :text="todo.title" :lines="1" :font-weight="'bold'">
                                            <template #reference>
                                                {{ todo.title }}
                                            </template>
                                        </Tooltip>
                                    </span>

                                    <!-- 重要程度 -->
                                    <el-tag type="danger" v-if="todo.priority === 'high'">
                                        重要
                                    </el-tag>
                                </div>

                                <!-- 右侧delect按钮 -->
                                <div class="delect">

                                    <el-button type="danger" size="small" @click="deleteTodo(todo)">
                                        <FontIcon icon="icon-shanchu" class="delete_icon" />删除
                                    </el-button>

                                </div>
                            </div>

                            <!-- 内容 -->
                            <div class="todo-item-content" @dblclick="editTodo(todo)">
                                <div class="script_tags">

                                    <div class="tags">
                                        <el-tag class="tag" v-for="tag in todo.tags" :key="tag">{{ tag }}</el-tag>
                                    </div>

                                    <!-- 内容 -->
                                    <Tooltip :text="todo.content" :lines="5" :font-size="'0.85rem'" :width="'100%'">
                                        <template #reference>
                                            {{ todo.content }}
                                        </template>
                                    </Tooltip>

                                </div>

                                <div class="todo-item-time">
                                    <div>
                                        开始：<span>{{ formatDate(todo.startTime) }}</span>
                                    </div>
                                    <div>
                                        结束：<span>{{ formatDate(todo.endTime) }}</span>
                                    </div>
                                    <div>
                                        预计耗时：<span>{{ dayjs(todo.endTime).diff(dayjs(todo.startTime), 'hour') }}小时</span>
                                    </div>
                                    <div>
                                        <span>{{ getTimeStatus(todo) }}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>

    <!-- 新增/编辑弹窗 -->
    <el-config-provider :locale="zhCn">
        <div class="dailog">
            <el-dialog :title="editingTodo ? '编辑计划' : '新增计划'" v-model="dialogVisible" :center="true">
                <el-form :model="todoForm" label-width="100px">
                    <el-form-item label="待办事项">
                        <el-input v-model="todoForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="开始时间">
                        <el-date-picker v-model="todoForm.startTime" type="datetime"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="结束时间">
                        <el-date-picker v-model="todoForm.endTime" type="datetime"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="重要程度">
                        <el-select v-model="todoForm.priority">
                            <el-option label="高" value="high"></el-option>
                            <el-option label="中" value="medium"></el-option>
                            <el-option label="低" value="low"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-select v-model="todoForm.status">
                            <el-option label="待完成" value="pending"></el-option>
                            <el-option label="进行中" value="in-progress"></el-option>
                            <el-option label="已完成" value="completed"></el-option>
                            <template #empty></template>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="标签">
                        <el-select v-model="todoForm.tags" multiple>
                            <el-option label="工作" value="work"></el-option>
                            <el-option label="学习" value="study"></el-option>
                            <el-option label="生活" value="life"></el-option>
                        </el-select>
                    </el-form-item>
                    <!-- <el-form-item label="预计完成时间">
                    <el-input v-model="todoForm.estimatedTime"></el-input>
                </el-form-item> -->
                    <el-form-item label="详细内容">
                        <el-input type="textarea" v-model="todoForm.content" :rows='4'></el-input>
                    </el-form-item>
                </el-form>
                <template #footer>
                    <el-button @click="cancelTodo">取消</el-button>
                    <el-button type="primary" @click="saveTodo">确定</el-button>
                </template>
            </el-dialog>
        </div>
    </el-config-provider>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted, nextTick, onUnmounted } from 'vue'
import dayjs from 'dayjs' // 引入dayjs
import { Todo } from '../../data/Type' // todo数据类型

import { ElConfigProvider } from 'element-plus' // 引入element-plus中文配置
import zhCn from 'element-plus/es/locale/lang/zh-cn' // 引入中文

import Tooltip from '../mycomponents/tooltip.vue' // 引入tooltip组件

import { useConfirm } from '../mycomponents/confirmDailog/useConfirm' // 引入确认弹窗组件

import Sortable from 'sortablejs'; // 引入拖拽库
import { debounce } from '../../utils/debounce'// 引入防抖函数

const confirmDialog = useConfirm()
// 数据持久化相关
// 添加存储相关的常量和工具函数
const STORAGE_KEY = 'localTodos'
const todoStorage = {
    // 获取数据
    fetch(): Todo[] {
        try {
            const savedTodos = localStorage.getItem(STORAGE_KEY)
            if (!savedTodos) return []

            // 转换日期
            return JSON.parse(savedTodos).map((todo: Todo) => ({
                ...todo,
                startTime: todo.startTime ? new Date(todo.startTime) : undefined,
                endTime: todo.endTime ? new Date(todo.endTime) : undefined,
                completedTime: todo.completedTime ? new Date(todo.completedTime) : undefined
            }))
        } catch (e) {
            console.error('Error loading todos:', e)
            return []
        }
    },

    // 保存数据
    save(todos: Todo[]) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
        } catch (e) {
            console.error('Error saving todos:', e)
        }
    }
}
// 定义todos数据 
// <Todo[]> - 泛型类型声明，表示这是一个 Todo 类型的数组
const todos = ref<Todo[]>(todoStorage.fetch())
const dialogVisible = ref(false) // 定义dialogVisible数据
const editingTodo = ref<Todo | null>(null) // 定义editingTodo数据


// todoBar
// 总计划数
const totalCount = computed(() => todos.value.length)
// 已完成数
const completedCount = computed(() => todos.value.filter(todo => todo.completed).length)
// 未完成数
const remainingCount = computed(() => totalCount.value - completedCount.value)
// 进度
const progress = computed(() => {
    // 如果总任务数为0，返回0%避免除以0的错误
    if (totalCount.value === 0) return 0
    // 计算完成百分比:
    // (已完成数量 / 总数量) * 100 得到百分比
    // Math.round 四舍五入到整数
    return Math.round((completedCount.value / totalCount.value) * 100)
})

// 定义todoForm数据
const todoForm = reactive({
    title: '',
    startTime: '',
    endTime: '',
    priority: 'medium',
    status: 'pending',
    tags: [],
    content: '',
})

// 重置表单
const resetForm = () => {
    todoForm.title = ''
    todoForm.startTime = ''
    todoForm.endTime = ''
    todoForm.priority = 'medium'
    todoForm.status = 'pending'
    todoForm.tags = []
    todoForm.content = ''
}

// 保存todo
const saveTodo = () => {
    if (editingTodo.value) {
        // 编辑模式
        const index = todos.value.findIndex(t => t.id === editingTodo.value!.id)
        todos.value[index] = {
            ...editingTodo.value,
            ...todoForm,
            startTime: new Date(todoForm.startTime),
            endTime: new Date(todoForm.endTime)
        }
    } else {
        // 新增模式
        todos.value.push({
            id: Date.now(),
            ...todoForm,
            startTime: new Date(todoForm.startTime),
            endTime: new Date(todoForm.endTime),
            completed: false
        })
    }
    dialogVisible.value = false
    resetForm()
    editingTodo.value = null
    // 手动触发保存
    todoStorage.save(todos.value)
}

// 取消
const cancelTodo = () => {
    dialogVisible.value = false
    resetForm()
}

// 编辑按钮
const editTodo = (todo: Todo) => {
    editingTodo.value = todo
    Object.assign(todoForm, todo)
    dialogVisible.value = true
}

// 删除按钮
const deleteTodo = async (todo: Todo) => {
    const result = await useConfirm().confirm({
        title: '删除确认',
        message: '确定要删除该计划吗？',
        confirmText: '确定',
        cancelText: '取消',
    })
    if (result) {
        todos.value = todos.value.filter(t => t.id !== todo.id)
        // 手动触发保存
        todoStorage.save(todos.value)
    } else {
        return 
    }


}

// 完成按钮
const completeTodo = async (todo: Todo) => {

    if (!todo.completed) {
        const result = await useConfirm().confirm({
            title: '确认完成',
            message: '确定要完成该计划吗？',
            confirmText: '确定',
            cancelText: '取消',
        })
        if (result) {
            todo.completed = !todo.completed
            if (todo.completed) {
                todo.completedTime = new Date()
                todo.status = 'completed'
                // 手动触发保存
                todoStorage.save(todos.value)
            }
        }
    }else{
        const result = await useConfirm().confirm({
            title: '取消完成',
            message: '确定要取消完成该计划吗？',
            confirmText: '确定',
            cancelText: '取消',
        })
        if (result) {
            todo.completed = !todo.completed
            todo.completedTime = undefined
            todo.status = 'pending'
            // 手动触发保存
            todoStorage.save(todos.value)
        }
    }
}

// 一键完成
const completeAll = async () => {
    const result = await useConfirm().confirm({
        title: '全部完成',
        message: '确定要完成全部计划吗？',
        confirmText: '确定',
        cancelText: '取消',
    })
    if (result) {
        todos.value.forEach(todo => {
            todo.completed = true
            todo.completedTime = new Date()
            todo.status = 'completed'
        })
        // 手动触发保存
        todoStorage.save(todos.value)
    }
}

// 格式化日期
const formatDate = (date: Date) => {
    return dayjs(date).format('YYYY-MM-DD HH:mm')
}


// 添加一个响应式的时间戳
const currentTime = ref(Date.now())
// 获取时间状态 
const getTimeStatus = (todo: Todo) => {
    if (todo.completed) {
        const diff = dayjs(todo.completedTime).diff(dayjs(todo.startTime))

        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor(diff / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)
        let timeStr = ''
        if (days > 0) {
            return `完成于：${formatDate(todo.completedTime!)}\n共耗时：${days}天${hours}h`
        } else if (hours > 0) {
            return `完成于：${formatDate(todo.completedTime!)} \n共耗时：${hours}h ${minutes}m ${seconds}s`
        } else if (minutes > 0) {
            return `完成于：${formatDate(todo.completedTime!)} \n共耗时：${minutes}m ${seconds}s`
        } else if (seconds > 0) {
            return `完成于：${formatDate(todo.completedTime!)}\n共耗时：${seconds}s`
        } else {
            return '已过期'
        }
    }
    const now = dayjs(currentTime.value)
    const end = dayjs(todo.endTime)
    const diff = end.diff(now)

    // 添加一个缓冲区，当剩余时间小于等于 0 时统一显示已过期
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    if (days > 0) {
        return `距结束剩: ${days}天${hours}h`
    } else if (hours > 0) {
        return `距结束剩: ${hours}h ${minutes}m ${seconds}s`
    } else if (minutes > 0) {
        return `距结束剩: ${minutes}m ${seconds}s`
    } else if (seconds > 0) {
        return `距结束剩: ${seconds}s`
    } else {
        return '已过期'
    }
}
// 添加数据监听，自动保存
watch(
    todos,
    (newTodos) => {
        todoStorage.save(newTodos)
    },
    { deep: true }
)

//#region 拖拽排序实现
const dragIndex = ref<number>(-1)
const handleDragStart = (e: DragEvent, index: number) => {
    dragIndex.value = index
    if (e.target instanceof HTMLElement) {
        e.target.style.opacity = '0.5'
    }
}

const handleDrop = (e: DragEvent, index: number) => {
    e.preventDefault()

    // 获取拖拽的元素
    const draggedTodo = todos.value[dragIndex.value]
    // 删除拖拽的元素
    todos.value.splice(dragIndex.value, 1)
    // 在新位置插入元素
    todos.value.splice(index, 0, draggedTodo)
    
    // 重置样式
    if (e.target instanceof HTMLElement) {
        e.target.style.opacity = '1'
    }
    
    // 保存更新后的顺序
    todoStorage.save(todos.value)
    }

// 添加拖拽结束的处理
const handleDragEnd = (e: DragEvent) => {
    if (e.target instanceof HTMLElement) {
        e.target.style.opacity = '1'
    }
}
//#endregion


//#region 触摸排序实现
const todoListRef = ref<HTMLElement | null>(null)
let sortableInstance: Sortable | null = null


//#endregion

// 在组件挂载时启动定时器
onMounted(() => {
    // 倒计时
    const timer = setInterval(() => {
        currentTime.value = Date.now() // 更新响应式变量
    }, 1000)

    // 添加拖拽结束的全局监听
    // document.addEventListener('dragend', handleDragEnd)

    // 初始化触摸拖拽排序
    // 在组件挂载后初始化Sortable

    if (todoListRef.value) {
        sortableInstance = new Sortable(todoListRef.value, {
            animation: 150, // 动画时间
            delay: 500, // 长按延迟时间
            delayOnTouchOnly: true, // 仅在触摸时启用延迟
            touchStartThreshold: 5, // 触摸阈值

            // 拖动时的样式
            dragClass: 'sortable-drag',
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',

            // 仅允许垂直拖动
            direction: 'vertical',

            // 开始拖动时的回调
            onStart: (evt: any) => {
                // 可以添加自定义的开始拖动逻辑
                if (navigator.vibrate) {
                    navigator.vibrate(50) // 触觉反馈
                }
            },

            // 拖动结束时的回调
            onEnd: (evt: { oldIndex: any; newIndex: any }) => {
                // 获取新的排序
                const { oldIndex, newIndex } = evt
                if (oldIndex !== newIndex && oldIndex !== undefined && newIndex !== undefined) {
                    // 更新数组顺序
                    const item = todos.value.splice(oldIndex, 1)[0]
                    todos.value.splice(newIndex, 0, item)
                    // 保存新顺序
                    debounce(async() => {
                        try {
                            await todoStorage.save(todos.value)
                            // 可选：成功提示
                            console.log('保存成功')
                        } catch (error) {
                            // 错误处理
                            console.error('保存失败:', error)
                            // 可以添加重试逻辑
                        }
                    }, 1000)
                }
            }
        })
    }
    // 在组件卸载时清除定时器
    onUnmounted(() => {
        clearInterval(timer)
        document.removeEventListener('dragend', handleDragEnd)

        // 触摸排序
        if (sortableInstance) {
            sortableInstance.destroy()
        }
        console.log('卸载定时器');

    })
})



</script>

<style lang="scss" scoped>
// 影音变量
$todo_item_bg_light: rgba(215, 215, 215, 0.6);
$todo_item_bg_dark: rgba(0, 0, 0, 0.2);



// 夜间模式
[data-theme="dark"] {
    .todo_header_btn {
        box-shadow: var(--my-shadow-dark);
    }

    .todo_navbar {
        box-shadow: var(--my-shadow-dark);

        .stat {
            background: $todo_item_bg_dark;
        }

        .progress_bar {
            background: $todo_item_bg_dark;
        }
    }

    .todo_list {
        .todo_item {
            box-shadow: var(--my-shadow-dark);

            .todo_item_top {
                background-color: $todo_item_bg_dark;
            }

            .circle_check {
                background-color: rgba(83, 196, 26, 0.633);
            }

            .todo-item-content {

                .script_tags {
                    background: $todo_item_bg_dark;
                }

                .todo-item-time {
                    background: $todo_item_bg_dark;
                    // white-space: pre-line;
                }
            }


        }
    }


}

// 日间模式
[data-theme="light"] {
    .todo_header_btn {
        box-shadow: var(--my-shadow-light);
    }

    .todo_item {
        box-shadow: var(--my-shadow-light);
    }
}

// 头部按钮
.todo_header_btn {
    border: none;
    padding: 6px 12px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    color: var(--vp-c-text);
    // display: flex;
    // align-items: center;
    // gap: 5px;
    vertical-align: middle;

}

.todo-container {
    // margin: 0 auto;

    // 头部
    .todo-header {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;

    }
}

.el-tag {
    border-radius: 10px;
    // border: none;
    padding: 3px 6px;
    // font-size: 0.6em;
    height: auto
}

// #region todo_navbar
// todo_navbar
.todo_navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    gap: 10px;

    // 统计
    .stat {
        display: flex;
        flex: 1;
        justify-content: space-around;
        background: $todo_item_bg_light;
        padding: 5px;
        border-radius: 15px;

        .stat_item {
            display: flex;
            justify-content: center;
            text-align: center;
            gap: 5px;
            font-size: .9em;
            flex-wrap: nowrap;
            min-width: 0;
        }
    }


    .progress_bar {
        flex: 1; // 占用剩余空间
        height: 15px; // 固定高度
        border-radius: 10px;
        // overflow: hidden;  // 隐藏超出部分，确保子元素不会超出圆角边界
        margin-left: 10px;
        background: $todo_item_bg_light; // 进度条背景色
        // position: relative; 

        // 进度条
        .progress {
            height: 100%;
            background: var(--vp-c-accent-hover); // 进度条颜色
            border-radius: 10px;
            transition: width 0.3s ease; // 宽度变化时的平滑过渡动画
            position: relative; // 相对定位，为文字提供定位参考
            min-width: 30px; // 最小宽度，确保即使进度很小时也能显示

            // 进度文字
            .progress_text {
                position: absolute; // 绝对定位
                right: 8px; // 距离右边 8px
                color: white; // 文字颜色
                font-size: 0.8rem; // 文字大小
                line-height: 15px; // 行高等于进度条高度，实现垂直居中
            }
        }
    }
}

// 响应式设计
@media (max-width: hope-config.$pad) {
    .todo_navbar {
        flex-direction: column; // 改为纵向排列

        // gap: 12px;
        .stat {
            width: 95%; // 统计区域占满宽度
            justify-content: space-around; // 均匀分布
        }

        .progress_bar {
            flex: none;
            width: 95%;
            // height: 15px;  // 确保移动端也有高度
            // margin-top: 5px;
            margin: 0;
        }
    }
}

// #endregion


// 针对移动端的媒体查询
// Sortable 相关样式
// 当元素被选中准备拖动时的样式
.sortable-chosen {
    .todo_item_inner {
        &::after {
            opacity: 1;// 显示拖动手柄（就是之前定义的 ⋮⋮ 符号）
        }
    }
}

// 正在被拖动的元素的样式
.sortable-drag {
    .todo_item_inner {
        transform: scale(1.02);// 略微放大元素
        opacity: 0.9;// 半透明效果
        // box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    }
}
// 拖动时原位置的占位元素样式
.sortable-ghost {
    opacity: 0.8;
}

// 移动端优化
@media (max-width: hope-config.$mobile) {
    .todo_list {
        .todo_item {
            user-select: none;
            -webkit-touch-callout: none;
        }
    }
}

// 计划列表
.todo_list {
    // 瀑布流
    columns: auto 2;
    column-gap: 20px; //每列最小宽度300px，自动分配列数
    border: none;

    // 列间距 瀑布流移动端适配
    @media (max-width: hope-config.$pad) {
        columns: auto 1;
        /* 每列最小宽度300px，自动分配列数 */
    }

    // 使用flex布局 瀑布流
    // flex-direction: column;
    // flex-wrap: wrap; 
    // display: flex;

    // 触摸排序
    .sortable-list {
        position: relative;
        .todo_item_inner {
            // background: var(--vp-c-bg);
            // border-radius: 8px;
            transition: all 0.3s ease;
            position: relative;

            // 拖动手柄
            &::after {
                content: '⋮⋮';
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 18px;
                color: var(--vp-c-text-2);
                opacity: 0;
                transition: opacity 0.3s ease;
            }

        }

    }
    .todo_item {
                break-inside: avoid;/* 防止内容被分割到不同列 */
                padding: 10px;
                border-radius: 15px;
                margin-bottom: 20px;

                // 触摸排序
                touch-action: pan-y; // 允许正常的滚动

                // 顶部
                .todo_item_top {
                    color: var(--vp-c-text);
                    background-color: $todo_item_bg_light;
                    padding: 5px;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    vertical-align: middle;
                    width: 97%;
                    gap: 5px; // 各元素间距

                    
                    // 完成按钮
                    .circle,
                    .circle_check {
                        box-sizing: border-box;
                        width: 20px;
                        height: 20px;
                        flex-shrink: 0;
                        border-radius: 50%;
                        display: inline-block;
                        cursor: pointer;
                        transition: all 0.4s ease;
                    }

                    .circle {
                        background-color: transparent;
                        border: 2px solid #999;
                    }

                    .circle_check {
                        background-color: var(--vp-c-accent-hover);
                        /* 浅绿色背景 */
                        border: none;
                        position: relative;

                        &::after {
                            content: '';
                            position: absolute;
                            left: 6px;
                            top: 2px;
                            width: 6px;
                            height: 10px;
                            border: solid white;
                            border-radius: 1px;
                            border-width: 0 2px 2px 0;
                            transform: rotate(45deg);
                            animation: checkmark 0.4s ease-in-out forwards;
                        }

                        @keyframes checkmark {
                            0% {
                                opacity: 0;
                                transform: rotate(45deg) scale(0.5);
                            }

                            100% {
                                opacity: 1;
                                transform: rotate(45deg) scale(1);
                            }
                        }
                    }
                    // 标题和标签
                    .content_wrapper {
                        display: flex;
                        flex: 1;
                        min-width: 0; // 允许收缩
                        align-items: center;
                        margin-right: 10px;
                        // 
                        .title {
                            font-weight: bold;
                            min-width: 0; // 允许收缩
                            margin-right: 2px; // 与标签的间距
                        }

                        // 标签
                        .el-tag {
                            flex-shrink: 0; // 防止标签被压缩
                            // white-space: nowrap;
                        }
                    }
                    

                    // delect按钮
                    .delect {
                        flex-shrink: 0;
                        margin-left: auto; // 推到最右侧
                        // width: 30%;
                        .el-button {
                            border: none;
                            padding: 6px 12px;
                            border-radius: 15px;
                            background: transparent;
                            box-shadow: var(--my-shadow-light);
                            color: var(--vp-c-text);
                            backdrop-filter: blur(10px);
                            .delete_icon{
                                margin-right: 1px;
                                font-size: .8rem;
                            }
                        }
                    }

                }

                // 内容
                .todo-item-content {
                    display: flex;
                    // flex: 1;
                    gap: 5px;
                    color: var(--vp-c-text);
                    // 描述和标签
                    .script_tags {
                        margin-top: 5px;
                        width: 50%;
                        background: rgba(215, 215, 215, 0.631);
                        padding: 5px;
                        border-radius: 15px;
                        overflow: hidden;

                        // 标签
                        .tags {
                            display: flex;
                            // margin-left: 20px;
                            gap: 5px;

                        }

                        .ellipsis_wrapper {
                            margin-top: 5px;
                        }

                        // 详情
                        .todo-item-detail {
                            margin-bottom: 10px;
                            font-size: 0.8em;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 4;
                            /* 显示行数 */
                            overflow: hidden;
                            word-break: break-all;
                            background: transparent;


                        }
                    }


                    // 时间 
                    .todo-item-time {
                        width: 50%;
                        font-size: 0.9rem;
                        // text-align: center;
                        margin-top: 5px;
                        background: rgba(215, 215, 215, 0.631);
                        border-radius: 15px;
                        padding: 8px;
                        span{
                            font-size: .8rem;
                        }
                    }
                }
            }



}

//#region el-dialog
:deep(.el-dialog) {
    // --el-bg-color: rgba(40, 40, 40, 0.6);
    // --el-bg-color-light: rgba(233, 233, 233, 0.6);
    // width: 90% !important;
    background: rgba(255, 255, 255, 0.9);
    // backdrop-filter: blur(10px);
    border-radius: 15px;

    .el-dialog__title {
        color: var(--vp-c-text);
    }
}

:deep(.el-input__wrapper) {
    background: inherit;
    color: var(--vp-c-text);

}

:deep(.el-select__wrapper) {
    background: inherit;
    color: var(--vp-c-text);
}

:deep(.el-textarea__inner) {
    background: inherit;
    color: var(--vp-c-text);

}

:deep(.el-button) {
    border-radius: 15px;
    color: var(--vp-c-text);
    background: transparent;

    &:hover {
        border: 1px solid var(--vp-c-accent);

    }
}

:deep(.el-button+.el-button) {
    border: 1px solid var(--vp-c-accent-hover);
    background: var(--vp-c-accent-hover);

    &:hover {
        border: 1px solid var(--vp-c-accent);
        opacity: .8;
        color: var(--vp-c-text);
    }
}

@media (max-width: hope-config.$mobile) {
    .dailog {
        :deep(.el-dialog) {
            width: 90%;


        }
    }
}

[data-theme="dark"] {
    .dailog {
        :deep(.el-dialog) {
            background: rgba(40, 40, 40, 0.6);
            color: var(--vp-c-text);
        }

        :deep(.el-form-item__label) {
            color: var(--vp-c-text);
        }
    }
}
//#endregion




</style>
