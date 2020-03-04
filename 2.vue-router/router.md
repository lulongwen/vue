# Vue 路由原理

* 导航守卫的执行逻辑
* URL的变化逻辑
* 组件的渲染逻辑



## 一 Vue-Router 初始化

### createMatcher 的初始化逻辑

* createMatcher 初始化是：根据路由的配置描述，创建映射表
* 包括路径，名称到路由 record 的映射关系

* Vue 编写插件的时候，通常要提供静态的 install 方法；
* Vue-Router 的 install 方法会给每一个组件注入 beforeCreated 和 destoryed 钩子函数；
* 在 beforeCreated 做一些私有属性定义和路由初始化工作

* 路由初始化的时机是在：组件的初始化阶段
  * 执行到 beforeCreate 钩子函数的时候，会执行 router.init 方法
  * 然后又会执行 history.transitionTo 方法，做路由过渡

```jsx

switch (mode) {
  case 'history':
    this.history = new HTML5History(this, options.base)
    break;

  case 'hash':
    this.history = new HashHistory(this, options.base, this.fallback)
    break;

  case 'abstract':
    this.history = new AbstractHistory(this, options.base)
    break;

  default:
    if (process.env.NODE_ENV !== 'production') {
      assert(false, `invalid mode: ${model}`)
    }
}
```



## 路由注册




## Vue-Router 对象



## matcher



### match 的匹配过程

* match 会根据传入的位置和路径，计算出新的位置；
* 并匹配到对应的路由 record；
* 然后根据新的位置和 record 创建新的路径并返回。



## 路由切换

* router 路由， 访问不同的路径，就可以返回不同的结果
* 适用于开发单页面应用 Single Page Application


