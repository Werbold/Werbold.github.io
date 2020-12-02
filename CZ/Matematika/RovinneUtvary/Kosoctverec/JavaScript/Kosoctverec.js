$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var jednotka = $("#Jednotka").val();

		var vysledekO;
		var vysledekS;

		if (cislo1 > 0 && cislo2 > 0) {
			vysledekO = 4 * cislo1;
			vysledekS = cislo1 * cislo2;

			$('#Vysledek').after("<p class='count'>Strana: " + cislo1 + " " + jednotka + "<br>"
				+ "Výška: " + cislo2 + " " + jednotka + "<br>"
				+ "Obvod: " + vysledekO + " " + jednotka + "<br>"
				+ "Obsah: " + vysledekS + " " + jednotka + "<sup>2</sup></p>");
		} 
		else if (cislo1 > 0 && cislo2 < 0){
			error();
			vysledekO = 4 * cislo1;

			$('#Vysledek').after("<p class='count'>Strana: " + cislo1 + " " + jednotka + "<br>"
				+ "Obvod: " + vysledekO + " " + jednotka + "</p>");
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale ze zadání nelze spočítat obsah.<br>Pokud jej chcete spočítat, zadejte prosím kladnou, nenulovou hodnotu výšky.</p>")
}