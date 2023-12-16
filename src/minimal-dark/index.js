const fs = require("fs");

const shared = require("../shared");

const theme = shared.jsoncParse(fs.readFileSync("src/minimal-dark/minimal-dark.json", "utf-8"));

exports.generate = () => {
  const obj = {
    ...shared.dependencies.dark_vs,
    ...shared.dependencies.dark_plus,
    ...theme,

    colors: {
      ...shared.dependencies.dark_vs.colors,
      ...shared.dependencies.dark_plus.colors,
      ...theme.colors,
    },

    tokenColors: [
      ...shared.dependencies.dark_vs.tokenColors,
      ...shared.dependencies.dark_plus.tokenColors,
      ...theme.tokenColors,
    ],

    semanticTokenColors: {
      ...shared.dependencies.dark_vs.semanticTokenColors,
      ...shared.dependencies.dark_plus.semanticTokenColors,
      ...theme.semanticTokenColors,
    },
  };

  delete obj.include;
  delete obj.$schema;

  return obj;
};
