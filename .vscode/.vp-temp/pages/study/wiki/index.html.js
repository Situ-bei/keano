import comp from "F:/桌面/【Vue】/Blog/keano/.vscode/.vp-temp/pages/study/wiki/index.html.vue"
const data = JSON.parse("{\"path\":\"/study/wiki/\",\"title\":\"Wiki\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Wiki\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/keano/study/wiki/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"KN\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Wiki\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Wiki\\\"}\"]]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
