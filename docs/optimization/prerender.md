# Vue预渲染 SEO优化


## 一 Vue预渲染插件
  - 缺点：数据不够动态，可以使用ssr服务端渲染

```bash
npm install prerender-spa-plugin 

```

```javascript
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const path = require('path')

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [ '/', '/about',]
      })
    ]
  }
}

```



## 二 什么是服务端渲染

1. 放在浏览器进行就是浏览器渲染,放在服务器进行就是服务器渲染
  - 客户端渲染不利于 SEO 搜索引擎优化
  - 服务端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的

2. SSR直接将 HTML字符串传递给浏览器，大大加快了首屏加载时间。
  - SSR缺点：占用更多的 CPU和内存资源
  - 一些常用的浏览器API可能无法正常使用
  - 在vue中只支持 `beforeCreate` 和 `created` 两个生命周期

![SSR ](https://www.fullstackjavascript.cn/ssr.png)


3. Vue服务端渲染 `SSR => NuxtJS`


## 三 webpack打包优化

1. 使用cdn的方式加载第三方模块,设置externals 
  - 防止cdn引入，webpack内部又打包一份

```javascript
// webpack 配置
externals: {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
}

// index.html
`<script src="https://cdn.bootcss.com/vue-router/3.1.2/vue-router.min.js"></script>
<script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>
<script src="https://cdn.bootcss.com/vuex/3.1.1/vuex.min.js"></script>`
```

2. 多线程打包 happypack
3. splitChunks 抽离公共文件
4. sourceMap的配置 
5. webpack-bundle-analyzer 分析打包的插件



## 四 缓存压缩

1. 服务端缓存，客户端缓存
2. 服务端gzip压缩
