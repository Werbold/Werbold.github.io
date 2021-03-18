<?php
$vzorec = $_GET["vzorec"];
$pi = pi();

function obvodCtverce() {
	$cislo1;
	$Jednotka;
	$vysledek;	
	$cislo1 = $_GET["cislo1"];
	$Jednotka = $_GET["Jednotka"];
	if($cislo1 > 0) {
		$vysledek = 4 * $cislo1;
	} else {
		$vysledek = "Chyba!";
	}
	return $vysledek;
}

function obsahCtverce() {
	$cislo1;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0) {
		$vysledek = $cislo1 * $cislo1;
	} else {
		$vysledek = "Chyba!";
	}
	return $vysledek;
}

function obvodKosoctverce() {
	$cislo1;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0) {
		$vysledek = $cislo1 * 4; 
	} else {
		$vysledek = "Chyba!";
	}
	return $vysledek;
}

function obsahKosoctverce() {
	$cislo1;
	$cislo2;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0 && $cislo1 > $cislo2) {
		$vysledek = $cislo1 * $cislo2;		
	} else {
		$vysledek = "Chyba!";
	}
	return $vysledek;
}

function obvodKruhu() {
	$cislo1;
	$Jednotka;
	$vysledek;
	$pi = pi();
	$cislo1 = $_GET["cislo1"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0) {
		$vysledek = round($pi * $cislo1, 3);
	} else {
		$vysledek = "Chyba";
	}
	return $vysledek;
}

function obsahKruhu() {
	$cislo1;
	$Jednotka;
	$vysledek;
	$pi = pi();
	$cislo1 = $_GET["cislo1"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0) {
		$vysledek = round(($pi * $cislo1 * $cislo1)/4, 3);
	} else {
		$vysledek = "Chyba";
	}
	return $vysledek;
}

function obvodLichobezniku() {
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$cislo5;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];
	$cislo5 = $_GET["cislo5"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0 && $cislo4 > 0 && $cislo5 > 0) {
		$vysledek = $cislo1 + $cislo2 + $cislo3 + $cislo4;
	} else {
		$vysledek = "Chyba";
	}


	return $vysledek;

}

function obsahLichobezniku(){
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$cislo5;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];
	$cislo5 = $_GET["cislo5"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0 && $cislo4 > 0 && $cislo5 > 0) {
		$vysledek = (($cislo1 + $cislo3) * $cislo5) / 2;
	} else {
		$vysledek = "Chyba";
	}
	return $vysledek;

}

function obvodObdelniku() {
	$cislo1;
	$cislo2;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0 && $cislo2 > 0) {
		$vysledek = 2 * $cislo1 + 2 * $cislo2;
	} else {
		$vysledek = "Chyba";
	}

	return $vysledek;

}

function obsahObdelniku () {
	$cislo1;
	$cislo2;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0 && $cislo2 > 0) {
		$vysledek = $cislo1 * $cislo2;
	} else {
		$vysledek = "Chyba";
	}

	return $vysledek;

}

function obvodRovnobezniku(){
	$cislo1;
	$cislo2;
	$cislo3;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0 && $cislo2 > 0) {
		$vysledek = 2 * $cislo1 + 2 * $cislo2;
	} else {
		$vysledek = "Chyba";
	}
	return $vysledek;

}

function obsahRovnobezniku(){
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 1) {
		$vysledek = $cislo1 * $cislo3;
	} else {
		$vysledek =  "Chyba";
	}

	return $vysledek;

}

function obvodTrojuhelniku() {
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = $cislo1 + $cislo2 + $cislo3;
	} else {
		$vysledek = "Chyba";
	}

	return $vysledek;

}

function obsahTrojuhelniku(){
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = ($cislo1 * $cislo4)/2;
	} else {
		$vysledek = "Chyba";
	}

	return $vysledek;
}

