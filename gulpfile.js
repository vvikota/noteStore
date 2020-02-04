const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  imagemin = require('gulp-imagemin'),
  clean = require('gulp-clean'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  cssbeautify = require('gulp-cssbeautify'),
  include = require('gulp-include')
  //uglify = require('gulp-uglify-es').default,
  //cssmin = require('gulp-cssmin'),


gulp.task('clean', () => {  
  return gulp.src('build/*', {read: false})
		.pipe(clean());
});

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });
});

gulp.task('html', () => {
  return gulp.src('src/html/*.html')
    .pipe(include())
    .pipe(gulp.dest('build'))
    .on('end', browserSync.reload);
})

gulp.task('style', () => {
  return gulp.src('src/static/styles/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 version'],
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// for finish task
gulp.task('styleFinish', () => {
  return gulp.src('src/static/styles/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 version'],
    }))
    // .pipe(cssmin())
    .pipe(cssbeautify({
      indent: '  '
    }))
    .pipe(gulp.dest('build/css'))
});
// for finish task


gulp.task('scripts', () => {
  return gulp.src('src/static/js/script.js')
     //.pipe(sourcemaps.init())
     //.pipe(uglify())
     .pipe(include())
     //.pipe(sourcemaps.write('./'))
     .pipe(gulp.dest('./build/js'))
     .pipe(browserSync.stream());
});

gulp.task('libs', () => {
  return gulp.src('src/static/libs/**/*')
    .pipe(gulp.dest('./build/libs'))
})

gulp.task('fonts', () => {
  return gulp.src('src/static/fonts/*')
     .pipe(gulp.dest('./build/fonts'))
     .pipe(browserSync.stream());
});

gulp.task('img',  () => {
  return gulp.src('src/static/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img/'));
});

gulp.task('watch', () => {
  gulp.watch('./src/html/**/*.html', gulp.series('html'));
  gulp.watch('./src/static/styles/**/*.scss', gulp.series('style'));
  gulp.watch('src/static/js/*.js', gulp.series('scripts'));
  gulp.watch('src/static/libs/**/*', gulp.series('libs'));
  gulp.watch('src/static/img/*', gulp.series('img'));
  gulp.watch('src/static/fonts/*', gulp.series('fonts'));
});


gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('html', 'style'),
  'img', 'scripts', 'fonts', 'libs',
  gulp.parallel('watch', 'serve')
));

gulp.task('finish', gulp.series(
  'clean',
  gulp.parallel('html', 'styleFinish'),
  'img', 'scripts', 'fonts', 'libs'
));