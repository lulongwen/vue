import {h} from '../vnode/h.js'
import {render} from '../vnode/render.js'

// 1 vnode
let vnode = h(
  'section',
  {id: 'app', key: 1, className: 'ok200'},
  h('h1', {style: {color: 'red', 'font-size': '20px'}}, '大标题'),
  'APPCONTENT'
)
// console.log(vnode)

// 2 vnode 渲染真实 DOM
const el = document.querySelector('#app')
render(vnode, el)

