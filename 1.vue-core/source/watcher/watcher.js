import {pushTarget, popTarget} from '../dep/dep'
import {queueWatcher} from './queue'

let id = 0

// 渲染使用 watcher，计算属性也要用 watcher vm.watch也要用
class Watcher {
  /**
   * 2020年03月23日11:09:58
   * @param vm 当前组件实例 new Vue
   * @param expression 用户传入的可能是个函数，可能是一个表达式
   * @param callback 用户传入的回调函数，vm.$watch('name', callback)
   * @param options 一些其他参数，可能有
   */
  constructor(vm, expression, callback= function() {}, options={}) {
    this.vm = vm
    this.expression = expression
    if (typeof expression === 'function') {
      this.getter = expression
    }
    
    this.callback = callback
    this.options = options
    this.id = id++
    
    // watcher 和 dep的指向关系
    this.deps = []
    this.depsId = new Set()
    
    // 默认创建一个 watcher，会调用自身的 get方法
    this.get()
  }
  
  get() {
    // 把当前渲染 watcher 放到 Dep.target = watcher
    // {{value}} 变化了，让这个 watcher 重新执行
    pushTarget(this) // 渲染 watcher
    
    this.getter() // 让当前传入的 expression函数执行
    
    popTarget() // target 设置为空，方便下次使用
  }
  
  // 同一个 watcher 不应该重复记录 dep
  addDep(dep) {
    let {id} = dep
    let {depsId, deps} = this
    if (depsId.has(id)) return
    
    depsId.add(id)
    // 让 watcher记住 dep
    deps.push(dep)
    dep.addSub(this)
  }
  
  // 更新数据，数据变化重新执行 get方法
  update() {
    // 立即调用 get会导致页面刷新，多次修改数据会重复执行，nextTick 异步来解决
    // this.get()
    queueWatcher(this)
  }
  
  run() {
    this.get()
  }
}

export default Watcher
