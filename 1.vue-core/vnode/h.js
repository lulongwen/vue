import {vnode} from './vnode'

export function h(tag, props, ...children) {
  let {key} = props
  delete props.key // DOM属性中不包括 key属性，所以删除掉
  
  // 把 children中的文本节点转为对象
  children = children.map(child => {
    // console.log('typeof', typeof child, child, children)
    // h()
    if (child != null && typeof child === 'object') return child
    // 文本节点转对象 'ziti' -> {text: 'ziti'}
    return vnode({text: child})
  })
  
  return vnode({tag, props, children, key})
}
