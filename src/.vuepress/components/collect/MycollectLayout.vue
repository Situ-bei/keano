<template>
    <div class="mycollect_layout">
        <!-- 搜索组件 -->
        <SearchPro />
        
        <!-- 分类导航栏 -->
        <div class="nav">
            <ul class="category_button" >
                <li
                    v-for="(item, index) in collectData"
                    :key="index"
                    :class="{ 
                        active: item.title === selectedCategory && isactive,
                        hover: item.title === hoverSelectedValue  
                        }"
                    class="category_button_item"
                    @click="selectCategory(item.title)"
                    @mouseover="handleMouseOver(item.title)"
                    @mouseout="handleMouseOut"
                >
                
                    {{ item.title ? item.title : '全部' }}
                </li>

            </ul>
        </div>

        <!-- 全部分类 -->
        <div class="allCategory_Layout" v-if="selectedCategory === '' ">
            <allCategoryLayout />
        </div>
        
        <!-- 二级分类 -->
        <div class="collect_container" v-else >
            <detailCategoryLayout :categoryType="selectedCategory" />
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { ref,computed,inject,onUnmounted } from 'vue';
// 引入搜索组件
import SearchPro from "./SearchPro.vue";
// 引入全部分类组件
import allCategoryLayout from './allCategoryLayout.vue';
// 引入封面组件
import detailCategoryLayout from "./detailCategoryLayout .vue";


// 引入收藏数据 和 导入类型
import { CollectOptions } from "../../data/collectType";
const collectData = inject<CollectOptions[]>('collectData')


// console.log('收藏数据',collectData);

// 定义一个变量 用于存储当前选中的分类
const selectedCategory = ref('');
const isactive = ref(true)
// 选择分类的函数
const selectCategory = (title: string) => {
    // 把当前选中项赋值给选中分类变量
    selectedCategory.value = title;
};

// 定义接收 鼠标移入 时选择的分类Type 用来控制动态 class
const hoverSelectedValue = ref(null);
// 鼠标移入时数据处理
const handleMouseOver = (title: any)=>{
    hoverSelectedValue.value = title;
    isactive.value = false
    // console.log(event);
    
}

// 鼠标移出事件处理
const handleMouseOut = () => {
    hoverSelectedValue.value = null;
    isactive.value = true
};




</script>

<style lang="scss" scoped>

// 
.mycollect_layout{
    margin: 0;
    padding: 0;
    // 分类按钮样式
    .nav{
        top: 0;
        left: 0;
        margin: auto;
        margin-top: 20px;
        // display: block;
        display: flex;
        justify-content: center;
        
        .category_button{
            display: inline-block;
            overflow-x: auto;
            scrollbar-width: none;
            &::-webkit-scrollbar {
                display: none; // 隐藏 WebKit 浏览器（如 Chrome 和 Safari）的滚动条
            }
            -ms-overflow-style: none; // 隐藏 IE 和 Edge 的滚动条
            max-width: 100%;
            position: relative;
            display: flex;
            // justify-content: space-evenly;
            list-style: none;   
            background-color: var(--categoryNavBar-bg-dark);
            backdrop-filter: blur(.625rem);

            padding: .6125rem .625rem;
            border-radius: 1.5rem;

            .category_button_item{
                display: inline;
                position: relative;
                border-radius: 15px;
                // font-size: 16px;
                cursor: pointer;

                
                white-space: nowrap;
                margin-right: 15px; // 添加右边距以防止按钮贴在一起
                min-width: 50px; // 设置最小宽度
                flex-shrink: 0; // 确保 li 不会被压缩
                text-align: center;
                &:nth-child(1){
                    margin-left: 10px;
                }

                &::after{
                    content: '';
                    background: var(--vp-c-accent-hover);
                    width: 100%;
                    height: 100%;
                    padding: 2px 10px;
                    border-radius: 15px;
                    position: absolute;
                    top: 0%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    opacity: 0;
                    transition: top 0.3s ease, opacity 0.3s ease;
                    z-index: -1;
                    
                }
                &:hover{
                    color: #fff;
                }
                &:hover::after{
                    opacity: 1;
                    top: 50%;
                    
                }

            }
            .active{
                position: relative;
                // background-color: #ff00004f;
                color: #fff !important;
                &::after{
                    content: '';
                    background: var(--vp-c-accent-hover);
                    width: 100%;
                    height: 100%;
                    padding: 2px 10px;
                    border-radius: 15px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    opacity: 1;
                    z-index: -1;
                    transition: top 0.3s ease, opacity 0.3s ease;
                }
            }
            // .hover{
            //     background-color: #ff00004f;

            // }

            

        }
    }


    .allCategory_Layout{
        margin-top: 20px;
        
    }
    .collect_container{
        margin-top: 20px;
    }
}



</style>