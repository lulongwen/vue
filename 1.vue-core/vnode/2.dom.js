// <div id="app"><h1 style="color: red; font-size: 20px">大标题</h1> APPCONTENT </div>

// render函数
function h(tag, props, ...children) {
  let {key} = props
  delete props.key
  
  return {
    tag, // 当前的标签名
    props, // 当前标签上的属性
    key, // 可能传递的key值
    children // 子节点
  }
}

let vnode = h(
  'div',
  {id: 'app', key: 1},
  h('h1', {style: {color: 'red', 'font-size': '20px'}}, '大标题'),
  'APPCONTENT'
)

console.log(vnode)
/*
{
  "tag":"div",
  "props":{"id":"app"},
  "key":1,
  "children":
  [
    {
      "tag":"h1",
      "props":{
        "style":{"color":"red","font-size":"20px"},
        "class": "box"
      },
      "children":["大标题"]
    },
    "APPCONTENT"
  ]
}
* */
