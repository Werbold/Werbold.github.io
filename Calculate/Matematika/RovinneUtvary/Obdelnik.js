$(document).ready(function() {	
	$("#spocitat").click(function() {
		$.get("../../../../Calculate/Matematika/vypocet.php?vzorec=obvodAobsahObdelniku&cislo1=" + $("#cislo1").val() + "&Jednotka=" + $("#Jednotka").val() + "&cislo2=" + $("#cislo2").val(), function(data, status) {	
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
	$('#Vysledek').append("<p class='count'>Litujeme, ale nelze přesně spočítat jednu nebo více položek.<br>Pokud je chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}