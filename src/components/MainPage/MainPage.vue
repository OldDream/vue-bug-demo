<template>
  <div class="scrollDiv">
    <ExitAutoNaviBtn v-if="isAutoNavStarted" @click="toggle" />
    <!-- bug shows up in the dom below, if we add v-once or give it a key, the bug disappear. 
      So I think there might be a bug during diff and patch.
    -->
    <div id="aMapContainer"></div>
    <div class="navWrapper" v-show="!isAutoNavStarted">
      <nav-bar
        
        :arrayData="navBarData"
        ref="navBar"
      ></nav-bar>
    </div>
    <div class="btn" v-if="!isAutoNavStarted" @click="toggle">Click Me First</div>
  </div>
</template>

<script>
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
    },
    addDom() {
      let node1 = document.querySelector('#aMapContainer')
      node1.innerHTML = `<div class="dynamicAdded">this DOM is added by  Vanilla JS after mounted</div>`
    }
  },

  async mounted() {
    this.addDom()
  },
};
</script>

<style lang="scss" src="./MainPage.scss"></style>
