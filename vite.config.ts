import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "c24_ui_buy_car",
      filename: "remoteEntry.js",
      exposes: {
        "./BuyCar": "./src/components/BuyCar",
        "./BuyCarApp": "./src/BuyCarApp",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-dom/": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
      },
    }),
  ],

  server: {
    port: 3001,
    origin: "http://localhost:3001",
  },

  preview: {
    port: 3001,
  },

  build: {
    target: "chrome89",
  },
});
