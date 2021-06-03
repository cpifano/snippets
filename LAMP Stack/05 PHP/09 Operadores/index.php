<html>
	<head>
		<title>09 Operadores</title>
	</head>
	<body>
	
<?php
	#OPERADORES ARITMETICOS:-------------------------------------------------------------------------------------#
	#Adicion:
	$A + $B
	
	#Substracion:
	$A - $B
	
	#Multiplicacion:
	$A * $B
	
	#Division:
	$A / $B
	
	#Modulo (Resto de $A dividido entre $B):
	$A % $B
	#------------------------------------------------------------------------------------------------------------#
	
	#OPERADORES LOGICOS:-----------------------------------------------------------------------------------------#
	#AND (Y) (ordenados por orden de precedencia):
	$A AND $B
	$A && $B
	$A & $B
		
	#OR (O) (ordenados por orden de precedencia):
	$A OR $B
	$A || $B
	$A | $B
	
	#XOR (O exclusivo):
	$A ^ $B
	$A XOR $B
	
	#NOT (Negacion):
	~$A
	#------------------------------------------------------------------------------------------------------------#
	
	#OPERADORES DE ASIGNACION:-----------------------------------------------------------------------------------#
	#Asignacion Simple:
	$A = 5;
	$A = "Valor";
	$A = $B;
	
	#Asignacion con operaciones ($A vale 9 y B vale 4):
	$A = ($B = 4 ) + 5;
	
	#Asignacion con adicion o incremento:
	$A += 5;	#Si $A valia 9 ahora vale 14.
	
	#Asignacion de concatenacion:
	$B = "Hola";
	$B .= " Mundo";
	#$B contiene "Hola Mundo".
	#------------------------------------------------------------------------------------------------------------#
	
	#OPERADORES DE COMPARACION:----------------------------------------------------------------------------------#
	#Igualdad:
	$A == $B
	
	#Identidad (Verdadero si son iguales en valor y tipo):
	$A === $B
	
	#Desigualdad (Distinto):
	$A != $B
	
	#Menor que:
	$A < $B
	
	#Mayor que:
	$A > $B
	
	#Menor igual que:
	$A <= $B
	
	#Mayor igual que:
	$A >= $B
	
	#Operador isset:
	#Determina si una variable está definida y no es NULL.
	if (isset($Mi_Variable)):
		echo "Esta variable está definida, así que se imprimirá";
	endif;
	#------------------------------------------------------------------------------------------------------------#
	
	#OPERADORES DE EJECUCION:------------------------------------------------------------------------------------#
	#PHP intentara ejecutar la instruccion dentro de los apostrofes invertidos como si fuera un comando del shell.
	$Salida = `ls -al`;
	echo "<pre> $Salida </pre>";
	#------------------------------------------------------------------------------------------------------------#
?>
	
	</body>
</html>
