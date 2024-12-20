---
date: 2024-10-29
title: 关于本站
icon: icon-xinxi-fang-F

index: false
timeline: false
article: false
sidebar: false
---
::: info 
    记录本站更新相关内容
:::

```shell:no-line-numbers
├── src
│   ├── .vuepress                    # VuePress 配置目录
│   │   ├── components               # 自定义组件
│   │   │   ├── BlogBeautify.vue
│   │   │   ├── BlogBg.vue
│   │   │   ├── HeroBG.vue
│   │   │   ├── HeroHitokoto.vue
│   │   │   ├── NavMusic.vue
│   │   │   ├── PrintVersion.vue
│   │   │   ├── TopNavBeautify.vue
│   │   │   ├── collect
│   │   │   │   ├── MyCollect.vue
│   │   │   │   └── MyCoverLink.vue
│   │   │   └── essay
│   │   │       ├── News.vue
│   │   │       ├── NewsItem.vue
│   │   │       └── NewsList.vue
│   │   ├── data                     # 数据文件
│   │   │   ├── collectData.ts
│   │   │   └── collectType.ts
│   │   ├── plugins                  # 插件目录
│   │   ├── styles                   # 样式文件
│   │   │   ├── index.scss
│   │   │   └── palette.scss
│   │   ├── client.ts                # 客户端配置
│   │   ├── config.ts                # 主配置文件
│   │   └── theme.ts                 # 主题配置
│   ├── blog                         # 博客文章
│   ├── demo                         # 示例文件
│   ├── en                          # 英文内容
│   ├── life                        # 生活分类
│   │   ├── books
│   │   ├── movie
│   │   └── music
│   └── study                       # 学习分类
│       └── coding
├── .github                         # GitHub 配置
│   ├── ISSUE_TEMPLATE
│   │   └── bug-report.yml
│   └── workflows
│       └── deploy-docs.yml
├── package.json
└── README.md
```
## V1.1.0（2024-10-23）
由于之前不熟悉 VuePress 本站建的很慌乱，很多东西都是不成熟和完善的，而且是部署在Github上的，访问速度很感人。在一次编码失误导致网站瘫痪后，就重新构建了本站，并重新部署在 netlify 上。

## V1.2.0（2024-10-29）
1. 优化了一下背景动画和颜色，着重想解决背景色和主题色一起改变，增加主题色改变的实质感官效果，但是主题色是通过内部维护的变量控制，在现阶段我还需要背景透明以显示背景蒙版下的动效，但是内部变量控制的颜色无法去手动控制透明度，所以就放弃了此想法。暂时搁置。

2. 增加的`收藏`页面，重写了布局，具体详情移步记录。

3. 添加 `关于` `关于本站` 页面。

## V1.2.1（2024-10-30）
1. 新增 [Blog](./blog/) 分类
2. 新增文章 [《诺奖与中华文明崛起》](./study/history/overview/诺奖与中华文明崛起.md)
3. 新增随笔 [世间一句](./essay/)

## V1.2.2（2024-10-30）
1. ~配置 `console.log` 移除插件~

## V1.2.3（2024-10-30）
1. 新增文章 [《一个打包问题引出 cursor 的使用》](./blog/cursor.md)

## V1.2.4（2024-10-31）
1. 新增[随笔](./essay/)页面排序按钮

## V1.2.5（2024-11-01）
1. 新增随笔页面 多少天前 时间格式
2. 更新文章若干

## V1.2.6（2024-11-07）
1. 新增 [Todo](./todo) 页面
2. 封装全局函数式确认消息框组件【confirmDailog】
3. 封装【tooltip】组件，可用通过插槽自定义内容，通过 line 参数控制行数，内容溢出时自动显示pop弹窗 

## V1.2.7（2024-11-08）
1. 优化 Todo 页面布局
    - 删除按钮增加图标
    - 优化标题，标签布局，标签跟随标题内容变化
    - 功能按钮增加二次确认
    - 完成按钮二次点击取消完成的逻辑优化

## V1.2.8（2024-11-08）
1. 新增 TODO 页面拖拽排序,基于SortableJS
2. 新增文字若干
