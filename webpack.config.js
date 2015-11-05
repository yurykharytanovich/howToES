var path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './main.es',
    output: {
        path: path.join(__dirname, './build'),
        publicPath: "/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.es/, loader: 'babel-loader?stage=0&optional=runtime' },
            { test: /\.(sass|scss)$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!sass-loader') },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize') }
       ]
    },
    resolve : {
        extensions: ['', '.js', 'jsx', '.es', '.css', '.scss']
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};