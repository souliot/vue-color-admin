import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@c': resolve(__dirname, 'src/components'),
    },
  },
  build: {
    minify: 'esbuild',
    outDir: 'dist',
    // 服务端渲染
    ssr: false,
  },
  css: {
    postcss: {
      plugins: [postcssImport, autoprefixer, tailwindcss],
    },
  },
  // 引入第三方的配置
  optimizeDeps: {
    // include: ['axios'],
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: false,
    cors: true,
  },
})
