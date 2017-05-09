const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );

module.exports = {
	entry: "./index.js",
	output: {
		filename: "./dist/bundle.js"
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}],
		rules: [{
			test: /\.css$/,
			// use: [ 'style-loader', 'css-loader' ],
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		}]
	},
	resolve: {
		extensions: [ ".js" ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template:	"./html.html",
			inject: 	"body",
			filename:	"index.html"
		}),
		new ExtractTextPlugin( "./dist/styles.css" ),
	]
};
