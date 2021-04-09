$(document).ready(function() {	
	$("#spocitat").click(function() {
		$.get("../../../../Calculate/Fyzika/vypocet.php?vzorec=Obsah&cislo1=" + $("#cislo1").val() + "&Jednotka1=" + $("#Jednotka1").val() + "&Jednotka2=" + $("#Jednotka2").val(), function(data, status) {	
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
	$('#Vysledek').append("<p class='count'>Litujeme, ale nelze spočítat ani jednu položku.<br>Pokud ji chcete spočítat, zadejte prosím kladnou nenulovou hodnotu.</p>")
}