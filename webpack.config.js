const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.js',
        publicPath: '/',
    },
    entry: [       
        './src/index.js',
        'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false'
    ],
    devServer: {
        overlay: true,
        contentBase: './dist',
        hot: true
    },   
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", 
                    "css-loader", 
                    "sass-loader" 
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ] 
}