import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);
let isDevServer = process.env.NODE_ENV == 'development'

console.log('process.env.VUE_APP_BUILD_FOR : ' + process.env.VUE_APP_BUILD_FOR);
console.log('isDevServer: ' + isDevServer);
let isprod = isDevServer ? false : process.env.VUE_APP_BUILD_FOR != 'development';
console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
console.log('isprod: ' + isprod);


if (isprod) { // 正式环境
} else { // 开发环境
}

const store = new vuex.Store({
  state: {
    
  },
  mutations: {
    cleanStateAsObj(state, str) {
      state[str] = {};
    },
    addKeepAlive(state, component) {
      !state.keepAliveComponents.includes(component) &&
        state.keepAliveComponents.push(component)
    },
    // 从keepAliveComponents数组中POP出number个元素
    popNObjFromKeepAliveComponents(state, number) {
      state.keepAliveComponents = state.keepAliveComponents.slice(0, -number)
    },
    cleanKeepAliveComponents(state) {
      state.keepAliveComponents = []
    },
  },

})

export default store;
