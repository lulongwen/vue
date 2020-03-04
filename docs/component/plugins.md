# Vue 插件开发

1. 插件应该 安装在全局的 mixin里面
2. 全局的 mixin 包含 created() 的钩子函数
3. this.$options.rules 检查 rules规则



## 插件开发模板

```js
import Vue from 'vue'

cosnt MyPlugin = {
  // 实现这个插件代码
}

Vue.use(MyPlugin)


```