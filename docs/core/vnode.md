# vnode 虚拟DOM

1. 节约性能，先把真实的 DOM节点用一个对象表示出来，再通过对象渲染到页面上
2. 虚拟DOM，只是一个JS对象
    - `template`
    - render函数 `render (h) { return h('div', {}, []) }`

3. 虚拟DOM属性少，方便比对，真实DOM重绘耗费性能
