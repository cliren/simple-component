var gulp = require('gulp');
var webpack = require("webpack");
var webpackConfig = require("../../webpack.config.js");
var bundleLogger = require('../util/bundleLogger');

gulp.task("webpack:build", function(callback) {
  bundleLogger.start('PrecisionMap');

  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = [
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new webpack.optimize.DedupePlugin()
    /*,
     new webpack.optimize.UglifyJsPlugin()*/
  ];

  // run webpack
  webpack(myConfig, function(err, stats) {
    bundleLogger.end('PrecisionMap');
    callback();
  });
});