import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Price-List/", // Đổi your-repo-name thành tên repo của bạn

  plugins: [react()],
})
