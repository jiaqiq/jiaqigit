 //********************************tab切换导航下拉菜单************************
    var navAllNodes = document.getElementById("nav-list").children;
     var navNodes = []; 
     //后面的length-1是让最后一个不生效
    for(var i=0; i<navAllNodes.length-2; i++){
        navNodes.push(navAllNodes[i]);
    }
    var contentNodes = document.getElementById("menus-content").children;
    tabBox(navNodes,contentNodes);
//***********************************tab切换左边菜单**************************
    var leftList = document.getElementById("left-list").children;
     var listNode = []; 
    for(var i=0; i<leftList.length; i++){
        listNode.push(leftList[i]);
    }
    var contentNodes2 = document.getElementById("tab").children;
    tabBox(listNode,contentNodes2,"orange");
   
//********************************Tab切换公共函数******************************
function tabBox (navNode,contentNode){
        var interval;
    for(var i=0; i<navNode.length; i++){
        navNode[i].index = i;
        contentNode[i].index = i;
        navNode[i].onmouseenter = function(){
            for(var j=0; j<navNode.length; j++){
                if(this.index != j){
                 contentNode[j].style.display = "none";
                }else{
                   contentNode[j].style.display = "block";
                }   
            }
        };
    navNode[i].onmouseleave = function(){
           var self = this;
           interval = setTimeout(function(){
            for(var j=0;j<navNode.length;j++){
              contentNode[self.index].style.display="none";
          }
        },300);      
    };
      contentNode[i].onmouseenter = function(){
        clearTimeout(interval);
      };
      contentNode[i].onmouseleave = function(){
        contentNode[this.index].style.display="none";
      }; 
   }
}
//************************************轮播图模块******************************
    //images banner图片数组
//btnPreNode 左箭头dom对象
//btnNextNode 右箭头dom对象
//curClassName 点选中时的样式
//notCurClassName 点未选中的样式
//bannerNode banner容器节点
//interval 时间间隔（毫秒）
//pageContainer 节点容器
 //定义一个存放轮播图图片的数组
    // var images=["images/banner-1.jpg","images/banner-2.jpg","images/banner-3.jpg","images/banner-4.jpg","images/banner-5.jpg","images/banner-6.jpg","images/banner-7.jpg","images/banner-8.jpg","images/banner-9.jpg","images/banner-10.jpg"];
    // //左箭头，右箭头
    // var btnPreNode = document.getElementById("button-pre");
    // var btnNextNode = document.getElementById("button-next");
    // var curClassName = "icon-page-cur inline-block";
    // var notCurClassName = "icon-page inline-block";
    // var bannerNode = document.getElementById("banner-container");
    // var pageContainer=document.getElementById("page-container");
    // banner(images,btnPreNode,btnNextNode,curClassName,notCurClassName,bannerNode,2000,pageContainer);
