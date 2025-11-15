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
      chunkSizeWarningLimit: 1000, // am limitat la 1000
    }
    //PRODUCTION : Update to wss protocol
  // base: '/',
  // server: {
  //   hmr: {
  //     protocol: 'wss'
  //   }
  // }
});
