import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const projectRoot = path.resolve(process.cwd());
const publicDir = path.join(projectRoot, "public");
const sourceDirs = [path.join(projectRoot, "components"), path.join(projectRoot, "src")];
const sourceFiles = [path.join(projectRoot, "index.html")];
const rasterExtensions = new Set([".png", ".jpg", ".jpeg", ".bmp", ".tif", ".tiff"]);
const sourceExtensions = new Set([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".html"]);

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
    const entryPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(entryPath)));
      continue;
    }

    files.push(entryPath);
  }

  return files;
}

async function convertRasterAssets() {
  if (!(await pathExists(publicDir))) {
    return [];
  }

  const convertedUrls = [];
  const publicFiles = await collectFiles(publicDir);

  for (const filePath of publicFiles) {
    const extension = path.extname(filePath).toLowerCase();
    if (!rasterExtensions.has(extension)) {
      continue;
    }

    const webpPath = filePath.slice(0, -extension.length) + ".webp";
    await sharp(filePath).webp({ quality: 82 }).toFile(webpPath);

    const publicRelative = path.relative(publicDir, filePath).split(path.sep).join("/");
    convertedUrls.push({
      from: `/${publicRelative}`,
      to: `/${publicRelative.slice(0, -extension.length)}.webp`
    });
  }

  return convertedUrls;
}

function addLazyLoadingToImages(content) {
  return content.replace(/<img\b[\s\S]*?\/>/g, (tag) => {
    if (/\bloading\s*=\s*['"]/i.test(tag)) {
      return tag;
    }

    return tag.replace(/\s*\/>,?$/, ' loading="lazy" />');
  });
}

async function updateSourceFiles(convertedUrls) {
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
    const extension = path.extname(filePath).toLowerCase();
    if (!sourceExtensions.has(extension)) {
      continue;
    }

    let content = await fs.readFile(filePath, "utf8");
    const originalContent = content;

    for (const { from, to } of convertedUrls) {
      content = content.split(from).join(to);
    }

    if (extension !== ".html") {
      content = addLazyLoadingToImages(content);
    }

    if (content !== originalContent) {
      await fs.writeFile(filePath, content, "utf8");
    }
  }
}

async function main() {
  const convertedUrls = await convertRasterAssets();
  await updateSourceFiles(convertedUrls);
  console.log(`Converted ${convertedUrls.length} image assets to WebP and updated frontend references.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});