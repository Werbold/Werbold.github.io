$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var jednotka = $("#Jednotka").val();

		var vysledekP;
		var vysledekE;

		var jednotkaP;

		if (jednotka == "Kilo" || jednotka == "Základní" || jednotka == "Mili") {
			if (jednotka == "Kilo") {
				jednotkaP = "kW";
			}
			if (jednotka == "Základní") {
				jednotkaP = "W";
			}
			if (jednotka == "Mili") {
				jednotkaP = "mW";
			}

			if (cislo2 > 0 || cislo1 > 0) {
				if (cislo2 > 0) {
					vysledekP = (0.0000000000000000001602 / cislo2) * 100000000000000;

				$('#Vysledek').after("<p class='count'>Protony: " + cislo2 + "<br>"
				+ "Výkon: " + vysledekP + " " + jednotkaP + "</p>");
				}
				if (cislo1 > 0) {
					vysledekE = (0.0000000000000000001602 / cislo1) * 100000000000000;

					$('#Vysledek').after("<p class='count'>Výkon: " + cislo1 + " " + jednotkaP + "<br>"
				+ "Protony: " + vysledekE + "</p>");
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