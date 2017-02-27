const runSequence = require('run-sequence');

module.exports = function(gulp, config, plugins) {
	gulp.task('build', function (callback) {
		runSequence('copy', 'html-min', 'img-min',
			callback
		)
	});
}