# Vue 技术栈

> Author: **卢珑文** <br>
> Email: lulongwen@live.com <br>
> Wechat: 18915972355 <br>
> Website: https://www.lulongwen.com <br>
> Github: https://github.com/lulongwen <br>


## 一 快速创建项目

1. 可以快速识别 `.vue`文件封装组件插件等功能
2. `.vue` 文件进行快速原型开发缺点：
  - 需要安装全局依赖
  - 在不同机器上的一致性不能得到保证,只适用于快速原型开发

```bash
# 全局安装 vue-cli4.0
npm install @vue/cli -g # 推荐 npm 安装
npm install -g @vue/cli-service-global
yarn global add @vue/cli

# vue serve 和 vue build 命令对单个 .vue编译
vue serve App.vue
vue serve -o
  -o, --open  打开浏览器
  -c, --copy  将本地 URL 复制到剪切板
  -h, --help  输出用法信息

# cli3 桥接 cli2
  npm install -g @vue/cli-init

# cli2.0 创建项目
  vue init webpack my_project

vue --version # vue cli版本

# 查看全局包
  yarn global list --depth=0
  npm list -g --depth=0

```


## Vue 是什么？

- 渐进式框架 Progressive Framework
- 声明式渲染 Declarative Rendering

- 前端趋势将是 UI 标准化、基于组件的模块化和组合
- 数据驱动视图，面向数据编程要贯穿整个开发
- 渐进式框架 The Progressive Framework

  - 渐进增强，不必一下子都学会，通过组合完成一个项目
  - 更灵活的适应各种场景，小巧，快速，灵活场景
  - 更低的培训成本，更快的上手速度

- Vue 的核心，组件和组件化，写一个项目，也就是写一个个组件

  - iviewUI 负责交互和样式，开发只需要维护好数据
  - 配合 TypeScript 开发大型项目
  - [Vue 组件精讲](1.组件/Component.md)

- 单向数据流

  - 单向数据流原则：组件内不能修改 props 属性

- .vue 是 vue 单文件组件
  - 一个文件就是一个组件
  - 由 template，script 和 style 三个标签构成，分别是 html，js 和 css 的内容部分

### Vue 优点：

1. 文档健全，API 简洁，持续更新，活跃的社区和生态圈
2. 支持复杂的企业级项目
3. 组件化开发，提高写作效率，.vue 格式组件开发很方便
4. 声明式渲染，组件系统， 客户端路由，大规模状态管理，构建工具
5. vue 数据驱动，主要操作的是数据

### Vue 的缺点

1. Vue 渲染面临的问题是什么？

- SEO 不好
- 首页加载时间长，白屏

2. 多层次的优化方案

- 构建成模板编译
- 数据无关的 prerender 的方式
- 服务端渲染



## Vue 大中台技术栈

```jsx
	faker
	moment
	ant-design-vue

yarn add nprogress
yarn add babel-plugin-import --dev
	Babel 配置中引入该插件
	针对 antd, antd-mobile, lodash, material-ui等库进行按需加载

antd-vue
https://github.com/vueComponent/ant-design-vue

bootstrap 组件
https://bootstrap-vue.js.org/docs/components/button

vue-antd admin
https://github.com/vue-alain/vue-alain

```

## 官方工具链

- 路由：vue-router
- 状态管理：vuex
- 构建工具脚手架：vue-cli
- 开发者工具：vue-devtools
- IDE 支持：VSCode + Vetur
- 静态检查：ESLint + eslint-plugin-vue
- 单元测试：Jest + vue-jest + vue-test-utils
- 文档/静态站生成：VuePress

- Promise 请求: Axios
- 服务端渲染: Nuxt.js

  - 不支持 IE9 以下浏览器，Object.defineProperty(es5)的没有替代方案

- Quasar
  - http://www.quasarchs.com
  - 不仅仅是组件库的全平台解决方案
  - 桌面端 SPA/SSR + 移动端 PWA / Hybrid + 桌面端 Electron

## Vue 3.0

- 基于 Proxy 的变动侦测，性能整体优于 getter/setter

  - 长远来看，JS 引擎会继续优化 Proxy，但 getter/setter 基本不会再有针对性的优化

- Virtual DOM 重构
  - 更新速度 / 内存占用均有质的提升
- 编译器架构重构，更多的编译时优化

- Mixin 逻辑复用
  - 混入的属性来源不清晰
  - 命名空间冲突、
- 高阶组件 (HOC)

  - Props 来源不清晰
  - Props 命名空间冲突
  - 多余的组件实例造成的性能浪费

- 针对以上 2 点，采用 Scoped Slots
  - 来源清晰
  - 无命名空间冲突
  - 多余的组件实例造成的性能浪费

## Vue 组件库

1. PC 端

- Vue-antd
- Element
- iview

2. 移动端

- Mand Mobile 滴滴基于金融场景的 Vue 组件库
- CubeUI 滴滴移动端组件库
- NutUI 京东风格的移动端 Vue 组件库

## 组件

- Vue 的核心，组件和组件化，写一个项目，也就是写一个个组件
- 基于 Vue.js 开发独立组件，Vue.js 组件开发，玩到最后还是在拼 JS 的功底
- 批量注册全局组件
- Vue组件

  ### [属性](2.属性/Attrs.md)

  - 自定义属性
  - 原生属性
  - 特殊属性
  - data 是组件本身的，props 是父组件传来的，vuex 就可以放全局的

  ### [事件](3.事件/Event.md)

  - 函数节流 Throttle
    - 如果一个函数持续的，频繁地触发，那么让它在一定的时间间隔后再触发
  - 函数防抖 Debounce
    - 如果一个函数持续地调用，那么只在它结束后过一段时间只执行一次

  ### [插槽]()

  ### 指令

