// Convert images to WebP for the site.
//
// Usage:
//   node scripts/optimize-images.js <input-file-or-folder> [max-width]
//
// Writes a .webp next to each source image (max-width defaults to 2560,
// quality 80). Drop new work photos in, run this, then reference the
// generated .webp paths in lib/works.js.
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const input = process.argv[2];
const maxWidth = Number(process.argv[3]) || 2560;

if (!input) {
  console.error("Usage: node scripts/optimize-images.js <file-or-folder> [max-width]");
  process.exit(1);
}

const exts = new Set([".jpg", ".jpeg", ".png", ".tif", ".tiff"]);

const files = fs.statSync(input).isDirectory()
  ? fs
      .readdirSync(input)
      .filter((name) => exts.has(path.extname(name).toLowerCase()))
      .map((name) => path.join(input, name))
  : [input];

(async () => {
  for (const file of files) {
    const dest = file.replace(/\.[^.]+$/, ".webp");
    const inSize = fs.statSync(file).size;
    await sharp(file)
      .rotate()
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(dest);
    const outSize = fs.statSync(dest).size;
    console.log(
      `${path.basename(file)} -> ${path.basename(dest)}: ` +
        `${(inSize / 1048576).toFixed(1)}MB -> ${(outSize / 1024).toFixed(0)}KB`
    );
  }
})();
