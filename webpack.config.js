const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".es6", ".js", ".jsx"],
    modules: ["node_modules"]
  },
  module: {
    loaders: [
      {
        test: /\.js$|\.es6|\.jsx$/,
        loaders: ["babel-loader"],
        exclude: "/node_modules"
      },
      {
        test: /\.scss$|\.css$/,
        loader: "style-loader!css-loader!scss-loader!resolve-url"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/index.html"
    })
  ]
};
