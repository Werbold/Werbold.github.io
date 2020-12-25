$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var jednotka = $("#Jednotka").val();

		var vysledekFg;
		var vysledekM;

		var jednotkaFg;
		var jednotkaM;

		if (jednotka == "Kilo" || jednotka == "Základní" || jednotka == "Mili") {
			if (jednotka == "Kilo") {
				jednotkaFg = "kN";
				jednotkaM = "kg";
			}
			if (jednotka == "Základní") {
				jednotkaFg = "N";
				jednotkaM = "g";
			}
			if (jednotka == "Mili") {
				jednotkaFg = "mN";
				jednotkaM = "mg";
			}

			if (cislo1 > 0) {
				vysledekM = cislo1 / 10;

				vysledekM = vysledekM * 1000;
				vysledekM = Math.round(vysledekM);
				vysledekM = vysledekM / 1000;

				$('#Vysledek').after("<p>Gravitační síla: " + cislo1 + " " + jednotkaFg + "<br>"
				+ "Hmotnost: " + vysledekM + " " + jednotkaM + "</p>");
			}
			if (cislo2 > 0) {
				vysledekFg = cislo2 * 10;

				vysledekFg = vysledekFg * 1000;
				vysledekFg = Math.round(vysledekFg);
				vysledekFg = vysledekFg / 1000;

				$('#Vysledek').after("<p>Hmotnost: " + cislo2 + " " + jednotkaM + "<br>"
				+ "Gravitační síla: " + vysledekFg + " " + jednotkaFg + "</p>");
			}
		}
		else{
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
	$('#Vysledek').after("<p>Litujeme, ale položku nelze spočítat.<br>Pokud ji chcete dopočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}