// https://vitejs.dev/config/
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import eslintPlugin from "vite-plugin-eslint";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  root: "./",
  build: {
    rollupOptions: {},
    // Relative to the root
    outDir: "./dist",
  },
  plugins: [
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: ["**/*.tsx", "**/*.ts"],
      babel: {
        plugins: [],
      },
    }),
    createHtmlPlugin({
      template: "index.html",
    }),
    // eslintPlugin(),
  ],
  resolve: {
    alias: {
      "@hooks": path.resolve(__dirname, "hooks"),
      "@components": path.resolve(__dirname, "components"),
      "@layouts": path.resolve(__dirname, "layouts"),
      "@pages": path.resolve(__dirname, "pages"),
      "@utils": path.resolve(__dirname, "utils"),
      "@typings": path.resolve(__dirname, "typings"),
    },
  },
  publicDir: [], // 정적 파일 빌드할때 넣고 싶으면 경로 삽입
});
