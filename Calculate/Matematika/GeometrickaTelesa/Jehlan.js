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