// vnode 渲染真实 DOM；除了第一次初始化渲染 vnode，以后还要对比vnode渲染

export function render(vnode, el) {
  let dom = createElement(vnode)
  el.appendChild(dom)
  console.log( vnode, 'render')
}


// 1 创建标签
function createElement(vnode) {
  let {tag, props, key, children, text} = vnode
  
  // vnode.el 一个虚拟节点对应它的真实节点
  if (typeof tag === 'string') { // tag: 'h1'
    vnode.el = document.createElement(tag) // 标签
    updateAttribute(vnode) // 属性
    
    children.forEach(child => { // 递归渲染 children节点
      render(child, vnode.el)
    })
  }
  else {
    // tag: undefined, text: 'ziti' 文本节点
    vnode.el = document.createTextNode(text)
  }
  
  return vnode.el
}


// 2 更新和创建属性，都会用到这个方法
function updateAttribute(vnode, oldattr={}) {
  let {el, props} = vnode
  
  let oldStyle = oldattr.style || {}
  let {style={}} = props
  
  // 更新 style没有这个属性就从 el上删除
  for(let key in oldStyle) {
    if(!style[key]) {
      el.style[key] = ''
      // el.removeAttribute(key)
    }
  }
  
  // 更新前要考虑，标签之前的属性存在不存在；如果 oldattr有属性，props中没有；就删除
  for(let key in oldattr) {
    // 如果新的 props中没有这个属性，就从 el上删除这个属性
    if (!props[key]) {
      delete el[key]
    }
  }
  
  for(let key in props) {
    if (key === 'style') {
      // style是个对象，循环遍历
      for(let name in style) {
        if (style.hasOwnProperty(name)) {
          el.style[name] = style[name]
        }
      }
    }
    // else if (key === 'class') { el.className = props.class }
    else {
      el[key] = props[key]
    }
  }
}
