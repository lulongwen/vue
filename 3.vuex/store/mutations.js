/**
  mutations 必须是同步，不支持异步，遵循单向数据流模式
  mutations 对象里面都是操作 state 的 方法，相当于 methods
 */

import { storage } from '@/lib/storage'
import * as $ from './mutation-types'


export default {
  permission(state, data) {
    state.permission = data
  },

  idType(state, data) {
    state.idType = data
  }
}