<script setup lang="ts">
import 'aplayer/dist/APlayer.min.css';
import MyIcon from './MyIcon.vue';
import { onBeforeRouteUpdate, useRouter } from 'vue-router';
import { ref, onMounted, nextTick, onUpdated} from 'vue';
import axios from 'axios';
import store from 'store';
const router = useRouter();
let musicListURL = 'https://api.injahow.cn/meting/?server=netease&type=playlist&id=596766562&auth=:auth&r=:r' ;
// let musicListURL = 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=596766562&r=:r' ;


let APlayer: any;
let IsShow = ref(false);
let GlobalMusicList = [];

const customTemplate = 
`
  <div class="custom-aplayer">
    <button class="custom-play">播放</button>
    <button class="custom-pause">暂停</button>
    <div class="custom-progress">
      <div class="custom-loaded"></div>
      <div class="custom-played"></div>
    </div>
  </div>
`


// 切换状态
const SwitchStatus = () => {
  IsShow.value = !IsShow.value;
};

// 关闭状态
const CloseStatus = () => {
  if (IsShow.value) {
    IsShow.value = false;
  }
};

// 插入菜单
const InsertMenu = () => {
  const navCenterElm = document.querySelector('.vp-navbar-end');

  if (!navCenterElm) {
    return;
  }

  if (!document.querySelector('#MyMusic_Menu')) {
    const elm = document.createElement('div');
    elm.id = 'MyMusic_Menu';
    elm.classList.add('nav-item');
    elm.innerHTML = `<div id="MyMusic_icon" class="btnImg"></div>`; // spin="true"
    navCenterElm.appendChild(elm);
  }

  const Menu = document.querySelector('#MyMusic_Menu') as HTMLElement;
  Menu.onclick = (event) => {
    SwitchStatus();
    event.stopPropagation();
  };

  const MyMusicWrapper = document.querySelector('.MyMusic') as HTMLElement;
  MyMusicWrapper.onclick = (event) => {
    event.stopPropagation();
  };
};

// 添加按钮旋转
function AddBtnSpin() {
  const Win: any = window;
  if (Win.GlobalAPlayer && Win.GlobalAPlayer.mode) {
    if (Win.GlobalAPlayer.paused) {
      document.getElementById('MyMusic_icon')?.setAttribute('spin', 'false');
    } else {
      document.getElementById('MyMusic_icon')?.setAttribute('spin', 'true');
    }
  }
}
// 创建播放器
const NewPlayer = () => {
  if (!APlayer) {
    return;
  }

  const Win: any = window;
  // 如果不存在盒子 则 终止
  const playElm = document.getElementById('GlobalAPlayer');

  if (!playElm) {
    return;
  }

  if (GlobalMusicList.length < 1) {
    return;
  }

  AddBtnSpin();

  // 判断是否被 APlayer 接管
  const playExist = playElm.classList.contains('aplayer');
  if (playExist) {
    return;
  }else{
      Win.GlobalAPlayer = new APlayer({
      container: document.getElementById('GlobalAPlayer'),
      audio: GlobalMusicList,
      lrcType: 3,  //歌词文件形式 1歌词直接复制进来，2html形式，3数据库获取格式跟下面的一样
      listFolded: false,
      listMaxHeight: '324px',
      mini: false,
      fixed: false,
      volume: 2,
      storageName: 'GlobalAPlayer',
    });
    console.log('APlayer 接管，播放器已创建' );
  }


  
  
  // Win.GlobalAPlayer = document.getElementById('GlobalAPlayer')
  
  // 让按钮旋转
  Win.GlobalAPlayer.on('play', function () {
    AddBtnSpin();
  });
  Win.GlobalAPlayer.on('pause', function () {
    AddBtnSpin();
  });
};



// function StopMusic() {
//   const Win: any = window;
//   let toPath = window.location.pathname;

//   if (toPath.includes('/music/') && Win.GlobalAPlayer) {
//     Win.GlobalAPlayer.pause();
//   }
// }


/*
* @name: //file.mo7.cc/music/list.json
* @params: {}
* data:[
*   0:{
*     artist:'',
*     name:'',
*     url:'',
*     cover:'',
*     lrc:'',
* }
* 加载音乐列表
*/



const LoadMusicList = async () => {
  
  console.log("当前歌单api",musicListURL);
  try {
    await axios({
      method: 'get',
      //插件作者的歌单
      // url: '//file.mo7.cc/music/list.json',
      // 自己的歌单
      url: musicListURL,
      params: {},
    }).then((response) => {
      console.log('获取音乐数据,判断之前',response.data.message);

      // // 判断接口是否可用
      if (response.data.message == '请求次数已达上限，请明天再试') {
        alert('音乐API请求次数已达上限，请明天再试');
        musicListURL = '//api.i-meto.com/meting/api?server=netease&type=playlist&id=596766562&r=:r' 
        alert('赋值');
        return LoadMusicList()
        // return;
      }

      // 获取歌单后赋值
      const listData = response.data;
      if (listData && listData.length > 0) {
        GlobalMusicList = listData;
        console.log("已经获取歌单成功并赋值",GlobalMusicList);
      }

      // 创建播放器实例
      creatAplayer()

    })
  } catch (error) {
    alert(`
      歌单获取失败 
      错误信息：${error.message}
      错误代码：${error.code}
      `)
    console.error('加载音乐列表失败:', error);
  }
};

