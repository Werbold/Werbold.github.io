$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var cislo3 = parseInt($("#cislo3").val());
		var cislo4 = parseInt($("#cislo4").val());
		var jednotka = $("#Jednotka").val();

		var vysledekWe;
		var jednotkaWe;

		var vysledekI;
		var jednotkaI;

		var vysledekU;
		var jednotkaU;

		var vysledekT;
		var jednotkaT;

		if (cislo2 > 0 && cislo3 > 0 && cislo4 > 0 || cislo1 > 0 && cislo2 > 0 && cislo4 > 0 || cislo1 > 0 && cislo3 > 0 && cislo4 > 0 || cislo1 > 0 && cislo2 > 0 && cislo3 > 0) {
			jednotkaWe = "J";
			jednotkaU = "V";
			jednotkaT = "s";
			jednotkaI = "A";

			if (cislo2 > 0 && cislo3 > 0 && cislo4 > 0) {
				vysledekWe = cislo2 * cislo3 *cislo4;

				$('#Vysledek').after("<p class='count'>I = " + cislo2 + " " + jednotkaI + "<br>"
					+ "U = " + cislo3 + " " + jednotkaU + "<br>" 
					+ "t = " + cislo4 + " " + jednotkaT + "<br>"
					+ "W<sub>e</sub>: " + vysledekWe + " " + jednotkaWe + "</p>");
			}
			else if (cislo1 > 0 && cislo2 > 0 && cislo4 > 0) {
				vysledekU = cislo1 / cislo2 * cislo4;

				$('#Vysledek').after("<p class='count'>I = " + cislo2 + " " + jednotkaI + "<br>"
					+ "W<sub>e</sub> = " + cislo1 + " " + jednotkaWe + "<br>" 
					+ "t = " + cislo4 + " " + jednotkaT + "<br>"
					+ "U = " + vysledekU + " " + jednotkaU + "</p>");
			}
			else if (cislo1 > 0 && cislo3 > 0 && cislo4 > 0) {
				vysledekI = cislo1 / cislo3 * cislo4;

				$('#Vysledek').after("<p class='count'>U = " + cislo3 + " " + jednotkaU + "<br>"
					+ "W<sub>e</sub> = " + cislo1 + " " + jednotkaWe + "<br>" 
					+ "t = " + cislo4 + " " + jednotkaT + "<br>"
					+ "I = " + vysledekI + " " + jednotkaI + "</p>");
			}
			else if (cislo1 > 0 && cislo2 > 0 && cislo3 > 0) {
				vysledekT = cislo1 / cislo2 * cislo3;

				$('#Vysledek').after("<p class='count'>U = " + cislo3 + " " + jednotkaU + "<br>"
					+ "W<sub>e</sub> = " + cislo1 + " " + jednotkaWe + "<br>" 
					+ "I = " + cislo2 + " " + jednotkaI + "<br>"
					+ "t = " + vysledekT + " " + jednotkaT + "</p>");
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale položku nelze spočítat.<br>Pokud je chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}