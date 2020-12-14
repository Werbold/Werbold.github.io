$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var cislo3 = parseInt($("#cislo3").val());
		var jednotka = $("#Jednotka").val();

		var vysledek;

		var jednotkaP;
		var jednotkaF;
		var jednotkaS;

		if (jednotka == "Kilo" || jednotka == "Základní" || jednotka == "Mili") {
			if (jednotka == "Kilo") {
				jednotkaP = "kPa";
				jednotkaF = "kN";
				jednotkaS = "km<sup>2</sup>";
			}
			if (jednotka == "Základní") {
				jednotkaP = "Pa";
				jednotkaF = "N";
				jednotkaS = "m<sup>2</sup>";
			}
			if (jednotka == "Mili") {
				jednotkaP = "mPa";
				jednotkaF = "mN";
				jednotkaS = "mm<sup>2</sup>";
			}

			if (cislo2 > 0 && cislo3 > 0 || cislo1 > 0 && cislo3 > 0 || cislo1 > 0 && cislo2 > 0) {
				if (cislo2 > 0 && cislo3 > 0) {
					vysledek = cislo2 / cislo3;

					$('#Vysledek').after("<p>Síla: " + cislo2 + " " + jednotkaF + "<br>"
					+ "Obsah: " + cislo3 + " " + jednotkaS + "<br>"
					+ "Tlak: " + vysledek + " " + jednotkaP + "</p>");
				}
				if (cislo1 > 0 && cislo3 > 0) {
					vysledek = cislo1 * cislo3;

					$('#Vysledek').after("<p>Tlak: " + cislo1 + " " + jednotkaP + "<br>"
					+ "Obsah: " + cislo3 + " " + jednotkaS + "<br>"
					+ "Síla: " + vysledek + " " + jednotkaF + "</p>");
				}
				if (cislo1 > 0 && cislo2 > 0) {
					vysledek = cislo2 / cislo1;

					$('#Vysledek').after("<p>Tlak: " + cislo1 + " " + jednotkaP + "<br>"
					+ "Síla: " + cislo2 + " " + jednotkaF + "<br>"
					+ "Obsah: " + vysledek + " " + jednotkaS + "</p>");
				}
			}
			else{
				error();
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
	$('#Vysledek').after("<p>Litujeme, ale nelze spočítat ani jednu položku.<br>Pokud ji chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}