const gulp = require("gulp");
const concat = require("gulp-concat");
const del = require("del");
const sass = require("gulp-sass");
const browsersync = require("browser-sync");

const paths = {
  html: {
    src: ["./src/index.html", "./src/pages/**/*.html"],
    dist: "./dist/",
    watch: ["./src/index.html", "./src/pages/**/*.html"]
  },
  styles: {
    src: "./src/styles/main.sass",
    dist: "./dist/styles/",
    watch: ["./src/styles/**/*.scss", "./src/styles/**/*.sass"]
  },
  scripts: {
    src: ["./src/js/vendor/*.js", "./src/js/index.js"],
    dist: "./dist/js/",
    watch: ["./src/js/**/*.js"]
  },
  images: {
    src: ["./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}"],
    dist: "./dist/img/",
    watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}"
  },
  videos: {
    src: ["./src/video/**/*"],
    dist: "./dist/video/",
    watch: "./src/video/**/*"
  },
  fonts: {
    src: "./src/fonts/**/*.{woff,woff2}",
    dist: "./dist/fonts/",
    watch: "./src/fonts/**/*.{woff,woff2}"
  }
};

gulp.task("clean", () => {
  return del(["./dist/*"]);
});

gulp.task("fonts", () => {
  return gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dist));
});

gulp.task("images", () => {
  return gulp
    .src(paths.images.src)
    .pipe(gulp.dest(paths.images.dist))
    .on("end", browsersync.reload);
});

gulp.task("videos", () => {
  return gulp.src(paths.videos.src).pipe(gulp.dest(paths.videos.dist));
});

gulp.task("scripts", () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(concat("bundle.js"))
    .pipe(gulp.dest(paths.scripts.dist))
    .on("end", browsersync.reload);
});

gulp.task("main.scss", () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(browsersync.stream());
});

gulp.task("html", () => {
  return gulp
    .src(paths.html.src)
    .pipe(gulp.dest(paths.html.dist))
    .pipe(browsersync.stream());
});

gulp.task("serve", () => {
  browsersync.init({
    server: "./dist/",
    port: 4000,
    notify: true
  });

  gulp.watch(paths.html.watch, gulp.parallel("html"));
  gulp.watch(paths.styles.watch, gulp.parallel("main.scss"));
  gulp.watch(paths.scripts.watch, gulp.parallel("scripts"));
  gulp.watch(paths.images.watch, gulp.parallel("images"));
  gulp.watch(paths.fonts.watch, gulp.parallel("fonts"));
});

const development = gulp.series(
  "clean",
  gulp.parallel(["html", "main.scss", "scripts", "images", "videos", "fonts"]),
  gulp.parallel("serve")
);

const build = gulp.series(
  "clean",
  gulp.series(["html", "main.scss", "scripts", "images", "videos", "fonts"])
);

exports.build = build;
exports.default = development;
