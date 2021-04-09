$(document).ready(function() {	
	$("#spocitat").click(function() {
		$.get("../../../../Calculate/Fyzika/vypocet.php?vzorec=elektrickaPrace&cislo1=" + $("#cislo1").val() + "&cislo2=" + $("#cislo2").val() + "&cislo3=" + $("#cislo3").val() + "&cislo4=" + $("#cislo4").val(), function(data, status) {	
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
	$('#Vysledek').append("<p class='count'>Litujeme, ale položku nelze spočítat.<br>Pokud je chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}