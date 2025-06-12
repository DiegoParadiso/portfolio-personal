import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGithubPages = process.env.DEPLOY_ENV === 'github';

export default defineConfig({
  base: isGithubPages ? '/portfolio-personal/' : '/',
  integrations: [tailwind()]
});