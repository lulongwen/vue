// see http://vuejs-templates.github.io/webpack for documentation

var path = require('path')

const devProxy = ['/pc','/weixin','android',...]  // 代理

var proEnv = require('./config/pro.env')  // 生产环境
var uatEnv = require('./config/uat.env')  // 测试环境
var devEnv = require('./config/dev.env')  // 本地环境
const env = process.env.NODE_ENV

let target = ''
// 默认是本地环境
if(env==='production'){  // 生产环境
  target = proEnv.hosturl
}else if(env==='test'){ // 测试环境
  target = uatEnv.hosturl
}else{  // 本地环境
  target = devEnv.hosturl
}
// 生成代理配置对象
let proxyObj = {}
devProxy.forEach((value, index) => {
  proxyObj[value] = {
      target: target,
      changeOrigin: true,
      pathRewrite: {
          [`^${value}`]: value
      }
  }
})

module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  devServer: {
  // open: process.platform === 'darwin',
  host: '0.0.0.0',
  port: 8080,
  https: false,
  hotOnly: false,
  lintOnSave: false, // 代码校验

  // 配置反向代理
  disableHostCheck: true,
  chainWebpack: config => {
    config.resolve.alias
      // .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('cms', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('router', resolve('src/router'))
      .set('store', resolve('src/store'))
      .set('lib', resolve('src/lib'))
  },
  // 打包不生成 .map文件
  productionSourceMap: false,
  devServer: {
    proxy: 'https://localhost',
    port: '8080'
  }

  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
  proxy: proxyObj, // string | Object
  before: app => {}
  }
}


/**
* serve 是服务命令
* build是用于打包用的，比如 npm run dev ,可以在浏览器上直接浏览页面，
* prod 和 uat 这两个就只能在本地打好包，然后放到服务器上，访问网址才能看到
*
* 配置参考
* http://www.cnblogs.com/zuoan-oopp/p/9101240.html
*/