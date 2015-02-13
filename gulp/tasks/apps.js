var gulp = require('gulp');

gulp.task('apps', function() {
  return gulp.src('./src/static/**/bundle.js')
    .pipe(gulp.dest('./dist'));
});
