1.var gulp = require('gulp');
//gulp  默认执行
gulp.task('default', function() {
  。。。
});

2.执行gulp,若果报错的话，首先cmd以管理员身份运行，安装gulp    npm install gulp --save-dev 出现 modules

3.npm install 参数 只需npm install即可全部安装  gulp-sass 可能会安装失败，然后单独从淘宝镜像安装cnpm install gulp-sass即可。
  node-sass  npm 报错 please cnpm

-g：全局安装。将会安装在全局路径下，并且写入系统环境变量，最直观的感觉就是可以可以通过命令行在任何地方调用它；全局路径 输入npm config get prefix可以看到路径，我的ubuntu系统显示/usr/local/lib/node_modules/
非全局安装：将会安装在当前定位目录； 本地安装将安装在定位目录的node_modules文件夹下，通过require()调用；
--save：将保存配置信息至package.json（package.json是nodejs项目配置文件）；因为node插件太多，不用一个package文件保存插件信息，之后维护和升级会比较麻烦
-dev：保存至package.json的devDependencies节点，不指定-dev将保存至dependencies节点；

在全局安装完gulp后，运行gulp -v 可以查看gulp版本号

4.创建package.json如下：
npm init

npm install --save-dev gulp
npm install --save-dev gulp-autoprefixer //自动前缀

5.--save-dev的好处 只执行npm install的话，可以让package.json里面devDependencies有的模块全部安装

6.gulp api

单文件和多文件的写法

参考地址：http://www.tuicool.com/articles/J3QnEb 

CSS压缩、合并文件

命令提示符执行npm install cnpm -g --registry=https://registry.npm.taobao.org //淘宝镜像、国内的可以变得更快

打开的ip不一样的话，一个是无线局域网ip,一个是以太网ip（监听的ip 不相同）

监听自动刷新预览需要 安装 browser-sync，同时，必须在html结构中才能显示

自动保存是失去焦点后才自动保存。

使用sass的时候，注意结尾的大括号要对齐（主要是直接复制过来的代码）否则容易报错。