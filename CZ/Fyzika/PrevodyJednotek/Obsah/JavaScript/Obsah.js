$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var jednotka1 = $("#Jednotka1").val();
		var jednotka2 = $("#Jednotka2").val();

		var vysledek;

		if (cislo1 > 0) {
			if (jednotka1 == "km2" && jednotka2 == "ha" || jednotka1 == "ha" && jednotka2 == "a" || jednotka1 == "a" && jednotka2 == "m2" || jednotka1 == "m2" && jednotka2 == "dm2" || jednotka1 == "dm2" && jednotka2 == "cm2" || jednotka1 == "cm2" && jednotka2 == "mm2") {
				vysledek = cislo1 * 100;	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "ha" && jednotka2 == "km2" || jednotka1 == "a" && jednotka2 == "ha" || jednotka1 == "m2" && jednotka2 == "a" || jednotka1 == "dm2" && jednotka2 == "m2" || jednotka1 == "cm2" && jednotka2 == "dm2" || jednotka1 == "mm2" && jednotka2 == "cm2") {
				vysledek = cislo1 / 100;	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "km2" && jednotka2 == "a" || jednotka1 == "ha" && jednotka2 == "m2" || jednotka1 == "a" && jednotka2 == "dm2" || jednotka1 == "m2" && jednotka2 == "cm2" || jednotka1 == "dm2" && jednotka2 == "mm2") {
				vysledek = cislo1 * 10000;	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "a" && jednotka2 == "km2" || jednotka1 == "m2" && jednotka2 == "ha" || jednotka1 == "dm2" && jednotka2 == "a" || jednotka1 == "cm2" && jednotka2 == "m2" || jednotka1 == "mm2" && jednotka2 == "dm2") {
				vysledek = cislo1 / 10000;	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "km2" && jednotka2 == "m2" || jednotka1 == "ha" && jednotka2 == "dm2" || jednotka1 == "a" && jednotka2 == "cm2" || jednotka1 == "m2" && jednotka2 == "mm2") {
				vysledek = cislo1 * 1000000;	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "m2" && jednotka2 == "km2" || jednotka1 == "dm2" && jednotka2 == "ha" || jednotka1 == "cm2" && jednotka2 == "a" || jednotka1 == "mm2" && jednotka2 == "m2") {
				vysledek = cislo1 / 1000000;	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "km2" && jednotka2 == "dm2" || jednotka1 == "ha" && jednotka2 == "cm2" || jednotka1 == "a" && jednotka2 == "mm2") {
				vysledek = cislo1 * 100000000;	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "dm2" && jednotka2 == "km2" || jednotka1 == "cm2" && jednotka2 == "ha" || jednotka1 == "mm2" && jednotka2 == "a") {
				vysledek = cislo1 / 100000000;	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "km2" && jednotka2 == "cm2" || jednotka1 == "ha" && jednotka2 == "mm2") {
				vysledek = cislo1 * 10000000000;	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "cm2" && jednotka2 == "km2" || jednotka1 == "mm2" && jednotka2 == "ha") {
				vysledek = cislo1 / 10000000000;	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "km2" && jednotka2 == "mm2") {
				vysledek = cislo1 * 1000000000000;	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "mm2" && jednotka2 == "km2") {
				vysledek = cislo1 / 1000000000000;	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 === jednotka2) {
				vysledek = cislo1;	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
		}
		else{
			error();
		}
	});

	$("#smazat").click(function() {
		refresh();
	});
});

function refresh() {
	location.reload();
}

function error() {
	$('#Vysledek').after("<p>Litujeme, ale nelze spočítat ani jednu položku.<br>Pokud ji chcete spočítat, zadejte prosím kladnou nenulovou hodnotu.</p>")
}