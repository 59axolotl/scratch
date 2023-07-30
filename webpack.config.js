const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: { bundle: './client/src/index.js' },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    proxy: {
      '/': 'http://localhost:3000/',
    },
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './client/src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@emotion'],
          },
        },
      },

      {
        test: /\.[sac]ss|css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader',
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader',
          },

          //before I added Bootstrap requirements:
          // process.env.NODE_ENV === 'production'
          //   ? MiniCssExtractPlugin.loader
          //   : 'style-loader',
          // 'css-loader',
          // 'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};


