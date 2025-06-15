import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import concat from 'gulp-concat';
import rename from 'gulp-rename';

const { src, dest, series, watch } = gulp;

export function minifyCss() {
  return src('src/css/*.css')
    .pipe(cleanCSS())
    .pipe(dest('dist/css'));
}

export function minifyJs() {
  return src('src/js/*.js')
    .pipe(uglify())
    .pipe(dest('dist/js'));
}

export function minifyHtml() {
  return src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest('dist'));
}

export function minifyImages() {
  return src('public/**/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin())
    .pipe(dest('dist/public'));
}

export function watchFiles() {
  watch('src/css/*.css', minifyCss);
  watch('src/js/*.js', minifyJs);
  watch('src/*.html', minifyHtml);
  watch('public/**/*.{png,jpg,jpeg,gif,svg}', minifyImages);
}

export const build = series(minifyCss, minifyJs, minifyHtml, minifyImages);
export default series(minifyCss, minifyJs, minifyHtml, minifyImages, watchFiles);
