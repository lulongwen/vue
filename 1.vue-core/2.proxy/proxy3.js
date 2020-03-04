// 核心基于 proxy 的 Vue.reactive

function isObject(value) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}


// 存放的是代理后的 Object, WeakMap 弱引用，不会导致内存泄漏
const toProxy = new WeakMap()
// 存放的是代理前的 Object
const toRaw = new WeakMap()


function reactive (target) {
  if (!isObject(target)) return target

  // 如果代理表中已经存在，就把这个结果返回，传入的对象被代理
  const proxy = toProxy.get(target)
  if (proxy) return proxy

  // 传入的对象已经被代理过，就原封不动的返回这个对象
  if (toRaw.has(target)) return target

  // 触发的方法
  const handler = {
    get (target, key, receiver) {
      const res = Reflect.get(target, key, receiver)

      if (isObject(target[key])) {
        // 递归，如果取的值是个对象，继续代理这个值
        return reactive(res)
      }
      return res
    },

    set (target, key, value, receiver) {
      if (target.hasOwnProperty(key)) {
        // 如果触发的是私有属性的话，可以直接触发视图更新
        console.log('视图更新')
      }

      return Reflect.set(target, key, value, receiver)
    },

    deleteProperty (target, key) {
      return Reflect.deleteProperty(target, key)
    }
  }

  const observed = new Proxy(target, handler)
  // 原对象，代理后的结果
  toProxy.set(target, observed)
  toRaw.set(observed, target)
  return observed
}

let obj = {
  name: 'lucy',
  arr: [1,2,3]
}

let vm = reactive(obj)
  vm = reactive(obj) // toProxy 代理过了
  vm = reactive(vm) // toRaw 已经代理过了
  vm = reactive(vm)

vm.arr.push('ok')
vm.name = 'longwen'
