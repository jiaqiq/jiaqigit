
function createXMLHttpObject(){
    try
    {
        return new XMLHttpRequest();//非IE浏览器及IE7(7.0及以上版本)，用xmlhttprequest对象创建
    }
    catch(e)
    {
    }
    try
    {
        return new ActiveXObject('Msxml2.XMLHTTP');//如果使用较新版本的 Internet Explorer，则需要使用对象 Msxml2.XMLHTTP
    }
    catch(e)
    {
    }
    try
    {
        return new ActiveXObject('Microsoft.XMLHTTP');//较老版本的 Internet Explorer 则使用 Microsoft.XMLHTTP
    }
    catch(e)
    {
    }
    return null;
}
Object.prototype.toQueryString = function(){
    var queryArray = [];
    for(var key in this){
        if(this.hasOwnProperty(key)){
            queryArray.push(key+"="+this[key]);
        }
    }
    return queryArray.join("&");
};
function ajax(options){
    var xmlhttp = createXMLHttpObject();
    if(xmlhttp != null)
    {
        //发送请求的方式 post or get
        var method = options.method.toUpperCase();
        //请求的接口的地址
        var url = options.url;
        //文件的编码
        var charset = options.charset || "utf-8";
        //回调函数
        var callback = options.callback;
        //是否异步
        var isAsync = options.async || true;
        //options.data是一个对象
        var content = options.data && options.data.toQueryString();
        if(method=="GET"&&content){
            url = url.indexOf("?")!=-1 ? url + "&" + content : url + "?" + content;
            content = null;
        }
        //第三个参数表示是否异步，true表示是异步
        xmlhttp.open(method,url,isAsync);
        if(method=="POST"){
            xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset="+charset);
        }else{
            xmlhttp.setRequestHeader("Content-Type","text/html");
        }
        xmlhttp.setRequestHeader("charset",charset);
        xmlhttp.onreadystatechange = function()
        {
            if(xmlhttp.readyState == 4)
            {
                if(xmlhttp.status == 200)
                {
                    var text = xmlhttp.responseText;
                    xmlhttp.abort();
                    xmlhttp = null;
                    callback(text);
                }
            }
        };
        content = content == undefined ? null : content;
        xmlhttp.send(content);
    }
}