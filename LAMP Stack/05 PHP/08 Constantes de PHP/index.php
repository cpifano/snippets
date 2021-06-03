<html>
	<head>
		<title>08 Constantes de PHP</title>
	</head>
	<body>
	
<?php
	#CONSTANTES POR DEFECTO:
	echo "<br/>CONSTANTES DE PHP<br/>";
	echo "<br/>Nombre del script ejecutandose: " . __FILE__;
	echo "<br/>Numero de linea actual en ejecucion: " . __LINE__;
	echo "<br/>Version de PHP y SO: " . PHP_VERSION;
	echo "<br/>Nombre del SO: " . PHP_OS;

	#DEFINIR CONSTANTES:
	echo "<br/><br/>CONSTANTES PROPIAS<br/>";
	define ("MICONSTANTE", "Hola soy constante");
	echo "<br/>" . MICONSTANTE;
	
	#EJEMPLO DE USO DE CONSTANTES:
	function Reporte_Error ($Archivo, $Linea, $Mensaje){
		echo "<br/><br/>ERROR!";
		echo "<br/>Ha ocurrido un erron en el archivo: $Archivo";
		echo "<br/>En la linea numero: $Linea";
		echo "<br/>Recomendacion: $Mensaje";
	}
	
	#INVOCAR FUNCION DE ERRORES:
	Reporte_Error(__FILE__, __LINE__, "Comuniquese con un administrador");
	
?>
	
	</body>
</html>
