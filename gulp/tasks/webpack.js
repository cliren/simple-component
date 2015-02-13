var gulp = require('gulp');
var webpack = require("webpack");
var webpackConfig = require("../../webpack.config.js");
var bundleLogger = require('../util/bundleLogger');

var name = 'simple-component';
gulp.task("webpack:build", function(callback) {
  bundleLogger.start(name);

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
    bundleLogger.end(name);
    callback();
  });
});