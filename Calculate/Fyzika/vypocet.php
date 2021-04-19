<?php

$vzorec;
$vzorec = $_GET["vzorec"];

function elektrickaPrace(){
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];


	if ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0 && $cislo4 > 0) {
		$cislo1 = $cislo2 * $cislo3 * $cislo4;
		$vysledek = "<p class='count'>I = " . $cislo2 . " A<br/>U = " . $cislo3 . " U<br/>t = " . $cislo4 . " s<br/>W<sub>e</sub> = " . $cislo1 . " J</p>";
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0 && $cislo4 > 0) {
		$cislo2 = $cislo1 / ($cislo3 * $cislo4);
		$vysledek = "<p class='count'>I = " . $cislo2 . " A<br/>U = " . $cislo3 . " U<br/>t = " . $cislo4 . " s<br/>W<sub>e</sub> = " . $cislo1 . " J</p>";
	} elseif ($cislo3 == 0 && $cislo1 > 0 && $cislo2 > 0 && $cislo4 > 0) {
		$cislo3 = $cislo1 / ($cislo2 * $cislo4);
		$vysledek = "<p class='count'>I = " . $cislo2 . " A<br/>U = " . $cislo3 . " U<br/>t = " . $cislo4 . " s<br/>W<sub>e</sub> = " . $cislo1 . " J</p>";
	} elseif ($cislo4 == 0 && $cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$cislo4 = $cislo1 / ($cislo2 * $cislo3);
		$vysledek = "<p class='count'>I = " . $cislo2 . " A<br/>U = " . $cislo3 . " U<br/>t = " . $cislo4 . " s<br/>W<sub>e</sub> = " . $cislo1 . " J</p>";
	} elseif ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0 && $cislo4 > 0) {
		$vysledek = "<p class='count'>I = " . $cislo2 . " A<br/>U = " . $cislo3 . " U<br/>t = " . $cislo4 . " s<br/>W<sub>e</sub> = " . $cislo1 . " J</p>";
	} else{
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}
	
	return $vysledek;

}

function  ProudNaNaboji(){
	$cislo1;
	$cislo2;
	$cislo3;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];

	if ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0){
		$cislo1 = $cislo2 / $cislo3;
		$vysledek = "<p class='count'>Q = " . $cislo2 . " C<br/>t = " . $cislo3 . " s<br/>I = " . $cislo1 . " A</p>";
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0) {
		$cislo2 = $cislo1 * $cislo3;
		$vysledek = "<p class='count'>Q = " . $cislo2 . " C<br/>t = " . $cislo3 . " s<br/>I = " . $cislo1 . " A</p>";
	} elseif ($cislo3 == 0 && $cislo1 > 0 && $cislo2 > 0) {
		$cislo3 = $cislo2 / $cislo1;
		$vysledek = "<p class='count'>Q = " . $cislo2 . " C<br/>t = " . $cislo3 . " s<br/>I = " . $cislo1 . " A</p>";
	}elseif ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = "<p class='count'>Q = " . $cislo2 . " C<br/>t = " . $cislo3 . " s<br/>I = " . $cislo1 . " A</p>";
	} elseif ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = "<p class='count'>Q = " . $cislo2 . " C<br/>t = " . $cislo3 . " s<br/>I = " . $cislo1 . " A</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function proudNaElektrickemNapeti(){
	$cislo1;
	$cislo2;
	$cislo3;
	$Jednotka;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$Jednotka = $_GET["Jednotka"];

	if ($Jednotka == "Mega") {
		$Jednotka1 = "M";
	} elseif ($Jednotka == "Kilo") {
		$Jednotka1  = "k";
	} elseif ($Jednotka == "Základní") {
		$Jednotka1 = " ";
	} elseif ($Jednotka == "Mili") {
		$Jednotka1 = "m";
	} else {
		$Jednotka1 = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	if ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0) {
		$cislo1 = $cislo2 / $cislo3;
		$vysledek = "<p class='count'>R = " . $cislo3 . " " . $Jednotka1 . "Ω<br/>U = " . $cislo2 . " " . $Jednotka1 . "V<br/>I = " . $cislo1 . " " . $Jednotka1 . "A</p>"; 
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0) {
		$cislo2 = $cislo1 * $cislo3;
		$vysledek = "<p class='count'>R = " . $cislo3 . " " . $Jednotka1 . "Ω<br/>U = " . $cislo2 . " " . $Jednotka1 . "V<br/>I = " . $cislo1 . " " . $Jednotka1 . "A</p>"; 
	} elseif ($cislo3 == 0 && $cislo1 > 0 && $cislo2 > 0) {
		$cislo3 = $cislo2 / $cislo1;
		$vysledek = "<p class='count'>R = " . $cislo3 . " " . $Jednotka1 . "Ω<br/>U = " . $cislo2 . " " . $Jednotka1 . "V<br/>I = " . $cislo1 . " " . $Jednotka1 . "A</p>"; 
	} elseif ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = "<p class='count'>R = " . $cislo3 . " " . $Jednotka1 . "Ω<br/>U = " . $cislo2 . " " . $Jednotka1 . "V<br/>I = " . $cislo1 . " " . $Jednotka1 . "A</p>"; 
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}


	return $vysledek;

}

