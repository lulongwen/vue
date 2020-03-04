export default {
  namespaced: true,
  state: {
    id: 0,
    name: ''
  },
  mutations: {
    updateId (state, id) {
      state.id = id
    },
    updateName (state, name) {
      state.name = name
    }
  },
  getters: {
    // 开启命名空间，state指的是 当前的 state
    firstLetter: (state) => {
      return state.username.substr(0, 1)
    }
  }
}
