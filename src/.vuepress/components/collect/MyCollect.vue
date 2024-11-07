<template>
<SkipLink />
<BlogWrapper>
    <div class="theme-container no-sidebar has-toc">
        <main class="vp-page" id="main-content">
        <!-- <div class="theme-hope-content">
            <DropTransition appear :delay="0.24">
                <MyCollectLayout :key="page.path" />
            </DropTransition>
            <MyCollectLayout :key="page.path" />
            <MyCoverLink />
        </div> -->
        <div class="theme-hope-content">
            <DropTransition appear :delay="0.24">
                <MyCollectLayout />
            </DropTransition>
        </div>
        
        </main>
    </div>
</BlogWrapper>
</template>

<script lang="ts" setup>
import { provide } from "vue";
import BlogWrapper from "@theme-hope/modules/blog/components/BlogWrapper";
import { DropTransition } from "@theme-hope/components/transitions/DropTransition";
import SkipLink from "@theme-hope/components/SkipLink";
import MyCollectLayout from "./MycollectLayout.vue";


// 导入数据
import  {collectData} from "../../data/collectData";
// 导入类型
import { CollectOptions } from "../../data/Type";

// 给所有组件注入数据
provide<CollectOptions[]>('collectData', collectData)


</script>

<style lang="scss" scoped>

// 主页面
.vp-page {
    padding-inline: 0 !important;
    // display: flex;  
    // justify-content: center;
    
    // 内容区
    .theme-hope-content {
        // margin: 0 !important;
        // padding: 0;
        margin-top: 15px !important;
        // width: 100%;
        max-width: 80%;
        box-shadow: none;
  
        .collect_container{
            margin: 0;
            padding: 0;
        }

    }
}
@media (max-width: hope-config.$pad) {
    .vp-page {
        // margin-top: 15px !important;
        // 内容区
        .theme-hope-content {
            margin-top: 15px !important;
            // width: 100%;
            box-shadow: none;
            max-width: 100%;

            padding: 2vw 2vw !important;
            // margin: 0 !important;
        }
    }

}

</style>