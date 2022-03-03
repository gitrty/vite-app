<template>
  <router-view></router-view>
</template>

<script setup>
// setup script 中无法访问this，使用 getCurrentInstance 获取当前组件实例
import { getCurrentInstance } from "vue";
const app = getCurrentInstance();
// console.log(app.proxy.$BASE_URL);

// console.log(import.meta.env); // 当前环境
</script>


<style lang="scss" scoped>
.bottom {
  color: red;
  > div {
    color: blue;
  }
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
