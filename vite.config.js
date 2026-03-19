import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['0cdc-2409-40e0-49-58b2-36b7-44f4-c210-4205.ngrok-free.app'],
  },
})
