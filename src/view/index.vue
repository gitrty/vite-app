<template>
  <div>index</div>
  <el-button type="primary" @click="$message.success('msg')">Primary</el-button>
  <!-- <el-slider v-model="value"></el-slider> -->
  <!-- <div>{{ count }}</div> -->
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
// import { getData } from "@/api/system";
// console.log(getData())

const store = useStore();

// const value = ref(0);

// computed 可以保留vuex中数据的响应式
// const count = computed(() => store.state.count);

console.log(store.state.mod.userStatus);
store.dispatch("mod/setVal");
console.log(store.state.mod.userStatus);
store.commit("mod/SETUSER", 100);
console.log(store.state.mod.userStatus);
</script>
