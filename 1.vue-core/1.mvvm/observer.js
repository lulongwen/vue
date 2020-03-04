// vue 的数据劫持 Object.defineProperty()
function isObject(value) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

function observer(obj) {
  if (isObject(obj)) {
    for (let key in obj) {
      defineReactive(obj, key, obj[key])
    }
  }
}

//
function defineReactive(obj, key, value) {
  // 如果 value 是个对象，继续监控数据 obj.age = { age: 1 }
  observer(value)

  Object.defineProperty(obj, key, {
    get () {
      return value
    },
    set (newValue) {
      // 如果设置的值是个对象，需要再对这个对象监控 obj.age = [1,2,3]
      observer(val)

      console.log('数据更新了')
      value = newValue
    }
  })
}

let obj = {
  name: 'lucy',
  age: 28
}
observer(obj)
obj.name = 'langwen'
console.log(obj.name)

obj.age = { age: 1 }
// 如果属性不存在，默认后增加的内容，并不会刷新视图
obj.age.age = '2009'

obj.age = [1,2,3]
// 数组调用 push 是无效的，Object.defineProperty 是不支持数组的
obj.age.push(5)

// vue 把数组上的常用方法都在原型上重写了 push, slice, shift, unshift
let prototype = Array.prototype.push
Array.prototype.push = function (value) {
  console.log('数据更新了')
  prototype.call(this, value)
}
obj.age.push(5)
// 通过 length 或 index 索引去改变数组，都是无效的
obj.age.length--;

// 响应式数据：1 数据必须是 Object 对象，并且对象的属性必须存在
// 2 修改数组，只能用 vue 提供的方法，通过 length 长度 或 index 索引去改变数组，都是无效的


// 重写数组方法
const arr = ['push', 'slice', 'shift', 'unshift']
arr.forEach(method => {
  let prototype = Array.prototype[method]
  Array.prototype[method] = function (value) {
    prototype.call(this, value)
  }
})
