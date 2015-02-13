var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config').browserSync;

var proxyMiddleware = function(req, res, next) {
  var httpProxy = require('http-proxy');
  var proxy = httpProxy.createProxyServer({
    target: 'http://localhost:8080/precision-fieldview/'
  });

  if (req.url.indexOf('services') != -1) {
    proxy.web(req, res);
  } else {
    next();
  }
};

gulp.task('browserSync', ['build'], function() {
  config.server.middleware = proxyMiddleware;
  browserSync(config);
});
