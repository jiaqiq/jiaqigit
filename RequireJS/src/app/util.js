//标准化的定义
define(['bootstrap'], function(){
	return{
		change:function(){
			$('body').css({'backgroundColor':'#fff'})
		},
		show:function(){
			alert(123)
		},
		message:function(){
			alert(456)
		}
	}
});