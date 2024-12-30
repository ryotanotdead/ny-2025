import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/ny-2025/',
  resolve: {
    alias: {
      '@mdi/font/css/materialdesignicons.css': '/node_modules/@mdi/font/css/materialdesignicons.css',
    },
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Трек дня',
        short_name: 'Трек дня',
        description: 'Описание вашего приложения',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/assets/333.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/assets/333.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
