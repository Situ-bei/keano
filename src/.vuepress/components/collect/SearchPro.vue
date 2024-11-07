<template>
<!-- 搜索框组件 -->
<!-- 输入框 -->
<div class="search_box">
    <div class="input_container">
        <i  
            v-if="!searchQuery"
            class="search_icon iconfont icon-sousuo"
            @click="handleClick"
        />
        <input
            v-model="searchQuery"
            @input="handleInput"
            placeholder="搜索"
            class="search_input"
            ref="inputRef"
        />
        <i 
            v-if="searchQuery" 
            @click="clearInput" 
            class="clear_button iconfont icon-guanbi" 
        />
    </div>
    <!-- 搜索结果列表 -->
    <div v-if="showSuggestions" class="suggestions" >
        <ul class="suggestion_ul"  
            v-for="(item, index) in suggestions"
            :key="index">
            {{ item.title ?? '暂无'}}
            <li 
                v-for="(sunItem, index) in item.data"
                :key="sunItem.id"
                class="suggestion_li"
            >
                <a :href="sunItem.url" target="_blank"> 
                    {{ sunItem.name }}
                </a>
            </li>
        </ul>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref,onMounted,inject, watch } from 'vue';



interface filterDataOptoons {
    title?: string;
    detail: {
        id: number;
        name: string;
        desc: string;
        icon: string;
        url: string;
        subIcon?: string;
    }
}

const searchQuery = ref(""); // 搜索框的值
const showSuggestions = ref(false); // 是否显示建议
const suggestions = ref([]); // 建议列表
const inputRef = ref(null)


// 引入收藏数据 和 导入类型
import { CollectOptions } from "../../data/Type";
const collectData = inject<CollectOptions[]>('collectData')

onMounted(()=>{
    console.log('搜索组件的元数据',collectData);
    // const searchSource = props.dataSource.map(item =>{
    //     console.log('onMounted中的item',item);
        
    //     return item
    // })
})

// console.log('searchSource遍历后赋值的',searchSource);

// 监听输入框的变化，并调用搜索函数
const handleInput = () => {
if (searchQuery.value) {
    showSuggestions.value = true;
    console.log('searchQuery.value',searchQuery.value);
    suggestions.value = filterData(searchQuery.value)
    

} else {
    showSuggestions.value = false;
    suggestions.value = [];
}
};
// 清除输入框
const clearInput = ()=>{
    searchQuery.value = ''
    suggestions.value = []
    showSuggestions.value = false
}

// 点击搜索框，自动聚焦
const handleClick = ()=>{
    inputRef.value.focus();
}

// 模糊搜索
const filterData = (key:string)=>{
    const query = key?.toLowerCase();
    const res:{title:string;data:any}[] = []
    
    collectData.forEach(item =>{
        if (item.detail && item.detail.length > 0) {
            item.detail.forEach(v=>{
                if (v.name.toLowerCase().includes(query) || v.desc.toLowerCase().includes(query)) {
                    res.push({
                        title: item.title,
                        data: v
                    })
                }
            })
        }
        if (item.subCategories && item.subCategories.length > 0) {
            item.subCategories.forEach(e=>{
                e.detail.forEach(val=>{
                    if (val.name.toLowerCase().includes(query) || val.desc.toLowerCase().includes(query)) {
                        res.push({
                            title: item.title,
                            data: val
                        })
                    }
                })
            })
        }
    })
    
    const mergedData = res.reduce((acc, item) => {
        if (!acc[item.title]) {
            acc[item.title] = [];
        }
        acc[item.title].push(item.data);
        return acc;
    }, {});

    // 将结果转换为数组形式
    const resultArray = Object.entries(mergedData).map(([title, data]) => ({
        title,
        data
    }));
    console.log('res',resultArray);
    
    return resultArray as {title:string;data:any}[]
}
watch(filterData, (val) => {
    console.log('watch',val);
})





</script>

<style scoped lang="scss">

