$(document).ready(function() {
	$("#login").click(function() {
		var userName = $("#userName").val();
		var password = $("#password").val();

		if (userName == "Lea" && password == "Kupk0v4") {
			$("#loginForm").after("<p><div class='bottomHeader'><div class='flexMenu'><p class='flexMenuItem'><a href='Sonets.html' title='Sonets'>Sonets</a></p><p class='flexMenuItem'><a href='LoveThoughts.html' title='Love Thoughts'>Love Thoughts</a></p><p  class='flexMenuItem'><a href='Quotes.html' title='Quotes'>Quotes</a></p></div></div><div class='bottomHeader'><div class='flexMenu'><p class='flexMenuItem'><a href='Poems.html' title='Poems'>Poems</a></p><p  class='flexMenuItem'><a href='EroticThoughts.html' title='Erotic Thoughts'>Erotic Thoughts</a></p><p class='flexMenuItem'><a href='ForMe.html' title='For Me'>For Me</a></p></div></p>");
		} else{
			$("#loginForm").after("<p>Error</p>");
		}
	})
})