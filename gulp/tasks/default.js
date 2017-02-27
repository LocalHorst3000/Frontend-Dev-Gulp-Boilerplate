const runSequence = require('run-sequence');

module.exports = function(gulp, config, plugins) {
	gulp.task('default', function (callback) {
		runSequence('browser-sync', 'watch',
			callback
		);
	});
}