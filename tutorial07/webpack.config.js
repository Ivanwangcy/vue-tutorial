var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');

//获取本地IP地址
//获取本地IP地址
var os = require('os');
var interfaces = os.networkInterfaces();
var IPv4 = '0.0.0.0'
for (var key in interfaces) {
  if(key == 'en0' || key == 'eth0' || os.platform() == 'win32'){
    interfaces[key].forEach(function(details){
      if (details.family == 'IPv4') {
        IPv4 = details.address;
      }
    });
    break;
  }
}
console.log('----------local IP: '+ IPv4);

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss',
        exclude: /node_modules/
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'style!css?importLoaders=1!postcss!sass',
        // loaders: ['style', ['css?sourceMap&importLoaders=1&-autoprefixer', 'postcss-loader?pack=cleaner', 'sass?sourceMap']]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 8192,
          name: '[name].[ext]?[hash:6]'
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: "file-loader"
      }
    ]
  },
  vue: {
  loaders: {
      sass: 'style!css!postcss!sass'
    }
  },
  // postcss: [ autoprefixer({ browsers: ['last 3 versions'] }) ],
  postcss: [ autoprefixer({browsers: ['iOS 7', 'Android 3']}) ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    // host: IPv4,
    // quiet: true,
    contentBase: './',
    //其实很简单的，只要配置这个参数就可以了, 代理服务器地址
    proxy: {
      '/user': {
        target: 'http://192.168.253.10:8080/',
        secure: false,
        changeOrigin: true
      },
      '/client': {
        target: 'http://testpdjm.jd.com/',
        secure: false,
        changeOrigin: true
      }
    }
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
