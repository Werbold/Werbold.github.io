$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var cislo3 = parseFloat($("#cislo3").val());
		var jednotka = $("#Jednotka").val();

		var vysledekA;
		var vysledekB;
		var vysledekC;

		if (cislo1 > 0 && cislo2 || cislo1 > 0 && cislo3 > cislo1 || cislo2 > 0 && cislo3 > cislo2) {
			if (cislo1 > 0 && cislo2) {
				vysledekC = Math.sqrt(Math.pow(cislo1,2) + Math.pow(cislo2,2));

				vysledekC = vysledekC * 1000;
				vysledekC = Math.round(vysledekC);
				vysledekC = vysledekC / 1000;

				$('#Vysledek').after("<p class='count'>Strana a: " + cislo1 + " " + jednotka + "<br>" 
				+ "Strana b: " + cislo2 + " " + jednotka + "<br>"
				+ "Strana c: " + vysledekC + " " + jednotka + "</p>");
			}
			else if (cislo1 > 0 && cislo3 > cislo1) {
				vysledekB = Math.sqrt(Math.pow(cislo3,2) - Math.pow(cislo1,2));

				vysledekB = vysledekB * 1000;
				vysledekB = Math.round(vysledekB);
				vysledekB = vysledekB / 1000;

				$('#Vysledek').after("<p class='count'>Strana a: " + cislo1 + " " + jednotka + "<br>" 
				+ "Strana c: " + cislo3 + " " + jednotka + "<br>"
				+ "Strana b: " + vysledekB + " " + jednotka + "</p>");
			}
			else if (cislo2 > 0 && cislo3 > cislo2) {
				vysledekA = Math.sqrt(Math.pow(cislo3,2) - Math.pow(cislo2,2));

				vysledekA = vysledekA * 1000;
				vysledekA = Math.round(vysledekA);
				vysledekA = vysledekA / 1000;

				$('#Vysledek').after("<p class='count'>Strana b: " + cislo2 + " " + jednotka + "<br>" 
				+ "Strana c: " + cislo3 + " " + jednotka + "<br>"
				+ "Strana a: " + vysledekA + " " + jednotka + "</p>");
			}
		}
		else {
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale pythagorovu větu nelze spočítat.<br>Pokud ji chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}