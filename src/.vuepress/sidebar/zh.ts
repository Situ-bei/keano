import { sidebar } from "vuepress-theme-hope";
const back_home = {
  text: "首页",
  icon: "icon-home",
  link: "/",
}
export const zhSidebar = sidebar({
  
  // 导航页总导航
  "/": [
    // 首页
    "",
    // 入门
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },

    // 学习
    {
      text: "学习",
      icon: "icon-studyfill",
      prefix: "study/",
      link: "study/",
      // children: "structure",
      collapsible: true,
      children: [
        {
          text: "编程",
          icon: "icon-codingfill", 
          prefix: "coding/",
          link: "coding/",
          collapsible: true,
          // children: "structure",
          children: [
            {
              text: "CSS",
              icon: "icon-cssfill", 
              collapsible: false,
              prefix: "CSS/",
              link: "CSS/",
            },
            {
              text: "HTML",
              icon: "icon-htmlfill", 
              collapsible: false,
              prefix: "HTML/",
              link: "HTML/",
            },
            {
              text: "JS",
              icon: "icon-javascript-filll", 
              collapsible: false,
              prefix: "JS/",
              link: "JS/",
            },
            {
              text: "NodeJS",
              icon: "icon-nodejsGreen", 
              collapsible: false,
              prefix: "NodeJS/",
              link: "NodeJS/",
            },
            {
              text: "Vue",
              icon: "icon-logo-vue", 
              collapsible: false,
              prefix: "Vue/",
              link: "Vue/",
            },
            {
              text: "git",
              icon: "icon-github-fill", 
              collapsible: false,
              prefix: "git/",
              link: "git/",
            },
          ],
        },
        //历史
        {
          text: "历史",
          icon: "icon-TerraCottaWarriors", 
          prefix: "history/",
          link: "history/",
          collapsible: true,
          // children: "structure",
          children: [
            {
              text: "纵览",
              icon: "icon-zonglan", 
              collapsible: false,
              prefix: "overview/",
              link: "overview/",
            }
          ],
        },
        //百科
        {
          text: "百科",
          icon: "icon-wikifill", 
          prefix: "wiki/",
          link: "wiki/",
          collapsible: true,
          children: "structure",},


      ],
    },
    
    // 生活
    {
      text: "生活",
      icon: "icon-studyfill",
      prefix: "life/",
      link: "life/",
      // children: "structure",
      collapsible: true,
      children: [
        {
          text: "书籍",
          icon: "icon-studyfill",
          prefix: "books/",
          link: "books/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "电影",
          icon: "icon-studyfill",
          prefix: "movie/",
          link: "movie/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "音乐",
          icon: "icon-studyfill",
          prefix: "music/",
          link: "music/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
  
  // 生活页总导航

  "/life/books/":[
    back_home,
    {
      text: "书籍",
      icon: "icon-studyfill",
      link: "books/",
      children: "structure",
    }
  ],
  "/life/movie/":[
    back_home,
    {
      text: "电影",
      icon: "icon-studyfill",
      link: "movie/",
      children: "structure",
    }
  ],
  "/life/music/":[
    back_home,
    {
      text: "音乐",
      icon: "icon-studyfill",
      link: "music/",
      children: "structure",
    }
  ],


  // 学习页面总导航
  // 编程
  "/study/coding/":"structure",
  "/study/coding/CSS/":"structure",
  "/study/coding/HTML/":"structure",
  "/study/coding/JS/":"structure",
  "/study/coding/NodeJS/":"structure",
  "/study/coding/Vue/":"structure",
  "/study/coding/git/":"structure",
  //历史
  "/study/history/":"structure",
  "/study/history/overview/":"structure",
  //百科
  "/study/wiki/":"structure",


});
