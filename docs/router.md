# Vue-Router

## 路由的使用方式
1. 配置路由数组，不同的URL对应不同的路径
2. 初始化 路由实例 ` new VueRouter() `
3. 导出路由，main.js里面挂载到 new Vue()实例上
4. 提供路由占位 ` <router-view /> `, 用来挂载 URL匹配到的组件

```
  路由出口 router-view
  导航链接
  传递参数
    获取参数, query, params, props

  路由嵌套
  异步路由
  路由守卫
    全局守卫
    组件路由守卫

  跳转并传参数
  this.$router.push('/page/23')

  页面路由导航 传参数
  <router-linker to="/list/good">List</router-link>
  <router-linker to="/page/23/lucy?title=manager">Page</router-link>

  
当使用路由参数时，例如从 /a/frontend 跳转到 a/backend，原来的组件实例会被复用
  2个路由都渲染同一个组件，但是参数不同，组件会缓存下来，页面不会再次渲染，
  生命周期函数不会被调用，如何解决
  1
  watch: {
    '$route'(to, from) {
      // 对路由变化做出响应
      this.init(to.params.id)
    }
  }
    
  2 路由守卫
  beforeRouteUpdate(to, form, next) {
    next()
  }

```


## 路由权限
* 基于配置的路由
	* 基于约定的路由，第三方的轮子，按照规则写路由

* 指令权限缺点
  * 只有第一次渲染
  * 权限动态修改需要退出登录，不能动态渲染

* 组件权限，可以动态渲染，缺点
  * 组件嵌套
* element权限
  https://hooray.github.io/posts/6237952e/


# Vue Router
* 完整的路由解析流程
* $router的三种写法
  * 字符串 & 对象 & 命名路由

* $router & $route的区别
* this.$router.replace & this.$router.push 的区别
* router-link怎么实现 router.push/replace/append的效果
* $route.params，$roue.query 和 $route.hash 的区别

* 路由的懒加载


## 完整的路由导航解析流程
* Vue Router 组件路由的生命周期
```jsx

1. 导航被触发。
2. 调用全局的 beforeEach 守卫。
3. 在重用的组件里调用 beforeRouteUpdate 守卫。
4. 在路由配置里调用 beforeEnter。
5. 在被激活的组件里调用 beforeRouteEnter。
6. 调用全局的 beforeResolve 守卫 (2.5+)。
7. 导航被确认。
8. 调用全局的 afterEach 钩子。
9. 触发 DOM 更新。

beforeRouteEnter(to, from, next) { console.log("page3路由进入前");
  next();
},
beforeRouteUpdate(to, from, next) {
  console.log("page3路由，但是参数变了");
  next();
},

beforeRouteLeave(to, from, next) {
  console.log("page3路由离开前");
  next();
}

异步路由组件
{
  path:'/login',
  component:()=>import('./components/Login')
}
```



### 路由类型
* history模式和 hash模式
* hash 默认，URL里面有 #号，缺点：无法使用锚点定位
* history 需要服务器支持，IE9不兼容（需要强制刷新）




## $router 路由跳转的三种写法
```jsx
  // 字符串
  this.$router.push('/home/list')

  // 对象
  this.$router.push({path: '/home/list'})

  // 命名路由
  this.$router.push({name: 'home', params: {id: 12}})


  this.$router.go(-1)
  this.$router.back()
  this.$router.push('/')
  this.$router.push({name: 'home'})  // 有历史记录
  this.$router.replace({name: 'home'}) // 没有历史记录

// 路由传参
  this.$router.push({
    name: '',
    params: {}, // 不在地址栏里面，刷新会丢失
    query: {} // query 参数出现在 URL地址栏里面，刷新数据还在
  })

  this.$router.push({
    path: '/home/dashboard',
    query: {
      name: 'lucy'
    }
  })


// 监听路由变化
  watch: {
    '$route'(to, from) {
      console.log(to.name)
    }
  }

```


## $router & $route的区别

```jsx
  this.$router new vueRouter() 的路由实例

  this.$route 当前路由的参数，对象，只读，不可变的，所以我们不能更改其中的值，不能 JSON.stringify() 转换
  // 属性有：
    path, fullPath, name, 
    query, hash, matched, 
    meta, params

  // 常用的属性有
  name, query, params, meta, match

    name: "workorder-create"
    path: "/server/workorder-create"
    fullPath: "/server/workorder-create?orderId=136&id=3#title=orderlist"
    hash: "#title=orderlist"

    query: {orderId: 136, id: 3}
    params: {order: {}}

    meta: {
      icon: '',
      keepAlive: true,
      title: ''
    }

```


