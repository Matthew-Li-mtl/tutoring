import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
//import path from "path"

// https://vite.dev/config/
export default defineConfig({
  base: "/tutoring/",
  plugins: [react(), tailwindcss(),],
  //root: path.resolve(__dirname, 'tutoring website/tutoring-personal-site')
  build: {
    cssMinify: 'esbuild' // Forces Vite to use esbuild, bypassing lightningcss completely
  }
})
