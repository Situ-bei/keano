import { App, PageOptions, PluginFunction } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { MeteorOption } from "./type.js";
const __dirname = getDirname(import.meta.url);
const meteorPlugin = (options?: MeteorOption): PluginFunction => {
  return (app) => {
    return {
      name: "vuepress-plugin-meteor",
      define: {
        meteorOptions: options,
      },
      multiple: false,
      clientConfigFile: path.resolve(
        __dirname,
        "./client/popper-client-config.ts"
      ),
    };
  };
};
export { meteorPlugin };
