//webpack.config.js文件通常放在项目的根目录中，它本身也是一个标准的Commonjs规范的模块。
//package.json  //npm init
//其余需要npm install

var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: './src/app.js',
	output: {
		path: __dirname +'/dist',  //__dirname  jiejue  absolute address报错
		filename: 'js/[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.tpl$/,
				use: 'ejs-loader'
			},
			{
				test: /\.css$/,  //css and less  hunyong  @import 只需css添加importLoaders,less不用
				use: ['style-loader','css-loader?importLoaders=1','postcss-loader']
			},
			{
				test: /\.less$/,  //npm install less less-loader --save-dev
				use: ['style-loader','css-loader','postcss-loader','less-loader']  //从右往左 先把less解析成css，再加前缀
			},
			{
				test: /\.scss$/,  //npm install sass sass-loader --save-dev //npm install 报错缺少node-sass
				                  //cnpm install node-sass --save-dev
				use: ['style-loader','css-loader','postcss-loader','sass-loader']
			},
			{
				test: /\.js$/,                        //以.js结尾的
				use: 'babel-loader',                  //转码
				include: __dirname + '/src',          //包含
				exclude: __dirname + '/node_modules'  //除了之外
				// query: {
				// 	presets: ['latest'] or//['es2015']
				// }
				//npm install babel-preset-es2015
				//package.json中已指定
			},
			{
				test: /\.(png|jpg|gif|svg)$/i, //i  不区分大小写
				use: [
					'file-loader',
					'image-webpack-loader'
				]
				// use: 'file-loader',  //yekeyi  url-loader
				// query: {
				// 	limit: 20000,  //url-loader can base64
				// 	name: 'assets/[name]-[hash:5].[ext]'
				// }
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'  //注入 body
		})
	]
}

// npm run webpack
// 至于npm run webpack，是将webpack命令写入到package.json的scripts标签中去了
// test: 匹配要处理的文件格式，正则格式.(test是resouce的简写形式)
// enforce:加载器的执行顺序，不设置为正常执行。可选值 'pre|post' 前|后
// include:将要处理的目录包括进来
// exclude:排除不处理的文件目录，可以使数组或字符串正则格式
// issuer:条件的发起者
// loader:一个简写的rule.use，既然已经升级了 个人不建议继续使用
// loaders:一个数组结构rule.use的别名 同上
// oneOf：匹配规则时，只使用第一匹配的数组
// options|query：都是rule.use的简写 (保留了好多1的东西 有点用不惯)
// parser:解析器选项对象(暂时没用到过，东西很多 可以去官网看看)
// resource:与资源匹配的条件，可以使用正则。例子中匹配资源内部 含有app的文件 如 app.js | demoapp.js
// resourceQuery:与资源查询匹配的条件，匹配资源?后面的字段 如 app.js?userName
// use:一个数组结构用于作为程序解析器的入口路径 (真抱歉 我特么没办法好好get这个英文的真实意义)
// 我们就理解use用来作为引用加载器函数的入口配置吧
