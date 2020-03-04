import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import iview from 'iview'

import {defaultRoutes} from "./router"
import Util from 'lib/index'
import {storage} from 'lib/storage'


export default new VueRouter({
  mode: "history",
  routes: [
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
  ]
})


Vue.use(Router)
const router = new Router({
  mode: 'history', // 服务器支持就用mode
  routes: defaultRoutes
})


/**
 * 路由拦截，全局路由守卫
 * 默认拦截所有路由，路由跳转统一使用 name 跳转
 * 设置一个白名单，任何权限都可以访问，比如 404, 500, login
 */
router.beforeEach((to, from, next) => {
  Iview.LoadingBar.start()
  Util.title(to.meta.title)

  const TOKEN = storage.get('token') ? storage.get('token').token : null
  if(TOKEN){
    let time = storage.get('token').time
    // token是否过期, 当前时间戳对比 token时间戳
    let nowTime = (new Date()).getTime()
    if (newTime > time) {
      iview.Notice.error({title: '登录信息过期，请重新登录'})
      storage.clear()
      return next(`/login?redirect=${to.path}`)
    }

    // 判断是哪个路由
    if(to.name === 'login'){
      next({ name: 'home' })
    }
    else{
      addRoutes(router, store)
      next()
    }
  }
  else{ // 没有 token
    // 需要验证权限 | 不存在的路由，跳转到登陆页，否则通过
    let whiteRoute = ['login', ''] // 路由白名单
    if(to.meta.requireAuth || !to.name){
      Iview.LoadingBar.finish()
      next({
        path: '/login',
        query: {
          redirect: to.path
        }
      })
    }
    else next()
  }
})


router.afterEach( to => {
  iview.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
