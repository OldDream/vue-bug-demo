<template>
  <div id="app">
    <router-view name="MainPage" />
    <keep-alive :include="keepAliveComponents">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapState({
      keepAliveComponents: (state) => state.keepAliveComponents,
    }),
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
