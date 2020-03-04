# Vue 属性

> 属性是为了解耦，一个变量如果既能在父组件修改，又能在子组件修改，控制逻辑会复杂，对于这个变量的作用域就不够纯净
  Object.defineProperty

## Vue实例属性
* vm.$data   数据对象
* vm.$props  当前组件接收到的 props 对象
* vm.$el     实例的根 DOM 元素

* vm.$options 当前 Vue 实例的初始化选项
* vm.$root   当前组件树的根 Vue 实例
* vm.$parent & $children 父/子组件实例
  * $parent / $children 在跨级通信时是有弊端的

* vm.$refs   ref的 DOM元素
* vm.$attrs  父组件传递的值，不包括 class & style
* vm.$listeners 父作用域中的 v-on 事件监听器，不包括 .native

* vm.$slots   插槽分发的内容
* vm.$scopedSlots 作用域插槽
* vm.$isServer 当前 Vue 实例是否运行于服务器



## 数据方法
* vm.$watch
* vm.$set
* vm.$delete



## 事件方法
* vm.$on
* vm.$once
* vm.$off
* vm.$emit
* ` this.$emit() `



## 生命周期方法
* vm.$mount
* vm.$forceUpdate
	* 就是强制更新的意思 不管数据是否变化
	* 平常业务开发中是比较少用的
	```jsx
	// 解决 v-for修改item属性值后，页面 v-if不改变的问题
	this.$forceUpdate()
	```

* vm.$nextTick()
* vm.$destroy


* delimiters:['${','}']
	* 改变插值的符号
	* Vue默认的插值是双大括号 ` {{}} `
	* 更改这个插值，${} 代替了 ` {{}} `
```
delimiters: ['[[', ']]']
	[[ ]] 代替了 ` {{}} `
```





// DOM 事件修饰符

// 阻止冒泡
@click.stop=""


@submit.prevent=""

@click.stop.prevent=""

// 捕获，元素自身事件先处理，后有内部元素进行处理
@click.capture="fn"

// 事件不是从内部元素触发的
@click.self="fn"
```
解决办法是将第三方依赖的 JS 文件放到 /static/utils 目录下，引入路径也改成：<script src="./static/utils/sockjs.js"></script>，这样就不报错了！

总结：

1、assets文件夹与static文件夹的区别

区别一：assets文件是src下的，所以最后运行时需要进行打包，而static文件不需要打包就直接放在最终的文件中了

区别二：assets中的文件在vue中的template/style下用../这种相对路径的形式进行引用，在script下必须用@import的方式引入而static下的文件在.vue中的任何地方都只要使用../这种相对路径的方式引入，

2、

（1）assets用来放置样式、静态图片，只要src下面的组件中用到的资源就放在assets中。

（2）static用来放没有npm包的第三方插件，字体文件。

（3）assets与components同级 components下的.vue引用静态文件时，相对路径为 ../assets/wapFront

3、vue如何引入其它静态文件：

（1）src目录下的资源只能import或require。

（2）想静态引入的话，建立一个与src同级的目录例如static，然后把静态资源放入该文件夹下，html的引入路径如下：./static/...（注：试过一定要放在static文件夹下，否则报错）
