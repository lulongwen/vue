<template>
	<div>组件 & 实例的选项的顺序</div>
</template>

<script>
const vm = new Vue({
  // 挂载点
  el: '#app',

  // 全局感知 要求组件以外的知识
  name: '',
  parent: {},

  // 本地状态 本地的响应式属性
  data: {},
  computend: {},

  // // 监控数据，通过响应式事件触发的回调
  watch: {},

  // 组件类型 更改组件的类型
  functional: {},

  // 模板修改器 改变模板的编译方式
  delimiters: '',
  comments: '',

  // 模板依赖，模板内使用的资源
  components: {},
  directives: {}, // 指令
  filters: {}, // 过滤器

  // 非响应式的属性 (不依赖响应系统的实例属性)
  methods: {},

  // 组合 向选项里合并属性
  extends: {},
  mixins: {},

  // 渲染 组件输出的声明式藐视
  templdate: {},
  render: {},
  renderError() {},


  // 生命周期钩子函数执行顺序
  beforeCreate() {},
  created() {},

  beforeMount() {},
  mounted() {},

  beforeUpdate() {},
  updated() {},

  activated() {},
  deactivated() {},

  beforeDestroy() {},
  destroyed() {}
})

// 组件的接口， inheritAttrs & model & props & propsData
export default {
  name: '',
  inheritAttrs: false,
  model: {},
  props: {

  },
  propsData: {

  }
}
</script>