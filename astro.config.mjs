import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://mikupush.com',
  integrations: [
    react(),
    tailwind(),
  ],
});
