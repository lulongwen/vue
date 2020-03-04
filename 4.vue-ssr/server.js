const Vue = require('vue')
const exporess = require('express')()
// 创建服务端的渲染器
const renderer = require('vue-server-renderer').createRender()

// 创建 vue实例
const app = new Vue({
  template: '<div>hello world</div>'
})

// 服务端渲染的核心: 通过 vue-server-renderer 插件的 renderToString() 方法
// 将 vue实例转换为字符串插入到 HTML文件中
express.get('/', (req, res)=> {
  renderer.renderToString(app, (err, html)=> {
    if (err) return res.state(500).end('运行错误')
    
    res.send(`
      <!doctype html>
      <html lang="zh-CN">
        <head></head>
      </html>
    `)
  })
})