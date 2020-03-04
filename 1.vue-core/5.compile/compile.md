# Vue-loader 模板编译


### Runtime Only
- Runtime Only 版本的 Vue，需要借助 webpack 的 vue-loader 工具把 .vue 文件编译成 JavaScript
	- 因为是在编译阶段做的，所以它只包含运行时的 Vue.js 代码，因此代码体积也会更轻量
	- 在将 .vue 文件编译成 JavaScript的过程中，会将组件中的 template模板编译为render函数
	- 最终得到的是 render函数的版本

- 运行的时候是不带编译的，离线的时候编译代码
	- Runtime Only版本较 Runtime+Compiler轻量6kb左右
	- 默认 `dist/vue.runtime.common.js`

- Vue CLI 3 默认 vue.runtime.js，不允许编译 template 模板
	- 在 Vue.extend 构造实例时，用了 template 选项，所以会报错。
	- 解决方案有两种
		- 一手动将 template 改写为 Render 函数，但这成本太高，不推荐
		- 二对 Vue CLI 3 创建的工程做简单的配置，推荐用法
		- `module.exports = {
				runtimeCompiler: true
			}`
    - true 后就可以在 Vue 组件中使用 template 选项了，但是应用额外增加 10kb

```js
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

```

### Runtime+Compiler
- 没有对代码做预编译，但又使用了 Vue 的 template 属性并传入一个字符串，就需要在客户端编译模板
- 写 template 属性，就需要编译成 render 函数，
	- 运行时编译代码，需要带有编译器的版本，即 Runtime+Compiler版本
	- 这个编译过程对性能会有一定损耗，通常推荐使用 Runtime-Only 的 Vue.js

```js
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})

```


- 解决方法：

```js
// 1 推荐用法
module.exports = {
	runtimeCompiler: true
}

// 2 修改 import Vue 指定 Vue的位置
import Vue from 'vue/dist/vue.esm.js'

// 3 修改 vue.config.js
configureWebpack: {
  resolve.alias: {
    'vue$': 'vue/dist/vue.esm.js' 
  }
}
```


## 写一套 Vue 组件库的文档

### 在线编写一个标准的 .vue 文件，并及时渲染的
- 核心技术就是上一节的 extend 和 $mount
- extend 构造一个组件实例，选项 template 其实就是上面 <template> 的内容，其余选项
对应的是 <script> ，样式 <style> 事实上与 Vue.js 无关

- 拿到一个 .vue 的文
件（整体其实是字符串），只需要把 <template> 、 <script> 、 <style> 使用正则分割，把对应的部分传递
给 extend 创建的实例就可以。

- 父级传递 code 后，将其分割，并保存在 data 的 html、js、css 中，后续使用
- 正则，基于 <> 和 </> 的特性进行分割
const regex = new RegExp(`<${type}[^>]*>`)

- 从vue模板解析学习正则表达式 https://segmentfault.com/a/1190000018765250
- Vue.js 2.0 独立构建和运行时构建的区别
	https://jingsam.github.io/2016/10/23/standalone-vs-runtime-only-build-in-vuejs2.html