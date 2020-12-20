$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var cislo3 = parseFloat($("#cislo3").val());
		var cislo4 = parseFloat($("#cislo4").val());
		var cislo5 = parseFloat($("#cislo5").val());
		var jednotka = $("#Jednotka").val();
		var jednotkaS = jednotka + "<sup>2</sup>";
		var jednotkaV = jednotka + "<sup>3</sup>";

		var vysledekS;
		var vysledekV;

		if (cislo2 > 0 && cislo4 > 0 && cislo5 > 0 || cislo3 > 0 && cislo4 > 0 && cislo5 > 0) {
			if (cislo2 > 0 && cislo4 > 0 && cislo5 > 0) {
				vysledekS = cislo2 * cislo2 + cislo4;
				vysledekV = 1 / 3 * cislo2 * cislo2 * cislo5;

				vysledekV = vysledekO * 1000;
				vysledekV = Math.round(vysledekO);
				vysledekV = vysledekO / 1000;
				
				vysledekS = vysledekS * 1000;
				vysledekS = Math.round(vysledekS);
				vysledekS = vysledekS / 1000;

				$('#Vysledek').after("<p class='count'>Strana a: " + cislo2 + " " + jednotka + "<br>"
				+ "Obsah pláště: " + cislo4 + " " + jednotkaS + "<br>"
				+ "Výška: " + cislo5 + " " + jednotka + "<br>"
				+ "Povrch: " + vysledekS + " " + jednotkaS + "<br>"
				+ "Objem: " + vysledekV + " " + jednotkaV + "</p>");
			}
			else if (cislo3 > 0 && cislo4 > 0 && cislo5 > 0) {
				vysledekS = cislo3 + cislo4;
				vysledekV = 1 / 3 * cislo3 * cislo5;

				vysledekV = vysledekO * 1000;
				vysledekV = Math.round(vysledekO);
				vysledekV = vysledekO / 1000;
				
				vysledekS = vysledekS * 1000;
				vysledekS = Math.round(vysledekS);
				vysledekS = vysledekS / 1000;

				$('#Vysledek').after("<p class='count'>Obsah podstavy: " + cislo3 + " " + jednotkaS + "<br>"
				+ "Obsah pláště: " + cislo4 + " " + jednotkaS + "<br>"
				+ "Výška: " + cislo5 + " " + jednotka + "<br>"
				+ "Povrch: " + vysledekS + " " + jednotkaS + "<br>"
				+ "Objem: " + vysledekV + " " + jednotkaV + "</p>");
			}

		} 
		else if (cislo2 > 0 && cislo4 > 0 || cislo3 > 0 && cislo4 > 0 || cislo2 > 0 && cislo5 > 0 || cislo3 > 0 && cislo4 > 0){
			if (cislo2 > 0 && cislo4 > 0) {
				error();
				vysledekS = cislo2 * cislo2 + cislo4;

				vysledekS = vysledekS * 1000;
				vysledekS = Math.round(vysledekS);
				vysledekS = vysledekS / 1000;

				$('#Vysledek').after("<p class='count'>strana a: " + cislo2 + " " + jednotka + "<br>"
				+ "Obsah pláště: " + cislo4 + " " + jednotkaS + "<br>"
				+ "Povrch: " + vysledekS + " " + jednotkaS + "</p>");
			}
			else if (cislo3 > 0 && cislo4 > 0) {
				error();
				vysledekS = cislo3 + cislo4;
				
				vysledekS = vysledekS * 1000;
				vysledekS = Math.round(vysledekS);
				vysledekS = vysledekS / 1000;

				$('#Vysledek').after("<p class='count'>Obsah podstavy: " + cislo3 + " " + jednotkaS + "<br>"
				+ "Obsah pláště: " + cislo4 + " " + jednotkaS + "<br>"
				+ "Povrch: " + vysledekS + " " + jednotkaS + "</p>");
			}
			else if (cislo2 > 0 && cislo5 > 0) {
				error();
				vysledekV = 1 / 3 * cislo2 * cislo2 * cislo5;

				vysledekV = vysledekO * 1000;
				vysledekV = Math.round(vysledekO);
				vysledekV = vysledekO / 1000;

				$('#Vysledek').after("<p class='count'>Strana a: " + cislo2 + " " + jednotka + "<br>"
				+ "Výška: " + cislo5 + " " + jednotka + "<br>"
				+ "Objem: " + vysledekV + " " + jednotkaV + "</p>");
			}
			else if (cislo3 > 0 && cislo4 > 0) {
				error();
				vysledekV = 1 / 3 * cislo3 * cislo4;

				vysledekV = vysledekO * 1000;
				vysledekV = Math.round(vysledekO);
				vysledekV = vysledekO / 1000;

				$('#Vysledek').after("<p class='count'>Strana a: " + cislo2 + " " + jednotka + "<br>"
				+ "Výška: " + cislo5 + " " + jednotka + "<br>"
				+ "Objem: " + vysledekV + " " + jednotkaV + "</p>");
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
	$('#Vysledek').after("<h2 class='warning'>Upozornění</h2><p class='count'>Litujeme, ale ze zadání nelze spočítat jednu, nebo více hodnot.<br>Pokud je chcete dopočítat, zadejte prosím kladné, nenulové hodnoty.</p>")
}