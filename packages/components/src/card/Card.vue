<script setup lang="ts">
import { reactive, ref } from 'vue';

defineOptions({
  name: 'WCard',
});

const count = ref(0);
</script>

<template>
  <div class="g-red card">card</div>
</template>

<style scoped lang="less">
@import '../../styles/index';
.card {
  border: 1px solid #ddd;
}
</style>
