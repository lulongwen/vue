// 1 实现 Vue 的数据劫持

function Mvvm (options = {}) {
	// 将所有的属性挂载在 options
	this.$options = options
	this._data = this.$options.data

	observer(this._data)

  // 把 data上所有的数据，都给绑定到 this 上
  for (let key in this._data) {
    Object.defineProperty(this, key, {
      enumerable: true,
      get () {
        return this._data[key] // this.a = a
      },
      set (newValue) {
        this._data[key] = newValue
      }
    })
  }

  // 编译 {{}}
  new Compile(options.el, this)
}

const isObj = data => data != null && (typeof data === 'object')

// 2 Observer 观察数据，Object.defineProperty 实现代理
function observer (data) {
  if (!isObj(data)) return data

  return new OBSERVE(data)
}


// 观察对象，给对象增加 Object.defineProperty
// vm.$options
function OBSERVE (data) {
	// 把 data 属性通过 Object.defineProperty 定义属性
	for (let key in data) {
		let val = data[key]

    observer(val)

		// 1 defineProperty数据劫持
		Object.defineProperty(data, key, {
			enumerable: true,
			get () {
				return val
			},

			set (newValue) {
				// 更改值的时候，设置的值和之前是一样的，就返回
				if (newValue === val) return

				// 如果以后再获取值的时候，将刚才设置的值丢回去
				val = newValue

        observer(newValue)
			}
		})
	}
}

// Vue 特点：不能新增不存在的属性，因为不存在的属性没有 get & set
// 深度响应：每次赋予一个新对象时，会给这个新对象增加：数据劫持


// 3 编译 HTML页面里面的 {{}} 内容
function Compile (el, vm) {
  // el 表示替换的范围
  vm.$el = document.querySelector(el)
  const fragment = document.createDocumentFragment()

  // 将 #app 里面的内容，移入内存中
  while(child = vm.$el.firstChild) {
    fragment.appendChild(child)
  }

  replaceHtml(fragment) // 循环每一层节点，解析替换值
  function replaceHtml (fragment) {
    Array.from(fragment.childNodes).forEach(node => {
      let text = node.textContent
      let reg = /\{\{(.*?)\}\}/  //= /{{}}/

      if (node.nodeType === 3 && reg.test(text)) {
        // RegExp.$1 = obj.good, value, obj.ok，一定要注意空格
        let arr = RegExp.$1.trim().split('.') // [obj, ok], [value]
        let value = vm

        arr.forEach(key => { // [obj, ok], [value]
          // key = obj, good, value, obj, ok, name
          // value[key] = vm.obj, vm.good, vm.value
          value = value[key]
        })

        if (isObj(value)) value = JSON.stringify(value)
        // 赋值替换
        node.textContent = text.replace(reg, value)
      }

      if (node.childNodes) {
        // 如果节点还有子节点，递归往下循环节点
        replaceHtml(node)
      }
    })
  }

  // 最后，再渲染HTML
  vm.$el.appendChild(fragment)
}


// 4 发布订阅模式：实现响应式数据
