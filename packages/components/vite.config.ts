import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // 打包成库模式
    lib: {
      entry: './index.ts',
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'my-lib',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      // input: ['./index.ts'],
      // output: [
      //   {
      //     //打包格式
      //     format: 'es',
      //     //打包后文件名
      //     entryFileNames: '[name].js',
      //     //让打包目录和我们目录对应
      //     preserveModules: true,
      //     exports: 'named',
      //   },
      // ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
