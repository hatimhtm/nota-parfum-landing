import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Defaults target GitHub Pages at hatimhtm.github.io/nota-parfum-landing.
// Override SITE / BASE_PATH for alternate hosts (Vercel, custom domain, etc.).
const site = process.env.SITE ?? "https://hatimhtm.github.io";
const base = process.env.BASE_PATH ?? "/nota-parfum-landing";

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
