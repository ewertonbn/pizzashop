import path from 'node:path'

import reactPlugin from '@vitejs/plugin-react'
import { defineConfig, UserConfig } from 'vite'
import type { InlineConfig } from 'vitest'

export default defineConfig({
  plugins: [reactPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
  },
} as UserConfig & {
  test: InlineConfig
})
