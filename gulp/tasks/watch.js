var runSequence = require('run-sequence');

module.exports = function(gulp, config, plugins, browserSync) {
	gulp.task('watch', function() {
		gulp.watch(config.app.pug + '/**/*.pug', ['pug-compile']);
		gulp.watch(config.app.scss + '/**/*.scss', function() {runSequence('scss-compile', 'css-compile')} );
		gulp.watch(config.app.js + '/**/*.js', function() {runSequence('js-compile', browserSync.reload)} );
		gulp.watch(config.app.css + '/**/*.css', browserSync.reload);
		gulp.watch(config.app.root + '/**/*.html', browserSync.reload);
	});
}