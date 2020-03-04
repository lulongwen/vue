export default store => {
  // 如果有本地存储，直接替换
  if (localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state))
  }

  // 把 state.js 保存到 localStorage 本地存储里面
  store.subscribe((mutations, state) => {
    localStorage.state = JSON.stringify(state)
  })
}