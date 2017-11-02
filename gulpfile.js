/* 

// install
npm install gulp
npm install gulp-sass
npm install gulp-sourcemaps
npm install gulp-livereload
npm install gulp-typescript typescript

exit gulp -> ctrl + c
 */


var gulp = require( "gulp" );
var ts = require('gulp-typescript');
var sass = require( "gulp-sass" );
var sourcemaps = require( "gulp-sourcemaps" );
var livereload = require( "gulp-livereload" );



gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./CSS'))
    .pipe(livereload());
});

gulp.task('ts', function () {
    return gulp.src('TS/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js',
            module : "system",
            target: "es6"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./JS'))
        .pipe(livereload());
});



gulp.task("watch", function(){
    livereload.listen();
    gulp.watch("./sass/*.scss", ["sass"]);
    gulp.watch( ["./TS/**/*.ts"], ["ts"] );
});


