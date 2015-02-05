var gulp = require ('gulp');
var gulpStylus = require('gulp-stylus');

gulp.task('css',function (){
	gulp.src('./css/**/*.styl')
	.pipe( gulpStylus())
	.pipe( gulp.dest('assets'));
});