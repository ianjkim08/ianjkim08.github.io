// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ianjkim08.github.io",
  integrations: [sitemap()],
  image: {
    domains: ["cdn.jsdelivr.net"],
  },
});
