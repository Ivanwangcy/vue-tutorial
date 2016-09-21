const path = require('path');
const webpack = require('webpack');
const vueConfig = require('./vue-loader.config');


module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/client-entry.js',
    vendor: [
      'vue', // vue 2.0 核心代码
      'vue-router', // vue 路由
      'vuex', // 单项数据流 flux 框架
      'firebase', //
      'lru-cache', //
      'es6-promise' // ES6 promise 兼容库
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'client-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: vueConfig
    })
  ]
};
