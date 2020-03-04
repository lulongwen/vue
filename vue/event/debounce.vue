<template>
	<Button @click="fnAdd" type="info">添加</Button>
	<section>
		<a v-for="(item, i) of arr" :key="item">${item}</a>
	</section>

	<input
		type="text"
		placeholder="输入..."
		ref="input"
		v-model="inputValue"/>
</template>

<script>
	// 引入 lodash & iview
	import _ from 'lodash'

	export default {
		delimiters:['${','}'],
		data() {
			return {
				inputValue: '',
				value: '',

				arr: ['apple', 'pear', 'orange']
			}
		},
		methods: {
			add: _.debounce(()=> {
				this.arr.push('tomato')
			}, 1000),

			changeData() {
				this.value = this.inputValue
			},
			debounce(method, delay) {
				let timer = null
				return function() {
					let context = this
					let args = arguments
					clearTimeout(timer)
					timer = setTimeout(() => {
						fn.apply(context, args)
					}, delay)
				}
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.$refs.input.on('input', this.debounce(ev=> {
					this.changeData()
				}, 500))
			})
		}
	}

</script>