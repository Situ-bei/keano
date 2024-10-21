import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { 
    text: "导航", 
    icon: "icon-daohang", 
    children: [
      { text: '导航', icon: 'icon-daohang', link: '/demo/' },
      { text: '全部', icon: 'icon-quanbu1', link: '/article/' },
      { text: '分类', icon: 'icon-fenlei-copy', link: '/category/' },
      { text: '标签', icon: 'icon-tianchongxing-', link: '/tag/' },
      { text: '时间轴', icon: 'icon-shijianzhou', link: '/timeline/' },
    ],
  },

  // 学习
  {
    text: "学习",
    icon: "icon-wikifill",
    prefix: "/study/",
    activeMatch: "^/study/(?:(?!*/|*/).*)?&",
    children:[
      //编程
      {
        text: "编程",
        icon: "icon-codingfill",
        prefix: "coding/",
        children: [
          { text: "CSS", icon: "icon-cssfill", link: "CSS/" ,},
          { text: "HTML", icon: "icon-htmlfill", link: "HTML/",},
          { text: "JS", icon: "icon-javascript-fill", link: "JS/",},
          { text: "NodeJS", icon: "icon-nodejsGreen", link: "NodeJS/",},
          { text: "Vue生态", icon: "icon-logo-vue", link: "Vue/",},
          { text: "git", icon: "icon-github-fill", link: "git/",},
          { text: "九九八十一难", icon: "icon-martial-arts", link: "interview/",},

        ],
      },
      //历史
      {
        text: "历史",
        // icon: "icon-codingfill",
        prefix: "history/",
        children: [
          { text: "纵览", icon: "icon-zonglan", link: "overview/",},
        ],
      },
      //百科
      {
        text: "百科",
        icon: "icon-wikiColor",
        prefix: "wiki/",
        link: "wiki/"
        // children: [
        //   { text: "纵览", icon: "icon-cssfill", link: "overview/",},
        // ],
      },
    ]
  },

  // 生活
  {
    text: "生活",
    icon: "icon-shenghuo",
    prefix: "/life/",
    children: [
      {
        text: "书籍",
        icon: "icon-studyfill",
        prefix: "books/",
        link: "books/",
      },
      {
        text: "电影",
        icon: "icon-dianying",
        prefix: "movie/",
        link: "movie/",
      },
      {
        text: "音乐",
        icon: "icon-music",
        prefix: "music/",
        link: "music/",
      },
    ]
  },
  
  // 随笔
  {
    text: "随笔",
    icon: "icon-wenji-suibi",
    link: "/essay/",
  },

  

  
]);
