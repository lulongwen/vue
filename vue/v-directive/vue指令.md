# VUE指令
- DOM元素的行间属性，以 v- 开头，后面的值都是变量
- vue指令，实现了 vue属性和页面元素之间的交互，扩展了 html标签功能
- 指令作用：就是当其表达式的值改变时，响应地将某些行为应用到 DOM上，指令渲染

## Vue指令
```jsx

v-model 数据双向绑定，只能应用在有 value属性的标签上
  v-bind:value
  v-on:input的实现
  <input type="text" v-bind:value="msg" v-on:input="changeValue">

v-for
	v-for 也是动态的，数组改变会自动渲染
	v-for="item of list"
  
<input v-model.lazy="name" />
	v-model.number
	v-model.trim

	select mutiple 多选是数组
	textara
	radio
  
v-bind:href="www.lulongwen.com"
  v-bind 缩写 :
	:name="name"
  
v-on:click="fnClick"
  v-on 缩写 @
  v-on="{click:fnClick, hover: fnHover}" 多个事件
  v-on:submit="fnSubmit($event)"
    @submit.privent="fnSubmit"
    
v-text innerText

v-html innerHTML

v-if
  appendChild()
  removeChild()
  * 真正的条件渲染，条件为真就渲染，条件为假，什么也不做，组件销毁和重新渲染
  * v-if更耗性能

v-show
  * 元素总会被渲染，用Css控制显示隐藏
  * 非常频繁的切换用 v-show,
  控制DOMdisplay属性，显示隐藏，display: block / none;
```


## Vue.filter() 过滤器
```jsx
  过滤器的作用，不改变原数据的情况下，返回新数据
  局部过滤器，
  全局过滤器
  {{data | 过滤器名字}}
```

```jsx
  v-model="msg" 数据双向绑定，用在表单元素上, value, selected, checked属性会被忽略掉
    input, checkbox, textarea, readio, select
    v-model会将 msg的值赋予输入框，输入框的值改变会影响数据

  v-model 数据双向绑定，一般用在输入框上
    v-model.lazy="" 延迟
    v-model.number="" 强制数字
    v-model.trim="" 去除空格

  v-once 数据绑定一次，只渲染一次，渲染后，元素-组件及所有子节点都为静态内容
    当数据再次发生变化，页面不会刷新


  v-cloak 渲染完成后显示，在style里面加上 [v-cloak]{display:none} 一起用时，渲染完成后显示
  v-html 字符串当成HTML渲染
  v-text 文本  等价于 {{ }}，v-text可以防止 {{ }} 出现在页面上
    {{ }}只能写在标签里，不能写在属性里，属性要用 v-bind:
    // 小胡子语法，可以赋值，取值运算，三元运算，表达式，默认可以不写 this
    尽量少些逻辑，逻辑都放在 computed里面
    {{ text }}

  // v-if & v-show 控制显示，if操作的是DOM，show操作的是 样式
  v-show DOM存在 display:none
	v-if DOM 存在/不存在

    v-if 隐藏的元素不存在于DOM中，而是被直接删除了，v-show元素存在于 DOM中，属性是 display:none
    如果频繁的切换 DOM 使用 v-show，当数据一开始就确定下来使用 v-if来控制显示隐藏
    
  v-show 修改 CSS display 属性 block & none
  v-if 判断是否加载，为 true加载，false加载
  v-else
  v-else-if


  	v-once
		只绑定一次内容，数据再次变化后 不会导致视图更新


	v-html
		默认渲染html 自动转化成识别后的结果

	v-text
		不渲染html标签，以文本形式显示

	v-model


	v-show
		控制的样式 频繁切换显示隐藏

	v-if
		控制的DOM结构，存在还是不存在
		如果不满足没有此DOM 确定后不会再切换，频繁切换消耗性能
	v-else-if
	v-else


	v-bind 简写成 :
		绑定动态数据使用冒号 后面写变量名


  
  v-for="item of list"
	v-for="item in list"
    v-for of 和 in 的区别



  v-for 循环遍历数组/对象，要循环谁，就在谁的身上添加 v-for属性
  v-for 默认会复用原有的DOM，如果添加了 :key，而且 key不同，vue认为是2个不同的元素
    <div v-for="value in/of 数组"></div>
    <div v-for="(value,index) in/of 数组" :key="index"></div>

    Vue 改变数组的方法，数组改变也会触发视图更新：
    push, pop, shift, unshift, splice, sort, reverse


  v-bind 绑定属性, 缩写 :
    <button :class="[completed ? 'btn-success' : 'btn-danger']"></button>

  // 多个 class
	<div :class="[active, cuttent]"></div>

	<div :style="[styleObj, {fontSize: '20px'}]"></div>

	data: {
		styleObj: {
			color: 'red'
		}
	}


  v-pre 格式化，不编译，跳过这个元素和子元素的编译


  v-on 绑定事件，缩写 @
    绑定给DOM元素，函数需要定义在 methods里面，不能和 data里面的属性重名，
    this指向的是 实例，不能使用箭头函数，使用箭头函数，this指向 window
    事件源对象如果不写括号，默认自动传入，否则只能手动传入 $event

  // @指令修饰符
  @click.enter
  @click.prevent
    .stop - 调用 event.stopPropagation()。
    .prevent - 调用 event.preventDefault()。
    .capture - 添加事件侦听器时使用 capture 模式。
    .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
    .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
    .native - 监听组件根元素的原生事件。
    .once - 只触发一次回调。
    .left - (2.2.0) 只当点击鼠标左键时触发。
    .right - (2.2.0) 只当点击鼠标右键时触发。
    .middle - (2.2.0) 只当点击鼠标中键时触发。
    .passive - (2.3.0) 以 { passive: true } 模式添加侦听器



特殊特性
  key
  ref
  slot
  slot-scope
  scope
  is

```
