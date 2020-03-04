# Vue-cli4.0 多环境配置



## vue.config.js 配置

[vue.config.js](./vue.config.js ':include')


### preset预设记录

1. 保存预设的时候，系统会自动生成一个 `.vuerc` 的文件
	- 再创建新项目的时候，会出现上次预设的插件配置
	- 可以对 `.vuerc`文件中的配置进行修改，删除
	- 修改之后的预设会在，下一次新建项目的时候生效；可以拷贝这个文件到别的电脑，在新建项目的时候也会使用同样的预设

2. win10路径 `C:\Users\卢珑文\.vuerc`
	- mac ` ~/.vuerc `

preset 只声明需要的插件

```js
{
  "useTaobaoRegistry": true,
  "packageManager": "yarn",
  "presets": {
    "es6-conf": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-pwa": {},
        "@vue/cli-plugin-router": {
          "historyMode": true
        },
        "@vue/cli-plugin-vuex": {},
        "@vue/cli-plugin-eslint": {
          "config": "standard",
          "prompts": true, // 让用户选取自己的 ESLint config
          "lintOn": [
            "save"
          ]
        }
      },
      "cssPreprocessor": "node-sass"
    }
  }
}
```


## 二 vue-cli2.9 多环境配置


## 三 ElementUI技术栈


## 四 iViewUI技术栈


## Docker+Nginx部署


## 继续集成
