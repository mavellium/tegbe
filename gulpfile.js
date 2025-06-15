const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

gulp.task('minify-css', function () {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-js', function () {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('minify-html', function () {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/css/*.css', gulp.series('minify-css'));
  gulp.watch('src/js/*.js', gulp.series('minify-js'));
  gulp.watch('src/html/*.html', gulp.series('minify-html'));
});

gulp.task('default', gulp.series('minify-css', 'minify-js', 'minify-html', 'watch'));
gulp.task('build', gulp.series('minify-css', 'minify-js', 'minify-html'));