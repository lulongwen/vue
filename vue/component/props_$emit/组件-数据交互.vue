/**
3中组件交互的方式
  1 props
  2 子组件触发自定义事件 this.$emit this.$on
  3 slot 插槽功能，卸载组件里面的模板


  ref="elem"
  this.$refs.elem 获取原生DOM


  this.$nextTick( () =>{
    // 操作原生DOM，获取更新后的DOM， this.$nextTick()后，发生真正变化
  });

  父组件可以调用子组件的方法，但子组件不可以调用父组件的方法

  组件私有的方法，加下划线 _Fn
	Fn可以被外部调用
  _Fn 下划线开头的方法，都是组件私有的方法，只允许组件内部调用，不是下划线开头的方法，组件外部可以调用（规范）

  data里面的key一定不要和 methods方法名重名


  数据驱动，就抛弃jquery的事件监听，使用 watch监听变化调用 change方法

  slot 也是父组件向子组件传值的方式，传递的信息是模板

  动态组件类似路由，动态组件的好处，可以实现过渡动画
    is
    :is
    router-view
*/