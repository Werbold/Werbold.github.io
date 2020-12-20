$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var cislo3 = parseFloat($("#cislo3").val());
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

				vysledekA = vysledekO * 1000;
				vysledekA = Math.round(vysledekO);
				vysledekA = vysledekO / 1000;

				$('#Vysledek').after("<p class='count'>Absolutní rychlost: " + cislo2 + " " + jednotkaV + "<br>"
				+ "Čas: " + cislo3 + " " + jednotkaT + "<br>" 
				+ "Zrychlení: " + vysledekA + " " + jednotkaA + "</p>");
			}
			if (cislo1 > 0 && cislo3 > 0) {
				vysledekV = cislo1 * cislo3;

				vysledekV = vysledekO * 1000;
				vysledekV = Math.round(vysledekO);
				vysledekV = vysledekO / 1000;

				$('#Vysledek').after("<p class='count'>Zrychlení: " + cislo1 + " " + jednotkaA + "<br>"
				+ "Čas: " + cislo3 + " " + jednotkaT + "<br>" 
				+ "Absolutní rychlost: " + vysledekV + " " + jednotkaV + "</p>");
			}
			if (cislo2 > 0 && cislo1 > 0) {
				vysledekT = cislo2 / cislo1;

				vysledekT = vysledekO * 1000;
				vysledekT = Math.round(vysledekO);
				vysledekT = vysledekO / 1000;

				$('#Vysledek').after("<p class='count'>Zrychlení: " + cislo1 + " " + jednotkaA + "<br>"
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale nelze přesně spočítat jednu nebo více položek.<br>Pokud je chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}