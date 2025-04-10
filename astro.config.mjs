// @ts-check
import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
  adapter: vercelStatic(),
  integrations: [svelte()]
});