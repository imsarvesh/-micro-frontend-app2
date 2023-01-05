const deps = require("./package.json").dependencies;

module.exports = {
  name: "app2",
  exposes: {
    "./Layout": "./src/Components/Layout",
    "./Button": "./src/Components/Button",
    "./Calendar": "./src/Components/Calendar",
    "./Meetings": "./src/Components/Meetings",
    "./Header": "./src/Components/Header",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
