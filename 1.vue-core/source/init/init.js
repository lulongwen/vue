import {observe} from "./observer"
const log = console.log

export function initState(vm) {
  // 不同参数的初始化
  let {data, computed, watch, methods} = vm.$options
  
  if (data) {
    initData(vm)
  }
  
  if (computed) {
    initComputed()
  }
  
  if (watch) {
    initWatch()
  }
  
  if (methods) {
  
  }
}


// data 初始化, Object.defineProperty() 检测数据变化
function initData (vm) {
  // data 用户传入的数据
  let data = vm.$options.data || {}
  data = (typeof data === 'function') ? data.call(vm) : data
  vm._data = data
  
  // vm 代理 data数据 vm.data.name = vm.name
  for(let key in data) {
    proxy(vm, '_data', key)
  }
  
  // observe 检测数据变化
  observe(vm._data)
}

// 代理数据
function proxy(vm, data, key) {
  // vm.name = 'lucy'; vm._data.name = 'lucy'
  
  Object.defineProperty(vm, key, {
    get() {
      return vm[data][key]
    },
    set(newValue) {
      vm[data][key] = newValue
    }
  })
}



// computed 初始化
function initComputed() {

}

// 初始化 watch
function initWatch() {

}
