import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/product-list-insem-project/',  // Replace with your actual repo name
  plugins: [react()],
})
