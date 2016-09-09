var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './src',
    },
    output: {
        path: './dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist/'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015'] } },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ],
    // watch: true,
    // devtool: 'cheap-module-eval-source-map'
};