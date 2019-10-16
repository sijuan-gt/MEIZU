let panduan=false;
$("#dianji").onclick=function(){
	if(panduan){
        $("#dianji").style=`
            background-position:0px -127px;
        `; 
		panduan=false;
	}else{
        $("#dianji").style=`
            background-position:-31px -127px;
        `; 
		panduan=true;
	}
}

window.onload = function(){
    $("#space2").onmouseover=function(){
        $("#pic1").style.display="block";
    }
    $("#space2").onmouseout=function(){
        $("#pic1").style.display="none";
    }


    $("#phoneId").onblur = function(){
        var r =  /^1[3-9]\d{9}$/
        var zhi=$("#phoneId").value; 

        if(r.test(this.value)){
            $("#yes").innerHTML = "";
        }else if(zhi==""){
            $("#yes").style.display="none";
        }else{
            $("#yes").innerHTML = "手机号输入错误";
            $("#yes").style.display="block";
        }
    }
    $("#phoneId").onfocus=function(){
        $("#yes").style.display="none";
        $("#yes").innerHTML = "";
    }

    $("#nameId").onblur = function(){
		var r =  /^[a-zA-Z_]\w{5,14}$/ //六位数，不能以数字开头
        var zhi=$("#phoneId").value;
        if(r.test(this.value)){
            $("#yes").innerHTML = "";
        }else if(zhi==""){
            $("#yes").style.display="none";
        }else{
            $("#yes").innerHTML = "用户名输入错误";
            $("#yes").style.display="block";
        }
    }
    $("#nameId").onfocus=function(){
        $("#yes").style.display="none";
        $("#yes").innerHTML = "";
    }

    $("#passId").onblur = function(){
        var r=/^[a-zA-Z0-9]{6,10}$/;//六位数
        var zhi=$("#phoneId").value;
        if(r.test(this.value)){
            $("#yes").innerHTML = "";
        }else if(zhi==""){
            $("#yes").style.display="none";
        }else{
            $("#yes").innerHTML = "密码格式错误";
            $("#yes").style.display="block";
        }
    }
    $("#passId").onfocus=function(){
        $("#yes").style.display="none";
        $("#yes").innerHTML = "";
    }
    $("#repeatId").onblur = function(){
        var repwd=$("#repeatId").value;
        var pwd=$("#passId").value;
        if(repwd==pwd){
            $("#yes").innerHTML = "";
        }else if(repwd==""){
            $("#yes").style.display="none";
        }else{
            $("#yes").innerHTML = "输入密码不一致";
            $("#yes").style.display="block";
        }
    }
    $("#repeatId").onfocus=function(){
        $("#yes").style.display="none";
        $("#yes").innerHTML = "";
    }
    yanzhengma();
}
let arr="";
let str="";
function yanzhengma(){
    arr="";
	str="";
	for(let i=0;i<5;i++){
		 //随机数 Math.random 0-1 的随机值
        var n = Math.random();
          //随机颜色
        var color=giveColor();
           //随机大小
        var size=Math.floor (Math.random ()*12 +20);
            //随机旋转
        var h=Math.random() <0.5 ? -1: 1;
        var zhuan=Math.random ()*h*45;
        if (n < 0.25) {
            //随机数字
            var s = Math.floor(Math.random() * 10);
            str+="<span style='transform:rotatez("+ zhuan +"deg);left:"+topset+"px; color: " +color +";font-size:"+size+"px ;top:"+topset+"px'>"+s+"</span>";
            arr+=s;
           }
            //随机大写字母 //65-91
            else if (n >= 0.25 && n < 0.5) {
             var s = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
             str+="<span style='transform:rotatez("+ zhuan +"deg); left:"+topset+"px; color: " +color +";font-size:"+size+"px ;top:"+topset+"px'>"+s+"</span>";
             arr+=s;
            }
           //随机小写字母 97-123
           else if (n >=0.5 && n < 0.75) {
            var s = String.fromCharCode(Math.floor(Math.random() * 26 + 97));
            str+="<span style ='transform:rotatez("+ zhuan +"deg);left:"+topset+"px; color: " +color +" ;font-size:"+size+"px ;top:"+topset+"px'>"+s+"</span>";
            arr+=s;
           }
	}
	$("#result").innerHTML=str;
	$("#result").style.backgroundColor = giveColor();
}
$("#btn3").onclick=function(){
	yanzhengma();
}
function getColor(){
    // 封装随机生成颜色的函数作为返回值
    return Math.round(Math.random()*255);
}
function giveColor(){
    var red = getColor();
    var green = getColor();
    var blue = getColor();
    // 获取三个rgb的值
    var color= "rgb(" + red + "," + green + "," + blue + ")";
    // 吧rhb值拼接在一起给变量color
    return color;
    // 返回color
}

 function $(str){
     if(str[0]=="#"){
         return document.getElementById(str.substring(1));
     }else if(str[0]=="."){
         return document.getElementsByClassName(str.substring(1));
     }else{
         return document.getElementsByTagName(str);
     }
 }