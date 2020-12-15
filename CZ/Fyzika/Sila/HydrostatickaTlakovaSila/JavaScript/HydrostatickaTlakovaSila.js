$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var cislo3 = parseInt($("#cislo3").val());
		var jednotka = $("#Jednotka").val();

		var vysledekFh;

		var jednotkaFh = "Pa"
		var jednotkaH = "m";
		var jednotkaS = "m<sup>2</sup>";
		var jednotkaRo = "kg/m<sup>3</sup>";

		if (cislo1 <= 0 || cislo2 <= 0 || cislo3 <= 0){
			error();
		}
		else {
			vysledekFh = cislo1 * cislo2 * cislo3 * 10;

			$('#Vysledek').after("<p>Hloubka: " + cislo1 + " " + jednotkaH + "<br>"
				+ "Plocha: " + cislo2 + " " + jednotkaS + "<br>" 
				+ "hustota: " + cislo3 + " " + jednotkaRo + "<br>" 
				+ "Hydrostatická tlaková síla: " + vysledekFh + " " + jednotkaFh + "</p>");
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
	$('#Vysledek').after("<p>Litujeme, ale položku nelze spočítat.<br>Pokud ji chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}