<template>
  <div class="container">  
    <HomeHeader></HomeHeader> 

    <button @click="setCount(count+1)">+1</button>
    <button @click="setCount(count-1)">-1</button>

    <div>store中count：{{count}}</div>
    <button @click="changeName(name1)">父页面修改name</button>
    
    <div>store中name：{{name}}</div>
    <router-link to="/detail" ><h5>跳转到详情页</h5>   </router-link>
  </div>  
</template>

<script>
import HomeHeader from './Header'
import { store, mutations } from './store'
export default {
  name: 'Home',
  components: { HomeHeader },

  computed: {
    count () {
      return store.count
    },
    name () {
      return store.name
    }
  },
  data() {
    return {
      name: '首页的 HOME'
    }
  },

  methods: {
    setCount: mutations.setCount,
    changeName: mutations.changeName
  }
}
</script>

<style scoped>
  
</style>