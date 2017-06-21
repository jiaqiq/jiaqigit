var express = require( 'express' );
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
app.use(express.static(__dirname));
var ng = require('nodegrass');

app.get('/api/products/:page', function(req, res, next) {

    var REQ_HEADERS = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    ng.post("https://fangjs.sina.com.cn/mobile/api/v1/products", function (ngRes, ngStatus, ngHeaders) {
         res.send(ngRes);
        },REQ_HEADERS,{
            marketType : 1,
            pageIndex : req.params.page ,
            pageSize : 8,
            orderColumn : "",
            orderType : "",
            sessionId : "d3e8e6d4-4edc-4f56-a062-3fb599ac154c"
        },'utf8').
        on('error', function (e) {
          console.log("Got error: " + e.message);
        }
    );
});


app.listen("9999", function(){
    console.log("open")
});