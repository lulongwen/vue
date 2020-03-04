// 异步操作，commit提交 mutations 来修改 state
// this.$store.dispatch('updateAppName')

import axios from 'axios'
import * as $ from './mutation-types'

export default {
  [$.PERMISSION]({commit}) {
    axios.get('/api/auth/permission').then(res => {
      commit('permission', res.data)
    })
  },

  [$.CATEGORY]({commit, state}) {
    axios.get('/api/manager/id_category/all?is_page=0').then(res => {
      commit('idType', res.data)
    })
  }
}