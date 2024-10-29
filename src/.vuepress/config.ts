import { defineUserConfig } from "vuepress";
import theme from "./theme.js"; // 引入主题

// 【搜索插件】
import { searchProPlugin } from "vuepress-plugin-search-pro";

// 【鼠标特效插件】
import { popperPlugin } from "./plugins/vuepress-plugin-popper"; //【popper】
import { PopperShape } from "@moefy-canvas/theme-popper";

import { meteorPlugin } from "./plugins/vuepress-plugin-meteor/index.js" // 【meteor】


// 【背景遮罩插件】
import { gradientCoverPlugin } from './plugins/vuepress-plugin-gradient-cover'

// 【背景动效插件】
import {   canvasPlugin, CanvasPluginType, } from './plugins/vuepress-plugin-canvas'



// 【路径】
import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  // base: "/",



  
  alias: {
    "@MyCoverLink": path.resolve(__dirname, "components/MyCoverLink.vue"),
    "@MyData": path.resolve(__dirname, "data/collectData.ts"),
    
  },

  locales: {
    "/": {
      lang: "zh-CN",
      title: "icyn",
      description: "icyn的博客",
    },
    "/en/": {
      lang: "en-US",
      title: "icyn",
      description: "icyn's Blog",
    },
  },

  // 【引入主题】
  theme,

  // 【禁用原生pwa】
  shouldPrefetch: false,

  // 【markdown配置】
  // markdown配置  默认情况下，VuePress 只会从 Markdown 提取 h2 和 h3 标题，所以仅靠配置主题，你永远也看不见 h4 标题。
  // https://theme-hope.vuejs.press/zh/faq/common-question.html#%E6%98%BE%E7%A4%BA%E5%9B%9B%E7%BA%A7%E6%88%96%E6%9B%B4%E5%A4%9A%E7%BA%A7%E7%9A%84%E6%A0%87%E9%A2%98
  markdown: {
    headers: {
      // 用到哪一级就提取哪一级
      level: [1,2, 3, 4, 5, 6],
    },
  },
  
  // 【插件配置】
  plugins:[
    // 【搜索插件】
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
        opacity:0.2,
        numParticles: 80,
        particleColor:{
          light: 'rgba(102, 175, 239, .2)',
          dark: 'rgba(102, 175, 239, .2)'
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


});
