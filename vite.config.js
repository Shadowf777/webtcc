import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: '/view/index/index.html',
      },
    },
  },
  server: {
    open: '/view/index/index.html',
  },
}
)