## this.$router.replace & this.$router.push 的区别
```
  $router.replace
    不会记录路由到history栈里，不可以回退

  $router.push
    记录路由到history栈里，可以回退


  $router.go(number)
    number 整数，-1 负数是后退，整数前进

    history.go(1) & history.go(-1)

    history.forward() 前进，相当于 history.go(1)
    history.back()  后退，相当于 history.go(-1)

    history.length 首页
    history.go(-(history.length-1))

```


## $route.params，$roue.query 和 $route.hash 的区别
```
  <router-link :to={path:'/a', query:{id:123}}></router-link>

  如果用 params 就不能写 path 路径，写了也访问不到
    可以配置name来匹配路径
  <router-link :to={name:'a', params:{id:123}}></router-link>

  显示方式不一样
  $route.params url显示 /user/123
  $routr.query  url显示 /user/id=123


  匹配动态路由的时候，也可以匹配多个参数 /msg/:id:orderId,
    参数是一一对应的，在写对应的路由时，要注意

```


## router-link怎么实现 router.push/replace/append的效果
```
  <router-link to='/a' replace></router-link>

  // 设置 append 为true
  <router-link to='/a' append></router-link>

  append 和 replace 默认为false
  push 默认true，记录路由
    如果想设置不记录路由，或者添加子路由，改变其boolean值即可

  router.append 就是在前一个路由上在添加的子路由
    就像路由里的children,如从a页面（/a）跳转到b页面 (路由/b),
    如果添加append属性，那么b 就是 a的子路由，访问路径为/a/b

```


## 路由的懒加载
```
  懒加载的原理：
    Vue的异步组件和webpack代码分割功能
    webpack是根据 import来进行代码分割的，vue的组件是异步加载的，
    我们可以 import组件，来实现代码的分割，同时实现异步加载。

  两种加载方式，实现的结果是一致的，
  区别是：
    一个可以设置打包文件的包名
    一个是webpack自动添加的

  export default new Router({
    routes: [
      {
        path: '/',
        // 文件名webpack自动生成
        component: resolve => require(['components/index.vue'], resolve)
      },

      {
        path: '/list',
        // require.ensure()
        // 组件会打包成为一个名为 list.js的文件
        component: resolve => require.ensure([],()=> resolve(require('components/list.vue')),'list')
      }
    ]
  })


```


## history模式和 hash模式
```
  import Router from 'vue-router'
  const router = new Router({
    mode: 'history', // 服务器支持就用 history
    routes: defaultRoutes
  })

  默认 hash模型，URL后面带 #

  history模式
    需要 history.pushState支持，需要服务器的支持
    hash模式这没有这个条件

```


## VueRouter 权限控制
* https://juejin.im/post/5caeb3756fb9a068967791b3
* https://www.jianshu.com/p/9c677ae58325
https://www.cnblogs.com/zhengrunlin/p/9164951.html
https://blog.csdn.net/weixin_41790041/article/details/80432662
https://segmentfault.com/a/1190000014085613



```
  // .vue 组件
  export default {
    // 替换 watch 监听路由，这里没有 this
    beforeRouterEnter(to, from, next){
      console.log('before enter');
      next( vm=>{
        console.log('after enter vm.id', vm.id)
      });
    },
    beforeRouteUpdate(to, from, next){
      console.log('update enter');
      next();
    },
    beforeRouteLeave(to, from, next){
      console.log('leave enter');
      next();
    },
    props: ['id', 'title'],
    mounted(){
      console.log(this.id)
    }
  }


const routes = {
  path: '/app/:id/:title',
  props: true, // 路由参数和组件解耦
  props: (route) => ({id: route.query.b}),
  components: App,
  name: 'app',
  meta: {
    title: '网页 title',
    description: '网页 meta 描述'
  },
  children: [
    {
      path: 'text',
      component: Text
    }
  ]
}


new VueRouter({
  routes,
  mode: 'history',
  base: '/base/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    else{
      return { x: 0, y: 0}
    }
  },
  fallback: true, // 如果不支持 history，回退到 hash
  parseQuery(query){ // query参数

  },
  stringifyQuery(obj){

  },
  beforeEnter(to, from, next){
    console.log('app route before enter');
    next();
  }
});



  // 路由守卫
  router.beforeEach( (to, from, next)=>{
    console.log('before each invoked');
    next(); // 必须的，否则路由不跳转
  });

  router.beforeResolve( (to, from, next)=>{
    console.log('before resolve invoked');
    next();
  });

  router.afterEach( (to, from)=>{
    console.log('after each invoked');
  });
```


