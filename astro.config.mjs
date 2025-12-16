import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import reactI18next from 'astro-react-i18next';

export default defineConfig({
  site: 'https://mikupush.com',
  integrations: [
    react(),
    tailwind(),
    reactI18next({
      defaultLocale: "en",
      locales: ["en", "es"],
    })
  ],
});