function Pythagorova() {
	$cislo1;
	$cislo2;
	$cislo3;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 == 0 && $cislo2 < $cislo3) {
		$vysledek = "<p class='count'>Strana a: " . sqrt(($cislo3 * $cislo3) - ($cislo2 * $cislo2)) . " " . $Jednotka . "<br/>Strana b: " . $cislo2 . " " . $Jednotka . "<br/>Strana c: " . $cislo3 . " " . $Jednotka ."</p>";
	} elseif ($cislo2 == 0 && $cislo1 < $cislo3) {
		$vysledek = "<p class='count'>Strana a: " . $cislo1 . " " . $Jednotka . "<br/>Strana b: " . sqrt(($cislo3 * $cislo3) - ($cislo1 * $cislo1)) . " " . $Jednotka . "<br/>Strana c: " . $cislo3 . " " . $Jednotka ."</p>";
	} elseif ($cislo3 == 0) {
		$vysledek = "<p class='count'>Strana a: " . $cislo1 . " " . $Jednotka . "<br/>Strana b: " . $cislo2 . " " . $Jednotka . "<br/>Strana c: " . sqrt(($cislo1 * $cislo1) + ($cislo2 * $cislo2)) . " " . $Jednotka . "</p>";
	}else {
		$vysledek = "Chyba";
	}

	return $vysledek;

}

function objemJehlanu() {
	$cislo2;
	$cislo3;
	$cislo4;
	$cislo5;
	$Jednotka;
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];
	$cislo5 = $_GET["cislo5"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo2 > 0 && $cislo3 > 0 && $cislo4 > 0 && $cislo5 > 0) {
		$vysledek = ($cislo3  * $cislo5) / 3;
	} else {
		$vysledek = "Chyba";
	}

	return $vysledek;

}

function povrchJehlanu(){
	$cislo2;
	$cislo3;
	$cislo4;
	$cislo5;
	$Jednotka;
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];
	$cislo5 = $_GET["cislo5"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo2 > 0 && $cislo3 > 0 && $cislo4 > 0 && $cislo5 > 0) {
		$vysledek = $cislo3 + $cislo4;
	} else {
		$vysledek = "Chyba";
	}

	return $vysledek;

}

function povrchKoule(){
	$cislo1;
	$Jednotka;
	$vysledek;
	$pi = pi();
	$cislo1 = $_GET["cislo1"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0) {
		$vysledek = round(4 * $pi * ($cislo1 * $cislo1), 3);
	} else {
		$vysledek = "Chyba";
	}

	return $vysledek;

}

function objemKoule(){
	$cislo1;
	$Jednotka;
	$vysledek;
	$pi = pi();
	$cislo1 = $_GET["cislo1"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0) {
		$vysledek = round(($pi * ($cislo1 * $cislo1 * $cislo1) ) * (4 / 3) , 3);
	}
	else {
		$vysledek = "Chyba";
	}

	return $vysledek;

}

function povrchKrychle(){
	$cislo1;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0) {
		$vysledek = obsahCtverce() * 6;
	} else {
		$vysledek = "Chyba";
	}

	return $vysledek;

}

function obsahKrychle(){
	$cislo1;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0) {
		$vysledek = obsahCtverce() * $cislo1;
	} else {
		$vysledek = "Chyba";
	}

	return $vysledek;

}

function povrchKvadru(){
	$cislo1;
	$cislo2;
	$cislo3;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek = 2 * (($cislo1 * $cislo2) + ($cislo2 * $cislo3) + ($cislo3 * $cislo1));
	} else {
		$vysledek = "Chyba";
	}
	
	return $vysledek;

}

function objemKvadru(){
	$cislo1;
	$cislo2;
	$cislo3;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0) {
		$vysledek =  obsahObdelniku () * $cislo3; 
	} else {
		$vysledek = "Chyba";
	}

	return $vysledek;

}

function povrchValce(){
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0 && $cislo4 > 0) {
		$vysledek = $cislo2 + $cislo3;
	}else {
		$vysledek = "Chyba";
	}

	return $vysledek;

}

