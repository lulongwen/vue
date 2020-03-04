<template>
  <!-- 
    1. 从服务端返回权限的字符串数组
      permissions:[ "KT Admin","sys.role", "sys.user.add"]

    2. 保存权限数组到 本地存储 | Vuex store
      Storage.set('permission', permission);

    3. 创建全局权限指令 | 局部指令
      permission.js

    4. 使用自定义指令
      在 main.js中引入 permission.js
      import permission from './directive/permission';

      .vue文件中使用，用户权限数组中有 'admin'，则这个按钮就显示
      <button v-permission="admin" type="success" @click="showModal">确认</button>
   -->
</template>


<script>
  // 3. 创建全局指令 permission.js
  import Vue from 'vue'
  import Storage from 'store'

  Vue.directive('permission', {
    bind(el, binding, vnode, oldnode){
      let access = Storage.get('permission') || [];
      let key = bingding.expression;
      let lock = access.some( item=> item === key);
      if(!lock)
        // el.remove();
        el.style.display = 'none';
    },
    inserted(el){

    }
  })

</script>