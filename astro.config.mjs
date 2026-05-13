import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Vercel: serves from /. Override SITE / BASE_PATH for alternate hosts (GH Pages, etc.).
const site = process.env.SITE ?? "https://nota-parfum-landing.vercel.app";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