function objemValce(){
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];
	$Jednotka = $_GET["Jednotka"];

	if ($cislo1 > 0 && $cislo2 > 0 && $cislo3 > 0 && $cislo4 > 0) {
		$vysledek = obsahKruhu() * $cislo4;
	}else {
		$vysledek = "Chyba";
	}

	return $vysledek;

}

function obvodAobsahLichobezniku(){
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$cislo5;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];
	$cislo5 = $_GET["cislo5"];
	$Jednotka = $_GET["Jednotka"];

	$vysledek = "<p class='count'>Strana a: " . $cislo1 . " " . $Jednotka . "<br/>Strana b: " . $cislo2 . " " . $Jednotka . "<br/>Strana c: " . $cislo3 . " " . $Jednotka . "<br/>Strana d: " . $cislo4 . " " . $Jednotka . "<br/>Výška: " . $cislo5 . " " . $Jednotka . "<br/>Obvod: " . obvodLichobezniku() . " " . $Jednotka . "<br/>Obsah: " . obsahLichobezniku() . " " . $Jednotka . "<sup>2</sup></p>";
	return $vysledek;
}

function obvodAobsahCtverce() {
	$cislo1 = $_GET["cislo1"];
	$Jednotka = $_GET["Jednotka"];
	$vysledek;
	if ($cislo1 > 0) {
		$vysledek = "<p class='count'>Strana a: " . $cislo1 . " " . $Jednotka . "<br/>Obvod: " . obvodCtverce() . $Jednotka . "<br/>Obsah: " . obsahCtverce() ." ". $Jednotka . "<sup>2</sup></p>";
	} else {
		$vysledek = "Chyba!";
	}	
	return $vysledek;
}

function obvodAobsahKosoctverce() {
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$Jednotka = $_GET["Jednotka"];
	$vysledek;
	$vysledek = "<p class='count'>Strana: ".$cislo1." ".$Jednotka."<br/>Výška: ".$cislo2." ".$Jednotka."<br/>Obvod: ".obvodKosoctverce(). " ".$Jednotka."<br/>Obsah: ".obsahKosoctverce()." ".$Jednotka."<sup>2</sup></p>";
	return $vysledek;
}

function obvodAobsahKruhu() {
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$Jednotka = $_GET["Jednotka"];
	$vysledek = "<p class='count'>Průměr kruhu: " . $cislo1 . " " . $Jednotka . "<br/>Obvod: " . obvodKruhu() . " " . $Jednotka . "<br/>Obsah: " . obsahKruhu() . " " . $Jednotka . "<sup>2</sup></p>";
	return $vysledek;
}
function obvodAobsahObdelniku() {
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$Jednotka = $_GET["Jednotka"];

	$vysledek = "<p class='count'>Strana a: " . $cislo1 . " " . $Jednotka . "<br/>Strana b: " . $cislo2 . " " . $Jednotka . "<br/>Obvod: " . obvodObdelniku() . " " . $Jednotka . "<br/>Obsah: " . obsahObdelniku () . " " . $Jednotka . "<sup>2</sup></p>"; 

	return $vysledek;
}
function obvodAobsahRovnobezniku() {
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$Jednotka = $_GET["Jednotka"];

	$vysledek = "<p class='count'>Strana a: " . $cislo1 . " " . $Jednotka . "<br/>Strana b: " . $cislo2 . " " . $Jednotka . "<br/>Výška: " . $cislo3 . " " . $Jednotka . "<br/>Obvod: " . obvodRovnobezniku() . " " . $Jednotka . "<br/>Obsah: " . obsahRovnobezniku() . " " . $Jednotka . "<sup>2</sup></p>";

	return $vysledek;

}

