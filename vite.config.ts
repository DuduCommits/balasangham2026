// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "node:fs";
import path from "node:path";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Optimize the production build for Vercel hosting.
  nitro: {
    preset: "vercel",
    hooks: {
      compiled: (nitro) => {
        // Fix for Nitro 3 beta exporting an object instead of a function for Vercel Web Streams
        const indexPath = path.resolve(nitro.options.output.serverDir, "index.mjs");
        if (fs.existsSync(indexPath)) {
          let content = fs.readFileSync(indexPath, "utf-8");
          content = content.replace(
            "export { vercel_web_default as default };",
            "export default function(req, ctx) { return vercel_web_default.fetch(req, ctx); }"
          );
          fs.writeFileSync(indexPath, content);
        }
      },
    },
  },
});
