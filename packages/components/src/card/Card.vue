<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { IProps } from './type';

defineOptions({
  name: 'WCard',
});
const props = withDefaults(defineProps<IProps>(), {
  size: 'small',
});

const count = ref(0);
</script>

<template>
  <div :class="`card card-${size}`">
    Card1
    <h3>{{ title }}</h3>
  </div>
</template>

<style scoped lang="less">
@import '../../styles/index';
.card {
  border: 1px solid #ddd;
  &-small {
    padding: 10px;
    color: #c00;
  }
  &-middle {
    padding: 16px;
  }
}
</style>
