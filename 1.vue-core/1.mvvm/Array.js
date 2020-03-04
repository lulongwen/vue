// Vue 数组变异方法
// push, pop, shift, unshift, splice, sort, reverse

// Vue 实现源码
const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)
const methodsToPatch = [
  'push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'
]

methodsToPatch.forEach(arrayPatch)

function arrayPatch (method) {
  const orginal = arrayProto[method]
  def(arrayMethods, method, function mutator(...args) {
    const result = orginal.apply(this, args)
    const ob = this.__ob__
    let inserted

    switch(method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) ob.observeArray(inserted)
    ob.dep.notify()
    return result
  })
}



// defineProperty 代理数组，性能差
const arr = [1,2,3]
arr.forEach((item, index) => {
  Object.defineProperty(arr, index, {
    get () {
      console.log('set')
      return item
    },

    set (newValue) {
      console.log('set')
      item = newValue
    }
  })
})
