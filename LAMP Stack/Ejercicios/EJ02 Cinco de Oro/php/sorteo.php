<?php
	#DETERMINAR TIEMPO DE EJECUCION:
	set_time_limit(3600);

	#DETERMINAR VALORES MINIMOS Y MAXIMOS:
	$Min = "1";
	$Max = "44";
	
	#CAPTURAR CANTIDAD DE SORTEOS (COOKIE);
	$Cantidad = $_COOKIE["CookieCantidad"];
	$Cantidad++;
	
    #COMBINACION MAS SORTEADA:
    $vecCombinacion [5];
	
    #NUMEROS MAS SORTEADOS:
    $vecNumeros [5];
	
	#VECTOR DE JUEGO:
	$vecJuego [5];
	
	#INICIALIZACION DE BOLILLAS:
	for ($f=0; $f<5; $f++):
		$vecCombinacion[$f]="00";
		$vecNumeros[$f]="00";
	endfor;
	
	#INICIALIZACION DE ARRAY MULTIDIMENSIONAL (JUGADAS REALIZADAS):
	for ($i=$Min; $i<=$Cantidad; $i++):
		$vecJugadas [$i] = (
			array('1' => '0', '2' => '0', '3' => '0', '4' => '0', '5' => '0', 'Cantidad' => '0')
		);
	endfor;
	
	#INICIALIZACION DE ARRAY MULTIDIMENSIONAL (NUMEROS REPETIDOS):
	for ($i=$Min; $i<=$Max; $i++):
		$vecmNumRepetidos [$i] = (
			array('Cantidad' => '0')
		);
	endfor;
	
	#SORTEAR:
	for ($Sorteo=1; $Sorteo<$Cantidad; $Sorteo++):
		
		#Realizar sorteo:
		for ($x=0; $x<5; $x++):
			$vecJuego[$x] = rand($Min, $Max);
				
			#Controlar que no existan bolillas repetidas:
			if($x > 1):
				for($r=1; $r<$x; $r++):
					if($vecJuego[$x] == $vecJuego[$r]):
						$x--;
						break;
					endif;
				endfor;
			endif;
		endfor;

		#Guardado y muestreo resultados:
		if ($Sorteo == 1):
			for ($y=0; $y<5; $y++):
				#Agregar un cero a los numeros de una sola cifra:
				if ($vecJuego[$y]<10):
					$vecCombinacion[$y] = "0" . "$vecJuego[$y]";
					$vecNumeros[$y] = "0" . "$vecJuego[$y]";
				else:
					$vecCombinacion[$y] = $vecJuego[$y];
					$vecNumeros[$y] = $vecJuego[$y];
				endif;
				
				#Guardar la jugada en el vector multidimensional:
				$vecJugadas[$Sorteo][$y] = $vecJuego[$y];
				
				#Iniciar la cantidad de la jugada:
				$vecJugadas[$Sorteo]['Cantidad'] = 1;
			endfor;
			
			#Controlar repeticiones individuales (Para el primer sorteo):
			for ($a=0; $a<5; $a++):
				#Capturar el numero de la jugada:
				$Numero = $vecJuego[$a];
				
				#Capturar cantidad actual de ese numero:
				$CantActual = $vecmNumRepetidos[$Numero]['Cantidad'];
				
				#Determinar la nueva cantidad:
				$vecmNumRepetidos[$Numero]['Cantidad'] = $CantActual + 1;
			endfor;
		else:
			#Guardar las siguientes jugadas:
			for ($q=0; $q<5; $q++):
				$vecJugadas[$Sorteo][$q] = $vecJuego[$q];
				
				#Iniciar la cantidad de la jugada:
				$vecJugadas[$Sorteo]['Cantidad'] = 1;
			endfor;
			
			#Controlar repeticiones individuales (Para el resto de los sorteos):
			for ($a=0; $a<5; $a++):
				#Capturar el numero de la jugada:
				$Numero = $vecJuego[$a];
				
				#Capturar cantidad actual de ese numero:
				$CantActual = $vecmNumRepetidos[$Numero]['Cantidad'];
				
				#Determinar la nueva cantidad:
				$vecmNumRepetidos[$Numero]['Cantidad'] = $CantActual + 1;
			endfor;
			
			#Controlar repeticiones de las jugadas:
			for ($ContSorteo=1; $ContSorteo<$Cantidad; $ContSorteo++):
				#Inicializo en contador para cada sorteo:
				$Contador = "0";
				
				for ($h=0; $h<5; $h++):
					#Capturar el elemento actual de la jugada:
					$Elemento = $vecJugadas[$ContSorteo][$h];
					
					#Controlar si el elenebti esta dentro del vector de juego:
				    if (in_array($Elemento, $vecJuego)):
				        $Contador++;
				    endif;
				endfor;
				
				#Aumentar la cantidades:
				if ($Contador == 5):
					#Aumentar la cantidad de elementos aneriores identicos:
					$vecJugadas[$ContSorteo]['Cantidad']++;
					
					#Asignar el mismo valor a su identico en el vector multidimensional:
					$vecJugadas[$Sorteo]['Cantidad'] = $vecJugadas[$ContSorteo]['Cantidad'];
				endif;
			endfor;
			
			#Quitar resudio +1 por incremento de todas las iteraciones del bucle:
			$vecJugadas[$Sorteo]['Cantidad']--;
			
		endif;
	endfor;
	
	#NUMEROS INDIVIDUALES MAS SORTEADOS:
	#Convertir el array multidimensional en unidimensional:
	for ($n=$Min; $n<=$Max; $n++):
		$vecUnidimensional[$n] = $vecmNumRepetidos[$n]['Cantidad'];
	endfor;
	
	$Contador = "0";
	
	while ($Contador<=5):
		#Determinar la maxima cantidad de repeticion:
		$MaximaRepeticion = max($vecUnidimensional);
		
		for ($n=$Min; $n<=$Max; $n++):
			if($vecUnidimensional[$n] == $MaximaRepeticion):
				$Contador++;
				
				if ($Contador <= 5):
					#Agregar un cero a los numeros de una sola cifra:
					if ($n < 10):
						$vecNumeros[$Contador-1] = "0" . "$n";
					else:
						$vecNumeros[$Contador-1] = $n;
					endif;
					
					#Elimino posicion:
					$vecUnidimensional[$n] = "0";
				else:
					#Elimino posicion exedentes:
					$vecUnidimensional[$n] = "0";
					break;
				endif;
			endif;
		endfor;
	endwhile;
	
	
	#COMBINACION DE NUMEROS MAS SORTEADA:
	for ($Sorteo=1; $Sorteo<$Cantidad; $Sorteo++):
		if ($vecJugadas[$Sorteo]['Cantidad'] > 1):
			$ControlCombinacion = "V";
			break;
		else:
			$ControlCombinacion = "F";
		endif;
	endfor;
	
	#Realizar el control de las jugadas si se repitio alguna:
	if ($ControlCombinacion == "V"):
		#Convertir el array multidimensional en unidimensional:
		for ($Sorteo=1; $Sorteo<$Cantidad; $Sorteo++):
			$vecUnidimensional[$Sorteo] = $vecJugadas[$Sorteo]['Cantidad'];
		endfor;
		
		#Determinar la maxima cantidad de repeticion:
		$MaximaRepeticion = max($vecUnidimensional);
		
		for ($Sorteo=1; $Sorteo<$Cantidad; $Sorteo++):
			if($vecUnidimensional[$Sorteo] == $MaximaRepeticion):
				$JugadaElegida = $Sorteo;
			endif;
		endfor;
		
		#Mostrar la jugada con mas repeticiones:	
		for ($q=0; $q<5; $q++):
			#Agregar un cero a los numeros de una sola cifra:
			if ($vecJugadas[$JugadaElegida][$q] < 10):
				$vecCombinacion[$q] = $vecJugadas[$JugadaElegida][$q];
				$vecCombinacion[$q] = "0" . "$vecCombinacion[$q]";
			else:
				$vecCombinacion[$q] = $vecJugadas[$JugadaElegida][$q];
			endif;
		endfor;
	endif;
?>