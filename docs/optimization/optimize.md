# Vue 开发技巧

## 一 拆分组件 

1. 组件中一个数据改变了，整个组件都要刷新
2. 拆分提高复用性、增加代码的可维护性
  - 减少不必要的渲染 (尽可能细化拆分组件)

3. 防抖：**多次触发，最后一次执行**
4. 节流： 每隔一秒执行一次，就是节流


### 1).data属性  
不要将所有的数据都放在data中，data中的数据都会增加getter和setter，会收集对应的watcher
```javascript
export function defineReactive (
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  const dep = new Dep()
  let childOb = !shallow && observe(val)
  Object.defineProperty(obj, key, {
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend() // 收集依赖
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)
      dep.notify() // 执行watcher的update
    }
  })
}
```

### 2).SPA页面采用keep-alive缓存组件
keep-alive可以实现组件的缓存功能，缓存当前组件的实例
```javascript
render () {
    const slot = this.$slots.default // 获取默认插槽
    const vnode: VNode = getFirstComponentChild(slot)
    const componentOptions: ?VNodeComponentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      // check pattern
      const name: ?string = getComponentName(componentOptions)
      const { include, exclude } = this
      if ( // 匹配 include / exclude
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      const { cache, keys } = this
      const key: ?string = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
        : vnode.key
      if (cache[key]) { // 如果有缓存 直接将缓存返回
        vnode.componentInstance = cache[key].componentInstance
        // make current key freshest
        remove(keys, key)
        keys.push(key)
      } else {
        cache[key] = vnode // 缓存下来下次用
        keys.push(key)
        // 超过缓存限制 就删除
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode)
        }
      }

      vnode.data.keepAlive = true
    }
    return vnode || (slot && slot[0])
  }
```
  
### 4).v-if 
当值为false时内部指令不会执行,具有阻断功能，很多情况下使用v-if替代v-show

### 5).key保证唯一性 
- 默认vue会采用就地复用策略
- 如果数据项的顺序被改变，Vue不会移动DOM元素来匹配数据项的顺序
- 应该用数据的id作为key属性

### 6).Object.freeze
vue会实现数据劫持，给没个属性增加getter和setter，可以使用freeze冻结数据
```javascript
Object.freeze([{ value: 1 },{ value: 2 }]);
```
在数据劫持时属性不能被配置，不会重新定义
```javascript
const property = Object.getOwnPropertyDescriptor(obj, key)
if (property && property.configurable === false) {
return
}
```

### 7).路由懒加载、异步组件
动态加载组件，依赖webpack-codespliting功能
```javascript
const router = new VueRouter({
  routes: [
    { path: '/foo', component: () => import(/* webpackChunkName: "group-foo" */ './Foo.vue') }
    { path: '/bar', component: () => import(/* webpackChunkName: "group-foo" */ './Bar.vue') }
  ]
})
```
动态导入组件
```javascript
import Dialog from "./Dialog";
export default {
  components: {
    Dialog: () => import("./Dialog")
  }
};
```
### 8).runtime运行时
在开发时尽量采用单文件的方式.vue 在webpack打包时会进行模板的转化

### 9).数据持久化的问题 
- vuex-persist 合理使用 (防抖、节流)

## 二.vue加载性能优化
- 第三方模块按需导入 (babel-plugin-component)
- 图片懒加载  滚动到可视区域动态加载
- 滚动渲染可视区域 数据较大时只渲染可视区域 (计算scrollTop)



### 2).app-shell
### 3).pwa manifest serviceWorker

> 浏览器性能分析=>performance



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



## 路由跳转的方式

1. `<router-link to="home">`，router-link 标签会渲染为 `<a>` 标签
  - 在 template 中的跳转都是用这种

2. 编程式导航，通过 JS 跳转，例如：`router.push('/home')`



## 数据优化

1. Object.freeze
  - Object.freeze()会把对象冻结，比较适合展示类的场景
  - 如果数据属性需要改变，可以重新替换成一个新的 Object.freeze()的对象

2. iview框架的 transfer属性的节点，都会添加在 body里面，增加DOM节点数量
