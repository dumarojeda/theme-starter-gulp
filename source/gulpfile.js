var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var connect = require('gulp-connect');
var jade = require('jade');
var jadeGulp = require('gulp-jade');
var uglify = require('gulp-uglify');
var pump = require('pump');

//Paths
var paths = {
  webserverRoot : '../',
  jade : ['./jade/*.jade'],
  sass : ['./sass/**/*.sass'],
  javascript : [
    './bower_components/jquery/dist/jquery.min.js',
    './javascripts/script.js'
  ]
};

// WebServer
gulp.task('webserver', function() {
  connect.server({
    port: 8080,
    root: [paths.webserverRoot],
    livereload: true
  });
});

// Jade
gulp.task('jade', function() {
  gulp.src(paths.jade)
  .pipe(connect.reload())
  .pipe(jadeGulp({pretty: true, jade: jade}))
  .pipe(gulp.dest('../'))
});

// Styles
gulp.task('sass', function() {
  gulp.src(paths.sass)
  .pipe(connect.reload())
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS())
  .pipe(gulp.dest('../css/'));
});

// Scripts
gulp.task('script', function (cb) {
  pump([
      gulp.src(paths.javascript),
      connect.reload(),
      concat('script.js'),
      uglify(),
      gulp.dest('../js/')
    ],
    cb
  );
});

// Default task
gulp.task('default', ['sass', 'jade', 'webserver', 'script'], function () {
  // Watch files
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.javascript, ['script']);

});

