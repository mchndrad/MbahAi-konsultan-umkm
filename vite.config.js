import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Naikkan batas limit warning menjadi 1000 kB 
    // agar build bersih dari warning chunk size
    chunkSizeWarningLimit: 1000,
  },
})