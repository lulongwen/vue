// 全局注册异步组件 main.js
Vue.component('Home', 
  // import 函数返回一个 Promise 对象
  () => import('./components/Home')
})