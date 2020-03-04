// 核心基于 proxy 的 Vue.reactive

function isObject(value) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

function reactive (target) {
  if (!isObject(target)) return target

  // 触发的方法
  const handler = {
    // 获取
    get (target, key, receiver) {
      // target[key] = value // 没有返回值
      return Reflect.get(target, key, receiver) // 返回 true/false
    },

    // 设置
    set (target, key, value, receiver) {
      return Reflect.set(target, key, value, receiver)
    },

    // 删除
    deleteProperty (target, key) {
      return Reflect.deleteProperty(target, key)
    }
  }

  // new Proxy(target) // 处理代理对象
  return new Proxy(target, handler)
}

let obj = {
  name: 'lucy',
  arr: [1,2,3]
}
// 代理的结果
let vm = reactive(obj)
  vm.name = 'longwen' // 触发 handler.set
  delete vm.name // 触发 handler.deleteProperty
