import { PluginOption, build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const prefix = 'dev';
const projectName = 'project'

const renameIndexPlugin = (newFilename: string): PluginOption => {
  if (!newFilename) return

  return {
    name: 'renameIndex',
    enforce: 'post',
    generateBundle(options, bundle) {
      const indexHtml = bundle['index.html']
      indexHtml.fileName = newFilename
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    renameIndexPlugin(`${prefix}_${projectName}.html`)
  ],
  build: {
    sourcemap: 'inline',
    rollupOptions: {
      output: {
        entryFileNames: `${prefix}_${projectName}.js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'index.css') {
            return `${prefix}_${projectName}.css`
          }
          return `${prefix}_${assetInfo.name}`
        }
      }
    }
  }
})