### Vue 组件类型

- 全局组件
- 局部组件
- 异步组件
- 动态组件
- 递归组件
  - 递归会一直循环下去 \* 组件自身调用自己，会一直调用自己，要给一个退出的条件

## Vue-Router

## Vuex

## SSR-Nuxt.js

## Vue 项目实战

### Vue 旅游 APP

### Vue 外卖系统

### Vue SAAS 项目

## MVVM

```
  Eevnt Bus 事件总线

  Virtual DOM 虚拟DOM

  State Manage 状态管理

  Router 路由

  Mini Webpack 简化版的 webpack

  MVVM Model-View-ViewModel
  MVC的改进版，将其中的View 的状态和行为抽象化
    将视图 UI 和业务逻辑分开

  MVVM是 MVP Model-View-Presenter 模式
    与 WPF结合的应用方式时发展演变过来的一种新型架构框架

  HTML      是 view
  modelView 是 桥梁
  model     是 数据

```

## Vue 开发实战

### 指令的本质

### 虚拟 DOM & key 属性的作用

### template & jsx

### 生命周期函数 & 函数式组件

    * 如何触发组件的更新
    * computed & watch

### provide & inject

- 获取跨层级组件实例

### Vue 高阶组件 highComponents

### Vue 的错误捕获 error

1. `>>>`深度作用选择器 select.vue

2. inheritAttrs 组件配置项 inheritAttrs

- 如果子组件没有接收父组件传递的值，那么值会自动的挂载到子组件上的 属性上
- `inheritAttrs: false` 子组件上不显示父组件传递的数据
- 但子组件，this.\$attrs 仍然能获取到 父组件传递的属性
- vm.\$attrs 是组件的内置属性，值是父组件传入的所有 prop 中，未被组件声明的 prop(class 和 style 除外)

3. $arrts & $listeners 组件实例属性

- \$attrs 属性
- \$listeners 事件

4. provide / inject 组件选项

- provide & inject 要一起使用, App.vue
- 祖先组件向其所有子孙后代注入一个依赖
- 不论组件层次有多深，并在起上下游关系成立的时间里始终生效
- provide 和 inject 主要为高阶插件/组件库提供用例，不推荐直接用于应用程序代码

5. slot-scope 作用域插槽 slotScope

## vue-jsx

vue-jsx
https://www.jianshu.com/p/95cb3e42335fß

https://github.com/vuejs/jsx

yarn add @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props --dev

.babelrc
{
"presets": ["@vue/babel-preset-jsx"]
}

render 函数，它比 template 更接近编译器
Vue 属性就有三种：组件属性 props，普通 html 属性 attrs，Dom 属性 domProps

组件属性 props：指组件声明的属性，即上述示例中声明的 props: ['count']。

普通 html 属性 attrs:  指组件未声明的属性，即上述示例中的 type="button"，该属性默认会直接挂载到组件根节点的上，如果不需要挂载到根节点，可声明  inheritAttrs: false。

Dom 属性 domProps：指的 Dom 属性，如上述示例中的 innerHTML,它会覆盖组件内部的 children, 这类属性我们一般很少使用到。

同样事件属性也分了两种：on nativeOn
正则来区分

onXXX 的均被认为是事件，nativeOnXXX 是原生事件，domPropsXXX 是 Dom 属性
class,staticClass,style,key,ref,refInFor,slot,scopedSlots 这些被认为是顶级属性，至于我们属性声明的 props，以及 html 属性 attrs，不需要加前缀，插件会将其统一分类到 attrs 属性下，然后在运行阶段根据是否在 props 声明来决定属性归属(即属于 props 还是 attrs)。

React 中所有属性都是顶级属性，直接使用{...props}就可以了，但是在 Vue 中，你需要明确该属性所属的分类，如一个动态属性 value 和事件 change，你可以使用如下方式(延展属性)传递：

没有深入使用过 Vue JSX，不建议你使用混合方式，因为 Vue 会对其进行属性合并，至于合并的规则官方也并没有详细的文档，文档中有一处示例，我在这再举一个例子：

const dynamicProps2 = { on: { change: onChange2 } };
<Dynamic
{...{ on: { change: onChange1 } }}
{...dynamicProps2}
onChange={onChange3}
/>
上例中的 onChange1、onChange2、onChange3 都会触发，而你想要的可能仅仅是 onChange3。其它属性的合并规则我就不一一列举了，总之，我不建议你使用混合方式，除非你及你的团队其他小伙伴对其规则了解的足够透彻。

注：理想情况你不应该需要动态属性，在业务开发中也比较少的使用动态属性，但如果你尝试开发一些

尽量使用明确分类的方式传递属性，而不是要 babel 插件帮你分类及合并属性。

table
自定义列模板的三种方法
1 render 函数实现
2 render 一个组件实现
3 slot-scope 实现

使用作用域插槽 slot-scope 代替 render 函数

将一个复杂的 render 函数转移到一个 。vue 文件里面
iview 的 slot-scope 返回的参数
row 当前行数据
column 当前列数据
index 当前索引

使用 slot-scope 需要，同时在 column 中声明 slot 字段，对应 template 的具名 slot
表单验证，用正则来做
三角函数，苹果菜单

不改变原素组的方法，splice，map，slice，concat
改变原数组的方法



## [Vue 参考资料](docs/resource)