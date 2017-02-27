var runSequence = require('run-sequence');

module.exports = function(gulp, config, plugins, browserSync) {
	gulp.task('fonts', function() {
		return gulp.src(config.app.fonts + '/**/*')
		.pipe(gulp.dest(config.dist.fonts));
	});

	gulp.task('css', function() {
		return gulp.src(config.app.css + '/style.min.css')
		.pipe(gulp.dest(config.dist.css));
	});

	gulp.task('js', function() {
		return gulp.src(config.app.js + '/script.min.js')
		.pipe(gulp.dest(config.dist.js));
	});
	gulp.task('copy', function() {
		runSequence('css', 'fonts', 'js');
	});
}