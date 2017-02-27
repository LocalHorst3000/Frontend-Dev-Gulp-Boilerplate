const runSequence = require('run-sequence');

module.exports = function(gulp, config, plugins) {
	gulp.task('init', function (callback) {
		runSequence('scss-compile', 'css-compile', ['js-compile', 'pug-compile'],
			callback
		);
	});
}