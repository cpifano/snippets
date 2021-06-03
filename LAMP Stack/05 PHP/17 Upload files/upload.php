<html>
	<head>
		<title>17 Upload files</title>
	</head>
	
	<body>

		<?php
			
			#INIICIALIZAR VARIABLES:
			$Errores = true;
			
			#CAPTURAR METADATOS DEL ARCHIVO:
			$NombreArchivo = $_FILES['fleArchivo']['name'];
			$TipoArchivo = $_FILES['fleArchivo']['type'];
			$TamanoArchivo = $_FILES['fleArchivo']['size'];
			$NombreTempArchivo = $_FILES['fleArchivo']['tmp_name'];
			
			echo '<h3>Detalles del archivo</h3>';
			echo $NombreArchivo . "<br/>";
			echo $TipoArchivo . "<br/>";
			echo $TamanoArchivo . "<br/>";
			echo $NombreTempArchivo . "<br/>";
			
			#COMPROBACION DE FORMATO Y TAMAÑO EN KB:
			if ((strpos($TipoArchivo, "gif") || strpos($TipoArchivo, "jpeg") || strpos($TipoArchivo, "png") && ($TamanoArchivo < 1500000))):
				if (is_uploaded_file($NombreTempArchivo)):
					#DETERMINAR UBICACION EN EL SERVIDOR:
					$RutaDestino = "/var/www/images/";
					copy ($NombreTempArchivo, $RutaDestino . $_FILES['fleArchivo']['name']);
					$Errores = false;
				endif;
			else:
				echo '<p>El archivo seleccionado no tiene un formato de imagen admitido por la aplicación o excede el tamaño máximo de 1.5 MB</p>';
			endif;
			
			#ENVIAR MENSAJES DE RESULTADO:
			if (!$Errores):
				echo '<p>El archivo fue enviado con exito: ' . $NombreArchivo . '</p>';
			else:
				echo 'Se ha producido un error al intentar subir el archivo.';
				echo '<a href="index.html">Volver</a>';
			endif;
			
		?>
	
	</body>
</html>