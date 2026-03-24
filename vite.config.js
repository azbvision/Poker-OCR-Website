import { defineConfig } from 'vite';

// GitHub Pages: project sites live at /<repo>/; user/org site repo *.github.io uses /
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repo.endsWith('.github.io');
const defaultPagesBase =
  process.env.CI && repo && !isUserSite ? `/${repo}/` : '/';
const base = process.env.VITE_BASE_PATH || defaultPagesBase;

export default defineConfig({
  base,
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html',
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
