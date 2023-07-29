const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: { bundle: "./src/index.js" },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000/'
    },
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,``
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@emotion"]
          },
        },
      },

      {
        test: /\.[sac]ss|css$/i,
        use: [
          // // Creates `style` nodes from JS strings
          // "style-loader",
          // // Translates CSS into CommonJS
          // "css-loader",
          // // Compiles Sass to CSS
          // "sass-loader",
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'sass-loader',

        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