//*****************************轮播图公共函数*************************************
var options = {
  images:["images/banner-1.jpg","images/banner-2.jpg","images/banner-3.jpg","images/banner-4.jpg","images/banner-5.jpg","images/banner-6.jpg","images/banner-7.jpg","images/banner-8.jpg","images/banner-9.jpg","images/banner-10.jpg"],
  btnPreNode:"button-pre",
  btnNextNode:"button-next",
  curClassName:"icon-page-cur inline-block",
  notCurClassName:"icon-page inline-block",
  bannerNode:"banner-container",
  pageContainer:"page-container",
  intervalTime:3000
}
banner(options);
function banner(options){
    var images = options.images;
    var btnPreNode = document.getElementById(options.btnPreNode);
    var btnNextNode = document.getElementById(options.btnNextNode);
    var curClassName = options.curClassName;
    var notCurClassName = options.notCurClassName;
    var bannerNode = document.getElementById(options.bannerNode);
    var pageContainer=document.getElementById(options.pageContainer);
    var intervalTime = options.intervalTime;
// function banner(images,btnPreNode,btnNextNode,curClassName,notCurClassName,bannerNode,intervalTime,pageContainer){
    var currentIndex = 0;
    //更新banner图片和轮播图的点的选中状态
    //oldCurrentIndex 老的选中的轮播图的索引
    //newCurrentIndex 新的选中的轮播图的索引
    //isAuto 是否是计时器触发的，true表示是
    function updateImage(oldCurrentIndex,newCurrentIndex,isAuto){
        if(!isAuto){
            clearInterval(interval);
            interval = setInterval(function(){getNext(true);},intervalTime);
        }
        //老的轮播图的点置灰
        iconNodes[oldCurrentIndex].className = notCurClassName;
        //新的轮播图的点选中
        iconNodes[newCurrentIndex].className = curClassName;
        //更新图片路径
        bannerNode.style.background = "url(" + images[newCurrentIndex] + ") repeat-x center center";
    }
    btnPreNode.onclick=function(){
        //老的选中的轮播图的索引
        var oldIndex = currentIndex;
        if(currentIndex==0){
            currentIndex = images.length - 1;
        }else{
            currentIndex--;
        }
        //currentIndex已经发生了变化
        updateImage(oldIndex,currentIndex,false);
    };
    btnNextNode.onclick = function(){
        getNext(false);
    };
    function getNext(isAuto){
        var oldIndex = currentIndex;
        if(currentIndex==images.length - 1){
            currentIndex = 0;
        }else{
            currentIndex++;
        }
        updateImage(oldIndex,currentIndex,isAuto);
    }
    var interval = setInterval(function(){getNext(true);},intervalTime);
    var iconHtml = "";
    for(var i=0;i<images.length;i++){
        if(i==0){
            iconHtml += '<i class="'+curClassName+'"></i>';
        }else{
            iconHtml += '<i class="'+notCurClassName+'"></i>';
        }
    }
    pageContainer.innerHTML = iconHtml;
    var iconNodes=pageContainer.children;
    //method1
    for(var i=0;i<images.length;i++){
        iconNodes[i].index = i; 
        iconNodes[i].onmouseenter = function(){
            //这个位置currentIndex和this.index还不一致，不能放在下面代码后面执行
            updateImage(currentIndex,this.index,false);
            currentIndex = this.index;
        }
    }
}
//******************************放大镜背景变色********************************
   var searchRight = document.getElementById("submit-btn");
        searchRight.onmouseover=function(){
            searchRight.className = "search-btn orange"; 
        };
        searchRight.onmouseout=function(){
            searchRight.className = "search-btn"; 
        };
