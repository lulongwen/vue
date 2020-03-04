# Vue 组件类型

1. Vue的核心: 组件和组件化，写一个项目，也就是写一个个组件
2. 每一个 Vue组件其实就是一个 Vue 实例
  - Vue实例是通过 `new Vue({})` 函数创建的，不同的组件，options 配置是不同的
  - 业务开发 90% 的代码都是，围绕 options 配置对象展开


## 一 动态组件

1. `<component :is="componentName"> `实现动态组件
  - `is` 动态绑定的是一个组件对象

2. `is` 解决 HTML5标签上的 bug
  - 用` table，ul,ol,select` 这样固定结构的h5标签
  - 当用` tr,li,li,option` 作为子组件时，不能直接使用，要使用 is属性来绑定

```jsx
  <tr is="row"></tr>
  <li is="row"></li>
  <option is="row"></option>

  Vue.component('row', {
    template: '<tr><td> this is a row </td></tr>'
  })
```

3. 动态组件选项卡

```html
<template>
<div>
  <button @click="fnChange('user')">用户 组件</button>
  <button @click="fnChange('list')">列表 组件</button>
  <button @click="fnChange('info')">信息 组件</button>

  <keep-alive>
    <component :is="component"></component>
  </keep-alive>
</div>
</template>

<script>
import User from 'components/User.vue'
import List from 'components/List.vue'
import Info from 'components/Info.vue'

export default {
  data () {
    return {
      data: {
        user: User,
        list: List,
        info: Info
      },
      component: User
    }
  },
  methods: {
    fnChange (type) {
      this.component = data[type]
    }
  }
</script>
```

3. keep-alive 只有 mounted 触发了
  - 如果不离开当前页面，切换到其它组件， beforeDestroy 不会被触发，说明组件已经被缓存了



## 二 递归组件

1. 组件在模板中自己调用自己，递归组件的必要条件，**组件必须有 name 值**
  - 递归组件的使用者是组件自身，它得知道这个组件叫什么，没有用 components 注册，所以 name 字段就是必须的

2. 递归组件**必须一个退出条件**，否则死循环；一般用 `v-if` 设置退出条件
3. 递归组件一般都是数据驱动型的，父级有一个 children字段，然后递归
  - 递归循环引用

Tree.vue 递归：子组件

```html
<template>
  <li class="tree-list">
    <label class="tree-title">
      <template v-if="data.children && data.children.length">
        <span class="tree-expand" @click="fnExpand">
          <i v-if="data.expand">-</i>
          <i v-else>+</i>
        </span>
      </template>
      <input type="checkbox" :checked="data.checked" @change="fnCheck"/>
      <span>{{data.title}}</span>
    </label>

    <!--如果当前节点不展开，下面所有的子节点也就不会渲染-->
    <template v-if="data.expand">
      <ul class="tree-children" v-if="data.children && data.children.length">
        <TreeNode
          v-for="(item, i) of data.children"
          :key="`tree_child_${_uid}_${i}`"
          :data="item"
          :checkbox="checkbox"/>
      </ul>
    </template>
  </li>
</template>

<script>
export default {
  name: 'TreeNode', // 递归组件名字，必须的
  inheritAttrs: false
</script>

```

父组件引用

```html
<template>
  <ul :style="treeStyle">
    <template v-for="(item, i) of innerData">
      <TreeNode
        :key="`tree_${_uid}_${i}`"
        :checkbox="checkbox"
        :data="item"/>
    </template>
  </ul>
</template>

<script>
import TreeNode from './TreeNode'
import cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'Tree',
  inheritAttrs: false,
  components: {
    TreeNode
  }
</script>

```


## 三 异步组件

1. 在需要时加载组件代码，从而减少 HTTP 请求、文件大小，并自动提高性能
  - 延迟加载特性的重要之处：可以处理全局加载的组件，也可以处理局部加载的组件

1. router 路由的配置列表，一般都是用异步组件
  - 每个页面在跳转到路由时，才加载对应的 JS 文件，否则入口文件会非常庞大

```js
{
  path: '/form',
  name: 'form',
  title: '表单',
  component: () =>  import(/* webpackChunkName: "login" */ 'views/Login.vue') // cli3.0

  component: resolve => require(['views/Login.vue'], resolve) // cli2.9
}

```



## 四 functinal组件

1. 函数式组件，即无状态，无法实例化，没有 this 上下文，没有生命周期
  - 内部没有任何生命周期处理方法，非常轻量，因而渲染性能高
  - 特别适合用来只依赖外部数据传递而变化的组件

2. js `functional: true`

3. [函数式组件参考资料](https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6)



### `<template functional>`

1. 声明一个组件为函数式组件，只需要在 `<template>` 标签中添加 `functional` 属性
2. 如果组件中需要接受父组件 props传递的数据，通过 `props.数据名`获取
3. `<template functional>` 只接收 props 值，不需要script标签

```html
<template functional>
  <div>{{ props.name }}</div>
</template>

```


### `functional: true`

1. `functional: true` functional 的布尔值选项，设置为 true 可以使组件无状态和无实例
  - 没有 data 和 this 上下文
  - 这样用 Render 函数返回虚拟节点可以更容易渲染，因为函数化组件（Functional Render）只是一
个函数，渲染开销要小很多

2. context 参数：临时上下文
  - 组件需要的 data、props、slots、children、parent 都是通过这个上下文来传递的，
  - 比如 this.level 要改写为 context.props.level
  - this.$slots.default 改写为 context.children

