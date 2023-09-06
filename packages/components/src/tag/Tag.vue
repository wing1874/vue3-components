<script setup lang="ts">
import { reactive, ref } from 'vue';

defineOptions({
  name: 'WTag',
});

const count = ref(0);
</script>

<template>
  <div class="tag">tag</div>
</template>

<style scoped lang="less">
.tag {
  background-color: azure;
  padding: 4px 6px;
}
</style>
