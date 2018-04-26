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
            }
        ]
    },
    resolve: {
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