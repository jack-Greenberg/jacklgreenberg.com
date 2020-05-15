const path = require('path');
const webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var WebpackNotifierPlugin = require('webpack-notifier');

var baseConfig = {};

var serverConfig = webpackMerge(baseConfig, {
    target: 'node',
    mode: 'development',
    entry: './server/server.js',
    output: {
        path: path.resolve(__dirname, 'server/build'),
        filename: 'server.js'
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
});

var clientConfig = webpackMerge(baseConfig, {
    target: 'web',
    mode: 'development',
    entry: './admin/index.jsx',
    output: {
        path: path.resolve(__dirname, 'static/js'),
        filename: 'client.js'
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
});

module.exports = [ serverConfig, clientConfig ];
// entry: {
//     admin: './admin/index.jsx',
//     api: './admin/api/server.js'
// },
// output: {
//     path: path.resolve(__dirname, 'static/js'),
//     filename: '[name].js'
// },
