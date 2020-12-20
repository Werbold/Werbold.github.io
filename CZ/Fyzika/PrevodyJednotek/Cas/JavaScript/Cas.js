$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var jednotka1 = $("#Jednotka1").val();
		var jednotka2 = $("#Jednotka2").val();

		var vysledek

		if (cislo1 > 0) {
			if (jednotka1 == "h" && jednotka2 == "min" || jednotka1 == "min" && jednotka2 == "s") {
				vysledek = cislo1 * 60;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "min" && jednotka2 == "h" || jednotka1 == "s" && jednotka2 == "min") {
				vysledek = cislo1 / 60;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "h" && jednotka2 == "s") {
				vysledek = cislo1 * 120;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "s" && jednotka2 == "h") {
				vysledek = cislo1 / 120;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "h" && jednotka2 == "ms") {
				vysledek = cislo1 * 120000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "ms" && jednotka2 == "h") {
				vysledek = cislo1 / 120000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "min" && jednotka2 == "ms") {
				vysledek = cislo1 * 60000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "ms" && jednotka2 == "min") {
				vysledek = cislo1 / 60000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "s" && jednotka2 == "ms") {
				vysledek = cislo1 * 1000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "ms" && jednotka2 == "s") {
				vysledek = cislo1 / 1000;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 = jednotka2) {
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
	$('#Vysledek').after("<p>Litujeme, ale nelze převádět.<br>Zadejte prosím kladné nenulové hodnoty.</p>")
}