import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.tsx',
      ssr: 'resources/js/ssr.tsx',
      refresh: true,
    }),
    react(),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
  },
  base: '/',
  server: {
    hmr: {
      //protocol: 'wss' //wss pentru https
      protocol: 'ws', // use ws for local HTTP
      host: '127.0.0.1', // optional, ensures IPv4
    }
  }
});
