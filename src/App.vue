<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    MainPage: ()=>import('./components/MainPage/MainPage.vue')
  },
  data() {
    return {
    };
  },
  methods: {

  },
  created() {
  
  },
};
</script>

<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f2f4f5;
  overflow: hidden;
}
</style>
