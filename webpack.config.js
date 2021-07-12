const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" }, // use babel after typescript transpiles to target es6
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true, // fork-ts-checker-webpack-plugin is used for type checking
              logLevel: "info",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ForkTsCheckerWebpackPlugin({
      // this is much faster and allows ts to typecheck in the background and not block render
      typescript: {
        configFile: path.resolve(__dirname, "./tsconfig.json"),
        mode: "write-references",
      },
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    contentBase: "./dist",
  },
  optimization: {
    splitChunks: {
      chunks: "initial", // change to initial so async chunks control their size and dependencies
    },
  },
};
