const gulp = require('gulp');
const config = require('./gulp/config.json');
var browserSync = require('browser-sync').create();
const plugins = require('gulp-load-plugins')({
	rename: {
		"gulp-clean-css": "cleanCss",
	}
});

//require tasks
require(process.cwd() + '/' + config.misc.tasksPath + '/scss-compile.js')(gulp, config, plugins);
require(process.cwd() + '/' + config.misc.tasksPath + '/css-compile.js')(gulp, config, plugins);
require(process.cwd() + '/' + config.misc.tasksPath + '/pug-compile.js')(gulp, config, plugins);
require(process.cwd() + '/' + config.misc.tasksPath + '/js-compile.js')(gulp, config, plugins);
require(process.cwd() + '/' + config.misc.tasksPath + '/img-min.js')(gulp, config, plugins);
require(process.cwd() + '/' + config.misc.tasksPath + '/html-min.js')(gulp, config, plugins);
require(process.cwd() + '/' + config.misc.tasksPath + '/browser-sync.js')(gulp, config, plugins, browserSync);
require(process.cwd() + '/' + config.misc.tasksPath + '/copy.js')(gulp, config, plugins);
require(process.cwd() + '/' + config.misc.tasksPath + '/watch.js')(gulp, config, plugins, browserSync);
require(process.cwd() + '/' + config.misc.tasksPath + '/default.js')(gulp, config, plugins);
require(process.cwd() + '/' + config.misc.tasksPath + '/build.js')(gulp, config, plugins);
require(process.cwd() + '/' + config.misc.tasksPath + '/init.js')(gulp, config, plugins);
