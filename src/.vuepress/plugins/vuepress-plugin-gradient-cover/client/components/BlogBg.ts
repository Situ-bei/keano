import { defineComponent, VNode,h,onMounted,onUnmounted } from "vue";
import '@vuepress/client/types'
import "../style/cove.scss"
export default defineComponent({
  name: "BlogBg",
  setup() {
    // return (): VNode =>
    //   !__VUEPRESS_SSR__ ? h("div", { class: "page-bg" }) : h("");

    let el: HTMLElement | null = null;

    onMounted(() => {
      if (!__VUEPRESS_SSR__) {
        el = document.createElement('div');
        el.className = 'page-bg';
        document.body.appendChild(el);
      }
    });

    onUnmounted(() => {
      if (el) {
        document.body.removeChild(el);
        el = null;
      }
    });

    return () => h('');
  },
});

