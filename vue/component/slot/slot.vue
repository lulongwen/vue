<template>
	<!-- Vue 中的 slot 不能用 v-show，必须改成 v-if
		原因：
		slot实际上是一个抽象元素，类似于 template，本质上并不是一个元素，
		而 v-show 是通过 控制元素的 display来进行显示隐藏的，slot本质上不是元素，
		所以就没有 display 属性，
		所以，slot的显示隐藏，只能用 v-if
	-->
	Vue.component('fade', 
		{
			props: ['show'], 
			template: ` <transition @before-enter="handleBeforeEnter" @enter="handleEnter">
										<slot v-if="show"></slot>
									</transition>`, 
			methods: {
				handleBeforeEnter(el){ el.style.color = 'red' }, 
				handleEnter(el, done) { 
					setTimeout(() => { el.style.color = 'green' done() }, 2000)
				}
			} 
	});
	
</template>

<script type="text/ecmascript6">
	
</script>

