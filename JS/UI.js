$(document).ready(function() {
	$("#cross").append("x");
		/*Nápověda*/
	var booleanNapoveda = 0;
	var booleanCross = 0;
	$("#napoveda").click(function() {
		if (booleanNapoveda == 0) {
			booleanNapoveda = 1;

			click0Napoveda();

		} else{
			booleanNapoveda = 0;

			click1Napoveda();
		}
	});
	$("#cross").click(function() {
		if (booleanCross == 0) {
			booleanNapoveda = 0;
			click1Cross();

		}
	});
});

function click0Napoveda() {
	var element = document.getElementById("napovedaRight");
	var name = "visible";
	var arr = element.className.split(" ");

	if (arr.indexOf(name) == -1) {
		element.className += " " + name;
	}

	var element0 = document.getElementById("napovedaRight");
	element0.classList.remove("hidden");

	booleanCross = 1;
}
function click1Napoveda() {
	var element = document.getElementById("napovedaRight");
	var name = "hidden";
	var arr = element.className.split(" ");

	if (arr.indexOf(name) == -1) {
		element.className += " " + name;
	}

	var element0 = document.getElementById("napovedaRight");
	element0.classList.remove("visible");
}

function click1Cross() {
	var element = document.getElementById("napovedaRight");
	var name = "hidden";
	var arr = element.className.split(" ");

	if (arr.indexOf(name) == -1) {
		element.className += " " + name;
	}

	var element0 = document.getElementById("napovedaRight");
	element0.classList.remove("visible");
}