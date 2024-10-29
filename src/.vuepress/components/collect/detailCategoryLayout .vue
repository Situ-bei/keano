<template>
<!-- 一级分类标题 -->
<div class="title">
  <FontIcon :icon="iconIs(linkDatas.iconFont)" /> <span>{{ props.categoryType ?? '没有数据'}}</span>
</div>

<!-- 多级分类 -->
<template class="collectLink_box"  v-if="linkDatas.subCategories" v-for="(item,index) in linkDatas.subCategories" :key="item.id">
  <linkCar :collectData="item"/>
</template>

<!-- 单级分类 -->
<template class="collectLink_box" v-else  >
  <linkCar :collectData="linkDatas"/>
</template>
</template>
<script setup lang="ts">
import { ref,computed,inject } from 'vue';

// 引入【linkCar】子组件
import linkCar from './linkCar.vue';

// 注入收藏数据 和 导入类型
import { CollectOptions } from "../../data/collectType";
const collectData = inject<CollectOptions[]>('collectData')

// 定义和接收 mycollectlayout 中传递来的 navbar 选择的分类类型的 数据类型
interface Props {
    categoryType: string;
}
// 用来展示一级标题
const props = defineProps<Props>();

console.log( 'nav选择的分类Type',props.categoryType);

// 通过计算属性，根据传入的分类类型，返回对应的分类数据
const linkDatas = computed<CollectOptions>(() => {
  const foundItem = collectData.find(item => item.title === props.categoryType);
    if (foundItem) {
      console.log('筛选后的linkDatas',linkDatas);
      return foundItem;
    } else {
      return {
        id: 0,
        title: '',
        iconFont: '',
        detail: [
          {
            id: 0,
            name: '',
            desc: '',
            icon: '',
            url: '',
          }
        ] ,
        subCategories: [
          {
            id: 0,
            title: '',
            iconFont: '',
            detail: [
              {
                id: 0,
                name: '',
                desc: '',
                icon: '',
                url: '',
              }
            ] 
          }
        ],
        
      } as CollectOptions;
    }
    
});

// 图标
const iconIs = (val)=>{
  const isLetter = /^[A-Za-z-]+$/.test(val);
  console.log('iconIs,isLetter',val,isLetter);
  if (val && isLetter) {
    return val
  }else{
    return 'icon-moren'
  }

}
console.log( '分类卡片的props',collectData);



</script>
<style lang="scss" scoped>
.title{
  font-size: 20px;
  font-weight: 500;
  margin-left: 5px;
  text-align: center;
  span{
    margin-left: 5px;
  }
}

</style>
