'use strict';

const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const watch = require("gulp-watch");
const sass = require('gulp-sass');

var sourcemaps = require('gulp-sourcemaps');

/* SASS*/
gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('src/css'));
  });

/* Move HTML-files*/
gulp.task("copyhtml",function(){
  return gulp.src("src/*.html")
  .pipe(gulp.dest("pub/"));
});

/* Move Pictures */
gulp.task("copyimages",function(){
    return gulp.src("src/images/*")
    .pipe(gulp.dest("pub/images"));
  });

/* Concat and minify CSS */
gulp.task('concmincss', function() {
    return gulp.src('src/css/*.css')
      .pipe(concat("all.css"))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('pub/css'));
  });

/* Concat and minify Javascript */
gulp.task("concminjs",function(){
  return gulp.src("src/js/*.js")
  .pipe(concat("all.js"))
  .pipe(uglify())
  .pipe(gulp.dest("pub/js"));
});

/* Control changes in files */
gulp.task("watcher",function(){
  watch ("src/js/*.js",function(){
  gulp.start("concminjs");
  });

  watch("src/*.html",function(){
  gulp.start("copyhtml");
  });

  watch("src/css/*.css",function(){
  gulp.start("concmincss");
  });

  watch("src/images",function(){
  gulp.start("copyimages");
  });

  watch("src/sass/**/*.scss", function () {
    gulp.start("sass");
    });
});

/* Default */
gulp.task("default",["copyhtml","concminjs","copyimages","concmincss","sass","watcher"]);