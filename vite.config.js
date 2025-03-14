import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  chunkSizeWarningLimit: 800, // Giảm cảnh báo
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          reactLibs: ['react', 'react-dom', 'react-router-dom'],
          threeLibs: ['three'],
          icons: ['lucide-react'],

        }
      }
    }
  },
  base: "/Price-List/", // Đổi your-repo-name thành tên repo của bạn
  plugins: [react()],
})
