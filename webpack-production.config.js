const webpack = require("webpack");
const path = require("path");

const config = {
	mode: "production",
	entry: {
		ReactTags: path.join(__dirname, "src/components/ReactTags.js"),
	},
	output: {
		path: path.resolve(__dirname, "dist"), // Path of output file
		filename: "[name].min.mjs", // Changed to mjs extension
		libraryTarget: "umd",
		library: "ReactTags",
	},
	externals: {
		react: "React",
		"react-dom": "ReactDOM",
		"react-dnd": "ReactDnD",
		"react-dnd-html5-backend": "ReactDnDHTML5Backend",
	},
	plugins: [new webpack.NoEmitOnErrorsPlugin()],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader",
					},
				],
				exclude: /node_modules/,
			},
		],
	},
	optimization: {
		minimize: true,
	},
};

module.exports = config;
