
    $(".form1 div").tap(function(){
    $(this).addClass("active").siblings().removeClass("active");
    });

    $(".bdShare").tap(function(){
        // 弹层
        layer.open({
            // content: $('.bdsharebuttonbox'), //捕获的元素
            content:"百度分享",
            btn: '不分享了'
        });
        //百度分享代码
        window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"1","bdSize":"32"},"share":{},"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
    });


