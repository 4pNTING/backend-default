const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src', 'proto');
const dest = path.join(__dirname, 'dist', 'proto');

function copyFolderSync(from, to) {
    if (!fs.existsSync(to)) {
        fs.mkdirSync(to, { recursive: true });
    }
    fs.readdirSync(from).forEach(element => {
        const stat = fs.lstatSync(path.join(from, element));
        if (stat.isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else if (stat.isDirectory()) {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
}

try {
    copyFolderSync(src, dest);
    console.log('✅ Proto files copied successfully (Cross-Platform).');
} catch (err) {
    console.error('❌ Error copying proto files:', err);
    process.exit(1);
}
