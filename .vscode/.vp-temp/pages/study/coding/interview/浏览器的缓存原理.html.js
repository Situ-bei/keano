import comp from "F:/桌面/【Vue】/Blog/keano/.vscode/.vp-temp/pages/study/coding/interview/浏览器的缓存原理.html.vue"
const data = JSON.parse("{\"path\":\"/study/coding/interview/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E7%BC%93%E5%AD%98%E5%8E%9F%E7%90%86.html\",\"title\":\"浏览器的缓存机制和原理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-10-19T00:00:00.000Z\",\"title\":\"浏览器的缓存机制和原理\",\"category\":[\"前端\",\"浏览器原理\"],\"tag\":[\"浏览器原理\",\"游览器缓存\",\"面试\"],\"feed\":false,\"seo\":false,\"head\":[]},\"headers\":[{\"level\":2,\"title\":\"缓存过程分析\",\"slug\":\"缓存过程分析\",\"link\":\"#缓存过程分析\",\"children\":[]},{\"level\":2,\"title\":\"强缓存\",\"slug\":\"强缓存\",\"link\":\"#强缓存\",\"children\":[{\"level\":3,\"title\":\"1. Expires\",\"slug\":\"_1-expires\",\"link\":\"#_1-expires\",\"children\":[]},{\"level\":3,\"title\":\"2.Cache-Control\",\"slug\":\"_2-cache-control\",\"link\":\"#_2-cache-control\",\"children\":[]}]},{\"level\":2,\"title\":\"协商缓存\",\"slug\":\"协商缓存\",\"link\":\"#协商缓存\",\"children\":[{\"level\":3,\"title\":\"1. Last-Modified 和 If-Modified-Since\",\"slug\":\"_1-last-modified-和-if-modified-since\",\"link\":\"#_1-last-modified-和-if-modified-since\",\"children\":[]},{\"level\":3,\"title\":\"2. ETag和If-None-Match\",\"slug\":\"_2-etag和if-none-match\",\"link\":\"#_2-etag和if-none-match\",\"children\":[]},{\"level\":3,\"title\":\"3. 比较\",\"slug\":\"_3-比较\",\"link\":\"#_3-比较\",\"children\":[]}]},{\"level\":2,\"title\":\"两种缓存策略的执行机制\",\"slug\":\"两种缓存策略的执行机制\",\"link\":\"#两种缓存策略的执行机制\",\"children\":[]},{\"level\":2,\"title\":\"缓存位置\",\"slug\":\"缓存位置\",\"link\":\"#缓存位置\",\"children\":[{\"level\":3,\"title\":\"1. Service Worker\",\"slug\":\"_1-service-worker\",\"link\":\"#_1-service-worker\",\"children\":[]},{\"level\":3,\"title\":\"2. Memory Cache\",\"slug\":\"_2-memory-cache\",\"link\":\"#_2-memory-cache\",\"children\":[]},{\"level\":3,\"title\":\"3. Disk Cache\",\"slug\":\"_3-disk-cache\",\"link\":\"#_3-disk-cache\",\"children\":[]},{\"level\":3,\"title\":\"4. Push Cache\",\"slug\":\"_4-push-cache\",\"link\":\"#_4-push-cache\",\"children\":[]}]},{\"level\":2,\"title\":\"用户行为对浏览器缓存的影响\",\"slug\":\"用户行为对浏览器缓存的影响\",\"link\":\"#用户行为对浏览器缓存的影响\",\"children\":[]}],\"git\":{\"createdTime\":1729368407000,\"updatedTime\":1729368407000,\"contributors\":[{\"name\":\"situ-bei\",\"email\":\"2606405907@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":15.43,\"words\":4630},\"filePathRelative\":\"study/coding/interview/浏览器的缓存原理.md\",\"localizedDate\":\"2024年10月19日\"}")
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
