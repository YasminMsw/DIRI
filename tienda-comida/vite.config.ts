import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
/// <reference types="vitest/config" />

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
 environment: 'jsdom',
 setupFiles: ['src/vitest.setup.ts']
    }
})
