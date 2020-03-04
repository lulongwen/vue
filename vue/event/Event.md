# Vue Event

> 函数节流 throttle 和去抖 debounce，其实都是 函数调用频率的控制器

## 频繁操作 DOM 的事件

> 频繁操作 DOM，频繁调用函数加载资源加载导致 UI卡顿

```
window.resize
window.scroll
	窗口的缩放和滚动，设置定时器，N毫秒后执行后续处理

拖拽的 mousemove
射击游戏的 mousedown
文字输入，自动完成的 keyup

input的频繁 ajax请求

```



## 函数节流 Throttle
	* 如果一个函数【持续的，频繁的触发】，那么让它在一定的时间间隔后再触发
	* throttle将一个函数的调用频率限制在一定阈值内
		* 例如 1s内一个函数不能被调用两次

### lodash的 函数节流
	```
	_.throttle(func, [wait=0], [option={}])

	// 避免在滚动时频繁的更新定位
	$(window).on('scroll', _.throttle(fnUpdate, 200))

	// 点击后就调用 fnToken，单5分钟内就执行1次
	let throttle = _.throttle(fnToken, 300000, {'trailing': false})
	$(elem).on('click', throttle)

	// 取消一个 trailing的节流调用
	$(window).on('popstate', throttled.cancel)

	```


## 函数防抖 Debounce
	* 如果一个函数持续地触发，那么只在它结束后过一段时间只执行一次


### 函数防抖应用场景
```
根据用户输入的下拉框, 
	当用户按下键盘的时候都可以取消前一次，
	并且只关心最后一次输入的时间就行了

用户输入 ajax请求，
	如果不去抖，会频繁的发送 ajax请求
	debounce 对 ajax请求频率进行限制

methods: {
	fnSubmit: _.debounce(function() {
		if (!reg.test(this.ask)) return this.ask = ''

		this.ask = 'thinking'
		axios.get('url').then(res => {
			this.ask = _.capitalize(res.data.ask)
		})
	}, 500) // 500 判定用户停止输入等待的毫秒数
}

像 DOM拖拽，
	用去抖的话，就会出现卡顿的感觉，因为只在停止的时候执行了一次
	这时候应该用节流，在一定时间内多次执行，会流畅很多
```


### 简单的去抖函数
```jsx
function test() {console.log(123)}

function debounce(method, context) {
	clearTimeout(method.timer)
	method.timer = setTimeout(()=> {
		method.call(context)
	}, 500)
}

window.onresize = function() { debounce(test, window) }

```



### lodash的 debounce
```
_.debounce(func, [wait=0], [options={}])
	// options 选项
	leading  函数在每个等待时延的开始被调用，默认值为false
	trailing 函数在每个等待时延的结束被调用，默认值是true
	maxwait  最大的等待时间
		如果debounce的函数调用时间不满足条件，可能永远都无法触发，
		增加了这个配置，保证大于一段时间后一定能执行一次函数

	// leading & trailing 组合
	leading: false, trailing: true
		默认情况，即在延时结束后才会调用函数

	leading: true, trailing: true
		在延时开始时就调用，延时结束后也会调用

	leading: true, trailing: false
		只在延时开始时调用
```


### debounce 用法
```
// 避免缩放窗口时频繁计算
$(window).on('resize', _.debounce(fnCalcLayout, 150))

// 点击时 fnSubmit立即调用
$(elem).on('click', _.debounce(fnSubmit, 300, {
	'leading': true,
	'trailing': false
}))

// 确保 fnBatch 调用一次后，2秒内会被触发
let debounced = _.debounce(fnBatch, 250, {maxWait: 2000})
let source = new EventSource('./stream')
$(source).on('message', debounced)

// 取消一个 trailing的防抖动调用
$(window).on('popstate', debounced.cancel)

```



### debounce 细节
* debounce返回的是一个经过包装的函数，被包装的函数必须是要立刻执行的函数
```
// 错误的用法，每次setInterval执行之后，
// 都返回了一个没有执行的、经过debounce包装后的函数，所以debounce是无效的
function test() { console.log(123) }
setInterval(()=> {_.debounce(test, 1500)}, 500) // 无效

btn.addEventListener('click', ()=> {_.debounce(test), 1500}) // 无效

// 正确写法
btn.addEventListener('click', test)
setInterval(_.debounce(test, 1500), 500)
```