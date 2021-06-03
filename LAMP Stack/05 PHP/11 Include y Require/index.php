<html>
	<head>
		<title>11 Include y Require</title>
	</head>
	<body>
	
<?php
	#REQUIRE:
	#Requiere el contenido de un archivo externo
	#al archivo actualmente ejecutando.
	#Las sentencias condicionales y de bucle
	#no afectan a require() por lo que se
	#ejecutara de igual forma.
	
	require ('header.inc');
	
	
	#INCLUDE:
	#Incluye el contenido de un archivo externo
	#al archivo actualmente ejecutando.
	#Las sentencias condicionales y de bucle
	#si afectan a include() por lo dependera
	#de la estructura como se ejecutara y si
	#es que lo hace.
	
	#Ejemplo 01:
	$Archivo_01 = 'OpcionUno.inc';
	$Archivo_02 = 'OpcionDos.inc';
	
	$Condicion = 1;
	
	if ($Condicion == 1):
		include ($Archivo_01);
	else:
		include ($Archivo_02);
	endif;
	
	echo "<br/><br/>";
	
	#Ejemplo 02:
	$Archivos = array ('Primero.inc', 'Segundo.inc', 'Tercero.inc');
	
	for ($i = 0; $i < count($Archivos); $i++):
		include $Archivos [$i];
	endfor;	
?>
	
	</body>
</html>
