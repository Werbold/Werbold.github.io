$(document).ready(function() {
		/*Nápověda*/
	$("#napoveda").click(function() {
		$("#napoveda").empty();
		$("#napoveda").after("<h3>Návod pro použití online převodníku jednotek datového objemu:</h3><ol><li>Zadejte hodnotu do políčka.</li><li>V rozbalovacím menu zvolte jednotky, které chcete převádět.</li><li>Klikněte na tlačítko <i>Spočítat</i>.</li><li>Pro smazání historie výsledků stiskněte tlačítko <i>Smazat historii počítání</i>.</li></ol>");
	});
});