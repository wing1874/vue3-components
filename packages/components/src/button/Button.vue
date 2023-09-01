<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'WButton',
});

const count = ref(0);
</script>

<template>
  <button>测试按钮</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
