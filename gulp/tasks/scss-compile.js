module.exports = function(gulp, config, plugins) {
	gulp.task('scss-compile', function() {
		return gulp.src(config.app.scss + '/style.scss')
			.pipe(plugins.plumber({
				errorHandler: plugins.notify.onError("ERROR: CSS Compilation Failed")
			}))
			.pipe(plugins.sass().on('error', plugins.sass.logError))
			.pipe(gulp.dest(config.app.tmp));
			callback();
	});
}