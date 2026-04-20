import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api/blogs": {
        target: "https://5mmzndyrk3gouwywlnlaa4gae40vclhj.lambda-url.ap-south-1.on.aws",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api\/blogs/, "/"),
      },
    },
  },
});
