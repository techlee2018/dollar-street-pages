'use strict';

const gulp = require('gulp');

gulp.paths = {
  tssrc: [
    '**/*.ts',
    '!node_modules/**/*',
    '!bundles/**/*',
    '!typings/**/*',
    '!test/**/*',
    '!**/*.{ts,coffee}.js'
  ]
};

// Code linting
const tslint = require('gulp-tslint');

const paths = gulp.paths;

gulp.task('tslint', () =>
  gulp.src(paths.tssrc)
    .pipe(tslint())
    .pipe(tslint.report('verbose', {
      emitError: true,
      reportLimit: 0
    }))
);

// gulp default task
gulp.task('default', () => {
  gulp.start('tslint');
});
