import {observeArray} from "./observer"

// 获取 Array的原型，只修改以下方法
const prototype = Array.prototype
const methods = [
  'push', 'shift', 'pop', 'unshift', 'reverse', 'sort', 'splice'
]

// 复制一个新的对象，可以找到数组原型的方法
export const arrayMethod = Object.create(prototype)

// 重写数组的 prototype方法, AOP 面向切片编程
methods.forEach(method => {
  arrayMethod[method] = function(...arg) {
    let temp // push, unshift, splice 修改原数组，只对新增的属性进行观察，其他方法没有新增属性
    if (method === 'push' || method === 'unshift') {
      temp = arg
    }
    else if (method === 'splice') {
      temp = arg.slice(2) // [].splice(2,0, ['ok']) // 截取新增的值
    }
    if (temp) observeArray(temp)
    
    console.log('修改了数组')
    return prototype[method].apply(this, arg)
  }
})
