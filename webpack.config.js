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
		historyApiFallback: true,
		// color: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					plugins: [["import", {
						"libraryName": "antd",
						"libraryDirectory": "es",
						"style": "css"  // style: true 会加载 less 文件
					}]]
					// 	presets: ['@babel/react', '@babel/stage-2']
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.less$/,
				// loader: "style-loader!css-loader!less-loader",
				use: [
					'style-loader',
					'css-loader',
					{loader: 'less-loader', options: {lessOptions: {javascriptEnabled: true}}}
				]
			},
			{
				test: /\.styl(us)?$/,
				loader: "style-loader!css-loader!stylus-loader"
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				// exclude: [resolve('src/icons')],
				options: {
					limit: 10000,
					name: path.join('static', 'img/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: path.join('static', 'media/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: path.join('static', 'fonts/[name].[hash:7].[ext]')
				}
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
