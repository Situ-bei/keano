import CodeDemo from "F:/桌面/【Vue】/Blog/keano/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.57_@vue+repl@4.4.2_markdown-it@14.1.0_sass-embedded@1.79._rem55kbktj637eplejhxgpta7q/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "F:/桌面/【Vue】/Blog/keano/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.57_@vue+repl@4.4.2_markdown-it@14.1.0_sass-embedded@1.79._rem55kbktj637eplejhxgpta7q/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "F:/桌面/【Vue】/Blog/keano/node_modules/.pnpm/@mdit+plugin-spoiler@0.13.1_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "F:/桌面/【Vue】/Blog/keano/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.57_@vue+repl@4.4.2_markdown-it@14.1.0_sass-embedded@1.79._rem55kbktj637eplejhxgpta7q/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
