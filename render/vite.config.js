import path from 'node:path';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit({
      extensions: ['.svelte', '.svx'],
      preprocess: [mdsvex({ extensions: ['.svx'], layout: { runbook: path.resolve('src/lib/layouts/runbook.svelte') } })],
      adapter: adapter({ strict: false }), alias: { '#lib': 'src/lib' }, prerender: { entries: ['*'], handleHttpError: 'warn' },
    }),
  ],
});
