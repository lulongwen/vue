# Vue修饰符

```jsx
事件修饰符
  @click.stop.prevent="fnClick" 修饰符串联，多个修饰符

  .stop    阻止事件冒泡， js event.stopPropagation()
	.prevent 阻止默认事件，js event.preventDefault()
	.capture 捕获事件，事件捕获由外到内
	.self    只会触发自己范围内的事件，不包含子元素，只当事件在该元素本身（比如不是子元素）触发时触发回调：.self
	.once    事件只执行一次
	.passive 对应 addEventListener 中的 passive
    passive 修饰符尤其能够提升移动端的性能
    不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略
    .passive 会告诉浏览器你不想阻止事件的默认行为

  .native  监听组件根元素的原生事件

  <div class="outeer" @click.self="outer"> 
　　　　<div class="middle" @click.self="middle"> 
　　　　　　<button @click.stop="inner">点击我(^_^)</button>
　　　　</div>
　　</div>


键盘修饰符
	.enter  回车键
	.tab    制表键
	.delete 含delete和backspace键
	.esc    返回键
	.space 空格键
	.up    向上键
	.dow   向下键
	.lef   向左键
	.right 向右键


按下相应，功能键时才触发鼠标或键盘事件的监听器
	.ctrl
	.alt
	.shift
	.meta
    只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl
    先按下 ctrl键，再按下回车键

  .exact 修饰符允许你，控制由精确的系统修饰符组合触发的事件
  <!-- 即使 Alt 或 Shift 被一同按下时也会触发，按下多个键盘也会触发 -->
  <button @click.ctrl="onClick">A</button>

  <!-- 有且只有 Ctrl 被按下的时候才触发，只有 ctrl键才会触发 -->
  <button @click.ctrl.exact="onCtrlClick">A</button>

  <!-- 没有任何系统修饰符被按下的时候才触发， 按下修饰键点击，不会触发事件 -->
  <button @click.exact="onClick">A</button>


.meta 对应
  Mac command 键 ⌘
  Windows 徽标键 ⊞
  Sun 操作系统键盘上 对应 实心宝石键 ◆
  其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品
    比如 Knight 键盘、space-cadet 键盘，meta 被标记为 META
  在 Symbolics 键盘上，meta 被标记为 META或者 Meta

  <input @on:keyup.enter="fnSubmit" />

	<input @keyup.alt.67="fnClear" />

	<div @click.ctrl="fnClick"></div>


鼠标修饰符
	.left
	.right
	.middle


自定义修饰符 Vue.config.keyCodes
  通过全局 config.keyCodes 对象自定义按键修饰符别名
  Vue.config.keyCodes.f1 = 112;

input表单修饰符
	.lazy   改变后才触发，光标离开input输入框的时候值才会改变
	.number 将输出字符串转为 Number类型，如果输入字符串，输出的是string，如果转换数字失败，就输出 String
	.trim   过滤用户输入的首尾空格

  <input v-model.lazy="msg" />
  <input v-model.number="msg" />
  <input v-model.trim="msg" />


v-bind
  .prop
  .sync
  .camel

```