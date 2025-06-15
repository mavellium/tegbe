import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import fs from 'fs';
import path from 'path';
import globPkg from 'glob';
const { glob } = globPkg;
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

export function copyImages() {
  return src('src/assets/**/*.{png,jpg,jpeg,gif,svg}', { allowEmpty: true })
    .pipe(dest('dist/assets'));
}

export function watchFiles() {
  watch('src/css/*.css', minifyCss);
  watch('src/js/*.js', minifyJs);
  watch('src/*.html', minifyHtml);
  watch('public/**/*.{png,jpg,jpeg,gif,svg}', copyImages);
}

export const build = series(minifyCss, minifyJs, minifyHtml, copyImages);
export default series(minifyCss, minifyJs, minifyHtml, copyImages, watchFiles);
