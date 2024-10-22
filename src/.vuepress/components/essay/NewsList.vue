<template>
  
  <div id="article-list" class="vp-article-list">
    <!-- <HeroHitokoto /> -->
    <div class="header_text">
      &nbsp&nbsp&nbsp&nbsp&nbsp我想写很多东西,可是又不知道怎么样下笔,浅薄的文笔,稚嫩的表达,似乎什么也说明不了.
    </div>
    <div class="header_text_submit">{{ hitokotoContent?.hitokoto }}--{{ hitokotoContent?.from }}</div>
    <p class="sub-title" :data-item-count="String(items.length)">
      沧海「 {{ numberToChinese(items.length) }} 」粟
    </p>
    <!-- <figure>
      <img class="news-top-img" src="https://tuapi.eees.cc/api.php?category=dongman&px=pc&type=302" alt="图"
        :key="imageKey" />
    </figure> -->
    <template v-if="currentArticles.length">
      <template v-for="({ info, path }, index) in currentArticles">
        <DropTransition :appear="true" :delay="index * 0.04">
            <NewsItem :info="info" :path="path" :key="path" />
        </DropTransition>
      </template>
      <Pagination :current="currentPage" :perPage="articlePerPage" :total="items.length"
        @update-current-page="updatePage" />
    </template>
    <EmptyIcon v-else />
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { DropTransition } from "vuepress-theme-hope/client/components/transitions/DropTransition";
import type { Article } from '@vuepress/plugin-blog/client';
import Pagination from "vuepress-theme-hope/client/modules/blog/components/Pagination";
import { EmptyIcon } from "vuepress-theme-hope/client/modules/blog/components/icons/emptyIcon";
import { useBlogOptions } from "vuepress-theme-hope/client/modules/blog/composables/index";
import { isSupported, usePageview } from "@vuepress/plugin-comment/pageview";
import { ArticleInfoData } from "vuepress-theme-hope/shared";




import NewsItem from "./NewsItem.vue";
import { HitokotoApi } from "../essay/hitokoto-api";

const props = defineProps<{
  items: Article<ArticleInfoData>[];
}>();
const route = useRoute();
const router = useRouter();
const blogOptions = useBlogOptions();
const updatePageview = usePageview();
const currentPage = ref(1);
const articlePerPage = computed(() => blogOptions.value.articlePerPage ?? 10);
const currentArticles = computed(() => props.items.slice((currentPage.value - 1) * articlePerPage.value, currentPage.value * articlePerPage.value));
const hitokotoContent = ref(null);

const imageKey = ref(Math.random());

// 阿拉伯数字转汉字
const numberToChinese = (num: number)=>{
  const chineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const units = ['', '十', '百', '千', '万'];
  let result = '';

  if (num === 0) {
      return chineseNumbers[0];
  }

  const digits = num.toString().split('');
  for (let i = 0; i < digits.length; i++) {
      const digit = parseInt(digits[i], 10);
      result += chineseNumbers[digit] + units[digits.length - i - 1];
  }

  return result;
}

router.beforeEach((to, from, next) => {
  // 执行重新加载图片的逻辑
  imageKey.value = Math.random();
  next();
});
// 获取一言
// from 来源, hitokoto 随机一言, creator 创作者
(async function () {
  await HitokotoApi.request().then((data)=>{
    // console.log("获取一言",data);
    if (data.status == 200) {
      hitokotoContent.value = data.data;
      console.log('获取一言_赋值进度',data.data);
      
    }
  })
})();

const updatePage = async (page) => {
  currentPage.value = page;
  const query = { ...route.query };
  const needUpdate = !(query["page"] === page.toString() || // Page equal as query
    // Page is 1 and query is empty
    (page === 1 && !query["page"]));
  if (needUpdate) {
    if (page === 1)
      delete query["page"];
    else
      query["page"] = page.toString();
    await router.push({ path: route.path, query });
  }
  if (isSupported) {
    await nextTick();
    updatePageview({ selector: ".vp-pageview" });
  }
};
onMounted(() => {
  const { page } = route.query;
  void updatePage(page ? Number(page) : 1);
  watch(currentPage, () => {
    // List top border distance
    const distance = document.querySelector("#article-list").getBoundingClientRect().top +
      window.scrollY;
    setTimeout(() => {
      window.scrollTo(0, distance);
    }, 100);
  });
});

</script>
<style lang="scss" scoped>
.vp-article-list{
  padding: 5px 0;

}
// 随机一言文字
@mixin headerTextSubmit{
  font-family: xinkai;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-top: 15px;
  padding: 0;
  @media (max-width: hope-config.$pad) {
    font-size: 3vw;
  }
  
}
[data-theme="light"]{
  .header_text_submit{
    background: linear-gradient(120deg,
    var(--vp-c-accent),
    var(--vp-c-accent-hover) 30%,
    #50e3eb 100%);
    @include headerTextSubmit;
  }
  
}
[data-theme="dark"]{
  .header_text_submit{
    background: rgb(255, 255, 255,.5);
    @include headerTextSubmit;
  }
}

// 大标题文字
.header_text{
  font-family: xinkai;
  font-size: 24px;
  text-align: left;
}


.sub-title {
  font-family: xinkai;
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
  @media (max-width: hope-config.$pad) {
    font-size: 1rem;
  }


}

.sub-title::before {
  content: "沧海" attr(data-item-count) "粟";  // 沧海{{ items.length }}粟
  position: absolute;
  color: #353434;
  transform: translate(-20px, 12px) scaleY(0.5) skew(50deg);
  z-index: -1;
  filter: blur(3px);
  -webkit-mask-image: linear-gradient(transprent, #6c6868);
  mask-image: linear-gradient(transprent, #6c6868);
}

// figure {
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   width: auto;
//   margin: 1rem auto;
//   text-align: center;
//   transition: transform var(--vp-tt);

// }

// .news-top-img {
//   overflow: hidden;
//   border-radius: 15px;
// }

// .news-top-img:hover {
//   box-shadow: 2px 2px 10px 0 var(--card-shadow);
// }

</style>
