import comp from "F:/桌面/【Vue】/Blog/keano/.vscode/.vp-temp/pages/category/cookie/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/cookie/\",\"title\":\"cookie 分类\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"cookie 分类\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"category\",\"name\":\"cookie\",\"key\":\"category\"},\"layout\":\"BlogCategory\",\"gitInclude\":[]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
