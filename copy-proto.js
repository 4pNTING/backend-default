const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "src", "proto");
const destDir = path.join(__dirname, "dist", "proto");

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy all .proto files
const files = fs.readdirSync(srcDir).filter((f) => f.endsWith(".proto"));
for (const file of files) {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, file);
  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied: ${file}`);
}

console.log(`Done — copied ${files.length} proto file(s) to dist/proto/`);