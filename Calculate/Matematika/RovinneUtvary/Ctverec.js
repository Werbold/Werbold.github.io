$(document).ready(function() {
	$("#spocitat").click(function()	{
		$.get("../../../../Calculate/Matematika/vypocet.php?vzorec=obvodAobsahCtverce&cislo1=" + $("#cislo1").val() + "&Jednotka=" + $("#Jednotka").val(), function(data, status) {	
			$("#Vysledek").after(data);
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale nelze přesně spočítat jednu nebo více položek.<br>Pokud je chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}