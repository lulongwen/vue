<template>
  <div class="router">
    <!--简单绑定，字符串，直接写 home会默认是变量，所以写字符串 -->
    <router-link :to="'home'">首页</router-link>
    <router-link to="/page1">Page1</router-link>

    <router-link :to="{path:'/slot'}">slot 插槽</router-link>

    <!-- 具名路由，params是参数 -->
    <router-link :to="{name:'lazyload', params: {id: 123, color: 'red'} }">slot 插槽</router-link>

    <!-- 路由导航设置参数，实参，router.js 设置的形参，
      输出参数 this.$route.query.aa
      tag="" 指定路由的标签
    -->
    <router-link :to="{path: '/router', query: {aa: 'a22a'}}" tag="div">
      <a href>router query</a>
    </router-link>

    <!-- 输出参数 this.$route.paramas
  	to 简单跳转，不需要绑定，类似于 href属性
    -->
    <router-link to="/home/list/123/xiaobai" tag="div">
      <a>路由参数 {{title}}</a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MyRouter",
  beforeRouteEnter(to, from, next) {
    // 这里没有 this, 必须 next 否则页面不跳转
    next(vm => {
      // vm.init()
    });
  },
  beforeRouterLeave(to, from, next) {
    this.$destory();
    next();
  },
  // 仅路由参数发生变化时触发，比如 /page/vue  /page/react
  beforeRouteUpdate(to, from, next) {
    next();
  },
  props: {
    title: {
      type: String,
      default: "默认的标题"
    }
  },

  watch: {
    $route(to, from) {
      if (from.name === "list") this.title = "改变的标题";
    }
  },

  data() {
    return {
      // 获取路由参数，$route 是只读的，不能修改
      title: this.$route.query.title,
      query: this.$route.query,
      username: this.$route.params.username,
      router: this.$route.params.id
    };
  },

  methods: {
    back() {
      this.$router.go(-1); // 后退
    },
    goto() {
      this.$router.go(1); // 前进
    },
    home() {
      console.log(this.$router);
      this.$router.push("/"); // 首页
    },

    queryed() {
      // 只能改变 url，不能改变页面，页面的显示内容不变，url有参数
      // /?id=29&name=lucy
      this.$router.push({
        path: "/list",
        query: {
          id: 29,
          name: "lucy"
        }
      });
    }
  },

  mounted() {
    // $router 只读，不能赋值
    console.log(this.$router.query);
  }
};
</script>
