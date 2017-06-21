  //左边nav菜单
    $(".banner-list").on("mouseenter mouseleave","li",function(){
        var index=$(this).index();
        $(".tabbox").children().eq(index).toggle();
        $(".tabbox").children().eq(index).on({
            "mouseenter":function(){$(this).show();$(".banner-list a").eq(index).css("background-color","#ff6700")},
            "mouseleave":function(){$(this).hide();$(".banner-list a").eq(index).css("background-color","")}
        });  
    });

    // //上边nav菜单
    var menusNode=$(".menus-change");
    $("#nav-list li:lt(7)").on({
      "mouseenter":function(){
        var index=$(this).index();
          menusNode.stop(true,true).slideDown();
          menusNode.show().children().eq(index).show().siblings().hide();
        },
      "mouseleave":function(){
          menusNode.delay(600).slideUp();        
      }
   });
    menusNode.on({
      "mouseenter":function(){$(this).stop(true,true)},
      "mouseleave":function(){$(this).delay(600).slideUp()}
    });
   //购物车
   $(".shopping").on("mouseenter",function(){
       $(this).css({"background":"#fff url(images/icon-buy2.png) no-repeat 15px center"});
       $(".shopping span").css("color","#ff6700");
       $("#mini-menu").stop(true,true).slideDown();
       $("#mini-sp").show();
   }).on("mouseleave",function(){
       $(this).css({"background":"url(images/icon-buy.png) no-repeat 15px center"});
       $(".shopping span").css("color","");
       $("#mini-menu").slideUp();
       $("#mini-sp").hide();                      
   });

   //输入框放大镜
   $(".search-btn").on({
    "mouseover":function(){$(this).css("background-color","#ff6700")},
    "mouseout":function(){$(this).css("background-color","")}
   });

   //小米明星单品
      //左右箭头变色
    $(".icon-starleft").on("mouseover",function(){
       $(this).css("background","url(images/icon-starleft2.png) no-repeat center");
    }).on("mouseout",function(){
       $(this).css("background","url(images/icon-starleft.png) no-repeat center");
    });
    $(".icon-starright").on("mouseover",function(){
       $(this).css("background","url(images/icon-starright2.png) no-repeat center");
    }).on("mouseout",function(){
       $(this).css("background","url(images/icon-starright.png) no-repeat center");
    });
$(document).ready(function() {
  // var flag=true;
      var blw=($("#move-box li").width()+7.5)*5;
      //获取单个子元素所需宽度,7.5为margin宽度,*5为一次移动5个。
      var liArr = $("#move-box ul").children("li");
      //获取子元素数量
      var mysw = $(".move").width();
      //获取子元素所在区域宽度
      var mus = parseInt(mysw/blw);
      //计算出需要显示的子元素的数量
      var length = liArr.length/5-mus;
      //计算子元素可移动次数（被隐藏的子元素数量）
      var i=0;
      var interval,interval2;
      $(".icon-starright").click(function(){
          i++;
          if(interval2!=-1){
              clearInterval(interval2);
          }
          //点击i加1
          // clearInterval(interval);
          if(i<length){
              $("#move-box").animate({left:-(blw*i)},800);
              //子元素集合向左移动，距离为子元素的宽度乘以i。
          }else{
              i=length;
              $("#move-box").animate({left:-(blw*length-blw)},800);
              clearInterval(interval);
              // flag=true;
               leftClick();
              //超出可移动范围后点击不再移动。最后几个隐藏的元素显示时i数值固定位已经移走的子元素数量。
          }
      });
      $(".icon-starleft").click(function(){
          i--;
          if(interval!=-1){
              clearInterval(interval);
          }
          //点击i减1
           // clearInterval(interval2); 
          if(i>0){
             $("#move-box").animate({left:-(blw*i-blw)},800);
             //子元素集合向右移动，距离为子元素的宽度乘以i。
          }else{
             i=0;
             $("#move-box").animate({left:0},800);
             //超出可移动范围后点击不再移动。最前几个子元素被显示时i为0。
             clearInterval(interval2);
              // flag=false;
             rightClick();
          }
      });
      //初始执行滑动
        rightClick();
        //左自动
      function leftClick(){
        interval2=setInterval(function(){
           $(".icon-starleft").trigger("click");
          },3000);
      };
        //右自动
       function rightClick(){
        interval=setInterval(function(){
           $(".icon-starright").trigger("click");
          },3000);
      };
    //    //自动向左向右切换
    // setInterval(function(){
    //     if(flag){
    //         leftClick();
    //     }else{
    //         rightClick();
    //     }
    // },3000)
});
  //轮播图制作jq
