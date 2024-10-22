import type { CanvasOptions } from "@moefy-canvas/core";
import type { VNode } from "vue";
import { defineComponent, h, onBeforeUnmount, onMounted } from "vue";
import { MeteorOption } from "../../type.js";

import { Meteor, MeteorConfig, MAX_Z_INDEX} from "@moefy-canvas/theme-meteor"; 

declare const meteorOptions : MeteorOption;
// const MAX_Z_INDEX = 2147483647;


export const MeteorMoefyCanvas = defineComponent({
    name: "MeteorMoefyCanvas",
    setup() {
        let moefyCanvas: Meteor | null = null;
        const id = "moefy-canvas";
        const getCanvas = (): HTMLCanvasElement => {
        const canvas: HTMLCanvasElement = document.getElementById(
            id
        ) as HTMLCanvasElement;

        return canvas;
        };
        const themeConfig: MeteorConfig = {
            // shape: Meteor,
            numParticles: meteorOptions.config.numParticles ? meteorOptions.config.numParticles : 50,
            particleColor: meteorOptions?.config.particleColor ? meteorOptions?.config.particleColor : 'rgba(102, 175, 239, .2)' 
        };
        
        const canvasOptions: CanvasOptions = {
            opacity: 1,
            zIndex: MAX_Z_INDEX,
        };
        onMounted(() => {
            if (window.screen.availWidth < 719) {
                //移动端
                return;
            }
            moefyCanvas = new Meteor(themeConfig, canvasOptions);
            moefyCanvas && moefyCanvas.mount(getCanvas());
        });

        onBeforeUnmount(() => {
            moefyCanvas && moefyCanvas.unmount();
        });

        return (): VNode =>
        !__VUEPRESS_SSR__ && window.screen.availWidth > 719 ? h("div", { class: id }, h("canvas", { id })) : h("");
    },
});
