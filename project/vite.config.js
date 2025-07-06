import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // ✅ this must be inside the config
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
