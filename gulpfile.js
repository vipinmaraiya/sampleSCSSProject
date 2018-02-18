const gulp = require('gulp');
const cleancss = require('gulp-clean-css');
const sass = require('gulp-sass');

gulp.task('default',function(){
   
    gulp.watch('scss/*.scss',['compileSCSS']);
    
});

gulp.task('compileSCSS',function(){
   gulp.src('scss/style.scss').pipe(sass()).pipe(cleancss())
    .pipe(gulp.dest('css'));
});