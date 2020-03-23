const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
  
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],
  // 更改解析模块的查找方式
  resolve: {
    modules: [
      path.resolve(__dirname, 'source'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  // 产生 sourcemap 源码映射
  devtool: 'source-map'
}
