$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var jednotka = $("#Jednotka").val();

		var vysledekO;
		var vysledekS;

		if (cislo1 <= 0 || cislo2 <= 0) {
			error();
		}
		else {
			vysledekO = cislo1 * 2 + cislo2 * 2;
			vysledekS = cislo1 * cislo2;

			vysledekO = vysledekO * 1000;
			vysledekO = Math.round(vysledekO);
			vysledekO = vysledekO / 1000;
			
			vysledekS = vysledekS * 1000;
			vysledekS = Math.round(vysledekS);
			vysledekS = vysledekS / 1000;

			$('#Vysledek').after("<p class='count'>Strana a: " + cislo1 + " " + jednotka + "<br>"
				+ "Strana b: " + cislo2 + " " + jednotka + "<br>" 
				+ "Obvod: " + vysledekO + " " + jednotka + "<br>"
				+ "Obsah: " + vysledekS + " " + jednotka + "<sup>2</sup></p>");
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