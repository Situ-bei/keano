import CodeDemo from "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import MarkMap from "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-plugin-md-enhance/lib/client/components/MarkMap.js";
import "F:/桌面/【Vue】/Blog/keano/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("MarkMap", MarkMap);
  },
};
