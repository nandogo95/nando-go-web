// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nando-go.com',
  // Direcciones con barra final, igual que en WordPress (nando-go.com/house-in-bale/)
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
});
