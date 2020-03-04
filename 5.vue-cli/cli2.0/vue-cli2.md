# Vue CLI 命令行工具

[vue init webpack 文档](https://vuejs-templates.github.io/webpack/)

* 脚手架
  * 项目结构
  * 基本命令
  
* 项目模板
  * 开发配置
  * 工具配置

* vue cli配置 https://www.cnblogs.com/caideyipi/p/8187656.html

## Vue CLI的优势
* vue的脚手架，帮我们写好的基本 vue框架代码
* 成熟的 Vue 项目架构设计
* 本地测试服务器环境，热加载，单元测试
* 集成打包上线方案
* vue-cli为开发人员屏蔽项目构建底层的细节
	* 提出了自己的一套标准化的开发方式，让开发更侧重于业务开发


## vue cli多个版本

* dev  开发版本，本地环境 
* test 测试版本，测试环境
* yufa 预发版本，预发环境
* prod 线上版本，发布版本

```jsx
  npm install vue-cli -g

  vue --help

  vue list

  vue init git-repo project-name

  vue init webpack prject-name

  vue init template-name project-name
    simple
    webpack
    webpack-simple
    browserify
    browserify-simple

```



## vue cli
1. webpack+vue-loader搭建环境
2. 编写子组件
3. 组件中的样式
4. 路由配置
5. 路由动画
6. Vue.use的用法
7. axios使用
8. 使用vue-cli
9. vue-cli构建webpack模板


```bash
# 全局安装 vue-cli
	npm install vue-cli -g
	npm install vue-cli@2.9.6 -g // 指定版本

	vue -help
  vue list



# 用的最多的 webpack模板
	vue init webpack my-project


# 进入项目文件夹
	cd my-project


# 安装依赖包
	npm install | yarn install


# 运行项目
	npm run dev
	npm run build

```


## vue init webpack projectName文件说明
* ![vue init webpack projectName](vue init.jpg)

### build && config
- webpack 相关配置

### src
- 存放项目源码
- 所有的开发都基于修改 src目录下的文件

### static
- static 不需要 webpack打包的静态资源，如第三方的css和js

### node_modules
- npm install 安装的依赖代码库


## 1.3 vue init webpack NAME根目录文件

### .babelrc
+ ES6 转 ES5的配置
```js
{   // "stage-2" ECMA es2015的第二个草案
    "presets": ["es2015", "stage-2"],
    "plugins": ["transform-runtime"],
    "comments": false // 转换后的代码不生成注释
}
```

### .editorconfig
- 编辑器的配置

### .eslintrc.js
- eslint的配置文件

### .eslintignore
- 忽略语法检查的目录文件


### import Vue from 'vue'
- 这样写可以自动引用 node_modules里面的 ` ../node_modules/vue/dist/vue.js `
- 是怎么找到 node_modules 目录下的
    + 模块系统的约定及实现，node文档里描述了处理过程
    ```
    node.js 模块系统中，如果 require的模块不是核心模块，而且没有 './' 之类开头的，就需要从当前的 package的 node_modules 里面找；
    找不到就到当前的package目录上层 node_modules里面取，一直找到全局的 node_modules 目录；
    这样找到的往往是文件夹，所以接下来的就是处理一个文件目录作为 node模块的情况；
    如果文件目录下有 package.json，就根据 package.json的 main字段找到 js文件，如果没有 package.json，就默认取文件夹下的 index.js
        webpack browserify 是兼容 node模块系统的
        webpack里面，通过 alias & external字段配置，实现了默认对 import的逻辑自定义
    ```
---



### assets/src 和 static文件夹的区别：
1. assets/src下的文件运行时需要打包，
     static目录下的不需要打包，直接放在最终文件

2. assets中的文件在 .vue中的 template/style下 用 ../ 相对路径引用，
    在 script下必须用 @import方式引入
    static下的文件在 .vue任何地方用 ../相对路径方式引入

### dev-server的原理是什么？
- 就是 利用 web-server去做的
- dev-server在页面中自动注入一个js，启动一个服务，然后注入的js文件会和 web-server建立一个通信，监听页面更新，如果更新，会 push，


## Sass
mixin 和 variable 是组件用到才需要引入的



## ES6
```js
import 第一个字母要大些，因为 import后面是个 class

babel-runtime 对ES语法做转义
```


## main.js
```js
  1.0 的写法
  	el: '#app',
  	template: '<App/>',
   	components: { App}

	2.0 render
		render函数是渲染一个视图，然后提供给el挂载，如果没有render那页面什么都不会出来
		1. ES6 的语法，表示 Vue实例选项对象的 render方法作为一个函数，接受传入的参数 h 函数，返回 h(App) 的函数调用结果
		2. Vue 在创建 Vue 实例时，通过调用 render 方法来渲染实例的 DOM 树
		3. Vue 在调用 render 方法时，会传入一个 createElement 函数作为参数，也就是这里的 h 的实参是 createElement 函数，然后 createElement 会以 APP 为参数进行调用，关于 createElement 函数的参数说明参见：Element-Arguments

		函数只有一个参数，通过箭头赋值，箭头赋值相当于return了一个参数
   	render: h => h(App)
		
		ES5写法
  	render: function(h){
  		return h(App)
  	}

  	render: function (createElement) {
    	return createElement(App);
		}

		进一步缩写
		render (createElement) {
    	return createElement(App);
		}
		在进一步缩写
		render (h){
    	return h(App);
		}
		在进一步
		render: h => h(App)

		
	官方解释
	render: function (createElement) {
        return createElement(
        'h' + this.level,   // tag name 标签名称
       this.$slots.default // 子组件中的阵列
     )
   }


```