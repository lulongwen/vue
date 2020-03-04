<template>
	<section>
		<h1>vue 购物车</h1>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <!-- click 点击时，checkbox的状态还没有改变，
          所以拿到值是改变之前的，change 可以保证值变化后再触发函数 -->
          <template v-for="(tit,i) in thead">
            <th v-if="i==0">{{tit}} <input type="checkbox" v-model="checkAll"></th>
            <th v-else>{{tit}}</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,idx) in products">
          <td>
            <input type="checkbox" v-model="item.isSelected">
          </td>
          <td>
            <!-- : 等价于 v-bind: 动态绑定数据 -->
            <img :src="item.cover" :alt="item.name">
            {{ item.info }}
          </td>
          <td>{{ item.price }}</td>
          <td>
            <!-- .number 是让输入框的值变成数字，必须是 type="number" 才有效
                .lazy 当输入框失去焦点时更新数据 -->
            <input type="number" v-model.number="item.count" min="1">
          </td>
          <!-- | 管道符，过滤器，原数据不变，只是改变数据的显示结果 -->
          <td>{{ item.count * item.price | toFixed(2) }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="remove(item)">删除</button>
          </td>
        </tr>
        <tr>
          <!-- computed可以 缓存上次的计算结果 -->
          <td colspan="6">总价格： {{ sum | toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
	</section>
</template>

<script>
import axios from 'axios'

export default {
	computed:{
    // 给全选赋值时，要影响其它 数据的变化
    // 当页面刷新时，获取全选值，根据 checkbox计算出来的结果给 全选赋值
    checkAll:{
      get(){ 
      	// get & set中 this指向实例，默认 v-model会获取 checkAll的值，所以会调用 get方法
        // every 根据下面的点击的结果控制上面的全选
        return this.products.every(item => item.isSelected)
      },
      set(val){ // 给checkbox 赋值的时候
        return this.products.forEach(item =>{
          item.isSelected = val
        })
      }
    },
    // 如果计算属性写成函数，默认调用的是 get方法
    sum(){ 
    	// sum的结果会被缓存，如果依赖的数据没有变化，就不会重新执行
      return this.products.reduce((prev,next)=>{
        if(!next.isSelected) return prev
        return prev + next.price * next.count
      }, 0)
    }
  },
  data:{
    thead: ['全选', '商品', '单价', '数量', '总计', '操作'],
    products: null,
  },
  filters:{ // 可以自定义很多过滤器
    toFixed(input, params){
      // input 代表的是管道符前面的内容，params代表的是 toFixed中传递的参数
      // 这里的 this 指向 window
      // console.log(input, params, this);
      return `￥ ${Math.round(input*100)/100}`
    }
  },
  methods:{
    init(){
      axios.get('data/cart.json').then( res=>{
        this.products = res.data
      })
    },
    remove(val){
      // splice 每删除一次，就要 --，data 代替 splice，提高性能
      this.products = this.products.filter( item=> item !== val);
    }
  },
  created () {
  	this.init() // 获取数据
  }
}

</script>

<style scope>
  table img{
    display: block;
    width: 60px
  }
  table th:nth-child(5){
    width: 80px
  }
</style>