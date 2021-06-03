<?php
	#MOSTRAR TODAS LAS JUGADAS:
	echo '<h2>Listado de jugadas y sus repeticiones</h2>';
	echo '<table class="Resultados">';
		echo '<tr>';
			$Columnas = "10";
			$Incremento = "1";
			for ($Sorteo=1; $Sorteo<$Cantidad; $Sorteo++):
				
				if ($Sorteo <= $Columnas):	
					echo '<td>';
					echo "<strong>Sorteo Nº: " . $Sorteo . "</strong><br/>";
					
					for ($f=0; $f<5; $f++):
						echo $vecJugadas[$Sorteo][$f] . " | ";
					endfor;
					
					echo "<br/>Repeticiones: " . $vecJugadas[$Sorteo]['Cantidad'];
					echo '</td>';
				elseif ($Sorteo != $Cantidad):
					$Sorteo--;
					$Incremento++;
					$Columnas = 10 * $Incremento;
					echo '<tr>';
				else:
					$FinColumna = $Columnas / 10;
					for ($m=1; $m<=$FinColumna; $m++):
						echo '</tr>';
					endfor;
				endif;
			endfor;
		echo '</tr>';
	echo '</table>';

	echo '<br/><br/><hr/><br/>';
	
	#MOSTRAR TODOS LOS NUMEROS Y CANTIDADES;
	echo '<h2>Listado de números y sus repeticiones</h2>';
	echo '<table class="Resultados">';
		echo '<tr>';
			$Columnas = "10";
			$Incremento = "1";
			for ($i=$Min; $i<=$Max; $i++):
				if ($i <= $Columnas):
					echo '<td>';
						echo "<strong>Número: ". $i . "</strong><br/>";
						echo "Repeticiones: " . $vecmNumRepetidos[$i]['Cantidad'] . "<br/><br/>";
					echo '</td>';
				elseif ($i != $Max):
					$i--;
					$Incremento++;
					$Columnas = 10 * $Incremento;
					echo '<tr>';
				else:
					$FinColumna = $Columnas / 10;
					for ($m=1; $m<=$FinColumna; $m++):
						echo '</tr>';
					endfor;
				endif;
			endfor;
		echo '</tr>';
	echo '</table>';
	
	echo '<br/><br/>';
?>