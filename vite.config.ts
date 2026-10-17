import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content: string, filename: string) =>
          filename.includes("/src/styles/")
            ? content
            : `@use "@/styles/variables" as *;\n@use "@/styles/mixins" as *;\n${content}`,
      },
    },
  },
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
});
