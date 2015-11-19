var path = require('path');

var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

function publicDir(path) {
  return ['./dist'].concat(path).join('');
}

gulp.task('copy-js', function () {
  return gulp.src('js/**/*.js')
    .pipe(gulp.dest(publicDir('/js/')));
});

gulp.task('copy-img', function () {
  return gulp.src('./img/**/*')
    .pipe(gulp.dest(publicDir('/img/')));
});

gulp.task('copy-mail', function () {
  return gulp.src('./mail/**/*')
    .pipe(gulp.dest(publicDir('/mail')));
});

gulp.task('copy-vendor', function () {
  return gulp.src('./vendor/**/*')
    .pipe(gulp.dest(publicDir('/vendor')));
});

gulp.task('copy-html', function () {
  return gulp.src('index.html')
    .pipe(gulp.dest(publicDir('/')));
});

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest(publicDir('/css')));
});

gulp.task('default', [
  'copy-js',
  'copy-img',
  'copy-mail',
  'copy-vendor',
  'copy-html',
  'less'
]);
