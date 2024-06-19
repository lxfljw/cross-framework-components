<script setup lang="ts">
import Input from "@crossui/vue3/input/index.vue";
import { ref } from "vue";
// import "web-comp/button/index.js";
// import "web-comp/input/index.js";
const inputValue = ref("");
function change(e) {
  console.log("input", e.detail);
  inputValue.value = e.detail;
}
</script>

<template>
  <!-- <c-button @click="cbtn" type="danger">
    <div>我是Vue3</div>
  </c-button> -->
  <label>输入</label>
  <Input @change="change" />
  <div>显示：{{ inputValue }}</div>
</template>

<style scoped></style>
