
Object.prototype.toQueryString= function(){
    var queryArray = [];
    for(var key in this){
        if(this.hasOwnProperty(key)){
            queryArray.push(key+"="+this[key]);
        }
    }
    return queryArray.join("&");
};
var jsonp = function(options) {
    options = options || {};
    if (!options.url || !options.callback) {
        throw new Error("参数不合法");
    }

    //创建 script 标签并加入到页面中
    var callbackName = ('jsonp_' + Math.random()).replace(".", "");
    var oHead = document.getElementsByTagName('head')[0];
    var params = "";
    if(options.data){
        options.data[options.callback] = callbackName;
        params += options.data.toQueryString();
    }else{
        params+=options.callback+"="+callbackName;
    }
    var oS = document.createElement('script');
    oHead.appendChild(oS);

    //创建jsonp回调函数
    window[callbackName] = function (json) {
        oHead.removeChild(oS);
        clearTimeout(oS.timer);
        window[callbackName] = null;
        options.success && options.success(json);
    };

    //发送请求
    oS.src = options.url + '?' + params;

    //超时处理
    if (options.time) {
        oS.timer = setTimeout(function () {
            window[callbackName] = null;
            oHead.removeChild(oS);
            options.fail && options.fail({ message: "超时" });
        }, options.time);
    }
};