<script setup lang="ts">
import Input from "components-vue3/input/index.vue";
// import "web-comp/button/index.js";
// import "web-comp/input/index.js";

function change(e) {
  console.log("input", e.detail);
}
</script>

<template>
  <!-- <c-button @click="cbtn" type="danger">
    <div>我是Vue3</div>
  </c-button> -->
  <Input @change="change" value="123" />
</template>

<style scoped></style>
