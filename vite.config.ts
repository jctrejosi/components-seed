import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: 'bundle',
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "components-seed",
      fileName: (format) => `components-seed.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
