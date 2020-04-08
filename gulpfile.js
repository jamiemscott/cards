const gulp = require('gulp');
const sass = require('gulp-sass');

//compile scss into css
function style() {
    return gulp.src('_dev/assets/sass/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('assets/css'));
}

exports.style = style;