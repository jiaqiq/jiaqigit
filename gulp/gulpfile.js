var gulp = require('gulp');
var uglify = require('gulp-uglify');                  //压缩js
var rename = require('gulp-rename');                  //重命名
var sass = require('gulp-sass');                      //执行sass
var autoprefixer = require('gulp-autoprefixer');      //自动添加前缀
var minifycss = require('gulp-minify-css');           //压缩css
var concat = require('gulp-concat');                  //合并文件
var  browserSync = require('browser-sync').create(),  //监控浏览器自动刷新
     reload = browserSync.reload;                     //刷新
var notify = require('gulp-notify');                  //提示信息
var projectName = "./src/projectPet";                        //项目名
var indexPage = "pet-yuyue.html";                       //初始页

//如果task名称是default的话，直接执行gulp即可(或者gulp default)
// gulp.task('uglify', function() {
//     gulp.src('./src/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('./src/jsmin'));
// });

// uglify({
//     mangle: true,//类型：Boolean 默认：true 是否修改变量名
//     compress: true,//类型：Boolean 默认：true 是否完全压缩
//     preserveComments: 'all' //保留所有注释
// })

//合并与压缩位置调换， 效果不一样
//
gulp.task('uglify', function() {                    //js合并与压缩
    gulp.src([projectName+'/js/*.js','!'+projectName+'/js/*.min.js'])  //要压缩的js文件
        .pipe(concat('common.min.js'))              //合并js文件
        .pipe(uglify())                             //pipe管道的意思，执行js压缩
        // .pipe(rename({suffix:'.min'}))              //suffix 添加后缀
        .pipe(gulp.dest(projectName+'/js'))        //生成后js
        // .pipe(notify({ message: 'JS 压缩合并完毕！' }))
});

// 重要：gulp-minify-css已经被废弃，请使用gulp-clean-css，用法一致。//摘自网上，有待考证。
// 
gulp.task('minifycss',function(){                   //css合并与压缩
    gulp.src(projectName+'/css/*.css')
        .pipe(concat('common.min.css'))             //css合并
        .pipe(minifycss())                          //css压缩 ，兼容{compatibility: 'ie7','ie8','ie9'}有问题
        // .pipe(rename({suffix:'.min'}))           //suffix 添加后缀
        .pipe(gulp.dest(projectName+'/css'))        //生成后的css存放地址
        // .pipe(notify({ message: 'CSS 压缩合并完毕！' }))
});

gulp.task('css', function() {                       //sass任务
    gulp.src(projectName+'/sass/**/*.scss')
        .pipe(sass())                               //执行sass
        .pipe(autoprefixer())                       //自动添加前缀
        .pipe(rename({extname:'.css'}))             //扩展名
        .pipe(gulp.dest(projectName+'/css'));       //生成后的css存放地址
        // .pipe(notify({ message: 'SASS 执行完毕！' }))
});

//监听 sass文件下的**/(所有文件)，然后再所有*.scss结尾的所有文件，监听到之后立即执行【css】
//'/sass/**/*.scss', ['css']
// var watcher = gulp.watch(projectName+'/js/*.js', ['uglify']);
// watcher.on('change', function(event) {
//   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });
// 
var watcher = gulp.watch(projectName +'/sass/**/*.scss', ['css']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

//默认执行的任务 ,[【】中代表执行多个文件，中间用，分隔]
gulp.task('default',['css'], function() {
    //更改默认端口
    browserSync.init({
        files: projectName +"/**",
        server: {
            baseDir: projectName +"/",
            index: indexPage   //初始化打开的页面
        },
        open: "external",   //外部的,可以通过其他电脑访问      
        port: 9080             
    });
    //监听html、sass及js的修改
    gulp.watch(projectName +"/**/*.html").on('change', reload);
    gulp.watch(projectName +"/**/*.css").on('change', reload);
    gulp.watch(projectName +"/**/*.js").on('change', reload);
});