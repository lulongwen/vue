import Vue from 'vue'

export const store = Vue.observable({
  count: 0,
  name: 'lucy'
})

export const mutations = {
  setCount (count) {
    store.count = count
  },

  changeName (name) {
    store.name = name
  }
}
