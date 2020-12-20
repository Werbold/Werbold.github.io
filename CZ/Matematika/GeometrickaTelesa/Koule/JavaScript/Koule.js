$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var jednotka = $("#Jednotka").val();
		var jednotkaS = jednotka + "<sup>2</sup>";
		var jednotkaV = jednotka + "<sup>3</sup>";

		var vysledekS;
		var vysledekV;

		if (cislo1 > 0) {
			vysledekS = 4 * Math.PI * Math.pow(2,2);
			vysledekV = 4 / 3 * Math.PI * Math.pow(2,3);

			vysledekV = vysledekO * 1000;
			vysledekV = Math.round(vysledekO);
			vysledekV = vysledekO / 1000;
			
			vysledekS = vysledekS * 1000;
			vysledekS = Math.round(vysledekS);
			vysledekS = vysledekS / 1000;

			$('#Vysledek').after("<p class='count'>Poloměr: " + cislo1 + " " + jednotka + "<br>"
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale ze zadání nelze spočítat žádnou hodnotu.<br>Pokud je chcete dopočítat, zadejte prosím kladnou, nenulovou hodnotu.</p>")
}