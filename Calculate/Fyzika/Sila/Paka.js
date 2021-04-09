$(document).ready(function() {	
	$("#spocitat").click(function() {
		$.get("../../../../Calculate/Fyzika/vypocet.php?vzorec=Paka&cislo1=" + $("#cislo1").val() + "&cislo3=" + $("#cislo3").val() + "&cislo2=" + $("#cislo2").val() + "&cislo4=" + $("#cislo4").val(), function(data, status) {	
			$("#Vysledek").append(data);
		});
	});

	$("#smazat").click(function() {
		refresh();
	});
});

function refresh() {
	location.reload();
}

function error() {
	$('#Vysledek').append("<p>Litujeme, ale nelze přesně spočítat jednu nebo více položek.<br>Pokud je chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}