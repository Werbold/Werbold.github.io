$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var cislo3 = parseInt($("#cislo3").val());
		var jednotka = $("#Jednotka").val();

		var vysledekV;
		var vysledekS;
		var vysledekT;

		var jednotkaV = "m / s";
		var jednotkaS = "m";
		var jednotkaT = "s";

		if (cislo2 > 0 && cislo3 > 0 || cislo1 > 0 && cislo3 > 0 || cislo1 > 0 && cislo2 > 0) {
			if (cislo2 > 0 && cislo3 > 0) {
				vysledekV = cislo2 / cislo3;

				$('#Vysledek').after("<p>Dráha: " + cislo2 + " " + jednotkaS + "<br>"
				+ "Čas: " + cislo3 + " " + jednotkaT + "<br>" 
				+ "Rychlost: " + vysledekV + " " + jednotkaV + "</p>");
			}
			if (cislo1 > 0 && cislo3 > 0) {
				vysledekS = cislo1 * cislo3;

				$('#Vysledek').after("<p>Rychlost: " + cislo1 + " " + jednotkaV + "<br>"
				+ "Čas: " + cislo3 + " " + jednotkaT + "<br>" 
				+ "Dráha: " + vysledekS + " " + jednotkaS + "</p>");
			}
			if (cislo1 > 0 && cislo2 > 0) {
				vysledekT = cislo2 / cislo1;

				$('#Vysledek').after("<p>Rychlost: " + cislo1 + " " + jednotkaV + "<br>"
				+ "Dráha: " + cislo2 + " " + jednotkaS + "<br>" 
				+ "Čas: " + vysledekT + " " + jednotkaT + "</p>");
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
	$('#Vysledek').after("<p>Litujeme, ale nelze přesně spočítat ani jednu položku.<br>Pokud ji chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}