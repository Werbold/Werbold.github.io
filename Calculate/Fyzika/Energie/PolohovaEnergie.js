$(document).ready(function() {	
	$("#spocitat").click(function() {
		$.get("../../../../Calculate/Fyzika/vypocet.php?vzorec=polohovaEnergie&cislo1=" + $("#cislo1").val() + "&cislo2=" + $("#cislo2").val() + "&Jednotka=" + $("#Jednotka").val(), function(data, status) {	
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