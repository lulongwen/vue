import { createElement, render, renderDom } from "./1.element.js";

// const virtualDom = createElement('ul', {}, [])
const virtualDom = createElement(
  "ul",
  {
    class: "list"
  },
  [
    createElement("li", { class: "item" }, ["aaa"]),
    createElement("li", { class: "item" }, ["bbb"]),
    createElement("li", { class: "item" }, ["ccc"])
  ]
);

// render 将虚拟 DOM 转化为真实 DOM渲染到页面上
const el = render(virtualDom);
renderDom(el, window.root);

console.log("virtualDom", virtualDom);

// DOM diff：比较2个虚拟 DOM 的区别，就是对比两个对象的区别
// 作用：根据2个虚拟 DOM 创建出补丁，描述改变的，将这个补丁用来更新 DOM
