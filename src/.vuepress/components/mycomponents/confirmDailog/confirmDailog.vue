<template>
    <!-- 遮罩层：仅在 visible 为 true 时显示，点击遮罩层可关闭 -->
    <div v-if="visible" class="confirm-dialog-overlay" @click="handleOverlayClick">
        <!-- 弹窗主体：阻止点击事件冒泡，避免触发遮罩层点击事件 -->
        <div class="confirm-dialog" @click.stop>
            <!-- 弹窗标题 -->
            <div class="confirm-title">{{ title }}</div>
            <!-- 弹窗内容 -->
            <div class="confirm-content">{{ message }}</div>
            <!-- 按钮组 -->
            <div class="confirm-buttons">
                <button class="cancel-btn" @click="handleCancel">{{ cancelText }}</button>
                <button class="confirm-btn" @click="handleConfirm">{{ confirmText }}</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 定义组件属性
const props = defineProps({
    // 弹窗标题
    title: {
        type: String,
        default: '确认'
    },
    // 弹窗内容
    message: {
        type: String,
        default: '确认执行此操作？'
    },
    // 确认按钮文字
    confirmText: {
        type: String,
        default: '确认'
    },
    // 取消按钮文字
    cancelText: {
        type: String,
        default: '取消'
    },
    // 是否允许点击遮罩层关闭
    closeOnClickOverlay: {
        type: Boolean,
        default: true
    }
})

// 定义事件
const emit = defineEmits(['confirm', 'cancel'])

// 控制弹窗显示状态
const visible = ref(false)

/**
 * 显示弹窗
 */
const show = () => {
    visible.value = true
}

/**
 * 隐藏弹窗
 */
const hide = () => {
    visible.value = false
}

/**
 * 处理遮罩层点击事件
 * 如果 closeOnClickOverlay 为 true，则关闭弹窗并触发 cancel 事件
 */
const handleOverlayClick = () => {
    if (props.closeOnClickOverlay) {
        hide()
        emit('cancel')
    }
}

/**
 * 处理确认按钮点击事件
 * 关闭弹窗并触发 confirm 事件
 */
const handleConfirm = () => {
    hide()
    emit('confirm')
}

/**
 * 处理取消按钮点击事件
 * 关闭弹窗并触发 cancel 事件
 */
const handleCancel = () => {
    hide()
    emit('cancel')
}

// 暴露方法给父组件
defineExpose({
    show,
    hide
})
</script>

<style lang="scss" scoped>
/* 遮罩层样式 */
.confirm-dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; // 确保显示在其他内容之上
    animation: fadeIn 0.2s ease; // 淡入动画

}

/* 弹窗主体样式 */
.confirm-dialog {
    position: relative;
    z-index: 1; 
    background: rgba(255, 255, 255, 0.9); // 使用主题变量
    animation: slideIn 0.2s ease; // 滑入动画

    border-radius: 12px;
    padding: 20px;
    min-width: 300px;
    max-width: 90%;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
      // 模糊效果层
    

    /* 标题样式 */
    .confirm-title {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 12px;
        // color: var(--vp-c-text-1);
    }

    /* 内容样式 */
    .confirm-content {
        // color: var(--vp-c-text-2);
        margin-bottom: 20px;
        line-height: 1.5;
    }

    /* 按钮组样式 */
    .confirm-buttons {
        display: flex;
        justify-content: space-around;
        // gap: 12px;

        /* 按钮基础样式 */
        button {
            padding: 6px 14px;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            font-size: 0.9rem;
            transition: opacity 0.2s;
            border-radius: 20px;
            &:hover {
                opacity: 0.8;
            }
        }

        /* 取消按钮样式 */
        .cancel-btn {
            background: rgba(153, 153, 153, 0.5);
            // color: var(--vp-c-text-2);
        }

        /* 确认按钮样式 */
        .confirm-btn {
            background: var(--vp-c-accent-hover);
            
            // color: white;
        }
    }
}

/* 淡入动画 */
@keyframes fadeIn {
    from { 
        opacity: 0;
    }
    to { 
        opacity: 1;
    }
}

/* 滑入动画 */
@keyframes slideIn {
    from { 
        opacity: 0;
        transform: translateY(-20px);
    }
    to { 
        opacity: 1;
        transform: translateY(0);
    }
}

/* 深色模式适配 */
[data-theme="dark"] .confirm-dialog {
    // box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
    background: rgb(55, 55, 55,0.9);
    
}
</style> 