<script setup lang="ts">
import { ref } from 'vue';
// 这样就自动按需加载了
import { Button, Tag } from '@wing/components';
</script>

<template>
  <!-- 这里是因为直接引入的就是Button 组件 -->
  <Button type="primary" name="自定义" />
  <!-- 因为这里是通过component注册的，所以在全局挂载的情况下，应该使用注册时候的 name，也就是 WCard -->
  <WCard size="middle" title="hh" />
  <Tag />
</template>

<style scoped></style>
