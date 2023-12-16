const fs = require("fs");
const jsoncParser = require("jsonc-parser");

exports.jsoncParse = (text) => jsoncParser.parse(text);

exports.dependencies = {
  dark_vs: this.jsoncParse(fs.readFileSync("dependencies/dark_vs.json", "utf-8")),
  dark_plus: this.jsoncParse(fs.readFileSync("dependencies/dark_plus.json", "utf-8")),
};
