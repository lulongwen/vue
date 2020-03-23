import {arrayMethod} from "./array"
import Dep from '../dep/dep'

class Observer {
  constructor(data) {
    // 判断是不是数组，数组和对象的用不同的方法
    if (Array.isArray(data)) {
      // 让数组通过链来查找原型，只能拦截数组的方法，数组的每一项，还需要观察
      data.__proto__ = arrayMethod
      // Object.setPrototypeOf(data, arrayMethods)
      
      observeArray(data) // 观察数组中的每一项
      return
    }
    
    // data 就是 vm._data，将用户数据使用 defineProperty 重新定义
    this.listen(data)
  }
  
  listen(data) {
    let keys = Object.keys(data) // {name: '', user: {}}
    for (let key of keys) {
      let value = data[key]
      
      // 给每个属性都设置 defineProperty
      defineReactive(data, key, value)
    }
  }
}

export function observe(data) {
  if (data == null || typeof data !== 'object') {
    return data
  }
  return new Observer(data)
}

// 循环数组中的每一项，进行观察，[] {}
export function observeArray(array) {
  for(let value of array) {
    observe(value)
  }
}

// 定义响应式数据的变化，响应式核心的代码
export function defineReactive(data, key, value) {
  // 1 如果 value是个对象，需要深度观察，递归观察
  observe(value)
  
  // 给每一个属性都增加一个 dep实例；相同的属性用 的是相同的 dep
  // dep里可以收集依赖，收集的是 watcher
  let dep = new Dep()
  
  Object.defineProperty(data, key, {
    get() {
      // 渲染的这次有值，就放到 watcher；多次取值会多次触发这个方法
      if (Dep.target) {
        // dep.addSub(Dep.target) 存入的 watcher 不能重复，重复会造成更新时的多次渲染
        // dep中可以存放 watcher，watcher中也存放 dep：实现多对多的关系
        dep.depend()
      }
      
      return value
    },
    set(newValue) {
      if (value === newValue) return
      // 设置的是一个对象，监控这个新增对象的变化
      observe(newValue)
      value = newValue
      
      console.log('observer set data')
      // 如果 watcher变化，让函数执行
      dep.notify()
    }
  })
}

export default Observer
