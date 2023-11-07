import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugin: Partial<VitePWAOptions> = {
    registerType: 'prompt',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
    manifest: {
        short_name: 'React Vite PWA',
        description: 'An awesome Vite app with PWA.',
        icons: [
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/android-chrome-192x192.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
                purpose: 'apple-touch-icon',
            },
            {
                src: '/maskable_icon.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any maskable',
            },
            {
                src: '/icons/apple-touch-icon.png',
                sizes: '144x144',
                type: 'image/png',
                purpose: 'any',
            },
        ],
        theme_color: '#007bff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
    },
    workbox: {
        // runtimeCaching: [
        //     {
        //         urlPattern: ({ url }) => {
        //             return url.pathname.startsWith('/api/v1');
        //         },
        //         handler: 'CacheFirst' as const,
        //         options: {
        //             cacheName: 'api-cache',
        //             cacheableResponse: {
        //                 statuses: [0, 200],
        //             },
        //         },
        //     },
        // ],
        maximumFileSizeToCacheInBytes: 5000000,
        mode: 'production',
        cleanupOutdatedCaches: true,
    },
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA(manifestForPlugin)],
});