//***********************************购物车模块*********************************
var miniShopping = document.getElementById("mini-shopping");    
var miniMenu=document.getElementById("mini-menu");
var miniSp = document.getElementById("mini-sp");
var shoppingSp = document.getElementById("shopping-sp");
heightTab(miniShopping,miniMenu,117,miniSp);
// ******************************滑动 购物车 搭配效果 阴影***********************
// 
var tabListChange = document.getElementById("tablist-change").children;
var contentList = document.getElementById("content-list").children;
tabChange(tabListChange,contentList);
var squareBox = document.getElementById("square-box").children;
var squareBox2 = document.getElementById("square-box2").children;
var squareBox3 = document.getElementById("square-box3").children;
var squareBox4 = document.getElementById("square-box4").children;
//fatherBox:需要该效果的节点
//containerBox:存放内容的容器节点，里面存放展示的内容
//showHeight:设置显示的高度
function heightTab(fatherBox,containerBox,showHeight,slideBox){
    //先给父元素设置相对定位
    fatherBox.style.position="relative";
    //再让该容器定位与父元素底部，并设置高度为0;
    containerBox.style.position="absolute";
    containerBox.style.height=0+"px";
    // containerBox.style.bottom=0;
    // containerBox.style.top = 40+"px";
    // containerBox.style.right=0;
    var interval;
    fatherBox.onmouseenter=function(){
        var height=parseFloat(containerBox.style.height);
        if(interval!=-1){        //定时器清除之后就变成-1;
            clearInterval(interval);//加上这个if之后，在鼠标移入高度还没增加完的时候，触发了鼠标移出操作，然后又移入这种反复操作，就需要先判断定时器是否已经清除（及移入和移出两个函数在同一时间只能执行一个操作，要么移入执行，要么移出执行，不加会有bug）
        }
         interval=setInterval(function(){
            height+=10;
            if (height>=showHeight) {
                height=showHeight;
                clearInterval(interval);
            }
            containerBox.style.height=height+"px";
            containerBox.style.lineHeight =height+"px";
            miniShopping.style.backgroundColor = "#fff";
            slideBox.style.display = "block";
            shoppingSp.style.color = "orange";
            miniShopping.style.zIndex = 5;
            shoppingSp.style.background = "url(images/icon-buy2.png) no-repeat 0 center";
            fatherBox.style.boxShadow = "0 15px 30px rgba(0,0,0,0.3)";
            fatherBox.style.bottom = "3px";
        },30);
    };
    fatherBox.onmouseleave=function(){
        var height=parseFloat(containerBox.style.height);
        if(interval!=-1){
            clearInterval(interval);
        }
         interval=setInterval(function(){
            height-=10;
            if (height<=0) {
                height=0;
                clearInterval(interval);
            }
            containerBox.style.height=height+"px";
            containerBox.style.lineHeight =height+"px";
            miniShopping.style.backgroundColor = "#4c4c4c";
            shoppingSp.style.color = "";
            shoppingSp.style.background = "url(images/icon-buy.png) no-repeat 0 center";
            fatherBox.style.boxShadow = "";
            fatherBox.style.bottom = "";
            //下面这个if是当鼠标离开后，文字内容会在下拉框消失后消失。
            if(containerBox.style.height == (height/2)+"px"){ 
              slideBox.style.display = "none";
            }
        },30);
    };
}
//******************************* 搭配切换,执行上面函数 **************************
for(var i=0;i<squareBox.length;i++){
  var j = squareBox[i].children.length;
  heightTab(squareBox[i],squareBox[i].children[j-1],75,squareBox[i].children[j-1].children[0]);
  heightTab(squareBox2[i],squareBox2[i].children[j-1],75,squareBox2[i].children[j-1].children[0]);
  heightTab(squareBox3[i],squareBox3[i].children[j-1],75,squareBox3[i].children[j-1].children[0]);
  heightTab(squareBox4[i],squareBox4[i].children[j-1],75,squareBox4[i].children[j-1].children[0]);
}
//**********************************滑动效果*************************************
var btnLeftNode = document.getElementById("btn-left");
var btnRightNode = document.getElementById("btn-right");
var moveBox = document.getElementById("move-box");
//html里面子节点的个数（页数）
var count = moveBox.children.length;
//第几页 （索引从1开始）
var clickCount = 1;
//往后、往前动态添加子节点
moveBox.innerHTML += moveBox.children[0].outerHTML;
moveBox.innerHTML = moveBox.children[count-1].outerHTML + moveBox.innerHTML;
//容器可见区域的宽度
var width = parseInt(moveBox.children[0].style.width);
//显示第一个的话，margin-left要置为负的显示区域的宽度（单位必不可少）
moveBox.style.marginLeft = "-"+width+"px";
//容器的总宽度
moveBox.style.width = width*moveBox.children.length+"px";
//按钮现在可以被点
var flag = true;
//点击左按钮
btnLeftNode.onclick=function(){moveLeft()};
  function moveLeft(){
    if(flag){
        flag = false;
        //获取容器的向左偏移的值
        var left = parseFloat(moveBox.style.marginLeft);
        //要显示的是第几页
        clickCount++;
        var interval = setInterval(function(){
            //往左偏移
            left -= 21;
            //本次点击偏移的距离大于width的话
            if(left<=-(width*clickCount)){
                //最后一页上继续往左的情况
                if(clickCount==count+1){
                    //当移动结束后，置换动态添加到最后的节点的margin-left值为第一个的margin-left值
                    clickCount = 1;
                    left = "-"+width;
                }else{//非最后一页往左
                    left = -(width*clickCount);
                }
                //赋上移动结束后的margin-left值（普通的和需要置换的）
                moveBox.style.marginLeft = left + "px";
                //移动结束后，清除时钟
                clearInterval(interval);
                flag = true;
            }else{//本次点击偏移的距离还不到width的话
                moveBox.style.marginLeft = left + "px";
            }
        },30); 
    }
};
setInterval(moveLeft,10000);
btnRightNode.onclick=function(){moveRight()};
function moveRight(){
    if(flag){
        flag = false;
        var left = parseFloat(moveBox.style.marginLeft);
        clickCount--;
        var interval = setInterval(function(){
            left += 21;
            //下面的>=-是因为clickCount--为负，所以--得正。
            if(left>=-(width*clickCount)){
                if(clickCount==0){
                    clickCount = count;
                    left = -width*count;
                }else{
                    left = -(width*clickCount);
                }
                moveBox.style.marginLeft = left + "px";
                clearInterval(interval);
                flag = true;
            }else{
                moveBox.style.marginLeft = left + "px";
            }
        },30); 
    }
};
// ****************************改变背景图片*************************************
function changeBgImage(imageNode,oldImage,newImage){
  imageNode.onmouseenter=function(){
      imageNode.style.background = "url(images/" +newImage+ ") no-repeat center";
    };
  imageNode.onmouseleave=function(){
      imageNode.style.background = "url(images/" +oldImage+ ") no-repeat center";
    };
}
changeBgImage(btnLeftNode,"icon-starleft.png","icon-starleft2.png");
changeBgImage(btnRightNode,"icon-starright.png","icon-starright2.png");
//*************************智能硬件***查看全部***部分*****************************
var lookAll = document.getElementById("look-all");
    lookAll.onmouseenter=function(){
        lookAll.style.color = "#ff6700";
        lookAll.style.background = "url(images/icon-arrow-r2.png) right no-repeat";
    };
    lookAll.onmouseleave=function(){
        lookAll.style.color = "#343434";
        lookAll.style.background = "url(images/icon-arrow-r.png) right no-repeat";
    };

  //***************************** 智能硬件凸起 ********************************
 var brickBox = document.getElementById("brick-box").children;
  function addBoxShadow(brickNode){
    for(var j=0;j<brickBox.length;j++){
      brickBox[j].onmouseenter=function(){
          this.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
          this.style.bottom = "2px";
      };
      brickBox[j].onmouseleave=function(){
          this.style.boxShadow = "";
          this.style.bottom = "";
      };
    }
  }
  addBoxShadow(brickBox);
