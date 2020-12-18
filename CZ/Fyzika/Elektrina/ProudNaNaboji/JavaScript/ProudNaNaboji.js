$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var cislo3 = parseFloat($("#cislo3").val());
		var jednotka = $("#Jednotka").val();

		var vysledekI;
		var jednotkaI = "A";

		var vysledekQ;
		var jednotkaQ = "C";

		var vysledekT;
		var jednotkaT = "s";

		if (cislo2 > 0 && cislo3 > 0 || cislo1 > 0 && cislo3 > 0 || cislo1 > 0 && cislo2 > 0) {
			if (cislo2 > 0 && cislo3 > 0) {
				vysledekI = cislo2 / cislo3;

				$('#Vysledek').after("<p class='count'>Q = " + cislo2 + " " + jednotkaQ + "<br>"
					+ "t = " + cislo3 + " " + jednotkaT + "<br>" 
					+ "I = " + vysledekI + " " + jednotkaI + "</p>");
			}
			else if (cislo1 > 0 && cislo3 > 0) {
				vysledekQ = cislo1 * cislo3;

				$('#Vysledek').after("<p class='count'>I = " + cislo1 + " " + jednotkaI + "<br>"
					+ "t = " + cislo3 + " " + jednotkaT + "<br>" 
					+ "Q = " + vysledekQ + " " + jednotkaQ + "</p>");
			}
			else if (cislo1 > 0 && cislo2 > 0) {
				vysledekT = cislo2 / cislo1;

				$('#Vysledek').after("<p class='count'>I = " + cislo1 + " " + jednotkaI + "<br>"
					+ "Q = " + cislo2 + " " + jednotkaQ + "<br>" 
					+ "t = " + vysledekT + " " + jednotkaT + "</p>");
			}
		}
		else if (cislo1 <= 0 || cislo2 <= 0 || cislo3 <= 0) {
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale nelze přesně spočítat ani jednu položku.<br>Pokud ji chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}