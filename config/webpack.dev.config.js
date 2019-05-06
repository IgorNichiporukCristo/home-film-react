const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(require('./webpack.global.config'), {
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.js',
        publicPath: '/',
    },
    entry: [     
        'react-hot-loader/patch', 
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', 
        './src/index.jsx', 
        
    ],   
    devServer: {
        overlay: true,
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
          { 
            test: /\.(css|sass|scss)$/,
            exclude: /node_modules/,
            loader: [ 'css-hot-loader','style-loader', 'css-loader','sass-loader']
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
          }
        ],
      },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    
})