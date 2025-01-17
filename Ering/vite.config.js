import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Configura @ como alias para src
    },
  },
  server: {
    host: true, // Permite accesos externos
    port: 5173, // Asegúrate de que el puerto sea accesible
  },
});
