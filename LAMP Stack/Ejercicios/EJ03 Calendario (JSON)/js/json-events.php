<?php
		
	#DEFINIR DATOS DE CONEXION:
	$Host = "localhost";
	$Usuario = "root";
	$Password = "root";
	$BaseDatos = "CALENDARIO";
	
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
	$Consulta = "SELECT * FROM EVENTOS";
	$Resultado = $Conexion -> query($Consulta);
	
	#ARRAY MULTIDIMENSIONAL EVENTO:
	$EVENTOS = array();
	
	#MUESTREO DE INFORMACION;
	while ($objFila = $Resultado -> fetch_object()):
		if (($objFila -> ALLDAY) == 0):
			$EVENTOS[] = array(
				'id'		=> $objFila -> IDEVENTO,
				'title'		=> $objFila -> TITULO,
				'start'		=> $objFila -> INICIO,
				'end'		=> $objFila -> FIN,
				'allDay'	=> false,
				'color'		=> $objFila -> COLOR,
				'textColor'	=> $objFila -> TEXTCOLOR
			);
		else:
			$EVENTOS[] = array(
				'id'		=> $objFila -> IDEVENTO,
				'title'		=> $objFila -> TITULO,
				'start'		=> $objFila -> INICIO,
				'end'		=> $objFila -> FIN,
				'allDay'	=> true,
				'color'		=> $objFila -> COLOR,
				'textColor'	=> $objFila -> TEXTCOLOR
			);
		endif;
    endwhile;
	
	
	#Liberar el conjunto de resultados:
   	$Resultado -> close();
	
	#Cerrar conexion:
	Cerrar_Conexion_BD($Conexion);
	
	echo json_encode($EVENTOS);
	
?>