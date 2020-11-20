$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var cislo3 = parseInt($("#cislo3").val());
		var jednotka = $("#Jednotka").val();

		var vysledekPo;
		var vysledekWe;
		var vysledekT;

		var jednotkaPo = "W";
		var jednotkaWe = "J";
		var jednotkaT = "s";

		if (cislo2 > 0 && cislo3 > 0 || cislo1 > 0 && cislo3 > 0 || cislo1 > 0 && cislo2 > 0) {
			if (cislo2 > 0 && cislo3 > 0) {
				vysledekPo = cislo2 / cislo3;

				$('#Vysledek').after("<p>Elektrická práce: " + cislo2 + " " + jednotkaWe + "<br>"
				+ "Čas: " + cislo3 + " " + jednotkaT + "<br>" 
				+ "Příkon: " + vysledekPo + " " + jednotkaPo + "</p>");
			}
			if (cislo1 > 0 && cislo3 > 0) {
				vysledekWe = cislo1 * cislo3;

				$('#Vysledek').after("<p>Příkon: " + cislo1 + " " + jednotkaPo + "<br>"
				+ "Čas: " + cislo3 + " " + jednotkaT + "<br>" 
				+ "Elektrická práce: " + vysledekWe + " " + jednotkaWe + "</p>");
			}
			if (cislo1 > 0 && cislo2 > 0) {
				vysledekT = cislo2 / cislo1;

				$('#Vysledek').after("<p>Příkon: " + cislo1 + " " + jednotkaPo + "<br>"
				+ "Elektrická práce: " + cislo2 + " " + jednotkaWe + "<br>" 
				+ "Čas: " + vysledekT + " " + jednotkaT + "</p>");
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
	$('#Vysledek').after("<p>Litujeme, ale nelze přesně spočítat jednu nebo více položek.<br>Pokud je chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}