function KinetickaEnergie(){
	$cislo1;
	$cislo2;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];

	if ($cislo1 > 0 && $cislo2 > 0) {
		$vysledek1 = 1/2 * $cislo2 * ($cislo1 * $cislo1);
		$vysledek = "<p class='count'>v = " . $cislo1 . " m / s<br/>m = " . $cislo2 . " kg<br/>E<sub>k</sub> = " . $vysledek1 . " J</p>";
	} else{
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function polohovaEnergie(){
	$cislo1;
	$cislo2;
	$Jednotka;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$Jednotka = $_GET["Jednotka"];

	if ($Jednotka == "Základní") {
		$Jednotka1 = "";
	} elseif ($Jednotka == "kilo") {
		$Jednotka1 = "k";
	} elseif ($Jednotka == "mili") {
		$Jednotka1 = "m";
	}

	if ($cislo1 > 0 && $cislo2 > 0) {
		$vysledek1 = $cislo1 * 10 * $cislo2;
		$vysledek = "<p class='count'>m = " . $cislo1 . " " . $Jednotka1 . "g<br/>h = " . $cislo2 . " " . $Jednotka1 . "m<br/>E<sub>p</sub> = " . $vysledek1 . " " . $Jednotka1 . "J</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function DrahaZalozenaNaZrychleni(){
	$cislo1;
	$cislo2;
	$cislo3;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];

	if ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0) {
		$cislo1 = round(1/2 * $cislo2 * ($cislo3 * $cislo3),3);
		$vysledek = "<p class='count'>Dráha: " . $cislo1 . " m<br/>Čas: " . $cislo3 . " s<br/>Zrychlení: " . $cislo2 . "m*s<sup>-2</sup></p>";
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0) {
		$cislo2 = round((2 * $cislo1) / ($cislo3 * $cislo3),3);
		$vysledek = "<p class='count'>Dráha: " . $cislo1 . " m<br/>Čas: " . $cislo3 . " s<br/>Zrychlení: " . $cislo2 . "m*s<sup>-2</sup></p>"; 
	} elseif ($cislo3 == 0 && $cislo1 > 0 && $cislo2 > 0) {
		$cislo3 = round(sqrt((2 * $cislo1) / $cislo2),3);
		$vysledek = "<p class='count'>Dráha: " . $cislo1 . " m<br/>Čas: " . $cislo3 . " s<br/>Zrychlení: " . $cislo2 . "m*s<sup>-2</sup></p>";
	} elseif ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = "<p class='count'>Dráha: " . $cislo1 . " m<br/>Čas: " . $cislo3 . " s<br/>Zrychlení: " . $cislo2 . "m*s<sup>-2</sup></p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function Rychlost(){
	$cislo1;
	$cislo2;
	$cislo3;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];

	if ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0) {
		$cislo1 = $cislo2 / $cislo3;
		$vysledek = "<p class='count'>Rychlost: " . $cislo1 . " m / s<br/>Dráha: " . $cislo2 . " m<br/>Čas: " . $cislo3 . " s<p/>";
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0) { 
		$cislo2 = $cislo1 * $cislo3;
		$vysledek = "<p class='count'>Rychlost: " . $cislo1 . " m / s<br/>Dráha: " . $cislo2 . " m<br/>Čas: " . $cislo3 . " s<p/>";
	} elseif ($cislo3 == 0 && $cislo2 > 0 && $cislo1 > 0) {
		$cislo3 = $cislo2 / $cislo1;
		$vysledek = "<p class='count'>Rychlost: " . $cislo1 . " m / s<br/>Dráha: " . $cislo2 . " m<br/>Čas: " . $cislo3 . " s<p/>";
	} elseif ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = "<p class='count'>Rychlost: " . $cislo1 . " m / s<br/>Dráha: " . $cislo2 . " m<br/>Čas: " . $cislo3 . " s<p/>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function ZrychleniZalozeneNaRychlosti(){
	$cislo1;
	$cislo2;
	$cislo3;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];

	if ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0) {
		$cislo1 = $cislo2 / $cislo3;
		$vysledek = "<p class='count'>Zrychlení: " . $cislo1 . " m*s<sup>-2</sup><br/>Absolutní rychlost: " . $cislo2 . " m / s<br/>Čas: " . $cislo3 . " s</p>";
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0) {
		$cislo2 = $cislo1 * $cislo3;
		$vysledek = "<p class='count'>Zrychlení: " . $cislo1 . " m*s<sup>-2</sup><br/>Absolutní rychlost: " . $cislo2 . " m / s<br/>Čas: " . $cislo3 . " s</p>";
	} elseif ($cislo3 == 0 && $cislo1 > 0 && $cislo2 > 0) {
		$cislo3 = $cislo2 / $cislo1;
		$vysledek = "<p class='count'>Zrychlení: " . $cislo1 . " m*s<sup>-2</sup><br/>Absolutní rychlost: " . $cislo2 . " m / s<br/>Čas: " . $cislo3 . " s</p>";
	} elseif ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = "<p class='count'>Zrychlení: " . $cislo1 . " m*s<sup>-2</sup><br/>Absolutní rychlost: " . $cislo2 . " m / s<br/>Čas: " . $cislo3 . " s</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function PrykonNaPraci(){
	$cislo1;
	$cislo2;
	$cislo3;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];

	if ($cislo1 == 0 && $cislo2 > 0 && $cislo2 > 0) {
		$cislo1 = $cislo2 / $cislo3;
		$vysledek = "<p class='count'>Příkon: " . $cislo1 . " W<br/>Elektrická práce: " . $cislo2 . " J<br/>Čas: " . $cislo3 . " s</p>"; 
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0) {
		$cislo2 = $cislo1 * $cislo3;
		$vysledek = "<p class='count'>Příkon: " . $cislo1 . " W<br/>Elektrická práce: " . $cislo2 . " J<br/>Čas: " . $cislo3 . " s</p>"; 
	} elseif ($cislo3 == 0 && $cislo1 > 0 && $cislo2 > 0) {
		$cislo3 = $cislo2 / $cislo1;
		$vysledek = "<p class='count'>Příkon: " . $cislo1 . " W<br/>Elektrická práce: " . $cislo2 . " J<br/>Čas: " . $cislo3 . " s</p>"; 
	} elseif ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = "<p class='count'>Příkon: " . $cislo1 . " W<br/>Elektrická práce: " . $cislo2 . " J<br/>Čas: " . $cislo3 . " s</p>"; 
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function SilaNaPraci(){
	$cislo1;
	$cislo2;
	$cislo3;
	$Jednotka;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	if (isset($_GET["Jednotka"])){$Jednotka = $_GET["Jednotka"];} else {$Jednotka = " ";}


	if ($Jednotka == "Základní") {
		$Jednotka1 = " ";
	} elseif ($Jednotka == "Kilo") {
		$Jednotka1 = "k";
	} elseif ($Jednotka == "Mili") {
		$Jednotka1 = "m";
	} else {
		$Jednotka1 = "Průser hustone";
	}

	if ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0) {
		$cislo1 = $cislo2 / $cislo3;
		$vysledek = "<p class='count'>Síla: " . $cislo1 . " " . $Jednotka1 . "N<br/>Práce: " . $cislo2 . " " . $Jednotka1 . "J<br/>Dráha: " . $cislo3 . " " . $Jednotka1 . "m</p>";
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0) {
		$cislo2 = $cislo1 * $cislo3;
		$vysledek = "<p class='count'>Síla: " . $cislo1 . " " . $Jednotka1 . "N<br/>Práce: " . $cislo2 . " " . $Jednotka1 . "J<br/>Dráha: " . $cislo3 . " " . $Jednotka1 . "m</p>";
	} elseif ($cislo3 == 0 && $cislo2 > 0 && $cislo1 > 0) {
		$cislo3 = $cislo2 / $cislo1;
		$vysledek = "<p class='count'>Síla: " . $cislo1 . " " . $Jednotka1 . "N<br/>Práce: " . $cislo2 . " " . $Jednotka1 . "J<br/>Dráha: " . $cislo3 . " " . $Jednotka1 . "m</p>";
	} elseif ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = "<p class='count'>Síla: " . $cislo1 . " " . $Jednotka1 . "N<br/>Práce: " . $cislo2 . " " . $Jednotka1 . "J<br/>Dráha: " . $cislo3 . " " . $Jednotka1 . "m</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function VykonNaPraci(){
	$cislo1;
	$cislo2;
	$cislo3;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];

	if ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0) {
		$cislo1 = $cislo2 / $cislo3;
		$vysledek = "<p class='count'>Výkon: " . $cislo1 . " W<br/>Práce: " . $cislo2 . " J<br/>Čas: " . $cislo3 . " s</p>";
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0) {
		$cislo2 = $cislo1 * $cislo3;
		$vysledek = "<p class='count'>Výkon: " . $cislo1 . " W<br/>Práce: " . $cislo2 . " J<br/>Čas: " . $cislo3 . " s</p>";
	} elseif ($cislo3 == 0 && $cislo1 > 0 && $cislo2 > 0) {
		$cislo3 = $cislo2 / $cislo1;
		$vysledek = "<p class='count'>Výkon: " . $cislo1 . " W<br/>Práce: " . $cislo2 . " J<br/>Čas: " . $cislo3 . " s</p>";
	} elseif ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = "<p class='count'>Výkon: " . $cislo1 . " W<br/>Práce: " . $cislo2 . " J<br/>Čas: " . $cislo3 . " s</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function VykonNaUcinnosti(){
	$cislo1;
	$cislo2;
	$cislo3;
	$Jednotka;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$Jednotka = $_GET["Jednotka"];

	if ($Jednotka == "Mili") {
		$Jednotka1 = "m";
	} elseif ($Jednotka == "Základní") {
		$Jednotka1 = "";
	} elseif ($Jednotka == "Kilo") {
		$Jednotka1 = "k";
	} else {
		$Jednotka1 = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	if ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0) {
		$cislo1 = $cislo2 * $cislo3 / 100;
		$vysledek = "<p class='count'>Příkon: " . $cislo3 . " " . $Jednotka1 . "W<br/>Výkon: " . $cislo1 . " " . $Jednotka1 . "W<br/>Účinnost: " . $cislo2 . " %</p>";
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0) {
		$cislo2 = 100 * $cislo1 / $cislo3;
		$vysledek = "<p class='count'>Příkon: " . $cislo3 . " " . $Jednotka1 . "W<br/>Výkon: " . $cislo1 . " " . $Jednotka1 . "W<br/>Účinnost: " . $cislo2 . " %</p>";
	} elseif ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
			$vysledek = "<p class='count'>Příkon: " . $cislo3 . " " . $Jednotka1 . "W<br/>Výkon: " . $cislo1 . " " . $Jednotka1 . "W<br/>Účinnost: " . $cislo2 . " %</p>";
	}elseif ($cislo3 == 0 && $cislo1 > 0 && $cislo2 > 0) {
		$cislo3 = 100 * $cislo1 / $cislo2;
		$vysledek = "<p class='count'>Příkon: " . $cislo3 . " " . $Jednotka1 . "W<br/>Výkon: " . $cislo1 . " " . $Jednotka1 . "W<br/>Účinnost: " . $cislo2 . " %</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

} 

