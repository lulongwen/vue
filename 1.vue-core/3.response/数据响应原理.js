/*
Vue 数据响应原理
Object.defineProperty
  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

*/

const obj = { name: 'lucy'}
convert(obj)

obj.name // getting key 'name': 'lucy'

obj.name = 'apple' // setting key 'name' to ''apple''

obj.name // getting key 'name': 'apple'


// 转换
function convert (obj) {
  // 用 Object.defineProperty，将对象的属性就地转换为getter/setter
  // 转换后的对象，应保留原始值，但同时记录所有的 get/set操作
}

// autorun 函数，调用 dep.depend()
function autorun(update) {
  // Implement this
}

// 观察
function observe(obj) {
  // 转换接收对象中的属性，并对转换后的属性，分配一个 Dep的实例
  // Dep实例跟踪订阅更新函数，并在调用 setter时触发
}


// 2 创建 Dep类，有2个方法 depend & notify
window.Dep = class Dep {

  depend() {

  }

  notify() {

  }
}


const dep = new Dep()
  autorun(() => {
    dep.depend()
    console.log('updated')
  })

  dep.notify()



// 3 
const state = {
  count: 0
}

observe(state)

autorun(() => {
  console.log(state.count)
})

state.count++;