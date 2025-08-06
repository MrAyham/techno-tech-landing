import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
  plugins: [
    react({
      // @ts-expect-error -- plugin option retained for CSP compliance
      fastRefresh: false,
    }),
  ],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
});
