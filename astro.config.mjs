import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import reactI18next from 'astro-react-i18next';

export default defineConfig({
  site: 'https://mikupush.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    reactI18next({
      defaultLocale: "en",
      locales: ["en", "es"],
    })
  ],
});
