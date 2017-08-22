var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
 
gulp.task('less', function () {
  return gulp.src('./style/css/style.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
});

gulp.watch("./style/css/style.less", ['less']);
gulp.task("default", ["less"]);