const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
        }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
        title: "Output Management"
        })
    ]
};
