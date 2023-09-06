<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'WButton',
});

const count = ref(2);
</script>

<template>
  <button class="button">测试按钮 {{ count }}</button>
</template>

<style scoped lang="less">
.button {
  background-color: #4c90f0;
  border: 1px solid #2d72d2;
  padding: 6px 10px;
  border-radius: 4px;
  color: #fff;
}
</style>
