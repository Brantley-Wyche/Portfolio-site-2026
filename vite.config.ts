import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { siteMetadata } from './build/site-metadata.ts';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  return {
    plugins: [
      react(),
      tailwindcss(),
      { name: 'portfolio-metadata', transformIndexHtml: () => siteMetadata(env.VITE_SITE_URL) },
    ],
    server: { port: process.env.PORT ? Number(process.env.PORT) : 5173 },
  };
});
