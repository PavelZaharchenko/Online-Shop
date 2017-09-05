const gulp = require("gulp");
const less = require("gulp-less");
const watch = require("gulp-watch");
const imagemin = require("gulp-imagemin");
 
gulp.task("less", () => {
  return gulp.src("./assets/style/style.less")
    .pipe(less())
    .pipe(gulp.dest("./public/assets/style"));
});

gulp.task("imagemin", () => {
  return gulp.src("./assets/img/*")
      .pipe(imagemin())
      .pipe(gulp.dest("public/assets/img"));
});

gulp.watch("./assets/style/*.less", ["less"]);

gulp.task("default", ["less", "imagemin"]);