<script setup lang="ts">
import { ref } from 'vue';
import { IProps } from './types';

defineOptions({
  name: 'WButton',
});
const props = withDefaults(defineProps<IProps>(), {
  name: 'button',
  type: 'primary',
});

const count = ref(1);
</script>

<template>
  <button class="button g-red">{{ name }}按钮 12{{ type }}</button>
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
