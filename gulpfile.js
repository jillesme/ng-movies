var gulp = require('gulp');
var serv = require('gulp-webserver');
var nodemon = require('gulp-nodemon');

gulp.task('server', function () {
  return gulp.src('./')
    .pipe(serv({ open: true }));
});

gulp.task('api', function () {
  return nodemon({
    script: './api/image.js'
  });
});

gulp.task('default', ['server', 'api']);
