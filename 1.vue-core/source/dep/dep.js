let id = 0

// 发布订阅，watcher调用
class Dep {
  constructor () {
    this.subs = []
    this.id = id++
  }
  
  // 订阅：将调用 addSub时传入的内容保存到 this.subs数组中
  addSub(watcher) {
    this.subs.push(watcher)
  }
  
  notify() {
    this.subs.forEach(item => {
      item.update()
    })
  }
  
  depend() {
    // 防止直接调用 depend方法，先判断一下
    if (Dep.target) {
      Dep.target.addDep(this) // this -> Dep
    }
  }
}

// 保存当前的 watcher
const stack = []

// 进栈
export function pushTarget(watcher) {
  Dep.target = watcher
  stack.push(watcher)
}

// 出栈
export function popTarget() {
  let {length} = stack
  stack.pop()
  Dep.target = stack[length - 1]
}

// 用来收集依赖，收集的是一个个 watcher
export default Dep
