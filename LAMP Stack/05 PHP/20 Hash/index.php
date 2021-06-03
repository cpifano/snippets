<?php
	#MD5
	echo "MD5: " . hash('md5', 'Contraseña') . " <br/><br/>";
	
	#SHA256
	echo "SHA256: " . hash('sha256', 'Contraseña') . " <br/><br/>";
	
	#Haval160,4
	echo "Haval160: " . hash('haval160,4', 'Contraseña') . " <br/><br/>";
	
	#Ripemd160
	echo "Ripemd160: " . hash('ripemd160', 'Contraseña') . " <br/><br/>";
?>