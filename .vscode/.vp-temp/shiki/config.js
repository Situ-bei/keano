import "F:/桌面/【Vue】/Blog/keano/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "F:/桌面/【Vue】/Blog/keano/node_modules/@vuepress/plugin-shiki/lib/client/styles/shiki.css"
import "F:/桌面/【Vue】/Blog/keano/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "F:/桌面/【Vue】/Blog/keano/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "F:/桌面/【Vue】/Blog/keano/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "F:/桌面/【Vue】/Blog/keano/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
