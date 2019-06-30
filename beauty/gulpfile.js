const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");
const browsersync = require("browser-sync").create();

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
    port: 3000,
  });
  done();
}


function browserSyncReload(done) {
  browsersync.reload();
  done();
}


function clean() {
  return del(["dist"]);
}


function images() {
  return gulp
    .src("app/img/**/*")
    .pipe(gulp.dest("dist/img"));
}


function videos() {
  return gulp
    .src("app/video/**/*")
    .pipe(gulp.dest("dist/video"));
}


function css() {
  return gulp
    .src(["app/sass/**/*.sass", "app/css/**/*.css"])
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(gulp.dest("dist/css/"))
    .pipe(browsersync.stream());
}


function scripts() {
  return (
    gulp
      .src(["app/js/**/*"])
      .pipe(gulp.dest("dist/js/"))
      .pipe(browsersync.stream())
  );
}


function watchFiles() {
  gulp.watch(["app/sass/**/*", "app/css/**/*.css"], css);
  gulp.watch("app/js/**/*");
  gulp.watch(
    [
      "./_includes/**/*",
      "./_layouts/**/*",
      "./_pages/**/*",
      "./_posts/**/*",
      "./_projects/**/*",
    ],
    gulp.series(browserSyncReload),
  );
  gulp.watch(".app/img/**/*", images);
}

const js = gulp.series(scripts);
const build = gulp.series(clean, gulp.parallel(css, images, videos, js));
const watch = gulp.parallel(watchFiles, browserSync);

exports.images = images;
exports.css = css;
exports.js = js;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;
