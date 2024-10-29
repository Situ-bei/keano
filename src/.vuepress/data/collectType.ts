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