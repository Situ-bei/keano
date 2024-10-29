<template>
    <div class="container">
        <div class="collect_card">
            <div class="card_body" v-if="handelData" v-for="(item,index) in handelData" :key="item.id">
                <!-- 标题 -->
                <div class="title">
                    <FontIcon :icon="iconIs(item.iconFont)"/> 
                    <span>{{ item.title ? item.title : '数据丢失啦' }}</span>
                </div>
                <!-- 卡片内容 -->
                <div class="card_content" v-if="item">
                    <div class="cardList">
                        <div class="cardList_2" v-for="(i) in item.detail" :key="i.id">
                            <FontIcon :icon="iconIs(i.subIcon)"/> 
                            <a :href="i.url" target="_blank" class="cardList_2_item">{{ i.name }}</a>
                        </div>
                    </div>  
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from "vue";
import 'hover.css'

// 引入收藏数据 和 导入类型
import { CollectOptions } from "../../data/collectType";
const collectData = inject<CollectOptions[]>('collectData')



// 对数据进行处理
const handelData = computed<CollectOptions[]>(()=>{
    let i = 0
    return collectData.filter(m=>{
        // 筛选掉没有数据的数据
        return m.title !== ''
    }).map(item => {
            let d
            // 如果存在子集
            if (item.subCategories && item.subCategories.length > 0) {
                d = item.subCategories.flatMap(item => {
                    return item.detail.flatMap(value =>{
                        let x = 0
                        return {
                            id: x++,
                            name: value.name,
                            desc: value.desc,
                            url: value.url,
                            icon: value.icon,
                            subIcon: item.iconFont
                        }
                    })
                })

            }else{
                // 如果不存在子集
                d = item.detail
            }
            // 返回数据
            return {
                id: i++,
                iconFont: item.iconFont,
                title: item.title,
                detail: d
            }
    })
})
console.log('全部分类中处理的数据',handelData.value);

// 图标函数，根据 iconFont 的值返回不同的图标
const iconIs = (val?: string)=>{
    /**
     * 判断是否是英文字母，如果不是，则返回默认图标
     * @param val {string}  iconFont 对应的图标名称
     * @param val2 {string}  subIcon 对应的图标名称
     * @returns {string} 返回最终的图标名称
     */
    
    const isLetter = /^[A-Za-z-]+$/.test(val);

    // console.log('iconIs,isLetter',val,isLetter);

    // 处理参数1
    if(val){
        if (val == undefined || val == '') {
            return 'icon-moren'
        }
        if (isLetter) {
            return val
        }
    }else{
        return 'icon-moren'
    }

}

console.log('全部分类组件的collectData',collectData);

</script>

<style scoped lang="scss">
$myshadow: 
-.1rem -.1rem .2rem rgba(255, 255, 255,1),
.1rem .2rem .2rem hsl(0 0% 50% / .6);


$myshadowDark: 
-.1rem -.1rem .2rem hsla(0, 0%, 53%, 0.6),
.2rem .2rem .2rem hsla(0, 0%, 0%, 0.5);

.container{
    // width: 100%;
    height: 100%;
    // padding: 0px 0;

}
.collect_card{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
    grid-gap: 10px;
    @media (max-width: 700px) {
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        
    }
    min-width: 350px;

    .card_body{
        .title{
            text-align: center;
            font-size: 18px;
            font-weight: 400;
            span{
                margin-left: 5px;
            }
        }
        .card_content{
            margin-top: 5px;
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            box-shadow: $myshadow;
            border-radius: 15px;
            height: 180px;
            // max-height: 200px;
            overflow-y: scroll;

                &::-webkit-scrollbar {
                    display: none; // 隐藏 WebKit 浏览器（如 Chrome 和 Safari）的滚动条
                }
            padding: 10px;
            .cardList{
                // display: flex;
                // flex-wrap: wrap;
                display: grid;
                grid-template-columns: repeat(3,120px);
                font-size: 0.875rem;
                margin: 5px;
                .cardList_2{
                    // width: 110px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;

                    margin: 10px;
                    .cardList_2_item{
                        // display: inline-block;
                        // vertical-align: middle;
                        -webkit-transform: perspective(10px) translateZ(0);
                        transform: perspective(10px) translateZ(0);
                        position: relative;
                        margin-left: 5px;
                        
                        &::before{
                            content: "";
                            position: absolute;
                            
                            z-index: -1;
                            left: 0;
                            right: 100%;
                            bottom: 0;
                            background: var(--vp-c-accent-hover);
                            height: 2px;
                            border-radius: 5px;
                            -webkit-transition-property: right;
                            transition-property: right;
                            -webkit-transition-duration: 0.3s;
                            transition-duration: 0.4s;
                            -webkit-transition-timing-function: ease-out;
                            transition-timing-function: ease-out;
                        }
                        &:hover::before,
                        &:focus ::before,
                        &:active::before {
                            right: 0;
                        }
                        
                    }
                }
                
            }
        }
    }
}

::-webkit-scrollbar {
  width: 5px; /* 滚动条的宽度 */
}

.theme-hope-content a[target=_blank]:not(.no-external-link-icon)::after{
    content: none;
}
.theme-hope-content a:not(.header-anchor):hover{
    text-decoration: none;
}

[data-theme='dark']{
    .collect_card{
        .card_body{
            .card_content{
                box-shadow: $myshadowDark;
                background-color: rgba(50, 50, 50, 0.192);
            }
        }
    }

}
</style>