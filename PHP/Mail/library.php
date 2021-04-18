<?php

	function Jmena($jmeno){
		$pocet = strlen($jmeno);
        $s = 0;
		for ($i=0; $i < $pocet; $i++) { 
			$pismeno = $jmeno[$i];
            if (is_numeric($pismeno) || preg_match('/[0-9,\'^£$%&*()}{@#~?><>,|=_+¬-Đ]/', $pismeno)){
            	break;
            } else {
            	$s++;
            }
		}
        if ($s == $pocet && $pocet >= 2){
        	return "true";
        } else {
        	return "false";
        }
	}

	function EMail($mail){
		$email = $mail;
		if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
			return "true";
		} else {
			return "false";
		}
	}

?>