// let options = {
//   root:  document.querySelector('#GlobalMusicList'),
//   threshold: 0,
// }

// const callback = (entries: any, observer: any) => {
//   // console.log('进入回调', entries, observer);
  
//   entries.forEach((entry: any) => {
//     const el = entry.target 
//     // el.vShow = entry.isIntersecting ? 'true' : 'false';
//     // console.log('打印列表加载',entry);
//     // console.log('打印目标元素',entry.target);
//     // el.setAttribute('v-if', 'false' );
    
//     el.setAttribute('v-if', entry.isVisible ? 'true' : 'false' );
    
//   })
// }

// const observer = new IntersectionObserver(callback, options);

const creatAplayer = () => {
  import('aplayer').then((res) => {
    nextTick(() => {
      
      APlayer = res.default;
      InsertMenu();
      NewPlayer();
      // console.log('打印res子组件挂载',APlayer);
      // let observerList = document.querySelectorAll('#GlobalAPlayer .aplayer-list li')
      // observerList.forEach (item => {
      //   observer.observe(item)
      // })


      // 在这里插入全局事件监听
      // window.document.body.onclick = () => {
      //   CloseStatus();
      // };
    });
    
    // 路由更新
    router.afterEach( (to,from) => {
      console.log('监测到路由更新');
      setTimeout(() => {
        InsertMenu();
        NewPlayer();
        console.log('路由更新,更新播放器实例afterEach');
      }, 30);
    });
  });
}


onMounted(  () => {
  LoadMusicList()

});


</script>

<template>
  <ClientOnly>
    <div class="MyMusic" >
      <div class="MyMusic_Play" :class="{ hide: !IsShow }">
        <div class="close" @click="CloseStatus"><MyIcon name="guanbi" /></div>
        <div id="GlobalAPlayer">
          <div class="aplayer-lrc"></div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="scss">
@mixin responsive($breakpoint) {
  @media  screen and (max-width: $breakpoint){
    @content;
  }
}
$myshadow: 
  -.1rem -.1rem .2rem rgba(255, 255, 255,1),
  .1rem .2rem .2rem hsl(0 0% 50% / .6);


$myshadowDark: 
  -.1rem -.1rem .2rem hsla(0, 0%, 53%, 0.6),
  .2rem .2rem .2rem hsla(0, 0%, 0%, 0.5);

  


