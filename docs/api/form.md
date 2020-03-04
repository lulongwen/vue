# Vue 表单验证


## props 数据验证

```js
export default {
	props: {
		number: {
			type: Number,
			required: true,
			validator (value){
				return value >= 0 && value <= 128
			}
		}
	}
}

```


## 表单验证案例

```html
<form @submit="validate">
  <input v-model="text" />
  <input v-model="email" />

  <ul v-if="!$v.valid" style="color:red">
    <li v-for="error in $v.errors">
      {{ error }}
    </li>
  </ul>

  <input type="submit" :disabled="!$v.valid">
</form>

<script>
export default {
	data: {
    text: 'foo',
    email: ''
  },
  methods: {
    validate (e) {
      if (!this.$v.valid) {
        e.preventDefault()
        alert('not valid!')
      }
    }
  },
	validations: {
    text: {
      validate: value => value.length >= 5,
      message: (key, value) => `${key} 长度必须大于5，当前输入 ${value.length}`
    },
    email: {
      validate: value => emailRE.test(value),
      message: key => `${key} 请输入正确的邮箱`
    }
  }
}
</script>
```