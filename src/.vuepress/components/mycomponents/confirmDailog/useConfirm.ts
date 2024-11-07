import { createVNode, render } from 'vue'
import ConfirmDialog from './confirmDailog.vue'

export interface ConfirmOptions {
    title?: string
    message?: string
    confirmText?: string
    cancelText?: string
    closeOnClickOverlay?: boolean
}

export function useConfirm() {


    // 2. 创建确认框函数，返回 Promise 以支持异步操作
    const confirm = (options: ConfirmOptions = {}): Promise<boolean> => {
        return new Promise((resolve) => {
            // 如果是在服务器端渲染，直接返回一个未解决的 Promise
            if (typeof window === 'undefined') {
                // 如果在服务器端渲染，直接返回一个未解决的 Promise
                return resolve(false);
            }

            // 1. 创建一个 DOM 容器用于挂载弹窗
            const container = document.createElement('div')
            // 3. 定义确认按钮回调
            const handleConfirm = () => {
                // 清理 DOM
                render(null, container)
                // 返回 true 表示用户确认
                resolve(true)
            }

            // 4. 定义取消按钮回调
            const handleCancel = () => {
                // 清理 DOM
                render(null, container)
                // 返回 false 表示用户取消
                resolve(false)
            }

            // 5. 创建虚拟节点
            const vnode = createVNode(ConfirmDialog, {
                // 传入用户配置
                ...options,
                // 绑定事件处理器
                onConfirm: handleConfirm,
                onCancel: handleCancel
            })

            // 6. 将虚拟节点渲染到容器
            render(vnode, container)
            // 7. 将容器添加到 body
            document.body.appendChild(container)

            // 8. 获取组件实例并调用显示方法
            const component = vnode.component
            if (component?.exposed) {
                component.exposed.show()
            }
        })
    }

    return {
        
        confirm
    }
}