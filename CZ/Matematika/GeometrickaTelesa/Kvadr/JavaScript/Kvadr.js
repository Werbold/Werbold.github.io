$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var cislo3 = parseInt($("#cislo3").val());
		var jednotka = $("#Jednotka").val();
		var jednotkaS = jednotka + "<sup>2</sup>";
		var jednotkaV = jednotka + "<sup>3</sup>";

		var vysledekS;
		var vysledekV;

		if (cislo1 > 0 && cislo2 > 0 && cislo3 > 0) {
			vysledekS = 2 * (cislo1 * cislo2 + cislo1 * cislo3 + cislo2 * cislo3);
			vysledekV = cislo1 * cislo2 * cislo3;

			$('#Vysledek').after("<p class='count'>Strana a: " + cislo1 + " " + jednotka + "<br>"
				+ "Strana b: " + cislo2 + " " + jednotka + "<br>"
				+ "Strana c: " + cislo3 + " " + jednotka + "<br>"
				+ "Povrch: " + vysledekS + " " + jednotkaS + "<br>"
				+ "Objem: " + vysledekV + " " + jednotkaV + "</p>");
		}
		else if (cislo1 <= 0 || cislo2 <= 0 || cislo3 <= 0) {
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale ze zadání nelze spočítat žádnou hodnotu.<br>Pokud je chcete dopočítat, zadejte prosím kladné, nenulové hodnoty.</p>")
}