function obvodAobsahTrojuhelniku(){
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];
	$Jednotka = $_GET["Jednotka"];

	$vysledek = "<p class='count'>Strana a: " . $cislo1 . " " . $Jednotka . "<br/>Strana b: " . $cislo2 . " " . $Jednotka . "<br/>Strana c: " . $cislo3 . " " . $Jednotka . "<br/>Výška: " . $cislo4 . " " . $Jednotka ."<br/>Obvod: " . obvodTrojuhelniku() . " " . $Jednotka . "<br/>Obsah: " . obsahTrojuhelniku() . " " . $Jednotka . "<sup>2</sup></p>";

	return $vysledek;
}

function Jehlan() {
	$cislo2;
	$cislo3;
	$cislo4;
	$cislo5;
	$Jednotka;
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];
	$cislo5 = $_GET["cislo5"];
	$Jednotka = $_GET["Jednotka"];

	$vysledek = "<p class='count'>Strana a: " . $cislo2 . " " . $Jednotka . "<br/>Obsah pláště: " . $cislo4 . " " . $Jednotka . "<sup>2</sup><br/>Výška: " . $cislo5 . " " . $Jednotka . "<br/>Povrch: " . povrchJehlanu() . " " . $Jednotka . "<sup>2</sup><br/>Objem: " . objemJehlanu() .  " " . $Jednotka . "<sup>3</sup></p>";

	return $vysledek;
}

function Koule(){
	$cislo1;
	$Jednotka;
	$vysledek;
	$pi = pi();
	$cislo1 = $_GET["cislo1"];
	$Jednotka = $_GET["Jednotka"];

	$vysledek = "<p class='count'>Poloměr: " . $cislo1 . " " . $Jednotka . "<br/>Povrch: " . povrchKoule() . " " . $Jednotka . "<sup>2</sup><br/>Objem: " . objemKoule() . " " . $Jednotka . "<sup>3<sup></p>";

	return $vysledek; 

}

function Krychle() {
	$cislo1;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$Jednotka = $_GET["Jednotka"];

	$vysledek = "<p class='count'>Strana a: " . $cislo1 . " " . $Jednotka ."<br/>Povrch: " . povrchKrychle() . " " . $Jednotka . "<sup>2</sup><br/>Objem: " . obsahKrychle() . " " . $Jednotka . "<sup>3<sup></p>" ;

	return $vysledek;

}

function Kvadr() {
	$cislo1;
	$cislo2;
	$cislo3;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$Jednotka = $_GET["Jednotka"];

	$vysledek = "<p class='count'>Strana a: " . $cislo1 . " " . $Jednotka . "<br/>Strana b: " . $cislo2 . " " . $Jednotka . "<br/> Strana c: " . $cislo3 . " " . $Jednotka . "<br/>Povrch: " . povrchKvadru() . " " . $Jednotka . "<sup>2</sup><br/>Objem: " . objemKvadru() . " " . $Jednotka . "<sup>3<sup></p>";

	return $vysledek;

}

function Valec(){
	$cislo1;
	$cislo2;
	$cislo3;
	$cislo4;
	$Jednotka;
	$vysledek;
	$cislo1 = $_GET["cislo1"];
	$cislo2 = $_GET["cislo2"];
	$cislo3 = $_GET["cislo3"];
	$cislo4 = $_GET["cislo4"];
	$Jednotka = $_GET["Jednotka"];

	$vysledek = "<p class='count'>Poloměr: " . $cislo1 . " " . $Jednotka . "<br/>Obsah podstavy: " . $cislo2 . " " . $Jednotka ."<sup>2</sup><br/>Obsah pláště: " . $cislo3 . " " . $Jednotka . "<sup>2</sup><br/>Výška: " . $cislo4 . " " . $Jednotka . "<br/>Povrch: " . povrchValce() . " " . $Jednotka . "<sup>2</sup><br/>Objem: " . objemValce() . " " . $Jednotka . "<sup>3</sup></p>";

	return $vysledek;

}

echo $vzorec();

?>