import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { routeSeoMap } from './src/data/routeSeoData.js';

/**
 * Custom Vite Dev Server plugin to transform HTML response for requested routes
 * ensuring view-source:http://localhost:5173/about returns the exact page-specific metadata.
 */
function seoDevPlugin() {
  return {
    name: 'vite-seo-dev-plugin',
    transformIndexHtml(html, ctx) {
      const urlPath = ctx.originalUrl ? ctx.originalUrl.split('?')[0].replace(/^\//, '').replace(/\/$/, '') : '';
      const meta = routeSeoMap[urlPath] || routeSeoMap[''];
      if (!meta) return html;

      return html
        .replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`)
        .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${meta.description}" />`)
        .replace(/<meta name="keywords" content=".*?" \/>/s, `<meta name="keywords" content="${meta.keywords}" />`);
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoDevPlugin()],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) {
              return 'vendor-icons';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-animation';
            }
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom') || id.includes('react-helmet-async')) {
              return 'vendor-react';
            }
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
