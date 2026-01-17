import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "popup.html"),
        content: resolve(__dirname, "src/content/contentScript.js")
      },
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === "content") {
            return "content/contentScript.js";
          }
          return "assets/[name].js";
        }
      }
    }
  }
});
