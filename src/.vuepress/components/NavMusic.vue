<script setup lang="ts">
import 'aplayer/dist/APlayer.min.css';
import MyIcon from './MyIcon.vue';
import { useRouter } from 'vue-router';
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios';


// 类型定义
interface MusicItem {
  artist: string;
  name: string;
  url: string;
  cover: string;
  lrc: string;
}

// 状态管理
const router = useRouter();
let aPlayer: any = null;
let isShow = ref(false);
const musicList = ref<MusicItem[]>([]);


// API 配置
let MUSIC_API = 'https://api.injahow.cn/meting/?server=netease&type=playlist&id=596766562';
// let musicListURL = 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=596766562&r=:r' ;



// 切换状态
const SwitchStatus = () => {
  isShow.value = !isShow.value;
};

// 关闭状态
const CloseStatus = () => {
  if (isShow.value) {
    isShow.value = false;
  }
};

// 插入菜单
const InsertMenu = () => {
  const navEndElement = document.querySelector('.vp-navbar-end');
    if (!navEndElement || document.querySelector('#MyMusic_Menu')) return;

    const menuElement = document.createElement('div');
    menuElement.id = 'MyMusic_Menu';
    menuElement.classList.add('nav-item');
    menuElement.innerHTML = '<div id="MyMusic_icon" class="btnImg"></div>';
    navEndElement.appendChild(menuElement);

    // 事件绑定
    menuElement.onclick = (event) => {
      SwitchStatus();
      event.stopPropagation();
    };

    const musicWrapper = document.querySelector('.MyMusic') as HTMLElement;
    if (musicWrapper) {
      musicWrapper.onclick = (event) => event.stopPropagation();
    }
    

};

// 更新按钮旋转状态
const updateButtonSpin = () => {
  const win = window as any;
  if (win.GlobalAPlayer?.mode) {
    const icon = document.getElementById('MyMusic_icon');
    icon?.setAttribute('spin', win.GlobalAPlayer.paused ? 'false' : 'true');
  }
};

// 创建播放器
const NewPlayer = () => {
  if (!aPlayer) {
    return;
  }

  const Win: any = window;
  // 如果不存在盒子 则 终止
  const playElm = document.getElementById('GlobalAPlayer');

  if (!playElm) {
    return;
  }

  if (musicList.value.length < 1) {
    return;
  }

  updateButtonSpin();

  // 判断是否被 APlayer 接管
  const playExist = playElm.classList.contains('aplayer');
  if (playExist) {
    return;
  }else{
      Win.GlobalAPlayer = new aPlayer({
      container: playElm,
      audio: musicList.value,
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
  Win.GlobalAPlayer.on('play', updateButtonSpin);
  Win.GlobalAPlayer.on('pause', updateButtonSpin);

  updateButtonSpin();
};


const LoadMusicList = async () => {
  
  console.log("当前歌单api",MUSIC_API);
  try {
    await axios({
      method: 'get',
      //插件作者的歌单
      // url: '//file.mo7.cc/music/list.json',
      // 自己的歌单
      url: MUSIC_API,
      params: {},
    }).then((response) => {
      console.log('获取音乐数据,判断之前',response.data.message);

      // // 判断接口是否可用
      if (response.data.message == '请求次数已达上限，请明天再试') {
        alert('音乐API请求次数已达上限，请明天再试');
        MUSIC_API = '//api.i-meto.com/meting/api?server=netease&type=playlist&id=596766562&r=:r' 
        alert('启用备用API');
        return LoadMusicList()
        // return;
      }

      // 获取歌单后赋值
      const listData = response.data;
      if (listData && listData.length > 0) {
        musicList.value = listData;
        console.log("已经获取歌单成功并赋值",musicList.value);
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

const creatAplayer = () => {
  import('aplayer').then((res) => {
    nextTick(() => {
      aPlayer = res.default;  // 这里导致模式切换卡顿

      InsertMenu();
      NewPlayer();
    });
  });
}


onMounted( async () => {

  await LoadMusicList()
  // 在这里插入全局事件监听
  // window.document.body.onclick = CloseStatus;

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


</script>

<template>
  <ClientOnly>
    <div class="MyMusic" >
      <div class="MyMusic_Play" :class="{ hide: !isShow }">
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
  backdrop-filter: blur(15px);
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
        backdrop-filter: blur(10px);
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
    background-image: url('/assets/icon/playBtn_CloudMusicLight.svg');
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
      background-image: url('/assets/icon/playBtn_CloudMusicDark.svg');
    }
  }

}

</style>
