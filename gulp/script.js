var gulp = require('gulp');
var concat = require('gulp-concat');
var gulpUtil = require('gulp-util');
var ugligy = require ('gulp-uglify');
var ngAnnotate = require ('gulp-ng-annotate');
var sourcemap = require ('gulp-sourcemaps')

gulp.task("js",function(){
	gulp.src(['./ng/ng-modules.js' , './ng/**/*.js'])
	.pipe(sourcemap.init())
	.pipe(concat ('app.js').on('error', gulpUtil.log))
	.pipe(ngAnnotate())
	.pipe(ugligy())
	.pipe(sourcemap.write())
	.pipe(gulp.dest('assets')); 
});