import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

const footerICP_HTML = `
<a class="footer-icp" href="https://beian.miit.gov.cn" target="_blank">
  <img src="//file.mo7.cc/static/img/beian.png">
  陕ICP备2022011574号
</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="footer-about" href="/about/website.html">关于本站</a>
`;

export default hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "Keano",
    url: "https://mister-hope.com",
  },

  fullscreen: true,//设置全屏

  lastUpdated:true,// 是否显示页面最后更新时间

  navbarAutoHide: 'always', //导航栏自动隐藏

  darkmode: "toggle", // 暗黑模式

  footer: footerICP_HTML,
  
  // 图标引入地址
  iconAssets: [
    "fontawesome-with-brands",
    "//at.alicdn.com/t/c/font_4705467_qzwikjb46w.css",
  ],  

  logo: "/logo.svg", // logo

  repo: "vuepress-theme-hope/vuepress-theme-hope", // github仓库


  // 你可以通过在主题选项中设置如下项目，来自动为每个页面生成编辑此页链接
  docsDir: "src",
  
  // 想要全局禁用这些项目的显示，请在主题选项中，将以下对应项目设置为 false
  editLink: false,

  // enable it to preview all changes in time  使其能够及时预览所有更改
  // 由于 git 插件需要调用 Git 程序并且涉及文件 IO，因此此功能会对启动与热更新速度造成严重影响，
  // 所以默认情况下主题不会在开发模式下启用。
  // 如有需要，请在主题选项中设置 plugins.git: true 或 hotReload: true。
  hotReload: true,
  
  
  
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
  
  //主页sidebar 链接设置
  blog: {
    medias: {
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

      // footer: "默认页脚",

      displayFooter: true,

      blog: {
        description: "一个前端开发者",
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

      footer: "Default footer",

      displayFooter: true,

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
  
  //页面加密设置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["134130"],
      "/en/demo/encrypt.html": ["134130"],
    },
  },

  //插件
  plugins: {
    blog: true, // 官方博客插件
    photoSwipe: false, // 官方图片预览插件，这个插件难用的 一 B



    

    
    // Install @waline/client before enabling it  【在启用@waline/client之前安装它 】
    // Note: This is for testing ONLY!  【注意：这仅用于测试！ 】
    // You MUST generate and use your own comment service in production. 【您必须在生产中生成和使用自己的评论服务。】
    // comment: {
    //   provider: "Waline",  //选中评论服务
    //   serverURL: "https://waline-comment.vuejs.press",  //Waline 的服务端地址
    // },

    comment: {
      provider: "Giscus",  // 选中要搭建评论服务的平台
      repo:"Situ-bei/comment", // Giscus的仓库
      repoId:"R_kgDOM9t6kQ",   // Giscus的仓库ID
      categoryId:"DIC_kwDOM9t6kc4CjMst", // Giscus的分类ID
      category:'Announcements',  // Giscus的分类

    },
    
    // Register components globally  【全局注册组件】
    components: {
      components: ["Badge", "VPCard"],
    },

    // These features are enabled for demo, only preserve features you need here
    // 这些功能可用于演示，仅保留您在此处需要的功能
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true,
    },

    // markdownMath: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install mathjax-full before enabling it
    //   type: "mathjax",
    // },

    // This features is enabled for demo, only preserve if you need it
    markdownTab: true,

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
});
