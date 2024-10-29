import type { CollectOptions } from './collectType.js'
export const collectData: CollectOptions [] = [
    {   
        id: 0,
        title: '',
        subCategories:[],
    },
    
    // 影音
    {
        id: 1,
        title: '影音',
        iconFont: 'icon-zhishiyingyin',
        subCategories:[
            {
                id:0,
                title:'音乐',
                iconFont: 'icon-music',
                detail:[
                    {
                        id: 0,
                        name: "网易云音乐",
                        desc: "网易云音乐",
                        icon: "http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg",
                        url: "https://music.163.com/"
                    },
                    {
                        id:1,
                        name: "MyFreeMP3",
                        desc: "一个在线音乐播放器",
                        icon: "https://unpkg.com/@liumingye/cdn2@latest/favicon.ico",
                        url: "https://tools.liumingye.cn/music/#/"
                    },
                    {
                        id:2,
                        name: "MusicEnc",
                        desc: "一个在线歌词下载站",
                        icon: "http://www.musicenc.com/zb_users/theme/bijiblog/include/touxiang.jpg",
                        url: "https://www.musicenc.com/"
                    },
                    {
                        id:3,
                        name: "熊猫无损音乐",
                        desc: "无损音乐下载",
                        icon: "https://www.xmwav.com/assets/images/logo.png",
                        url: "https://www.xmwav.com/"
                    },
                    {
                        id:4,
                        name: "果核音乐2.2",
                        desc: "果核音乐",
                        icon: "	http://ghyinyue.com/favicon.ico",
                        url: "http://ghyinyue.com/#/home"
                    },
                    {
                        id:5,
                        name: "粤语谐音网",
                        desc: "粤语歌词谐音",
                        icon: "http://www.xieyinge.com/wp-content/themes/Cui1.0/img/logo.png",
                        url: "http://www.xieyinge.com/"
                    },
                    {
                        id:6,
                        name: "音乐客",
                        desc: "免费下载音乐",
                        icon: "https://cdn.yinyueke.net/images/logo.png",
                        url: "https://www.yinyue.fan/"
                    },
                    {
                        id:7,
                        name: "全网VIP音乐免费解码",
                        desc: "全网VIP音乐免费解码",
                        icon: "https://www.tool55.com/favicon.ico",
                        url: "https://www.tool55.com/unmusic"
                    },
                    {
                        id:8,
                        name: "MusicforProgramming",
                        desc: "一个代码风格的音乐网站",
                        icon: "https://musicforprogramming.net/favicon.png",
                        url: "https://musicforprogramming.net/latest/"
                    },
                    {
                        id:9,
                        name: "Eath'fm",
                        desc: "聆听大自然的声音，爱上地球",
                        icon: "https://earth.fm/static/6171c202bcfee0f0cb4078cd330c7c0b/earht-fm-logo-sm.png",
                        url: "https://earth.fm/?ref=yigekuang.cn"
                    },
                ]
            },
            {
                id:1,
                title:'视频',
                iconFont: 'icon-dianying',
                detail:[
                    {
                        id:0,
                        name: "哔哩哔哩",
                        desc: "哔哩哔哩",
                        icon: "https://www.bilibili.com/favicon.ico",
                        url: "https://www.bilibili.com/"
                    },
                    {
                        id:1,
                        name: "观影 GYING",
                        desc: "观影 GYING",
                        icon: "https://www.gyg.si/favicon.ico",
                        url: "https://www.gyg.si/"
                    },
                    {
                        id:2,
                        name: "mvcat",
                        desc: "电影推荐站点",
                        icon: "https://www.mvcat.com/img/logo_1024.jpg",
                        url: "https://www.mvcat.com/"
                    },
                    {
                        id:3,
                        name: "TGx",
                        desc: "国外磁力电影下载站",
                        icon: "https://tgx.rs/common/images/tgxlogo.png",
                        url: "https://tgx.rs/"
                    },
                    {
                        id:4,
                        name: "仓库",
                        desc: "仓库 - 经典在此！",
                        icon: "https://www.cangkus.com/favicon.ico",
                        url: "https://www.cangkus.com/"
                    },
                ]
            },
        ]
    },
    // 工具
    {
        id: 2,
        title: '工具',
        iconFont: '',
        subCategories:[
            {
                id:0,
                title:'驱动',
                iconFont: 'icon-sousuo',
                detail:[
                    {
                        id:0,
                        name: "英伟达NVIDIA",
                        desc: "英伟达官网",
                        icon: "https://www.nvidia.cn/favicon.ico",
                        url: "https://www.nvidia.cn/"
                    },
                    {
                        id:1,
                        name: "联想驱动",
                        desc: "联想驱动下载中心_R7000",
                        icon: "https://www.lenovo.com.cn/favicon.ico",
                        url: "https://newsupport.lenovo.com.cn/driveList.html?fromsource=driveList&selname=PF2CKJQN"
                    },
                    {
                        id:2,
                        name: "AMD中文官网",
                        desc: "AMD中文官网",
                        icon: "https://www.amd.com/content/dam/code/images/header/amd-header-logo.svg",
                        url: "https://www.amd.com/zh-cn.html"
                    },
                ]
            },
            {
                id:1,
                title:'镜像下载',
                iconFont: 'icon-xiazai',
                detail:[
                    {
                        id:0,
                        name: "xitongku",
                        desc: "windows系统镜像下载站",
                        icon: "https://www.xitongku.com/favicon.ico",
                        url: "https://www.xitongku.com/index.html"
                    },
                    {
                        id:0,
                        name: "不忘初心",
                        desc: "爱之所及，从心出发，专注精简版系统。",
                        icon: "//www.pc528.net/favicon.ico",
                        url: "https://www.pc528.net/"
                    },
                ]
            },
        ]
    },

    // 开发
    {
        id: 3,
        title: 'Coding',
        // iconFont: '',
        subCategories:[
            // Vue生态
            {
                id:0,
                title:'Vue生态',
                // iconFont: 'icon-gongju',
                detail:[
                    {
                        id:0,
                        name: "Vue中文官网",
                        desc: "渐进式JavaScript 框架",
                        icon: "https://vuejs.org/images/logo.png",
                        url: "https://cn.vuejs.org/"
                    },
                    {
                        id:1,
                        name: "Vite中文网",
                        desc: "下一代前端开发与构建工具",
                        icon: "https://vitejs.cn/logo.svg",
                        url: "https://vitejs.cn/"
                    },
                    {
                        id:2,
                        name: "Pinia",
                        desc: "符合直觉的 Vue.js 状态管理库",
                        icon: "https://pinia.vuejs.org/logo.svg",
                        url: "https://pinia.vuejs.org/zh/"
                    },
                    {
                        id:3,
                        name: "Vue Router",
                        desc: "Vue.js 的官方路由",
                        icon: "https://router.vuejs.org/logo.png",
                        url: "https://router.vuejs.org/zh/"
                    },
                    {
                        id:4,
                        name: "VueUse中文文档",
                        desc: "Vue 组合式工具集",
                        icon: "https://vueuse.nodejs.cn/favicon.svg",
                        url: "https://vueuse.nodejs.cn/"
                    },
                    {
                        id:5,
                        name: "VueUse",
                        desc: "Vue 组合式工具集",
                        icon: "https://vueuse.org/favicon.svg",
                        url: "https://vueuse.org/"
                    },
                    {
                        id:6,
                        name: "VueX",
                        desc: "Vue官方状态管理工具",
                        icon: "https://router.vuejs.org/logo.png",
                        url: "https://vuex.vuejs.org/zh/"
                    },
                    {
                        id:7,
                        name: "VuePress",
                        desc: "Vue 驱动的静态网站生成器",
                        icon: "https://v2.vuepress.vuejs.org/images/hero.png",
                        url: "https://v2.vuepress.vuejs.org/zh/"
                    },
                    {
                        id:8,
                        name: "vue-sku-form ",
                        desc: "基于 Vue & ElementUI 的电商 SKU 表单配置组件",
                        icon: "https://router.vuejs.org/logo.png",
                        url: "https://hurui.me/vue-sku-form/"
                    },
                    {
                        id:9,
                        name: "vuejsexamples",
                        desc: "一个Vue练习网站",
                        icon: "https://vuejsexamples.com/assets/vue.png",
                        url: "https://vuejsexamples.com/"
                    },
                    
                ]
            },
            
            // 
            {
                id:1,
                title:'UI库',
                // iconFont: 'icon-gongju',
                detail:[
                    {
                        id:0,
                        name: "Element Plus",
                        desc: "基于 Vue 3，面向设计师和开发者的组件库",
                        icon: "http://element-plus.org/images/element-plus-logo.svg",
                        url: "http://element-plus.org/zh-CN/"
                    },
                    {
                        id:0,
                        name: "Vant",
                        desc: "轻量、可定制的移动端 Vue 组件库",
                        icon: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
                        url: "https://vant-ui.github.io/vant/#/zh-CN"
                    },
                    {
                        id:0,
                        name: "Ant Design",
                        desc: "这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品。",
                        icon: "https://next.antdv.com/assets/logo.1ef800a8.svg",
                        url: "https://www.antdv.com/components/overview-cn"
                    },
                    {
                        id:0,
                        name: "Vuetify",
                        desc: "Vuetify 是一个无需设计技能的开源用户界面库，包含手工制作的精美 Vue 组件。",
                        icon: "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg",
                        url: "https://vuetifyjs.com/zh-Hans/"
                    },

                ]
            }
        ]
    },
    
    // Blog
    {
        id:4,
        title:'Blog',
        // iconFont: '',
        subCategories:[
            {
                id:0,
                title:'VuePress生态',
                // iconFont: 'icon-gongju',
                detail:[
                    {
                        id:0,
                        name: "VuePress Theme Hope",
                        desc: "一个具有强大功能的 vuepress 主题✨",
                        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
                        url: "https://theme-hope.vuejs.press/zh/"
                    },
                    {
                        id:1,
                        name: "Moefy Canvas",
                        desc: "🎉 用 canvas 装饰你的网页吧～",
                        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
                        url: "https://moefy-canvas.nyakku.moe/"
                    },
                    {
                        id:2,
                        name: "APlayer ",
                        desc: "🍭哇，好漂亮的 HTML5 音乐播放器",
                        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
                        url: "https://aplayer.js.org/#/zh-Hans/"
                    },
                ]
            },
            {
                id:1,
                title:'API',
                // iconFont: 'icon-gongju',
                detail:[
                    {
                        id:0,
                        name: "保罗｜API",
                        desc: "调用地址 https://paul.ren/api/say，就会返回一段语录的 JSON 信息。本 API 暂时与本站分离，但不影响正常使用。",
                        icon: "https://api.paugram.com/static/img/icon.png",
                        url: "https://api.paugram.com/help/say"
                    },
                    {
                        id:1,
                        name: "一言开发者中心",
                        desc: "用代码表达言语的魅力，用代码书写山河的壮丽。",
                        icon: "https://developer.hitokoto.cn/logo.png",
                        url: "https://developer.hitokoto.cn/"
                    },

                ]
            },
        ]
    },

    
    
    
    
]
