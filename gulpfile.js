// including plugins
var gulp = require('gulp')
, concat = require("gulp-concat")
, uglify = require("gulp-uglify");
 
// task
gulp.task('build', function () {
    gulp.src('./src/*.js')
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});
