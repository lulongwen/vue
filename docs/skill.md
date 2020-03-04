# Vue 开发技巧

## v-if, v-show的区别

1. v-show是 CSS级别的 display: none; 和 display: block
2. v-if 决定是否会选择代码块的内容，有没有这个DOM
3. 什么时候用 v-show，什么时候用 v-if 
	- **频繁操作时，使用 `v-show` ，一次性渲染完的，使用 `v-if`**

4. v-if 性能优化上有什么经验
	- `v-if="false"` 时，内部组件是不会渲染的
	- 在特定条件才渲染部分组件时，可以先将条件设置为 false
	- 需要时（或异步，比如 $nextTick）再设置为 true，这样可以优先渲染重要的其它内容，优化页面渲染性能


## class 绑定数组

class 绑定固定的值，动态值（对象）的混合

```html
<div :class="{show: isShow}">内容</div>

// 复杂类，数组绑定
<button :class="classes"></button>

export default {
	computed: {
		classes () {
			return [
				'btn',
				`btn-${this.type}`,
				[`btn-${this.long}`]: this.long,
				[`btn-${this.size}`]: this.size !== 'default'
			]
		}
	}
}
```


## computed和watch的区别

1. 如果需要动态值，那就用 computed计算属性
	- computed 自动监听依赖值的变化，动态返回内容

2. 需要知道值的改变后执行业务逻辑，才用 watch
	- watch是一个过程，在监听的值变化时，可以触发一个回调，并做一些事情

3. computed 对象的参数
	- computed 有缓存，大多数时候，只是用 computed默认的 get 方法
	- Function 形式是，默认使用它的 get 方法，当写为 Object 时，还能使用 set 方法
	- computed 不接收参数，依赖外部数据
	- computed 可以依赖其它 computed，甚至是其它组件的 data

4. methods, data数据有改变，就会调用
	- methods 是一个方法，它可以接受参数，没有缓存
	- v-for 里，需要根据当前项动态绑定值时，只能用 methods 而不能用 computed

```js
computed: {
	value: {
		get () {},
		set (newValue) {}
	}
}
```

4. watch 对象的参数
	- watch 里面不能使用箭头函数，不应该使用箭头函数来定义 watcher 函数
	- 箭头函数绑定了父级作用域的上下文，watch里面箭头函数的 this 指向 window

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

## this.$emit 的返回值是什么

1. this 当前组件实例
2. 如果需要返回值，可以使用回调参数


## 相同名称的 slot插槽是合并还是替换

1. Vue2.6 是替换
2. Vue2.5 普通插槽是合并，作用域插槽是替换


## 为什么不能用 index 作为 key

1. 更新 DOM性能问题
2. 会引入状态 Bug问题


## 组件中 data 为什么是函数

1. 因为组件是用来复用的，JS 里对象是引用关系，这样作用域没有隔离，数据会覆盖
2. new Vue 的实例，是不会被复用的，因此不存在引用对象的问题


## v-model

1. v-model 是一个语法糖，可以拆解为 props: value 和 events: input。
	- 组件必须提供一个名为 value 的prop，以及名为 input 的自定义事件，
	- 满足这两个条件，就能在自定义组件上使用 v-model 

2. props 不能在组件内修改，必须通过父级修改的，
	- 实现 v-model 一般都会有一个 innerValue 的内部 data，
	- 初始时从 value 获取一次值，当 value 修改时，也通过 watch 监听到及时更新；
	- 组件不会修改 value 的值，而是修改 innerValue，同时将修改的值通过自定义事件 input 派发给父组件，
	- 父组件接收到后，由父组件修改 value

v-model 数字选择器，InputNumber子组件

```html
<template>
  <div class="input-number">
    <button @click="counter(1)">+</button>
    <span class="content">{{value}}</span>
    <button @click="counter(-1)">-</button>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  props: {
    value: {
      type: [Number, String],
      default: ''
    }
  },
  methods: {
    counter (val) {
      let value = this.value + val
      // this.$emit('update:value', value)  :value.sync="value"
      this.$emit('input', value) // v-model="value"
    }
  }
}
</script>

```

父组件的3种用法

```html
<template>
	<InputNumber v-model="value" />

	<InputNumber :value.sync="value" />

	<InputNumber :value="value" @input="fnChange" />
</template>

<script>
import InputNumber from 'components/InputNumber'
export default {
	components: { InputNumber },
	data () {
		return {
			value: 1
		}
	}
}
</script>

```


### 自定义 InputNumber子组件

model 选项里，就可以指定 prop 和 event 的名字了，而不一定非要用 value 和 input

```html
<template>
  <div class="input-number">
    <button @click="counter(1)">+</button>
    <span class="content">{{value}}</span>
    <button @click="counter(-1)">-</button>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  props: {
    number: {
      type: [Number, String],
      default: ''
    }
  },
  model: {
  	prop: 'number',
  	event: 'change'
  },
  methods: {
    counter (val) {
      let value = this.value + val
      this.$emit('change', value) // v-model="value"
    }
  }
}
</script>

```


### .sync

1. `.sync` 不是真正的双向绑定，而是一个语法糖，修改数据还是在父组件完成的，并非在子组件
2. v-model 在一个组件中只能有一个，但 .sync 可以设置很多个
	- 不能和表达式一起使用
	- 不能用在字面量对象上

.sync 错误用法

```html
<template>
	<Card :title.sync="obj.title + '!'" ></Card>
	<Card v-bind.sync="{ title: obj.title }" ></Card>
</template>

```


## 什么是单项数据流

1. 组件通信。父组件是通过 prop 把数据传递到子组件的，但是这个 prop 只能由父组件修改，
	- 子组件不能修改，否则会报错，子组件想修改时，只能通过 $emit 派发一个自定义事件，
	- 父组件接收到后，由父组件修改数据

2. 子组件想要更改父组件状态的场景
	- 在子组件的 data 中拷贝一份 prop，data 是可以修改的，但 prop 不能
	- 如果是对 prop 值的转换，可以使用计算属性
	- `v-model, .sync` 双向绑定数据

```js
export default {
	props: {
		value: Number
	},
	data () {
		return {
			innerValue: this.value
		}
	},

	computed: {
		upperCase () {
			return this.value.trim().toUpperCase()
		}
	}
}
```


## $mount 和 el的区别

1. 使用效果上没有任何区别，都是将实例化后的vue挂载到指定的dom元素中
2. 在实例化vue的时候**指定el**，则该vue将会渲染在此 **el对应的dom中**
	- 没有指定el，则vue实例会处于一种“未挂载”的状态，
	- 此时可以通过 $mount来手动执行挂载

4. 如果$mount没有提供参数，模板将被渲染为文档之外的的元素
	- 并且你必须使用原生DOM API把它插入文档中

5. 需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载

```js
var App = Vue.extend({
  template: '<div>Hello!</div>'
})

// 创建并挂载到 #app (会替换 #app)
new App().$mount('#app')

// 同上
new App({ el: '#app' })

// 在文档之外渲染并且随后挂载
var app = new App().$mount()
document.getElementById('app').appendChild(app.$el)

```



## 路由跳转的方式

1. `<router-link to="home">`，router-link 标签会渲染为 `<a>` 标签
	- 在 template 中的跳转都是用这种

2. 编程式导航，通过 JS 跳转，例如：`router.push('/home')`
