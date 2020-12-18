$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var jednotka1 = $("#Jednotka1").val();
		var jednotka2 = $("#Jednotka2").val();

		var vysledek;

		if (cislo1 > 0) {
			if (jednotka1 == "kmZAh" && jednotka2 == "kmZAs") {
				vysledek = cislo1 * 3600;
				jednotka1 = "km/h";
				jednotka2 = "km/s";	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "kmZAs" && jednotka2 == "kmZAh") {
				vysledek = cislo1 / 3600;
				jednotka1 = "km/s";
				jednotka2 = "km/h";

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "kmZAh" && jednotka2 == "mZAs") {
				vysledek = cislo1 * 3.6;
				jednotka1 = "km/h";
				jednotka2 = "m/s";	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "mZAs" && jednotka2 == "kmZAh") {
				vysledek = cislo1 / 3.6;
				jednotka1 = "m/s";
				jednotka2 = "km/h";

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "kmZAs" && jednotka2 == "mZAs") {
				vysledek = cislo1 * 1000;
				jednotka1 = "km/h";
				jednotka2 = "m/s";	

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "mZAs" && jednotka2 == "kmZAs") {
				vysledek = cislo1 / 1000;
				jednotka1 = "m/s";
				jednotka2 = "km/h";

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == jednotka2) {
				vysledek = cislo1;
				if (jednotka1 == "kmZAh") {
					jednotka1 = "km/h";
					jednotka2 = "km/h";
				}
				if (jednotka1 == "kmZAs") {
					jednotka1 = "km/s";
					jednotka2 = "km/s";
				}
				if (jednotka1 == "mZAs") {
					jednotka1 = "m/s";
					jednotka2 = "m/s";
				}

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
	$('#Vysledek').after("<p>Litujeme, ale nelze přesně spočítat jednu nebo více položek.<br>Pokud je chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}