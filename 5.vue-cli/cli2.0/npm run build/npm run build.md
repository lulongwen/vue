## webpack项目打包后一片空白的解决方法
- `npm run build` 后生成 dist文件夹， 放到Apache服务器下页面空白，主要问题是路径的问题。
    + 因为 index.html里面的内容都是通过 script标签引入的，如果路径不对，打开肯定空白

- 要修改的文件
1. `config/index.js`
    ```
    默认的路径：
    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
    }
    assetsPublicPath 修改为：
    assetsPublicPath: './'

    assetsPublicPath默认的是 '/', 也就是根目录。
    而 index.html和 static在同一级目录下面，所以要改为  ‘./ ’
    ```
2. `src里边router/index.js`
    ```
    router/index.js 路由配置默认模式是 hash, mode: 'hash'；
    如果你改成了 history模式的话，打开也是一片空白，所以改为 hash，或者直接把模式配置删除；
    如果非要使用 history模式，需要在服务端加一个覆盖所有情况的候选资源：
        如果 url匹配不到任何资源，则应该返回一个 index.html，这个页面就是你 APP依赖的页面
    ```
