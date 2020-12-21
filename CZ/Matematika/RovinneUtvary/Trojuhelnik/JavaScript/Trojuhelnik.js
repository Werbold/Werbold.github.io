$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var cislo3 = parseFloat($("#cislo3").val());
		var cislo4 = parseFloat($("#cislo4").val());
		var jednotka = $("#Jednotka").val();

		var vysledekO;
		var vysledekS;

		if (cislo1 > 0 && cislo2 > 0 && cislo3 > 0 && cislo4 > 0) {
			vysledekO = cislo1 + cislo2 + cislo3;
			vysledekS = cislo1 * cislo4 / 2;

			vysledekO = vysledekO * 1000;
			vysledekO = Math.round(vysledekO);
			vysledekO = vysledekO / 1000;
			
			vysledekS = vysledekS * 1000;
			vysledekS = Math.round(vysledekS);
			vysledekS = vysledekS / 1000;

			$('#Vysledek').after("<p class='count'>Strana a: " + cislo1 + " " + jednotka + "<br>"
				+ "Strana b: " + cislo2 + " " + jednotka + "<br>"
				+ "Strana c: " + cislo3 + " " + jednotka + "<br>"
				+ "Výška: " + cislo4 + " " + jednotka + "<br>"
				+ "Obvod: " + vysledekO + " " + jednotka + "<br>"
				+ "Obsah: " + vysledekS + " " + jednotka + "<sup>2</sup></p>");
		} 
		else if (cislo1 > 0 && cislo2 > 0 && cislo3 > 0 || cislo1 > 0 && cislo4 > 0){
			if (cislo1 > "0" && cislo2 > "0" && cislo3 > "0") {
				error();
				vysledekO = cislo1 + cislo2 + cislo3;

				vysledekO = vysledekO * 1000;
				vysledekO = Math.round(vysledekO);
				vysledekO = vysledekO / 1000;

				$('#Vysledek').after("<p class='count'>Strana a: " + cislo1 + " " + jednotka + "<br>"
					+ "Strana b: " + cislo2 + " " + jednotka + "<br>"
					+ "Strana c: " + cislo3 + " " + jednotka + "<br>"
					+ "Obvod: " + vysledekO + " " + jednotka + "</p>");
			} 
			else if (cislo1 > 0 && cislo4 > 0) {
				error();
				vysledekS = cislo1 * cislo4 / 2;

				vysledekS = vysledekS * 1000;
				vysledekS = Math.round(vysledekS);
				vysledekS = vysledekS / 1000;

				$('#Vysledek').after("<p class='count'>Strana a: " + cislo1 + " " + jednotka + "<br>"
					+ "Výška: " + cislo4 + " " + jednotka + "<br>"
					+ "Obsah: " + vysledekS + " " + jednotka + "<sup>2</sup></p>");
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