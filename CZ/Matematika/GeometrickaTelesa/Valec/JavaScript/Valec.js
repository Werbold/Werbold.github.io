$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var cislo3 = parseFloat($("#cislo3").val());
		var cislo4 = parseFloat($("#cislo4").val());
		var jednotka = $("#Jednotka").val();
		var jednotkaS = jednotka + "<sup>2</sup>";
		var jednotkaV = jednotka + "<sup>3</sup>";

		var vysledekS;
		var vysledekV;

		if (cislo2 > 0 && cislo3 > 0 && cislo1 > 0 && cislo4 > 0 || cislo1 > 0 && cislo4 > 0 || cislo2 > 0 && cislo3 > 0) {
			if (cislo2 > 0 && cislo3 > 0 && cislo1 > 0 && cislo4 > 0) {
				vysledekS = 2 * cislo2 + cislo3;
				vysledekV = Math.PI * Math.pow(cislo1,2);

				vysledekV = vysledekO * 1000;
				vysledekV = Math.round(vysledekO);
				vysledekV = vysledekO / 1000;
				
				vysledekS = vysledekS * 1000;
				vysledekS = Math.round(vysledekS);
				vysledekS = vysledekS / 1000;

				$('#Vysledek').after("<p class='count'>Poloměr: " + cislo1 + " " + jednotka + "<br>"
				+ "Obsah podstavy: " + cislo2 + " " + jednotkaS + "<br>"
				+ "Obsah pláště: " + cislo3 + " " + jednotkaS + "<br>"
				+ "Výška: " + cislo4 + " " + jednotka + "<br>"
				+ "Povrch: " + vysledekS + " " + jednotkaS + "<br>"
				+ "Objem: " + vysledekV + " " + jednotkaV + "</p>");
			}
			else if (cislo1 > 0 && cislo4 > 0) {
				vysledekS = 2 * Math.PI * cislo1 * (cislo1 + cislo4);
				vysledekV = Math.PI * Math.pow(cislo1,2);

				vysledekV = vysledekO * 1000;
				vysledekV = Math.round(vysledekO);
				vysledekV = vysledekO / 1000;
				
				vysledekS = vysledekS * 1000;
				vysledekS = Math.round(vysledekS);
				vysledekS = vysledekS / 1000;

				$('#Vysledek').after("<p class='count'>Poloměr: " + cislo1 + " " + jednotka + "<br>"
				+ "Výška: " + cislo4 + " " + jednotka + "<br>"
				+ "Povrch: " + vysledekS + " " + jednotkaS + "<br>"
				+ "Objem: " + vysledekV + " " + jednotkaV + "</p>");
			}
			else if (cislo2 > 0 && cislo3 > 0) {
				error();
				vysledekS = 2 * cislo2 + cislo3;

				vysledekS = vysledekS * 1000;
				vysledekS = Math.round(vysledekS);
				vysledekS = vysledekS / 1000;

				$('#Vysledek').after("<p class='count'>Obsah podstavy: " + cislo2 + " " + jednotkaS + "<br>"
				+ "Obsah pláště: " + cislo3 + " " + jednotkaS + "<br>"
				+ "Povrch: " + vysledekS + " " + jednotkaS + "</p>");
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale ze zadání nelze spočítat jednu, nebo více hodnot.<br>Pokud je chcete dopočítat, zadejte prosím kladné, nenulové hodnoty.</p>")
}