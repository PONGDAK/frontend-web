//gulpfile.js

var gulp = require('gulp');
var uglyfy = require('gulp-uglyfy');
var pump = require('pimp');

gulp.task('default', function() {
  // place code for your default task here
  console.log('default')
  console.log('default')
  console.log('default')



});

gulp.task('js', function() {
    var src = ['js/lib/jquery-1.11.2.js',
  'js/config.js',
'js/js/util.js',
'js/js/TodoModel.js',
'js/js/TodoCollection.js',
'js/TodoView.js',
'js/tmpl.js',
'js/main.js'];

    return gulp.src(src)
            .pipe(uglify())
            .pipe(gulp.dest('all.js'))
});
