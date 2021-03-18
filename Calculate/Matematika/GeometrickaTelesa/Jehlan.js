$(document).ready(function() {	
	$("#spocitat").click(function() {
		$.get("../../../../Calculate/Matematika/vypocet.php?vzorec=Jehlan&cislo2=" + $("#cislo2").val() + "&Jednotka=" + $("#Jednotka").val() + "&cislo3=" + $("#cislo3").val() + "&cislo4=" + $("#cislo4").val() + "&cislo5=" + $("#cislo5").val()	, function(data, status) {	
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
	$('#Vysledek').after("<h2 class='warning'>Upozornění</h2><p class='count'>Litujeme, ale ze zadání nelze spočítat jednu, nebo více hodnot.<br>Pokud je chcete dopočítat, zadejte prosím kladné, nenulové hodnoty.</p>")
}