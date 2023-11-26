const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isEnvDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
	devtool: isEnvDevelopment ? 'eval-source-map' : undefined,
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'bundle.css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
};
