import { sidebar } from "vuepress-theme-hope";
const back_home = {
  text: "主页",
  icon: "icon-homefill",
  link: "/",
}

export const zhSidebar = sidebar({
// 导航页总导航
  "/": [
    // 首页
    back_home,
    // 指南
    {
      text: "指南",
      icon: "icon-shiyongzhinan",
      prefix: "demo/",
      link: "demo/",
      collapsible: true,
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
              text: "九九八十一难",
              icon: "icon-martial-arts", 
              collapsible: false,
              prefix: "interview/", // structure
              link: "interview/",
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
      icon: "icon-shenghuo",
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
          icon: "icon-dianying",
          prefix: "movie/",
          link: "movie/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "音乐",
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
      icon: "icon-music",
      link: "music/",
      children: "structure",
    }
  ],


  // 学习页面总导航
  // 编程
  "/study/coding/":[
    back_home,
    {
      text: "编程",
      icon: "icon-codingfill",
      // prefix: "coding/",
      // link: "/study/coding/",
      // collapsible: true,
      children: "structure",
    }
  ],
  "/study/coding/CSS/":[
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
  "/study/coding/HTML/":[
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
  "/study/coding/JS/":[
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
  "/study/coding/NodeJS/":[
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
  "/study/coding/Vue/":[
    back_home,
    {
      text: "Vue",
      icon: "icon-logo-vue",
      children: "structure",
      
    }
  ],
  "/study/coding/git/":[
    back_home,
    {
      text: "git",
      icon: "icon-github-fill",
      children: "structure",
      
    }
  ],
  "/study/coding/interview/":[
    back_home,
    {
      text: "九九八十一难",
      icon: "icon-martial-arts",
      children: "structure",
      
    }
  ],
  
  //历史
  "/study/history/":[
    back_home,
    {
      text: "历史",
      icon: "icon-TerraCottaWarriors",
      children: "structure",
    }
  ],
  "/study/history/overview/":[
    back_home,
    {
      text: "纵览",
      icon: "icon-zonglan",
      children: "structure",
    }
  ],
  //百科
  "/study/wiki/":"structure",
});
