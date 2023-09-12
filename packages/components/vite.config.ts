import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      entryRoot: './src',
      //打包生成 .d.ts
      rollupTypes: true,
    }),
    vue(),
  ],
  build: {
    // 打包成库模式
    lib: {
      entry: './index.ts',
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'my-lib',
      formats: ['cjs', 'es'],
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
    },
  },
});
