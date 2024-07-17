import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// https://dev.to/proparitoshsingh/hmr-not-working-in-vite-on-wsl2-5h2k
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    hmr: {host: '127.0.0.1'},
    watch: {
      usePolling: true
    }
  }
})
