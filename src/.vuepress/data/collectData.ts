export interface CollectOptions {
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
}

export const collectData: CollectOptions[] = [
    {
        name: "VuePress",
        desc: "Vue 驱动的静态网站生成器",
        icon: "https://vuepress.vuejs.org/zh/images/hero.png",
        url: "https://vuepress.vuejs.org/zh/"
    },
    
]

export const VueEcology: CollectOptions[] = [
    {
        name: "VueJS",
        desc: "易学易用，性能出色，适用场景丰富的 Web 前端框架。",
        icon: "https://cn.vuejs.org/",
        url: "https://cn.vuejs.org/"
    },
    {
        name: "VuePress",
        desc: "一个具有强大功能的 vuepress 主题",
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        url: "https://theme-hope.vuejs.press/zh/"
    },
]