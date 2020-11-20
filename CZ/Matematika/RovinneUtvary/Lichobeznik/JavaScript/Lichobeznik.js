$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var cislo3 = parseInt($("#cislo3").val());
		var cislo4 = parseInt($("#cislo4").val());
		var cislo5 = parseInt($("#cislo5").val());
		var jednotka = $("#Jednotka").val();

		var vysledekO;
		var vysledekS;

		if (cislo1 > 0 && cislo2 > 0 && cislo3 > 0 && cislo4 > 0 && cislo5 > 0) {
			vysledekO = cislo1 + cislo2 + cislo3 + cislo4;
			vysledekS = (cislo1 + cislo3) * cislo5 / 2;

			$('#Vysledek').after("<p>Strana a: " + cislo1 + " " + jednotka + "<br>"
				+ "Strana b: " + cislo2 + " " + jednotka + "<br>"
				+ "Strana c: " + cislo3 + " " + jednotka + "<br>"
				+ "Strana d: " + cislo4 + " " + jednotka + "<br>"
				+ "Výška: " + cislo5 + " " + jednotka + "<br>"
				+ "Obvod: " + vysledekO + " " + jednotka + "<br>"
				+ "Obsah: " + vysledekS + " " + jednotka + "<sup>2</sup></p>");
		} 
		else if (cislo1 > 0 && cislo2 > 0 && cislo3 > 0 && cislo4 > 0 || cislo1 > 0 && cislo3 > 0 && cislo5 > 0){
			if (cislo1 > 0 && cislo2 > 0 && cislo3 > 0 && cislo4 > 0) {
				error();
				vysledekO = cislo1 + cislo2 + cislo3 + cislo4;

				$('#Vysledek').after("<p>Strana a: " + cislo1 + " " + jednotka + "<br>"
					+ "Strana b: " + cislo2 + " " + jednotka + "<br>"
					+ "Strana c: " + cislo3 + " " + jednotka + "<br>"
					+ "Strana d: " + cislo4 + " " + jednotka + "<br>"
					+ "Obvod: " + vysledekO + " " + jednotka + "</p>");
			} 
			else if (cislo1 > 0 && cislo3 > 0 && cislo5 > 0) {
				error();
				vysledekS = (cislo1 + cislo3) * cislo5 / 2;

				$('#Vysledek').after("<p>Strana a: " + cislo1 + " " + jednotka + "<br>"
					+ "Strana c: " + cislo3 + " " + jednotka + "<br>"
					+ "Výška: " + cislo5 + " " + jednotka + "<br>"
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
	$('#Vysledek').after("<p>Litujeme, ale ze zadání nelze spočítat jednu, nebo více hodnot.<br>Pokud je chcete dopočítat, zadejte prosím kladné, nenulové hodnoty.</p>")
}