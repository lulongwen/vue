// 定义初始化的值；当一个组件需要获取多个状态时候，用 mapState 生成计算属性

export default {
  loading: flase,
  isFullScreen: false,

  token: {},
  user: {},

  permission: [],
  idType: [],
  openList: [],
  currentPage: [
    {
      path: '/home',
      name: 'home',
      title: '首页',
      icon: ''
    }
  ]
}