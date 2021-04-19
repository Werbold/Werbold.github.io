$(document).ready(function() {	
	$("#spocitat").click(function() {
		$.get("../../../../Calculate/Fyzika/vypocet.php?vzorec=DatovyObjem&cislo1=" + $("#cislo1").val() + "&Jednotka1=" + $("#Jednotka1").val() + "&Jednotka2=" + $("#Jednotka2").val(), function(data, status) {	
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