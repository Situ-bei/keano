import { defineClientConfig, usePageData, useSiteData } from "vuepress/client";
import { MeteorMoefyCanvas } from "../client/components/MeteorMoefyCanvas.js"

export default defineClientConfig({
  rootComponents: [MeteorMoefyCanvas],
});
