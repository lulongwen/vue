# webstorm 识别 cli3 的 @alias别名
* webpack中 用到别名 alias指向特定目录，例如，将 src的路径设置为 @；
* vue cli3 不再使用传统的 webpack 配置文件，故 WebStorm 无法识别别名；
* 解决方法，在根目录新建 alias.config.js

## 在项目根目录创建一个 `alias.config.js`
```jsx
alias.config.js
  const resolve = dir => require('path').join(__dirname, dir);
  module.exports = {
    resolve: {
        alias: {
            '@': resolve('src')
        }
    }
  }

```

* `alias.config.js` 对于项目无任何意义，也没有任何地方使用到，只是为了让 WebStorm 能够识别到 vue.config.js里面配置的 alias
```jsx
进入 webstorm
  WebStorm preferences -> Language & Framework -> JavaScript -> Webpack，选择这个文件即可
```
