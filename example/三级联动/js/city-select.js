var num1,num2;
$(function(){
    for(var i=0;i<city.citylist.length;i++){
        $("#selProvince").append("<option>"+city.citylist[i].p+"</option>")
    }
    
$("#selProvince").change(function(){
    $("#selCity").children().not(":eq(0)").remove();
    $("#selCountry").children().not(":eq(0)").remove();
    num1=$(this).children("option:selected").index();
    // alert(num1)获取第一级被选中的索引
    // 【num1-1】是因为有个-请选择-选项，需要减去
    var aaCity=city.citylist[num1-1].c;
    for(var j=0;j<aaCity.length;j++){
        $("#selCity").append("<option>"+aaCity[j].n+"</option>");
    }
});

$("#selCity").change(function(){
    $("#selCountry").children().not(":eq(0)").remove();
    //alert(num2)获取第二级被选中的索引
    // 【num2-1】是因为有个-请选择-选项，需要减去
    num2=$(this).children("option:selected").index();
    var aaCountry=city.citylist[num1-1].c[num2-1].a;
    for(var z=0;z<aaCountry.length;z++){
        $("#selCountry").append("<option>"+aaCountry[z].s+"</option>")
    }
});
});
