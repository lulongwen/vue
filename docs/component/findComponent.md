# findComponent


## 一 findComponentPrev

1. 第一个参数是当前上下文，基于哪个组件来向上寻找，一般都是基于当前的组件 this
	- 第一个参数默认 this，即当前组件的上下文
	- findComponentPrev 只会找到最近的一个组件实例

2. 第二个参数是要找的组件的 name
	- 在 while 语句里不断向上覆盖当前的 parent 对象，判断 parent组件的 name 与传入的 componentName 是否一致，直到直到最近的一个组件为止

```js
const findComponentPrev = (context, componentName) => {
  let parent = context.$parent
  let { name } = parent.$options
  // if (!name) return null

  // 如果有父级，并且没有找到
  while (parent && !componentName.includes(name)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}

```



## 二 findComponentPrevAll



## 三 findComponentNext



## 四 findComponentNextAll



## 五 findComponentSiblings

1. Vue在渲染组件时，会给每个组件加一个内置的属性`_uid` ，这个 `_uid` 是不会重复的，可以用这个做排除