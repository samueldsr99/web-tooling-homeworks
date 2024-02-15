import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [svelte()],
  test: {
    coverage: {
      exclude: ['**/*.config.{js,ts}', 'src/main.ts', 'src/vite-env.d.ts'],
    },
    globals: true,
    environment: 'jsdom',
  },
})
