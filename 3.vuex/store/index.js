import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import user from './modules/user'
import createLogger from 'vuex/dist/logger' // 控制台打印日志
import saveInLocal from './plugins/saveInLocal'
export const name = 'longwen'

Vue.use(Vuex) // Vue插件 要Vue.use()

const store = new Vuex.Store({
	namespaced: true,
  name,	
	state,
	mutations,
	actions,
	getters,
	modules: {
		user
	},
	// 严格模式，如果在页面修改数据会报错，但数据还是修改了
	strict: process.env.NODE_ENV !== 'production',
  plugins: [saveInLocal]
})

// 模块动态注册
/*store.registerModule(name, {
  namespaced: true,
  name,
  state,
  actions,
  mutations,
})*/

export default store