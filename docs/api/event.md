# Event事件


## 事件修饰符

1. 事件修饰符在连用时，是有先后顺序的

```jsx
<template>
	// 绑定一个原生
	<Card @click.native="nativeClick"></Card>

	.stop

	.prevent

	.capture

	.self

	.once

	.passive
</template>
```


### .exact

1. 控制由精确的系统修饰符组合触发的事件

```jsx
// 即使 Alt 或 Shift 被一同按下时也会触发，多个按键按下也会触发
<button @click.ctrl="onClick">A</button>

// 有且只有 Ctrl 被按下的时候才触发
<button @click.ctrl.exact="onCtrlClick">A</button>

// 没有任何系统修饰符被按下的时候才触发
<button @click.exact="onClick">A</button>

```


## 表单修饰符

···js
	.lazy 输入框输入完内容，光标离开时才更新视图

	.trim 过滤首尾空格

	.number
		先输入数字，那它就会限制你输入的只能是数字
		先输入字符串，那就相当于没有加.number

	<input type="text" v-model.trim="value">
···