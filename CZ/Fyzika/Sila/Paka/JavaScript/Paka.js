$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var cislo3 = parseFloat($("#cislo3").val());
		var cislo4 = parseFloat($("#cislo4").val());
		var jednotka = $("#Jednotka").val();

		var vysledek;

		var jednotkaA = "m";
		var jednotkaF = "N"

		if (cislo2 > 0 && cislo3 > 0 && cislo4 > 0 || cislo1 > 0 && cislo3 > 0 && cislo4 > 0 || cislo2 > 0 && cislo4 > 0 && cislo1 > 0 || cislo1 > 0 && cislo2 > 0 && cislo3 > 0) {
			if (cislo2 > 0 && cislo3 > 0 && cislo4 > 0) {
				vysledek = cislo2 * cislo4 / cislo3;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p>Síla 2: " + cislo2 + " " + jednotkaF + "<br>"
				+ "Vzdálenost 1: " + cislo3 + " " + jednotkaA + "<br>"
				+ "Vzdálenost 2: " + cislo4 + " " + jednotkaA + "<br>" 
				+ "Síla 1: " + vysledek + " " + jednotkaF + "</p>");
			}
			if (cislo1 > 0 && cislo3 > 0 && cislo4 > 0) {
				vysledek = cislo1 * cislo3 / cislo4;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p>Síla 1: " + cislo1 + " " + jednotkaF + "<br>"
				+ "Vzdálenost 1: " + cislo3 + " " + jednotkaA + "<br>"
				+ "Vzdálenost 2: " + cislo4 + " " + jednotkaA + "<br>" 
				+ "Síla 2: " + vysledek + " " + jednotkaF + "</p>");
			}
			if (cislo2 > 0 && cislo4 > 0 && cislo1 > 0) {
				vysledek = cislo2 * cislo4 / cislo1;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p>Síla 1: " + cislo1 + " " + jednotkaF + "<br>"
				+ "Síla 2: " + cislo3 + " " + jednotkaF + "<br>"
				+ "Vzdálenost 2: " + cislo4 + " " + jednotkaA + "<br>" 
				+ "Vzdálenost 1: " + vysledek + " " + jednotkaA + "</p>");
			}
			if (cislo1 > 0 && cislo2 > 0 && cislo3 > 0) {
				vysledek = cislo1 * cislo3 / cislo2;

				vysledek = vysledek * 1000;
				vysledek = Math.round(vysledek);
				vysledek = vysledek / 1000;

				$('#Vysledek').after("<p>Síla 1: " + cislo1 + " " + jednotkaF + "<br>"
				+ "Síla 2: " + cislo3 + " " + jednotkaF + "<br>"
				+ "Vzdálenost 1: " + cislo3 + " " + jednotkaA + "<br>" 
				+ "Vzdálenost 2: " + vysledek + " " + jednotkaA + "</p>");
			}
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