import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGithubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGithubPages ? '/portfolio-personal/' : '/',
  integrations: [tailwind()],
});