// ****************************  Tab切换公共函数  *************************
function tabChange(navList,contentList){
    var tabList = [];
for(var i=0; i<navList.length; i++){
  tabList.push(navList[i]);
}
  for(i=0; i<tabList.length; i++){
    tabList[i].index = i;
    tabList[i].onmouseenter=function(){
      for(var j=0; j<tabList.length; j++){
         if(this.index == j){
           tabList[j].className = "selected";
           contentList[j].style.display = "block";
         }else{
           tabList[j].className = "";
           contentList[j].style.display = "none";
         }
      }
    };
  }
}
// *********************************  cookie  *************************************
//********************************  登陆弹框  ********************************
   var loginPopup=document.getElementById("login-popup");
   var loginBoxNode = document.getElementById("wrapper22");
       loginPopup.onclick=function(){
          loginBoxNode.style.display="block";
          error.style.display = "none";
       }
   // ************************************************************************
function getCookie(key){
    var result=document.cookie.match(new RegExp("(^| )"+key+"=([^;]*)(;|$)"));
    return result!=null?unescape(decodeURI(result[2])):null
}
var uname = document.getElementById("username");
var password=document.getElementById("pwd");
var error=document.getElementById("error-outcon");
var loginBtn = document.getElementById("login-button");
// var errFor = document.getElementById("error-forbidden");
var userName = getCookie("uname");
var infoNode = document.getElementById("login-popup");
var exit = document.getElementById("exit");
var register = document.getElementById("register");
var errorNode = document.getElementById("err1");
 // 计算点击时间间隔
    var time;
    // 计算点击次数
    var count2=0;
