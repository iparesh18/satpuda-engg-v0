import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const projectRoot = path.resolve(process.cwd());
const publicDir = path.join(projectRoot, "public");
const sourceDirs = [path.join(projectRoot, "components"), path.join(projectRoot, "src")];
const sourceFiles = [path.join(projectRoot, "index.html")];
const sourceExtensions = new Set([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".html", ".css"]);

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(rootDir) {
  const files = [];
  const entries = await fs.readdir(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === "node_modules") continue;
    const entryPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(entryPath)));
      continue;
    }
    files.push(entryPath);
  }

  return files;
}

async function convertPngAssets() {
  if (!(await pathExists(publicDir))) {
    return [];
  }

  const converted = [];
  const publicFiles = await collectFiles(publicDir);

  for (const filePath of publicFiles) {
    if (path.extname(filePath).toLowerCase() !== ".png") {
      continue;
    }

    const webpPath = filePath.slice(0, -".png".length) + ".webp";
    await sharp(filePath).webp({ quality: 82 }).toFile(webpPath);
    await fs.rm(filePath);

    const publicRelative = path.relative(publicDir, filePath).split(path.sep).join("/");
    converted.push({
      from: `/${publicRelative}`,
      to: `/${publicRelative.slice(0, -".png".length)}.webp`,
      file: publicRelative
    });
  }

  return converted;
}

async function updateSourceReferences(converted) {
  const files = [];

  for (const dir of sourceDirs) {
    if (await pathExists(dir)) {
      files.push(...(await collectFiles(dir)));
    }
  }
  for (const filePath of sourceFiles) {
    if (await pathExists(filePath)) {
      files.push(filePath);
    }
  }

  for (const filePath of files) {
    if (!sourceExtensions.has(path.extname(filePath).toLowerCase())) {
      continue;
    }

    let content = await fs.readFile(filePath, "utf8");
    const original = content;
    for (const { from, to } of converted) {
      content = content.split(from).join(to);
    }
    if (content !== original) {
      await fs.writeFile(filePath, content, "utf8");
    }
  }
}

async function main() {
  const converted = await convertPngAssets();
  await updateSourceReferences(converted);
  console.log(`Converted ${converted.length} PNG asset(s) to WebP:`);
  for (const { file } of converted) {
    console.log(`  - ${file}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