// 播放器
.aplayer{ 
  margin: 0;
  color: var(--vp-c-accent-bg) !important;
  background:  rgba(255, 255, 255, 0.6) !important;
  backdrop-filter: blur(10px);
  .aplayer-info{
    border-bottom: 0 !important;
  }
  
  // 播放器主体
  .aplayer-body{
      height: 120px !important;

      // 封面
      .aplayer-pic{
        border-radius: 50%;
        top: 5px;
        left: 5px;
        // 播放按钮
        .aplayer-pause{
          bottom: 10px;
          right: 10px;
        }
      }
      
      // 歌曲大标题
      .aplayer-music{
        display: flex;
        // justify-content: center;
        align-items: center;
        margin-right: 21px;
        .aplayer-title{
          display: inline-block;
          // width: 50%;
          // flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          
        }
        .aplayer-author{
          display: inline-block;
          vertical-align: middle;
          overflow: hidden;
          text-overflow: ellipsis;
          // width: 50%;
          margin-left: 5px;
          // flex:1;
        }
      }
    }
  //控制栏容器
  .aplayer-controller{
    margin-top: 12px;
    width: 350px;
    margin-left: -100px;
    left: 0;
    @include responsive(640px) { // 在屏幕宽度小于或等于 640px 时
      width: 70vw; // 设置宽度为视口宽度的 20%
      
    }
    // 进度条容器
    .aplayer-bar-wrap{
      margin-left: 10px;
      // 进度条组
      &:hover {
        span{
          background: var(--vp-c-accentr);
        }
      }
    }
    //进度条颜色
    .aplayer-played{
      background-color: var(--vp-c-accent-bg) !important;
    }
    .aplayer-volume{
      background-color: var(--vp-c-accent-bg) !important;
      
    }
    .aplayer-time{
      margin-right: 5px;
    }
    
  }

  // 切换歌曲
  .aplayer-icon-back,
  .aplayer-icon-play,
  .aplayer-icon-forward{
    display:inline-block;
  }
  @include responsive(hope-config.$pad) {
    .aplayer-icon-back,
    .aplayer-icon-play,
    .aplayer-icon-forward{
      display:none;
    }
  }
  
  // 歌词
  .aplayer-lrc{
    // position: relative;
    // display: block;
    // z-index: 99;
    height: 55px;
    // margin-top: 100px;
    background-color: transparent !important; 
    border: transparent !important;
    &::before,
    &::after {
      background: transparent !important;
    }
    .aplayer-lrc-contents{
      // transform: translateY(-50px) !important;
      margin-top: 20px;

    }
    // 当前播放歌词颜色
    .aplayer-lrc-current{
      color: var(--vp-c-accent-bg) !important;
      font-size: 16px !important;
    }
  }
  // 播放器列表
  .aplayer-list{
    color: var(--vp-c-accent-bg) !important;
    
    // 歌曲列表 
    ol{
      padding: 8px;
      
      // max-height: 300px !important;
      // @include responsive(hope-config.$mobile) {
      //   max-height: 90vw;
      // }
      // 歌曲列表
      li{
        content-visibility: auto;
        font-size: 11px !important;
        border-top: transparent;
        display: flex;
        // align-content: center;
        justify-content: space-between;
        padding: 0 8px;
        // hover
        &:hover{
            background:  rgba(255, 255, 255, 0.5) !important;
            border-radius: 9px;
            box-shadow: $myshadow;
          }
        
        // 歌曲索引
        .aplayer-list-index{
          margin-right: 5px !important;
          margin-left: 5px;
          display: inline-block;
          order: 0;
        }
        // 歌曲名称
        .aplayer-list-title{
          display: inline-block;
          flex-grow: 1;
          width: 60%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          order: 0;
          margin-left: 0px;
        }
        //列表歌手名字 颜色
        .aplayer-list-author{
          display: inline-block;
          // align-self: end;
          // margin-left: 40px;
          color: var(--vp-c-accent-bg) !important;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          // width: 40%;
          
        }
        
      }

      // 当前播放标记
      .aplayer-list-cur{
        margin-left: 4px;
        background-color: var(--vp-c-accent-bg) !important;
        backdrop-filter: blur(5px);
      }
      
      // 当前播放项
      .aplayer-list-light{
        background:  rgba(255, 255, 255, 0.6) !important;
        backdrop-filter: blur(10px);
        border-radius: 9px;
        box-shadow: $myshadow;
      }
    }
  }
}


  

// 深色模式
[data-theme='dark']{
  .aplayer{
    background:  rgba(52, 52, 52, 0.5) !important;
    .aplayer-list{
      ol{
        li{
          &:hover{
            background:  rgba(52, 52, 52, 0.5) !important;
            box-shadow: $myshadowDark;

          }
        }
      }

      // 当前播放标记
      .aplayer-list-cur{
        background-color: rgba(255, 255, 255,.2) !important;
      }
        //列表当前播放 高亮
        .aplayer-list-light{  
          background: rgba(52, 52, 52, 0.5) !important;
          box-shadow: $myshadowDark;
        }
      }
  }
}

.MyMusic {
  position: fixed;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 100;
  cursor: pointer;
  user-select: none;
}

.MyMusic_Play {
  // background-color: rgba(255, 255, 255,0.5);
  // background:  rgba(255, 255, 255, 0.6) !important;
  backdrop-filter: blur(10px);
  user-select: none;
  position: fixed;
  width: 350px;
  
  // width: 280px;
  height: 392px;
  
  @include responsive(640px) { // 在屏幕宽度小于或等于 640px 时
    width: 70vw; // 设置宽度为视口宽度的 20%
    height: 100vw;
  }

  
  // top: 50%;
  // right: 50%;
  // margin-right: -140px;
  // margin-top: -217px;
  
  //播放器居中
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  transition: 0.4s;
  // transform: scale(1);
  transform: scale(1.2);
  opacity: 1;
  &.hide {
    top: 0;
    right: 0;
    opacity: 0;
    transform: scale(0);
    visibility: hidden;
  }

    
  .close {
    position: absolute;
    right: 6px;
    top: 6px;
    user-select: none;
    cursor: pointer;
    font-size: 20px;
    z-index: 11;
    // background-color: rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--vp-c-accent);
  }
}

#MyMusic_Menu {
  top: 1px;  //播放器图标距离navbar顶部的距离
  user-select: none;
  cursor: pointer;
  opacity: 0.7;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--theme-color);
  
  background-color: var(--theme-color);
  .icon {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
  height: 1.6rem;
  width: 1.6rem;
  .btnImg {
    background-image: url('../public/assets/icon/playBtn_CloudMusicLight.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: var(--theme-color);
    width: 80%;
    height: 80%;
    border-radius: 100%;
    
  }
}
[data-theme='dark']{
  #MyMusic_Menu{
    .btnImg{
      background-image: url('../public/assets/icon/playBtn_CloudMusicDark.svg');
    }
  }

}
</style>
