import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { gzipSync, constants as zlibConstants } from "node:zlib";

const ASSET_PATHS = [
  "index.html",
  "register.html",
  "admin.html",
  "app.js",
  "admin-app.js",
  "register-app.js",
  "portal-copy.js",
  "styles/app.css",
  "data/portal-demo-data.js",
  "favicon.svg",
];

for (const relativePath of ASSET_PATHS) {
  const absolutePath = resolve(relativePath);
  if (!existsSync(absolutePath)) {
    continue;
  }

  const source = readFileSync(absolutePath);
  const compressed = gzipSync(source, { level: zlibConstants.Z_BEST_COMPRESSION });
  const outputPath = `${absolutePath}.gz`;

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, compressed);

  console.log(`${relativePath}: ${source.length} -> ${compressed.length}`);
}
