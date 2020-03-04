# Vue组件相关问题


### 1 子组件为什么不可以修改父组件的传递的 prop数据？

1. 如果修改了，Vue是如何监控到属性的修改并给出警告？



### 2 this.$emit() 的返回值是什么？

1. 如果父组件return了一个值，this.$emit()可以接收到吗？


### 3 相同名称的 slot插槽是合并还是替换？



### 4 `import Vue from 'vue'` 写全的路径

1. `import Vue from '../node_modules/vue/dist/vue.js'`
  - 因为预先在 webpack里面定义了 alias路径，忽略文件的后缀，webpack自动给你加上后缀

```js
webapck.base.conf.js
  extendsions: ['.js', '.vue', '.json']
```

2. 如果名字很长，起个别名
  - `alias: {'@': resolve('src')}`
  - 在vue引入路径时，用` @ 代替 src` 文件夹，用别名来代替硬编码
  - `<img src="@/assets/login">`
  - 如果报错，在 @前面加上 `~`，表示当前路径
    