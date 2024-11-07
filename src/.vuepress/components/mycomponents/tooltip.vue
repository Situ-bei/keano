<template>
    <!-- 文本显示区域 -->
    <div class="ellipsis_wrapper">
        <div ref="textRef" class="text-ellipsis" :class="{ 'multi-line': lines > 1 }"
            :style="[lines > 1 ? { '-webkit-line-clamp': lines } : {}, textStyle]" @mouseenter="showTooltip"
            @mouseleave="hideTooltip">
            <slot name="reference"></slot>
        </div>

        <!-- Tooltip弹出层 -->
        <Teleport to="body">
            <Transition name="tooltip">
                <div v-show="isVisible" ref="tooltipRef" class="custom-tooltip" :style="[tooltipStyle,tooltipTextStyle]">
                    <slot>{{ text }}</slot>
                    <div ref="arrowRef" class="tooltip-arrow" :style="arrowStyle"></div>
                </div>
            </Transition>
        </Teleport>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted,computed, onUnmounted,nextTick } from 'vue'
import { computePosition, flip, shift, offset, arrow } from '@floating-ui/dom'
/**
 * Props 接口定义
 * @interface Props
 */
interface Props {
    /** 显示的文本内容 */
    text?: string
    /** 最大显示行数 */
    lines?: number
    /** 文本字体大小 */
    fontSize?: string
    /** 文本字体粗细 */
    fontWeight?: string | number
    /** 文本色 */
    color?: string
    /** tooltip 字体大小 */
    tooltipFontSize?: string
    /** tooltip 字体颜色 */
    tooltipColor?: string
}
const props = defineProps<Props>()
// const props = defineProps({
//     text: {
//         type: String,
//         default: ''
//     },
//     lines: {
//         type: Number,
//         default: 1
//     },
//         // 添加字体相关属性
//         fontSize: {
//         type: String,
//         default: '14px'
//     },
//     fontWeight: {
//         type: [String, Number],
//         default: 'normal'
//     },
//     color: {
//         type: String,
//         default: 'inherit'
//     },
//     // tooltip的字体样式
//     tooltipFontSize: {
//         type: String,
//         default: '14px'
//     },
//     tooltipColor: {
//         type: String,
//         default: '#fff'
//     }
// })


const textRef = ref<HTMLElement | null>(null)    // 文本元素引用
const isVisible = ref(false)                     // tooltip 显示状态
const tooltipStyle = ref<{ [key: string]: string }>({})  // 将类型定义为字符串键值对
const tooltipRef = ref<HTMLElement | null>(null)
const arrowRef = ref<HTMLElement | null>(null)
const arrowStyle = ref<{ [key: string]: string }>({})
let isDarkMode = ref(false)

// 计算主题样式
const themeStyle = computed(() => ({
    backgroundColor: isDarkMode.value ? 'rgba(87, 87, 87, 1)' : 'rgba(255, 255, 255, .9)',
    color: isDarkMode.value ? '#ffffff' : '#333333',
    '--tooltip-arrow-color': isDarkMode.value ? 'rgba(87, 87, 87, 1)' : 'rgba(255, 255, 255, .9)' // 添加这行

})) 


// 计算文本样式
const textStyle = computed(() => ({
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    color: props.color
}))

// 计算tooltip文本样式
const tooltipTextStyle = computed(() => ({
    fontSize: props.tooltipFontSize,
    color: props.tooltipColor
}))
// 检查是否需要显示 tooltip
const needTooltip = () => {
    const el = textRef.value
    if (!el) return false

    if (props.lines === 1) {
        console.log('el.scrollWidth',el.scrollWidth);
        console.log('el.clientWidth',el.clientWidth);
        
        // 单行文本：比较内容宽度和容器宽度
        return el.scrollWidth > el.clientWidth
    }
    // 多行文本：比较内容高度和容器高度
    return el.scrollHeight > el.clientHeight
}

// 更新tooltip位置的函数
const updatePosition = async () => {
    const reference = textRef.value
    const floating = tooltipRef.value
    const arrowElement = arrowRef.value
    
    if (!reference || !floating || !arrowElement) return

    const { x, y, placement, middlewareData } = await computePosition(reference, floating, {
        placement: 'top', // 默认显示在上方
        middleware: [
            offset(10), // 设置偏移距离
            flip({
                fallbackPlacements: ['bottom', 'right', 'left'], // 自动翻转位置
            }),
            shift({
                padding: 5, // 距离视口边界的最小距离
            }),
            arrow({
                element: arrowElement,
                padding: 5, // 箭头距离参考元素的边距
            }),
        ],
    })

    // 设置 tooltip 位置
    Object.assign(tooltipStyle.value, {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${reference.clientWidth * 1.2}px`,
        ...themeStyle.value
    })

    // 设置箭头位置
    if (middlewareData.arrow) {
        const { x: arrowX, y: arrowY } = middlewareData.arrow

        const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
        }[placement.split('-')[0]]

        Object.assign(arrowStyle.value, {
            left: arrowX != null ? `${arrowX-30}px` : '',
            top: arrowY != null ? `${arrowY}px` : '',
            [staticSide]: '-4px', // 箭头突出的距离
        })
    }
}

// 显示 tooltip
const showTooltip = async (event: MouseEvent) => {
    if (!needTooltip()) return
    // 显示 tooltip
    isVisible.value = true
    // await nextTick()
    updatePosition()
}

// 监听滚动和调整大小
const cleanup = () => {
    window.removeEventListener('scroll', updatePosition)
    window.removeEventListener('resize', updatePosition)
}


// 隐藏 tooltip
const hideTooltip = () => {
    isVisible.value = false
}

// 监听主题变化事件处理函数
const handleThemeChange = (e: StorageEvent) => {
    if (e.newValue === 'dark') {
        console.log('主题变化', e.newValue);
        isDarkMode.value = true
    } else {
        isDarkMode.value = false
    }
}


// 组件挂载时
onMounted(() => {
    // 初始化主题状态
    const currentTheme = localStorage.getItem('vuepress-theme-hope-scheme')
    isDarkMode.value = currentTheme === 'dark'

    // 监听 localStorage 变化
    window.addEventListener('storage', handleThemeChange)

    // 监听滚动和调整大小
    window.addEventListener('scroll', updatePosition, { passive: true })
    window.addEventListener('resize', updatePosition)

})

// 组件卸载时
onUnmounted(() => {
    window.removeEventListener('storage', handleThemeChange)

    cleanup()
})


</script>

<style scoped lang="scss">
/* 包装容器 */
.ellipsis_wrapper {
    position: relative;
    width: 100%;
}
/* 单行省略 */
.text-ellipsis {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.multi-line {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    white-space: normal;
    word-break: break-all;
    overflow: hidden;
}
/* tooltip 样式 */
.custom-tooltip {
    position: absolute;
    z-index: 9999;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1.4;
    pointer-events: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    word-wrap: break-word;
    border-radius: 25px;

}

.tooltip-arrow {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
    transform: rotate(45deg);
    pointer-events: none;
}

/* 添加过渡效果 */
.tooltip-enter-active,
.tooltip-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
    opacity: 0;
    transform: translateY(-5px);  // 添加一个轻微的上移效果
}

</style>
