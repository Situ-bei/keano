import comp from "F:/桌面/【Vue】/Blog/keano/.vscode/.vp-temp/pages/essay/2.html.vue"
const data = JSON.parse("{\"path\":\"/essay/2.html\",\"title\":\"555\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-10-14T00:00:00.000Z\",\"title\":555,\"description\":\"随笔\",\"essay\":true,\"article\":false,\"gitInclude\":[]},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":0.09,\"words\":28},\"filePathRelative\":\"essay/2.md\",\"localizedDate\":\"2024年10月14日\",\"excerpt\":\"<p>2233</p>\\n\"}")
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
