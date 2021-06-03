<?php
	#Inicializar una sesion y crear el ID de la sesion:
	session_start();
	
	#Chequeo de variable de sesion:
	if (!isset($_SESSION['Logeado'])):
		header("Location: index.html");
	else:
		#Libera todas las variables de sesion registradas:
		session_unset();
	
		#Destruye toda la informacion registrada de una sesion;
		session_destroy();
		
		#Redireccionar hacia index:
		header("Location: index.html");
	endif;
?>