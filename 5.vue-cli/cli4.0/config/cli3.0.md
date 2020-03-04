# Vue cli 3.0 创建一个项目
1. 使用 vue ui 创建，管理项目
2. 项目结构目录整理
3. 初始化文件设置
4. vue cli 基本配置
5. vue.config.js 跨域配置
6. alias.config.js 配置给 webStorm 文件识别

---


## 1 安装 Vue Cli
```jsx
yarn global add @vue/cli

npm install -g @vue/cli

// 是否安装成功
vue --version
```

---


## 2 创建一个项目
```
// 界面化创建项目
  vue create projectName
  vue ui 

// CLI
  vue create blog
  cd blog
  npm run serve
```

### Project setup
```
yarn install / yarn

yarn run serve

yarn run build

yarn run test

yarn run lint
```

---



## Vue Cli 配置
* 在根目录新建 ` vue.config.js `, 内容如下

```js
module.exports = {
 // 基本路径
 baseUrl: '/',

 // 输出文件目录
 outputDir: 'dist',

 // eslint-loader 是否在保存的时候检查
 lintOnSave: true,

 // use the full build with in-browser compiler?
 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
 compiler: false,

 // webpack配置
 // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
 chainWebpack: () => {},
 
 configureWebpack: () => {},

 // vue-loader 配置项
 // https://vue-loader.vuejs.org/en/options.html
 vueLoader: {},

 // 生产环境是否生成 sourceMap 文件
 productionSourceMap: true,


 // css相关配置
 css: {
  // 是否使用css分离插件 ExtractTextPlugin
  extract: true,
  // 开启 CSS source maps?
  sourceMap: false,
  // css预设器配置项
  loaderOptions: {},
  // 启用 CSS modules for all css / pre-processor files.
  modules: false
 },


 // use thread-loader for babel & TS in production build
 // enabled by default if the machine has more than 1 cores
 parallel: require('os').cpus().length > 1,

 // 是否启用dll
 // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
 dll: false,

 // PWA 插件相关配置
 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
 pwa: {},


 // webpack-dev-server 相关配置
 devServer: {
  open: process.platform === 'darwin',
  host: '0.0.0.0',
  port: 8080,
  https: false,
  hotOnly: false,
  proxy: null, // 设置代理
  before: app => {}
 },


 // 第三方插件配置
 pluginOptions: {
  // ...
 }
}

```