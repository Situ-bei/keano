import { hasGlobalComponent } from "F:/桌面/【Vue】/Blog/keano/node_modules/@vuepress/helper/lib/client/index.js";

import { useStyleTag } from "F:/桌面/【Vue】/Blog/keano/node_modules/@vueuse/core/index.mjs";
import FontIcon from "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import BiliBili from "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import VidStack from "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-plugin-components/lib/client/components/VidStack.js";

import "F:/桌面/【Vue】/Blog/keano/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("VidStack")) app.component("VidStack", VidStack);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_4705467_zwe7ixcig4k.css");
`);
  },
  rootComponents: [

  ],
};
