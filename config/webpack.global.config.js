const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports =  {
    resolve: {
        extensions: ['.js', '.jsx', 'scss'],
    },
    module: {
    rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                  'babel-loader',
                  'eslint-loader',
                ],
                
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false,
          }),
        new webpack.DefinePlugin({ 
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), 
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html',
              }), 
    ]   
}