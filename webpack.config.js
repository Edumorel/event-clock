const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const rulesJS = {
	test: /\.js|.jsx$/,
	loader: 'babel-loader',
	options: {
		presets: [
			[
				'@babel/preset-react',
				{
					runtime: 'automatic',
				},
			],
		],
	},
}

const rulesCSS = {
	test: /\.css$/,
	use: ['style-loader', 'css-loader'],
}

const rules = [rulesJS, rulesCSS]

module.exports = {
	entry: './src/main.jsx',
	module: {
		rules,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
	devServer: {
		port: 3000,
	},
}
