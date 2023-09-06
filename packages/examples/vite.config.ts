import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // resolve: {
  //   // 通过这个指向，解决热更新的问题
  //   alias: {
  //     '@wing/components': path.join(__dirname, '..', 'components', 'index.ts'),
  //   },
  // },
});
