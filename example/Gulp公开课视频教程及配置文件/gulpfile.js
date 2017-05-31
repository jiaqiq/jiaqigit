// include gulp
var gulp = require('gulp');

// include gulp-util
var gutil = require('gulp-util');

// include jshint
var jshint = require('gulp-jshint');     	//js语法检查
var concat = require('gulp-concat');     	//合并文件
var uglify = require('gulp-uglify');     	//js压缩代码
var csslint = require('gulp-csslint');     	//css语法检查
var minifycss = require('gulp-minify-css');     	//css压缩
var htmlhint = require('gulp-htmlhint');     	//html语法检查
var imagemin = require('gulp-imagemin');     	//图片压缩
var rename = require('gulp-rename');     	//文件更名
var rev = require('gulp-rev'); 			//更改文件版本号
var revcollector = require('gulp-rev-collector'); 		//用于rev生成版本号后，替换页面路径
var notify = require('gulp-notify'); 			//提示信息
var browserSync = require('browser-sync'); 			//browser-sync自动刷新
var fileinclude = require('gulp-file-include'); 			// includer 包含模版文件

// 1.Static server browserSync
// 2.启动http服务
gulp.task('f5-src', function() {
    browserSync({
        files: "**",
        server: {
            baseDir: "./src/"
        }
        /*proxy: {
	        host: 'mydinghuo.dev',
	        port: '3000'
    	}*/
    });
});

gulp.task('f5-web', function() {
    browserSync({
        files: "**",
        server: {
            baseDir: "./dist/"
        }
        /*proxy: {
            host: 'mydinghuo.dev',
            port: '3000'
        }*/
    });
});
// 路径配置变量
var cssSrc = './src/**/*.css',
    cssDist = './dist/css', // css合并后路径
    jsSrc = './src/common/js/*.js',
    jsDist = './dist/js',
    htmlSrc = './src/**/*.html',
    fontSrc = './src/common/font/*',
    fontDist = './dist/font',
    imgSrc = './src/common/img/*',
    imgDist = './dist/img',
    revPath = './rev/';
    condition = true;



// JS语法检查
gulp.task('js', function() {
    // place code for your default task here
    gulp.src(jsSrc)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(notify({ message: 'JS 语法检查完毕！' }));

});

// CSS语法检查

gulp.task('css', function() {
    gulp.src(cssSrc)
        .pipe(csslint())
        .pipe(csslint.reporter())
        .pipe(notify({ message: 'CSS 语法检查完毕！' }));
});


// html语法检查

gulp.task('html', function() {
    gulp.src(htmlSrc)
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(notify({ message: 'HTML 语法检查完毕！' }));

});

// 合并 之后压缩 js代码
gulp.task('minijs', function() {
    // place code for your default task here
    gulp.src(jsSrc)
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(rev())
        .pipe(gulp.dest(jsDist))
        .pipe(rev.manifest())
        .pipe(gulp.dest(revPath))
        .pipe(notify({ message: 'JS 压缩合并完毕！' }));
});

// 合并 之后压缩 css代码
gulp.task('minicss', function() {
    // place code for your default task here
    gulp.src(cssSrc)
        .pipe(minifycss())
        .pipe(concat('main.min.css'))
        .pipe(rev())
        .pipe(gulp.dest(cssDist))
        .pipe(rev.manifest())
        .pipe(gulp.dest(revPath))
        .pipe(notify({ message: 'CSS 压缩合并完毕！' }));
});

// include 引入公共部分模版
gulp.task('tpl', function() {
    gulp.src(htmlSrc,{base:'src'})
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'html公共模版加载完毕！' }));

});


// 监视文件的变化
gulp.task('watch', function() {
    gulp.watch(htmlSrc, ['html']); //监控html
    gulp.watch(jsSrc, ['js', 'minijs']); // 监控html
    gulp.watch(cssSrc, ['css', 'minicss']); //监控css
});

// 注册缺省任务  // 只运行一个 watch 监控任务即可
gulp.task('default', ['f5-src']);
gulp.task('working', ['watch']);
gulp.task('csswork', ['css', 'minicss']);

// gulp.task('default', ['concat']);
