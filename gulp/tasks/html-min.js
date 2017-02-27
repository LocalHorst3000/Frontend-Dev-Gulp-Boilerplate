module.exports = function(gulp, config, plugins) {
	gulp.task('html-min', function(){
		return gulp.src(config.app.root + '/*.html')
			.pipe(plugins.htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest(config.dist.root));
	});
}