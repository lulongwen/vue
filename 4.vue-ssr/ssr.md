# SSR 服务端渲染 Server Side Render
* 服务端渲染是什么？
* 服务端渲染的好处
  * 解决SPA单页面应用，初始化页面白屏问题，更快的初始化页面加载，提升用户体验
  * 更快的页面显示，time-to-content(内容到达时间)，用户更快的看到渲染好的页面
  * 更好的SEO，直接返回静态页面
* SPA的缺点
    * 不利于SEO，内容全部有JS生成
    * 首屏加载慢，白屏问题
* 服务端渲染的缺点：
  * 开发条件有限，要使用通用代码
  * 构建设置和部署繁琐，技术能力强
  * 更多的服务器负载



## 服务端渲染是什么？



apicloud

SSR
npm i vue-meta -S

mounted 只会加载一次，如果组件没有变化，用 watch 或 beforeRouterEneter



vue实例选项就是在创建一个vue实例对象的时候，可以使用的一些功能性的项目
vue实例选项- DOM
  el

  template

  render

  renderError


  app.$isServer // 服务端渲染

$nextTick() 操作DOM节点，等DOM节点更新后获取

instance
lifecycle

practice



vue实例选项- 数据
  data

  props

  propsData

  computed

  methods

  watch




vue实例选项- 资源
  directives 指令

  filters 过滤器

  components 组件



vue实例选项- 组合
  parent

  mixins

  extends

  provide / inject


前端后端分离 后端只负责提供接口供前端调用，像跳转都是前端自己处理的
hash模式 # 开发时使用hash 不会导致404 hash方式不支持seo
h5的history.pushState （上线采用h5的跳转）

	router-view
	router-link	 声明式路由
		router-link-exact-active
		router-link-active

	const routes = []; 路由映射表

	const router = new VueRouter({ // 实例化路由
		routes
	});

	编程式路由导航，通过 JS跳转
	<button @click="back"></button>
	methods:{
		back(){
			this.$router.push({
				path: '/home'
			});
		}
	}

	$this.router.go(-1) // 前进后退
	$this.router.go(1)

	$this.$router.push('/list') 强制跳转路径
	$this.$router.replace('/list') 路由替换，将当前的历史替换掉
	['/', '/home', '/list', '/home'] .replace替换掉最后的/home
	['/', '/home', '/list', '/list'] go(-1) 会出现页面不跳转的现象


内置组件，
不需要声明，可以直接用的组件
  template
    <component :is=""> </component>

  transition 过渡效果

  transition-group

  keep-alive 缓存，只要访问过得就会被缓存起来
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  slot


	ref="el"
	this.$refs.el

		ref 放在DOM上取的是 DOM元素
		ref 放在组件上，取的是 实例化的组件

		@say-title="parent"  等价于 this.$on('say-title')

	template
	transition
	slot
	keep-alive 缓存路由，组件
	component :is="" 动态组件

	白屏
	SSR react发明了 服务端渲染
	SEO

	工程化内容
	深入讲解 服务端渲染
	vue + webpack工程流搭建
	vue + vue router + vuex
	vue服务端渲染深度集成
	vue项目开发，vue开发的各个环节
	无序依赖 vue-cli，搭建 vue工程
	具备全栈能力
	vue + webpack + vue router + vuex + SSR

	vue服务端渲染 没有 mounted

	在性能优化上提出问题，
	给出这些问题的解决方案

# SSR使用场景，什么情况下该使用 SSR？

* SSR取决于实际的使用场景
* 如果不需要，应该避免使用 SSR
* 需要用户登录才能查看大多数内容，不需要SSR，后台管理系统，邮箱系统
  * 网站尽可能快的 TTI(Time-To-Interactive)弹出登录页面
  * 在用户输入凭据时预加载(preload) 所有应用程序的资源(assets)和脚本(script)
  * 使用 service worker 缓存请求的资源，以便后续加载保持超级快速

* SSR 的首字节时间(Time To First Byte)比 CSR 慢
  * CSR 证书签名请求文件 Certificate Signing Request的英文缩写
  * [CSR](https://www.cnblogs.com/xuegqcto/p/9116712.html)
  * [服务端渲染吊打客户端渲染](https://www.w3ctech.com/topic/2005)
* SSR请求为啥比 CSR慢？
  * 因为在使用 SSR方式渲染页面的过程中，服务器需要花更多的时间来渲染出浏览器所需要的 HTML结构，
  * 最后才将渲染好的 HTML 结构作为响应返回，
  * 而不像 CSR那样，服务器只需要返回字节相对较少的 JSON 数据(relatively empty respons) 
  * 使用 SSR方式渲染 HTML页面的过程中，服务器的性能明显比 CSR 渲染HTML页面更耗性能
  * 因为在 renderToString没有执行完之前，服务器是不可能处理其它请求的

## 什么场景下该使用 SSR？

* 网站需要SEO，需要搜索引擎收录，
* 社交分享对您的应用很重要
* 用户是否可以通过链接访问深层内容，新闻网站
  * 内容较多、其中包含深层链接作为首页加载站点
  * 如何优化？优化关键路径 CSS，推迟所有 JS

