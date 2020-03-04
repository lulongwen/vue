var obj = {
  name: {title: 'boss'},
  age: 120
}

function update () {
  console.log('update data')
}

function observer (obj) {
  if (typeof obj === 'object') return obj

  for (let key in obj) {
    // 给对象上的属性 定义响应式的变化
    defineReactive(obj, key, obj[key])
  }
}

function defineReactive (obj, key, value) {
  observer(value)

  // 有拦截作用域
  Object.defineProperty(obj, key, {
    get () {
      return value
    },
    set (value) {
      update()
      value = val
    }
  })
}

observer(obj)

// 增加对象上原本不存在的属性 是无法响应式变化
obj.name.name = 'happy'
obj.title = 'lucy'

console.log(obj)