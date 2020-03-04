// 全局注册异步组件 main.js
// loading 进度组件
const LoadingComp = {
  template: '<div>loading</div>'
}

const ErrorComp = {
  template: '<div>error</div>'
}

const AsyncComp = () => ({
  // 需要加载的组件,是一个 Promise
  component: import('./component/Home'),
  // 加载中应当渲染的组件
  loading: LoadingComp,
  // 加载出错时,渲染的组件
  error: ErrorComp,
  // 渲染加载中组件,前的等待时间,默认 200ms
  delay: 200,
  // 最长等待时间,超出时间就渲染错误组件,默认: Infinity
  timeout: 2000
})

Vue.component('Home', AsyncComp)