$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var jednotka = $("#Jednotka").val();

		var vysledekEk;

		var jednotkaM;
		var jednotkaH;
		var jednotkaEk;

		if (cislo1 > 0 && cislo2 > 0) {
			if (jednotka == "kilo") {
				jednotkaM = "kg";
				jednotkaH = "km";
				jednotkaEk = "kJ";
			}
			else if (jednotka == "Základní") {
				jednotkaM = "g";
				jednotkaH = "m";
				jednotkaEk = "J";
			}
			else if (jednotka == "mili") {
				jednotkaM = "mg";
				jednotkaH = "mm";
				jednotkaEk = "mJ";
			}
			vysledekEk = cislo1 * cislo2 * 10;

			$('#Vysledek').after("<p class='count'>m = " + cislo1 + " " + jednotkaM + "<br>"
				+ "h = " + cislo2 + " " + jednotkaH + "<br>" 
				+ "E<sub>k</sub> = " + vysledekEk + " " + jednotkaEk + "</p>");
		}
		else if (cislo1 <= 0 || cislo2 <= 0) {
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale položku nelze spočítat.<br>Pokud ji chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}