var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat')
var less = require('gulp-less');
var cleancss = require('gulp-clean-css');
var autoprefix = require('gulp-autoprefixer')
var connect = require('gulp-connect')
var plumber = require('gulp-plumber')

gulp.task('copy-index',function(){
	gulp.src('./index.html')
		.pipe(gulp.dest('app/'))
		.pipe(connect.reload())
})
gulp.task('copy-js',function(){
	gulp.src(['js/common.js','js/index.js'])
		.pipe(plumber())
		.pipe(uglify())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('app/js/'))
		.pipe(connect.reload())
})
// gulp.task('copy-css',function(){
// 	gulp.src(['css/reset.css','css/index.css'])
		
// 		.pipe(cleancss())
// 		.pipe(concat('all.css'))
// 		.pipe(gulp.dest('app/css/'))
// })
gulp.task('less',function(){
	gulp.src(['css/*.less','css/reset.css','css/index.css'])
		.pipe(plumber())
		.pipe(less())
		.pipe(autoprefix())
		//.pipe(cleancss())
		.pipe(concat('all.css'))
		.pipe(gulp.dest('app/css/'))
		.pipe(connect.reload())
})



gulp.task('build',['copy-index','copy-js','less'],function(){
	console.log('js/css/index ok');
})
gulp.task('watch',function(){
	gulp.watch('index.html',['copy-index'])
	gulp.watch('js/*.js',['copy-js'])
	gulp.watch('css/*.*',['less'])
})
gulp.task('server',function(){
	connect.server({
		root:'app',
		post:80,
		livereload:true
	})
})
gulp.task('default',['server','watch'])