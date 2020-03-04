# render函数

1. Virtual DOM 并不是真正意义上的 DOM，而是一个轻量级的 JavaScript 对象，
	- 在状态发生变化时，Virtual DOM 会进行 Diff 运算，来更新只需要被替换的 DOM，而不是全部重绘

2. createElement 是 Render 函数的核心


## 参考资料

[vue-template-compiler](http://hcysun.me/vue-template-compiler-playground)