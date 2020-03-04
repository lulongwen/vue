<template>
  <div class="index">
    <p>{{appName}}</p>

    <p>{{username}}</p>

    <p>{{$store.state.appName}}</p>
    <p>{{$store.state.getters.version}}</p>
  </div> 
</template>
<script>
// ...mapState返回的都是一个对象，解构对象；命名空间
// import { mpaState, mapActions, mapAactions, mapGetters } from 'vuex'

// 命名空间
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters } = createNamespacedHelpers('user')

export default {
  data() {
    return {
      list: this.$store.state.list
    }
  },

  computed: {
    ...mapState({
      list: state => state.list,
      usrename: state => state.user.username // 没有声明 user模块写法

      // 访问 user模块，上面声明了 user，命名空间的写法
      usrename: state => state.username
    }),

    // cart 命名空间
    ...mapGetters('cart', {
      products: 'products',
      total: 'total'
    }),
    ...mapGetters({
      // getToDo 不是字符串, 是getter里面的一个方法，重新取一个别名 todo
      todo: 'getToDo',
    }),

    appName() {
      return this.$store.appName
    },
    username() {
      // user 模块名
      return this.$store.user.username
    },
    // 获取 getters
    version() {
      return this.$store.getters.version
    }
  },

  methods: {
    // 展开运算符，解构赋值获取值
    ...mapActions(['add', 'incrementAsync']), // 异步方法
    ...mapMutations(['increment']), // 同步方法
    
    init (product) {
      // dispatch -> actions
      this.$store.dispatch('cart/checkout', products)

      // dispatch 是专门触发 actions
	    this.$store.dispatch('updateAsync', {title: this.title, key:'id'})

      // commit -> mutations
      this.$store.commit('login', { user: 'lucy' })
    },

    async login() {
      const result = await this.$store.dispatch('login')
      if (!result) return window.alert('登录失败，请重试')

      const { redirect } = this.$router.query
      // 有跳转地址，就跳转到页面，否则跳转到首页
      let path = redirect ? redirect : '/'
      this.$router.push(path)
    }
  }
  },

  created () {
    this.init()



    // 简写 this.incrementAsync({amount: 200})
    this.$store.dispatch('incrmentAsync')
    this.increment() // 不传递参数，调用mutations的方法
  }
}
</script>