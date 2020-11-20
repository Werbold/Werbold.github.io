$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var jednotka = $("#Jednotka").val();
		var jednotkaS = jednotka + "<sup>2</sup>";
		var jednotkaV = jednotka + "<sup>3</sup>";

		var vysledekS;
		var vysledekV;

		if (cislo1 > 0) {
			vysledekS = Math.pow(cislo1,2);
			vysledekV = Math.pow(cislo1,3);

			$('#Vysledek').after("<p>Strana a: " + cislo1 + " " + jednotka + "<br>"
				+ "Povrch: " + vysledekS + " " + jednotkaS + "<br>"
				+ "Objem: " + vysledekV + " " + jednotkaV + "</p>");
		}
		else if (cislo1 <= 0) {
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
	$('#Vysledek').after("<p>Litujeme, ale ze zadání nelze spočítat žádnou hodnotu.<br>Pokud je chcete dopočítat, zadejte prosím kladné, nenulové hodnoty.</p>")
}