$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var cislo3 = parseInt($("#cislo3").val());
		var jednotka = $("#Jednotka").val();

		var vysledekF;
		var vysledekS;
		var vysledekW;

		var jednotkaF;
		var jednotkaS;
		var jednotkaW;

		if (jednotka == "Kilo" || jednotka == "Základní" || jednotka == "Mili") {
			if (jednotka == "Kilo") {
				jednotkaF = "kN";
				jednotkaS = "km";
				jednotkaW = "kJ";
			}
			if (jednotka == "Základní") {
				jednotkaF = "N";
				jednotkaS = "m";
				jednotkaW = "J";
			}
			if (jednotka == "Mili") {
				jednotkaF = "mN";
				jednotkaS = "mm";
				jednotkaW = "mJ";
			}

			if (cislo2 > 0 && cislo3 > 0 || cislo1 > 0 && cislo3 > 0 || cislo1 > 0 && cislo2 > 0) {
				if (cislo2 > 0 && cislo3 > 0) {
					vysledekF = cislo2 / cislo3;

				$('#Vysledek').after("<p class='count'>Práce: " + cislo2 + " " + jednotkaW + "<br>"
				+ "Dráha: " + cislo3 + " " + jednotkaS + "<br>" 
				+ "Síla: " + vysledekF + " " + jednotkaF + "</p>");
				}
				if (cislo1 > 0 && cislo3 > 0) {
					vysledekW = cislo1 * cislo3;

					$('#Vysledek').after("<p class='count'>Síla: " + cislo1 + " " + jednotkaF + "<br>"
					+ "Dráha: " + cislo3 + " " + jednotkaS + "<br>" 
					+ "Práce: " + vysledekW + " " + jednotkaW + "</p>");
				}
				if (cislo1 > 0 && cislo2 > 0) {
					vysledekS = cislo2 / cislo1;

					$('#Vysledek').after("<p class='count'>Síla: " + cislo1 + " " + jednotkaF + "<br>"
					+ "Práce: " + cislo2 + " " + jednotkaW + "<br>" 
					+ "Dráha: " + vysledekS + " " + jednotkaS + "</p>");
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale nelze přesně spočítat ani jednu položku.<br>Pokud ji chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}