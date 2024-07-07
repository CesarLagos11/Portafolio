import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        // Opciones de LESS aquí
      },
    },
  },
  plugins: [purgecss()],
});
