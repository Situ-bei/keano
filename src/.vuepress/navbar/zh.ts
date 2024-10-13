import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "导航", icon: "icon-daohang", link: "/demo/" },

  // 学习
  {
    text: "学习",
    icon: "icon-studyfill",
    prefix: "/study/",
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
        icon: "icon-codingfill",
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
    icon: "icon-studyfill",
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
        icon: "icon-studyfill",
        prefix: "movie/",
        link: "movie/",
      },
      {
        text: "音乐",
        icon: "icon-studyfill",
        prefix: "music/",
        link: "movie/",
      },
    ]
  },
]);