if(userName!=null){
    infoNode.style.display="";
    infoNode.innerHTML=userName;
    register.innerHTML="我的订单";
}else{
  loginBtn.onclick=function(){
    denglutankuang()
  };
}
        loginBtn.onclick=function(){denglutankuang()};
        function denglutankuang(){
            loginBoxNode.style.display="";
            errorNode.innerHTML = "";
            var now = +new Date;
            if(time&&(now-time<=500)){
                errorNode.innerHTML = "您的操作过于频繁";
                return;
            }
            if(count2>=5){
                loginBtn.disabled = true;
                var btnValue = loginBtn.value;
                var second = 10;
                var self = loginBtn;
                loginBtn.value += "("+second+")s";
                var interval = setInterval(function(){
                    self.value = btnValue + "("+(--second)+")s";
                    if(second==0){
                        clearInterval(interval);
                        self.value = btnValue;
                    }
                },1000);
                errorNode.innerHTML = "错误超过5次,10秒后再试";
                setTimeout(function(){
                    self.disabled = false;
                    count2=0;
                },10*1000);
                return;
            }
            time = now;
            //验证邮箱或手机号是否合法
        var regMail = /^((([\w+-]*\w+)\.)+)?([\w+-]+\w+)@[0-9a-zA-Z]+\.(com|cn)$/;
        var regMobile = /^1[3578]\d{9}$/;
        if(uname.value==""||password.value==""){
            error.style.display="block";
            errorNode.innerHTML = "用户名或密码不能为空";
        }else if(regMail.test(uname.value)==false&&regMobile.test(uname.value)==false){
            errorNode.innerHTML = "用户名或密码不正确，请重新输入！";
        }else{
                ajax({
                    //发送请求的方式 post or get
                    method: "post",
                    //请求的接口的地址
                    url: "/api/login",
                    //编码
                    charset: "utf-8",
                    data:{
                        name:document.getElementById("username").value,
                        pwd:document.getElementById("pwd").value
                    },
                    //是否异步
                    async: true,
                    //回调函数
                    callback:function(data){
                        errorNode.style.display="none";
                        eval("var resultObj = "+ data);
                        var result = resultObj.result;
                        if(result.status==1){
                            count2=0;
                            loginBoxNode.style.display="none";
                            infoNode.style.display="";
                            infoNode.innerHTML = result.text;
                            register.innerHTML = "我的订单";
                        }else{
                              count2++;
                              errorNode.style.display="";
                              errorNode.innerHTML = result.text;
                              error.style.display="block";
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
//退出登陆 
exit.onclick=function(){
    // 点击清除cookie
    setCookie("uname","",-1);
    infoNode.innerHTML="登录";
    register.innerHTML="注册";
    //清除cookie后如果再次登陆，输入框中还有值的话，再进行重置。
    var formNode = document.getElementById("login-main-form");
        formNode.reset();
}
// *************************************jsonp***********************************
//***********************输入框获取焦点或失去焦点***************************
var shuruNode = document.getElementById("shuru");
var shuruHot = document.getElementById("shuru-hot");
var submitBtn = document.getElementById("submit-btn");
var shuruDown = document.getElementById("shuru-down2");
    shuruNode.onfocus=function(){
      shuruHot.style.display = "none";
      shuruNode.style.border = "1px solid #ff6700";
      submitBtn.style.border = "1px solid #ff6700";
      shuruDown.style.display= "block";
    };
    shuruNode.onblur=function(){
      shuruHot.style.display = "block";
      shuruDown.style.display="none";
      shuruNode.style.border = "1px solid #b0b0b0";
      submitBtn.style.border = "1px solid #b0b0b0";
      if(shuruNode.value!=""){
        shuruHot.style.display = "none";
      }
    };
//输入框下拉菜单
function getData(key){
    //调用方法
    jsonp({
        url:"http://search.mi.com/search/expand",
        callback:"jsonpcallback",   //跟后台协商的接收回调名
        data:{keyword:key},
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
            shuruDown.innerHTML = str.join(""); 
        },
        fail:function(){
            console.log("error")
        },
        time:10000
    });
}
var data = shuruDown.innerHTML;
shuruNode.onkeyup = function(){
    if(this.value!=""){
        getData(this.value);
    }else{
        shuruDown.style.display="block";
        shuruDown.innerHTML = data;
    }
}
// ******************************* activity-right ********************************************
var activity1=document.getElementById("activity1");
var activity2=document.getElementById("activity2");
var activity3=document.getElementById("activity3");
function Mengban(activity){
  activity.onmouseenter=function(){   
  this.style.filter="alpha(opacity=80)";//兼容ie
  this.style.opacity="0.8";//兼容谷歌
  };
  activity.onmouseleave=function(){
  this.style.filter="";
  this.style.opacity="";
  };
}
Mengban(activity1);
Mengban(activity2);
Mengban(activity3);