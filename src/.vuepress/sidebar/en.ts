import { sidebar } from "vuepress-theme-hope";

const back_home = {
  text: "HomePage",
  icon: "icon-homefill",
  link: "/en/",
}


export const enSidebar = sidebar({
// 导航页总导航
"/en/": [
  // 首页
  back_home,
  // 指南
  {
    text: "guide",
    icon: "icon-shiyongzhinan",
    prefix: "demo/",
    link: "demo/",
    children: "structure",
  },

  // 学习
  {
    text: "Study",
    icon: "icon-studyfill",
    prefix: "study/",
    link: "study/",
    // children: "structure",
    collapsible: true,
    children: [
      {
        text: "Coding",
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
            icon: "icon-javascript-fill", 
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
          {
            text: "9981 difficulty",
            icon: "icon-martial-arts", 
            collapsible: false,
            prefix: "interview/", // structure
            link: "interview/",
          },
        ],
      },
      //历史
      {
        text: "History",
        icon: "icon-TerraCottaWarriors", 
        prefix: "history/",
        link: "history/",
        collapsible: true,
        // children: "structure",
        children: [
          {
            text: "OverView",
            icon: "icon-zonglan", 
            collapsible: false,
            prefix: "overview/",
            link: "overview/",
          }
        ],
      },
      //百科
      {
        text: "WiKi",
        icon: "icon-wikifill", 
        prefix: "wiki/",
        link: "wiki/",
        collapsible: true,
        children: "structure",},


    ],
  },
  
  // 生活
  {
    text: "Life",
    icon: "icon-shenghuo",
    prefix: "life/",
    link: "life/",
    // children: "structure",
    collapsible: true,
    children: [
      {
        text: "Books",
        icon: "icon-studyfill",
        prefix: "books/",
        link: "books/",
        collapsible: true,
        children: "structure",
      },
      {
        text: "Movies",
        icon: "icon-dianying",
        prefix: "movie/",
        link: "movie/",
        collapsible: true,
        children: "structure",
      },
      {
        text: "Music",
        icon: "icon-music",
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
"/en/life/books/":[
  back_home,
  {
    text: "Books",
    icon: "icon-studyfill",
    link: "books/",
    children: "structure",
  }
],
"/en/life/movie/":[
  back_home,
  {
    text: "Movies",
    icon: "icon-studyfill",
    link: "movie/",
    children: "structure",
  }
],
"/en/life/music/":[
  back_home,
  {
    text: "Music",
    icon: "icon-music",
    link: "music/",
    children: "structure",
  }
],


// 学习页面总导航
// 编程
"/en/study/coding/":[
  back_home,
  {
    text: "Coding",
    icon: "icon-codingfill",
    // prefix: "/en/study/coding/",
    // link: "/study/coding/",
    // collapsible: true,
    children: "structure",
  }
],
"/en/study/coding/CSS/":[
  back_home,
  {
    text: "CSS",
    icon: "icon-cssfill",
    // prefix: "coding/",
    // link: "/study/coding/CSS/",
    // collapsible: true,
    children: "structure",
  }
],
"/en/study/coding/HTML/":[
  back_home,
  {
    text: "HTML",
    icon: "icon-htmlfill",
    // prefix: "coding/",
    // link: "/study/coding/HTML/",
    // collapsible: true,
    children: "structure",
  }
],
"/en/study/coding/JS/":[
  back_home,
  {
    text: "JS",
    icon: "icon-javascript-filll",
    // prefix: "coding/",
    // link: "/study/coding/JS/",
    // collapsible: true,
    children: "structure",
  }
],
"/en/study/coding/NodeJS/":[
  back_home,
  {
    text: "NodeJS",
    icon: "icon-nodejsGreen",
    // prefix: "coding/",
    // link: "/study/coding/NodeJS/",
    // collapsible: true
    children: "structure",
  }
],
"/en/study/coding/Vue/":[
  back_home,
  {
    text: "Vue",
    icon: "icon-logo-vue",
    children: "structure",
    
  }
],
"/en/study/coding/git/":[
  back_home,
  {
    text: "git",
    icon: "icon-github-fill",
    children: "structure",
    
  }
],
"/en/study/coding/interview/":[
  back_home,
  {
    text: "9981 difficulty",
    icon: "icon-martial-arts",
    children: "structure",
    
  }
],

//历史
"/en/study/history/":[
  back_home,
  {
    text: "History",
    icon: "icon-TerraCottaWarriors",
    children: "structure",
  }
],
"/en/study/history/overview/":[
  back_home,
  {
    text: "OverView",
    icon: "icon-zonglan",
    children: "structure",
  }
],
//百科
"/en/study/wiki/":"structure",
});
