$(document).ready(function() {
		/*Nápověda*/
	$("#napoveda").click(function() {
		$("#napoveda").empty();
		$("#napoveda").after("<h3>Návod pro použití online kalkulačky pro výpočet obvodu, nebo obsahu lichoběžníku:</h3><ol><li>Zadejte hodnotu do políček.</li><li>V rozbalovacím menu zvolte jednotky, ve kterých chcete počítat.</li><li>klikněte na tlačítko <i>Spočítat</i>.</li><li>Pro smazání historie výsledků stiskněte tlačítko <i>Smazat historii počítání</i>.</li></ol>");
	});
});