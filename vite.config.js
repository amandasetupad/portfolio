import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves dist/404.html for unknown paths such as /work/:slug,
// but the address bar stays on that path. A relative base (./assets/...) would
// then resolve under /work/ instead of the site root — on a user site or a
// project site. This script sets <base> before any relative URL is fetched.
const pagesBaseScript = [
  "<script>",
  "(function () {",
  "  var path = location.pathname;",
  '  var match = path.match(/^(.*)\\/work\\/[^/]+\\/?$/);',
  "  var base = match",
  '    ? (match[1] || "") + "/"',
  '    : path.endsWith("/")',
  "      ? path",
  '      : path.replace(/\\/[^/]*$/, "/");',
  '  document.write(\'<base href="\' + base.replace(/["\']/g, "") + \'">\');',
  "})();",
  "</script>",
].join("\n");

function githubPagesSpa() {
  let outDir = "";

  return {
    name: "github-pages-spa",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html.replace("<head>", `<head>\n    ${pagesBaseScript}`);
      },
    },
    // Public files are referenced as root paths in source ("/images/...").
    // Vite does not rewrite those strings. Make them relative so the <base>
    // tag resolves them on both a user site and a project site.
    generateBundle(_, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type !== "chunk") continue;
        file.code = file.code
          .replaceAll("`/images/", "`./images/")
          .replaceAll("`/placeholders/", "`./placeholders/")
          .replaceAll('"/images/', '"./images/')
          .replaceAll('"/placeholders/', '"./placeholders/')
          .replaceAll("'/images/", "'./images/")
          .replaceAll("'/placeholders/", "'./placeholders/");
      }
    },
    closeBundle() {
      const indexPath = path.join(outDir, "index.html");
      fs.copyFileSync(indexPath, path.join(outDir, "404.html"));
    },
  };
}

export default defineConfig({
  base: "./",
  plugins: [react(), githubPagesSpa()],
  server: {
    port: 5173,
    open: false,
  },
});
