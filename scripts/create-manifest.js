const fs = require("fs");
const path = require("path");

const nextDir = path.join(__dirname, "..", ".next");
const manifestPath = path.join(nextDir, "build-manifest.json");

// Ensure the .next directory exists
if (!fs.existsSync(nextDir)) {
    fs.mkdirSync(nextDir, { recursive: true });
}

if (!fs.existsSync(manifestPath)) {
    console.log("build-manifest.json not found. Creating a dummy manifest...");
    fs.writeFileSync(manifestPath, JSON.stringify({}));
} else {
    console.log("build-manifest.json found.");
}
