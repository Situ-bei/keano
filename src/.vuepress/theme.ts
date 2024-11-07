import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

const footerICP_HTML = 
`
  <div class="footer-about">
    <a href="/keano/intro.html">关于本站 | Powered by </a> &nbsp;
    <a class="footer-VuePress" href="https://github.com/Situ-bei/keano" target="_blank">VuePress</a>&nbsp;
    <a class="footer-Hope" href="https://github.com/Situ-bei/keano" target="_blank"> Hope </a>
  </div>
`

export default hopeTheme({
  hostname: "https://situ-bei.github.io/keano/", // 网站部署域名

  // 全局默认作者
  author: {
    name: "icyn",
    url: "https://situ-bei.github.io/keano/",
  },

  // 图标引入地址和前缀 icon地址
  iconPrefix: "iconfont ",
  iconAssets: [
    "fontawesome-with-brands",
    "//at.alicdn.com/t/c/font_4705467_gqxz91wk17r.css",
  ],

  logo: "/logo.png", // 导航栏logo
  repo: "//situ-bei.github.io/keano/", // github仓库
  docsDir: "src",
  fullscreen: true,//设置全屏
  navbarAutoHide: 'always', //导航栏自动隐藏
  darkmode: "toggle", // 暗黑模式
  themeColor: true, // 启用主题颜色
  
  //页面元数据：贡献者，最后修改时间，编辑链接
  contributors: true,
  lastUpdated: true,
  editLink: false,

  // 是否开启纯净模式
  // pure: true,

  // 由于 git 插件需要调用 Git 程序并且涉及文件 IO，因此此功能会对启动与热更新速度造成严重影响，
  // 所以默认情况下主题不会在开发模式下启用。
  // 如有需要，请在主题选项中设置 plugins.git: true 或 hotReload: true。
  hotReload: true,
  
  //https://vuepress-theme-hope.github.io/v2/zh/config/frontmatter/layout.html#pageinfo
  //页面信息 
  pageInfo: [
    'Author', //作者信息
    'Word',   //字数
    'Date',
    'ReadingTime',  //阅读时长
    'Original', // 原创文章
    'Tag',      //标签
    'PageView', //游览记录
    'Category', //分类
    //..
  ],

  // navbar 布局
  navbarLayout: {
    start: ['Brand'],
    center: [],
    end: ['Search', 'Links', 'Language', 'Outlook'],
  },
  
  // siderbar 排序
  // https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html#%E8%BF%9B%E9%98%B6%E6%8E%A7%E5%88%B6
  sidebarSorter: ["order","date-desc"],

  blog: {
    name: 'Icyn',
    avatar: '/assets/icon/avatar.jpg',
    description: '让我们变得更强。',
    intro: '//situ-bei.github.io/keano/',
    
    medias: {
      '163Music': "https://music.163.com/#/my/m/music/playlist?id=596766562",
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "mailto:info@example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // GitHub: "https://example.com",
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      // VuePressThemeHope: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://theme-hope.vuejs.press",
      // },
    },
  },

  locales: {
      /**
   * Chinese locale config  前置中文区域设置
   */
      "/": {
        // navbar
        navbar: zhNavbar,
        // sidebar
        sidebar: zhSidebar,
        // footer: "由VuePress主题Hope构建",
        footer: footerICP_HTML,
        
        displayFooter: false,
        blog: {
          intro: "/intro.html",
        },
        
        metaLocales: {
          editLink: "编辑此页",
        },
      },

      /**
       * English locale config 前置英文区域设置
       */
      "/en/": {
        // navbar
        navbar: enNavbar,
        // sidebar
        sidebar: enSidebar,
        blog: {
          description: "A FrontEnd programmer",
          intro: "/en/intro.html",
        },

        // page meta
        metaLocales: {
          editLink: "Edit this page",
        },
      },
  },

  // 【全局加密设置】
  encrypt: {
    config: {
      "/demo/encrypt.html": ["134130"],
      "/en/demo/encrypt.html": ["134130"],
      "/study/coding/": "134130"
    },
  },

  plugins: {
    blog: {
      // 默认文章过滤器
      filter: ({ filePathRelative, frontmatter }) => {
        // 将标记为非文章，并且是说说的加入文章采集中，以便后续筛选
        if (!frontmatter.article && frontmatter.essay) return true;

        return true;
      },
      
      // 自定义文章类型
      type: [
        {
          key: "essay",
          filter: (page) => page.frontmatter.essay === true,
          layout: "Essay",
          frontmatter: () => ({ title: "随笔" }),
        },
      ],
    },
    
    
    // 【评论插件】
    comment: {
      provider: "Giscus",  // 选中要搭建评论服务的平台
      repo:"Situ-bei/comment", // Giscus的仓库
      repoId:"R_kgDOM9t6kQ",   // Giscus的仓库ID
      categoryId:"DIC_kwDOM9t6kc4CjMst", // Giscus的分类ID
      category:'Announcements',  // Giscus的分类
      lazyLoading: true,
    },

    // 代码块高亮 【shiki插件】
    shiki: {
      // 你想要使用的主题
      themes: {
        light: "one-light",
        dark: "one-dark-pro",
      },
      langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff','javascript','less','css','scss','typescript','html','http','py','jsx'],
      collapsedLines: true, // 是否折叠代码行
      notationHighlight: true,
    },
    
    // 【内置插件设置】
    components: {
      components: ["Badge", "VPCard","BiliBili","VidStack",'Share'],
      componentOptions:{
        share:{
          services:["qq","qrcode","vk"],
          
        }
      }
    },


    // 这些功能可用于演示，仅保留您在此处需要的功能
    // markdown图片处理
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true,
    },

    markdownMath: {
      // install katex before enabling it
      type: "katex",
      // or install mathjax-full before enabling it
      // type: "mathjax",
    },

    // This features is enabled for demo, only preserve if you need it
    markdownTab: true,

    markdownHint: {
      // 启用 GFM 警告
      alert: true,
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,
      markmap: true,
      footnote: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },
  
},
{ custom: true }, // 配置自定义主题
);
