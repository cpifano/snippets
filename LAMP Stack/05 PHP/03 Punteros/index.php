<html>
	<head>
		<title>03 Punteros</title>
	</head>
	<body>
	
<?php
	
	#VARIABLES ENTERAS:
	$Num_01 = 10;
	$Num_02 = 20;
	
	#SEÑALAR PUNTERO a NUM 01 "&":
	$PUNTERO = &$Num_01;
	
	#PASAJE POR REFERENCIA:
	$PUNTERO = $Num_01 + $Num_02;
	
	echo "Numero 01: " . $Num_01 . "<br/>Numero 02: " . $Num_02;
	
?>
	
	</body>
</html>