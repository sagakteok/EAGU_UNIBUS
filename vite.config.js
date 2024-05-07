import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['esm-dep > cjs-dep'],
  },
  plugins: [vue()],
})