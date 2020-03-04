import Vue from 'vue'

const Store = function Store (options = {}) {
  const {state = {}, mutations = {} } = options
  this._vm = new Vue({
    data: {
      // 通过 new Vue() 把 state 挂在到 data上实现 响应式数据
      $$state: state
    }
  })

  this._mutations = mutations
}

// commit 就是在调用 mutations上的一个方法，传递参数和值
Store.prototype.commit = function (type, payload) {
  if (this._mutations[type]) {
    this._mutations[type](this.state, payload)
  }
}

// 如何访问到 state？重写 get方法
// 每次 get获取 state的时候，去获取的是 new Vue()的实例下的 state值
Object.defineProperties(Store.prototype, {
  state: {
    get () {
      return this._vm._data.$$state
    }
  }
})

// 扩展简化版的 mini-vuex, 实现 getters 计算属性 
// 并实现 vuex的方式注入到 $store

export default { Store }

// 使用 Vue.prototype.$store = store