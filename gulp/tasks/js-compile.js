module.exports = function(gulp, config, plugins) {
	gulp.task('js-compile', function() {
		return gulp.src([config.app.js + '/**/!(script.min|tether|bootstrap|script)*.js', config.app.js + '/tether.js', config.app.js + '/bootstrap.js', config.app.js + '/script.js'])
			.pipe(plugins.concat('script.min.js'))
			.pipe(plugins.uglifyjs())
			.pipe(gulp.dest(config.app.js));
		callback();
	});
}