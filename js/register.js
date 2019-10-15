$(function(){
    $(".pic1").hide();
    $(".space2").on("mouseover", function() {
        $(".pic1").show();    
    })
    $(".space2").on("mouseout", function() {
        $(".pic1").hide();
    })
    $("btn3").on("click",function(){
        $(".result").style=
        `
        bg=str;
        
        `
    })
    
})
function yanSeString(){
    var arr=[];
    for(var i=97;i<=122;i++){
        arr.push(String.fromCharCode(i));
    }
    for(var i=0;i<10;i++){
        arr.push(i);
    }
    var str="#";
    for(var i=0;i<6;i++){
        var index=parseInt(Math.random()*arr.length);
        str+=arr[index];
    }
    return str;
}
function yanzhengma(){
    var arr=[];
    for(var i=97;i<=122;i++){
        arr.push(String.fromCharCode(i));
    }
    for(var i=0;i<10;i++){
        arr.push(i);
    }
    var str="";
    for(var i=0;i<5;i++){
        var index=parseInt(Math.random()*arr.length);
        str+=arr[index];
    }
    return str;
}