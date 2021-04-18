<?php
	session_start();
?>
<!DOCTYPE html>
<html lang="cs">
<head>
	<title>Mailform</title>
	<!-- Meta -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<meta name="description" content="Reportovací formulář Calcitu" />
	<meta name="author" content="Calcit" />
	<!-- Css -->
	<link rel="shortcut icon" href="../../Images/Kalcit/Kalcit.ico" />
	<link rel="stylesheet" type="text/css" href="../..//CSS/main.css">
	<link rel="stylesheet" type="text/css" href="../..//CSS/form.css">
	<!-- JavaScript -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="../../JS/GoogleAnalytics.js"></script>
	<script src="../../JS/Footer.js"></script>
	<script src="../../JS/Navigations/NavigationReport.js"></script>
</head>
<body>
	<article>
		<header></header>
		<section>
			<div id="content">
				<div id="main">
					<h1>Hlášení chyby</h1>
					<form action="mail.php" method="POST">
						<div class="left">
							<div class="row">
								<label for="name">Jméno</label>
								<input type="text" name="name" id="name" placeholder="Zadejte Vaše jméno">
							</div>
							<div class="row">
								<label for="surname">Příjmení</label>
								<input type="text" name="surname" id="surname" placeholder="Zadejte Vaše příjmení">
							</div>
						</div>
						<div class="right">
							<div class="row">
								<label for="email">E-mail</label>
								<input type="text" name="email" id="email" placeholder="Zadejte Váš e-mail">
							</div>
							<div class="row">
								<label for="select">Typ chyby</label>
								<select id="select" name="select">
									<option value="Chyba ve výpočtu">Chyba ve výpočtu</option>
									<option value="Chyba v zobrazení">Chyba v zobrazení</option>
									<option value="Nefunkční kalkulačka">Nefunkční kalkulačka</option>
									<option value="Stránka nenalezena">Stránka nenalezena</option>
									<option value="Jiné">Jiné</option>
								</select>
							</div>
						</div>
						<div class="clear"></div>
						<label for="message" id="messageText">Popište problém, na který jste narazili</label>
						<textarea type="textarea" name="message" id="message" placeholder="Podrobně popište problém"></textarea>
						<button type="submit" name="submmit" value="Odeslat">Odeslat</button>
						<div class="clear"></div>
					</form>
					<?php 
						if (isset($_SESSION["error"])) {
							echo $_SESSION["error"];
							session_destroy();
						}
						if (isset($_SESSION["good"])) {
							echo $_SESSION["good"];
							session_destroy();
						}
					?>
				</div>
			</div>
		</section>
		<div id="navigation"></div>
		<footer></footer>
	</article>
</body>
</html>