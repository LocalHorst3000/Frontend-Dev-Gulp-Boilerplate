module.exports = function(gulp, config, plugins, browserSync) {
	gulp.task('browser-sync', function() {
		browserSync.init({
			server: {
				baseDir: config.app.root
			}
		});
	});
}