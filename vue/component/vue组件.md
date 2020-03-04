# Vue组件


## template


## Vue全局组件

```jsx
  Vue.component() 注册全局组件

  Vue.use() 注册插件

  Vue.mixin() 混合

  Vue.directive() 自定义指令

  Vue.filter() 过滤器

  Vue.extend()

  Vue.nextTick()

  Vue.delete()

  Vue.compile()

  Vue.version()

```


## 动态组件

```jsx

  component
  :is
  template
  keep-alive

组件的特殊特性
  :key
  ref
  scope

```


## 组件参数传递

```jsx

vue-router 传参
  * query, URL 传参
  * params

this.$router.push({name: 'router-name', params: {}, query: {}})

beforeRouterEnter(to, form, next) {
  next(vm => vm.init())
}，

beforeRouteLeave(to, from, next) {
  // 关闭标签，销毁组件，下次来重新创建
  this.$destroy()
  next()
}

props 子组件 props接收参数，不要在内部改变props属性
  * 实际上可以修改值，但是会报错

this.$emit('event-name', { }) 多个值
@on 父组件接收值


v-slot
  template
```


## 数据交互
* ajax
  * axios
  * fetch
  * vueResource

* Vue事件
* @click 等事件是经过 Vue 封装的
* 在一些实际上处理 DOM原生事件的场合才需要添加额外的修饰符

```jsx
事件修饰符
  @click.native
  @click.self

  @click.stop
  @click.capture
    element.addEventListener('click')
    ev.stopPropagation
    cancelBubble = true

  @click.once
    对应jquery $el.on('click'), $el.off('click')


input修饰符
  .lazy
  .number

功能键
  @keyup.enter
  @keyup.enter.native="fnSubmit"

  .enter
  .ctrl
  .keyCode
```

* 绑定动态数据 data
  * computed
    * 任何复杂逻辑，都应该使用 计算属性，依赖数据，处理后返回
  * watch
  * style
  * class
  * filters
    * 获取不到 this, 使用 vm. 能获取到 data数据
    * filters 过滤器设计的目的用户文本转换
  * v-model

