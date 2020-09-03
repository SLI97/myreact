const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: {
		app: path.resolve(__dirname, "./src/main.jsx"),
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name]-[hash].js",
		publicPath: "/"
	},
	optimization: {},
	mode: "development",
	devServer: {
		host: "0.0.0.0",
		port: "8888",
		hot: true,
		quiet: true,
		clientLogLevel: "warning",
		// color: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				// query: {
				// 	plugins: ['transform-runtime'],
				// 	presets: ['@babel/react', '@babel/stage-2']
				// }
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./public/index.html"),
			title: "myreact"
		}),
		new webpack.HotModuleReplacementPlugin()

	],
	resolve: {
		extensions: [".js", ".json", ".jsx"],
		alias: {
			"@": path.resolve(__dirname, "./src"),
		}
	},
}
