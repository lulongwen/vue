// 虚拟DOM的 class 构造函数
class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

// 设置属性
function setAttr(node, key, value) {
  switch (key) {
    case "value":
      let tagName = node.tagName.toUpperCase();
      // node 是一个 input 或 textarea
      if (tagName === "INPUT" || tagName === "TEXTAREA") {
        node.value = value;
      } else {
        node.setAttribute(key, value);
      }
      break;

    case "style":
      node.style.cssText = value;
      break;

    default:
      node.setAttribute(key, value);
  }
}

// 返回虚拟节点 返回 Object
function createElement(type, props, children) {
  return new Element(type, props, children);
}

// render 方法，将虚拟 DOM 转化为真实的 DOM
function render(elObj) {
  let el = document.createElement(elObj.type);

  for (let key in elObj.props) {
    // 设置属性方法
    setAttr(el, key, elObj.props[key]);
  }

  // 遍历 children, 如果是，虚拟DOM继续渲染，不是就代表是文本节点
  elObj.children.forEach(child => {
    child =
      child instanceof Element ? render(child) : document.createTextNode(child);

    el.appendChild(child);
  });

  return el;
}

// 将元素插入到页面
function renderDom(el, target) {
  target.appendChild(el);
}

export { createElement, render, renderDom, Element };
