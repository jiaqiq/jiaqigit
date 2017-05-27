$(".zztb").tap(function(){
    window.history.go(-1);
});
// 滚动到页面底部时，自动加载更多
window.addEventListener("scroll",function scrollHandler(){              
    var scrollh = $(document).height();
    var bua = navigator.userAgent.toLowerCase();
    if(bua.indexOf('iphone') != -1 || bua.indexOf('ios') != -1){
        scrollh = scrollh-60;
    }else{
        scrollh = scrollh;
    }
    var scrollTop=Math.max(document.documentElement.scrollTop||document.body.scrollTop);
    if((scrollTop + $(window).height()) >= scrollh){
        $(".jiaz").show();
        var interval = setTimeout(function(){
            $(".jiaz").hide();
        },1000);
        var inter = setTimeout(function(){
            $.each([0,1,2,3,4],function(index,item){
                $("#cpjz a").eq(index).clone().appendTo($("#cpjz"));
            });
        },1000); 
    }
},100);
