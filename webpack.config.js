const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, '/build'),
      filename: 'bundle.js'
   },
   devServer: {
      inline: true,
      port: 8001,
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['@babel/preset-env', '@babel/preset-react']
            }
         },
         {
           test: /\.(png|svg|jpg|gif)$/,
           use: [
             'file-loader',
           ],
         },
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './public/index.html'
      })
   ]
}