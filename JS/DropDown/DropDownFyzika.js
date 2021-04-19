var booleanFyZakony=0;var booleanPrevodyJednotek=0;var booleanElektrina=0;var booleanEnergie=0;var booleanKinematika=0;var booleanPrace=0;var booleanSila=0;var booleanTeplo=0;var booleanTlak=0;$("#btnFyZakony").click(function(){visibleFyZakony()});$("#btnPrevodyJednotek").click(function(){visiblePrevodyJednotek()});$("#btnElektrina").click(function(){visibleElektrina()});$("#btnEnergie").click(function(){visibleEnergie()});$("#btnKinematika").click(function(){visibleKinematika()});$("#btnPrace").click(function(){visiblePrace()});$("#btnSila").click(function(){visibleSila()});$("#btnTeplo").click(function(){visibleTeplo()});$("#btnTlak").click(function(){visibleTlak()});function visibleFyZakony(){if(booleanFyZakony==0){booleanFyZakony=1;click0FyZakony()}else{booleanFyZakony=0;click1FyZakony()}}
function click0FyZakony(){var element=document.getElementById("FyZakony");var name="visible";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("FyZakony");element0.classList.remove("hiden");var button=document.getElementById("btnFyZakony");var classa="on";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnFyZakony");element0.classList.remove("off")}
function click1FyZakony(){var element=document.getElementById("FyZakony");var name="hiden";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("FyZakony");element0.classList.remove("visible");var button=document.getElementById("btnFyZakony");var classa="off";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnFyZakony");element0.classList.remove("on")}
function visiblePrevodyJednotek(){if(booleanPrevodyJednotek==0){booleanPrevodyJednotek=1;click0PrevodyJednotek()}else{booleanPrevodyJednotek=0;click1PrevodyJednotek()}}
function click0PrevodyJednotek(){var element=document.getElementById("PrevodyJednotek");var name="visible";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("PrevodyJednotek");element0.classList.remove("hiden");var button=document.getElementById("btnPrevodyJednotek");var classa="on";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnPrevodyJednotek");element0.classList.remove("off")}
function click1PrevodyJednotek(){var element=document.getElementById("PrevodyJednotek");var name="hiden";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("PrevodyJednotek");element0.classList.remove("visible");var button=document.getElementById("btnPrevodyJednotek");var classa="off";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnPrevodyJednotek");element0.classList.remove("on")}
function visibleElektrina(){if(booleanElektrina==0){booleanElektrina=1;click1Elektrina()}else{booleanElektrina=0;click0Elektrina()}}
function click1Elektrina(){var element=document.getElementById("Elektrina");var name="visible";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Elektrina");element0.classList.remove("hiden");var button=document.getElementById("btnElektrina");var classa="on";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnElektrina");element0.classList.remove("off")}
function click0Elektrina(){var element=document.getElementById("Elektrina");var name="hiden";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Elektrina");element0.classList.remove("visible");var button=document.getElementById("btnElektrina");var classa="off";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnElektrina");element0.classList.remove("on")}
function visibleEnergie(){if(booleanEnergie==0){booleanEnergie=1;click1Energie()}else{booleanEnergie=0;click0Energie()}}
function click1Energie(){var element=document.getElementById("Energie");var name="visible";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Energie");element0.classList.remove("hiden");var button=document.getElementById("btnEnergie");var classa="on";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnEnergie");element0.classList.remove("off")}
function click0Energie(){var element=document.getElementById("Energie");var name="hiden";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Energie");element0.classList.remove("visible");var button=document.getElementById("btnEnergie");var classa="off";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnEnergie");element0.classList.remove("on")}
function visibleKinematika(){if(booleanKinematika==0){booleanKinematika=1;click1Kinematika()}else{booleanKinematika=0;click0Kinematika()}}
function click1Kinematika(){var element=document.getElementById("Kinematika");var name="visible";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Kinematika");element0.classList.remove("hiden");var button=document.getElementById("btnKinematika");var classa="on";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnKinematika");element0.classList.remove("off")}
function click0Kinematika(){var element=document.getElementById("Kinematika");var name="hiden";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Kinematika");element0.classList.remove("visible");var button=document.getElementById("btnKinematika");var classa="off";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnKinematika");element0.classList.remove("on")}
function visiblePrace(){if(booleanPrace==0){booleanPrace=1;click1Prace()}else{booleanPrace=0;click0Prace()}}
function click1Prace(){var element=document.getElementById("Prace");var name="visible";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Prace");element0.classList.remove("hiden");var button=document.getElementById("btnPrace");var classa="on";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnPrace");element0.classList.remove("off")}
function click0Prace(){var element=document.getElementById("Prace");var name="hiden";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Prace");element0.classList.remove("visible");var button=document.getElementById("btnPrace");var classa="off";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnPrace");element0.classList.remove("on")}
function visibleSila(){if(booleanSila==0){booleanSila=1;click1Sila()}else{booleanSila=0;click0Sila()}}
function click1Sila(){var element=document.getElementById("Sila");var name="visible";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Sila");element0.classList.remove("hiden");var button=document.getElementById("btnSila");var classa="on";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnSila");element0.classList.remove("off")}
function click0Sila(){var element=document.getElementById("Sila");var name="hiden";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Sila");element0.classList.remove("visible");var button=document.getElementById("btnSila");var classa="off";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnSila");element0.classList.remove("on")}
function visibleTeplo(){if(booleanTeplo==0){booleanTeplo=1;click1Teplo()}else{booleanTeplo=0;click0Teplo()}}
function click1Teplo(){var element=document.getElementById("Teplo");var name="visible";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Teplo");element0.classList.remove("hiden");var button=document.getElementById("btnTeplo");var classa="on";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnTeplo");element0.classList.remove("off")}
function click0Teplo(){var element=document.getElementById("Teplo");var name="hiden";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Teplo");element0.classList.remove("visible");var button=document.getElementById("btnTeplo");var classa="off";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnTeplo");element0.classList.remove("on")}
function visibleTlak(){if(booleanTlak==0){booleanTlak=1;click1Tlak()}else{booleanTlak=0;click0Tlak()}}
function click1Tlak(){var element=document.getElementById("Tlak");var name="visible";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Tlak");element0.classList.remove("hiden");var button=document.getElementById("btnTlak");var classa="on";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnTlak");element0.classList.remove("off")}
function click0Tlak(){var element=document.getElementById("Tlak");var name="hiden";var arr=element.className.split(" ");if(arr.indexOf(name)==-1){element.className+=" "+name}
var element0=document.getElementById("Tlak");element0.classList.remove("visible");var button=document.getElementById("btnTlak");var classa="off";var arr1=button.className.split(" ");if(arr1.indexOf(classa)==-1){button.className+=" "+classa}
var element0=document.getElementById("btnTlak");element0.classList.remove("on")}