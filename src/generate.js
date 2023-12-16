const fs = require("fs");

const minimalDark = require("./minimal-dark");

const DIST_DIR = "./dist";
const THEMES_DIR = "./themes";
const THEMES_POSTFIX = "-color-theme.json";

fs.mkdirSync(DIST_DIR, { recursive: true });
fs.mkdirSync(THEMES_DIR, { recursive: true });

fs.writeFileSync(
  `${THEMES_DIR}/Minimal Dark${THEMES_POSTFIX}`,
  JSON.stringify(minimalDark.generate())
);
