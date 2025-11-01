import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "_site/assets/js",
    emptyOutDir: false,
    rollupOptions: {
      input: "src/assets/js/main.js",
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      },
    },
  },
});
