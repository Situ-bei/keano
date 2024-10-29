---
title: 《Markdown 展示》
icon: fab fa-markdown
order: 1
category:
  - 使用指南
tag:
  - Markdown

headerDepth: 6
---

VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。

你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。

<!-- more -->

# Markdown 介绍

如果你是一个新手，还不会编写 Markdown，请先阅读 [Markdown 介绍](https://theme-hope.vuejs.press/zh/cookbook/markdown/) 和 [Markdown 演示](https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html)。

关于本主体 [markdown](https://theme-hope.vuejs.press/zh/guide/markdown/intro.html) 详细使用指南

# Markdown 配置

VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。

::: important Frontmatter

Frontmatter 是 VuePress 中很重要的一个概念，请阅读 [Frontmatter 介绍](https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter) 了解详情。

:::

# Markdown 扩展

VuePress 会使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 [语法扩展](https://github.com/markdown-it/markdown-it#syntax-extensions) 。

## VuePress 扩展

为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。

关于这些扩展，请阅读 [VuePress 中的 Markdown 扩展](https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html)。

## 主题扩展

通过 VuePress 插件，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。

### 1. 选项卡

::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/tabs.html)

### 2. 脚注

此文字有脚注[^first].

[^first]: 这是脚注内容

::: details How to use it
    此文字有脚注[^first].

    [^first]: 这是脚注内容
:::

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/footnote.html)

### 3. 导入文件

`<!-- @include: ./README.md{11-17} -->`

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/include.html)

### 4. TeX 语法

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tex.html)

### 5. 任务列表

- [x] 计划 1
- [ ] 计划 2

[查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tasklist.html)

### 6. 图片增强

支持为图片设置颜色模式和大小。

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/image.html)

### 7. 上下角标

19^th^ H~2~O

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/sup-sub.html)

### 8. 组件

```component VPCard
title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mister-hope.com/logo.svg
link: https://mister-hope.com
background: rgba(253, 230, 138, 0.15)
```

::: details How to use it

    ```component VPCard
    title: Mr.Hope
    desc: Where there is light, there is hope
    logo: https://mister-hope.com/logo.svg
    link: https://mister-hope.com
    background: rgba(253, 230, 138, 0.15)
    ```

:::

- [查看详情](https://theme-hope.vuejs.press/zh/guide/component/grammar.html)

### 9. 提示容器
#### 1. v-pre

::: v-pre

安全的在 Markdown 中使用 {{ variable }}。

:::

::: details How to use it

    ::: v-pre
        安全的在 Markdown 中使用 {{ variable }}。
    :::

:::

#### 2. info

::: info 自定义标题

信息容器，包含 `代码` 与 [链接](#提示容器)。

```js
const a = 1;
```

:::

::: details How to use it

    ::: info 自定义标题

    信息容器，包含 `代码` 与 [链接](#提示容器)。

    ```js
    const a = 1;
    ```

    :::

:::

#### 3. tip
::: tip 自定义标题
提示容器
:::

#### 4. warning
::: warning 自定义标题
警告容器
:::

#### 5. caution
::: caution 自定义标题
危险容器
:::

#### 6. details
::: details 自定义标题
详情容器
:::

- [GitHub 警示](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/alert.html)
- [提示框](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/hint.html)

### 10. 自定义对齐

::: center
我是居中的
:::

::: right
我在右对齐
:::

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/align.html)

### 11. 属性支持

一个拥有 ID 的 **单词**{#word}。

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/attrs.html)

### 12. 标记

你可以标记 ==重要的内容== 。

::: details How to use it
    你可以标记 ==重要的内容== 。
:::

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/mark.html)

### 13. 剧透

人道洛阳花似锦，!!偏我来时不逢春!!。
::: details How to use it
    人道洛阳花似锦，!!偏我来时不逢春!!。
:::

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/spoiler.html)

### 14. 样式化

向 Mr.Hope 捐赠一杯咖啡。 _Recommended_

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/stylize.html)

### 14. 图表

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html" width="100%" height="450"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/chartjs.html)

### 15. ECharts

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html" width="100%" height="800"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html)

### 16. 流程图

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html" width="100%" height="450"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/flowchart.html)

### 17. MarkMap

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html" width="100%" height="380"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/markmap.html)

### 18. Mermaid

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html" width="100%" height="620"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/mermaid.html)

### 19.PlantUML

@startuml
Alice -> Bob: 认证请求

alt 成功情况

    Bob -> Alice: 认证接受

else 某种失败情况

    Bob -> Alice: 认证失败
    group 我自己的标签
    Alice -> Log : 开始记录攻击日志
        loop 1000次
            Alice -> Bob: DNS 攻击
        end
    Alice -> Log : 结束记录攻击日志
    end

else 另一种失败

    Bob -> Alice: 请重复

end
@enduml

- [View Detail](https://theme-hope.vuejs.press/zh/guide/markdown/chart/plantuml.html)

### 20. 代码块

::: code-tabs

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::

::: details How to use it
    ::: code-tabs

    @tab pnpm

    ```bash
    pnpm add -D vuepress-theme-hope
    ```

    @tab yarn

    ```bash
    yarn add -D vuepress-theme-hope
    ```

    @tab:active npm

    ```bash
    npm i -D vuepress-theme-hope
    ```

    :::
:::


- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/code-tabs.html)

### 21. 代码演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html" width="100%" height="450"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/demo.html)

### 22. 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html" width="100%" height="480"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/playground.html)

### 23. Kotlin 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html" width="100%" height="220"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/kotlin-playground.html)

### 24. Sandpack 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html" width="100%" height="380"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/sandpack.html)

### 25. Vue 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html" width="100%" height="380"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/vue-playground.html)

### 26. 幻灯片

<iframe src="https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html" width="100%" height="420"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/revealjs.html)
