var booleanObvodyObsahy=0;var booleanObjemPovrch=0;var booleanTrojuhelnik=0;$("#btnObvodyObsahy").click(function(){visibleObvodyObsahy()});$("#btnObjemPovrch").click(function(){visibleObjemPovrch()});$("#btnTrojuhelnik").click(function(){visibleTrojuhelnik()});function visibleObvodyObsahy(){if(booleanObvodyObsahy==0){booleanObvodyObsahy=1;click1ObvodyObsahy()}else{booleanObvodyObsahy=0;click0ObvodyObsahy()}}
function click1ObvodyObsahy(){var element=document.getElementById("ObvodyObsahy");var name="visible";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("ObvodyObsahy");element0.classList.remove("hiden");var button=document.getElementById("btnObvodyObsahy");var classa="on";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnObvodyObsahy");element0.classList.remove("off")}
function click0ObvodyObsahy(){var element=document.getElementById("ObvodyObsahy");var name="hiden";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("ObvodyObsahy");element0.classList.remove("visible");var button=document.getElementById("btnObvodyObsahy");var classa="off";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnObvodyObsahy");element0.classList.remove("on")}
function visibleObjemPovrch(){if(booleanObjemPovrch==0){booleanObjemPovrch=1;click1ObjemPovrch()}else{booleanObjemPovrch=0;click0ObjemPovrch()}}
function click1ObjemPovrch(){var element=document.getElementById("ObjemPovrch");var name="visible";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("ObjemPovrch");element0.classList.remove("hiden");var button=document.getElementById("btnObjemPovrch");var classa="on";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnObjemPovrch");element0.classList.remove("off")}
function click0ObjemPovrch(){var element=document.getElementById("ObjemPovrch");var name="hiden";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("ObjemPovrch");element0.classList.remove("visible");var button=document.getElementById("btnObjemPovrch");var classa="off";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnObjemPovrch");element0.classList.remove("on")}
function visibleTrojuhelnik(){if(booleanTrojuhelnik==0){booleanTrojuhelnik=1;click1Trojuhelnik()}else{booleanTrojuhelnik=0;click0Trojuhelnik()}}
function click1Trojuhelnik(){var element=document.getElementById("Trojuhelnik");var name="visible";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Trojuhelnik");element0.classList.remove("hiden");var button=document.getElementById("btnTrojuhelnik");var classa="on";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnTrojuhelnik");element0.classList.remove("off")}
function click0Trojuhelnik(){var element=document.getElementById("Trojuhelnik");var name="hiden";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Trojuhelnik");element0.classList.remove("visible");var button=document.getElementById("btnTrojuhelnik");var classa="off";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnTrojuhelnik");element0.classList.remove("on")}