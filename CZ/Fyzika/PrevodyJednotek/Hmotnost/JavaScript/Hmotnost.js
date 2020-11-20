$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var jednotka1 = $("#Jednotka1").val();
		var jednotka2 = $("#Jednotka2").val();

		var vysledek;

		if (cislo1 > 0) {
			if (jednotka1 == "q" && jednotka2 == "kg" || jednotka1 == "kg" && jednotka2 == "dkg") {
				vysledek = cislo1 * 100;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "kg" && jednotka2 == "q" || jednotka1 == "dkg" && jednotka2 == "kg") {
				vysledek = cislo1 / 100;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "dkg" && jednotka2 == "g") {
				vysledek = cislo1 * 10;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "g" && jednotka2 == "dkg") {
				vysledek = cislo1 / 10;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "g" && jednotka2 == "mg") {
				vysledek = cislo1 * 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "mg" && jednotka2 == "g") {
				vysledek = cislo1 / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "q" && jednotka2 == "dkg") {
				vysledek = cislo1 * 10000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "dkg" && jednotka2 == "q") {
				vysledek = cislo1 / 10000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "kg" && jednotka2 == "g") {
				vysledek = cislo1 * 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "g" && jednotka2 == "kg") {
				vysledek = cislo1 / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "dkg" && jednotka2 == "mg") {
				vysledek = cislo1 * 10000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "mg" && jednotka2 == "dkg") {
				vysledek = cislo1 / 10000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "q" && jednotka2 == "g") {
				vysledek = cislo1 * 100000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "g" && jednotka2 == "q") {
				vysledek = cislo1 / 100000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "kg" && jednotka2 == "mg") {
				vysledek = cislo1 * 1000000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "mg" && jednotka2 == "kg") {
				vysledek = cislo1 / 1000000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "q" && jednotka2 == "mg") {
				vysledek = cislo1 * 100000000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "mg" && jednotka2 == "q") {
				vysledek = cislo1 / 100000000;

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
	$('#Vysledek').after("<p>Litujeme, ale nelze převádět.<br>Pokud chcete převádět, zadejte prosím kladné nenulové hodnoty.</p>")
}