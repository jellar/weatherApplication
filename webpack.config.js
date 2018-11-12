const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
        //,new ExtractTextPlugin("app.css")
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                //,loader: ExtractTextPlugin.extract("css")
            }
            // ,{
            //     test: /\.js$/,
            //     use: {
            //         loader: 'babel-loader'
            //     },
            //     exclude: /node_modules/
            // }
        ]
    }
}