$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var cislo3 = parseFloat($("#cislo3").val());
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

				vysledekPo = vysledekPo * 1000;
				vysledekPo = Math.round(vysledekPo);
				vysledekPo = vysledekPo / 1000;

				$('#Vysledek').after("<p class='count'>Elektrická práce: " + cislo2 + " " + jednotkaWe + "<br>"
				+ "Čas: " + cislo3 + " " + jednotkaT + "<br>" 
				+ "Příkon: " + vysledekPo + " " + jednotkaPo + "</p>");
			}
			if (cislo1 > 0 && cislo3 > 0) {
				vysledekWe = cislo1 * cislo3;

				vysledekWe = vysledekWe * 1000;
				vysledekWe = Math.round(vysledekWe);
				vysledekWe = vysledekWe / 1000;

				$('#Vysledek').after("<p class='count'>Příkon: " + cislo1 + " " + jednotkaPo + "<br>"
				+ "Čas: " + cislo3 + " " + jednotkaT + "<br>" 
				+ "Elektrická práce: " + vysledekWe + " " + jednotkaWe + "</p>");
			}
			if (cislo1 > 0 && cislo2 > 0) {
				vysledekT = cislo2 / cislo1;

				vysledekT = vysledekT * 1000;
				vysledekT = Math.round(vysledekT);
				vysledekT = vysledekT / 1000;

				$('#Vysledek').after("<p class='count'>Příkon: " + cislo1 + " " + jednotkaPo + "<br>"
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale nelze přesně spočítat jednu nebo více položek.<br>Pokud je chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}