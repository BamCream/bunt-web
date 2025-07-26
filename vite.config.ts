import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content, filename) => {
          if (filename.endsWith('global.scss')) {
            return content;
          }
          return `@use "src/styles/global.scss" as *;\n${content}`;
        }
      }
    }
  },
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "src")
    }
  }
});