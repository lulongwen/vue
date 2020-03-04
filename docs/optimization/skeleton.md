# Vue骨架屏预加载

1. ` npm i vue-skeleton-webpack-plugin -S `
一个路径对应一个骨架
app-skeleton
配置webpack插件 vue-skeleton-webpack-plugin  
单页骨架屏幕
```javascript
import Vue from 'vue';
import Skeleton from './Skeleton.vue';
export default new Vue({
    components: {
        Skeleton:Skeleton
    },
    template: `
        <Skeleton></Skeleton>    
    `
});
// 骨架屏
plugins: [
    new SkeletonWebpackPlugin({
        webpackConfig: {
            entry: {
                app: resolve('./src/entry-skeleton.js')
            }
        }
    })
]
```

带路由的骨架屏，编写skeleton.js文件
```javascript
import Vue from 'vue';
import Skeleton1 from './Skeleton1';
import Skeleton2 from './Skeleton2';

export default new Vue({
    components: {
        Skeleton1,
        Skeleton2
    },
    template: `
        <div>
            <skeleton1 id="skeleton1" style="display:none"/>
            <skeleton2 id="skeleton2" style="display:none"/>
        </div>
    `
});
```

```javascript
new SkeletonWebpackPlugin({
    webpackConfig: {
        entry: {
            app: path.join(__dirname, './src/skeleton.js'),
        },
    },
    router: {
        mode: 'history',
        routes: [
            {
                path: '/',
                skeletonId: 'skeleton1'
            },
            {
                path: '/about',
                skeletonId: 'skeleton2'
            },
        ]
    },
    minimize: true,
    quiet: true,
})
```

> 优化白屏效果

实现骨架屏插件
```javascript
class MyPlugin {
    apply(compiler) {
        compiler.plugin('compilation', (compilation) => {
            compilation.plugin(
                'html-webpack-plugin-before-html-processing',
                (data) => {
                    data.html = data.html.replace(`<div id="app"></div>`, `
                        <div id="app">
                            <div id="home" style="display:none">首页 骨架屏</div>
                            <div id="about" style="display:none">about页面骨架屏</div>
                        </div>
                        <script>
                            if(window.hash == '#/about' ||  location.pathname=='/about'){
                                document.getElementById('about').style.display="block"
                            }else{
                                document.getElementById('home').style.display="block"
                            }
                        </script>
                    `);
                    return data;
                }
            )
        });
    }
}
```