/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
    font-family: 'iconfont';  /* Project id 4705467 */
    src: url('//at.alicdn.com/t/c/font_4705467_lgb15eizw1e.woff2?t=1729922411198') format('woff2'),
        url('//at.alicdn.com/t/c/font_4705467_lgb15eizw1e.woff?t=1729922411198') format('woff'),
        url('//at.alicdn.com/t/c/font_4705467_lgb15eizw1e.ttf?t=1729922411198') format('truetype');
}

// #region  变量区域
$myshadow: 
-.1rem -.1rem .2rem rgba(255, 255, 255,1),
.1rem .2rem .2rem hsl(0 0% 50% / .6);


$myshadowDark:  
-.1rem -.1rem .2rem hsla(0, 0%, 53%, 0.6),
.2rem .2rem .2rem hsla(0, 0%, 0%, 0.5);

$mycolor: rgba(38, 38, 38, 0.947);
$mycolorDark: hsla(0, 0%, 82%, 0.847);
$mybackgroundcolor: rgba(255, 255, 255,.1);
$mybackgroundcolorDark: rgba(56, 56, 56, 0.1);
// #endregion

li{
    list-style: none;
    padding: 3px 5px;
}
a{
    text-decoration: none !important;
    ::after{
        display: none !important;
        content: none;
        mask-image: none;
    }
}

// 页面容器
.theme-hope-content{
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    @media (max-width: hope-config.$pad) {
        padding: 0;
        margin: 0;
    }
    .search_box {
        position: relative;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 80%;
        display: flex;
        justify-content: center !important;
        flex-direction: column;
        color: var(--vp-c-text);
        
        // 输入框容器
        .input_container{
            width: 100%;
            position: relative;

            // 搜索图标
            .search_icon{
                position: absolute;
                z-index: 5;
                right: 10px;
                top: 10px;
                font-size: 18px;
                color: $mycolor;
                opacity: .7;

            }
            
            // 输入框主体
            .search_input {
                // position: relative;
                width: 100%;
                padding: 10px;
                border: none;
                border-radius: 4px;
                font-size: 16px;
                border-radius: 15px;
                background: $mybackgroundcolor;
                backdrop-filter: blur(0.625rem);
                box-sizing: border-box;
                box-shadow: var(--my-shadow-light);
                color: $mycolor;

                // 输入框获取焦点时，去除边框
                &:focus{
                    /* border: none !important; */
                    outline: none;
                }
                &::placeholder{
                    color: $mycolor;
                }
            }
            
            // 清除图标
            .clear_button{
                position: absolute;
                right: 10px;
                top: 10px;
                font-size: 20px;
                color: $mycolor;
                opacity: .7;
            }
        }

        // 搜索结果列表
        .suggestions {
            position: absolute;
            top: 100%;
            // left: 0;
            // right: 0;
            min-height: 180px;
            background: $mybackgroundcolor;
            backdrop-filter: blur(0.625rem);
            box-shadow: var(--my-shadow-light);
            border-top: none;
            z-index: 5;
            width: 100%;
            max-height: 300px;
            overflow-y: auto;
            margin-top: 10px;
            border-radius: 10px;
            padding: 5px;
            box-sizing: border-box;
            color: $mycolor;
            .suggestion_ul{
                margin: 0;
                
                .suggestion_li{
                    margin-left: 5px;
                }
            }
        }
        
    }
}


// 暗黑模式
[data-theme='dark']{
    
    .search_box{
        .input_container{
            .search_icon{
                color: $mycolorDark;
            }
            .search_input{
                background:$mybackgroundcolorDark;
                backdrop-filter: blur(0.725rem);
                box-shadow: var(--my-shadow-dark);
                color: $mycolorDark;
                &::placeholder{
                    color: $mycolorDark;
                }
            }
            .clear_button{
                color: $mycolorDark;
            }
        }
        .suggestions{
            background: $mybackgroundcolorDark;
            backdrop-filter: blur(0.725rem);
            box-shadow: var(--my-shadow-dark);
            color: $mycolorDark;
        }
    }
}

@media (max-width: hope-config.$pad) {
    .theme-hope-content{
        .search_box{
            width: 100%;
        }
    }

}

</style>