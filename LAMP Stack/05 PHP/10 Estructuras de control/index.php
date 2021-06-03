<html>
	<head>
		<title>10 Estructuras de control</title>
	</head>
	<body>
	
<?php
	#ESTRUCTURAS DE CONTROL:
		
	#SELECCION SIMPLE:
	#If:
	if (Condicion){
		Sentencias_if;
	}
	
	if (Condicion):
		Sentencias;
	endif;
	
	#Else:
	if (Condicion){
		Sentencias_if;
	} else {
		Sentencias_else;
	}
	
	if (Condicion):
		Sentencias_if;
	else:
		Sentencias_else;
	endif;
	
	#ElseIf:
	if (Condicion 01){
		Sentencias_if;
	} elseif (Condicion 02) {
		Sentencias_elseif;
	} else {
		Sentencias_else;
	}
	
	if (Condicion 01):
		Sentencias_if;
	elseif (Condicion 02):
		Sentencias_elseif;
	else:
		Sentencias_else;
	endif;
	
	#SELECION MULTIPLE:
	#Switch:
	#Break es una estructura necesaria que escapa de las
	#estructuras de control iterantes.
	switch ($Expresion){
		case 0:
			Sentencias;
			break;
		case 1:
			Sentencias;
			break;
		default:
			Sentencias;
	}
	
	switch ($Expresion):
		case 0:
			Sentencias;
			break;
		case 1:
			Sentencias;
			break;
		default:
			Sentencias;
	endswitch;

	#En caso de evaluar Cadenas con Numeros:
	switch ($Expresion){
		case "0":
			Sentencias;
			break;
		case "1":
			Sentencias;
			break;
		case "Palabra":
			Sentencias;
			break;
		default:
			Sentencias;
	}
	
	switch ($Expresion):
		case "0":
			Sentencias;
			break;
		case "1":
			Sentencias;
			break;
		case "Palabra":
			Sentencias;
			break;
		default:
			Sentencias;
	endswitch;
	
	#ITERACION:
	#While (Control previo):
	while (Expresion) {
		Sentencias;
	}
	
	while (Expresion):
		Sentencias;
	endwhile;
	
	#Do While (Control posterior):
	do {
		Sentencias;
	} while (Expresion);
	
	#For (Subrango):
	for ($i=0; $i<=10; $i++){
		Sentencias;
	}
	
	for ($i=0; $i<=10; $i++):
		Sentencias;
	endfor;
	
	#For Each (Recorre un vector hasta NULL):
	$Vector = array(1,2,4,8,16,32,64);
	
	foreach ($Vector as $ValorActual){
		echo "</br>Valor actual $ValorActual";
	}
	
	foreach ($Vector as $PosicionActual => $ValorActual){
		echo "</br>Llave = $PosicionActual y Valor = $ValorActual";
	}
	
	foreach ($Vector as $ValorActual):
		echo "</br>Valor actual $ValorActual";
	endforeach;
	
	foreach ($Vector as $PosicionActual => $ValorActual):
		echo "</br>Llave = $PosicionActual y Valor = $ValorActual";
	endforeach;
	
	#Continue:
	#Continue es otra estructura de corte como break
	#la saltar el resto de las sentencias de una 
	#estructura de bucle y continuar la ejecucion.
	while (Expresion):
		Sentencias;
		if (Condicion):
			continue;
		endif;
		Sentencias;
	endwhile;
?>
	
	</body>
</html>
