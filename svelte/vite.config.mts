import { defineConfig } from 'npm:vite@^4.0.4'
import { svelte } from 'npm:@sveltejs/vite-plugin-svelte@^2.0.2'

import 'npm:svelte@^3.54.0'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/edhongpc.github.io',
  plugins: [svelte()],
  build: {
    outDir: '../docs', // relative to index.html
    // emptyOutDir: true, // true if outDir is inside root. if outDir is not inside root, uncomment this.
  }
})
