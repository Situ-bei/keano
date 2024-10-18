import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-theme-hope/lib/client/export.js";

import { defineCatalogInfoGetter } from "F:/桌面/【Vue】/Blog/keano/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-theme-hope/lib/client/modules/blog/export.js";
import "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/layout.scss";
import { GlobalEncrypt, LocalEncrypt } from "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-theme-hope/lib/client/modules/encrypt/export.js";

import "F:/桌面/【Vue】/Blog/keano/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "F:/桌面/【Vue】/Blog/keano/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
};
