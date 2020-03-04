# Vue mixin 混合

* mixin缺点
  1. 如果一个组件同时 mixin多个组件，很难分清对应的属性或方法写在哪个 mixin里面的，
	2. mixin的命名空间冲突也可能造成问题。难以保证不同的 mixin不用到同一个属性名