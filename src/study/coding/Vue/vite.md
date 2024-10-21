---
number headings: auto, first-level 1, max 6, contents ^top, 1.1
title: 《Vite》
category:
- 前端
- Vue
tags:
- 前端
- Vite
- Vue生态
- 让我们变得更强大
date: 2024-08-27T13:29:00
---
# vite

- 官方网站：[https://cn.vitejs.dev/](https://cn.vitejs.dev/)

```bash
# 1 npm 7+，需要添加额外的 --：
npm create vite@latest my-vue-app -- --template vue
```

- vite 设置全局 @ 路径别名

```js
//【vite.config.js】 文件
export default defineConfig({
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  }
})
```

