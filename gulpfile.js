var gulp = require("gulp"),
  watch = require ('gulp-watch'),
    connect = require('gulp-connect');


gulp.task('html', function() {
  gulp.src('./dist/*.html')
    .pipe(connect.reload());
})

gulp.task('watch', function() {
    gulp.watch('./dist/*.html', ['html']);
    gulp.watch('./dist/*.js', ['html']);
});

gulp.task('connect', function() {
    connect.server({
      root: '',
      livereload: true
    });
});


gulp.task('default', ['connect', 'watch']);