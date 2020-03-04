# new Vue() 实例

1. vue实例的创建和作用
2. vue实例的属性
3. vue实例的方法


## 实例属性和方法

1. vue实例自身属性和方法
2. 暴露自身属性和方法，以 $ 开头，如 $el, $data
3. 每个 vue实例都会代理，其data对象里所有的属性，这些被代理的属性是响应式的
	- 新添加的属性不具备响应功能，改变后不会更新视图
	- `$set()` 实现响应式

```js
vm.$data

vm.$props

vm.$el

vm.$options

vm.$parent

vm.$root

vm.$children

vm.$slots

vm.$scopedSlots

vm.$refs

vm.$isServer

vm.$attrs

vm.$listeners

```


## vm.$nextTick()

1. nextTick 函数接收一个回调函数 cb

2. 用了 Promise，setTimeout 和 setImmediate 三种方法来实现 nextTick，在不同环境会使用不同的方法

3. [$nextTick 源码](https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js)


## vm.$set()

1. 两种情况会用到 $set()，由于 JavaScript 的限制，Vue 不能检测到：
	- 用索引直接设置一个项时 ` this.items[index] = value`
	- 当修改数组的长度时 `vm.items.length = newLength`
	- 对象属性的添加或删除 `this.item[1] = 'x'`, `this.item.ok = 2` 不是响应式

2. 响应式修改数据

```js
// 修改数组或对象
this.$set(this.item, 1, 'x')
```

3. 数组响应式方法
	- `push()、pop()、shift()、unshift()、splice()、sort()、reverse()`
	- 更改为一个新对象或数组


### data

1. `props` 要比 `data` 先完成初始化，
	- 利用这一点给 data 初始化一些数据进去
2. `data(vm)` data可以传参
	- 子组件的 data 函数也可以有参数，且该参数是当前实例对象
	- 利用这一点做一些逻辑判断

3. `computed` 不要使用 箭头函数，箭头函数中的 this 指向上层

```js
export default {
	props: {
  	size: String
 	},
  data () {
    return {
      buttonSize: this.size
    }
  },
  data (vm) { // data 传参
	  return {
	    buttonSize: vm.size
	  }
	}
}
```


### computed-set

大多数时候，只是用 computed默认的 get 方法

fullName可以写为一个 Object，而非 Function，
Function 形式是，默认使用它的 get 方法，当写为 Object 时，还能使用 set 方法

```js
computed: {
	fullName () {
		return `${this.firstName} ${this.lastName}`
	}
}
```


### mixin

1. 组件都共用到的，例如：props、data、methods等，可以单独抽出来放到 mixins 混合器中

```js
// common-mixin.vue
export default {
  props: {
    pageSize: 1,
    pageLength: 10,
    currentPage: 1
    total: 20
  },
  methods: {
    prevPage (page) {
      ...
    },
    nextPage (page) {
      ...
    }
    currentPage (page) {
      ...
    }
  }
}

// 组件引用
import CommonMixin from './mixin/common-mixin'
export default {
	mixins: [CommonMixin]
}

```


## vm.$isServer()

当前 Vue 实例是否运行于服务器，如果组件要兼容 SSR，它会很有用

### v-once

1. 只渲染元素和组件一次
2. 随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。用于优化更新性能

### inheritAttrs

1. 一些原生的 html 特性，比如 id ，即使没有定义 props，也会被集成到组件根节点上
2. 设置 inheritAttrs 为 false可以关闭此特性


### delimiters

1. 改变纯文本插入分隔符，Vue.js 默认的是 {{ }}
2. 修改为指定的分隔符

```js
// ${} 代替了{{ }}
delimiters:['${','}']
```

### errorHandler

捕获错误信息


### errorCaptured

```js
// child.vue
mounted () {
	consol.log('故意写错')
}

import Child from './Child'
export default {
	components: { Child },
	errorCaptured(err, vm, info) {
		// err 错误对象，发生错误的组件实例
		// info 包含错误来源信息的字符串
		console.log('errorCapture', err)

		// 阻止错误继续向上传播
		return false
	}
}

```



### watch

监听状态的变化，更多配置

```js
// 对象写法
watch: {
	handler: 'init', // 执行的函数
	immediate: true, // 是否立即执行
	deep: true // 深度监听
}

// 函数写法
watch: {
	arr () {
		this.init()
	}
}
```

### comments

1. `comments: true` 保留HTML注释，默认不保留注释
2. 该选项仅在使用完整版本并具有浏览器编译功能时有效，单个组件中不起作用的
	- 通过script在浏览器中引入有效。[构建工具中无法使用](https://github.com/vuejs/vue/issues/6177#issuecomment-316886075)
	- only works when using the full build with in-browser compilation

```js
new Vue({
  el: '#app',
  comments: true,
  ...App
})
```