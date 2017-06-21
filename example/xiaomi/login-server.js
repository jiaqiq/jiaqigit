var express = require( 'express' );
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
// app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(__dirname));
var port = "8001";

app.listen(port, function(){
    console.log('Express server listening on port:' + port);
});

var userInfo = [
  {name:'wangzhuoyuan',pwd:"123456"},
  {name:'lihe',pwd:"123456"},
  {name:'wangzhuoyuan',pwd:"123456"},
  {name:'liuxiaoshuo',pwd:"123456"},
  {name:'liucongjun',pwd:"123456"},
  {name:'chenpeng',pwd:"123456"},
  {name:'wangleilei',pwd:"123456"},
  {name:'fanyushun',pwd:"123456"},
  {name:'liujiaqi',pwd:"123456"},
  {name:'wanghao',pwd:"123456"},
  {name:'wangyifeng',pwd:"123456"},
  {name:'fanxiaoyu',pwd:"123456"},
  {name:'dangshenli',pwd:"123456"},
  {name:'supenghui',pwd:"123456"},
  {name:'miaofaqiang',pwd:"123456"},
  {name:'licailong',pwd:"123456"},
  {name:'lilingfeng',pwd:"123456"},
  {name:'wanglei',pwd:"123456"},
  {name:'wangqiao',pwd:"123456"},
  {name:'15617587994',pwd:"123456"},
  {name:'1140103268@qq.com',pwd:"123456"}
];

//post method
app.post('/api/login', function(req, res) {
  var name=req.body.name;
  var pwd=req.body.pwd;
  if(name&&pwd){
    if(checkUserInfo(name,pwd)){
      res.cookie('uname',name,{
        expires:getExpireDate(30),
        // httpOnly:true, 
        path:'/'
      });
      res.send("{result:{status:1,text:'"+name+"'}}");
    }
    else{
      res.send("{result:{status:0,text:'您的用户名或者密码有误，请核对后重新输入'}}");
    }
  }else{
    res.send("{result:{status:0,text:'用户名或者密码不能为空'}}");
  }
});

//注册是否存在验证
app.post('/checkName', function(req, res) {
  var name=req.body.name;
  //res.set({'Content-Type':'application/json'});
  console.log(name);
  if(name){
    if(checkUserName(name)){
       res.send("{result:{status:0,text:'已存在该用户名'}}");
    }else{
       res.send("{result:{status:1,text:'不存在'}}");
    }
  }
});
//post注册
app.post('/registered', function(req, res) {
  console.log(userInfo)
  var name=req.body.name;
  var pwd=req.body.pwd;
  //将用户名账号存入数据库
  if(name&&pwd){
    if(!checkUserName(name)){
      userInfo.push({'name':name,'pwd':pwd});
      res.send("{result:{status:1,text:'注册成功'}}");
    }else{
      res.send("{result:{status:0,text:'用户名已存在'}}");
    }
  }else{
    res.send("{result:{status:0,text:'用户名和密码不能为空'}}");
  }
});

//获取过期日期
function getExpireDate(minutes){
    //获取当前时间
  var date=new Date();
  //将date设置为10天以后的时间
  date.setTime(date.getTime()+minutes*60*1000);
  return date;
}

//查看用户用户存在 true表示存在
function checkUserInfo(name,pwd){
   for(var i=0;i<userInfo.length;i++){
    if(name==userInfo[i].name&&pwd==userInfo[i].pwd){
      return true;
    }
   }
   return false;
}
function checkUserName(name){
   for(var i=0;i<userInfo.length;i++){
      if(name==userInfo[i].name){
        return true;
      }
    }   
      return false;
}