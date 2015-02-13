var gulp = require('gulp');

gulp.task('build', ['webpack:build', 'markup', 'apps']);
