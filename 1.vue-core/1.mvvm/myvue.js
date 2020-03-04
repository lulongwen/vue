// 基础类
class Vue {
  constructor (options) {
    const { el, data } = options
    this.$el = el
    this.$data = data
  }
  
  // 如果有这个根元素，就编译模板
  if (this.$el) {
    // 把数据全部转化为 Object.defineProperty 来定义，实时监听数据改变
    new Observer(this.$data)
  
    new Compiler({ el: this.$el, vm: this })
  }
}


// 观察者模式，发布订阅
class Watcher {
  constructor (vm, expr, cb) {
    this.vm = vm
    this.expr = expr
    this.cb = cb
    // 先存放之前的值
    this.oldValue = this.get()
  }
  
  get () {
    // vm.$data.user vm.$data.user.name
    Dep.target = this // 先把自己放在 this上
    // 取值，把这个观察者和数据关联起来
    let value = CompileUtil.getValue(this.vm, this.expr)
    
    Dep.target = null
    return value
  }
  // 更新操作，数据变化后，会调用观察者的 update 方法
  update () {
    let newValue = CompileUtil.getValue(this.vm, this.expr)
    if (newValue !== this.oldValue) this.cb(newValue)
  }
}



//
class Dep {
  constructor () {
  
  }
}



// 监听数据改变，实现数据劫持
Observer {
  constructor (data) {
    console.log('observer',data)
    this.observer(data)
  }
  
  observer (data) {
    // 有值，并且是对象
    if (data && typeof data === 'object') {
      // 只遍历了一层
      for (let key in  data) {
        this.defineReactive(data, key, data[key])
      }
    }
  }
  
  defineReactive(obj, key, value) {
    // 如果值也是一个对象，就递归调用
    this.observer(value)
    
    Object.defineProperty(obj, key, {
      get () {
        return value
      },
      set: newValue => {
        // 如果值相等，就 return
        if (newValue === value) return
        // 如果重新赋值是个新对象
        this.observer(newValue)
        
        value = newValue
      }
    })
  }
}



// 编译
class Compiler {
  constructor ({el, vm}) {
    // 判断 el 属性，是不是一个元素，如果不是元素就获取这个元素
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    
    // 1 把当前节点中的元素获取到，暂时放入内存中
    let fragment = this.node2fragment(this.$el)
    
    // 把节点中的内容进行替换
    
    // 编译模板，用数据编译
    this.compile()
    
    // 把内容再重新放到页面中
    this.$el.appendChild(fragment)
  }
  
  // 是不是元素节点
  isElementNode(node) {
    return node.nodeType === 1
  }
  
  // 是不是指令开头的
  isDirective (arrtName) {
    return attrName.startWith('v-')
  }
  
  // 编译内存中的 dom 节点，核心的方法
  compile (node) {
    // node.childNodes 类数组
    let childNodes = Array.from(node.childNodes)
    childNodes.forEach(attr => {
      // 是标签节点就用，编译标签的方法
      if (this.isElementNode(child)) {
        this.compileElement(child)
        // 如果是元素的话，需要把自己传进去，再去遍历子节点，递归遍历
        this.compile(child)
      }
      else {
        this.compileText(child)
      }
    })
  }
  
  // 编译标签元素的
  compileElement (node) {
    // node.attributes 类数组
    let attributes = Array.from(node.attributes)
    attributes.forEach(attr => {
      // type=text v-model=user.name
      let { name, value } = attr
      
      // 判断是不是指令
      if (this.isDirective(name)) {
        console.log('directive', node)
      }
    })
  }
  
  // 编译文本的
  compileText (node) {
    // 判断当前文本节点内容是否包含 {{}}
    let content = node.textContent
    // 找到所有 {{user}} 里面的文本
    let reg = /\{\{(.+?)\}\}/.test(content)
    if (reg) {
      console.log(content, 'text')
    }
  }
  
  // 把节点移动到内存中
  node2fragment (node) {
    // 创建一个文档碎片
    let fragment = document.createDocumentFragment()
    let firstChild
    
    while (firstChild = node.firstChild) {
      // appendChild 具有移动性
      fragment.appendChild(firstChild)
    }
    
    return fragment
  }
}



const CompileUtil = {
  // 根据表达式获取到相应的数据 'user.name' ['user', 'name']
  getValue (expr, vm) {
    return expr.split('.').reduce((prev, next) => prev['next'], vm.$data)
  },
  model (node, expr, vm) {
    // node 节点, expr 表达式, vm 当前实例
    // 给输入框赋值 value 属性 node.value= ***
    let value = this.getValue(expr, vm)
  },
  html () {
  
  },
  text (node, expr, vm) {
    let content = expr.replace()
  },
  update: {
    // 把数据插入到节点中
    modelUpdate (node, value) {
      node.value = value
    },
    // 处理 HTML 标签
    htmlUpdate () {
    
    },
    // 处理文本节点
    textUpdate (node, value) {
      node.textContent = value
    }
  }
}

























