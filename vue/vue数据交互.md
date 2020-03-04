
## computed
1. 内置缓存，一直用上一次的结果
2. 不能传参
```
computed 传值
// 用JS闭包，进行传值
computed: {
	text() {
		return function(value) {
			return this.getLengthFN(value, 20)
		}
	}
}
```

 前端面试题
https://juejin.im/post/5cb3376bf265da039c0543da
webpack4 笔记
https://juejin.im/post/5cb36a3ef265da03a1581d6d


## watch
1. 也有缓存机制



## filter
1. 过滤数据，不改变原数据



## 改变数据的方式

1. 数组变异
```
  shift
	unshift
	push
	pop
	splice
	reverse
	sort
```

2. 改变Array/Object 的引用地址，也可以动态显示数据
```
	this.list =  []; 

  this.obj = Object.assign({}, this.obj, {})
```

3. Vue.set()
```
Vue.set(this.obj, 'address', 'new York')

vm.$set(vm.obj, 'address', 'york')

			// 数组，下标，新值
vm.$set(vm.arr, 2, 100)
```

