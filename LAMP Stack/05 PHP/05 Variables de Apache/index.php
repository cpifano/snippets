<html>
	<head>
		<title>05 Variables de Apache</title>
	</head>
	<body>
	
<?php
	#VARIABLES DE APACHE:
	echo "VARIABLES DEL SERVIDOR APACHE:<br/>";
	echo "<br/>Direccion IP del Servidor : " . $_SERVER ['SERVER_NAME'];
	echo "<br/>Direccion IP del usuario que esta viendo la pagina actual: " . $_SERVER ['REMOTE_ADDR'];
	echo "<br/>Software y version del servidor: " . $_SERVER ['SERVER_SOFTWARE'];
	echo "<br/>Nombre y revision del protocolo a traves del cual se solicito la pagina: " . $_SERVER ['SERVER_PROTOCOL'];
	echo "<br/>Metodo utilizafo para la peticion: " . $_SERVER ['REQUEST_METHOD'];
	echo "<br/>Directorio raiz bajo el que se ejecuta el script: " . $_SERVER ['DOCUMENT_ROOT'];
	echo "<br/>Ruta absoluta donde se aloja el script ejecutandose: " . $_SERVER ['SCRIPT_FILENAME'];
	echo "<br/>Ruta relativa donde se aloja el script ejecutandose: " . $_SERVER ['SCRIPT_NAME'];
	echo "<br/>Puerto que esta utilizando el usuario para comunicarse con el servidor: " . $_SERVER ['REMOTE_PORT'];
	echo "<br/>Puerto que esta utilizando el servidor para comunicarse con los usuarios: " . $_SERVER ['SERVER_PORT'];
	echo "<br/><br/>Cadena de descripcion del servidor completa: " . $_SERVER ['SERVER_SIGNATURE'];
?>
	
	</body>
</html>