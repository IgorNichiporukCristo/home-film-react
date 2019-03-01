const merge = require('webpack-merge');
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = merge(require('./webpack.global.config'), {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'web',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true 
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: [{loader: "url-loader"}]
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
})