var index=0;
var pageNodes = $(".page-list i");
var pages = pageNodes.length;
var interval;
$(function(){
    $(".img").eq(0).show().siblings().hide();
        ShowTime();
    pageNodes.hover(function(){
        index=$(this).index();
        Show();
        clearInterval(interval);
    },function(){
        ShowTime();
    });
    $(".btn-pre").click(function(){
        clearInterval(interval);
        if(index==0){
            index=pages;
        }
        index--;
        Show();
        ShowTime();
    });
    $(".btn-next").click(function(){
        clearInterval(interval);
        if(index==pages-1){
            index=-1;
        }
        index++;
        Show();
        ShowTime();
    });
});
function Show(){
    $(".img").eq(index).fadeIn().siblings().fadeOut().stop(true,true);
    pageNodes.eq(index).addClass("cur").siblings().removeClass("cur");
};
function ShowTime(){
     interval=setInterval(function(){
        index++;
        if(index==pages){
            index=0;
        }
        Show();
    },3000);
}

//搭配选项卡切换
var tabList=$(".tab-list li");
tabList.mouseover(function(){
  var index=$(this).index();
  tabList.eq(index).addClass("selected").siblings().removeClass('selected');
  $("#content-list").children().eq($(this).index()).show().siblings().hide();
});

//搭配选项卡弹框
$(".dapei li").hover(
  function(){
    var index= $(".dapei li").index($(this));
    console.log(index);
    $(".mini-up").eq(index).stop(true,true).slideDown();
    $(this).css("cursor","pointer");
  },
  function(){
     var index= $(".dapei li").index($(this));
    $(".mini-up").eq(index).slideUp();
  }
);

//智能硬件
var brickList=$("#brick-box li");
var index;
brickList.on({
  "mouseover":function(){
       index=$(this).index();
    brickList.eq(index).css({"boxShadow":"3px 10px 20px rgba(0,0,0,0.1)","bottom":"2px"});
  },
  "mouseout":function(){
       index=$(this).index();
    brickList.eq(index).css({"boxShadow":"","bottom":"0"});
  }
});
// //输入框下拉
var shuruNode=$("#shuru");
var shuruDown=$("#shuru-down2");
var hotWords=$(".hot-words a");
var submitBtn=$("#submit-btn");
var initData=shuruDown.html();
function getData(key){
  $.ajax({
    url:"http://search.mi.com/search/expand",
    dataType:"jsonp",
    data:{keyword:key},
    jsonp:"jsonpcallback",
    // jsonpCallback:'callback',
    type:"post",
    success:function(json){
              var str = [];
              for(var i=0;i<json.length;i++){
                  var item = json[i];
                  str.push("<li>");
                      str.push("<a href='javascript:void(0);' class='clearfix'>");
                          str.push("<span class='sp1'>"+ item.Key +"</span>");
                          str.push("<span class='sp2'>"+ "约有"+item.Rst+"件"+"</span>");
                      str.push("</a>");
                  str.push("</li>");
              }
            shuruDown.html(str.join(""));
          },
    fail:function(){
        console.log("error")
    },
    time:10000
  });
}
shuruNode.keyup(function(){
  if($(this).val()!=""){
    getData($(this).val());
  }else{
   shuruDown.html(initData);
  }
});
shuruNode.on({
  "focus":function(){
    hotWords.hide();
    shuruDown.show();
    shuruNode.css("border","1px solid #ff6700");
    submitBtn.css("border","1px solid #ff6700");
},
  "blur":function(){
    hotWords.show();
    shuruDown.hide();
    shuruNode.css("border","1px solid #b0b0b0");
    submitBtn.css("border","1px solid #b0b0b0");
    if($(this).val()!=""){
      hotWords.hide();
    }
  }
  });

// $("#close").click(function(){
//     $("#login-page").fadeOut();
// });
// 注册页面关闭
$("#zcclose").click(function(){
    $("#zc-page").fadeOut();
});

//自带注册小米账号
 function skip(){
    $("#wrapper22").hide();
    $("#zc-page").show();
  }
//注册弹框
var register=$("#register");
var registerBox=$("#zc-page");
register.click(function(){
  if(register.html()=="注册"){
    registerBox.show();
}
});

//登陆弹框
var loginPopup=$("#login-popup");
var loginBoxNode=$("#wrapper22");
loginPopup.click(function(){
  if(infoNode.html()=="登录"){
     loginBoxNode.show();
  }
  error.hide();
});
function getCookie(key){
    var result=document.cookie.match(new RegExp("(^| )"+key+"=([^;]*)(;|$)"));
    return result!=null?unescape(decodeURI(result[2])):null
}
var uname=$("#username");
var password=$("#pwd");
var error=$("#error-outcon");
var loginBtn =$("#login-button");
var userName = getCookie("uname");
var infoNode = $("#login-popup");
var exit = $("#exit");
var register = $("#register");
var errorNode = $("#err1");
// 计算点击时间间隔
    var time;
    // 计算点击次数
    var count2=0;
