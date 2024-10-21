import { App, PageOptions, PluginFunction } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { MeteorOption } from "./type";
const __dirname = getDirname(import.meta.url);
const meteorPlugin = (options?: MeteorOption): PluginFunction => {
  return (app) => {
    return {
      name: "vuepress-plugin-meteor",
      define: {
        MeteorOption: options,
      },
      multiple: false,
      clientConfigFile: path.resolve(
        __dirname,
        "./"
      ),
    };
  };
};
export { meteorPlugin };
