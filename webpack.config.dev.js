const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: {
		main: [
			"./src/index.js",
			"./src/css/style.css",
			"./src/css/tictac.css",
			"./src/css/start-modal.css",
			"./src/css/portatil.css",
			"./src/css/tablet768.css",
			"./src/css/size628.css",
		],
	},
	resolve: {
		extensions: [".js"],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		clean: true,
		assetModuleFilename: "./assets/[name][ext]",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				type: "asset/resource",
			},
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: "/src/index.html",
			filename: "./index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "./assets/[name].css",
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		open: true,
	},
};
