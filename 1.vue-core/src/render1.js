// <div id="app"><h1 style="color: red; font-size: 20px">大标题</h1> APPCONTENT </div>

// 1 render函数
function h(tag, props, ...children) {
  let {key} = props
  delete props.key // DOM属性中不包括 key属性，所以删除掉
  
  // 把 children中的文本节点转为对象
  children = children.map(child => {
    console.log('typeof', typeof child, child, children)
    // h()
    if (child != null && typeof child === 'object') return child
    // 文本节点转对象 'ziti' -> {text: 'ziti'}
    return vnode({text: child})
  })
  
  return vnode({tag, props, children, key})
}

// 2 拆分函数为 /vnode/ h.js + vnode.js
function vnode({tag, props, children, key, text}) {
  return {
    tag, // 当前的标签名
    props, // 当前标签上的属性
    key, // 可能传递的key值
    children, // 子节点
    text // 文本节点
  }
}

let obj = h(
  'div',
  {id: 'app', key: 1},
  h('h1', {style: {color: 'red', 'font-size': '20px'}}, '大标题'),
  'APPCONTENT'
)

console.log(obj)
