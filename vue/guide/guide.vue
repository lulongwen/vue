<template>
  <ul v-if="show">
    <li v-for="(item, i) of arr" :key="`li_${i}`">
      {{item}}
      <img
        src="./image.jpg"
        alt="">
    </li>
  </ul>

  <!-- 模板中的组件名，大驼峰命名  PascalCase
    多个特性的元素，分分行写，每个特性一行
    指令缩写
      : 表示 v-bind:
      @ 表示 v-on:

    非空 HTML 特性值应该始终带引号，单引号或双引号
    单文件组件，标签的顺序保持一致，style要放在最后，template & script 至少要有一个
    <template>
    <script>
    <style lang="scss">

    BEM 策略，为组件样式设置作用域
  -->
  <SearchMore
    :style="{ width: width + 'px' }"
    class="search search-close"
    :modal="modal"
    @on-reset="fnReset"
    @on-enter="fnEnter"></SearchMore>

  <!-- v-if v-else 元素类型相同，最好给每个元素加上 key -->
  <Button v-if="hidden" key="print">打印</Button>
  <Button v-else key="download">下载</Button>

<!--
动态组件 is
  <component :is="box">

列表渲染，创建多个变化的相同元素
  v-for
    key，在 v-for 中使用 key

条件渲染，元素是否渲染/显示
  v-if
  v-else-if
  v-else
    key，在 v-if & v-else-if & v-else 中使用 key
      v-if + v-else 的元素类型相同，最好使用 key

  v-show
  v-cloak

渲染方式 改变元素的渲染方式
  v-pre
  v-once

唯一的值
  id  全局感知，需要超越组件的知识
  key
  ref
  slot

双向绑定，把绑定和事件结合起来
  v-model

事件监听器
  v-on

内容，覆盖HTML元素的内容
  v-html
  v-text
-->
</template>

<script>
/** 组件文件
 只要有能够拼接文件的构建系统，就把每个组件单独分成文件
  需要编辑一个组件或查阅一个组件的用法时，通过组件名所见即所得的快速找到组件
  单文件组件的文件名
    * 始终是单词大写开头 PascalCase，单词大写开头 对于代码编辑器的自动补全最为友好
    * 要么是 -  短横线命名 kebab-case

  组件名应该是完整的组件，而不是缩写
  Tab 缩进为 2个空格

 紧密耦合的组件
  和父组件紧密耦合的子组件, 应该以父组件名作为前缀命名
 components/
  TodoList.vue
  TodoItem.vue
  StudentDashboard.vue
  todo-item.vue

 Vue.component('todo-list', { })

 组件名的单词顺序
   组件名应该以高级别的 (通常是 描述的) 单词开头，以描述性的修饰词结尾
 components/
   SearchInput.vue
   SearchButtonClear.vue
   SearchQuery.vue

 基础组件名
  应用特定样式和约定的基础组件
    也就是展示类的、无逻辑的或无状态的组件
    应该全部以一个特定的前缀开头，比如 Base，App 或 V
  components/
    BaseButton.vue
    BaseTable.vue

  单例组件名
    每个页面只使用一次
    拥有单个活跃实例的组件以 The前缀命名，以示其唯一性
    单例组件永远不接受任何 prop，是为应用定制的，而不是在应用的上下文
      如果有必要添加 props，就是个可服用的组件
    components/
      TheHead.vue
      TheSidebar.vue
      THEMain.vue
 */

/** 优先使用 Vuex管理全局状态
 不推荐使用 this.$root，或 eventBus 全局事件总线
 */
import {mapState, mapGetters} from 'vuex'

export default {
  /** 组件名应该始终是多个单词的
   根组件 App <transition> <component> 等Vue内置组件除外
    好处：避免组件名和 HTML 标签冲突
   大驼峰命名法 PascalCase
   */
  name: 'TodoItem',

  /** 优先使用 prop 和 $emit() 进行父子组件通信
   避免使用 this.$parent 或在子组件中修改 prop
    props 定义应该详细，至少需要指定类型，默认值
    理想的 Vue 应用是 prop 向下传递，事件向上传递的
   */
  props: {
    modal: {
      type: Object, // 指定类型
      required: true
    },
    title: String,
    default() { return [] },
    validator: function(value) {
      return ['header', 'body', 'section'].indexOf(value) !== -1
    }
  },

  /** 组件模板应该 只包含简单的表达式
   复杂的表达式则应该重构为 计算属性 & 方法
   声明式渲染，应该尽量描述应该出现的是什么，而非如何计算那个值
   */
  computed: {
    amount() {
      return this.arr.reduce((prev, next) => prev + next, 0)
    },
    // 过滤后的列表只会在 users 数组发生相关变化时才被重新运算，过滤更高效
    activeUser() {
      this.users.map(item => user.active)
    }
  },

  // 组件的 data 必须是一个函数，避免对象的引用
  data() {
    return {
      arr: [1, 2, 3],
      width: 100,
      hidden: true,
      users: [
        {
          sex: 0,
          name: 'lucy',
          active: true
        },
        {
          name: 'mini',
          sex: 1
        },
      ]
    }
  },
  methods: {
    fnEnter() {},
    fnReset() {},
    /* $_ 作为一个用户自定义的私有属性的约定，以确保不会和 Vue 自身相冲突
      附带一个命名空间以回避和其它作者的冲突，例如： $_yourPluginName_
        Vue 使用 _ 前缀来定义其自身的私有属性
          你使用相同的前缀，比如 _update 有覆写 Vue实例属性的风险
        $ 前缀 在 Vue中的目的是：暴露给用户的一个特殊的实例属性，用于私有属性并不合适

      推荐使用 $_ 作为私有属性名
     */
    $_update() { },
    $_myMixin_update() {},
  }
}


// 在 Vue的根实例上直接使用对象是可以的，因为根实例只有一个
new Vue({
  data: {
    arr: [1, 2, 3]
  }
})
</script>