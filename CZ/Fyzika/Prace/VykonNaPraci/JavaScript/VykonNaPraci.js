$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var cislo3 = parseInt($("#cislo3").val());
		var jednotka = $("#Jednotka").val();

		var vysledekP;
		var vysledekW;
		var vysledekT;

		var jednotkaP = "W";
		var jednotkaW = "J";
		var jednotkaT = "s";

		if (cislo2 > 0 && cislo3 > 0 || cislo1 > 0 && cislo3 > 0 || cislo1 > 0 && cislo2 > 0) {
			if (cislo2 > 0 && cislo3 > 0) {
				vysledekP = cislo2 / cislo3;

				$('#Vysledek').after("<p class='count'>Práce: " + cislo2 + " " + jednotkaW + "<br>"
				+ "Čas: " + cislo3 + " " + jednotkaT + "<br>" 
				+ "Výkon: " + vysledekP + " " + jednotkaP + "</p>");
			}
			if (cislo1 > 0 && cislo3 > 0) {
				vysledekW = cislo1 * cislo3;

				$('#Vysledek').after("<p class='count'>Výkon: " + cislo1 + " " + jednotkaP + "<br>"
				+ "Čas: " + cislo3 + " " + jednotkaT + "<br>" 
				+ "Práce: " + vysledekW + " " + jednotkaW + "</p>");
			}
			if (cislo1 > 0 && cislo2 > 0) {
				vysledekT = cislo2 / cislo1;

				$('#Vysledek').after("<p class='count'>Výkon: " + cislo1 + " " + jednotkaP + "<br>"
				+ "Práce: " + cislo2 + " " + jednotkaW + "<br>" 
				+ "Čas: " + vysledekT + " " + jednotkaT + "</p>");
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale nelze přesně spočítat jednu nebo více položek.<br>Pokud je chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}