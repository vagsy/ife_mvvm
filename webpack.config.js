{
	"name": "my-san-app",
    "scripts": {
        "dev": "NODE_ENV=development webpack-dev-server --config webpack.config.js",
        "build": "NODE_ENV=production webpack --config webpack.config.js"
    }
    module: {
        loaders: [
            {
                test: /\.san$/,
                loader: 'san-loader'
            }
        ]
    },
    resolve: {
        alias: {
            san: process.env.NODE_ENV === 'production'
                ? 'san/dist/san.js'
                : 'san/dist/san.dev.js'
        }
    }
}