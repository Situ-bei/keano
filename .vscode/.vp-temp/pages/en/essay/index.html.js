import comp from "F:/桌面/【Vue】/Blog/keano/.vscode/.vp-temp/pages/en/essay/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/essay/\",\"title\":\"随笔\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"随笔\",\"blog\":{\"type\":\"type\",\"key\":\"essay\"},\"layout\":\"Essay\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://situ-bei.github.io/keano/en/essay/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"KEANO\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"随笔\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"随笔\\\"}\"]]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
