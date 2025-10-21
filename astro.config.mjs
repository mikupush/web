import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mikupush.com',
  integrations: [
    react(),
    tailwind(),
    
    sitemap({
      i18n: {
        defaultLocale: 'en', 
        locales: {
          en: 'en-US',
          es: 'es-ES',
          fr: 'fr-CA',
        },
      },
    }),
  ],
});
