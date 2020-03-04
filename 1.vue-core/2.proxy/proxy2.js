// 核心基于 proxy 的 Vue.reactive

function isObject(value) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

// 代理数据
function reactive (target) {
  if (!isObject(target)) return target

  // 触发的方法
  const handler = {
    get (target, key, receiver) {
      const res = Reflect.get(target, key, receiver)

      if (isObject(target[key])) {
        // 递归，如果取的值是个对象，继续代理这个值
        // 缺点：重复定义多次触发，优化，把代理结果放到 hash表中
        return reactive(res) // 返回代理结果 vm.arr.push('ok')
      }
      return res
    },

    set (target, key, value, receiver) {
      if (target.hasOwnProperty(key)) {
        // 如果触发的是私有属性的话，可以直接触发视图更新
        console.log('触发视图更新')
      }

      return Reflect.set(target, key, value, receiver)
    },

    deleteProperty (target, key) {
      return Reflect.deleteProperty(target, key)
    }
  }

  // new Proxy(target)
  return new Proxy(target, handler)
}

// Object
let obj = {
  name: 'lucy', arr: [1,2,3]
}
let vm = reactive(obj)
  // vm = reactive(obj) // 缺点：重复定义多次触发
  // vm = reactive(obj)
  vm.arr.push('ok')
  vm.name = 'longwen'


// Array
let arr = [1,2,3]
let p = reactive(arr)
  arr.push('ok')
