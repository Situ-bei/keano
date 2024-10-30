---
date: 2024-10-30
title: 一个打包问题引出 cursor 的使用
# icon: fab fa-markdown
category:
- blog
- vuepress
- do it
- 指南
tag:
- 关于本站
- console.log
- vite
- cursor

excerpt: <p>一直想配置 vite 的打包过程去除 console.log，但是在 vuepress 中不会，于是我引入了 cursor</p>
---

## 前言

&emsp;&emsp;作为一个新手前端爱好者，我时常在自己的项目中使用大量的 `console.log` 来调试代码，但是随着项目越来越大，`console.log` 也越来越多，在开发环境下也就没很多去计较，但是到了生产环境就要考量很多因素。比如，log 会暴露一些隐私信息，造成一些不安全因子。


&emsp;&emsp;首先我是知道 vite 可以配置打包过程中去掉 `console.log`，网上也有很多教程，但是在 vuepress 中怎么去配置却始终没有找到，我翻阅了很多资料，也了解了几个插件。我还是太笨了，我没有找到解决方法，于是我萌生了让 AI 来帮我解决这个问题。那就引出了今天的话主人翁 -- cursor。

&emsp;&emsp;关于 cursor ，我不想太多的去了解它的历史怎么怎么样，我对 AI 的态度就是，这只是工具，至于它会不会替代我们，记住，它也是人写出来的，只是一部分人想替代一部分人，和 AI 其实没关系。

## 搞定邮箱

在这之前我不知道无限邮箱这个概念，为了白嫖 cursor 我才在网络上找到了这个东西 --[2925无线邮箱](https://www.2925.com/)。

关于它的使用很简单，你需要注册一个邮箱，然后再 cursor 14天体验到期后，随意再你的邮箱地址 @ 前加上一个字母，或者数字什么的就可以获得一个新的邮箱，但是邮件还是会发送到你之前的主邮箱。

例如：`2606405907qq@2925.com` 这是我的主邮箱， `2606405907qqq@2925.com` 好了我获得了一个新的邮箱。

## 搞定 cursor

这里其实没有什么，就是下载 cursor ，可以去[官网](https://www.cursor.com/),下载桌面端，安装。

你可以选择你的编辑器，我使用的 vscode，我理所当然的选择了基于 vscode 的 cursor。

由于 vscode 是开源的， cursor 基于 vscode 进行了魔改来适用自己的特性，你可以使用你在 vscode 上的一切，没错，就是一切。但是我遇到了一个很坑的点，我是安装vscode 了的，也装了中文包插件，但是我第一次进 cursor 的时候，我傻了，全是英文，我以为我装了个寂寞。我以为需要额外的设置什么，其实不然，很简单，你只需要卸载你的中文包，然后再安装就好了。靠，这都是摸索来的，不懂之前像个瞎子。

然后就是对话框的中文设置，你需要发送 `ZH-CN ONLY` ，然后 cursor 会自动识别你的语言，然后就会使用中文回答了。

## 搞定 vite 打包设置

之前讲了，我已经了解了一些插件，只是不知道再 vuepress 中如何配置，我询问了 cursor ，它给出了正确的答案（虽然经过了好几次的失败）。

1. 首先就是安装插件：

::: code-tabs

@tab yarn

```bash
yarn add terser -D
```

@tab:active npm

```bash
npm install terser --save-dev
```

:::

2. 然后在 vuepress 的 `config.ts` 中进行一下配置：

```ts
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
    //...,
    
    // 【vite 配置】
    bundler: viteBundler({
        viteOptions: {
        build: {
            minify: 'terser', // 使用 terser 进行代码压缩
            terserOptions: {
            compress: {
                drop_console: true, // 移除所有 console.* 调用
                drop_debugger: true, // 移除所有 debugger 语句
                pure_funcs: ['console.log', 'console.info', 'console.warn'] // 指定要移除的特定函数调用
            },
            format: {
                comments: false
            }
            }
        }
        }
    }),

    //...,
})
```
3. 到这里其实配置已经完成了，但是还需要一些问题你要知道。如果你想保留一些 log 信息，你有两种方式：
    - 将 `drop_console: true`, 改为 `drop_console: false`,不移除全部 log 信息，然后在需要保留的 log 信息前面加上 `/* @__PURE__ */`  标识。
    - 使用 `console.info` 或者 `console.warn` 来代替 `console.log`。这样在 `pure_funcs: ['console.log', 'console.info', 'console.warn']` 这里你就不必移除 info 和 warn 了。
    ```js
    /* @__PURE__ */ console.log('这个会被移除');
    console.info('这个会保留');  // info 没有被配置移除
    console.log('这个会被移除');
    ```