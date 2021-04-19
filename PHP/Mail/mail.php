<?php

	session_start();

	include "library.php";

	if (isset($_POST["name"])) {
		$jmeno = $_POST["name"];
	} else {
		$jmeno = null;
	}
	if (isset($_POST["surname"])) {
		$prijmeni = $_POST["surname"];
	} else {
		$prijmeni = null;
	}
	if (isset($_POST["message"])) {
		$zprava = $_POST["message"];
	} else {
		$zprava = null;
	}
	if (isset($_POST["email"])) {
		$email = $_POST["email"];
	} else {
		$email = null;
	}
	if (isset($_POST["select"])) {
		$predmet = $_POST["select"];
	} else {
		$predmet = null;
	}

/*--------------------------existence-------------------------------*/
	$error = 0;
	$_SESSION["zprava"] = " ";
	if ($jmeno != null) {
		$test1 = Jmena($jmeno);
		if ($test1 == "true") {
			$_SESSION["zprava"] .= $jmeno . "<br/>";
		} else {
			$_SESSION["zprava"] .= "<i>Nevyplněno</i><br/>";
		}
	} else {
		$_SESSION["zprava"] .= "<i>Nevyplněno</i><br/>";
	}
	if ($prijmeni != null) {
		$test2 = Jmena($prijmeni);
		if ($test2 == "true") {
			$_SESSION["zprava"] .= $prijmeni . "<br/>";
		} else {
			$_SESSION["zprava"] .= "<i>Nevyplněno</i><br/>";
		}
	} else {
		$_SESSION["zprava"] .= "<i>Nevyplněno</i><br/>";
	}
	if ($email != null) {
		$test3 = EMail($email);
		if ($test3 == "true") {
			$_SESSION["mail"] = $email;
		} else {
			$_SESSION["mail"] = "false";
			$error++;
			$jedna = "false";
		}
	} else {
		$jedna = "false";
		$error++;
	} 
	if ($zprava != null) {
		$_SESSION["zprava"] .= htmlspecialchars($zprava);
	} else {
		$dva = "false";
		$error++;
	}
/*----------------------------kontrola--------------------------------*/

	$_SESSION["error"] = " "; 

	if ($dva == "false") {
		$_SESSION["error"] .= " Zpráva nebyla vyplněna.";
	}
	if ($jedna == "false") {
		$_SESSION["error"] .= " Špatně zadaný, nebo nevyplněný mail.";
	}

	if ($error > 0) {
		header ("location: index.php");
	} else {
		$hlavicka = 'From:' . $email;
        $hlavicka .= "\nMIME-Version: 1.0\n";
        $hlavicka .= "Content-Type: text/html; charset=\"utf-8\"\n";
        $adresa = 'support@calcit.eu';
        $uspech = mb_send_mail($adresa, $predmet, $_SESSION["zprava"], $hlavicka);
        if ($uspech) {
        	$_SESSION["good"] = "Děkujeme za zpětnou vazbu. Jsme rádi, že nám pomáháte Calcit.eu zlepšovat.";
			header("location: index.php");
        } else {
        	$_SESSION["good"] = "Email se nepodarilo odeslat";
        	header("location: index.php");
        }
		
	}

?>