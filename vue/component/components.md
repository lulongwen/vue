# vue组件化
1. Vue的组件化简单说就是分离出可复用的vue组件，一般就是 .vue文件,当需要使用的时候再引入。
2. 在这个过程中，需要解决的问题是怎么加载和引入。解决这些问题的方法有很多，webpack，gulp都行。和是不是使用es6的语法没什么关系
3. Es6是一种新的Javascprtit规范，很多浏览器都没有实现，但是有一些编译工具(babel) 可以将es6编译成es5，甚至es3,所以如果你想使用es6，只要编译之后在目标浏览器中能够运行就行了，和前后端分离没有关系。
4. babel提供了 js文件引入的方式，因此，你可以在引入js文件之后，使用es6语法
5. 组件化需要一个构建的过程，不是开箱即用的


## Vue全局指令
```
Vue.extend(options) 创建一个构造器
Vue.set(target, key, value) 设置对象的属性
Vue.directive(id, [definition]) 注册或获取全局指令
Vue.filter(id, [definition]) 注册或获取全局过滤器
Vue.component(id, [definition]) 注册或获取全局组件，注册还会自动使用给定的 id组件的名称

```

## Vue 数据
```
data 类型 Object | Function 组件只接收 函数 return
props 类型 Array | Object，用于接收父组件的数据
computed 计算属性，结果会缓存，会加入到Vue中
methods 方法
```

## Vue 操作 DOM
```
el Vue实例挂载点，挂在之后可以通过 $el 访问
rel="attr" 设置DOM属性，相当于 id
this.$rels.attr 获取DOM节点
template 字符串模板，模板会替代 挂载元素
render 字符串模板的替换方案

```


## Vue 实例属性
```
vm.$el 实例化后的根 DOM
vm.$data 数据对象
vm.$refs 获取DOM |
vm.$props 组件接收的父组件传递的数据
vm.$slots 访问插槽分发的内容
:is 添加动态模板

```


## Vue指令
```
v-if
v-show
v-for
v-on | @
v-bind | :
v-model
v-show
```


## vue事件
```
  slot弹窗 slot.html
  父组件调用子组件的方法 child-methods.html
```



## 自定义事件
- 自定义事件接口，用于在组件树中通信，自定义事件独立于原生DOM事件
- 每个 vue实例都是个事件触发器
- vue事件在冒泡过程中第一次触发回调之后自动停止冒泡，除非回调明确返回 true
  ```
  $on() 监听事件

  $emit() 在它上面触发事件

  $dispatch() 派发事件，事件沿着父链冒泡，子组件向父组件传值

  $broadcast() 广播事件，事件向下传导给所有后代，父组件向子组件传值

  - vue2中 $dispatch 和 $broadcast 已弃用
  ```



## events
  ```
    // 阻止 默认事件
    @submit.prevent = ""

  ```


## vue事件委托, 在li元素中额外加一个data-index就可以实现委托
  <ul @click="handleClick">
    <li v-for="(item, index) in data" :data-index="index">
      {{ item.text }}
    </li>
  </ul>

  methods: {
    handleClick(ev) {
      // 要过滤掉ul，不然会出问题
      if (ev.target.nodeName.toLowerCase() === 'li') {
        let index = parseInt(e.target.dataset.index)
        // 获得引索后，只需要修改data数据就能改变UI了
        this.doSomething(index)
      }
    },
    doSomething(index) {
      alert(index); // do what you want
    }
  }

  

## component 组件
- 组件名称最好不要和原生的 HTML标签相同
- 必须有根元素，包裹住所有的代码，不支持片段代码
  ```
  <template id="aaa">
      <div>
          <h3>我是组件</h3>
          <strong>我是加粗标签</strong>
      </div>
  </template>
  ```
- 如何划分组件
    1. 功能模块: select, pagenation, menu
    2. 页面区域: header, footer, sidebar

## 定义组件，代替 Vue.extend();
  ```
  // 定义组件
  var Home = {
    template: '#aaa'
  };

  // 代替 Vue.extend();
  Vue.component('组件名称',{ // 不推荐使用
    data(){ },
    methods:{ },
    temepalte: 
  });


  // 全局组件，不推荐使用的方法
  Vue.component('aaa', Home);

  new Vue({
    el: '#box',
    components:{
        'aaa': Home
    }
  });

  // 使用组件
  <div id="box">
    <aaa></aaa>
  </box>
  ```


## 父组件向子组件传值
  props: ['']



## 子组件向父组件传值
  $despache
  $on 



### 组件生命周期
- 钩子函数

```
new Vue({
    el: '#box',
    components:{
        'aaa': Home
    },
    // 组件生命周期
    beforeCreate(){
		console.log('组件实例刚刚被创建，没有任何属性和方法')
	},
	create(){
		console.log('实例已经创建完成，属性已经绑定')
	},
	beforeMount(){
		console.log('模板编译之前')
	},
	mounted(){
		console.log('模板编译完成')
	},

	beforeUpdate(){ //更新数据
		console.log('组件更新之前')
	},
	updated(){
		console.log('组件更新完毕')
	},

	beforeDestroy(){ // 销毁组件，全局销毁 vm.$destroy()
        // 销毁之后，实例就不能再用了
		console.log('组件销毁之前')
	},
	destroyed(){
		console.log('组件销毁之后')
	},

    data:{
        msg: '创造应用，改变生活'
    },
    methods:{

    }

});
```


### 组件通信
    ```
    vm.$emit();
    vm.$on();
    ```

- 父组件和子组件
    + 子组件想要拿到父组件的数据，通过 props
    + 1.0 子组件和更改父组件的信息，可以是同步 :sync
    + 2.0 不允许直接同步父级数据，做赋值操作，解决办法
    ```
    1. 父组件每次传一个 对象给子组件，对象之间引用 √
    2. mounted 中转，不报错
    ```

- 单一事件管理组件通信： vuex
    ```
    var Event = new Vue();
        Event.$emit('事件名称', 数据);

        Event.$on('事件名称', function(data){
            // data
        }.bind(this) );

        debounce 废弃，用lodash，debounce 配合事件， 延迟执行
            <input type="text" name="" @keyup="show | debounce 2000">
            _.debounce(fn, 时间)
    ```



### 过滤器
- 没有内置过滤器，自定义过滤器必须放在 Vue实例前面
- 用 lodash库 实现
    ```
    // 自定义过滤器语法：
    Vue.filter('过滤器名字', function(val){
        return val; // 必须要 return
    });

    // 定义 过滤器
    Vue.filter('double', function(val, a, b, c){
        console.log(val, a, b, c);
        return val < 10 ? '0'+val : ''+ val;
    });

    // 自定义过滤器传参
    {{msg | double('12','5', true)}}


    Vue.filter('time', function(val){
        var date = new Date(val);
        return date.getFullYear()+ '-'+ (date.getMonth()+1) + '-'+ date.getDate() + ' ' + date.getHours()+ ':'+ date.getMinutes()+':'+ date.getSeconds();
    });

    // 双向过滤器：
    Vue.filter('filterHTML', { // model-view
        read: function(input){
            return input.replace(/<[^<]+>/g, '');
        },
        write: function(val){ // view - model
            return val;
        }
    });
    
    ```

### 事件 自定义指令
    ```
    Vue.config.keyCodes.f1 = 112;

    <input type="text" @keyup.f1="change">
    ```

    ```
    // 修改内置按键符会报错：
    Avoid overwriting built-in modifier in config.keyCodes: .ctrl

    内置的按键名：
    .enter
    .tab
    .delete
    .up
    .down
    .left
    .right

    .ctrl
    .alt
    .shift
    .meta

    ```

    