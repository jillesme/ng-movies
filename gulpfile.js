var gulp = require('gulp');
var serv = require('gulp-webserver');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var preprocess = require('gulp-preprocess');
var sass = require('gulp-sass');

var paths = {
  scripts: [
    'public/src/app.js',
    'public/src/js/**/*.js'
  ],
  libs: [
    'public/lib/angular/angular.js',
    'public/lib/angular-route/angular-route.js'
  ],
  styles: [
    'public/src/scss/*.scss'
  ],
  index: [
    './public/src/index.html'
  ],
  views: [
    './public/src/views/*.html'
  ]
};

gulp.task('html:dev', function() {
  gulp.src(paths.index)
    .pipe(preprocess({ context: { build: 'dev' } }))
    .pipe(gulp.dest('./public/dist/'));

  gulp.src(paths.views)
    .pipe(preprocess({ context: { build: 'dev' } }))
    .pipe(gulp.dest('./public/dist/views/'));
});

gulp.task('sass:dev', function () {
  gulp.src(paths.styles)
    .pipe(sass())
    .pipe(gulp.dest('./public/dist/css'));
});

gulp.task('scripts:dev', function () {
  return gulp.src(paths.scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/dist/js'));
});

gulp.task('libs:dev', function () {
  return gulp.src(paths.libs)
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('public/dist/js'));
});


gulp.task('html:prod', function() {
  gulp.src(paths.index)
    .pipe(preprocess({ context: { build: 'prod' } }))
    .pipe(gulp.dest('./public/dist/'));

  gulp.src(paths.views)
    .pipe(preprocess({ context: { build: 'prod' } }))
    .pipe(gulp.dest('./public/dist/views/'));
});

gulp.task('scripts:prod', function () {
  return gulp.src(paths.scripts)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/js'));
});

gulp.task('libs:prod', function () {
  return gulp.src(paths.libs)
    .pipe(concat('lib.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/js'));
});

gulp.task('server', function () {
  return gulp.src('public/dist')
    .pipe(serv());
});

gulp.task('api', function () {
  return nodemon({
    script: 'api/image.js'
  });
});

gulp.task('jshint', function () {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', [
  'server',
  'api',
  'html:dev',
  'sass:dev',
  'scripts:dev',
  'libs:dev',
  'jshint'
]);

gulp.task('build', [
  'server',
  'api',
  'scripts:prod',
  'libs:prod',
  'jshint'
]);

