{
  :type="item.type"
  :range="item.range"
  :placeholder="item.placeholder"
  :search="item.search"
  :autosize="item.autosize"
  :prefix="item.prefix"
  :suffix="item.suffix"

  :percent="item.percent"
  :vertical="item.vertical"
  :stroke-width="item.strokeWidth"
  :format="item.format"
  :multiple="item.multiple"

  :placement="item.placement"
  :options="item.options"
  :data="item.data"
  :size="item.size"
  :password="item.password"
  :style="item.style"
  :status="item.status"
  :hide-info="item.hideInfo"
  :alpha="item.alpha"
  :allow-half="item.allowHalf"
  :readonly="item.readonly"

  :step="item.step"
  :show-stops="item.showStops"
  :show-input="item.showInput"
  :disabled="item.disabled"
  :max="item.max"
  :min="item.min"
  :gutter="item.gutter"
  :searchable="item.searchable"
}

// 如果是 slot 插槽，可以用 children 的方式渲染
children: {
  is: 'span',
  data: [
    { slot: 'append', title: '开启' } // 没有 icon
    { slot: 'append', icon: 'apple' } // 有 icon
  ]
}

children: {
  :label="child.label"
  :value="child.value"
  :slot="child.slot"
  :disabled="child.disabled"
}