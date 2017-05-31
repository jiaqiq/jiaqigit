
/*options = {
    mapNodes: {
        "tab1":{
            "id":"box1",
            top: 0
        },
        "tab2":{
            "id":"box2",
            top: 0
        },
        "tab3":{
            "id":"box3",
            top: 0
        } 
    }
}
*/
function ScrollWindow(options){
    this.mapNodes = options.mapNodes;
    if(typeof ScrollWindow._init == "undefined"){
        //计算每个区块相对于左上角的位置
        ScrollWindow.prototype.computePosition = function(){
            var mapNodes = this.mapNodes;
            for(var clickNodeId in mapNodes){
                var item = mapNodes[clickNodeId];
                // item.top = getElementPosition(document.getElementById(item.id)).top;
                item.top = $("#"+item.id).offset().top;
            }
        };
        ScrollWindow.prototype.init = function(){
            this.computePosition();
            var mapNodes = this.mapNodes;
            for(var clickNodeId in mapNodes){
                var clickNode = document.getElementById(clickNodeId);
                clickNode.id = clickNodeId;
                clickNode.onclick=function(){
                    scrollTo(0,mapNodes[this.id].top);
                    // scrollTo(0, getElementPosition(document.getElementById(mapNodes[this.id].id)).top)            
                }
            }
        };
        ScrollWindow._init = true;
    }
}