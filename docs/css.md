# Vue 开发中的样式配置

1. px2rem-loader 
2. css module & scoped


## px2rem-loader的参数配置问题

1. remUnit：表示默认的 html 的 fontSize
2. remPrecision：是 px 转 rem 后小数精度


### 为什么把 remUnit 默认设置为 40 呢？

* 整个自适应方案分成两部分：
	1. viewport 自动计算并生成 viewport
	2. px2rem-loader 把 css 文件中 px 转换成 rem

* 其中 px2rem-loader 对 remUnit 的默认值是 75
* viewport 的计算是以 iphone 5s 的设计尺寸来计算的
* 所以按照 ihpone 5s 的设计尺寸算出来 html 的 fontSize 是 40px
* 所以我们需要：让 px2rem-loader 的基础单位是 40 


### 如果我的设计尺寸变了怎么办？比如是 iphone 6

* 把现有的项目直接在Chrome模拟器选择 iphone 6，查看下 html 的 fontSize 是多少，
* 把那个值设置到 remUnit，然后去 viewport 把 320 改成对应的值就好了。就这么简单，神奇不神奇。 



## Css Module 和 Vue `<style scoped>` 属性有啥不同？

* Css Module 原理：就是把一个类名编译成哈希字符串，
* 然后在引用的时候直接使用这个哈希字符串字符串，
* 进而保证相同的类名根据不同的路径和组件名称得到不同的值，保证了最终的类名隔离

```jsx
	
	// css module 调用类名 $style.类名
	<style lang="scss" module>
		.red {color: red;}
	</style>

	<style module></style>

	<p :class="$style.red">
    This should be red
  </p>


	// 类名包含中划线，则使用中括号语法
  <h4 :class="$style['list-item']">类别推荐</h4>

  <p :class="{ [$style.red]: isRed }"></p>

  <p :class="[ $style.red, $style.bold ]"></p>

  // 复杂的对象和数组语法
  <ul 
　:class="{
    [$style.panelBox]:true,
    [$style.transitionByPanelBox]: needTransition
  }">

	<li
  :class="[
    $style['aside-item'],
    {[$style['aside-item_active']]:(i === index)}
  ]">

  // 使用CSS modules处理动画animation的关键帧keyframes，重要的细节——动画名称必须先写
  // animation: move 1s; 才会被正确解析

	// scoped
	<style lang="scss" scoped></style>

	// vue文件中style标签上加module属性
	// vue-loader中配置开启CSS Module
  cssModules: {
    localIdentName: '[path][name]---[local]---[hash:base64:5]',
    camelCase: true
  }

```

1. 相同点：都是为了解决 css类名重复问题，也就是样式的层叠优先级
	* scoped 和 css module 都可以解决样式优先级问题

2. 不同点：
* css module 是所有组件化框架都支持的技术方案，不属于某个框架的私有属性
* scoped 是 Vue 的是有属性

* 对于父组件声明的类名，在子组件内，CSS Module 是不处理的
	* 调用类名 `$style.类名`
* 使用了 scoped 的因为是命名空间的方式，所以子组件依然有效



### Css Module 的实现原理

* 就是把一个类名叫做 md5，引用的时候，直接使用 md5 字符串；
	* 从而保证相同的类名会根据不同的路径和组件名得到不同的 md5 值，从而实现类名的隔离；

* scoped 做法是用命名空间做限制，也就是每个组件就是一个命名空间；
	* 每个命名空间拥有不同的类名 md5；
	* 然后每个下面的类名都会挂载这个命名空间下，从而实现类名的隔离


### 开启CSS Module之后如何使用第三方样式库？

* `@import` 引入



##  CSS模块化设计
1. 设计原则
  * 可复用，能继承要完整
  * 周期性迭代

2. 设计方法
  * 先整体，后部分，再颗粒化
  * 先抽象，再具体
  * 组件化抽象设计把控



## CSS 模块化

* css的样式应用是全局性的，没有作用域可言。考虑以下场景

1. 命名约定类
* BEM, OOCSS
	* Block(块)、Element(元素)、Modifier(修饰符)
	* block-name__element-name--modifier-name，也就是模块名 + 元素名 + 修饰器名
	* BEM 缺点：class 名字太长

```jsx
	.blockName-elementName--modifierName { /* ... */ } 
	.block-name_element-name--modifierName { /* ... */ } 

	<a href="#" class="page-btn__list__item__link">第一页</a>
```

* OOCSS 面向对象的 CSS
	* object-oriented css
	* 强调重用
	* 缺点：样式(CSS)和结构(HTML)藕合太紧，设计变动，需要更改CSS和HTML


* 命名约定主要用来规范CSS命名，最常见的是BEM，当然还有OOCSS等，
* 在构建工具出现之前，大多数都是在CSS命名上做文章

2. CSS in JS
* styled-components
* 彻底抛弃CSS，用javascript来写CSS规则，常见的有styled-components

3. 使用JS来管理样式
* CSS Modules
* 使用JS编译原生的CSS文件，使其具备模块化的能力，最常见的就是CSS Modules
* 随着构建工具的兴起，越来越多的开始使用后两者方案，
* 书写 CSS ，不用再特意地关心样式冲突问题。只需要使用约定的格式编写代码即可