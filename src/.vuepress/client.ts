import { defineClientConfig } from 'vuepress/client';
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
import 'vuepress-theme-hope/presets/bounce-icon.scss'; // 为页面图标添加鼠标悬停的跳动效果。
import BlogBg from './components/BlogBg.vue'

const TopNavBeautify = defineAsyncComponent(() => import('./components/TopNavBeautify.vue'));
const HeroBG = defineAsyncComponent(() => import('./components/HeroBG.vue'));
const HeroHitokoto = defineAsyncComponent(() => import('./components/HeroHitokoto.vue'));
const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));
const PrintVersion = defineAsyncComponent(() => import('./components/PrintVersion.vue'));
const CommentHideBtn = defineAsyncComponent(() => import('./components/CommentHideBtn.vue'));
const MyIcon = defineAsyncComponent(() => import('./components/MyIcon.vue'));
// const BlogBg = defineAsyncComponent(() => import('./components/BlogBg.vue'));
const BlogBeautify = defineAsyncComponent(() => import('./components/BlogBeautify.vue'));
const PreviewImage = defineAsyncComponent(() => import('./components/PreviewImage.vue'));

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('MyIcon', MyIcon);
  },
  setup() {
    onMounted(() => {});
  },
  rootComponents: [
    TopNavBeautify,
    HeroBG,  //首页轮播背景
    HeroHitokoto, //首页热词
    NavMusic,
    PrintVersion,
    CommentHideBtn, // 评论区的显示和隐藏按钮，默认是隐藏评论区的，当有留言需要的时候点击按钮显示评论区。
    BlogBeautify, // 了一些相关的主题的细节美化，包括文章分割线小汽车等，基本全是 css 效果。使用 vue 插件实现着扩展方便。
    BlogBg,  // 背景美化，让整个博客可以添加自定义的背景，让观感更加舒适。包括 sidebar 的毛玻璃效果等。还有内容部分的视觉优化。
    PreviewImage,
    // ...
  ],
});
