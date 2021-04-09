$(document).ready(function() {

	$("#spocitat").click(function()	{
		$.get("../../../../Calculate/Matematika/vypocet.php?vzorec=obvodAobsahKosoctverce&cislo1=" + $("#cislo1").val() + "&Jednotka=" + $("#Jednotka").val() + "&cislo2=" + $("#cislo2").val() , function(data, status) {	
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
	$('#Vysledek').append("<p class='count'>Litujeme, ale ze zadání nelze spočítat obsah.<br>Pokud jej chcete spočítat, zadejte prosím kladnou, nenulovou hodnotu výšky.</p>")
}