if(userName!=null){
    infoNode.css("display","");
    infoNode.html(userName);
    register.html("我的订单");
}
        loginBtn.click(function(){denglutankuang()});
        function denglutankuang(){
            loginBoxNode.css("display","");
            errorNode.html("");
            var now = +new Date;
            if(time&&(now-time<=500)){
                errorNode.html("您的操作过于频繁");
                return;
            }
            if(count2>=5){
                loginBtn.prop({disabled:true});
                var btnValue = loginBtn.val();
                var second = 10;
                var self = loginBtn;
                loginBtn.val("立即登陆("+second+")s");
                var interval = setInterval(function(){
                    self.val(btnValue + "("+(--second)+")s");
                    if(second==0){
                        clearInterval(interval);
                        self.val() = btnValue;
                    }
                },1000);
                errorNode.html("错误超过5次,10秒后再试");
                setTimeout(function(){
                    self.prop({disabled:false});
                    count2=0;
                },10*1000);
                return;
            }
            time = now;

 //验证邮箱或手机号是否合法
        var regMail = /^((([\w+-]*\w+)\.)+)?([\w+-]+\w+)@[0-9a-zA-Z]+\.(com|cn)$/;
        var regMobile = /^1[3578]\d{9}$/;
        if($("#username").val()==""||$("#pwd").val()==""){
            error.show();
            errorNode.html("用户名或密码不能为空");
        }else if(regMail.test($("#username").val())==false&&regMobile.test($("#username").val())==false){
            errorNode.html("用户名或密码不正确，请重新输入！");
        }else{
                $.ajax({
                    type: "post",
                    url: "/api/login",
                    data:{
                        name:$("#username").val(),
                        pwd:$("#pwd").val()
                    },
                    //是否异步
                    async: true,
                    success:function(data){
                        errorNode.hide();
                        eval("var resultObj = "+ data);
                        var result = resultObj.result;
                        if(result.status==1){
                            count2=0;
                            loginBoxNode.hide();
                            infoNode.css("display","");
                            infoNode.html(result.text);
                            register.html("我的订单");
                            //登陆成功才显示退出按钮
                            exit.show();
                        }else{
                              count2++;
                              errorNode.css("display","");
                              errorNode.html(result.text);
                              error.show();
                        }
                    }  
                })
            }
        };
//通用的设置cookie的方法
function setCookie(name, value, minutes, domain, path){  
  var cookie = name + '=' + escape(value);  
  if (minutes){  
      var expiration = new Date((new Date()).getTime() + minutes*60000);  
      cookie += ';expires=' + expiration.toGMTString();  
  }  
  if (path){
      cookie += ';path=' + path;  
  }else{            
      cookie += ';path=/';  
  }
  if (domain) cookie += ';domain=' + domain;
  document.cookie = cookie;  
}
//如果显示的是登录两字，不能出现退出按钮
if(infoNode.html()=="登录"){
  exit.hide();
}else{
  exit.show();
}
//退出登陆 
exit.click(function(){
    // 点击清除cookie
    setCookie("uname","",-1);
    infoNode.html("登录");
    register.html("注册");
    //退出登陆后，退出按钮隐藏
    exit.hide();
    //清除cookie后如果再次登陆，输入框中还有值的话，再进行重置。
    var formNode = $("#login-main-form")[0];
        formNode.reset();
})

//左侧楼层导航
  var btb=$(".leftsite-nav");
  var tempS;
  $(".leftsite-nav").hover(function(){
      var thisObj = $(this);
      tempS = setTimeout(function(){
      thisObj.find("li").each(function(i){
        var tA=$(this);
        setTimeout(function(){ tA.animate({marginLeft:"0"},200);},50*i);
      });
    },200);
  },function(){
    if(tempS){ clearTimeout(tempS); }
    $(this).find("li").each(function(i){
      var tA=$(this);
      setTimeout(function(){ tA.animate({marginLeft:"-70"},200,function(){
      });},50*i);
    });
  });
  var isIE6 = !!window.ActiveXObject&&!window.XMLHttpRequest;
  // //滚动加载
  // var scrollLoad =function(){
  //   $("#content iframe[_src]").each(function(){
  //       var t = $(this);
  //       if( t.offset().top<= $(document).scrollTop() + $(window).height()  )
  //       {
  //         t.attr( "src",t.attr("_src") ).removeAttr("_src");
  //       }
  //   });//each E
  // }
  // scrollLoad();
  // $(window).scroll(function(){ 
  //   if(isIE6){ btb.css("top", $(document).scrollTop()+30) }
  //   scrollLoad();
  // });
// ----------------------------  leftsite  --------------------------------
$('#leftsite-list li').click(
    function(){
        var index=$(this).index();
        $('html,body').animate({
            'scrollTop':$($('.box')[index]).offset().top
        },'normal')
    }
)
var array=[];
for(var i=0;i<$('.box').length;i++){
    array.push($($('.box')[i]).offset().top);
}
$(window).scroll(function(){
    var s=$(window).scrollTop();
    // for(var i=array.length-1;i>=0;i--){
    //     if(s>=array[i]){
    //         return $($('#leftsite-list li')[i]).addClass('curent').siblings().removeClass('curent');
    //     }
    // }
})





