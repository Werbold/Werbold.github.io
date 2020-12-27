$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var jednotka1 = $("#Jednotka1").val();
		var jednotka2 = $("#Jednotka2").val();

		var vysledek;

		if (cislo1 > 0) {
			/*Základní jednotky*/
			if (jednotka1 == "hl" && jednotka2 == "l" || jednotka1 == "l" && jednotka2 == "cl" || jednotka1 == "dl" && jednotka2 == "ml") {
				vysledek = cislo1 * 100;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "l" && jednotka2 == "hl" || jednotka1 == "cl" && jednotka2 == "l" || jednotka1 == "ml" && jednotka2 == "dl") {
				vysledek = cislo1 / 100;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "l" && jednotka2 == "dl" || jednotka1 == "dl" && jednotka2 == "cl" || jednotka1 == "cl" && jednotka2 == "ml") {
				vysledek = cislo1 * 10;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "dl" && jednotka2 == "l" || jednotka1 == "cl" && jednotka2 == "dl" || jednotka1 == "ml" && jednotka2 == "cl") {
				vysledek = cislo1 / 10;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "hl" && jednotka2 == "dl" || jednotka1 == "l" && jednotka2 == "ml") {
				vysledek = cislo1 * 1000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "dl" && jednotka2 == "hl" || jednotka1 == "ml" && jednotka2 == "l") {
				vysledek = cislo1 / 1000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "hl" && jednotka2 == "cl") {
				vysledek = cislo1 * 10000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "cl" && jednotka2 == "hl") {
				vysledek = cislo1 / 10000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "hl" && jednotka2 == "ml") {
				vysledek = cislo1 * 100000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "ml" && jednotka2 == "hl") {
				vysledek = cislo1 / 100000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			/*Krychlové*/
			if (jednotka1 == "m3" && jednotka2 == "dm3" || jednotka1 == "dm3" && jednotka2 == "cm3" || jednotka1 == "cm3" && jednotka2 == "mm3") {
				vysledek = cislo1 * 1000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "dm3" && jednotka2 == "m3" || jednotka1 == "cm3" && jednotka2 == "dm3" || jednotka1 == "mm3" && jednotka2 == "cm3") {
				vysledek = cislo1 / 1000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "m3" && jednotka2 == "cm3" || jednotka1 == "dm3" && jednotka2 == "mm3") {
				vysledek = cislo1 * 1000000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;	

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "cm3" && jednotka2 == "m3" || jednotka1 == "mm3" && jednotka2 == "dm3") {
				vysledek = cislo1 / 1000000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;	

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "m3" && jednotka2 == "mm3") {
				vysledek = cislo1 * 1000000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "mm3" && jednotka2 == "m3") {
				vysledek = cislo1 / 1000000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			/*kombinované*/
			if (jednotka1 == "m3" && jednotka2 == "hl" || jednotka1 == "l" && jednotka2 == "cm3" || jednotka1 == "dm3" && jednotka2 == "cl" || jednotka1 == "ml" && jednotka2 == "mm3") {
				vysledek = cislo1 * 1000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "hl" && jednotka2 == "m3" || jednotka1 == "cm3" && jednotka2 == "l" || jednotka1 == "cl" && jednotka2 == "dm3" || jednotka1 == "mm3" && jednotka2 == "ml") {
				vysledek = cislo1 / 1000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "hl" && jednotka2 == "dm3" || jednotka1 == "dm3" && jednotka2 == "hl" || jednotka1 == "ml" && jednotka2 == "cm3" || jednotka1 == "cm3" && jednotka2 == "ml") {
				vysledek = cislo1;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "hl" && jednotka2 == "cm3" || jednotka1 == "m3" && jednotka2 == "l" || jednotka1 == "cl" && jednotka2 == "mm3" || jednotka1 == "dm3" && jednotka2 == "ml") {
				vysledek = cislo1 * 10000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "cm3" && jednotka2 == "hl" || jednotka1 == "l" && jednotka2 == "m3" || jednotka1 == "mm3" && jednotka2 == "cl" || jednotka1 == "ml" && jednotka2 == "dm3") {
				vysledek = cislo1 / 10000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "hl" && jednotka2 == "mm3") {
				vysledek = cislo1 * 10000000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "mm3" && jednotka2 == "hl") {
				vysledek = cislo1 / 10000000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "dm3" && jednotka2 == "l" || jednotka1 == "cl" && jednotka2 == "cm3") {
				vysledek = cislo1 * 10;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "l" && jednotka2 == "dm3" || jednotka1 == "cm3" && jednotka2 == "cl") {
				vysledek = cislo1 / 10;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "l" && jednotka2 == "mm3" || jednotka1 == "m3" && jednotka2 == "cl" || jednotka1 == "m3" && jednotka2 == "ml") {
				vysledek = cislo1 * 1000000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "mm3" && jednotka2 == "l" || jednotka1 == "cl" && jednotka2 == "m3" || jednotka1 == "ml" && jednotka2 == "m3") {
				vysledek = cislo1 / 1000000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "m3" && jednotka2 == "dl" || jednotka1 == "dl" && jednotka2 == "mm3") {
				vysledek = cislo1 * 100000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "dl" && jednotka2 == "m3" || jednotka1 == "mm3" && jednotka2 == "dl") {
				vysledek = cislo1 / 100000;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "dm3" && jednotka2 == "dl" || jednotka1 == "dl" && jednotka2 == "cm3") {
				vysledek = cislo1 * 100;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "dl" && jednotka2 == "dm3" || jednotka1 == "cm3" && jednotka2 == "dl") {
				vysledek = cislo1 / 100;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p class='count'>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 === jednotka2) {
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale nelze převádět.<br>Pokud chcete převádět, zadejte prosím kladné nenulové hodnoty.</p>")
}