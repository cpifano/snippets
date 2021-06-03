<?php
	#Inicializar una sesión y crear el ID de la sesión:
	session_start();
	echo "La sesión ha sido iniciada...";
	
	echo "<br/><br/>";
	
	#Devuelve el identificador de la sesión actual:
	echo "ID de sesión: " . session_id();
	
	echo "<br/><br/>";
	
	#Devuelve el nombre de la sesión:
	echo "Nombre de sesión: " . session_name();
	
	echo "<br/><br/>";
	
	#Generar un nuevo ID de sesión:
	session_regenerate_id();
	echo "Nuevo ID de sesión: " . session_id();
	
	#Libera todas las variables de sesión registradas:
	session_unset();
	
	echo "<br/><br/>";
	
	#Crear variable de sesión:
	$_SESSION["VariableSesion"] = "Contenido";
	echo "Variable de sesión: " . $_SESSION["VariableSesion"];
	
	#Destruye toda la información registrada de una sesión;
	session_destroy();
?>