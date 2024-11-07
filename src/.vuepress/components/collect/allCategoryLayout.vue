<template>
    <div class="container">
        <div class="collect_card">
            <div class="card_body" v-if="handelData" v-for="(item,index) in handelData" :key="item.id">
                <!-- 标题 -->
                <div class="title">
                    <FontIcon :icon="iconIs(item.iconFont)" />
                    <span>{{ item.title ? item.title : '数据丢失啦' }}</span>
                </div>
                <!-- 卡片内容 -->
                <div class="card_content" v-if="item">
                    <div class="cardList">
                        <template v-for="(i) in item.detail" :key="i.id">
                            <a :href="i.url" target="_blank" class="link-item">
                                <div class="a_text">
                                    <Tooltip :text="i.name" :lines="1" >
                                        <template #reference>
                                            <FontIcon :icon="iconIs(i.subIcon)" />
                                            {{ i.name }}
                                        </template>
                                    </Tooltip>
                                </div>
                            </a>
                        </template>
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
import { CollectOptions } from "../../data/Type";
const collectData = inject<CollectOptions[]>('collectData')

// 引入提示框组件
import Tooltip from "../mycomponents/tooltip.vue";

const mouseenter = (event:MouseEvent)=>{
    console.log('jinry',Event);
    const el = event.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    console.log('jinry.rect',rect);
}

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
        // 卡片内容
        .card_content{
            margin-top: 5px;
            // backdrop-filter: blur(10px);
            box-shadow: $myshadow;
            border-radius: 15px;
            height: 180px;
            overflow-y: scroll;
            padding: 10px;
                &::-webkit-scrollbar {
                    display: none; // 隐藏 WebKit 浏览器（如 Chrome 和 Safari）的滚动条
                }
            .cardList{
                display: grid;
                grid-template-columns: repeat(auto-fit,minmax(110px,1fr));
                gap: 15px;
                font-size: 0.875rem;
                width: 100%;

                .link-item {
                    padding: 5px 6px;
                    transition: all .3s;
                    border-radius: 15px;
                    display: block;
                    
                    &:hover {
                        background: rgba(106, 106, 106, 0.2);
                    }

                    .a_text {
                        flex: 1;
                        position: relative;
                        min-width: 0;
                        // overflow: hidden;
                        // text-overflow: ellipsis;
                        // white-space: nowrap;
                        
                        // 悬浮下划线动画效果
                        &::before {
                            content: "";// 伪元素必需属{
                            position: absolute;// 绝对定{
                            // z-index: 1;// 置于最底{
                            left: 0;// 左对{
                            right: 100%;// 右对{
                            bottom: 0;// 底部对齐
                
                            // 下划线样式
                            background: var(--vp-c-accent-hover);
                            height: 2px;
                            border-radius: 5px;
                
                            // 过渡效果
                            transition: right 0.4s ease-out;
                        }
                
                        // 悬浮、焦点和激活状态的动画终点
                        &:hover::before,
                        &:focus::before,
                        &:active::before{
                            right: 0; // 下划线展开到100%宽度
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

@media (max-width: hope-config.$mobile) {
.collect_card{
    .card_body{
        .card_content{
            .cardList{
                    display: grid;
                    grid-template-columns: repeat(auto-fit,150px);
                    // background-color: rgba(87, 87, 87, 1);
                }
        }
    }
}

}
</style>