export const siteData = JSON.parse("{\"base\":\"/keano/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"meta\",{\"name\":\"referrer\",\"content\":\"no-referrer-when-downgrade\"}],[\"link\",{\"rel\":\"preload\",\"href\":\"/keano/.vuepress/public/font/xinkai.woff2\",\"as\":\"font\",\"type\":\"font/woff2\",\"crossorigin\":\"anonymous\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"KEANO\",\"description\":\"Keano的博客\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"Keano's Blog\",\"description\":\"A blog demo for vuepress-theme-hope\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
