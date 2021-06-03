<html>
	<head>
		<title>02 Variables</title>
	</head>
	<body>
	
<?php
	#ASIGNACION:
	$ENTERO = 1234;
	$NEGATIVO = -123;
	$OCTAL = 0123;
	$HEXADECIMAL = 0x12;
	$DECIMAL = 1.23;
	
	#SRINGS:
	$CADENA_01= "Hola mundo,";
	$CADENA_02= " que tal,";
	
	#Concatenación:
	$CONCATENA= "$CADENA_01 $CADENA_02" . " como te va";
	
	#PARRAFO:
$PARRAFO = <<<FIN
Este texto utiliza una sintaxis especial que
permite mostrar varias lineas de texto.
La etiqueta que indica el final del bloque de texto
(y que en este caso es "FIN") debe aparecer en una
linea que contenga solamente el valor de la etiqueta
y un caracter de punto y coma (ni siquiera puede
contener espacios en blanco).
FIN;
	
	#VECTORES:
	$VEC_01[0]="ABC";
	$VEC_01[1]= "XYZ";
	
	$VEC_02[]="123";	#Cargando en la posicion 0
	$VEC_02[]="789";	#Cargando en la posicion 1
	
	$VEC_03 = array(1,2,3,4);
	
	#ARRAYS MULTIDIMENSIONALES:
	$PERSONA = array(
			"IDPersona" => "34684524",
			"Nombre" => "Jose",
			"Apellido" => "Gonzalez",
			"Telefono" => "24457894"
	);

	#ARRAYS MULTIDIMENSIONALES ANIDADOS:
	$FRUTA = array(
			"Manzana" => array(
				"Color" => "Rojo",
				"Sabor" => "Dulce"
			),
			"Frutilla" => array(
				"Color" => "Rojo",
				"Sabor" => "Acido y Dulce"
			),
			"Limon" => array(
				"Color" => "Amarillo",
				"Sabor" => "Acido"
			),
	);
	
	#MUESTREO:
	echo "ENTERO: $ENTERO <br/>";
	echo "NEGATIVO: $NEGATIVO <br/>";
	echo "OCTAL: $OCTAL <br/>";
	echo "HEXADECIMAL: $HEXADECIMAL <br/>";
	echo "DECIMAL: $DECIMAL <br/>";
	
	echo "CADENA 01: $CADENA_01 <br/>";
	echo "CADENA 02: $CADENA_02 <br/>";
	
	echo "CONCATENACION: $CONCATENA <br/>";
	
	echo "<br/>PARRAFO:<br/> $PARRAFO";
	
	echo "<br/><br/>VECTORES:<br/>";
	echo "Vector 01: <br/>Pos 0 = $VEC_01[0] <br/>Pos 1 = $VEC_01[1]<br/>";
	echo "Vector 02: <br/>Pos 0 = $VEC_02[0] <br/>Pos 1 = $VEC_02[1]<br/>";
	
	echo "<br/><br/>ARRAY MULTIDIMENSIONAL:<br/>";
	echo $PERSONA ["Nombre"] . "<br/>";
	echo $PERSONA ["Apellido"] . "<br/>";
	echo $PERSONA ["Telefono"] . "<br/>";
	
	echo "<br/><br/>ARRAY MULTIDIMENSIONAL ANIDADO:<br/>";
	echo $FRUTA ["Manzana"]["Sabor"];
?>
	
	</body>
</html>