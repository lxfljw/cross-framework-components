<template>
  <c-input @change="emit('change', $event)" :value="value"></c-input>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "web-comp/input";
const value = ref("");
const emit = defineEmits<{ (event: "change", e: CustomEvent): void }>();
</script>

<style lang="scss" scoped></style>
