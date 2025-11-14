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
        target: 'https://flexflow-ai.onrender.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '') 
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
