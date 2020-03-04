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
