// inject bundle.js into the body of the html
const HtmlWebpackPlugin = require('html-webpack-plugin');
const injectConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  context: `${__dirname}/app`,
  // bundling all file associated in ./index.js
  entry: './index.js',
  // where the bundle files will be located
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  module: {
    // loaders are used to transform es6 and other code
    //  to readable syntax
     loaders: [
       { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
       { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
     ]
  },
  plugins: [injectConfig]
}
