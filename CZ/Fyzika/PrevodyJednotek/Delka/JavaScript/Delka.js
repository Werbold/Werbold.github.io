$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var jednotka1 = $("#Jednotka1").val();
		var jednotka2 = $("#Jednotka2").val();

		var vysledek;

		if (cislo1 > 0) {
			if (jednotka1 == "km" && jednotka2 == "m") {
				vysledek = cislo1 * 1000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "m" && jednotka2 == "km") {
				vysledek = cislo1 / 1000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "m" && jednotka2 == "dm" || jednotka1 == "dm" && jednotka2 == "cm" || jednotka1 == "cm" && jednotka2 == "mm") {
				vysledek = cislo1 * 10;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "dm" && jednotka2 == "m" || jednotka1 == "cm" && jednotka2 == "dm" || jednotka1 == "mm" && jednotka2 == "cm") {
				vysledek = cislo1 / 10;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "km" && jednotka2 == "dm") {
				vysledek = cislo1 * 10000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "dm" && jednotka2 == "km") {
				vysledek = cislo1 / 10000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "m" && jednotka2 == "cm" || jednotka1 == "dm" && jednotka2 == "mm") {
				vysledek = cislo1 * 100;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "cm" && jednotka2 == "m" || jednotka1 == "mm" && jednotka2 == "dm") {
				vysledek = cislo1 / 100;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "km" && jednotka2 == "cm") {
				vysledek = cislo1 * 100000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "cm" && jednotka2 == "km") {
				vysledek = cislo1 / 100000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "m" && jednotka2 == "mm") {
				vysledek = cislo1 * 1000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "mm" && jednotka2 == "m") {
				vysledek = cislo1 / 1000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "km" && jednotka2 == "mm") {
				vysledek = cislo1 * 1000000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "mm" && jednotka2 == "km") {
				vysledek = cislo1 / 1000000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 === jednotka2) {
				vysledek = cislo1;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

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
	$('#Vysledek').after("<p>Litujeme, ale nelze převádět.<br>Pokud chcete převádět, zadejte prosím kladné nenulové hodnoty.</p>")
}