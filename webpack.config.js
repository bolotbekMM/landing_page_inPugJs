const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    filename: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    assetModuleFilename: "[name][ext]",
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  devServer: {
    port: 9000,
    compress: true,
    hot: isDev,
    watchFiles: [
      "src/index.pug",
      "src/pug/servisesPage.pug",
      "src/pug/trainingsPage.pug",
      "src/pug/trainingDetailsPage.pug",
    ],
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  resolve: {
    extensions: [".js", ".json", "scss", "svg", " "],
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(scss)$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => {
                  [require("autoprefixer")];
                },
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: { minimum: false, outputStyle: "expanded" },
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        exclude: /(node_modules|bower_components)/,
        options: {
          pretty: true,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      title: "Bussiness LP",
      template: "./src/index.pug",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pug/servisesPage.pug",
      filename: "servisesPage.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pug/trainingsPage.pug",
      filename: "trainingsPage.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pug/trainingDetailsPage.pug",
      filename: "trainingDetailsPage.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets",
          to: "./assets",
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
