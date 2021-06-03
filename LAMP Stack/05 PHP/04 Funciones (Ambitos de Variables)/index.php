<html>
	<head>
		<title>04 Funciones</title>
	</head>
	<body>
	
<?php
	#Variables Globales:
	$Num_01 = 10;
	$Num_02 = 20;

	#DECLARACION DE FUNCION SUMA:
	function Suma ($A, $B) {
		$Num_03 = $A + $B;
		echo "<br/>Resultado de suma = " . $Num_03;
		#Num_03, A y B solo existen dentro del
		#ambito de la funcion suma.
	}	

	#DECLARACION DE FUNCION RESTA:
	function Resta (){
		#En PHP no existen las variables
		#globales dentro del ambito de una funcion.
		#Es decir, Num_01 y Num_02 aun no existen
		#dentro de esta funcion.
		$Num_01 = 400;
		$Num_02 = 50;
		$Num_03 =  $Num_01 - $Num_02;
		echo "<br/>Resultado de resta = " . $Num_03;
	}
	
	#DECLARACION DE FUNCION PRODUCTO:
	function Producto (){
		#Si deseo acceder a alguna variable global
		#dentro del ambito de una funcion
		#debo referenciarla antes de utilizarla.
		global $Num_01, $Num_02;
		
		$Num_03 = $Num_01 * $Num_02;
		echo "<br/>Resultado de producto = " . $Num_03;
	}
	
	#DECLARACION DE FUNCION DIVISION:
	function Division (){
		global $Num_01, $Num_02;
		$Num_03 = $Num_02 / $Num_01;
		return $Num_03;
	}
	
	#DECLARACION DE FUNCION AUMENTO:
	function Aumento (){
		$A = 0;
		$A++;
		echo "<br/>Variable simple = " . $A;
		
		#La variable estatica conservara su valor al
		#salir de la funcion, no existira fuera de
		#la funcion pero si se vuelve a invocar a
		#esta funcion su valor no se perdera.
		static $B = 0;
		$B++;
		echo "<br/>Variable estatica = " . $B;
	}
	
	#DECLARACION DE FUNCION SALUDO:
	#Se pueden establecer valores por defecto
	#en caso de que no se ingrese ningun valor
	#a la hora de invocar a la funcion.
	function Saludo ($Nombre = "Juan"){
		echo "<br/>Hola $Nombre como estas?<br/>";
	}
	
	#INVOCACION DE FUNCION SALUDO:
	echo "<br/>Saludo por defecto:";
	Saludo();
	
	echo "<br/>Saludo con parametro:";
	Saludo("Jose");
	
	
	#INVOCACION DE FUNCION SUMA (PASAJE POR VALOR):
	Suma($Num_01, $Num_02);
	
	#INVOCACION DE FUNCION RESTA:
	Resta();
	
	#INVOCACION DE FUNCION PRODUCTO:
	Producto();
	
	#INVOCACION DE FUNCION DIVISION (CON RETORNO):
	$Resultado = Division();
	echo "<br/>Resultado de division = " . $Resultado;
	
	#PRIMER IVOCACION DE AUMENTO:
	echo "<br/><br/>Primer ivocacion de aumento:";
	Aumento();
	
	#SEGUNDA INVOCAION DE AUMENTO:
	echo "<br/><br/>Segunda ivocacion de aumento:";
	Aumento();
?>
	
	</body>
</html>