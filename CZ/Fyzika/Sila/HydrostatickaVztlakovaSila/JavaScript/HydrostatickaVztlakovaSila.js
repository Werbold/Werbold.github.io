$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var jednotka = $("#Jednotka").val();

		var vysledekFvz;

		var jednotkaFvz = "N"
		var jednotkaV = "m<sup>3</sup>";
		var jednotkaRok = "kg/m<sup>3</sup>";

		if (cislo1 <= 0 || cislo2 <= 0){
			error();
		}
		else {
			vysledekFvz = cislo1 * cislo2 * 10;

			$('#Vysledek').after("<p>Hustota kapaliny: " + cislo1 + " " + jednotkaRok + "<br>"
				+ "Objem: " + cislo2 + " " + jednotkaV + "<br>" 
				+ "Hydrostatická vztlaková síla: " + vysledekFvz + " " + jednotkaFvz + "</p>");
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