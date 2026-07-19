import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Honor a PORT env var (used by preview/tooling); default to Vite's 5173.
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
})
