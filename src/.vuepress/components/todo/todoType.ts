/**
 * todo数据类型
 * @id: 唯一标识
 * @title: 标题
 * @startTime: 开始时间
 * @endTime: 结束时间
 * @priority: 优先级
 * @status: 状态
 * @tags: 标签
 * @content: 内容
 * @estimatedTime: 预计时间
 * @completed: 是否完成
 * @completedTime: 耗时
 */
export interface Todo {
    id: number
    title: string
    startTime: Date
    endTime: Date
    priority: string
    status: string
    tags: string[]
    content: string
    estimatedTime: string
    completed: boolean
    completedTime?: Date
}