$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var jednotka1 = $("#Jednotka1").val();
		var jednotka2 = $("#Jednotka2").val();

		var vysledek

		if (cislo1 > 0) {
			if (jednotka1 == "TB" && jednotka2 == "GB" || jednotka1 == "GB" && jednotka2 == "MB" || jednotka1 == "MB" && jednotka2 == "kB" || jednotka1 == "kB" && jednotka2 == "B") {
				vysledek = cislo1 * 1024;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "GB" && jednotka2 == "TB" || jednotka1 == "MB" && jednotka2 == "GB" || jednotka1 == "kB" && jednotka2 == "MB" || jednotka1 == "B" && jednotka2 == "kB") {
				vysledek = cislo1 / 1024;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "TB" && jednotka2 == "MB" || jednotka1 == "GB" && jednotka2 == "kB" || jednotka1 == "MB" && jednotka2 == "B") {
				vysledek = cislo1 * 2048;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "MB" && jednotka2 == "TB" || jednotka1 == "kB" && jednotka2 == "GB" || jednotka1 == "B" && jednotka2 == "MB") {
				vysledek = cislo1 / 2048;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "TB" && jednotka2 == "kB" || jednotka1 == "GB" && jednotka2 == "B") {
				vysledek = cislo1 * 3072;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "kB" && jednotka2 == "TB" || jednotka1 == "B" && jednotka2 == "GB") {
				vysledek = cislo1 / 3072;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "TB" && jednotka2 == "B") {
				vysledek = cislo1 * 4096;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "B" && jednotka2 == "TB") {
				vysledek = cislo1 / 4096;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "TB" && jednotka2 == "b") {
				vysledek = cislo1 * 4096 * 8;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "b" && jednotka2 == "TB") {
				vysledek = cislo1 / 4096 / 8;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "GB" && jednotka2 == "b") {
				vysledek = cislo1 * 3072 * 8;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "b" && jednotka2 == "GB") {
				vysledek = cislo1 / 3072 / 8;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "MB" && jednotka2 == "b") {
				vysledek = cislo1 * 2048 * 8;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "b" && jednotka2 == "MB") {
				vysledek = cislo1 / 2048 / 8;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "kB" && jednotka2 == "b") {
				vysledek = cislo1 * 1024 * 8;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "b" && jednotka2 == "kB") {
				vysledek = cislo1 / 1024 / 8;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "B" && jednotka2 == "b") {
				vysledek = cislo1 * 8;

				vysledek = vysledekO * 1000;
				vysledek = Math.round(vysledekO);
				vysledek = vysledekO / 1000;

				$('#Vysledek').after("<p>"+ cislo1 + " " + jednotka1 + " = " + vysledek + " " + jednotka2 + "</p>");
			}
			if (jednotka1 == "b" && jednotka2 == "B") {
				vysledek = cislo1 / 8;

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
	$('#Vysledek').after("<p>Litujeme, ale nelze převádět.<br>Pokud ji chcete převést, zadejte prosím kladné nenulové hodnoty.</p>")
}