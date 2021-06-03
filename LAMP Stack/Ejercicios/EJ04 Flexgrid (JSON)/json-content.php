<?php
	#DEFINIR DATOS DE CONEXION:
	$HOST = "localhost";
	$USUARIO = "root";
	$PASSWORD = "root";
	$BASEDATOS = "PERSONAS_BD";

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
	
	#REALIZAR CONSULTAS:
	function SQL_BD($Consulta){
		#Incluir variables globales:
		global $HOST, $USUARIO, $PASSWORD, $BASEDATOS;
		
		#Abrir conexion:
		$Conexion = Abrir_Conexion_BD($HOST, $USUARIO, $PASSWORD, $BASEDATOS);
		
		#Relizar la consulta:
		$Resultado = $Conexion -> query($Consulta);

		#Cerrar la conexion:
		Cerrar_Conexion_BD($Conexion);
		
		#Devolver resultado:
		return $Resultado;
	}
	
	header("Content-type: application/json");
	
	#CAPTURAR DATOS POST:
	$page = $_POST['page'];
	$rp = $_POST['rp'];
	$sortname = $_POST['sortname'];
	$sortorder = $_POST['sortorder'];
	
	#DETERMINAR PARAMETROS DE CONSULTA:
	if (!$sortname) $sortname = 'IDPERSONA';
	if (!$sortorder) $sortorder = 'ASC';
	
	if($_POST['query']!=''):
		$where = "WHERE `".$_POST['qtype']."` LIKE '%".$_POST['query']."%' ";
	else:
		$where ='';
	endif;
	
	if($_POST['letter_pressed']!=''):
		$where = "WHERE `".$_POST['qtype']."` LIKE '".$_POST['letter_pressed']."%' ";	
	endif;
	
	if($_POST['letter_pressed']=='#'):
		$where = "WHERE `".$_POST['qtype']."` REGEXP '[[:digit:]]' ";
	endif;
	
	$sort = "ORDER BY $sortname $sortorder";
	
	if (!$page) $page = 1;
	if (!$rp) $rp = 10;
	
	$start = (($page-1) * $rp);
	$limit = "LIMIT $start, $rp";
	
	#REALIZAR CONSULTAS:
	$Resultado_01 = SQL_BD ("SELECT * FROM PERSONAS $where $sort $limit");
	$Resultado_02 = SQL_BD ("SELECT COUNT(*) FROM PERSONAS");
	$Conteo = $Resultado_02 -> fetch_row();
	
	$CantElementos = 1;
	while ($objFila = $Resultado_01 -> fetch_object()):
		$rows[$CantElementos] = array(
			'input'		=> '<input type="radio" id="' . $objFila -> IDPERSONA . '" name="radRadioElemento" value="' . $objFila -> IDPERSONA . '"/>',
			'idpersona'	=> $objFila -> IDPERSONA,
			'nombre'	=> $objFila -> NOMBRE,
			'apellido'	=> $objFila -> APELLIDO,
			'pais'		=> $objFila -> PAIS
		);
		$CantElementos++;
	endwhile;
	
	#LIBERAR EL CONJUNTO DE RESULTADOS:
    $Resultado_01 -> close();
	$Resultado_02 -> close();
	
	#CARGAR ARRAY JSON:
	$jsonData = array('page'=>$page,'total'=>$Conteo,'rows'=>array());
	
	foreach($rows AS $rowNum => $row):
		$entry = array('id' => $rowNum,
			'cell'=>array(
				'input' => $row['input'],
				'idpersona' => $row['idpersona'],
				'nombre' => $row['nombre'],
				'apellido' => $row['apellido'],
				'pais' => $row['pais']
			)
		);
		$jsonData['rows'][] = $entry;
    endforeach;
	
	#RETORNAR ARRAY JSON:
	echo json_encode($jsonData);
	
?>