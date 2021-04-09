$(document).ready(function() {	
	$("#spocitat").click(function() {
		$.get("../../../../Calculate/Fyzika/vypocet.php?vzorec=KinetickaEnergie&cislo1=" + $("#cislo1").val() + "&cislo2=" + $("#cislo2").val(), function(data, status) {	
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
	$('#Vysledek').append("<p class='count'>Litujeme, ale položku nelze spočítat.<br>Pokud ji chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}