const log = console.log
/**
 * 2020年03月23日11:46:32
 * @param node 就是文档碎片，在内存中
 * @param vm new Vue实例
 */
export function compiler(node, vm) {
  // childNodes 只有第一层 儿子，没有孙子节点
  let childNodes = [...node.childNodes]
  
  // 将类数组转为 数组
  childNodes.forEach(child => {
    if (child.nodeType === 1) { // 1 元素；2 属性；3 文本
      // log('elem',child)
      compiler(child, vm) // 递归，编译当前节点的子节点
    }
    else if (child.nodeType === 3) { // 文本
      compilerText(child, vm)
    }
  })
}

// ?: 匹配不捕获，不捕获当前的分组
// + 一个或多个；? 尽可能少匹配 /{{(.+?)}}/g
const reg = /{{((?:.|\r?\n)+?)}}/g

// 匹配编译文本，替换 {{user.name}} {{value}} 文本内容
function compilerText(node, vm) {
  // node.textContent  {{value}}
  if (!node.temp) {
    // node.textContent 会导致值更新了，页面不渲染
    node.temp = node.textContent
  }
  node.textContent = node.temp.replace(reg, (...arg) => {
    return JSON.stringify(getValue(vm, arg[1])) // arg[1] -> value
  })
}

function getValue(vm, expression) {
  let keys = expression.split('.')
  return keys.reduce((memo, current) => {
    // vm.user -> vm.user.name 先取 user，后取 user.name
    memo = memo[current] //  vm['user']['name']
    return memo
  }, vm)
}
