import { defineClientConfig } from 'vuepress/client';
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
import packageJson from '../../package.json';  // 【引入包信息】

import 'vuepress-theme-hope/presets/bounce-icon.scss'; // 为页面图标添加鼠标悬停的跳动效果。


// 【底部运行时间】
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";

// 【背景雪花特效】
// import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";

// 【将博主信息移动至文章列表的左侧。】
import "vuepress-theme-hope/presets/left-blog-info.scss"
import "vuepress-theme-hope/presets/round-blogger-avatar.scss"  // 博主头像裁剪为圆形

// 引入音乐播放器组件
// import NavMusic from './components/NavMusic.vue'

// 【自定义组件】
import Essay from "./components/essay/News.vue"
import MyCoverLink from './components/MyCoverLink.vue'

const TopNavBeautify = defineAsyncComponent(() => import('./components/TopNavBeautify.vue'));
const HeroBG = defineAsyncComponent(() => import('./components/HeroBG.vue'));
const HeroHitokoto = defineAsyncComponent(() => import('./components/HeroHitokoto.vue'));
const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));
// // const PrintVersion = defineAsyncComponent(() => import('./components/PrintVersion.vue'));
const CommentHideBtn = defineAsyncComponent(() => import('./components/CommentHideBtn.vue'));
// const MyIcon = defineAsyncComponent(() => import('./components/MyIcon.vue'));
// const BlogBg = defineAsyncComponent(() => import('./components/BlogBg.vue'));
const BlogBeautify = defineAsyncComponent(() => import('./components/BlogBeautify.vue'));
// const PreviewImage = defineAsyncComponent(() => import('./components/PreviewImage.vue'));


// https://theme-hope.vuejs.press/zh/guide/advanced/client.html#%E4%BE%8B%E5%AD%90
export default defineClientConfig({
  
  layouts: {
    Essay,
  },
  // 客户端增强
  enhance({ app, router, siteData }) {
    // 注册全局组件
    app.component('MyCoverLink', MyCoverLink);
  },
  
  // 全局注册
  setup() {
    onMounted(() => {
      console.log(
        `%c ${packageJson.description} V${packageJson.version}%c✨ https://github.com/Situ-bei/keano`,
        `background: #aa96da; padding:5px; font-size:12px; color: #fff; font-weight: bold;`,
        `background: #fb9b5f; padding:5px; font-size:12px; color: #ff0000; `,
      );
      
    });
    setupRunningTimeFooter(
      new Date("2024-10-01"),
      {
        "/": 
        `
        
          <span class="footer-time">已运行 :day 天 :hour 小时 :minute 分钟 :second 秒</span>
        `,
        
        "/en/": "Running time: :day days :hour hours :minute minutes :second seconds" ,
      },
      true,
    );
    // setupSnowFall();  // 背景雪花特效
  },
  
  // 全局注册组件
  rootComponents: [
    TopNavBeautify,
    HeroBG,  //首页轮播背景
    HeroHitokoto, //首页热词
    NavMusic,
    // // PrintVersion,
    CommentHideBtn, // 评论区的显示和隐藏按钮，默认是隐藏评论区的，当有留言需要的时候点击按钮显示评论区。
    BlogBeautify, // 了一些相关的主题的细节美化，包括文章分割线小汽车等，基本全是 css 效果。使用 vue 插件实现着扩展方便。
    // BlogBg,  // 背景美化，让整个博客可以添加自定义的背景，让观感更加舒适。包括 sidebar 的毛玻璃效果等。还有内容部分的视觉优化。
    // PreviewImage,
    // ...
    // Essay
  ],
});
