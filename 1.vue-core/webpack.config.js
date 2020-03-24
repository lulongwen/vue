const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  entry: './src/render.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true,
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    
    new HtmlWebpackPlugin({
      // template: path.resolve(__dirname, 'public/index.html')
      template: path.resolve(__dirname, 'public/render.html')
    })
  ],
  // 更改解析模块的查找方式
  resolve: {
    // modules: ['./src/js', 'node_modules/']
    modules: [
      path.resolve(__dirname, 'source'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  // 产生 sourcemap 源码映射
  devtool: 'source-map'
}
