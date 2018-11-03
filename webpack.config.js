const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: "./js/app.js",
  output: {
    path: path.resolve(__dirname, "js"),
    filename: "out.js"
  },
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 7777,
      server: "./",
      files: ["./css/style.css", "./index.html"]
    })
  ]
};
