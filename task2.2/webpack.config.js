const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname,'build'),
		filename: 'bundle.js'//打包后的文件名
	},
   	module: {
        rules: [
            {
                test: /\.san$/,
                loader: 'san-loader',
                exclude: /node_modules/,//不扫描node_modules里面的文件
                query: {
                    presets: ['es2015','stage-2']
                }
            },
            //处理html模板
            {
               test: /\.html$/,
               loader: 'html-loader'
           },
           //如果加载的模块的文件名是以.js结尾的话，用babel来加载
            //还要为babel配置三个预设，分别编译es6 es7
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,//不扫描node_modules里面的文件
                query: {
                presets: ["es2015", "stage-2"]
            }},
            //如果要加载的模块是以.css结尾的话，使用css style loader
            {
                test: /\.css$/,
                loaders:["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png|gif|eot|svg|woff|woff2|ttf|)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".san"],
        alias: {
            san: process.env.NODE_ENV === 'production'
                ? 'san/dist/san.js'
                : 'san/dist/san.dev.js'
        }
    },
    //插件
	plugins:[
		//用来自动产出html文件，并且向里面插入打包后的js文件
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
};