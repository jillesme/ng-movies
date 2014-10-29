var gulp = require('gulp');
var serv = require('gulp-webserver');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

var paths = {
  javascript: './js/**/*.js'
};

gulp.task('server', function () {
  return gulp.src('./')
    .pipe(serv());
});

gulp.task('api', function () {
  return nodemon({
    script: './api/image.js'
  });
});

gulp.task('jshint', function () {
  return gulp.src(paths.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', [
  'server',
  'api',
  'jshint'
]);
