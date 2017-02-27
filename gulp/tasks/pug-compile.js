var onError = function (err) {  
  plugins.notify.onError("ERROR: PUG Compilation Failed");
  console.log(err);
};

module.exports = function(gulp, config, plugins) {
	gulp.task('pug-compile', function() {
		return gulp.src(config.app.pug + "/**/*.pug")
		    .pipe(plugins.data(function(file) {
		      return require(process.cwd() + '/' + config.misc.data);
		    }))
		    .pipe(plugins.plumber({
				errorHandler: onError
			}))
		    .pipe(plugins.pug({
				pretty: '  ',
			}))
			.pipe(plugins.notify('PUG compiled successfully!'))
			.pipe(gulp.dest(config.app.root));
		callback();
	});
}