$(document).ready(function() {
		/*Nápověda*/
	$("#napoveda").click(function() {
		$("#napoveda").empty();
		$("#napoveda").after("<h3> Návod pro použití online převodníku pro jednotky času:</h3><ol><li>Zadejte hodnoty do políček.</li><li>V rozbalovacím menu zvolte jednotkuý, které chcete převádět.</li><li>Klikněte na tlačítko <i>Spočítat</i>.</li><li>Pro smazání historie výsledků stiskněte tlačítko <i>Smazat historii počítání</i>.</li></ol>");
	});
});