$(document).ready(function() {	
	$("#spocitat").click(function() {
		$.get("../../../../Calculate/Matematika/vypocet.php?vzorec=obvodAobsahLichobezniku&cislo1=" + $("#cislo1").val() + "&Jednotka=" + $("#Jednotka").val() + "&cislo2=" + $("#cislo2").val() + "&cislo3=" + $("#cislo3").val() + "&cislo4=" + $("#cislo4").val() + "&cislo5=" + $("#cislo5").val(), function(data, status) {	
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
	$('#Vysledek').append("<p class='count'>Litujeme, ale ze zadání nelze spočítat jednu, nebo více hodnot.<br>Pokud je chcete dopočítat, zadejte prosím kladné, nenulové hodnoty.</p>")
}