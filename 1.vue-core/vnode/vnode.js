
export function vnode({tag, props, children, key, text}) {
  return {
    tag, // 当前的标签名
    props, // 当前标签上的属性
    key, // 可能传递的key值
    children, // 子节点
    text // 文本节点
  }
}
