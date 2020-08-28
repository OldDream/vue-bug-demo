import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const MainPage = () => import('@/components/MainPage/MainPage')


export default new Router({
  routes: [
    { // 没匹配到，就引导到主页
      path: '*',
      redirect: '/MainPage'
    },
    {
      path: '/MainPage',
      name: 'MainPage',
      components: { MainPage },
      meta: {
        title: ' '
      }
    },
    

  ]
})
