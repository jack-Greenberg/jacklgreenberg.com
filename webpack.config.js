const path = require('path');
const webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    mode: 'development',
    entry: './assets/js/index.jsx',
    output: {
        path: path.resolve(__dirname, 'static/js'),
        filename: 'index.js'
    },
    watch: true,
    plugins: [
        new WebpackNotifierPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    }
}
