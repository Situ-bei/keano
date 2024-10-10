<script setup lang="ts">
import 'aplayer/dist/APlayer.min.css';
import MyIcon from './MyIcon.vue';
import { useRouter } from 'vue-router';
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios';


//#region darkMode



// #endregion


let APlayer: any;
let IsShow = ref(false);
let GlobalMusicList = [];

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
  }

  Win.GlobalAPlayer = new APlayer({
    container: document.getElementById('GlobalAPlayer'),
    audio: GlobalMusicList,
    lrcType: 3,
    listFolded: false,
    listMaxHeight: '324px',
    mini: false,
    fixed: false,
    volume: 2,
    storageName: 'GlobalAPlayer',

  });

  // Win.GlobalAPlayer = document.getElementById('GlobalAPlayer')
  
  // 让按钮旋转
  Win.GlobalAPlayer.on('play', function () {
    AddBtnSpin();
  });
  Win.GlobalAPlayer.on('pause', function () {
    AddBtnSpin();
  });
};

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
// 加载音乐列表
const LoadMusicList = (callback) => {
  axios({
    method: 'get',
    //插件作者的歌单
    // url: '//file.mo7.cc/music/list.json',
    // 自己的歌单
    url: 'https://api.injahow.cn/meting/?server=netease&type=playlist&id=596766562&auth=:auth&r=:r',
    params: {},
  }).then((response) => {
    console.log('获取音乐数据',response);
    
    var listData = response.data;
    if (listData && listData.length > 0) {
      GlobalMusicList = listData;
    }
    console.log('加载音乐列表', GlobalMusicList);
    callback && callback();
  });
};

onMounted(() => {
  const router = useRouter();

  LoadMusicList(() => {
    import('aplayer').then((res) => {
      nextTick(() => {
        APlayer = res.default;
        InsertMenu();
        NewPlayer();
        // 在这里插入全局事件监听
        window.document.body.onclick = () => {
          CloseStatus();
        };
      });
      router.afterEach(() => {
        setTimeout(() => {
          InsertMenu();
          NewPlayer();
        }, 50);
      });
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="MyMusic">
      <div class="MyMusic_Play" :class="{ hide: !IsShow }">
        <div class="close" @click="CloseStatus"><MyIcon name="guanbi" /></div>
        <div id="GlobalAPlayer">
          <!-- <Meting 

          mid:="596766562" 
          server="netease"
          api= "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r" 
          type= "playlist"
          /> -->
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

// 浅色模式
[data-theme='light']{
  // .MyMusic_Play{
  //   background-color: rgba(255, 255, 255,0.8) !important;
    
  // }

  .aplayer{
    background:  rgba(255, 255, 255, 0.9)!important;
    .aplayer-list{
        li{
          border-top: transparent;
          &:hover{
            background:  linear-gradient( 180deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)!important;
            border-radius: 5px;

          }
        }
        //列表当前播放 高亮
        .aplayer-list-light{
          background: linear-gradient( 180deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)!important;
          border-radius: 5px;
          
        }
      }
  }
}

// 深色模式
[data-theme='dark']{
  .MyMusic_Play{
    // background-color: rgba(34, 34, 34, 0.5) !important;
  }
  .aplayer{
    background:  linear-gradient( 180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 100%)!important;
    .aplayer-list{
        li{
          border-top: transparent;
          &:hover{
            background:  linear-gradient( 180deg, rgb(40, 40, 40) 0%, rgba(55, 59, 68,1) 100%)!important;
            border-radius: 5px;

          }
        }
        //列表当前播放 高亮
        .aplayer-list-light{
          background: linear-gradient( 180deg, rgb(40, 40, 40) 0%, rgba(55, 59, 68,1) 100%)!important;
          border-radius: 5px;
          
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

  transition: 0.3s;
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

  .aplayer {
    margin: 0;
    // background-color: var(--background-color);
    color: var(--vp-c-accent-bg) !important;
    .aplayer-body{
      height: 120px !important;
    }
    // 列表颜色
    .aplayer-list{
      color: var(--vp-c-accent-bg) !important;
    }

    //控制栏容器
    .aplayer-controller{
      // display: flex;
      // justify-content: center;
      // height: 50px !important;
      margin-top: 12px;


      width: 350px;
      @include responsive(640px) { // 在屏幕宽度小于或等于 640px 时
        width: 70vw; // 设置宽度为视口宽度的 20%

      }
      margin-left: -100px;
      left: 0;
      
      //进度条容器
      .aplayer-bar-wrap{
        margin-left: 10px;
      }
      .aplayer-time{
        margin-right: 5px;

      }
    }
    .aplayer-lrc{
      height: 55px;
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

    //进度条组
    .aplayer-bar-wrap{
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
    //列表歌手名字颜色
    .aplayer-list-author{
      color: var(--vp-c-accent-bg) !important;
    }
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
    background-image: url('/img/playBtn_CloudMusic.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: var(--theme-color);
    width: 80%;
    height: 80%;
    border-radius: 100%;
  }
}
</style>
