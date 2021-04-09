$(document).ready(function() {	
	$("#spocitat").click(function() {
		$.get("../../../../Calculate/Fyzika/vypocet.php?vzorec=DrahaZalozenaNaZrychleni&cislo1=" + $("#cislo1").val() + "&cislo2=" + $("#cislo2").val() + "&cislo3=" + $("#cislo3").val(), function(data, status) {	
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
	$('#Vysledek').append("<p class='count'>Litujeme, ale nelze přesně spočítat ani jednu položku.<br>Pokud ji chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}