3. 省略 props 选项，所有组件上的 attribute 都会被自动隐式解析为 prop

```js
export default {
  functional: ture,
  props: {}, // 可选参数
  render: (h, ctx) => {
    console.log(ctx)
    let { props, scopedSlots } = ctx
    return scopedSlots.default && scopedSlots.default(props || {})
  }
}

```


### functional事件监听

1. 子组件不需要任何处理，只要在父组件引用的时候通过 **@hook** 来监听
  - 不仅可以监听 mounted，其它的生命周期事件，例如：created，updated等都可以
  - 在一些场景中，需要在父组件上知道子组件什么时候被创建、挂载或者是更新

父组件

```jsx
// 传统语法
<Child @mounted=“doSomething”/>

// @hook: 前缀监听生命周期中的钩子，并指定回调函数
<Child @hook:mounted="doSomething"/>

```

子组件

```js
mounted() {
  this.$emit("mounted")
}

```

### functional应用场景

1. 渲染时多个组件中选择一个
2. 在将 children、props、data 传递给子组件之前操作它们

3. 函数化组件 render.js，执行传递的render

```js
export default {
  functional: true,
  props: {
    render: Function
  },
  render: (h, ctx) => {
    return ctx.props.render(h)
  }
}
```

创建组件

```html
<template>
<div>
  <Render :render="render"></Render>
</div>
</template>

<script>
import Render form './render.js'
export default {
  components: { Render },
  props: {
    render: Function
  }
}
</script>

```

使用组件，父级传入自定义render函数，实际开发中，用 slot 取代 Functional Render

```html
<template>
<div>
  <Component :render="render"></Component>
</div>
</template>

<script>
import Component from 'components/my-component.vue'
export default {
  components: { Component },
  methods: {
    render: (h) => {
      return h('div', {
        style: {
          color: 'red'
        }
      }, '自定义内容')
    }
  }
}
</script>

```


## 受控/非受控组件


## 五 全局组件

1. 全局组件可以从应用程序中的任何模板（包括子组件）访问
  - 加载全局组件要谨慎，会让你的应用程序体积膨胀
  - 即使没有用到全局组件，仍然会包含在你的 Webpack 构建中

2. `main.js` 批量注册全局组件

```js
Object.keys(components).forEach(key => {
  // 首字母大写
  let name = key.replace(/(\w)/, val => val.toUpperCase() )
  Vue.component(name, components[key])
})
```


## 六 局部组件

1. 按需加载，与 Webpack结合使用时，可以延迟加载，只在使用组件时加载
  - 好处：让应用程序初始文件较小，并减少了初始加载时间

1. vue-router的 component的 import 的页面，就是一个组件
  - 一个 .vue文件就是一个组件，包含DOM，获取数据，数据可视化等业务功能
  - 项目开发中写的大部分代码都是这类的组件，缺点：不会被重复利用




## 七 组件命名规范

1. 单文件组件文件名，要么始终是大驼峰：帕斯卡命名
  - `PascalCase` 首字母都大写
2. 要么始终是：中横线链接 `kebab-case`

```tree
components/
  MyComponent.vue
  my-component.vue
```



## KeepAlive 缓存组件

1. keep-alive是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM
  - SPA 项目主流程缓存优化
  - 组件切换时保持之前加载的状态，避免反复渲染影响页面性能
  - 同时也可以很大程度上减少接口请求，减小服务器压力

2. keep-alive缓存组件，会增加两个生命周期 activated & deactivated
  - mounted > activated / deactivated
  - 进入当前页面 activated，离开时执行 deactivated
  - 路由的进入和切换回相应的触发 activated和 deactivated
  - 注意：**服务端渲染不支持 activated**

3. keep-alive 的属性参数
  - include ：字符串或正则表达式。只有名称匹配的组件会被缓存
  - exclude ：字符串或正则表达式。都不会被缓存
  - max 数字，最多可以缓存多少组件实例

4. 路由设置页面是否被缓存

```js
// 路由设置
export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('views/Home'),
    meta: {
      keepAlive: true // 需要被缓存
    }
  }
]

// App.vue 根组件设置
<keep-alive>
  <router-view v-if="$route.meta.keepAlive" :key="$route.name"/>
</keep-alive>

// 不需要缓存的视图组件
<router-view v-if="!$route.meta.keepAlive" />

```

### 清除缓存数据

> 解决数据更新页面不刷新问题

1. exclude

```jsx
<keep-alive :include="cachedViews">
  <router-view></router-view>
</keep-alive>
```

2. `beforeRouterLeave` 销毁组件

```js
export default {
  beforeRouterLeave (to, from ,next) {
    this.$destroy()
    next()
  }
}
```

3. watch 路由变化，再次执行该方法

```jsx
'$route'(to, from) {
  if (list.includes(from.path)) this.init()
}
```



## 独立的组件

1. 具有功能的基础组件，只包含某个功能，比如日期选择器、模态框等
  - 重点：**API设计，JS编程功底**

2. UI组件库，大量使用，重复利用
  - API高度抽象，通过不同的配置实现不同的功能；比如，模态框，日期组件
  - 开发和维护一套自己的组件规范或组件库


## 业务组件

1. 功能单一，只在当前项目中会用到，不具有通用性，例如：
  - 请求数据，渲染table
  - 请求数据的select下拉框


## 参考资料

[Vue 异步组件资料](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)

[Vue 递归组件](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E9%80%92%E5%BD%92%E7%BB%84%E4%BB%B6)