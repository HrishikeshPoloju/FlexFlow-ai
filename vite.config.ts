import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE_URL || 'https://flexflow-ai.onrender.com',
        changeOrigin: true,
        secure: false,
        // Keep /api in path since backend routes are /api/chat, /api/health, etc.
      }
    }
  },
  // For production build
  define: {
    'import.meta.env.VITE_API_BASE_URL': JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://flexflow-ai.onrender.com' : '/api')
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
