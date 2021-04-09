$(document).ready(function() {	
	$("#spocitat").click(function() {
		$.get("../../../../Calculate/Matematika/vypocet.php?vzorec=Kvadr&cislo1=" + $("#cislo1").val() + "&Jednotka=" + $("#Jednotka").val() + "&cislo2=" + $("#cislo2").val() + "&cislo3=" + $("#cislo3").val(), function(data, status) {	
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
	$('#Vysledek').append("<p class='count'>Litujeme, ale ze zadání nelze spočítat žádnou hodnotu.<br>Pokud je chcete dopočítat, zadejte prosím kladné, nenulové hodnoty.</p>")
}