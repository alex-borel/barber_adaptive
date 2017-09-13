var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var server = require('browser-sync').create();


gulp.task('serve', function () {
  server.init({
    server: './',
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
  gulp.watch('*.js').on('change', server.reload);
});

gulp.task('styles', function () {
  gulp.src('./sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(server.reload({
      stream: true
    }))
});

gulp.task('default', ['serve']);

