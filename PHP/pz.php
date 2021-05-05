<?php
	if (isset($POST["userName"])) {
		$POST["userName"] = $userName;
	}
	else {
		$userName = null;
	}

	if (isset($POST["password"])) {
		$POST["password"] = $password;
	}
	else {
		$userName = null;
	}

	if ($password == "Kupk0v4" && $userName == "Lea") {
		header('location: poems.html');
	}
	else {
		header('location: index.html');
	}
?>