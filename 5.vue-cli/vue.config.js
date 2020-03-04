let path = require('path')

module.exports = {
  publicPath:process.env.NODE_ENV === 'production'? '/vue-project':'/',
  outputDir:'myassets', // 输出路径
  assetsDir:'static', // 生成静态目录的文件夹
  runtimeCompiler: true, // 是否可以使用template模板
  parallel:require('os').cpus().length > 1, //多余1核cpu时 启动并行压缩
  productionSourceMap:false, //生产环境下 不使用soruceMap

  // https://github.com/neutrinojs/webpack-chain
  chainWebpack:config=>{
    // 控制webpack内部配置
    config.resolve.alias.set('component',path.resolve(__dirname,'src/components'))
  },

  // https://github.com/survivejs/webpack-merge
  configureWebpack:{
    // 新增插件等
    plugins:[]
  },

  devServer:{ // 配置代理
    proxy:{
      '/api':{
        target:'http://a.zf.cn:3000',
        changeOrigin:true
      }
    }
  },

  // 第三方插件配置
  pluginOptions: {
  	'style-resources-loader': {
  		preProcessor: 'less',
  		patterns: [
        // 插入全局样式
        path.resolve(__dirname,'src/assets/common.less'), 
  		],
  	}
  }
}