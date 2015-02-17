module.exports = {
  cache: true,
  entry: './src/js/app',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};
