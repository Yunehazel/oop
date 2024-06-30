
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index : './app/src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  mode: 'development'
};