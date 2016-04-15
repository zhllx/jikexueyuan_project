// JavaScript Document
//换肤
var i = 1;

var aFn = (function(){
    var id = 0;
    console.log(id);//0
    return function(){
        return id++;
    }
})();

console.log(aFn());//0
console.log(aFn());//1


$(".hf").click(function() {
    $(".s-skin-layer").animate({ top: "0px" }, 1000);
});
$(".s-skin-up").click(function() {
    $(".s-skin-layer").animate({ top: "-500px" }, 1000);
});
$(".s_wrap").click(function() {
    $(".s-skin-layer").animate({ top: "-500px" }, 1000);
});
$(".bgcon img").hover(function() {
    i = $(this).index();
    $(".bgyl").css("background", 'url(images/bg' + i + '.jpg)');
    $(".bgyl").css("background-size", "264px 180px");
});

var skins = document.getElementById("skin");

function skin1() {
    skins.href = "css/bg1.css";
    addCookie("color", "css/bg1.css");
}

function skin2() {
    skins.href = "css/bg2.css";
    addCookie("color", "css/bg2.css");
}

function skin3() {
    skins.href = "css/bg3.css";
    addCookie("color", "css/bg3.css");
}

function skin4() {
    skins.href = "css/bg4.css";
    addCookie("color", "css/bg4.css");
}

function skin5() {
    skins.href = "css/bg5.css";
    addCookie("color", "css/bg5.css");
}

function skin6() {
    skins.href = "css/bg6.css";
    addCookie("color", "css/bg6.css");
}

function skin7() {
    skins.href = "css/bg7.css";
    addCookie("color", "css/bg7.css");
}

function skin8() {
    skins.href = "css/bg8.css";
    addCookie("color", "css/bg8.css");
}

function skin9() {
    skins.href = "css/bg9.css";
    addCookie("color", "css/bg9.css");
}

function skin10() {
    skins.href = "css/bg10.css";
    addCookie("color", "css/bg10.css");
}

function skin11() {
    skins.href = "css/bg11.css";
    addCookie("color", "css/bg11.css");
}

function skin12() {
    skins.href = "css/bg12.css";
    addCookie("color", "css/bg12.css");
}

function changeColor(href) {
    skins.href;
}
//添加cookie 
function addCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//获取指定名称的cookie的值 
function getCookie(objName) {
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) return unescape(temp[1]);
    }
}
if (getCookie("color") == "css/bg1.css") {
    skin1()
} else if (getCookie("color") == "css/bg2.css") {
    skin2()
} else if (getCookie("color") == "css/bg3.css") {
    skin3()
} else if (getCookie("color") == "css/bg4.css") {
    skin4()
} else if (getCookie("color") == "css/bg5.css") {
    skin5()
} else if (getCookie("color") == "css/bg6.css") {
    skin6()
} else if (getCookie("color") == "css/bg7.css") {
    skin7()
} else if (getCookie("color") == "css/bg8.css") {
    skin8()
} else if (getCookie("color") == "css/bg9.css") {
    skin9()
} else if (getCookie("color") == "css/bg10.css") {
    skin10()
} else if (getCookie("color") == "css/bg11.css") {
    skin11()
} else if (getCookie("color") == "css/bg12.css") {
    skin12()
}

$(document).ready(function() {
    //换肤多标签
    $("#companyUl li").bind("click", function() {
        $(this).addClass("choose-nav").siblings().removeClass("choose-nav");
        $('#companyList div').eq($(this).index()).show().siblings().hide();
    });
    //新闻多标签
    $("#s_menu_mine li").bind("click", function() {
        $(this).addClass("hoverNew").siblings().removeClass("hoverNew");
        $('#news .s-xmancard-news').eq($(this).index()).show().siblings().hide();
    });
});
