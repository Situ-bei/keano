import { defineUserConfig } from "vuepress";
import { getDirname, path } from 'vuepress/utils';
import theme from "./theme.js";
// 【搜索插件】
// import { searchPlugin } from "@vuepress/plugin-search";
import { searchProPlugin } from "vuepress-plugin-search-pro";

// 【鼠标特效插件】
import { popperPlugin } from "./plugins/vuepress-plugin-popper/index.js";

// 背景遮罩插件
import { gradientCoverPlugin } from './plugins/vuepress-plugin-gradient-cover'

const __dirname = getDirname(import.meta.url);
// 【项目路径】
const SrcPath = path.resolve(__dirname, '../');




export default defineUserConfig({
  alias: {
    '@components': path.resolve(__dirname, 'components'),
    '@src': SrcPath,
  },


  // 站点路由前缀
  base: "/keano/",
  temp: '.vscode/.vp-temp', // 缓存路径
  cache: '.vscode/.vp-cache', // 缓存路径
  
  head: [
    ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
    // ['link', { rel: 'preload', href: '/keano/.vuepress/public/font/xinkai.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }]
  ], // 禁止 referrer
  
  // 【插件】
  plugins: [
    
    //搜索插件配置
    // searchPlugin({
    //   // 配置项
    // }),
    searchProPlugin (
      {
        // 索引全部内容
        indexContent: true,
        autoSuggestions: true,
        // 为分类和标签添加索引
        customFields: [
          {
            getter(page: any) {
              return page.frontmatter.category;
            },
            formatter: {
              '/': '分类：$content',
              '/en/': 'Category: $content',
            },
          },
          {
            getter(page: any) {
              return page.frontmatter.tag;
            },
            formatter: {
              '/': '标签：$content',
              '/en/': 'Tag: $content',
            },
          },
        ],
      }
    ),
    

    // 鼠标特效插件
    popperPlugin({
      config: {
        // shape: PopperShape.Star,
        size: 1.95,
        numParticles: 8,
      },
    }),
    // 背景遮罩插件
    gradientCoverPlugin({})
    
  ],
  
  locales: {
    "/": {
      lang: "zh-CN",
      title: "KEANO",
      description: "Keano的博客",
    },
    "/en/": {
      lang: "en-US",
      title: "Keano's Blog",
      description: "A blog demo for vuepress-theme-hope",
    },
  },

  //主题设置
  theme,
  
  
  
  // Enable it with pwa 使用pwa启用它
  shouldPrefetch: false,
},);
