// 对 state里面的数据进行加工，类似于 computed；getters 是方法，必须 return
import { storage } from '@/lib/storage'
import * as $ from './mutation-types'


const user = storage.get('user')

export default {
  user(state) {
    return state.user || user
  },
  projectType(state) {
    let type = state.projectType
    if (!type.length) return []

    let arr = type.map(item => {
      let {id, pid, level, name} = item
      return {id, pid, level, value: id, label: name}
    })

    return arr
  }
}