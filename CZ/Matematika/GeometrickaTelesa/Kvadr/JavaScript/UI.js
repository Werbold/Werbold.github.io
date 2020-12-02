$(document).ready(function() {
		/*Nápověda*/
	$("#napoveda").click(function() {
		$("#napovedaContainer").after("<h3>Návod pro použití online kalkulačky pro výpočet objemu, nebo povrchu kvádru:</h3><ol><li>Zadejte hodnoty do políček.</li><li>V rozbalovacím menu zvolte jednotky, ve kterých chcete počítat.</li><li>Klikněte na tlačítko <i>Spočítat</i>.</li><li>Pro smazání historie výsledků stiskněte tlačítko <i>Smazat historii počítání</i>.</li></ol>");
		$("#napoveda").remove();
	});
});