//这个配置文件，起始就是一个Js文件

const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {
	VueLoaderPlugin
} = require('vue-loader')

module.exports = {
	//在配置文件中，需要手动指定 入口和出口
	//表示要webpack打包那个文件
	entry: path.join(__dirname, './src/main.js'),
	// mode:'none',
	output: { //输出文件的配置
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js' //指定 输出的文件名称
	},
	plugins: [
		new htmlWebpackPlugin({ //创建一个在内存中生成的html页面
			template: path.join(__dirname, './src/index.html'), //指定模板页面
			filename: 'index.html' //指定生成的页面名称

		}),
		new VueLoaderPlugin()

	],

	externals: {
		'mui': 'mui',

	},
	module: { //配置所有的第三方模块加载器
		rules: [{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}, //配置.css模块的第三方
			{
				test: /\.(jpg|png|gif)$/,
				use: 'url-loader?limit=7633'
			},
			//limit 给定的值是图片的大小
			//如果我们的应用的图片大于和等于给定的值，则不会转为base4字符串的
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}, {
				test: /\.vue$/,
				use: 'vue-loader'
			}, {
				test: /\.(ttf|eot|svg|woff|woff2)$/,
				use: 'url-loader'
			}, //处理字体
			{
				test: /\.(png|jpg|gif|ttf)$/,
				use: 'url-loader'
			}

		]
	},
	resolve: { //设置导入Vue包的路径
		alias: {
			"vue$": "vue/dist/vue.js"
		},
		// extensions: ['.js', '.vue']
	}

	// },
	// 	devServer: {
	// 		open: true,
	// 		port: 3000, //设置运行端口
	// 		contentBase: 'src',
	// 		hot: true,
	// 	}
}
//当我们在控制台，直接输入webpack 命令的时候
//1.webpack 发现 我们并没有通过命令的形式，给他指定一个入口和出口
//2. webpack 回去查找一个webpack.config.js的配置文件



// 使用webpack-dev-server 这个工具自动打包
// 1.运行npm i webpack-dev-server -D 来安装到项目本地来发依赖
//2.工具的用法 和webpack 命令的用法，完全一样
// webpack-dev-server 这个工具像正常运行，要求本地项目中，必须安装webpack
// 3.在本地项目中安装的webpack-dev-server（不是全局安装） 无法再终端中运行
// webpack-dev-server 打包好的bundle.js 直接托管到了电脑的内存中