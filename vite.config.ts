import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import legacy from "@vitejs/plugin-legacy";

const legacyPluginOptions = {
  modernTargets: "since 2023-01-01, not dead",
  modernPolyfills: true,
  renderLegacyChunks: false,
} as const;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), legacy(legacyPluginOptions)],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
