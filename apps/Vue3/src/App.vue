<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import "web-comp/button/index.js";
import "web-comp/input/index.js";

function change(e) {
  console.log("input", e.detail);
}
const cInput = ref();
</script>

<template>
  <!-- <c-button @click="cbtn" type="danger">
    <div>我是Vue3</div>
  </c-button> -->
  <c-input @change="change" value="123" />
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
