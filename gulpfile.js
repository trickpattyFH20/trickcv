'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src(['**/*.scss', '!node_modules/**/*.*'], {base: './'})
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
  gulp.watch(['**/*.scss', '!node_modules/**/*.*'], ['sass']);
});

gulp.task('default', ['sass', 'sass:watch'])
