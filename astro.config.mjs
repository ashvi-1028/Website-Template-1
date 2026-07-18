// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ashvi-1028.github.io",
  base: "/Website-Template-1/",
  vite: {
    server: {
      allowedHosts: ["ashvi-portfolio-https.loca.lt", "ashvi-portfolio-final.loca.lt"],
    },
    plugins: [tailwindcss()],
  },
});
