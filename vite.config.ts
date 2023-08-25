import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

const prefix = 'dev';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: 'inline',
    rollupOptions: {
      output: {
        entryFileNames: `${prefix}_filename.js`,
        assetFileNames: (assetInfo) => {
          return `${prefix}_${assetInfo.name}`
        }
      }
    }
  }
})
