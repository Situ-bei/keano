import comp from "F:/桌面/【Vue】/Blog/keano/.vscode/.vp-temp/pages/study/coding/interview/index.html.vue"
const data = JSON.parse("{\"path\":\"/study/coding/interview/\",\"title\":\"九九八十一难\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"icon-codingfill\",\"title\":\"九九八十一难\",\"date\":\"2024-10-11T00:00:00.000Z\",\"index\":false,\"timeline\":false,\"article\":false,\"feed\":false,\"seo\":false,\"head\":[]},\"headers\":[],\"git\":{\"createdTime\":1729242891000,\"updatedTime\":1729368407000,\"contributors\":[{\"name\":\"situ-bei\",\"email\":\"2606405907@qq.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":0.13,\"words\":38},\"filePathRelative\":\"study/coding/interview/README.md\",\"localizedDate\":\"2024年10月11日\"}")
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
