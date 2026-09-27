import { resolve } from "node:path";
import { defineConfig } from "vite";

// 페이지를 추가하면 여기에도 한 줄 추가해야 빌드에 포함돼요.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        claudeCode: resolve(import.meta.dirname, "claude-code.html"),
        heatmap: resolve(import.meta.dirname, "heatmap.html"),
        myApproach: resolve(import.meta.dirname, "my-approach.html"),
      },
    },
  },
});
