var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	minifyCSS = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require("gulp-notify");

gulp.task('default', function() {
  
	return gulp.src('css/*.css')
    .pipe(concatCss("style.min.css"))
    .pipe(minifyCSS())
    .pipe(autoprefixer({
			browsers: ['last 500 versions'],
			cascade: false
	}))
    .pipe(notify("Done!!!!!!"))
    .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
	gulp.watch('css/*.css', ['default']);
})