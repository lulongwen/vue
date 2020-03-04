# Element-UI 开发经验


## 一 表单开发技巧

1. 禁止填充文本
	- ElementUI自带的 `auto-complete="off"` 并不生效

```html
<template>
<el-input
  type="text"
  v-model="name"
  readonly
  @focus="handleFocusEvent"
/>
</template>

export default {
	methods: {
		handleFocusEvent(event) {
		  event.target && event.target.removeAttribute('readonly')
		}
	}
}

```

2. 阻止 Form 自动提交
	- `<el-form @submit.native.prevent>`


3. el-scrollbar

```html
<el-scrollbar>
  <ul class="lists">
    <li
      v-for="(item, $index) of list"
      :key="$index"
      :class="'item-' + $index"
    >
      {{ item.value }}
    </li> 
  </ul>
</el-scrollbar>

<style lang="scss">
.lists {
  width: 100%;
  max-height: 280px; // 必须指定最大高度

  li {
	  padding: 0 20px;
	  margin: 0;
	  line-height: 34px;
	  cursor: pointer;
	  color: #606266;
	  font-size: 14px;
	  list-style: none;
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	   &:hover {
	    background-color: #F2F6FC;
	   }
	}
}
</style>
```


## CSS 技巧

1. 引入外部 css
	- `<style lang="scss" src="./common.scss" scoped/>`



## webpack

1. 打包后图片404问题

```
if (options.extract) {
  // 解决打包背景图片路径问题
  loaders.push({
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../../'
    }
  })
}
```