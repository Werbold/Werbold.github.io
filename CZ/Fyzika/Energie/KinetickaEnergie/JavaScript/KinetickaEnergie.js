$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var jednotka = $("#Jednotka").val();

		var vysledekEp;

		var jednotkaM = "kg";
		var jednotkaV = "m / s";
		var jednotkaEp = "J";

		if (cislo1 > 0 && cislo2 > 0) {
			vysledekEp = 1 / 2 * cislo1 * Math.pow(cislo2,2);

			vysledekEp = vysledekEp * 1000;
			vysledekEp = Math.round(vysledekEp);
			vysledekEp = vysledekEp / 1000;

			$('#Vysledek').after("<p class='count'>v = " + cislo1 + " " + jednotkaV + "<br>"
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale položku nelze spočítat.<br>Pokud ji chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}