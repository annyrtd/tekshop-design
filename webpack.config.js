var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var csso = require('postcss-csso');

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
            { test: /\.s?css$/, loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader']) }
        ]

    },
    postcss: function() {
        return [autoprefixer, csso]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ],
    // watch: true,
    // devtool: 'cheap-module-eval-source-map'
};