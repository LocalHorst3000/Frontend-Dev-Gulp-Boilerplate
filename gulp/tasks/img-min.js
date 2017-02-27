module.exports = function(gulp, config, plugins) {
	gulp.task('img-min', function(){
	return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
		.pipe(plugins.imagemin({
		  interlaced: true
		}))
		.pipe(gulp.dest(config.dist.img))
	});
}