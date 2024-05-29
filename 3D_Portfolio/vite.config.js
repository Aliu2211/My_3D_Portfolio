import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my_3D_Portfolio/',
  
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1600, }
})
