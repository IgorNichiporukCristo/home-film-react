const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const Fiber = require('fibers')

module.exports = {
    mode: 'development',
    entry: 
    [   'webpack-hot-middleware/client',
        './src/index.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
       devServer: {
        overlay: true
    },   
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use :{
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", 
                "css-loader", 
                "sass-loader" 
            ]
        }]
    }
}