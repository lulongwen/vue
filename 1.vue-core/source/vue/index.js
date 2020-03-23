// 初始化数据
import {initState} from '../init/init'
import Watcher from '../watcher/watcher'
import {compiler} from '../compiler/compiler'
import {popTarget, pushTarget} from "dep/dep"

const log = console.log

function Vue(options) {
  // options new Vue中传入的参数
  this.init(options)
}

Vue.prototype.init = function(options) {
  this.$options = options
  
  // 1 mvvm原理，需要数据重新初始化；数据劫持
  initState(this)
  
  // 2 初始化工作，挂载 DOM
  if (options.el) {
    this.$mount()
  }
}

Vue.prototype.$mount = function() {
  // 获取挂载元素 vm.$el
  let {el} = this.$options
  this.$el = (typeof el === 'string') ? document.querySelector(el) : el
  
  // 渲染页面是通过 watcher来渲染的，用于渲染的 Watcher；更新页面，渲染页面的逻辑
  let updateComponent = () => {
    log('watch 执行')
    this.update() // 更新组件
  }
  
  // 渲染 watcher，组件级别更新，只刷新当前组件
  new Watcher(this, updateComponent)
}

// 更新组件
Vue.prototype.update = function() {
  let {$el} = this // this -> vm
  let node = document.createDocumentFragment()
  let firstChild
  
  // while 赋值表达式
  while(firstChild = $el.firstChild) {
    // node.appendChild() 具有移动性，相当于把 el中节点移动过去
    // 不断将第一个子元素 append到文档碎片里 一直到移动完毕为止
    node.appendChild(firstChild)
  }
  
  // 1 插入DOM前，完成对文本变量进行替换
  compiler(node, this)
  $el.appendChild(node)
  
  // 2 依赖收集，属性变化了，重新渲染 watch & dep
}

export default Vue

/*
* watcher 逻辑：
* 1 默认创建一个渲染的 watcher 并执行
* 2 pushTarget 会将 watcher放大一个变量上；pushTarget(this) Dep.target = watcher
*   this.getter() 就是 $mount 里面的 updateComponent // 让当前传入的 expression函数执行
*   调用当前属性的 get方法，给当前的属性添加 dep
*     dep.addSub(watcher)
*     dep.subs = [watcher]
*
* 3 如果用户修改了数据，就会调用 observer的 set方法
*   dep.notify()
*   dep.subs.forEach(watcher => watcher.update())
*
* popTarget() // target 设置为空，方便下次使用
*
* 一个组件定义一个 watcher
* */
