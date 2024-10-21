import { defineUserConfig } from "vuepress";
import { getDirname, path } from 'vuepress/utils';
import theme from "./theme.js";
// 【搜索插件】
// import { searchPlugin } from "@vuepress/plugin-search";
import { searchProPlugin } from "vuepress-plugin-search-pro";

// 【鼠标特效插件】
import { popperPlugin } from "./plugins/vuepress-plugin-popper"; //【popper】
import { meteorPlugin } from "./plugins/vuepress-plugin-meteor" // 【meteor】
import { PopperShape } from "@moefy-canvas/theme-popper";
// import { Meteor } from "@moefy-canvas/theme-meteor"

// 【背景遮罩插件】
import { gradientCoverPlugin } from './plugins/vuepress-plugin-gradient-cover'

// 【背景动效插件】
import {   canvasPlugin, CanvasPluginType, } from './plugins/vuepress-plugin-canvas'

const __dirname = getDirname(import.meta.url);
// 【项目路径】
const SrcPath = path.resolve(__dirname, '../');



export default defineUserConfig({
  alias: {
    '@components': path.resolve(__dirname, 'components'),
    '@src': SrcPath,
  },


  // 站点路由前缀
  // base: "/keano/",
  temp: '.vscode/.vp-temp', // 缓存路径
  cache: '.vscode/.vp-cache', // 缓存路径
  
  head: [
    ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
    // ['link', { rel: 'preload', href: '/keano/.vuepress/public/font/xinkai.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }]
  ], // 禁止 referrer

  // markdown配置  默认情况下，VuePress 只会从 Markdown 提取 h2 和 h3 标题，所以仅靠配置主题，你永远也看不见 h4 标题。
  // https://theme-hope.vuejs.press/zh/faq/common-question.html#%E6%98%BE%E7%A4%BA%E5%9B%9B%E7%BA%A7%E6%88%96%E6%9B%B4%E5%A4%9A%E7%BA%A7%E7%9A%84%E6%A0%87%E9%A2%98
  markdown: {
    headers: {
      // 用到哪一级就提取哪一级
      level: [1, 2, 3, 4, 5, 6],
    },
  },
  
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
    // popperPlugin({
    //   config: {
    //     shape: PopperShape.Star, // 粒子形状
    //     size: 1.95, // 粒子大小
    //     numParticles: 10, // 粒子数量
    //   },
    // }),
    meteorPlugin({
      config: {
        numParticles: 800,
        particleColor:{
          dark: '#000000',
          light: '#ffffff'
        },
      },
    }),
    // 背景遮罩插件
    gradientCoverPlugin({}),
    
    // 背景插件
    canvasPlugin({
      type: CanvasPluginType.Ribbon,
      ribbonOption: {
        zIndex: 0,
        alpha: 0.8,
        size: 90,
      },
    }),
    
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
