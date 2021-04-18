$(document).ready(function() {	
	$("#spocitat").click(function() {
		$.get("../../../../Calculate/Fyzika/vypocet.php?vzorec=Paka&cislo1=" + $("#cislo1").val() + "&cislo3=" + $("#cislo3").val() + "&cislo2=" + $("#cislo2").val() + "&cislo4=" + $("#cislo4").val(), function(data, status) {	
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