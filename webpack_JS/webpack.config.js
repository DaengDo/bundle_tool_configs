const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

const config = {
  // name: '',
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "inline-source-map" : "hidden-source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@hooks": path.resolve(__dirname, "hooks"),
      "@components": path.resolve(__dirname, "components"),
      "@layouts": path.resolve(__dirname, "layouts"),
      "@pages": path.resolve(__dirname, "pages"),
      "@utils": path.resolve(__dirname, "utils"),
      "@typings": path.resolve(__dirname, "typings"),
    },
  },
  entry: {
    app: "./client.jsx",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["last 2 chrome versions"] },
                debug: isDevelopment,
              },
            ],
            "@babel/preset-react",
          ],
          env: {
            development: {
              plugins: [require.resolve("react-refresh/babel")],
            },
          },
        },
        exclude: path.join(__dirname, "node_modules"),
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? "development" : "production" }),
    new htmlWebpackPlugin({
      template: path.join(__dirname, "./index.html"),
      filename: "index.html",
    }),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist/",
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    // devMiddleware: { publicPath: '/dist/' },
    // static: { directory: path.resolve(__dirname) },
    proxy: {
      "/api": {
        target: "http://localhost:3005",
        changeOrigin: true,
      },
    },
  },
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new ESLintPlugin({ extensions: ["js", "mjs", "jsx"] }));
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
}
if (!isDevelopment && config.plugins) {
}

module.exports = config;
