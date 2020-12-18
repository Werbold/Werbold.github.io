$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var cislo3 = parseFloat($("#cislo3").val());
		var jednotka = $("#Jednotka").val();

		var vysledekS;
		var vysledekA;
		var vysledekT;

		var jednotkaS = "m";
		var jednotkaA = "m*s<sup>-2</sup>";
		var jednotkaT = "s";

		if (cislo2 > 0 && cislo3 > 0 || cislo1 > 0 && cislo3 > 0 || cislo1 > 0 && cislo2 > 0) {
			if (cislo2 > 0 && cislo3 > 0) {
				vysledekS = 1 / 2 * cislo2 * Math.pow(cislo3,2);

				$('#Vysledek').after("<p class='count'>Zrychlení: " + cislo2 + " " + jednotkaA + "<br>"
				+ "Čas: " + cislo3 + " " + jednotkaT + "<br>" 
				+ "Dráha: " + vysledekS + " " + jednotkaS + "</p>");
			}
			if (cislo1 > 0 && cislo3 > 0) {
				vysledekA = 2 * cislo1 / Math.pow(cislo3,2);

				$('#Vysledek').after("<p class='count'>Dráha: " + cislo1 + " " + jednotkaS + "<br>"
				+ "Čas: " + cislo3 + " " + jednotkaT + "<br>" 
				+ "Zrychlení: " + vysledekA + " " + jednotkaA + "</p>");
			}
			if (cislo1 > 0 && cislo2 > 0) {
				vysledekT = Math.sqrt(2 * cislo1 / cislo2); 

				$('#Vysledek').after("<p class='count'>Dráha: " + cislo1 + " " + jednotkaS + "<br>"
				+ "Zrychlení: " + cislo2 + " " + jednotkaA + "<br>" 
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale nelze přesně spočítat ani jednu položku.<br>Pokud ji chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}









