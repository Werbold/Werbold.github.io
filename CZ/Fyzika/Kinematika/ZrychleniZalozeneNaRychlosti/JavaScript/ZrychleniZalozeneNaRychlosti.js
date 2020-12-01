$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var cislo3 = parseInt($("#cislo3").val());
		var jednotka = $("#Jednotka").val();

		var vysledekV;
		var vysledekT;
		var vysledekA;

		var jednotkaV = "m / s";
		var jednotkaT = "s";
		var jednotkaA = "m*s<sup>-2</sup>";
		
		if (cislo2 > 0 && cislo3 > 0 || cislo1 > 0 && cislo3 > 0 || cislo2 > 0 && cislo1 > 0) {
			if (cislo2 > 0 && cislo3 > 0) {
				vysledekA = cislo2 / cislo3;

				$('#Vysledek').after("<p>Absolutní rychlost: " + cislo2 + " " + jednotkaV + "<br>"
				+ "Čas: " + cislo3 + " " + jednotkaT + "<br>" 
				+ "Zrychlení: " + vysledekA + " " + jednotkaA + "</p>");
			}
			if (cislo1 > 0 && cislo3 > 0) {
				vysledekV = cislo1 * cislo3;

				$('#Vysledek').after("<p>Zrychlení: " + cislo1 + " " + jednotkaA + "<br>"
				+ "Čas: " + cislo3 + " " + jednotkaT + "<br>" 
				+ "Absolutní rychlost: " + vysledekV + " " + jednotkaV + "</p>");
			}
			if (cislo2 > 0 && cislo1 > 0) {
				vysledekT = cislo2 / cislo1;

				$('#Vysledek').after("<p>Zrychlení: " + cislo1 + " " + jednotkaA + "<br>"
				+ "Absolutní rychlost: " + cislo2 + " " + jednotkaV + "<br>" 
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
	$('#Vysledek').after("<p>Litujeme, ale nelze přesně spočítat jednu nebo více položek.<br>Pokud je chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}