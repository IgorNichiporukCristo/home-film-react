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
        'webpack/hot/only-dev-server', 
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
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
           test: /\.(png|svg|jpg|gif)$/,
           use: ['file-loader']
          }
        ],
      },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    
})