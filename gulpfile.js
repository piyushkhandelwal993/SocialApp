var gulp = require('gulp');
var fs = require ('fs');
var nodemon = require ('nodemon');
//var browserSync = require ('browser-sync');

fs.readdirSync ( __dirname + '/gulp').forEach ( function (task){
	require ('./gulp/'+ task );
});
gulp.task('watch:js' , ['js'] , function(){
	gulp.watch('./ng/**/*.js' , ['js']);
});
gulp.task('watch:css' , ['css'] , function(){
	gulp.watch('./css/**/*.styl' , ['css']);
});
gulp.task('dev:server', function(){
	nodemon({
		script: 'server.js',
		ext: 'js',
		ignore: ['ng*', 'gulp*', 'assets*' ]
	});
});

// gulp.task('browser-reload', function(){
// 	var files=[
// 		'/assets/**/*.*'
// 	];
// 	browserSync.init(files);
// });
gulp.task('dev' , [ 'watch:js' , 'watch:css' , 'dev:server'],function(){

});