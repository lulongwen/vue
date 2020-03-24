// 默认先查找 source目录下的 vue文件夹 source/vue
// webpack.config.js 配置 resolve
import Vue from 'vue'
const log = console.log

const vm = new Vue({
  el: '#app', // 渲染的元素是 app
  data () {
    return {
      value: '项目经理',
      user: {
        name: 'lucy', age: 200
      },
      arr: [{data: 400, ok: 'ok'}, 100, 200, 300]
    }
  },
  computed: {
  
  },
  watch: {
  
  },
  methods: {
  
  }
})

// log('vm', vm)
setTimeout(() => {
  // vm.value = '领域驱动设计'
  // vm.value = '1000000'
  // vm.value = 'xxxxxxx'
  vm.value = 'yyyyyyy'
  // 批量更新，防止重复渲染，以上会更新 4次，期望的结果：只更新一次
  
  vm.arr.push(500)
  vm.arr[0].data = '新手'
}, 1000)


// 1 数据代理 vm.name = vm._data.name

// 2 对原生的方法进行劫持，如果新增的属性也是对象，需要对这个对象 observe
// vm.arr

// 3 对数组内的对象进行检测 [{ok: 'ok'}]
// 4 重写数组的方法可以被检测到， vm.$set 调用的就是 splice方法
