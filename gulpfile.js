var gulp = require("gulp"),
	watch = require	('gulp-watch'),
  	connect = require('gulp-connect');


gulp.task('html', function() {
	gulp.src('./src/*.html')
		.pipe(connect.reload());
})

gulp.task('watch', function() {
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/js/*.js', ['html']);
});

gulp.task('connect', function() {
  	connect.server({
  		root: 'src',
  		livereload: true
  	});
});


gulp.task('default', ['connect', 'watch']);

