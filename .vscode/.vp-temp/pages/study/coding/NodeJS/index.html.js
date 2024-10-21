import comp from "F:/桌面/【Vue】/Blog/keano/.vscode/.vp-temp/pages/study/coding/NodeJS/index.html.vue"
const data = JSON.parse("{\"path\":\"/study/coding/NodeJS/\",\"title\":\"NodeJS\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"icon-nodejsGreen\",\"title\":\"NodeJS\",\"date\":\"2024-10-11T00:00:00.000Z\",\"index\":false,\"timeline\":false,\"article\":false,\"feed\":false,\"seo\":false,\"head\":[]},\"headers\":[{\"level\":1,\"title\":\"HTML\",\"slug\":\"html\",\"link\":\"#html\",\"children\":[]}],\"git\":{\"createdTime\":1728822746000,\"updatedTime\":1728822746000,\"contributors\":[{\"name\":\"situ-bei\",\"email\":\"2606405907@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.11,\"words\":34},\"filePathRelative\":\"study/coding/NodeJS/README.md\",\"localizedDate\":\"2024年10月11日\"}")
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
