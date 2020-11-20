$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var jednotka = $("#Jednotka").val();

		var vysledekEp;

		var jednotkaM = "kg";
		var jednotkaV = "m / s";
		var jednotkaEp = "J";

		if (cislo1 > 0 && cislo2 > 0) {
			vysledekEp = 1 / 2 * cislo1 * Math.pow(cislo2,2);

			$('#Vysledek').after("<p>v = " + cislo1 + " " + jednotkaV + "<br>"
				+ "m = " + cislo2 + " " + jednotkaM + "<br>" 
				+ "E<sub>p</sub> = " + vysledekEp + " " + jednotkaEp + "</p>");
		}
		else if (cislo1 <= 0 || cislo2 <= 0) {
			error();
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