## 前端路由的实现原理
1. hash
    - 通过 hash记录跳转的路径，可以产生历史记录

2. history
    - 浏览器自带的历史管理 history
    - history.pushState() 可能导致 404错误

3. 开发时使用 hash路由，上线的话，使用 history路由


    <li class="router-link-active">列表页</li>
    路由地图
    路由视图 <router-view name="view"></router-view>
    路由导航
    路由查询参数
    嵌套路由，子路由
    命名路由和命名视图
    路由重定向 redirect



    ```
   {
    path: '/',
    alias: ['/gogo', 'lala'], // 路由别名，代替path，单个用字符串，多个用数组
    redirect: '/home' // 重定向
   },
   {
    path: '/list/:id',
    component: List
   }

   $route 当前路由对象，里面可以获取 name, path, query, params等
   $router 是VueRouter实例，想要跳转到不同的 URL，
           用 $router.push({path: 'Name'}) 方法
   返回上一个 history, 用 $router.go(-1);


   编程式路由
    this.$route.go(-1); 后退
    this.$route.go(1); 前进


    // name 配合 params
   <router-link :to="{name: 'list', params: {id:123} }" append>
     点击无限追加的路由
   </router-link>

   <router-link :to="{name: 'list', params: {id:123} }" exact>
     严谨的路由
   </router-link>

   // query宽松，配合 path使用
   <router-link :to="{path: '/home/list', query: {id:123} }" exact>
     严谨的路由
   </router-link>

   // 输出
   $route.params.user // params

   $route.query.id  // query
    ```



## vue-router
	路由靠组件来展现，
	路由传参
	有子路由，父组件设置name是无效的
	更多素材请加微信号：LXHY000（三个零）专业售卖花艺图片

	路由  mode:"history"
	history
	hash 默认

	this.$router.push('/***')


## 路由中的参数传递
  ```
  // 路由链接设置参数, 注意 to & :to 的区别
  <router-link to="/">首页</router-link>
  <router-link :to="{name: 'home', params: {id: 12} }">列表</rotuer-link>

  // 组件接收参数
  {{ $route.params.id }}
  ```

## url 传值
  ```

  ```


## query append exact
  ```
  // 选中路由的class
  .router-link-active{ }
  li.router-link-active a{ }

  ```

  alias 别名


  redirect 重定向




  子路由
  watch监控 路由
  路由的钩子 'fn'(){}













## 路由懒加载
- 懒加载也叫延迟价值啊，即在需要的时候进行加载，谁用谁加载
  在单页应用中，如果没有应用懒加载，运用webpack打包后的文件将会异常的大，
  造成进入首页时，需要加载的内容过多，延时过长，不利于用户体验，
  运用懒加载可以将页面进行划分，按需加载页面，可以分担首页所承担的加载压力，减少加载用时

  前端路由是直接找到与地址匹配的一个组件或对象并将其渲染出来


  ```
vue router 钩子函数
  beforeEnter( (to, from, to)=>{
    console.log(to, from);
    next();
    // next(false); 禁止路由
    // next({path: '/list'}); 路由重定向
  });


  beforeRouterEnter: ()

  beforeRouterLeave()


  1 没有懒加载的方法
  import Vue from 'vue';
  import Router from 'vue-router';
  import Main from '@/components/Main';
  import Home from '@/components/home/home';
  import Chart from '@/components/chart/chart';

  Vue.use(Router);
  export default new Router({
    router:[
      {
        path: '/',
        name: 'main',
        template: Main,
        children:[
          {
            path: '/home',
            component: Home
          }
        ]
      },
      {
        path: '/chart',
        template: Chart
      }
    ]
  });

  2 懒加载的方法，不需要 import引入
  const routers = [
    {
      path: '/',
      template: resolve => require(['@/components/main'], resolve),
      children: [
        {
          path: '/home',
          template: resolve => require(['@/components/home/home'], resolve),
        }
      ]
    },
    {
      path: '/chart',
      template: resolve => require(['@/components/chart/chart'], resolve),
    }
  ];

  const router = new Router({
    routers
  });
  export default router;
  ```