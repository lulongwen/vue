# $router & $route

## $router
* 是 new VueRouter() 的实例，全局对象，this.$router

```jsx
  $router.push({name:'home'})
    本质是向history栈中添加一个路由
    看起来是 切换路由，但本质是在添加一个history记录

  $router.replace({name:'home'}) //替换路由，没有历史记录
```


## $route
* 当前跳转的路由对象，每一个路由都会有一个$route对象，局部的对象
* 获取对应的 name，path, params, query等数据
* 可以从vue devtools中看到每个路由对象的不同

```jsx
  this.$route.name
    当前路径的名字，如果没有使用具名路径，则名字为空
  
  this.$route.matched Array
    匹配到的当前路由匹配到的组件类,包括参数
  
  $route.path String
    当前路由对象的路径，会被解析为绝对路径，如 "/home/news"
    
  $route.params Object
    包含路由中的动态片段和全匹配片段的键值对
    
  $route.query Object
    包含路由中查询参数的键值对。例如，对于 /home/news/detail/01?favorite=yes
    $route.query.favorite // yes
    
  $route.router
    路由规则所属的路由器, 以及其所属的组件
```