# Vue源码解析


## 一 数据驱动

1. `new Vue()`发生了什么
2. Vue 实例挂载
3. render函数
4. VIrtual DOM
5. createElement
6. update


## 二 组件化

1. createComponent
2. patch
3. 合并配置
4. 生命周期
5. 组件注册
6. 异步组件
  - 工厂函数
  - Promise
  - 高阶组件


## 三 响应式原理

1. 响应式对象
2. 依赖收集
3. 派发更新
4. nextTick
5. 检测变化细节
6. Computed
7. 侦听属性
8. 组件更新
9. 原理图


## 四 编译

1. 编译入口
2. parse
3. optimize
4. codegen



## 5. 扩展

1. Event
2. v-mdoel
3. slot
4. keep-alive
5. transition
6. transition-group






## Vue 源码构建

### Vue 源码目录设计
### 入口文件
### flow 类型检查

* [snabbdom 虚拟DOM的实现](https://github.com/snabbdom/snabbdom)
* `vdom/vnode.js`

```jsx
vm._c = (a,b,c,d) => createElement(vm, a,b,c,d, false)

// user-written render functions
vm.$createElement = (a,b,c,d) => createElement(vm, a,b,c,d, true)
```

* render 虚拟DOM
```jsx
const app = new Vue({
  el: '#app',
  render: (createElement) => createElement('div', {
    attrs: { id: 'app1'}
  }, this.message),
  data () {
    return {
      message: 'hello app'
    }
  }
})

```



## 3 Vue 响应式原理

* 响应式原理
* 响应式对象
* 依赖收集
* 派发更新
* nextTick
* 检测变化的注意事项



第一代框架
	jquery.js
	prototype.js
	重点解决了浏览器兼容性问题和 API的易用性

第二代框架
	Vue React
	重点解决了组件化问题，选择合适的框架，可以节约架构成本，还能够享受资源

基于数据驱动视图的思想，根据json数据快速构建crud和form等组件 



## Vue 知识点
* spa 应用的路由设计
* vue 的双向绑定底层原理和生命周期

* vue 虚拟 DOM 和 react 虚拟DOM的区别
* 写一个包括事件监听，虚拟DOM，基本组件生命周期，
	* 虚拟节点，差异算法，单项数据更新的 React库

* vue 通信方式
* vue 的路由怎么实现的 vue的挂载怎么实现的
* el 和 $mount 有啥区别
* 视频资料 https://coding.imooc.com/class/chapter/228.html#Anchor

```jsx
两者在使用效果上没有任何区别，都是为了将实例化后的vue挂载到指定的dom元素中。

如果在实例化vue的时候指定el，则该vue将会渲染在此el对应的dom中，反之，若没有指定el，则vue实例会处于一种“未挂载”的状态，此时可以通过$mount来手动执行挂载。

注：如果$mount没有提供参数，模板将被渲染为文档之外的的元素，并且你必须使用原生DOM API把它插入文档中
	var MyComponent = Vue.extend({
  template: '<div>Hello!</div>'
})

// 创建并挂载到 #app (会替换 #app)
new MyComponent().$mount('#app')

// 同上
new MyComponent({ el: '#app' })

// 或者，在文档之外渲染并且随后挂载
var component = new MyComponent().$mount()
document.getElementById('app').appendChild(component.$el)

```



## 参考资料

* vue源码全方位深入解析
  https://ustbhuangyi.github.io/vue-analysis/

* vue源码分析
  https://github.com/answershuto/learnVue
  https://github.com/d-levin/vue-advanced-workshop


路由的动态参数 /foo/:id ，用的是 path-to-regexp.js