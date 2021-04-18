$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var cislo3 = parseInt($("#cislo3").val());
		var uhel = parseInt($("#uhel").val());
		var jednotka = $("#Jednotka").val();

		var vysledekA;
		var vysledekB;
		var vysledekC;

		var test = Math.asin(x / 200);

		

			$('#Vysledek').after("<p>Strana a: " + test + "</p>");
		
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