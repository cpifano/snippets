<html>
	<head>
		<title>15 Conexion con BD (API mysqli)</title>
	</head>
	
	<body>
	
	<?php
		
		#DEFINIR DATOS DE CONEXION:
		$Host = "localhost";
		$Usuario = "root";
		$Password = "root";
		$BaseDatos = "nombre_bd";
		
		#ABRIR CONEXION:
		function Abrir_Conexion_BD($Host, $Usuario, $Password, $BaseDatos){
			$Conexion = mysqli_connect($Host, $Usuario, $Password, $BaseDatos);
			
			#Comprobar la conexion:
			if ($Conexion -> connect_errno):
				echo "Fallo la conexion con MySQL: (" . $Conexion -> connect_errno . ") " . $Conexion -> connect_error;
			endif;
			
			#Establecer codificacion de caracteres:
			$Conexion -> query("SET NAMES 'utf8'");
			
			return $Conexion;
		}
		
		#CERRAR CONEXION:
		function Cerrar_Conexion_BD($Conexion){
			mysqli_close($Conexion);
		}
		
		
		
		#REALIZAR CONSULTA SQL:
		#Abrir conexion:
		$Conexion = Abrir_Conexion_BD($Host, $Usuario, $Password, $BaseDatos);
		
		#Realizar consulta:
		$Consulta = "SELECT * FROM PERSONA";
		$Resultado = $Conexion -> query($Consulta);
		
		
		#MUESTREO DE INFORMACION;
		#$Fila = $Resultado -> fetch_assoc();
		#Obtiene una fila de resultado como un vector asociativo.
		
		#Recorrer con while:
		echo "<h2>Recorrer con while:</h2>";
		
		while ($Fila = $Resultado -> fetch_assoc()):
			echo $Fila['IDPERSONA'] . " | ";
			echo $Fila['NOMBRE'] . " | ";
			echo $Fila['APELLIDO'];
			echo "<br/><br/>";
		endwhile;
		
		#Recorrer con for:
		echo "<h2>Recorrer con for:</h2>";
		
		for ($NumFila = $Resultado -> num_rows - 1; $NumFila >= 0; $NumFila--) {
		    $Resultado -> data_seek($NumFila);
		    $Fila = $Resultado -> fetch_assoc();
		    echo $Fila['IDPERSONA'] . " | ";
			echo $Fila['NOMBRE'] . " | ";
			echo $Fila['APELLIDO'];
			echo "<br/><br/>";
		}
		
		#TRATAMIENTO DE OBJETO:
		#$objFila = $Resultado -> fetch_object();
		#Devuelve la fila actual de un conjunto de resultados como un objeto.
		echo "<h2>Recorrer con while (Objeto Fila):</h2>";
		
		#Realizar nuevamente la consulta (Inicializo la posicion):
		$Resultado = $Conexion -> query($Consulta);
		
		while ($objFila = $Resultado -> fetch_object()):
	        echo $objFila -> IDPERSONA . " | ";
	        echo $objFila -> NOMBRE . " | ";
			echo $objFila -> APELLIDO;
			echo "<br/><br/>";
	    endwhile;
		
		
		#Liberar el conjunto de resultados:
    	$Resultado -> close();
		
		#Cerrar conexion:
		Cerrar_Conexion_BD($Conexion);
		
	?>
	
	</body>
</html>
