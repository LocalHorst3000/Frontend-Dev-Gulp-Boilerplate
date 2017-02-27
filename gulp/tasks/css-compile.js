module.exports = function(gulp, config, plugins) {
	gulp.task('css-compile', function() {
		return gulp.src([config.app.extCss + '/*.css', config.app.tmp + '/*.css'])
			.pipe(plugins.concat('style.min.css'))
			.pipe(plugins.cleanCss({compatibility: 'ie8'}))
			.pipe(plugins.notify('StyleSheet compiled successfully!'))
			.pipe(gulp.dest(config.app.css));
		callback();
	});
}