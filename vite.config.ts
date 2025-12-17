import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    react({ babel: { plugins: [["babel-plugin-react-compiler"]] } }),
    basicSsl(),
  ],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
