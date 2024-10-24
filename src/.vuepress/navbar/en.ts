import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
"/en/",
  { 
    text: "Navigation", 
    icon: "icon-daohang", 
    prefix: '/en/',
    children: [
      { text: 'Navigation', icon: 'icon-daohang', link: 'demo/' },
      { text: 'Article', icon: 'icon-quanbu1', link: 'article/' },
      { text: 'Category', icon: 'icon-fenlei-copy', link: 'category/' },
      { text: 'Tags', icon: 'icon-tianchongxing-', link: 'tag/' },
      { text: 'TimeLine', icon: 'icon-shijianzhou', link: 'timeline/' },
      { text: 'Collect', icon: 'icon-shoucang', link: '/collect' },
    ],
  },

  // 学习
  {
    text: "Study",
    icon: "icon-wikifill",
    prefix: "/en/study/",
    activeMatch: "^/study/(?:(?!*/|*/).*)?&",
    children:[
      //编程
      {
        text: "Coding",
        icon: "icon-codingfill",
        prefix: "coding/",
        children: [
          { text: "CSS", icon: "icon-cssfill", link: "CSS/" ,},
          { text: "HTML", icon: "icon-htmlfill", link: "HTML/",},
          { text: "JS", icon: "icon-javascript-fill", link: "JS/",},
          { text: "NodeJS", icon: "icon-nodejsGreen", link: "NodeJS/",},
          { text: "Vue生态", icon: "icon-logo-vue", link: "Vue/",},
          { text: "Git", icon: "icon-github-fill", link: "git/",},
          { text: "9981 difficulty", icon: "icon-martial-arts", link: "interview/",},

        ],
      },
      //历史
      {
        text: "History",
        // icon: "icon-codingfill",
        prefix: "history/",
        children: [
          { text: "OverView", icon: "icon-zonglan", link: "overview/",},
        ],
      },
      //百科
      {
        text: "WiKi",
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
    text: "Life",
    icon: "icon-shenghuo",
    prefix: "/en/life/",
    children: [
      {
        text: "Books",
        icon: "icon-studyfill",
        prefix: "books/",
        link: "books/",
      },
      {
        text: "Movies",
        icon: "icon-dianying",
        prefix: "movie/",
        link: "movie/",
      },
      {
        text: "Music",
        icon: "icon-music",
        prefix: "music/",
        link: "music/",
      },
    ]
  },
  
  // 随笔
  {
    text: "Essay",
    icon: "icon-wenji-suibi",
    link: "/en/essay/",
  },
]);
