var gulp = require('gulp'), //基础库
    imagemin = require('gulp-imagemin'), //图片压缩
    less = require('gulp-less'), //less
    autoprefixer = require('gulp-autoprefixer'), //css3 添加前缀
    minifyCss = require('gulp-minify-css'), //css压缩
    jshint = require('gulp-jshint'), //js检查
    uglify = require('gulp-uglify'), //js压缩
    rename = require('gulp-rename'), //重命名
    concat = require('gulp-concat'), //合并文件
    clean = require('gulp-clean'), //清空文件夹
    browserSync = require('browser-sync').create(), //刷新浏览器
    notify = require('gulp-notify'); //任务通知

gulp.task('html', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'html 处理完成' }));
});
gulp.task('lip', function() {
    gulp.src('src/lip/*')
        .pipe(gulp.dest('dist/lip'))
        .pipe(notify({ message: 'lip 处理完成' }));
});
gulp.task('less', function() {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename('main.css'))
        .pipe(gulp.dest('src/css'))
        .pipe(concat('main.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({ message: 'less 处理完成' }));
});

// gulp.task('concatCss', function() {
//     gulp.src(['src/css/*.css'])
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(concat('main.css'))
//         .pipe(minifyCss())
//         .pipe(gulp.dest('dist/css'))
//         .pipe(notify({ message: 'css 处理完成' }));
// });
gulp.task('js', function() {
    gulp.src('src/js/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'js 处理完成' }));
});
gulp.task('images', function() {
    gulp.src('src/img/*')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('dist/img'))
        .pipe(notify({ message: '图片处理完成' }));
});
gulp.task('browser-sync', function() {
    var files = ['**/*.html', '**/*.css', '**/*.js'];
    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});
gulp.task('default', ['browser-sync','less','js','html','lip','images','watch']);
gulp.task('watch', function() {
    gulp.watch(['browser-sync']);
    gulp.watch('src/less/*.less', ['less']);
    // gulp.watch('src/css/*.css', ['concatCss']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/img/*', ['images']);
    gulp.watch('src/*.html', ['html']);


    gulp.watch('dist/**', function() {
        browserSync.reload();
    });

});
