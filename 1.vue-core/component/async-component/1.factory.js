// 全局注册异步组件 main.js
Vue.component('Home', (resolve, reject) => {
  // 这个特殊的 require 语法告诉 webpack,自动将编译后的代码分割成不同的块
  require(['./components/Home'], (res) => {
    resolve(res)
  })
})