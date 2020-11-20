$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
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

			$('#Vysledek').after("<p>Hloubka: " + cislo1 + " " + jednotkaH + "<br>"
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
	$('#Vysledek').after("<p>Litujeme, ale nelze přesně spočítat jednu nebo více položek.<br>Pokud je chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}