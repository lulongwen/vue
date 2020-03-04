const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const URL = process.env.NODE_ENV === 'development' ? '/iview/' : '/'

module.exports = {
  lintOnSave: true,
  baseUrl: URL,
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
}