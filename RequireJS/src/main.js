//baseUrl定义基准地址，paths定义路径，shim定义模块之间的依赖关系
require.config({
	baseUrl: '../src/app',
	paths: {
		'css': '../lib/css.min',
		'jquery': '../lib/jquery-1.11.3',
		'angular': '../lib/angular.min',
		'bootstrap': '../lib/bootstrap.min'
	},
	shim: {
		'nonstandard': {
			//exports处理单个
			// exports: 'modal' jquery可写成  exports: '$'
			//init处理多个
			init: function(){
				return {
					modal: modal,
					success: success
				}
			}
		},
		'bootstrap': {
			'deps': ['jquery', 'css!../css/bootstrap.min.css', 'css!../css/font-awesome.min.css']
		}
	}
});

