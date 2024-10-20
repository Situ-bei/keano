import comp from "F:/桌面/【Vue】/Blog/keano/.vscode/.vp-temp/pages/study/coding/Vue/vite.html.vue"
const data = JSON.parse("{\"path\":\"/study/coding/Vue/vite.html\",\"title\":\"《Vite》\",\"lang\":\"zh-CN\",\"frontmatter\":{\"number headings\":\"auto, first-level 1, max 6, contents ^top, 1.1\",\"title\":\"《Vite》\",\"category\":[\"前端\",\"Vue\"],\"tags\":[\"前端\",\"Vite\",\"Vue生态\",\"让我们变得更强大\"],\"date\":\"2024-08-27T13:29:00.000Z\",\"feed\":false,\"seo\":false,\"head\":[]},\"headers\":[],\"git\":{\"createdTime\":1728822746000,\"updatedTime\":1729368407000,\"contributors\":[{\"name\":\"situ-bei\",\"email\":\"2606405907@qq.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":0.3,\"words\":90},\"filePathRelative\":\"study/coding/Vue/vite.md\",\"localizedDate\":\"2024年8月27日\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
