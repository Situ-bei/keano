export interface CollectOptions {
    id?: number;
    title: string;
    iconFont?: string;
    detail?: {
        id: number;
        name: string;
        desc: string;
        icon: string;
        url: string;
        /**
         * subIcon | 子图标，如果不指定继承父级
         */
        subIcon?: string;
    }[];
    subCategories?: SubCategory[];
}

interface SubCategory {
    id: number;
    title: string;
    iconFont?: string;
    detail:         
    {
        /**
         * id | id
         */
        id: number;
        
        /**
         * name | 名字
         */
        name: string;
        
        /**
         * description | 描述
         */
        desc: string;
        
        /**
         * images | 图片
         */
        icon: string;
        
        /**
         * url | 链接
         */
        url: string;
        /**
         * subIcon | 子图标，如果不指定继承父级
         */
        subIcon?: string;

    }[],
}

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
    completed: boolean
    completedTime?: Date
}