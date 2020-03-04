/**
  component: () => import()
  动态组件，import() 动态引入，不点击不加载
  import * from *.vue

  const arr = [
    {
      path: 'news/list',
      name: 'news.list',
      component: NewsList
    },
    {
      path: 'goods/list/:id',
      name: 'goods.list',
      component: GoodsList
    }
  ]
 */

// router 函数传参数
// router, let {params, query} = router
function func({ params, query }) {
  return { id: params.id, msg: params.msg, name: query.name }
}

export const page403 = {
  path: '/403',
  name: '403',
  component: resolve => require(['@/views/error/error403'], resolve), // 2.0
  component: () => import(`@/views/${file}.vue`),
  component: () => require(`@/views/${file}.vue`).defualt,
  meta: {
    title: '403 没有权限操作'
  }
}


export default [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    // redirect重定向传参
    redirect: '/home/:id(\\d+)/:title',
    // 路由后缀为空或 index的时候，跳转到 index的配置
    redirect: {
      name: index
    },
    meta: {
      title: '主页',
      keepAlive: true
    },

    // Duplicate named routes definition
    // 路由重复添加，name一样造成，利用redirect重定向
    // name: 'index',
    // component: () => import('@/components/index').then(m => m.default)
  },
  {
    path: '/index',
    name: 'index',
    // 路由懒加载
    component: () => import('@/components/index').then(m => m.default)
  },


  {
    path: '/static',
    name: 'static',
    component: Static,
    props: { title: 'lucy' } // 给组件 传递静态参数，组件要有 props接收 title
  },
  {
    // :title  : 占位符
    path: '/list/:title',
    name: 'list',
    component: List,
    props: true
    // 将 title 作为参数，route.params 传递到组件的 props 对象里面
    // 组件 props 里面必须声明 title 属性 props:{type: Stirng, default: ''}
  },
  {
    // localhost:8080/page/23/info , URL 必传参数，不传递参数，跳转不到这个页面
    path: '/page/:id/:msg',
    name: 'page',
    component: Page,
    props: func, // 上面的 func 函数
  },


  // Home 组件里要有 <router-view /> 负责显示自路由，不然子路由不显示
  {
    path: '/home',
    // URL= localhost/home/89/detail/67
    path: '/home:id/detail/:type',
    path: 'list/:id(\\d+)/:type',  // 正则过滤路由
    name: 'home',
    // 路由懒加载, Cli 2.0
    component: resolve => { require(['../components/home/Home'], resolve) },
    meta: {
      title: '列表页',
      keepAlive: true
    },
    // 路由守卫
    beforeEnter(to, from, next) {
      if (store.state.token) return next()
      next(`/login?redirect=${to.path}`)
    },
    cildren: [
      {
        path: '/router',
        // 路由懒加载 Cli 3.0
        component: () => import('@/components/Detail'),
        meta: {
          title: 'vue 路由',
          keepAlive: true
        },
        children: [
          {
            path: '/', // 首页
            name: 'router', // 有子路由，父路由的name 不用写，因为无效
            component: resolve => { require(['../components/router/params'], resolve) }
          },
          {
            path: 'router-view',
            name: 'router-view',
            component: resolve => { require(['../components/router/router-view'], resolve) }
          },
        ]
      },
    ]
  }
]
