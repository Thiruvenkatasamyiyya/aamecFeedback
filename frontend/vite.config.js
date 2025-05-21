import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'https://aamecfeedback-6m9o.onrender.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
})

