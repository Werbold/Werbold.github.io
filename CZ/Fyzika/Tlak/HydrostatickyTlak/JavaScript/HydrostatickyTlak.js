$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var jednotka = $("#Jednotka").val();

		var vysledek;

		var jednotkaH = "m";
		var jednotkaRo = "kg/m<sup>3</sup>";
		var jednotkaPh = "Pa";

		if (cislo1 <= 0 || cislo2 <= 0) {
			error();
		}
		else {
			vysledek = cislo1 * cislo2 * 10;

			vysledek = vysledek * 1000;
			vysledek = Math.round(vysledek);
			vysledek = vysledek / 1000;

			$('#Vysledek').after("<p class='count'>Hloubka: " + cislo1 + " " + jednotkaH + "<br>"
				+ "Hustota: " + cislo2 + " " + jednotkaRo + "<br>" 
				+ "Hydrostatický tlak: " + vysledek + " " + jednotkaPh + "</p>");
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