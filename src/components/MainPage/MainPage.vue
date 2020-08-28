<template>
  <div class="scrollDiv">
    <!-- 自动导览，退出开关  故障之源 functional的原因？？？？ -->
    <ExitAutoNaviBtn v-if="isAutoNavStarted" @click="toggle" />
    <!-- 地图容器 -->
    <div id="aMapContainer"></div>
    <!-- 底部导航条 -->
    <div class="navWrapper" v-show="!isAutoNavStarted">
      <nav-bar
        
        :arrayData="navBarData"
        ref="navBar"
      ></nav-bar>
    </div>
    <!-- 附近景点列表按钮 -->
    <div class="btn" v-if="!isAutoNavStarted" @click="toggle">Click Me First</div>
  </div>
</template>

<script>
import { loadAMapClass, initAMapInstance } from '@/tools/LoadAmap';
let AMap = null,
  aMapObj = null; // 高德地图实例

export default {
  name: 'MainPage',
  components: {
    ExitAutoNaviBtn: () => import('./component/ExitAutoNaviBtn'),
    NavBar: () => import('./component/NavBar'),
  },
  data() {
    return {
      isAutoNavStarted: false,
      navBarData: [
        {
          id: -3,
          name: '1',
          img: require('./imgs/navBar/scenicArea.png'),
          grayImg:
            ' ',
        },
        {
          id: -2,
          name: '2',
          img: require('./imgs/navBar/scenicList.png'),
          grayImg:
            ' ',
          iconCode: 1,
        },
        {
          id: null,
          name: '3',
          img: require('./imgs/navBar/scenicMark.png'),
          grayImg:
            ' ',
          iconCode: 1,
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.isAutoNavStarted = !this.isAutoNavStarted
    }
  },

  async mounted() {
    let res = await Promise.all([loadAMapClass()]);
    AMap = res[0];
    aMapObj = initAMapInstance();
    console.log(AMap)
    console.log(aMapObj)
  },
};
</script>

<style lang="scss" scoped src="./MainPage.scss"></style>
