const fs = require("fs");

const minimalDark = require("./minimal-dark");

const DIST_DIR = "./dist";
const THEMES_DIR = "./themes";

fs.mkdirSync(DIST_DIR, { recursive: true });
fs.mkdirSync(THEMES_DIR, { recursive: true });

fs.writeFileSync(`${THEMES_DIR}/minimal-dark.json`, JSON.stringify(minimalDark.generate()));
