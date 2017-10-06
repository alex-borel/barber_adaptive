'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('browser-sync').create();
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var minify = require('gulp-csso');
var rename = require('gulp-rename');
var run = require('run-sequence');
var imagemin = require('gulp-imagemin');
var del = require('del');
var minify = require("gulp-minify");


gulp.task('serve', function () {
  server.init({
    server: '.',
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch('sass/**/*.scss', function (event, cb) {
    setTimeout(function () {
      gulp.start('styles');
    }, 500)
  });

  gulp.watch('*.html').on('change', server.reload);
});

gulp.task('styles', function () {
  gulp.src('./sass/style.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({browsers: [
        'last 2 versions'
      ]}),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(gulp.dest('build/css/'))
    .pipe(server.reload({
      stream: true
    }))
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('images', function() {
  return gulp.src('build/img/**/*.{png,jpg,gif}')
  .pipe(imagemin([
  imagemin.optipng({optimizationLevel: 3}),
  imagemin.jpegtran({progressive: true})
  ]))
  .pipe(gulp.dest('build/img'));
});

gulp.task('copy', function() {
  return gulp.src([
    'fonts/**/*.{woff,woff2}',
    'img/**',
    'js/**',
    '*.html'
    ], {
      base: '.'
  })
  .pipe(gulp.dest('build'));
});

gulp.task('clean', function() {
  return del('build');
});

gulp.task('js-min', function() {
	gulp.src('js/*.js')
		.pipe(minify({
			ext: {
				min: '.min.js'
			},
		}))
		.pipe(gulp.dest('build/js'))
});


gulp.task('build',function(fn) {
  run('clean','styles','copy', 'images', 'js-min',fn);
});

