import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ← same as --host
    watch: {
      usePolling: true, // ← 🔥 enables file change detection in Docker on Windows
    },
  },
});
