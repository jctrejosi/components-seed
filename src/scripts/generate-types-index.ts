import fs from "fs";
import { glob } from "glob";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pattern = path.resolve(__dirname, "../components/**/**/**/types.ts");
const files = glob.sync(pattern);

const exports = files.map((file) => {
  const relativePath = path.relative(path.resolve(__dirname, "../types"), file);
  const importPath = relativePath.replace(/\.ts$/, "").replace(/\\/g, "/");
  return `export * from "${importPath}";`;
});

fs.writeFileSync(
  path.resolve(__dirname, "../types/index.ts"),
  exports.join("\n") + "\n"
);
