module.exports = {
  entry: './example.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_module/
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: /node_module/
      }
    ]
  }
}
