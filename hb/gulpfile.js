// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var scsslint = require('gulp-scsslint');
var livereload = require('gulp-livereload');
var soften = require('gulp-soften');
var size = require('gulp-size');
var lr = require('tiny-lr');
var server = lr();


// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('uncompressed/scss/*.scss')
    .pipe(soften(4))
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(size({title: 'css'}))
    .pipe(gulp.dest('assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(size({title: 'css.min'}))
    .pipe(gulp.dest('assets/css'))
    .pipe(livereload(server));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['uncompressed/js/jquery/jquery.js','uncompressed/js/plugins/*.js','uncompressed/js/*.js'])
    .pipe(soften(4))
    .pipe(concat('app.js'))
    .pipe(size({title: 'js'}))
    .pipe(gulp.dest('assets/js'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(size({title: 'js.min'}))
    .pipe(gulp.dest('assets/js'))
    .pipe(livereload(server));
});

// Set up image minification
gulp.task('images', function() {
  return gulp.src('uncompressed/images/**')
  .pipe(cache(imagemin({ optimizationLevel: 9, progressive: false, interlaced: false })))
  .pipe(gulp.dest('assets/images'))
  .pipe(livereload(server));
});

gulp.task('fonts', function() {
    return gulp.src('uncompressed/fonts/**')
    .pipe(gulp.dest('assets/fonts/'));
});

// Livereload
gulp.task('listen', function(next) {
    server.listen(35729, function(err) {
        if (err) return console.log;
        next();
    });
});

var filesToMove = [
        './assets/**'
        ];

gulp.task('move', function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(filesToMove, { base: './' })
  .pipe(gulp.dest('../'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('uncompressed/js/jquery/*.js', ['scripts']);
    gulp.watch('uncompressed/js/plugins/*.js', ['scripts']);
    gulp.watch('uncompressed/js/*.js', ['scripts']);
    gulp.watch('uncompressed/scss/*.scss', ['sass']);
    gulp.watch('uncompressed/images/**', ['images']);
    gulp.watch('uncompressed/fonts/**', ['fonts']);

    gulp.watch('assets/fonts/**', ['move']);
    gulp.watch('assets/css/**', ['move']);
    gulp.watch('assets/images/**', ['move']);
    gulp.watch('assets/js/**', ['move']);

    gulp.watch('*.html').on('change', function(file) {
        livereload(server).changed(file.path);
    });
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'images', 'fonts', 'listen', 'move', 'watch']);


