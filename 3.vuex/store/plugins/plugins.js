const myPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
  })
}

const handleStore = store => {
  
  if (localStorage.store) {
    let data = JSON.parse(localStorage.store)
    store.replaceState(data) // 初始化store
  }

  store.subscribe((mutation, state) => {
    localStorage.setItem("store",  JSON.stringify(state))
  })
}

// 然后在new Vuex的时候进行调用
const store = new Vuex.Store({
  state,
  mutations,
  plugins: [handleStore]
})