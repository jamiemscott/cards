const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress'); 
const del = require('del');
const zip = require('gulp-zip');
const sassdoc = require('sassdoc');

const src = '_dev/assets/';
const prod = 'assets/';

//compile scss into css
function style() {
  return gulp
    .src(src + 'sass/**/*.scss')
    .pipe(sass()
    .on('error',sass.logError))
    .pipe(postcss([
      autoprefixer(browserlist), 
      cssnano()
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(prod + 'css'));
}


// function scripts() {
//   return gulp.src(src + 'js/**/*.js')
//   .pipe(minifyjs())
//   .pipe(gulp.dest(prod + 'js'));
// }

function watch() {
  gulp.watch(src + 'sass/**/*.scss', style)
  //gulp.watch(src + 'js/**/*.js', scripts)
}


exports.watch = watch;
exports.style = style;