function Cas(){
	$cislo1;
	$Jednotka1;
	$Jednotka2;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$Jednotka1 = $_GET["Jednotka1"];
	$Jednotka2 = $_GET["Jednotka2"];

	if (($Jednotka1 == "h" && $Jednotka2 == "min") || ($Jednotka1 == "min" && $Jednotka2 == "s")) {
		$cislo2 = $cislo1 * 60;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "h" && $Jednotka2 == "s") {
		$cislo2 = $cislo1 * 3600;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "s" && $Jednotka2 == "ms") {
		$cislo2 = $cislo1 * 1000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "min" && $Jednotka2 == "h") || ($Jednotka1 == "s" && $Jednotka2 == "min")) {
		$cislo2 = round($cislo1 / 60 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "s" && $Jednotka2 == "h") {
		$cislo2 = round($cislo1 / 3600, 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "h" && $Jednotka2 == "ms") {
		$cislo2 = $cislo1 * 3600000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "min" && $Jednotka2 == "ms") {
		$cislo2 = $cislo1 * 60000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "ms" && $Jednotka2 == "s") {
		$cislo2 = round($cislo1 / 1000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "ms" && $Jednotka2 == "min") {
		$cislo2 = round($cislo1 / 60000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "ms" && $Jednotka2 == "h") {
		$cislo2 = round($cislo1 / 3600000, 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == $Jednotka2) {
		$cislo2 = $cislo1;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function DatovyObjem(){
	$cislo1;
	$Jednotka1;
	$Jednotka2;
	$vysledek;
	$cislo2;

	$cislo1 = $_GET["cislo1"];
	$Jednotka1 = $_GET["Jednotka1"];
	$Jednotka2 = $_GET["Jednotka2"];

	if (($Jednotka1 == "TB" && $Jednotka2 == "GB") || ($Jednotka1 == "GB" && $Jednotka2 == "MB") || ($Jednotka1 == "MB" && $Jednotka2 == "kB") || ($Jednotka1 == "kB" && $Jednotka2 == "B")) {
		$cislo2 = $cislo1 * 1024;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "TB" && $Jednotka2 == "MB") || ($Jednotka1 == "GB" && $Jednotka2 == "kB") || ($Jednotka1 == "MB" && $Jednotka2 == "B")) {
		$cislo2 = $cislo1 * 1048576;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "TB" && $Jednotka2 == "kB") || ($Jednotka1 == "GB" && $Jednotka2 == "B")) {
		$cislo2 = $cislo1 * 1073741824;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "TB" && $Jednotka2 == "B") {
		$cislo2 = $cislo1 * 1099511627776;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "GB" && $Jednotka2 == "TB") || ($Jednotka1 == "MB" && $Jednotka2 == "GB") || ($Jednotka1 == "kB" && $Jednotka2 == "MB") || ($Jednotka1 == "B" && $Jednotka2 == "kB")) {
		$cislo2 = round($cislo1 / 1024 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "MB" && $Jednotka2 == "TB") || ($Jednotka1 == "kB" && $Jednotka2 == "GB") || ($Jednotka1 == "B" && $Jednotka2 == "MB")) {
		$cislo2 = round($cislo1 / 1048576 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "TB" && $Jednotka2 == "kB") || ($Jednotka1 == "GB" && $Jednotka2 == "B")) {
		$cislo2 = round($cislo1 / 1073741824, 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "B" && $Jednotka2 == "TB") {
		$cislo2 = round($cislo1 / 1099511627776, 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "B" && $Jednotka2 == "b") {
		$cislo2 = $cislo1 * 8;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "b" && $Jednotka2 == "B") {
		$cislo2 = round($cislo1 / 8, 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "kB" && $Jednotka2 == "b") {
		$cislo2 = $cislo1 * 8192;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "b" && $Jednotka2 == "kB") {
		$cislo2 = round($cislo1 / 8192, 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "MB" && $Jednotka2 == "b") {
		$cislo2 = $cislo1 * 8388608;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "b" && $Jednotka2 == "MB") {
		$cislo2 = round($cislo1 / 8388608, 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "GB" && $Jednotka2 == "b") {
		$cislo2 = $cislo1 * 8589934592;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "b" && $Jednotka2 == "GB") {
		$cislo2 = round($cislo1 / 8589934592, 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "TB" && $Jednotka2 == "b") {
		$cislo2 = $cislo1 * 8796093022208;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "b" && $Jednotka2 == "TB") {
		$cislo2 = round($cislo1 / 8796093022208, 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function Delka(){
	$cislo1;
	$Jednotka1;
	$Jednotka2;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$Jednotka1 = $_GET["Jednotka1"];
	$Jednotka2 = $_GET["Jednotka2"];

	if (($Jednotka1 == "km" && $Jednotka2 == "m") || ($Jednotka1 == "m" && $Jednotka2 == "mm")) {
		$cislo2 = $cislo1 * 1000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "m" && $Jednotka2 == "dm") || ($Jednotka1 == "dm" && $Jednotka2 == "cm") || ($Jednotka1 == "cm" && $Jednotka2 == "mm")) {
		$cislo2 = $cislo1 * 10;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "m" && $Jednotka2 == "cm") || ($Jednotka1 == "dm" && $Jednotka2 == "mm")) {
		$cislo2 = $cislo1 * 100;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "km" && $Jednotka2 == "dm") {
		$cislo2 = $cislo1 * 10000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "km" && $Jednotka2 == "cm") {
		$cislo2 = $cislo1 * 100000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "km" && $Jednotka2 == "mm") {
		$cislo2 = $cislo1 * 1000000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "m" && $Jednotka2 == "km") || ($Jednotka1 == "mm" && $Jednotka2 == "m")) {
		$cislo2 = round($cislo1 / 1000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "dm" && $Jednotka2 == "m") || ($Jednotka1 == "cm" && $Jednotka2 == "dm") || ($Jednotka1 == "mm" && $Jednotka2 == "cm")) {
		$cislo2 = round($cislo1 / 10 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "cm" && $Jednotka2 == "m") || ($Jednotka1 == "mm" && $Jednotka2 == "dm")) {
		$cislo2 = round($cislo1 / 100 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "dm" && $Jednotka2 == "km") {
		$cislo2 = round($cislo1 / 10000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "cm" && $Jednotka2 == "km") {
		$cislo2 = round($cislo1 / 100000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "mm" && $Jednotka2 == "km") {
		$cislo2 = round($cislo1 / 1000000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == $Jednotka2) {
		$cislo2 = $cislo1;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function Hmotnost(){
	$cislo1;
	$Jednotka1;
	$Jednotka2;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$Jednotka1 = $_GET["Jednotka1"];
	$Jednotka2 = $_GET["Jednotka2"];

	if (($Jednotka1 == "t" && $Jednotka2 == "q") || ($Jednotka1 == "dkg" && $Jednotka2 == "g")) {
		$cislo2 = $cislo1 * 10;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "q" && $Jednotka2 == "kg") || ($Jednotka1 == "kg" && $Jednotka2 == "dkg")) {
		$cislo2 = $cislo1 * 100;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "g" && $Jednotka2 == "mg") || ($Jednotka1 == "t" && $Jednotka2 == "kg") || ($Jednotka1 == "kg" && $Jednotka2 == "g")) {
		$cislo2 = $cislo1 * 1000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "dkg" && $Jednotka2 == "mg") || ($Jednotka1 == "q" && $Jednotka2 == "dkg")) {
		$cislo2 = $cislo1 * 10000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "t" && $Jednotka2 == "g") || ($Jednotka1 == "kg" && $Jednotka2 == "mg")) {
		$cislo2 = $cislo1 * 1000000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "t" && $Jednotka2 == "dkg") || ($Jednotka1 == "q" && $Jednotka2 == "g")) {
		$cislo2 = $cislo1 * 100000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "q" && $Jednotka2 == "mg") {
		$cislo2 = $cislo1 * 100000000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "t" && $Jednotka2 == "mg") {
		$cislo2 = $cislo1 * 1000000000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "q" && $Jednotka2 == "t") || ($Jednotka1 == "g" && $Jednotka2 == "dkg")) {
		$cislo2 = round($cislo1 / 10 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "kg" && $Jednotka2 == "q") || ($Jednotka1 == "dkg" && $Jednotka2 == "kg")) {
		$cislo2 = round($cislo1 / 100 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "mg" && $Jednotka2 == "g") || ($Jednotka1 == "kg" && $Jednotka2 == "t") || ($Jednotka1 == "g" && $Jednotka2 == "kg")) {
		$cislo2 = round($cislo1 / 1000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "mg" && $Jednotka2 == "dkg") || ($Jednotka1 == "dkg" && $Jednotka2 == "q")) {
		$cislo2 =  round($cislo1 / 10000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "dkg" && $Jednotka2 == "t") || ($Jednotka1 == "g" && $Jednotka2 == "q")) {
		$cislo2 = round($cislo1 / 100000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "mg" && $Jednotka2 == "kg") || ($Jednotka1 == "g" && $Jednotka2 == "t")) {
		$cislo2 = round($cislo1 / 1000000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "mg" && $Jednotka2 == "t") {
		$cislo2 = round($cislo1 / 1000000000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "mg" && $Jednotka2 == "q") {
		$cislo2 = round($cislo1 / 100000000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == $Jednotka2) {
		$cislo2 = $cislo1;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function Objem(){
	$cislo1;
	$Jednotka1;
	$Jednotka2;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$Jednotka1 = $_GET["Jednotka1"];
	$Jednotka2 = $_GET["Jednotka2"];


	if (($Jednotka1 == "dm3" && $Jednotka2 == "l") || ($Jednotka1 == "l" && $Jednotka2 == "dm3") || ($Jednotka1 == "cm3" && $Jednotka2 == "ml") || ($Jednotka1 == "ml" && $Jednotka2 == "cm3") || ($Jednotka1 == $Jednotka2)) {
		$cislo2 = $cislo1;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "hl" && $Jednotka2 == "l") || (($Jednotka1 == "l" || $Jednotka1 == "dm3") && $Jednotka2 == "cl") || ($Jednotka1 == "dl" && $Jednotka2 == "ml") || ($Jednotka1 == "hl" && $Jednotka2 == "dm3") || ($Jednotka1 == "dl" && $Jednotka2 == "cm3")) {
		$cislo2 = $cislo1 * 100;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "l" && $Jednotka2 == "dl") || ($Jednotka1 == "dl" && $Jednotka2 == "cl") || ($Jednotka1 == "cl" && ($Jednotka2 == "ml" || $Jednotka2 == "cm3")) || ($Jednotka1 == "dm3" && $Jednotka2 == "dl")) {
		$cislo2 = $cislo1 * 10;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "hl" && $Jednotka2 == "dl") || ($Jednotka1 == "m3" && $Jednotka2 == "dm3") || (($Jednotka1 == "dm3" || $Jednotka1 == "l") && ($Jednotka2 == "cm3" || $Jednotka2 == "ml")) || (($Jednotka1 == "cm3" || $Jednotka1 == "ml") && $Jednotka2 == "mm3") || ($Jednotka1 == "m3" && $Jednotka2 == "l") || ($Jednotka1 == "l" && $Jednotka2 == "cm3")) {
		$cislo2 = $cislo1 * 1000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "hl" && $Jednotka2 == "cl") || ($Jednotka1 == "m3" && $Jednotka2 == "dl") || ($Jednotka1 == "cl" && $Jednotka2 == "mm3")) {
		$cislo2 = $cislo1 * 10000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "hl" && $Jednotka2 == "ml") || ($Jednotka1 == "hl" && $Jednotka2 == "cm3") || ($Jednotka1 == "dl" && $Jednotka2 == "mm3") || ($Jednotka1 == "m3" && $Jednotka2 == "cl")) {
		$cislo2 = $cislo1 * 100000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "m3" && $Jednotka2 == "hl") {
		$cislo2 = $cislo1 * 0.1;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ((($Jednotka1 == "l" || $Jednotka1 == "dm3") && $Jednotka2 == "mm3") || ($Jednotka1 == "m3" && ($Jednotka2 == "ml" || $Jednotka2 == "cm3"))) {
		$cislo2 = $cislo1 * 1000000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "hl" && $Jednotka2 == "mm3") {
		$cislo2 = $cislo1 * 100000000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "m3" && $Jednotka2 == "mm3") {
		$cislo2 = $cislo1 * 1000000000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "l" && $Jednotka2 == "hl") || ($Jednotka1 == "cl" && ($Jednotka2 == "l" || $Jednotka2 == "dm3")) || ($Jednotka1 == "ml" && $Jednotka2 == "dl") || ($Jednotka1 == "dm3" && $Jednotka2 == "hl") || ($Jednotka1 == "cm3" && $Jednotka2 == "dl")) {
		$cislo2 = round($cislo1 / 100 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "dl" && $Jednotka2 == "l") || ($Jednotka1 == "cl" && $Jednotka2 == "dl") || (($Jednotka1 == "ml" || $Jednotka1 == "cm3")&& $Jednotka2 == "cl") || ($Jednotka1 == "dl" && $Jednotka2 == "dm3")) {
		$cislo2 = round($cislo1 / 10 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "dl" && $Jednotka2 == "hl") || ($Jednotka1 == "dm3" && $Jednotka2 == "m3") || (($Jednotka1 == "cm3" ||  $Jednotka1 == "ml") && ($Jednotka2 == "dm3" || $Jednotka2 == "l")) || ($Jednotka1 == "mm3" && ($Jednotka2 == "cm3" || $Jednotka2 == "ml")) || ($Jednotka1 == "l" && $Jednotka2 == "m3") || ($Jednotka1 == "cm3" && $Jednotka2 == "l")) {
		$cislo2 = round($cislo1 / 1000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "cl" && $Jednotka2 == "hl") || ($Jednotka1 == "dl" && $Jednotka2 == "m3") || ($Jednotka1 == "mm3" && $Jednotka2 == "cl")) {
		$cislo2 = round($cislo1 / 10000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "hl" && $Jednotka2 == "m3") {
		$cislo2 = round($cislo1 / 0.1 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "mm3" && ($Jednotka2 == "l" || $Jednotka2 == "dm3")) || (($Jednotka1 == "ml" || $Jednotka1 == "cm3") && $Jednotka2 == "m3")) {
		$cislo2 =  round($cislo1 / 1000000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "ml" && $Jednotka2 == "hl") || ($Jednotka1 == "cm3" && $Jednotka2 == "hl") || ($Jednotka1 == "mm3" && $Jednotka2 == "dl") || ($Jednotka1 == "cl" && $Jednotka2 == "m3")) {
		$cislo2 = round($cislo1 / 100000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "mm3" && $Jednotka2 == "hl") {
		$cislo2 = round($cislo1 / 100000000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "mm3" && $Jednotka2 == "m3") {
		$cislo2 = round($cislo1 / 1000000000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function Obsah(){
	$cislo1;
	$Jednotka1;
	$Jednotka2;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$Jednotka1 = $_GET["Jednotka1"];
	$Jednotka2 = $_GET["Jednotka2"];

	if ($Jednotka1 == $Jednotka2) {
		$cislo2 = $cislo1;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "km2" && $Jednotka2 == "ha") || ($Jednotka1 == "ha" && $Jednotka2 == "a") || ($Jednotka1 == "a" && $Jednotka2 == "m2") || ($Jednotka1 == "m2" && $Jednotka2 == "dm2") || ($Jednotka1 == "dm2" && $Jednotka2 == "cm2") || ($Jednotka1 == "cm2" && $Jednotka2 == "mm2")) {
		$cislo2 = $cislo1 * 100;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "km2" && $Jednotka2 == "a") || ($Jednotka1 == "ha" && $Jednotka2 == "m2") || ($Jednotka1 == "a" && $Jednotka2 == "dm2") || ($Jednotka1 == "m2" && $Jednotka2 == "cm2") || ($Jednotka1 == "dm2" && $Jednotka2 == "mm2")) {
		$cislo2 = $cislo1 * 10000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "km2" && $Jednotka2 == "m2") || ($Jednotka1 == "ha" && $Jednotka2 == "dm2") || ($Jednotka1 == "a" && $Jednotka2 == "cm2") || ($Jednotka1 == "m2" && $Jednotka2 == "mm2")) {
		$cislo2 = $cislo1 * 1000000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "km2" && $Jednotka2 == "dm2") ||  ($Jednotka1 == "ha" && $Jednotka2 == "cm2") || ($Jednotka1 == "a" && $Jednotka2 == "mm2")) {
		$cislo2 = $cislo1 * 100000000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "km2" && $Jednotka2 == "cm2") || ($Jednotka1 == "ha" && $Jednotka2 == "mm2")) {
		$cislo2 = $cislo1 * 10000000000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "km2" && $Jednotka2 == "mm2") {
		$cislo2 = $cislo1 * 1000000000000;
	} elseif (($Jednotka1 == "ha" && $Jednotka2 == "km2") || ($Jednotka1 == "a" && $Jednotka2 == "ha") || ($Jednotka1 == "m2" && $Jednotka2 == "a") || ($Jednotka1 == "dm2" && $Jednotka2 == "m2") || ($Jednotka1 == "cm2" && $Jednotka2 == "dm2") || ($Jednotka1 == "mm2" && $Jednotka2 == "cm2")) {
		$cislo2 = round($cislo1 / 100 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "a" && $Jednotka2 == "km2") || ($Jednotka1 == "m2" && $Jednotka2 == "ha") || ($Jednotka1 == "dm2" && $Jednotka2 == "a") || ($Jednotka1 == "cm2" && $Jednotka2 == "m2") || ($Jednotka1 == "mm2" && $Jednotka2 == "dm2")) {
		$cislo2 = round($cislo1 / 10000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "m2" && $Jednotka2 == "km2") || ($Jednotka1 == "dm2" && $Jednotka2 == "ha") || ($Jednotka1 == "cm2" && $Jednotka2 == "a") || ($Jednotka1 == "mm2" && $Jednotka2 == "m2")) {
		$cislo2 = round($cislo1 / 1000000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "dm2" && $Jednotka2 == "km2") || ($Jednotka1 == "cm2" && $Jednotka2 == "ha") || ($Jednotka1 == "mm2" && $Jednotka2 == "a")) {
		$cislo2 = round($cislo1 / 100000000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif (($Jednotka1 == "cm2" && $Jednotka2 == "km2") || ($Jednotka1 == "mm2" && $Jednotka2 == "ha")) {
		$cislo2 = round($cislo1 / 10000000000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "mm2" && $Jednotka2 == "km2") {
		$cislo2 = round($cislo1 / 1000000000000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function RychlostPrevod(){
	$cislo1;
	$Jednotka1;
	$Jednotka2;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$Jednotka1 = $_GET["Jednotka1"];
	$Jednotka2 = $_GET["Jednotka2"];

	if ($Jednotka1 == $Jednotka2) {
		$cislo2 = $cislo1;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "m/s" && $Jednotka2 == "km/h") {
		$cislo2 = $cislo1 * 3.6;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "km/s" && $Jednotka2 == "km/h") {
		$cislo2 = $cislo1 * 60;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "km/s" && $Jednotka2 == "m/s") {
		$cislo2 = $cislo1 * 1000;
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "km/h" && $Jednotka2 == "m/s") {
		$cislo2 = round($cislo1 / 3.6 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "km/h" && $Jednotka2 == "km/s") {
		$cislo2 =  round($cislo1 / 60 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} elseif ($Jednotka1 == "m/s" && $Jednotka2 == "km/s") {
		$cislo2 = round($cislo1 / 1000 , 3);
		$vysledek = "<p class='count'>" . $cislo1 . " " . $Jednotka1 . " = " . $cislo2 . " " . $Jednotka2 . "</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function GravitacniSila(){
	$cislo1;
	$cislo2;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];


	if ($cislo1 == 0 && $cislo2 > 0) {
		$cislo1 = $cislo2 * 10;
		$vysledek = "<p class='count'>Gravitační síla: " . $cislo1 . " N<br/>Hmotnost: " . $cislo2 . " kg</p>";
	} elseif ($cislo2 == 0 && $cislo1 > 0) {
		$cislo2 = $cislo1 / 10;
		$vysledek = "<p class='count'>Gravitační síla: " . $cislo1 . " N<br/>Hmotnost: " . $cislo2 . " kg</p>";
	} elseif ($cislo1 > 0 && $cislo2 > 0) {
		$vysledek = "<p class='count'>Gravitační síla: " . $cislo1 . " N<br/>Hmotnost: " . $cislo2 . " kg</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function HydrostatickaTlakovaSila(){
	$cislo1;
	$cislo2;
	$cislo3;
	$vysledek;
	$cislo4;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$cislo4 = $cislo1 * $cislo3 * 10 * $cislo2;
		$vysledek = "<p class='count'>Hloubka: " . $cislo1 . " m<br/>Plocha: " . $cislo2 . " m<sup>2</sup><br/>Hustota: " . $cislo3 . " kg/m<sup>2</sup><br/>Hydrostatická tlaková síla: " . $cislo4 . " Pa</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function HydrostatickaVztlakovaSila(){
	$cislo1;
	$cislo2;
	$vysledek;
	$cislo3;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];

	if ($cislo1 > 0 && $cislo2 > 0) {
		$cislo3 = $cislo1 * $cislo2 * 10;
		$vysledek = "<p class='count'>Hustota kapaliny: " . $cislo1 . " kg/m<sup>3</sup><br/>Objem: " . $cislo2 . " m<sup>3</sup><br/>Hydrostatická vztlaková síla: " . $cislo3 . " N</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function Paka(){
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo4 > 0 && $cislo3 > 0) {
		$vysledek = "<p class='count'>Síla 1: " . $cislo1 . " N<br/>Síla 2: " . $cislo2 . " N<br/>Vzdálenost 1: " . $cislo3 . " m<br/>Vzdálenost 2: " . $cislo4 . "m</p>"; 
	} elseif ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0 && $cislo4 > 0) {
		$cislo1 = ($cislo2 * $cislo4) / $cislo3;
		$vysledek = "<p class='count'>Síla 1: " . $cislo1 . " N<br/>Síla 2: " . $cislo2 . " N<br/>Vzdálenost 1: " . $cislo3 . " m<br/>Vzdálenost 2: " . $cislo4 . "m</p>"; 
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0 && $cislo4 > 0) {
		$cislo2 = ($cislo1 * $cislo3) / $cislo4;
		$vysledek = "<p class='count'>Síla 1: " . $cislo1 . " N<br/>Síla 2: " . $cislo2 . " N<br/>Vzdálenost 1: " . $cislo3 . " m<br/>Vzdálenost 2: " . $cislo4 . "m</p>"; 
	} elseif ($cislo3 == 0 && $cislo1 > 0 && $cislo2 > 0 && $cislo4 > 0) {
		$cislo3 = ($cislo2 * $cislo4) / $cislo1;
		$vysledek = "<p class='count'>Síla 1: " . $cislo1 . " N<br/>Síla 2: " . $cislo2 . " N<br/>Vzdálenost 1: " . $cislo3 . " m<br/>Vzdálenost 2: " . $cislo4 . "m</p>"; 
	} elseif ($cislo4 == 0 && $cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$cislo4 = ($cislo1 * $cislo3) / $cislo2;
		$vysledek = "<p class='count'>Síla 1: " . $cislo1 . " N<br/>Síla 2: " . $cislo2 . " N<br/>Vzdálenost 1: " . $cislo3 . " m<br/>Vzdálenost 2: " . $cislo4 . "m</p>"; 
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function Teplo(){
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$vysledek;
	$cislo5;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0 && $cislo4 > 0) {
		$cislo5 = $cislo1 * $cislo2 * ($cislo3 - $cislo4);
		$vysledek = "<p class='count'>Měrná tepelná kapacita: " . $cislo1 . " J / kg<br/>Hmotnost: " . $cislo2 . " kg<br/>Počáteční teplota: " . $cislo3 . " °C<br/>Teplota po ochlazení: " . $cislo4 . " °C<br/>Teplo: " . $cislo5 . " J</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function HydrostatickyTlak(){
	$cislo1;
	$cislo2;
	$cislo3;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];

	if ($cislo1 > 0 && $cislo2 > 0) {
		$cislo3 = $cislo1 * $cislo2 * 10;
		$vysledek = "<p class='count'>Hloubka: " . $cislo1 . " m<br/>Hustota: " . $cislo2 . "kg/m<sup>3</sup><br/>Hydrostatický tlak: " . $cislo3 . " Pa</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function TlakNaSile(){
	$cislo1;
	$cislo2;
	$cislo3;
	$Jednotka;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$Jednotka = $_GET["Jednotka"];

	if ($Jednotka == "Základní") {
		$Jednotka1 = "";
	} elseif ($Jednotka == "Kilo") {
		$Jednotka1 = "k";
	} elseif ($Jednotka == "Mili") {
		$Jednotka1 = "m";
	} else {
		$Jednotka1 = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = "<p class='count'>Tlak: " . $cislo1 . " " . $Jednotka1 . "Pa<br/>Síla: " . $cislo2 . " " . $Jednotka1 . "N<br/>Obsah: " . $cislo3 . " " . $Jednotka1 . "m<sup>2</sup></p>";  
	} elseif ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0) {
		$cislo1 = $cislo2 / $cislo3 ;
		$vysledek = "<p class='count'>Tlak: " . $cislo1 . " " . $Jednotka1 . "Pa<br/>Síla: " . $cislo2 . " " . $Jednotka1 . "N<br/>Obsah: " . $cislo3 . " " . $Jednotka1 . "m<sup>2</sup></p>";  
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0) {
		$cislo2 = $cislo1 * $cislo3;
		$vysledek = "<p class='count'>Tlak: " . $cislo1 . " " . $Jednotka1 . "Pa<br/>Síla: " . $cislo2 . " " . $Jednotka1 . "N<br/>Obsah: " . $cislo3 . " " . $Jednotka1 . "m<sup>2</sup></p>";  
	} elseif ($cislo3 == 0 && $cislo1 > 0 && $cislo2 > 0) {
		$cislo3 = $cislo2 / $cislo1;
		$vysledek = "<p class='count'>Tlak: " . $cislo1 . " " . $Jednotka1 . "Pa<br/>Síla: " . $cislo2 . " " . $Jednotka1 . "N<br/>Obsah: " . $cislo3 . " " . $Jednotka1 . "m<sup>2</sup></p>";  
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function Hybnost(){
	$cislo1;
	$cislo2;
	$cislo3;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = "<p class='count'>Hybnost: " . $cislo1 . " kg * m * s<sup>-1</sup><br/>Rychlost: " . $cislo2 . " m/s<br/>Hmotnost: " . $cislo3 . " kg</p>";
	} elseif ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0) {
		$cislo1 = $cislo3 * $cislo2;
		$vysledek = "<p class='count'>Hybnost: " . $cislo1 . " kg * m * s<sup>-1</sup><br/>Rychlost: " . $cislo2 . " m/s<br/>Hmotnost: " . $cislo3 . " kg</p>";
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0) {
		$cislo2 = $cislo1 / $cislo3;
		$vysledek = "<p class='count'>Hybnost: " . $cislo1 . " kg * m * s<sup>-1</sup><br/>Rychlost: " . $cislo2 . " m/s<br/>Hmotnost: " . $cislo3 . " kg</p>";
	} elseif ($cislo3 == 0 && $cislo2 > 0 && $cislo1 > 0) {
		$cislo3 = $cislo1 / $cislo2;
		$vysledek = "<p class='count'>Hybnost: " . $cislo1 . " kg * m * s<sup>-1</sup><br/>Rychlost: " . $cislo2 . " m/s<br/>Hmotnost: " . $cislo3 . " kg</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function DostrediveZrychleni(){
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0 && $cislo4 > 0) {
		$vysledek = "<p class='count'>Dostředivé zrychlení: " . $cislo1 . " m*s<sup>-2</sup><br/>Rychlost: " . $cislo2 . " m/s<br/>Poloměr: " . $cislo3 . " m<br/>Úhlová rychlost: ". $cislo4 . " m/s</p>";
	} elseif ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0 && $cislo4 == 0) {
		$cislo1 = ($cislo2 * $cislo2) / $cislo3 ;
		$vysledek = "<p class='count'>Dostředivé zrychlení: " . $cislo1 . " m*s<sup>-2</sup><br/>Rychlost: " . $cislo2 . " m/s<br/>Poloměr: " . $cislo3 . " m<br/>Úhlová rychlost: ". $cislo4 . " m/s</p>";
	} elseif ($cislo1 == 0 && $cislo2 == 0 && $cislo3 > 0 && $cislo4 > 0) {
		$cislo1 = ($cislo4 * $cislo4) * $cislo3;
		$vysledek = "<p class='count'>Dostředivé zrychlení: " . $cislo1 . " m*s<sup>-2</sup><br/>Rychlost: " . $cislo2 . " m/s<br/>Poloměr: " . $cislo3 . " m<br/>Úhlová rychlost: ". $cislo4 . " m/s</p>";
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0) {
		$cislo2 = sqrt($cislo1 * $cislo3);
		$vysledek = "<p class='count'>Dostředivé zrychlení: " . $cislo1 . " m*s<sup>-2</sup><br/>Rychlost: " . $cislo2 . " m/s<br/>Poloměr: " . $cislo3 . " m<br/>Úhlová rychlost: ". $cislo4 . " m/s</p>";
	} elseif ($cislo3 == 0 && $cislo4 == 0 && $cislo1 > 0 && $cislo2 > 0) {
		$cislo3 = ($cislo2 * $cislo2) / $cislo1;
		$vysledek = "<p class='count'>Dostředivé zrychlení: " . $cislo1 . " m*s<sup>-2</sup><br/>Rychlost: " . $cislo2 . " m/s<br/>Poloměr: " . $cislo3 . " m<br/>Úhlová rychlost: ". $cislo4 . " m/s</p>";
	} elseif ($cislo3 == 0 && $cislo2 == 0 && $cislo1 > 0 && $cislo4 > 0) {
		$cislo3 = $cislo1 / ($cislo4 * $cislo4);
		$vysledek = "<p class='count'>Dostředivé zrychlení: " . $cislo1 . " m*s<sup>-2</sup><br/>Rychlost: " . $cislo2 . " m/s<br/>Poloměr: " . $cislo3 . " m<br/>Úhlová rychlost: ". $cislo4 . " m/s</p>";
	} elseif ($cislo4 == 0 && $cislo1 > 0 && $cislo3 > 0) {
		$cislo4 = sqrt($cislo1 / $cislo3);
		$vysledek = "<p class='count'>Dostředivé zrychlení: " . $cislo1 . " m*s<sup>-2</sup><br/>Rychlost: " . $cislo2 . " m/s<br/>Poloměr: " . $cislo3 . " m<br/>Úhlová rychlost: ". $cislo4 . " m/s</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

function PohybPoKruznici(){
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$cislo5;
	$cislo6;
	$cislo7;
	$pi = pi();
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];
	$cislo5 = $_GET["cislo5"];
	$cislo6 = $_GET["cislo6"];
	$cislo7 = $_GET["cislo7"];

	if ($cislo1 > 0 && $cislo2 > 0  && $cislo3 > 0 && $cislo4 > 0 && $cislo5 > 0 && $cislo6 > 0 && $cislo7 > 0) {
		$vysledek = "<p class='count'>Úhlová rychlost: " . $cislo1 . " rad*s<sup>-1</sup><br/>Úhlová dráha: " . $cislo2 . " rad<br/>Čas: " . $cislo3 . " s<br/>Rychlost: " . $cislo4 . "m/s<br/>Poloměr: " . $cislo5 . " m<br/>Perioda času: " . $cislo6 . " s<br/>Frekvence: " . $cislo7 . " Hz</p>";
	} elseif ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0) {
		$cislo1 = $cislo2 / $cislo3;
		$vysledek = "<p class='count'>Úhlová rychlost: " . $cislo1 . " rad*s<sup>-1</sup><br/>Úhlová dráha: " . $cislo2 . " rad<br/>Čas: " . $cislo3 . " s</p>";
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0) {
		$cislo2 = $cislo1 * $cislo2;
		$vysledek = "<p class='count'>Úhlová rychlost: " . $cislo1 . " rad*s<sup>-1</sup><br/>Úhlová dráha: " . $cislo2 . " rad<br/>Čas: " . $cislo3 . " s</p>";
	} elseif ($cislo3 == 0 && $cislo1 > 0 && $cislo2 > 0) {
		$cislo3 = $cislo2 / $cislo1;
		$vysledek = "<p class='count'>Úhlová rychlost: " . $cislo1 . " rad*s<sup>-1</sup><br/>Úhlová dráha: " . $cislo2 . " rad<br/>Čas: " . $cislo3 . " s</p>";
	} elseif ($cislo1 == 0 && $cislo4 > 0 && $cislo5 > 0) {
		$cislo1 = $cislo4 / $cislo5;
		$vysledek = "<p class='count'>Úhlová rychlost: " . $cislo1 . " rad*s<sup>-1</sup><br/>Rychlost: ".$cislo4. " m/s<br/>Poloměr: " . $cislo5 . " m</p>";
	} elseif ($cislo4 == 0 && $cislo1 > 0 && $cislo5 > 0) {
		$cislo4 = $cislo1 * $cislo5;
		$vysledek = "<p class='count'>Úhlová rychlost: " . $cislo1 . " rad*s<sup>-1</sup><br/>Rychlost: ".$cislo4. " m/s<br/>Poloměr: " . $cislo5 . " m</p>";
	} elseif ($cislo5 == 0 && $cislo1 > 0 && $cislo4 > 0) {
		$cislo5 = $cislo4 / $cislo1;
		$vysledek = "<p class='count'>Úhlová rychlost: " . $cislo1 . " rad*s<sup>-1</sup><br/>Rychlost: ".$cislo4. " m/s<br/>Poloměr: " . $cislo5 . " m</p>";
	} elseif ($cislo1 == 0 && $cislo6 > 0) {
		$cislo1 = round(2*$pi / $cislo6 , 3);
		$vysledek = "<p class='count'>Úhlová rychlost: " . $cislo1 . " rad*s<sup>-1</sup><br/>Perioda času: " . $cislo6 . " s</p>";
	} elseif ($cislo6 == 0 && $cislo1 > 0) {
		$cislo6 = round(2*$pi / $cislo1 , 3);
		$vysledek = "<p class='count'>Úhlová rychlost: " . $cislo1 . " rad*s<sup>-1</sup><br/>Perioda času: " . $cislo6 . " s</p>";
	} elseif ($cislo1 == 0 && $cislo7 > 0) {
		$cislo1 = round(2 * $pi * $cislo7 , 3);
		$vysledek =  "<p class='count'>Úhlová rychlost: " . $cislo1 . " rad*s<sup>-1</sup><br/>Frekvence: " . $cislo7 . " Hz</p>";
	} elseif ($cislo7 == 0 && $cislo1 > 0) {
		$cislo7 = round($cislo1 / (2 * $pi),3);
		$vysledek =  "<p class='count'>Úhlová rychlost: " . $cislo1 . " rad*s<sup>-1</sup><br/>Frekvence: " . $cislo7 . " Hz</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}


	return $vysledek;

}

function ParalelneRazeneRezistory(){
	$cislo1;
	$cislo2;
	$cislo3;
	$vysledek;

	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = "<p class='count'>R<sub>1</sub> = ". $cislo1 ."Ω<br/>R<sub>2</sub> = " . $cislo2 . "Ω<br/>R<sub>p</sub> = " . $cislo3 . "Ω</p>";
	} elseif ($cislo1 == 0 && $cislo2 > 0 && $cislo3 > 0) {
		$cislo1 = ($cislo2 * $cislo3) / ($cislo2 - $cislo3);
		$vysledek = "<p class='count'>R<sub>1</sub> = ". $cislo1 ."Ω<br/>R<sub>2</sub> = " . $cislo2 . "Ω<br/>R<sub>p</sub> = " . $cislo3 . "Ω</p>";
	} elseif ($cislo2 == 0 && $cislo1 > 0 && $cislo3 > 0) {
		$cislo2 = ($cislo1 * $cislo3) / ($cislo1 - $cislo3);
		$vysledek = "<p class='count'>R<sub>1</sub> = ". $cislo1 ."Ω<br/>R<sub>2</sub> = " . $cislo2 . "Ω<br/>R<sub>p</sub> = " . $cislo3 . "Ω</p>";
	} elseif ($cislo3 == 0 && $cislo1 > 0 && $cislo2 > 0) {
		$cislo3 = ($cislo1 * $cislo2) / ($cislo1 + $cislo2);
		$vysledek = "<p class='count'>R<sub>1</sub> = ". $cislo1 ."Ω<br/>R<sub>2</sub> = " . $cislo2 . "Ω<br/>R<sub>p</sub> = " . $cislo3 . "Ω</p>";
	} else {
		$vysledek = "<p class='count'>Nejsou vyplněny požadované hodnoty</p>";
	}

	return $vysledek;

}

echo $vzorec();

?>