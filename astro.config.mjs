// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

import wasm from "vite-plugin-wasm";

import topLevelAwait from "vite-plugin-top-level-await";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue()],

  vite: { 
    optimizeDeps: {
      exclude: ['rust-utility-tools'],
    },
    plugins: [wasm(), topLevelAwait(), tailwindcss()],
  }
});