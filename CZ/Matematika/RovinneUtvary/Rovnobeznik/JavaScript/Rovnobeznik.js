$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var cislo3 = parseFloat($("#cislo3").val());
		var jednotka = $("#Jednotka").val();

		var vysledekO;
		var vysledekS;

		if (cislo1 > 0 && cislo2 > 0 && cislo3 > 0) {
			vysledekO = 2 * (cislo1 + cislo2);
			vysledekS = cislo1 * cislo3;

			$('#Vysledek').after("<p class='count'>Strana a: " + cislo1 + " " + jednotka + "<br>"
				+ "Strana b: " + cislo1 + " " + jednotka + "<br>"
				+ "Výška: " + cislo2 + " " + jednotka + "<br>"
				+ "Obvod: " + vysledekO + " " + jednotka + "<br>"
				+ "Obsah: " + vysledekS + " " + jednotka + "<sup>2</sup></p>");
		} 
		else if (cislo1 > 0 && cislo3 > 0 || cislo1 > 0 && cislo2 > 0){
			if (cislo1 > "0" && cislo3 > "0") {
				error();
				vysledekS = cislo1 * cislo3;

				$('#Vysledek').after("<p class='count'>Strana: " + cislo1 + " " + jednotka + "<br>"
					+ "Výška: " + cislo3 + " " + jednotka + "<br>"
					+ "Obsah: " + vysledekS + " " + jednotka + "</p>");
			}
			else if (cislo1 > 0 && cislo2 > 0) {
				error();
				vysledekO = 2 * (cislo1 + cislo2)

				$('#Vysledek').after("<p class='count'>Strana a: " + cislo1 + " " + jednotka + "<br>"
					+ "Strana b: " + cislo2 + " " + jednotka + "<br>"
					+ "Obvod: " + vysledekO + " " + jednotka + "</p>");
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