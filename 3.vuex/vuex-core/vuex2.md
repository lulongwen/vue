# Vuex 源码实现


## 一 Vuex 初始化


## 二 Vuex API


## 三 Plugins



### 1 Vuex是如何实现响应式数据的？
* new Vue({}) state 绑定到 data上
* $store 是如何挂载到 实例 this上的 



### 2 扩展mini-vuex,实现getters，并实现 Vuex的方式注入 $store
* 计算属性 computed实现 getters缓存
* beforeCreate中混入 $store获取方式
* computed 计算属性依赖的是 data里面的响应式数据