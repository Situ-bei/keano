<template>
    <SkipLink />
    <BlogWrapper>
        <div class="theme-container no-sidebar no-toc">
            <main class="vp-page" id="main-content">
                <TodoLayout />
            </main>
        </div>
    </BlogWrapper>
</template>

<script setup lang="ts">
import SkipLink from "@theme-hope/components/SkipLink";
import BlogWrapper from "@theme-hope/modules/blog/components/BlogWrapper";

// 导入todolayout组件
import TodoLayout from "./todolayout.vue";



</script>

<style scoped lang="scss">
// 主题容器
.theme-container{
    // 页面容器
    .vp-page{
        margin: auto;
        margin-top: 2.6rem;
        width: 60%;
        box-shadow: none;
        @media (max-width: hope-config.$pad) {
            width: 90%;
        }
    }
}
</style>
