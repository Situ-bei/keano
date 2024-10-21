import comp from "F:/桌面/【Vue】/Blog/keano/.vscode/.vp-temp/pages/en/demo/encrypt.html.vue"
const data = JSON.parse("{\"path\":\"/en/demo/encrypt.html\",\"title\":\"Encryption Article\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"lock\",\"category\":[\"Guide\"],\"tag\":[\"encryption\"],\"feed\":false,\"seo\":false,\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://situ-bei.github.io/keano/demo/encrypt.html\"}]]},\"headers\":[{\"level\":1,\"title\":\"Encryption Article\",\"slug\":\"encryption-article\",\"link\":\"#encryption-article\",\"children\":[]}],\"git\":{\"createdTime\":1728396553000,\"updatedTime\":1728589721000,\"contributors\":[{\"name\":\"situ-bei\",\"email\":\"2606405907@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.3,\"words\":90},\"filePathRelative\":\"en/demo/encrypt.md\",\"localizedDate\":\"October 8, 2024\"}")
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
