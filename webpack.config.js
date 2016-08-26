const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');

// Plugins being used in the webpack build process.
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var moduleConfig = {
  loaders: [
    { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    { test: /\.s?css$/, loader: ExtractTextPlugin.extract(['css?-url', 'sass']) },
    { test: /\.html$/, loader: 'html' },
    { test: /\.svg$/, loader: 'svg-inline' }
  ]
};

module.exports = {
  entry: {
    'core': './frontend',
    'core.min': './frontend'
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: moduleConfig,
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      include: /\.min\.js$/
    })
  ],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/@treehouse/ui/src'),
      path.resolve(__dirname, './node_modules/animate.css/source'),
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ],
    outputStyle: 'expanded'
  }
};
