$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var jednotka1 = $("#Jednotka1").val();
		var jednotka2 = $("#Jednotka2").val();

		var vysledek

		if (cislo1 > 0) {
			if (jednotka1 == "h" && jednotka2 == "min" || jednotka1 == "min" && jednotka2 == "s") {
				vysledek = cislo1 * 60;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "min" && jednotka2 == "h" || jednotka1 == "s" && jednotka2 == "min") {
				vysledek = cislo1 / 60;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "h" && jednotka2 == "s") {
				vysledek = cislo1 * 120;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "s" && jednotka2 == "h") {
				vysledek = cislo1 / 120;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "h" && jednotka2 == "ms") {
				vysledek = cislo1 * 120000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "ms" && jednotka2 == "h") {
				vysledek = cislo1 / 120000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "min" && jednotka2 == "ms") {
				vysledek = cislo1 * 60000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "ms" && jednotka2 == "min") {
				vysledek = cislo1 / 60000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "s" && jednotka2 == "ms") {
				vysledek = cislo1 * 1000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "ms" && jednotka2 == "s") {
				vysledek = cislo1 / 1000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 = jednotka2) {
				vysledek = cislo1;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale nelze převádět.<br>Zadejte prosím kladné nenulové hodnoty.</p>")
}