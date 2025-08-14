import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    allowedHosts: true,
    // port: 4321, // or whatever port you run Astro on
    host: true, // important: listen on all interfaces
  },
});
