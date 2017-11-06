var gulp = require('gulp');
var path = require('path');
var gulpGalen = require('gulp-galen');


gulp.task('test', function(done) {
  return gulp
    .src('galen_test/dev/start_test.test')
    .pipe(gulpGalen.test({
      'parallel-tests': 4,
      'htmlreport': path.resolve(__dirname, 'galen_test/reports/')
    }));
});

gulp.task('watch', function() {
  gulp.watch('galen_test/*.gspec', ['test']);
});