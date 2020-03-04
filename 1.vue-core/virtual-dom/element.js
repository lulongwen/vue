import { createElement, render, renderDom } from 'element.js'

// const virtualDom = createElement('ul', {}, [])
const virtualDom = createElement('ul', {
  class: 'list'
}, [
  createElement('li', {class: 'item'}, ['aaa']),
  createElement('li', {class: 'item'}, ['bbb']),
  createElement('li', {class: 'item'}, ['ccc']),
])



