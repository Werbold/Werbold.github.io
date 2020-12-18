$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var cislo3 = parseFloat($("#cislo3").val());
		var jednotka = $("#Jednotka").val();

		var vysledekI;
		var jednotkaI;

		var vysledekU;
		var jednotkaU;

		var vysledekR;
		var jednotkaR;

		if (jednotka == "Mega" || jednotka == "Kilo" || jednotka == "Základní" || jednotka == "Mili") {
			if (jednotka == "Mega") {
				jednotkaI = "MA";
				jednotkaU = "MV";
				jednotkaR = "MΩ";
			}
			else if (jednotka == "Kilo") {
				jednotkaI = "kA";
				jednotkaU = "kV";
				jednotkaR = "kΩ";
			}
			else if (jednotka == "Základní") {
				jednotkaI = "A";
				jednotkaU = "V";
				jednotkaR = "Ω";
			}
			else if (jednotka == "Mili") {
				jednotkaI = "mA";
				jednotkaU = "mV";
				jednotkaR = "mΩ";
			}

			if (cislo2 > 0 && cislo3 > 0) {
				vysledekI = cislo2 / cislo3;

				$('#Vysledek').after("<p class='count'>R = " + cislo3 + " " + jednotkaR + "<br>"
					+ "U = " + cislo2 + " " + jednotkaU + "<br>" 
					+ "I = " + vysledekI + " " + jednotkaI + "</p>");
			}
			else if (cislo1 > 0 && cislo3 > 0) {
				vysledekU = cislo1 * cislo3;

				$('#Vysledek').after("<p class='count'>R = " + cislo3 + " " + jednotkaR + "<br>"
					+ "I = " + cislo1 + " " + jednotkaI + "<br>" 
					+ "U = " + vysledekU + " " + jednotkaU + "</p>");
			}
			else if (cislo2 > 0 && cislo1 > 0) {
				vysledekR = cislo2 / cislo1;

				$('#Vysledek').after("<p class='count'>U = " + cislo2 + " " + jednotkaU + "<br>"
					+ "I = " + cislo1 + " " + jednotkaI + "<br>" 
					+ "R = " + vysledekR + " " + jednotkaR + "</p>");
			}
			else if (cislo1 <= 0 || cislo2 <= 0 || cislo3 <= 0) {
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale položku nelze spočítat.<br>Pokud ji chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}