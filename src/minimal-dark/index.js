const fs = require("fs");

const theme = JSON.parse(fs.readFileSync("src/minimal-dark/minimal-dark.json", "utf-8"));

exports.generate = function () {
  return theme;
};
