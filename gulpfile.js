var gulp = require('gulp');
var serv = require('gulp-webserver');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var preprocess = require('gulp-preprocess');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var clean = require('gulp-clean');
var minifyHTML = require('gulp-minify-html');
var csso = require('gulp-csso');
var karma = require('gulp-karma');


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
  ],
  tests: [
    'public/dist/js/lib.js',
    'public/dist/js/app.js',
    'public/lib/angular-mocks/angular-mocks.js',
    'public/test/spec/**/*.js'
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
    .on('error', notify.onError())
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
    .pipe(minifyHTML({ empty: true }))
    .pipe(gulp.dest('./public/dist/'));
  
    gulp.src(paths.views)
      .pipe(preprocess({ context: { build: 'prod' } }))
      .pipe(gulp.dest('./public/dist/views/'));
});

gulp.task('sass:prod', function () {
  gulp.src(paths.styles)
    .pipe(sass())
    .on('error', notify.onError())
    .pipe(csso())
    .pipe(gulp.dest('./public/dist/css'));
});

gulp.task('scripts:prod', function () {
  return gulp.src(paths.scripts)
    .pipe(concat('app.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('public/dist/js'));
});

gulp.task('libs:prod', function () {
  return gulp.src(paths.libs)
    .pipe(concat('lib.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('public/dist/js'));
});


gulp.task('test', function () {
  return gulp.src(paths.tests)
    .pipe(karma({
      configFile: 'public/test/karma.conf.js',
      action: 'run'
    }))
    .on('error', function (err) {
      throw err;
    });
});

gulp.task('server', function () {
  return gulp.src('public/dist')
    .pipe(serv());
});

gulp.task('api', function () {
  return nodemon({
    script: 'api/image.js',
    ext: 'js',
    ignore: ['gulpfile.js', 'public/**/*'],
  });
});

gulp.task('jshint', function () {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('clean', function () {
  return gulp.src('public/dist', { read: false })
    .pipe(clean());
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
  'html:prod',
  'sass:prod',
  'scripts:prod',
  'libs:prod',
  'jshint'
]);

