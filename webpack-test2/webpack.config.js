// webpack.config.js文件通常放在项目的根目录中，它本身也是一个标准的Commonjs规范的模块。
var webpack = require('webpack');
var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// entry: './src/script/main.js',
	// entry: ['./src/script/main.js', './src/script/a.js'],
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js',
		b: './src/script/b.js',
		c: './src/script/c.js'
	},
	output: {
		// path: './dist/js',
		// path: path.resolve(_dirname, './dist/js'),
		path: __dirname +'/dist',
		filename: 'js/[name]-[chunkhash].js',
		publicPath: 'http://cdn.com/'  //keyi manzu shangxianxuqiu
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'a.html',
			template: 'index.html',
			inject: false,   //keyiqianru 'head,body' biaoqian neibu
			title: 'this is a.html',
			date: new Date(),
			minify: {
				// removeComments: true,  delete zhushi
				// collapseWhitespace: true   //delete kongge
			},
			// chunks: ['main', 'a'],
			excludeChunks: ['b', 'c']
		}),

		new htmlWebpackPlugin({
			filename: 'b.html',
			template: 'index.html',
			inject: false,   //keyiqianru 'head,body' biaoqian neibu
			title: 'this is b.html',
			// chunks: ['b'],
			excludeChunks: ['a', 'c']
		}),

		new htmlWebpackPlugin({
			filename: 'c.html',
			template: 'index.html',
			inject: false,   //keyiqianru 'head,body' biaoqian neibu
			title: 'this is c.html',
			// chunks: ['c'],
			excludeChunks: ['a', 'b']
		})
	]
}