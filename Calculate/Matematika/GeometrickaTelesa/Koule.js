$(document).ready(function() {	
	$("#spocitat").click(function() {
		$.get("../../../../Calculate/Matematika/vypocet.php?vzorec=Koule&cislo1=" + $("#cislo1").val() + "&Jednotka=" + $("#Jednotka").val(), function(data, status) {	
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
	$('#Vysledek').append("<p class='count'>Litujeme, ale ze zadání nelze spočítat žádnou hodnotu.<br>Pokud je chcete dopočítat, zadejte prosím kladnou, nenulovou hodnotu.</p>")
}